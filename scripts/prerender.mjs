/**
 * 7Rays Astro Vastu - Pan-India SSG Pre-Renderer (v2)
 *
 * Pre-renders all 64 canonical routes to high-performance, fully indexable static HTML.
 * Injects route-specific <title>, <meta name="description">, canonical <link>,
 * Open Graph / Twitter tags, and Schema.org JSON-LD structured data into <head>.
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, "..")
const distDir = path.resolve(rootDir, "dist")
const tempSsrDir = path.resolve(rootDir, ".temp-ssr")

// 1. Verify production build exists
if (!fs.existsSync(distDir)) {
  console.error("❌ Error: dist/ directory does not exist. Run vite build first.")
  process.exit(1)
}

const templatePath = path.resolve(distDir, "index.html")
if (!fs.existsSync(templatePath)) {
  console.error("❌ Error: dist/index.html template not found.")
  process.exit(1)
}

const indexHtmlTemplate = fs.readFileSync(templatePath, "utf8")

// 2. Load SSR entry point
const serverEntryPath = path.resolve(tempSsrDir, "entry-server.js")
if (!fs.existsSync(serverEntryPath)) {
  console.error("❌ Error: Compiled SSR entry point not found at", serverEntryPath)
  process.exit(1)
}

const { render } = await import(serverEntryPath)

// 3. Define all 64 canonical routes
const staticRoutes = [
  "",
  "vastu-services",
  "vastu/residential",
  "vastu/apartment-vastu",
  "vastu/commercial",
  "vastu/office-vastu",
  "vastu/industrial",
  "vastu/non-demolition",
  "vastu-services/vastu-audit",
  "services/online-vastu-consultation",
  "services/astro-vastu-synthesis",
  "astrology",
  "astrology/horoscope-reading",
  "astrology/career-business-astrology",
  "astrology/marriage-astrology",
  "astrology/gemstone-consultation",
  "about",
  "contact",
  "case-studies",
  "blog",
  "locations/bangalore",
  "consultant/rishwa-sinha",
  "faq",
  "sitemap",
  "privacy-policy",
  "terms",
  "disclaimer",
  "404",
]

const locationSlugs = ["indiranagar", "hsr-layout", "koramangala", "whitefield"]

const blogSlugs = [
  "vastu-for-modern-apartments-in-bangalore",
  "vastu-remedies-without-demolition-modern-apartments",
  "vastu-principles-every-homeowner-should-know",
  "best-directions-for-home-office",
  "master-bedroom-vastu-guidelines",
  "kitchen-vastu-direction-guide",
  "bathroom-toilet-vastu-remedies",
  "north-facing-house-vastu-plan",
  "south-facing-house-vastu-myths",
  "office-layout-executive-cabin-vastu",
  "retail-store-and-showroom-vastu",
  "restaurant-and-hospitality-vastu",
  "factory-machinery-and-raw-material-vastu",
  "how-geopathic-stress-causes-insomnia-and-fatigue",
  "what-is-vedic-astrology-birth-chart-guide",
  "career-astrology-professional-path-guidelines",
  "astrology-vs-vastu-difference-and-synthesis",
  "understanding-dasha-cycles-and-transitions",
]

const caseStudySlugs = [
  "luxury-residence-mumbai",
  "corporate-office-bangalore",
  "villa-goa",
  "commercial-space-hyderabad",
  "fintech-startup-growth-hsr-layout",
  "whitefield-apartment-health-harmony",
]

const allRoutePaths = [
  ...staticRoutes,
  ...locationSlugs.map((s) => `locations/${s}`),
  ...blogSlugs.map((s) => `blog/${s}`),
  ...caseStudySlugs.map((s) => `case-studies/${s}`),
]

console.log(`🌐 Pre-rendering ${allRoutePaths.length} static routes...`)

let preRenderedCount = 0

for (const routePath of allRoutePaths) {
  const url = `/${routePath}`.replace(/\/+/g, "/")
  try {
    const renderResult = render(url)
    const renderedAppHtml = renderResult.html || ""
    const head = renderResult.head || {}

    // 1. Extract Title: from Helmet head, or rendered markup
    let pageTitle = ""
    if (head.title) {
      const match = head.title.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
      if (match) pageTitle = match[1].trim()
    }
    if (!pageTitle) {
      const match = renderedAppHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
      if (match) pageTitle = match[1].trim()
    }
    if (!pageTitle) {
      pageTitle = "7Rays Astro Vastu | Scientific Vastu Shastra & Astrology"
    }

    // 2. Extract Canonical URL
    let canonicalUrl = ""
    if (head.link) {
      const match = head.link.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*\/?>/i)
      if (match) canonicalUrl = match[1]
    }
    if (!canonicalUrl) {
      const match = renderedAppHtml.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*\/?>/i)
      if (match) canonicalUrl = match[1]
    }
    if (!canonicalUrl) {
      canonicalUrl = `https://7raysastrovastu.in${url}`.replace(/\/$/, "") || "https://7raysastrovastu.in"
    }

    // 3. Extract All Meta tags rendered by React (SEOHead)
    // React 18 renders meta tags into the component HTML tree during SSR
    const extractedMetaTags = []
    const metaTagRegex = /<meta\s+[^>]*\/?>/gi
    let metaMatch
    while ((metaMatch = metaTagRegex.exec(renderedAppHtml)) !== null) {
      extractedMetaTags.push(metaMatch[0])
    }

    // Also get meta tags from head.meta if provided by Helmet
    if (head.meta) {
      const helmetMetaMatches = head.meta.match(/<meta\s+[^>]*\/?>/gi) || []
      for (const hm of helmetMetaMatches) {
        if (!extractedMetaTags.includes(hm)) {
          extractedMetaTags.push(hm)
        }
      }
    }

    // Extract preload links rendered by components
    const preloadLinks = []
    const preloadRegex = /<link\s+[^>]*rel=["']preload["'][^>]*\/?>/gi
    let preloadMatch
    while ((preloadMatch = preloadRegex.exec(renderedAppHtml)) !== null) {
      preloadLinks.push(preloadMatch[0])
    }

    // 4. Extract JSON-LD Scripts
    const jsonLdScripts = []
    if (head.script) {
      const helmetScripts = head.script.match(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || []
      jsonLdScripts.push(...helmetScripts)
    }
    const bodyJsonLdMatches = renderedAppHtml.match(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || []
    for (const s of bodyJsonLdMatches) {
      if (!jsonLdScripts.includes(s)) {
        jsonLdScripts.push(s)
      }
    }

    // 5. Clean body content so header tags do not leak into #root
    let bodyContent = renderedAppHtml
      .replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<link[^>]+rel=["']canonical["'][^>]*\/?>/gi, "")
      .replace(/<link[^>]+rel=["']preload["'][^>]*\/?>/gi, "")
      .replace(/<meta\s+[^>]*\/?>/gi, "")

    // 6. Robots directive
    const robotsContent =
      routePath === "404"
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

    // 7. Compose final static HTML document
    let pageHtml = indexHtmlTemplate

    // Strip ALL fallback meta tags, titles, and open graph from template
    pageHtml = pageHtml
      .replace(/<title>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta\s+name=["']description["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+name=["']robots["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+name=["']googlebot["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+name=["']bingbot["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+property=["']og:title["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+property=["']og:description["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+property=["']og:url["'][\s\S]*?\/?>/gi, "")

    // Build unique head tags for this route
    const headInjections = []

    // Title tag
    headInjections.push(`<title>${pageTitle}</title>`)

    // Canonical link
    headInjections.push(`<link rel="canonical" href="${canonicalUrl}" />`)

    // Robots tags
    headInjections.push(`<meta name="robots" content="${robotsContent}" />`)
    headInjections.push(`<meta name="googlebot" content="${robotsContent}" />`)

    // Inject all extracted route-specific meta tags (description, og:*, twitter:*)
    for (const tag of extractedMetaTags) {
      // Avoid duplicate robots or canonical tags
      if (/name=["'](robots|googlebot|bingbot)["']/i.test(tag)) continue
      headInjections.push(tag)
    }

    // Inject preload links
    for (const pl of preloadLinks) {
      headInjections.push(pl)
    }

    // Inject JSON-LD structured data scripts
    for (const s of jsonLdScripts) {
      headInjections.push(s)
    }

    // Inject head tags before </head>
    const headMarkup = "\n    " + headInjections.filter(Boolean).join("\n    ") + "\n  "
    pageHtml = pageHtml.replace("</head>", `${headMarkup}</head>`)

    // Inject pre-rendered body into #root
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`)

    // Write to destination file
    let targetFile
    if (routePath === "") {
      targetFile = path.join(distDir, "index.html")
    } else {
      const targetDir = path.join(distDir, routePath)
      fs.mkdirSync(targetDir, { recursive: true })
      targetFile = path.join(targetDir, "index.html")
    }

    fs.writeFileSync(targetFile, pageHtml, "utf8")

    // If 404 route, also emit dist/404.html for Cloudflare Pages
    if (routePath === "404") {
      fs.writeFileSync(path.join(distDir, "404.html"), pageHtml, "utf8")
    }
    preRenderedCount++
  } catch (err) {
    console.error(`⚠️ Failed to pre-render route "${url}":`, err)
  }
}

// 8. Cleanup temp SSR directory
if (fs.existsSync(tempSsrDir)) {
  fs.rmSync(tempSsrDir, { recursive: true, force: true })
}

console.log(`✅ [SSG] Successfully pre-rendered ${preRenderedCount} routes to static HTML!`)
