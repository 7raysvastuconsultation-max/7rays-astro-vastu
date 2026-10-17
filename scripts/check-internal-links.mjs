#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')

const isStrict = process.argv.includes('--strict') || process.env.FAIL_ON_BROKEN_LINKS === 'true'

let rawSiteUrl = (process.env.VITE_SITE_URL || '').trim()
if (
  !rawSiteUrl ||
  rawSiteUrl.includes('localhost') ||
  rawSiteUrl.includes('127.0.0.1') ||
  rawSiteUrl.startsWith('http://')
) {
  rawSiteUrl = 'https://7raysastrovastu.in'
}
const SITE_DOMAIN = new URL(rawSiteUrl).host.toLowerCase()

console.log('🔍 [Link Crawler] Auditing internal links across pre-rendered HTML pages...')
console.log(`📂 Scanning distribution folder: ${distDir}`)
if (isStrict) {
  console.log('⚠️  Strict mode enabled: build will fail if broken links are discovered.')
}

if (!fs.existsSync(distDir)) {
  console.error(`❌ Build output directory not found: ${distDir}`)
  console.error('Run the build pipeline (vite build && prerender) before checking links.')
  process.exit(1)
}

// 1. Load redirects from _redirects to validate intentional aliases/redirects
const exactRedirects = new Set()
const wildcardRedirects = []

const redirectsPaths = [
  path.join(distDir, '_redirects'),
  path.join(rootDir, 'public', '_redirects'),
  path.join(rootDir, '_redirects'),
]

for (const redirPath of redirectsPaths) {
  if (fs.existsSync(redirPath)) {
    const lines = fs.readFileSync(redirPath, 'utf8').split('\n')
    for (const rawLine of lines) {
      const line = rawLine.trim()
      if (!line || line.startsWith('#')) continue
      const parts = line.split(/\s+/)
      if (parts.length >= 2) {
        let fromPath = parts[0]
        if (fromPath.startsWith('http://') || fromPath.startsWith('https://')) {
          try {
            fromPath = new URL(fromPath).pathname
          } catch {
            continue
          }
        }
        if (fromPath.endsWith('/*')) {
          wildcardRedirects.push(fromPath.slice(0, -2))
        } else {
          exactRedirects.add(fromPath.replace(/\/$/, ''))
          exactRedirects.add(fromPath.endsWith('/') ? fromPath : `${fromPath}/`)
        }
      }
    }
    break
  }
}

// 2. Recursively find all HTML files in dist/
function getAllHtmlFiles(dir, fileList = []) {
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

const htmlFiles = getAllHtmlFiles(distDir)
if (htmlFiles.length === 0) {
  console.warn('⚠️ No pre-rendered HTML files found in dist directory to audit.')
  process.exit(0)
}

console.log(`📄 Discovered ${htmlFiles.length} pre-rendered HTML files to audit.`)

// Map HTML file path to website route URL
function htmlFileToPagePath(filePath) {
  const rel = path.relative(distDir, filePath).replace(/\\/g, '/')
  if (rel === 'index.html') return '/'
  if (rel.endsWith('/index.html')) {
    return '/' + rel.slice(0, -'/index.html'.length)
  }
  if (rel.endsWith('.html')) {
    return '/' + rel.slice(0, -'.html'.length)
  }
  return '/' + rel
}

// 3. Helper to verify whether a destination exists in dist
function destinationExists(targetPath) {
  let cleanPath = targetPath.split('?')[0].split('#')[0].trim()
  if (!cleanPath || cleanPath === '/') {
    return fs.existsSync(path.join(distDir, 'index.html'))
  }

  // Check redirects
  const normalizedPath = cleanPath.replace(/\/$/, '')
  if (exactRedirects.has(normalizedPath) || exactRedirects.has(cleanPath)) {
    return true
  }
  for (const prefix of wildcardRedirects) {
    if (cleanPath.startsWith(prefix)) {
      return true
    }
  }

  const relPath = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath

  // Case A: Direct file or directory
  const exactFilePath = path.join(distDir, relPath)
  if (fs.existsSync(exactFilePath)) {
    const stat = fs.statSync(exactFilePath)
    if (stat.isFile()) return true
    if (stat.isDirectory() && fs.existsSync(path.join(exactFilePath, 'index.html'))) return true
  }

  // Case B: HTML directory index route (e.g., /about -> dist/about/index.html)
  const asDirectoryIndex = path.join(distDir, relPath, 'index.html')
  if (fs.existsSync(asDirectoryIndex)) return true

  // Case C: HTML single file route (e.g., /404 -> dist/404.html)
  const asHtmlFile = path.join(distDir, `${relPath}.html`)
  if (fs.existsSync(asHtmlFile)) return true

  // Case D: Trailing slash variant
  const strippedRel = relPath.replace(/\/$/, '')
  if (fs.existsSync(path.join(distDir, strippedRel, 'index.html'))) return true
  if (fs.existsSync(path.join(distDir, `${strippedRel}.html`))) return true

  return false
}

// 4. Crawl links across all pre-rendered HTML files
const brokenLinks = new Map() // targetPath -> { sources: Map(sourcePage -> Set(anchorText)) }
let totalLinksScanned = 0
const verifiedTargets = new Map() // targetPath -> boolean (cached existence)

const linkRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gis

for (const filePath of htmlFiles) {
  const sourcePage = htmlFileToPagePath(filePath)
  const content = fs.readFileSync(filePath, 'utf8')

  let match
  while ((match = linkRegex.exec(content)) !== null) {
    const rawHref = match[1].trim()
    const anchorText = match[2].replace(/<[^>]+>/g, '').trim().slice(0, 50)

    // Skip empty, pure hash anchors, or non-web protocols
    if (!rawHref || rawHref.startsWith('#')) continue
    if (/^(mailto:|tel:|javascript:|sms:|whatsapp:|callto:|intent:)/i.test(rawHref)) continue

    let targetPath = rawHref

    // Handle absolute URLs
    if (/^https?:\/\//i.test(rawHref)) {
      try {
        const parsed = new URL(rawHref)
        if (parsed.host.toLowerCase() !== SITE_DOMAIN && !parsed.host.toLowerCase().endsWith(`.${SITE_DOMAIN}`)) {
          // External link
          continue
        }
        targetPath = parsed.pathname + parsed.search + parsed.hash
      } catch {
        continue
      }
    } else if (rawHref.startsWith('//')) {
      continue
    }

    // Resolve relative URLs relative to sourcePage
    if (!targetPath.startsWith('/')) {
      const sourceDir = path.dirname(sourcePage)
      targetPath = path.posix.normalize(path.posix.join(sourceDir === '.' ? '/' : sourceDir, targetPath))
    }

    const cleanPath = targetPath.split('?')[0].split('#')[0]
    totalLinksScanned++

    let exists = verifiedTargets.get(cleanPath)
    if (exists === undefined) {
      exists = destinationExists(cleanPath)
      verifiedTargets.set(cleanPath, exists)
    }

    if (!exists) {
      if (!brokenLinks.has(cleanPath)) {
        brokenLinks.set(cleanPath, { sources: new Map() })
      }
      const entry = brokenLinks.get(cleanPath)
      if (!entry.sources.has(sourcePage)) {
        entry.sources.set(sourcePage, new Set())
      }
      if (anchorText) {
        entry.sources.get(sourcePage).add(anchorText)
      }
    }
  }
}

// 5. Output Audit Report
console.log('\n======================================================')
console.log('📊 INTERNAL LINK AUDIT REPORT')
console.log('======================================================')
console.log(`Total HTML pages scanned:       ${htmlFiles.length}`)
console.log(`Total internal links evaluated:  ${totalLinksScanned}`)
console.log(`Unique internal destinations:    ${verifiedTargets.size}`)
console.log(`Broken destinations discovered:  ${brokenLinks.size}`)
console.log('======================================================')

if (brokenLinks.size > 0) {
  console.log('\n❌ [BROKEN DESTINATIONS IDENTIFIED]')
  for (const [brokenTarget, details] of brokenLinks.entries()) {
    console.log(`\n🔴 Broken Destination: "${brokenTarget}"`)
    console.log(`   Referenced across ${details.sources.size} pre-rendered page(s):`)
    let count = 0
    for (const [sourcePage, texts] of details.sources.entries()) {
      count++
      if (count <= 5) {
        const textSample = texts.size > 0 ? ` (anchor: "${Array.from(texts)[0]}")` : ''
        console.log(`     • ${sourcePage}${textSample}`)
      } else if (count === 6) {
        console.log(`     • ... and ${details.sources.size - 5} more page(s)`)
        break
      }
    }
  }

  console.log('\n------------------------------------------------------')
  if (isStrict) {
    console.error(`🚨 Build failed: ${brokenLinks.size} broken internal link destination(s) detected in strict mode.`)
    process.exit(1)
  } else {
    console.warn(`⚠️ Warning: ${brokenLinks.size} broken internal link destination(s) found. See report above.`)
  }
} else {
  console.log('\n✅ All internal links successfully resolved to valid pre-rendered destinations!')
}
