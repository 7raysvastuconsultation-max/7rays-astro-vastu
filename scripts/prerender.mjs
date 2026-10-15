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
    const { html: renderedAppHtml } = render(url)

    // Extract Title
    const titleMatch = renderedAppHtml.match(/<title>([\s\S]*?)<\/title>/)
    const pageTitle = titleMatch ? titleMatch[1] : '7Rays Astro Vastu | Vastu & Astrology Consultation in Bangalore'

    // Extract Meta Description
    const metaDescMatch = renderedAppHtml.match(/<meta name="description" content="([\s\S]*?)"\s*\/?>/)
    const metaDescription = metaDescMatch
      ? metaDescMatch[1]
      : 'Vastu Shastra and Vedic Astrology consultations in Bengaluru led by Certified Vastu Consultant Rishwa Sinha.'

    // Extract Canonical
    const canonicalMatch = renderedAppHtml.match(/<link rel="canonical" href="([\s\S]*?)"\s*\/?>/)
    const canonicalUrl = canonicalMatch ? canonicalMatch[1] : `https://7raysastrovastu.in${url}`.replace(/\/$/, '')

    // Extract Robots Meta
    const robotsMatch = renderedAppHtml.match(/<meta name="robots" content="([\s\S]*?)"\s*\/?>/)
    const robotsContent = robotsMatch
      ? robotsMatch[1]
      : (routePath === '404' ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    const googlebotMatch = renderedAppHtml.match(/<meta name="googlebot" content="([\s\S]*?)"\s*\/?>/)
    const googlebotContent = googlebotMatch
      ? googlebotMatch[1]
      : robotsContent

    // Extract all JSON-LD scripts
    const jsonLdMatches = renderedAppHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || []
    const jsonLdMarkup = jsonLdMatches.join('\n    ')

    // Clean up body content (strip hoisted head tags from the body container)
    let bodyContent = renderedAppHtml
      .replace(/<title>[\s\S]*?<\/title>/g, '')
      .replace(/<meta name="description"[\s\S]*?\/?>/g, '')
      .replace(/<meta name="robots"[\s\S]*?\/?>/g, '')
      .replace(/<meta name="googlebot"[\s\S]*?\/?>/g, '')
      .replace(/<link rel="canonical"[\s\S]*?\/?>/g, '')
      .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')

    // Compose final static HTML document
    let pageHtml = indexHtmlTemplate

    // 1. Inject Title
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${pageTitle}</title>`)

    // 2. Inject Meta Description
    pageHtml = pageHtml.replace(
      /<meta name="description" content="[\s\S]*?"\s*\/?>/,
      `<meta name="description" content="${metaDescription}" />`
    )

    // 3. Inject Robots Directives
    if (pageHtml.includes('<meta name="robots"')) {
      pageHtml = pageHtml.replace(
        /<meta name="robots" content="[\s\S]*?"\s*\/?>/,
        `<meta name="robots" content="${robotsContent}" />`
      )
    } else {
      pageHtml = pageHtml.replace('</head>', `  <meta name="robots" content="${robotsContent}" />\n  </head>`)
    }

    if (pageHtml.includes('<meta name="googlebot"')) {
      pageHtml = pageHtml.replace(
        /<meta name="googlebot" content="[\s\S]*?"\s*\/?>/,
        `<meta name="googlebot" content="${googlebotContent}" />`
      )
    } else {
      pageHtml = pageHtml.replace('</head>', `  <meta name="googlebot" content="${googlebotContent}" />\n  </head>`)
    }

    // 4. Inject Canonical Link
    if (pageHtml.includes('<link rel="canonical"')) {
      pageHtml = pageHtml.replace(
        /<link rel="canonical" href="[\s\S]*?"\s*\/?>/,
        `<link rel="canonical" href="${canonicalUrl}" />`
      )
    } else {
      pageHtml = pageHtml.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`)
    }

    // 5. Inject JSON-LD Structured Data
    if (jsonLdMarkup) {
      pageHtml = pageHtml.replace('</head>', `  ${jsonLdMarkup}\n  </head>`)
    }

    // 6. Inject Pre-rendered Body into #root
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`)

    // 7. Write to destination file
    let targetFile
    if (routePath === '') {
      targetFile = path.join(distDir, 'index.html')
    } else {
      const targetDir = path.join(distDir, routePath)
      fs.mkdirSync(targetDir, { recursive: true })
      targetFile = path.join(targetDir, 'index.html')
    }

    fs.writeFileSync(targetFile, pageHtml, 'utf8')

    // If 404 route, also emit dist/404.html for Cloudflare Pages fallback
    if (routePath === '404') {
      fs.writeFileSync(path.join(distDir, '404.html'), pageHtml, 'utf8')
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
