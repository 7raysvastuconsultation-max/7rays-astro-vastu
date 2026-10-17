#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')
const tempSsrDir = path.resolve(rootDir, '.temp-ssr')

console.log('⚡ [SSG] Starting Static HTML Pre-rendering Pipeline...')

// 1. Build the SSR bundle
console.log('📦 Compiling SSR bundle with Vite...')
execSync('npx vite build --ssr src/entry-server.tsx --outDir .temp-ssr', {
  cwd: rootDir,
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production',
    VITE_SITE_URL: 'https://7raysastrovastu.in',
  },
})

// 2. Import the compiled server render function
const ssrEntryPath = path.resolve(tempSsrDir, 'entry-server.js')
const { render } = await import(`file://${ssrEntryPath}`)

// 3. Read client build template
const templatePath = path.join(distDir, 'index.html')
if (!fs.existsSync(templatePath)) {
  console.error('❌ dist/index.html not found. Run "vite build" first.')
  process.exit(1)
}
const indexHtmlTemplate = fs.readFileSync(templatePath, 'utf8')

// 4. Define all routes to pre-render
const staticRoutes = [
  '',
  'about',
  'the-7-rays',
  'process',
  'vastu-services',
  'vastu/residential',
  'vastu/apartment-vastu',
  'vastu/commercial',
  'vastu/office-vastu',
  'vastu/corporate',
  'vastu/industrial',
  'vastu/non-demolition',
  'services/online-vastu-consultation',
  'services/astro-vastu-synthesis',
  'vastu-services/vastu-audit',
  'international',
  'astrology',
  'astrology/birth-chart',
  'astrology/career',
  'astrology/business',
  'astrology/marriage',
  'locations/bangalore',
  'locations/bangalore/residential-vastu',
  'locations/bangalore/commercial-vastu',
  'locations/bangalore/industrial-vastu',
  'locations/bangalore/vastu-audit',
  'locations/bangalore/astrology',
  'case-studies',
  'insights',
  'contact',
  'consultant/rishwa-sinha',
  'faq',
  'sitemap',
  'privacy-policy',
  'terms',
  'disclaimer',
  '404',
]


const locationSlugs = ['indiranagar', 'hsr-layout', 'koramangala', 'whitefield']

const blogSlugs = [
  'vastu-for-modern-apartments-in-bangalore',
  'vastu-remedies-without-demolition-modern-apartments',
  'vastu-principles-every-homeowner-should-know',
  'best-directions-for-home-office',
  'master-bedroom-vastu-guidelines',
  'kitchen-vastu-direction-guide',
  'bathroom-toilet-vastu-remedies',
  'north-facing-house-vastu-plan',
  'south-facing-house-vastu-myths',
  'office-layout-executive-cabin-vastu',
  'retail-store-and-showroom-vastu',
  'restaurant-and-hospitality-vastu',
  'factory-machinery-and-raw-material-vastu',
  'how-geopathic-stress-causes-insomnia-and-fatigue',
  'what-is-vedic-astrology-birth-chart-guide',
  'career-astrology-professional-path-guidelines',
  'astrology-vs-vastu-difference-and-synthesis',
  'understanding-dasha-cycles-and-transitions',
]

const caseStudySlugs = [
  'luxury-residence-mumbai',
  'corporate-office-bangalore',
  'villa-goa',
  'commercial-space-hyderabad',
  'fintech-startup-growth-hsr-layout',
  'whitefield-apartment-health-harmony',
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
  const url = `/${routePath}`.replace(/\/+/g, '/')
  try {
    const renderResult = render(url)
    const renderedAppHtml = renderResult.html || ""
    const head = renderResult.head || {}

    // Extract or fall back to title
    let pageTitle = ""
    if (head.title) {
      const match = head.title.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
      if (match) pageTitle = match[1]
    }
    if (!pageTitle) {
      const match = renderedAppHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
      if (match) pageTitle = match[1]
    }
    if (!pageTitle) {
      pageTitle = "7Rays Astro Vastu | Vastu & Astrology Consultation in Bangalore"
    }

    // Extract or fall back to canonical URL
    let canonicalUrl = ""
    if (head.link) {
      const match = head.link.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*\/?>/i)
      if (match) canonicalUrl = match[1]
    }
    if (!canonicalUrl) {
      canonicalUrl = `https://7raysastrovastu.in${url}`.replace(/\/$/, "") || "https://7raysastrovastu.in"
    }

    // Default robots content
    const robotsContent =
      routePath === "404"
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

    // Clean body content (remove JSON-LD and hoisted title tags from root container)
    let bodyContent = renderedAppHtml
      .replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")

    // Compose final static HTML document
    let pageHtml = indexHtmlTemplate

    // Clean fallback metadata tags from template
    pageHtml = pageHtml
      .replace(/<title>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta\s+name=["']description["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+name=["']robots["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+name=["']googlebot["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+name=["']bingbot["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+property=["']og:title["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+property=["']og:description["'][\s\S]*?\/?>/gi, "")
      .replace(/<meta\s+property=["']og:url["'][\s\S]*?\/?>/gi, "")
      .replace(/<link\s+rel=["']canonical["'][\s\S]*?\/?>/gi, "")

    // Prepare tags to inject into <head>
    const headInjections = []

    // Inject title
    if (head.title) {
      headInjections.push(head.title)
    } else {
      headInjections.push(`<title>${pageTitle}</title>`)
    }

    // Inject meta tags from Helmet (contains description, robots, googlebot, og:*, twitter:*)
    if (head.meta) {
      let metaTags = head.meta
      if (routePath === "404") {
        metaTags = metaTags.replace(/content=["']index,\s*follow[^"']*["']/gi, "content=\"noindex, nofollow\"")
      }
      headInjections.push(metaTags)
    } else {
      headInjections.push(`<meta name="description" content="Vastu Shastra and Vedic Astrology consultations in Bengaluru led by Certified Vastu Consultant Rishwa Sinha." />`)
      headInjections.push(`<meta name="robots" content="${robotsContent}" />`)
      headInjections.push(`<meta name="googlebot" content="${robotsContent}" />`)
    }

    // Inject canonical link
    if (head.link) {
      headInjections.push(head.link)
    } else {
      headInjections.push(`<link rel="canonical" href="${canonicalUrl}" />`)
    }

    // Inject Helmet scripts (JSON-LD structured data)
    if (head.script) {
      headInjections.push(head.script)
    }

    // Also extract any JSON-LD scripts that were rendered in body
    const jsonLdMatches = renderedAppHtml.match(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || []
    for (const scriptTag of jsonLdMatches) {
      if (!headInjections.some((inj) => inj.includes(scriptTag))) {
        headInjections.push(scriptTag)
      }
    }

    // Inject all into </head>
    const headMarkup = "\n    " + headInjections.filter(Boolean).join("\n    ") + "\n  "
    pageHtml = pageHtml.replace("</head>", `${headMarkup}</head>`)

    // Inject Pre-rendered Body into #root
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

    // If 404 route, also emit dist/404.html for Cloudflare Pages fallback
    if (routePath === "404") {
      fs.writeFileSync(path.join(distDir, "404.html"), pageHtml, "utf8")
    }
    preRenderedCount++
  } catch (err) {
    console.error(`⚠️ Failed to pre-render route "${url}":`, err)
  }
}

// 7. Cleanup temp SSR directory
if (fs.existsSync(tempSsrDir)) {
  fs.rmSync(tempSsrDir, { recursive: true, force: true })
}

console.log(`✅ [SSG] Successfully pre-rendered ${preRenderedCount} routes to static HTML!`)
