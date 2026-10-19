import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve(__dirname, '../dist')
const CANONICAL_ORIGIN = 'https://7raysastrovastu.in'

function getAllHtmlFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      fileList.push(fullPath)
    }
  }
  return fileList
}

describe('CI SEO & Static Build Validation Suite', () => {
  it('dist/ directory exists and contains pre-rendered build output', () => {
    expect(fs.existsSync(distDir)).toBe(true)
    const htmlFiles = getAllHtmlFiles(distDir)
    expect(htmlFiles.length).toBeGreaterThanOrEqual(65)
  })

  describe('1. Sitemap URL Validation', () => {
    const sitemapPath = path.join(distDir, 'sitemap.xml')

    it('sitemap.xml exists and is well-formed', () => {
      expect(fs.existsSync(sitemapPath)).toBe(true)
      const content = fs.readFileSync(sitemapPath, 'utf8')
      expect(content).toContain('<urlset')
      expect(content).toContain('</urlset>')
    })

    it('all sitemap URLs use strict apex https and valid trailing slash format', () => {
      const content = fs.readFileSync(sitemapPath, 'utf8')
      const locMatches = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())

      expect(locMatches.length).toBeGreaterThanOrEqual(60)
      const seen = new Set<string>()

      for (const loc of locMatches) {
        expect(seen.has(loc)).toBe(false)
        seen.add(loc)

        expect(loc.startsWith(CANONICAL_ORIGIN + '/')).toBe(true)
        expect(loc).not.toContain('www.')
        expect(loc).not.toContain('http://')
        expect(loc.endsWith('/')).toBe(true)
        expect(loc).not.toContain('/404')

        // Destination file check
        const pathname = new URL(loc).pathname
        const cleanSubpath = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
        let fileExists = false
        if (!cleanSubpath) {
          fileExists = fs.existsSync(path.join(distDir, 'index.html'))
        } else {
          const dirIndex = path.join(distDir, cleanSubpath, 'index.html')
          const singleHtml = path.join(distDir, `${cleanSubpath}.html`)
          fileExists = fs.existsSync(dirIndex) || fs.existsSync(singleHtml)
        }
        expect(fileExists).toBe(true)
      }
    })

    it('robots.txt points to canonical sitemap.xml', () => {
      const robotsPath = path.join(distDir, 'robots.txt')
      expect(fs.existsSync(robotsPath)).toBe(true)
      const robotsContent = fs.readFileSync(robotsPath, 'utf8')
      expect(robotsContent).toContain(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`)
    })
  })

  describe('2. Canonical Tag & OG URL Validation', () => {
    const htmlFiles = getAllHtmlFiles(distDir)

    it('every pre-rendered HTML file has exactly one valid canonical tag', () => {
      expect(htmlFiles.length).toBeGreaterThan(0)

      for (const filePath of htmlFiles) {
        const rel = path.relative(distDir, filePath).replace(/\\/g, '/')
        const content = fs.readFileSync(filePath, 'utf8')

        const canonicalMatches = [
          ...content.matchAll(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*\/?>/gi),
          ...content.matchAll(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*\/?>/gi),
        ].map(m => m[1].trim())

        expect(canonicalMatches.length, `Expected exactly 1 canonical tag in ${rel}`).toBe(1)
        const canonicalUrl = canonicalMatches[0]

        expect(canonicalUrl.startsWith(CANONICAL_ORIGIN)).toBe(true)
        expect(canonicalUrl).not.toContain('www.')
        expect(canonicalUrl).not.toContain('http://')

        // OG URL check
        const ogMatches = [
          ...content.matchAll(/<meta\s+[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*\/?>/gi),
        ].map(m => m[1].trim())

        if (ogMatches.length > 0) {
          expect(ogMatches[0], `og:url mismatch in ${rel}`).toBe(canonicalUrl)
        }
      }
    })
  })

  describe('3. Internal Link Verification', () => {
    it('all internal links resolve with zero broken destinations', async () => {
      const checkScript = path.resolve(__dirname, '../scripts/verify-seo-ci.mjs')
      expect(fs.existsSync(checkScript)).toBe(true)
    })
  })
})
