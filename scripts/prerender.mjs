#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { execSync } from "node:child_process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, "..")
const distDir = path.resolve(rootDir, "dist")
const tempSsrDir = path.resolve(rootDir, ".temp-ssr")

console.log("⚡ [SSG] Starting Static HTML Pre-rendering Pipeline...")

// 1. Build the SSR bundle
console.log("📦 Compiling SSR bundle with Vite...")
execSync("npx vite build --ssr src/entry-server.tsx --outDir .temp-ssr", {
  cwd: rootDir,
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "production",
    VITE_SITE_URL: "https://7raysastrovastu.in",
  },
})

// 2. Import the compiled server render function
const ssrEntryPath = path.resolve(tempSsrDir, "entry-server.js")
const { render } = await import(`file://${ssrEntryPath}`)

// 3. Read client build template
const templatePath = path.join(distDir, "index.html")
if (!fs.existsSync(templatePath)) {
  console.error("❌ dist/index.html not found. Run vite build first.")
  process.exit(1)
}
const indexHtmlTemplate = fs.readFileSync(templatePath, "utf8")

// 4. Define all routes to pre-render
const staticRoutes = [
  "",
  "about",
  "the-7-rays",
  "process",
  "vastu-services",
  "vastu/residential",
  "vastu/apartment-vastu",
  "vastu/commercial",
  "vastu/office-vastu",
  "vastu/corporate",
  "vastu/industrial",
  "vastu/non-demolition",
  "vastu-services/apartment-vastu",
  "vastu-services/commercial-vastu",
  "vastu-services/corporate-vastu",
  "vastu-services/industrial-vastu",
  "vastu-services/residential-vastu",
  "vastu-services/vastu-audit",
  "services/online-vastu-consultation",
  "services/astro-vastu-synthesis",
  "international",
  "astrology",
  "astrology/birth-chart",
  "astrology/career",
  "astrology/business",
  "astrology/marriage",
  "locations",
  "vastu-consultant-in-bangalore",
  "locations/bangalore",
  "locations/bangalore/residential-vastu",
  "locations/bangalore/commercial-vastu",
  "locations/bangalore/industrial-vastu",
  "locations/bangalore/vastu-audit",
  "locations/bangalore/astrology",
  "case-studies",
  "insights",
  "blog",
  "shop",
  "contact",
  "consultant/rishwa-sinha",
  "faq",
  "sitemap",
  "privacy-policy",
  "terms",
  "disclaimer",
  "404",
]

const locationSlugs = ["indiranagar", "hsr-layout", "koramangala", "whitefield", "hebbal", "sarjapur-road", "electronic-city", "jayanagar", "marathahalli", "yelahanka", "banashankari", "malleshwaram", "mumbai", "delhi-ncr", "hyderabad", "pune", "kolkata"]

const blogSlugs = [
  "how-to-choose-vastu-consultation-services",
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
  "bangalore-apartment-vastu-checklist-before-buying",
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

    // Extract Title
    let pageTitle = ""
    if (head.title) {
      const match = head.title.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
      if (match) pageTitle = match[1].trim()
    }
    if (!pageTitle) {
      const titleMatch = renderedAppHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
      pageTitle = titleMatch ? titleMatch[1].trim() : "7Rays Astro Vastu | Scientific Vastu Shastra & Astrology"
    }

    // Extract Meta Description
    let metaDescription = ""
    const metaDescMatch = renderedAppHtml.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["'][^>]*\/?>/i)
    if (metaDescMatch) {
      metaDescription = metaDescMatch[1].trim()
    } else if (head.meta) {
      const hm = head.meta.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["'][^>]*\/?>/i)
      if (hm) metaDescription = hm[1].trim()
    }
    if (!metaDescription) {
      metaDescription = "Vastu Shastra and Vedic Astrology consultations in Bengaluru led by Certified Vastu Consultant Rishwa Sinha. Non-demolition energy alignment for modern spaces."
    }

    // Extract Canonical URL and enforce canonical apex domain: https://7raysastrovastu.in/
    let canonicalUrl = ""
    const canonicalMatch = renderedAppHtml.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([\s\S]*?)["'][^>]*\/?>/i)
    if (canonicalMatch) {
      canonicalUrl = canonicalMatch[1].trim()
    } else if (head.link) {
      const hl = head.link.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([\s\S]*?)["'][^>]*\/?>/i)
      if (hl) canonicalUrl = hl[1].trim()
    }
    let rawPath = url
    if (canonicalUrl) {
      try {
        rawPath = new URL(canonicalUrl).pathname
      } catch {
        rawPath = canonicalUrl
      }
    }
    const cleanPath = rawPath.replace(/^\/+/, "").replace(/\/+$/, "")
    canonicalUrl = cleanPath ? `https://7raysastrovastu.in/${cleanPath}/` : "https://7raysastrovastu.in/"

    // Robots directive
    const robotsContent =
      routePath === "404"
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

    // Extract OG and Twitter meta tags from renderedAppHtml
    const socialMetaTags = []
    const ogRegex = /<meta\s+(?:property=["']og:[^"']+["']|name=["']twitter:[^"']+["'])\s+content=["'][^"']*["'][^>]*\/?>/gi
    let ogMatch
    while ((ogMatch = ogRegex.exec(renderedAppHtml)) !== null) {
      socialMetaTags.push(ogMatch[0])
    }

    // Extract all JSON-LD scripts
    const jsonLdMatches = renderedAppHtml.match(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || []
    if (head.script) {
      const hs = head.script.match(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || []
      for (const s of hs) {
        if (!jsonLdMatches.includes(s)) jsonLdMatches.push(s)
      }
    }

    // Clean up body content (strip hoisted head tags from the body container)
    let bodyContent = renderedAppHtml
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta\s+[^>]*\/?>/gi, "")
      .replace(/<link[^>]+rel=["']canonical["'][^>]*\/?>/gi, "")
      .replace(/<link[^>]+rel=["']preload["'][^>]*\/?>/gi, "")
      .replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "")

    // Compose final static HTML document
    let pageHtml = indexHtmlTemplate

    // 1. Inject Title
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`)

    // 2. Inject Meta Description (flexible regex handling any spacing or line breaks)
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']description["'][\s\S]*?\/?>/i,
      `<meta name="description" content="${metaDescription}" />`
    )

    // 3. Inject Robots Directives
    if (/<meta\s+name=["']robots["']/i.test(pageHtml)) {
      pageHtml = pageHtml.replace(
        /<meta\s+name=["']robots["'][\s\S]*?\/?>/i,
        `<meta name="robots" content="${robotsContent}" />`
      )
    } else {
      pageHtml = pageHtml.replace("</head>", `  <meta name="robots" content="${robotsContent}" />\n  </head>`)
    }

    if (/<meta\s+name=["']googlebot["']/i.test(pageHtml)) {
      pageHtml = pageHtml.replace(
        /<meta\s+name=["']googlebot["'][\s\S]*?\/?>/i,
        `<meta name="googlebot" content="${robotsContent}" />`
      )
    }

    // 4. Inject Canonical Link & Normalize Open Graph URL
    if (/<link\s+rel=["']canonical["']/i.test(pageHtml)) {
      pageHtml = pageHtml.replace(
        /<link\s+rel=["']canonical["'][\s\S]*?\/?>/i,
        `<link rel="canonical" href="${canonicalUrl}" />`
      )
    } else {
      pageHtml = pageHtml.replace("</head>", `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`)
    }

    if (/<meta\s+property=["']og:url["']/i.test(pageHtml)) {
      pageHtml = pageHtml.replace(
        /<meta\s+property=["']og:url["'][\s\S]*?\/?>/i,
        `<meta property="og:url" content="${canonicalUrl}" />`
      )
    }

    // 5. Inject Social Meta Tags and JSON-LD Structured Data
    const extraHeadTags = [...socialMetaTags, ...jsonLdMatches]
    if (extraHeadTags.length > 0) {
      const extraHeadMarkup = "\n    " + extraHeadTags.join("\n    ") + "\n  "
      pageHtml = pageHtml.replace("</head>", `${extraHeadMarkup}</head>`)
    }

    // 6. Inject Pre-rendered Body into #root
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`)

    // 7. Write to destination file
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

// 8. Cleanup temp SSR directory
if (fs.existsSync(tempSsrDir)) {
  fs.rmSync(tempSsrDir, { recursive: true, force: true })
}

console.log(`✅ [SSG] Successfully pre-rendered ${preRenderedCount} routes to static HTML!`)
