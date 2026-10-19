#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')

const isStrict =
  process.argv.includes('--strict') ||
  process.env.CI === 'true' ||
  process.env.FAIL_ON_BROKEN_LINKS === 'true' ||
  process.env.STRICT_SEO_CHECK === 'true'

const CANONICAL_ORIGIN = 'https://7raysastrovastu.in'
const CANONICAL_HOST = '7raysastrovastu.in'

console.log('🚀 [CI SEO Verification] Starting build validation pipeline...')
console.log(`📂 Distribution folder: ${distDir}`)
console.log(`🛡️  Strict mode: ${isStrict ? 'ENABLED (violations will fail build)' : 'DISABLED (advisory mode)'}`)

if (!fs.existsSync(distDir)) {
  console.error(`❌ Build output directory not found: ${distDir}`)
  console.error('Run the build pipeline (vite build && prerender) before running this check.')
  process.exit(1)
}

const errors = []
const warnings = []

// Helper: Recursively collect all HTML files
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

// Helper: Map HTML file to canonical website route path
function htmlFileToRoutePath(filePath) {
  const rel = path.relative(distDir, filePath).replace(/\\/g, '/')
  if (rel === 'index.html') return '/'
  if (rel.endsWith('/index.html')) {
    return '/' + rel.slice(0, -'/index.html'.length) + '/'
  }
  if (rel.endsWith('.html')) {
    return '/' + rel.slice(0, -'.html'.length) + '/'
  }
  return '/' + rel
}

// Helper: Check if destination path exists in dist/ or _redirects
function checkDestinationExists(targetPath, exactRedirects, wildcardRedirects) {
  let cleanPath = targetPath.split('?')[0].split('#')[0].trim()
  if (!cleanPath || cleanPath === '/') {
    return fs.existsSync(path.join(distDir, 'index.html'))
  }

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

  // Direct file or directory
  const exactFilePath = path.join(distDir, relPath)
  if (fs.existsSync(exactFilePath)) {
    const stat = fs.statSync(exactFilePath)
    if (stat.isFile()) return true
    if (stat.isDirectory() && fs.existsSync(path.join(exactFilePath, 'index.html'))) return true
  }

  // Directory index
  const asDirectoryIndex = path.join(distDir, relPath, 'index.html')
  if (fs.existsSync(asDirectoryIndex)) return true

  // Single HTML file
  const asHtmlFile = path.join(distDir, `${relPath}.html`)
  if (fs.existsSync(asHtmlFile)) return true

  // Stripped slash variant
  const strippedRel = relPath.replace(/\/$/, '')
  if (fs.existsSync(path.join(distDir, strippedRel, 'index.html'))) return true
  if (fs.existsSync(path.join(distDir, `${strippedRel}.html`))) return true

  return false
}

// -------------------------------------------------------------
// LOAD REDIRECTS FROM _redirects
// -------------------------------------------------------------
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

// -------------------------------------------------------------
// 1. SITEMAP VALIDATION
// -------------------------------------------------------------
console.log('\n======================================================')
console.log('📑 1. VALIDATING SITEMAP URLS & ACCESSIBILITY')
console.log('======================================================')

const sitemapPath = path.join(distDir, 'sitemap.xml')
const sitemapUrls = new Set()

if (!fs.existsSync(sitemapPath)) {
  errors.push({
    category: 'Sitemap',
    message: 'dist/sitemap.xml does not exist.',
  })
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
  const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)]

  if (locMatches.length === 0) {
    errors.push({
      category: 'Sitemap',
      message: 'sitemap.xml is empty or contains no <loc> tags.',
    })
  } else {
    const seenUrls = new Set()
    for (const match of locMatches) {
      const loc = match[1].trim()

      // 1. Check duplicate
      if (seenUrls.has(loc)) {
        errors.push({
          category: 'Sitemap',
          message: `Duplicate URL detected in sitemap: ${loc}`,
        })
      }
      seenUrls.add(loc)
      sitemapUrls.add(loc)

      // 2. Validate canonical protocol & host
      if (!loc.startsWith(CANONICAL_ORIGIN + '/')) {
        errors.push({
          category: 'Sitemap',
          message: `Non-canonical URL in sitemap (must start with ${CANONICAL_ORIGIN}/): ${loc}`,
        })
      }
      if (loc.includes('www.') || loc.startsWith('http://')) {
        errors.push({
          category: 'Sitemap',
          message: `Insecure or non-apex URL in sitemap: ${loc}`,
        })
      }

      // 3. Trailing slash check (homepage ends in /, others should too)
      const pathname = new URL(loc).pathname
      if (!pathname.endsWith('/')) {
        errors.push({
          category: 'Sitemap',
          message: `Sitemap URL missing trailing slash: ${loc}`,
        })
      }

      // 4. Ensure 404 is not in sitemap
      if (pathname === '/404/' || pathname === '/404') {
        errors.push({
          category: 'Sitemap',
          message: `404 error page should never be in sitemap.xml: ${loc}`,
        })
      }

      // 5. Verify the destination static HTML file exists in dist
      const cleanSubpath = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
      let fileExists = false
      if (!cleanSubpath) {
        fileExists = fs.existsSync(path.join(distDir, 'index.html'))
      } else {
        const dirIndex = path.join(distDir, cleanSubpath, 'index.html')
        const singleHtml = path.join(distDir, `${cleanSubpath}.html`)
        fileExists = fs.existsSync(dirIndex) || fs.existsSync(singleHtml)
      }

      if (!fileExists) {
        errors.push({
          category: 'Sitemap',
          message: `Sitemap URL points to missing pre-rendered HTML file: ${loc}`,
        })
      }
    }

    console.log(`✓ Audited ${sitemapUrls.size} sitemap URLs. All format & existence rules evaluated.`)
  }

  // Also check robots.txt references sitemap.xml
  const robotsPath = path.join(distDir, 'robots.txt')
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8')
    if (!robotsContent.includes(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`)) {
      errors.push({
        category: 'Robots.txt',
        message: `robots.txt does not declare Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`,
      })
    } else {
      console.log(`✓ robots.txt correctly points to ${CANONICAL_ORIGIN}/sitemap.xml`)
    }
  } else {
    warnings.push({
      category: 'Robots.txt',
      message: 'dist/robots.txt was not found.',
    })
  }
}

// -------------------------------------------------------------
// 2. CANONICAL TAGS & OG:URL VALIDATION
// -------------------------------------------------------------
console.log('\n======================================================')
console.log('🏷️  2. VALIDATING CANONICAL TAGS & METADATA')
console.log('======================================================')

const htmlFiles = getAllHtmlFiles(distDir)
console.log(`📄 Discovered ${htmlFiles.length} pre-rendered HTML files to audit.`)

let canonicalAuditPassed = 0

for (const filePath of htmlFiles) {
  const relPath = path.relative(distDir, filePath).replace(/\\/g, '/')
  const routePath = htmlFileToRoutePath(filePath)
  const is404Page = relPath === '404.html' || relPath === '404/index.html'

  const content = fs.readFileSync(filePath, 'utf8')

  // Canonical tag check
  const canonicalMatches = [...content.matchAll(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*\/?>/gi)]
  const altCanonicalMatches = [...content.matchAll(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*\/?>/gi)]
  const allCanonicals = [...canonicalMatches, ...altCanonicalMatches].map(m => m[1].trim())

  if (allCanonicals.length === 0) {
    errors.push({
      category: 'Canonical Tag',
      message: `${relPath} (${routePath}): Missing <link rel="canonical"> tag.`,
    })
  } else if (allCanonicals.length > 1) {
    errors.push({
      category: 'Canonical Tag',
      message: `${relPath}: Duplicate canonical tags found: ${allCanonicals.join(', ')}`,
    })
  } else {
    const canonicalUrl = allCanonicals[0]

    // Rule 1: Canonical must start with CANONICAL_ORIGIN
    if (!canonicalUrl.startsWith(CANONICAL_ORIGIN)) {
      errors.push({
        category: 'Canonical Tag',
        message: `${relPath}: Canonical URL (${canonicalUrl}) does not start with ${CANONICAL_ORIGIN}`,
      })
    }

    // Rule 2: No www or http
    if (canonicalUrl.includes('www.') || canonicalUrl.startsWith('http://')) {
      errors.push({
        category: 'Canonical Tag',
        message: `${relPath}: Canonical URL contains 'www.' or 'http://': ${canonicalUrl}`,
      })
    }

    // Rule 3: Sitemap pages MUST have self-referential canonicals
    const selfCanonical = routePath === '/' ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}${routePath}`
    const isInSitemap = sitemapUrls.has(selfCanonical)

    if (isInSitemap) {
      if (canonicalUrl !== selfCanonical) {
        errors.push({
          category: 'Canonical Tag',
          message: `${relPath}: Sitemap page canonical mismatch. Expected self-referential "${selfCanonical}", found "${canonicalUrl}"`,
        })
      }
    } else {
      // For alias / legacy pages not in sitemap, ensure canonical destination exists
      try {
        const targetPath = new URL(canonicalUrl).pathname
        if (!checkDestinationExists(targetPath, exactRedirects, wildcardRedirects)) {
          errors.push({
            category: 'Canonical Tag',
            message: `${relPath}: Canonical points to non-existent destination: "${canonicalUrl}"`,
          })
        }
      } catch {
        errors.push({
          category: 'Canonical Tag',
          message: `${relPath}: Malformed canonical URL: "${canonicalUrl}"`,
        })
      }
    }

    // Rule 4: OG URL match (if present)
    const ogMatches = [...content.matchAll(/<meta\s+[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*\/?>/gi)]
    if (ogMatches.length > 0) {
      const ogUrl = ogMatches[0][1].trim()
      if (ogUrl !== canonicalUrl) {
        errors.push({
          category: 'Open Graph',
          message: `${relPath}: og:url ("${ogUrl}") does not match canonical ("${canonicalUrl}")`,
        })
      }
    }

    // Rule 5: Robots meta tag validation
    const robotsMatches = [...content.matchAll(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*\/?>/gi)]
    if (robotsMatches.length > 0) {
      const robotsContent = robotsMatches[0][1].toLowerCase()
      if (is404Page) {
        if (!robotsContent.includes('noindex')) {
          errors.push({
            category: 'Robots Tag',
            message: `${relPath}: 404 error page should specify "noindex", found: "${robotsContent}"`,
          })
        }
      } else {
        if (robotsContent.includes('noindex')) {
          errors.push({
            category: 'Robots Tag',
            message: `${relPath}: Standard indexable page contains unintended "noindex": "${robotsContent}"`,
          })
        }
      }
    }

    canonicalAuditPassed++
  }
}

console.log(`✓ Successfully verified canonical tags across ${canonicalAuditPassed}/${htmlFiles.length} HTML documents.`)

// -------------------------------------------------------------
// 3. INTERNAL LINK CRAWLER & REDIRECT CHECK
// -------------------------------------------------------------
console.log('\n======================================================')
console.log('🔗 3. AUDITING INTERNAL LINKS ACROSS PRE-RENDERED PAGES')
console.log('======================================================')

const linkRegex = /<a\s+[^>]*href=['"]([^'"]+)['"][^>]*>(.*?)<\/a>/gis
const brokenLinks = new Map()
let totalLinksScanned = 0
const verifiedTargets = new Map()

for (const filePath of htmlFiles) {
  const sourcePage = htmlFileToRoutePath(filePath)
  const content = fs.readFileSync(filePath, 'utf8')

  let match
  while ((match = linkRegex.exec(content)) !== null) {
    const rawHref = match[1].trim()
    const anchorText = match[2].replace(/<[^>]+>/g, '').trim().slice(0, 50)

    if (!rawHref || rawHref.startsWith('#')) continue
    if (/^(mailto:|tel:|javascript:|sms:|whatsapp:|callto:|intent:)/i.test(rawHref)) continue

    let targetPath = rawHref

    // Check if absolute URL
    if (/^https?:\/\//i.test(rawHref)) {
      try {
        const parsed = new URL(rawHref)
        if (parsed.host.toLowerCase() !== CANONICAL_HOST && !parsed.host.toLowerCase().endsWith(`.${CANONICAL_HOST}`)) {
          // External link
          continue
        }
        // Flag non-apex or insecure internal URLs
        if (parsed.protocol === 'http:' || parsed.host.toLowerCase() === `www.${CANONICAL_HOST}`) {
          errors.push({
            category: 'Internal Link',
            message: `Link on ${sourcePage} uses non-apex or insecure URL: ${rawHref}`,
          })
        }
        targetPath = parsed.pathname + parsed.search + parsed.hash
      } catch {
        continue
      }
    } else if (rawHref.startsWith('//')) {
      continue
    }

    if (!targetPath.startsWith('/')) {
      const sourceDir = path.dirname(sourcePage)
      targetPath = path.posix.normalize(path.posix.join(sourceDir === '.' ? '/' : sourceDir, targetPath))
    }

    const cleanPath = targetPath.split('?')[0].split('#')[0]
    totalLinksScanned++

    let exists = verifiedTargets.get(cleanPath)
    if (exists === undefined) {
      exists = checkDestinationExists(cleanPath, exactRedirects, wildcardRedirects)
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

console.log(`Total internal links evaluated:  ${totalLinksScanned}`)
console.log(`Unique internal destinations:    ${verifiedTargets.size}`)
console.log(`Broken destinations discovered:  ${brokenLinks.size}`)

if (brokenLinks.size > 0) {
  for (const [brokenTarget, details] of brokenLinks.entries()) {
    const sourcesList = Array.from(details.sources.keys()).slice(0, 3).join(', ')
    errors.push({
      category: 'Broken Internal Link',
      message: `Broken internal link to "${brokenTarget}" found on pages: ${sourcesList}`,
    })
  }
}

// -------------------------------------------------------------
// 4. SUMMARY REPORT & EXIT CODE
// -------------------------------------------------------------
console.log('\n======================================================')
console.log('📊 CI SEO VERIFICATION SUMMARY')
console.log('======================================================')
console.log(`• Sitemap URLs verified:         ${sitemapUrls.size}`)
console.log(`• Pre-rendered HTML audited:     ${htmlFiles.length}`)
console.log(`• Canonical tags checked:        ${canonicalAuditPassed}`)
console.log(`• Internal links checked:        ${totalLinksScanned}`)
console.log(`• Warnings:                      ${warnings.length}`)
console.log(`• Errors:                        ${errors.length}`)
console.log('======================================================')

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:')
  for (const w of warnings) {
    console.warn(`  [${w.category}] ${w.message}`)
  }
}

if (errors.length > 0) {
  console.error('\n❌ CRITICAL SEO VIOLATIONS DETECTED:')
  for (const e of errors) {
    console.error(`  [${e.category}] ${e.message}`)
  }

  if (isStrict) {
    console.error('\n🚫 Build validation failed in strict mode due to SEO violations above.')
    process.exit(1)
  } else {
    console.warn('\n⚠️  Violations reported above. (Running in advisory mode, build not failed).')
  }
} else {
  console.log('\n🎉 ALL CI SEO CHECKS PASSED!')
  console.log('✓ All sitemap URLs match canonical apex rules and exist in dist/')
  console.log('✓ All pre-rendered HTML files contain valid, matching canonical and Open Graph tags')
  console.log('✓ All internal links resolve to valid destinations with zero broken links\n')
}
