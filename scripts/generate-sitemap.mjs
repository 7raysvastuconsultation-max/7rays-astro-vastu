#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.resolve(rootDir, 'public')
const distDir = path.resolve(rootDir, 'dist')

let rawSiteUrl = (process.env.VITE_SITE_URL || '').trim()
if (
  !rawSiteUrl ||
  rawSiteUrl.includes('localhost') ||
  rawSiteUrl.includes('127.0.0.1') ||
  rawSiteUrl.startsWith('http://')
) {
  rawSiteUrl = 'https://7raysastrovastu.in'
}
const SITE_URL = rawSiteUrl.replace(/\/$/, '')
const TODAY = new Date().toISOString().split('T')[0]

// Define all active canonical site routes matching SEO Strategy Template
const staticRoutes = [
  { path: '', changefreq: 'weekly', priority: 1.0 },
  { path: 'about', changefreq: 'monthly', priority: 0.8 },
  { path: 'the-7-rays', changefreq: 'monthly', priority: 0.8 },
  { path: 'process', changefreq: 'monthly', priority: 0.8 },
  { path: 'vastu-services', changefreq: 'weekly', priority: 0.9 },
  { path: 'vastu/residential', changefreq: 'weekly', priority: 0.95 },
  { path: 'vastu/apartment-vastu', changefreq: 'weekly', priority: 0.9 },
  { path: 'vastu/commercial', changefreq: 'weekly', priority: 0.95 },
  { path: 'vastu/office-vastu', changefreq: 'weekly', priority: 0.9 },
  { path: 'vastu/corporate', changefreq: 'weekly', priority: 0.9 },
  { path: 'vastu/industrial', changefreq: 'weekly', priority: 0.9 },
  { path: 'vastu-services/vastu-audit', changefreq: 'weekly', priority: 0.9 },
  { path: 'astrology', changefreq: 'weekly', priority: 0.9 },
  { path: 'astrology/birth-chart', changefreq: 'weekly', priority: 0.85 },
  { path: 'astrology/career', changefreq: 'weekly', priority: 0.85 },
  { path: 'astrology/business', changefreq: 'weekly', priority: 0.85 },
  { path: 'astrology/marriage', changefreq: 'weekly', priority: 0.85 },
  { path: 'locations/bangalore', changefreq: 'weekly', priority: 0.95 },
  { path: 'locations/bangalore/residential-vastu', changefreq: 'weekly', priority: 0.9 },
  { path: 'locations/bangalore/commercial-vastu', changefreq: 'weekly', priority: 0.9 },
  { path: 'locations/bangalore/industrial-vastu', changefreq: 'weekly', priority: 0.9 },
  { path: 'locations/bangalore/vastu-audit', changefreq: 'weekly', priority: 0.9 },
  { path: 'locations/bangalore/astrology', changefreq: 'weekly', priority: 0.9 },
  { path: 'case-studies', changefreq: 'monthly', priority: 0.75 },
  { path: 'insights', changefreq: 'daily', priority: 0.85 },
  { path: 'contact', changefreq: 'monthly', priority: 0.8 },
  { path: 'sitemap', changefreq: 'monthly', priority: 0.5 },
  { path: 'privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { path: 'terms', changefreq: 'yearly', priority: 0.3 },
]

const locationSlugs = ['indiranagar', 'hsr-layout', 'koramangala', 'whitefield']

const blogSlugs = [
  'vastu-remedies-without-demolition-modern-apartments',
  'how-geopathic-stress-causes-insomnia-and-fatigue',
  'master-bedroom-vastu-guidelines',
  'kitchen-vastu-direction-guide',
  'bathroom-toilet-vastu-remedies',
  'north-facing-house-vastu-plan',
  'south-facing-house-vastu-myths',
  'office-layout-executive-cabin-vastu',
  'retail-store-and-showroom-vastu',
  'restaurant-and-hospitality-vastu',
  'factory-machinery-and-raw-material-vastu',
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

const allRoutes = [
  ...staticRoutes.map((r) => ({
    url: `${SITE_URL}/${r.path}`.replace(/\/$/, ''),
    changefreq: r.changefreq,
    priority: r.priority,
    lastmod: TODAY,
  })),
  ...locationSlugs.map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    changefreq: 'weekly',
    priority: 0.85,
    lastmod: TODAY,
  })),
  ...blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    changefreq: 'monthly',
    priority: 0.75,
    lastmod: TODAY,
  })),
  ...caseStudySlugs.map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: TODAY,
  })),
]

// 1. Build sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes
  .map(
    (item) => `  <url>
    <loc>${item.url || SITE_URL}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority.toFixed(2)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

// 2. Build robots.txt
const robotsTxt = `# ==========================================
# 7Rays Astro Vastu - Production robots.txt
# ==========================================

User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*sort=
Disallow: /*?*filter=

# Crawl delay optimization
Crawl-delay: 1

# Explicit bot directives
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

# Canonical Sitemap Location
Sitemap: ${SITE_URL}/sitemap.xml
`

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml.trim(), 'utf-8')
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt.trim(), 'utf-8')

if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml.trim(), 'utf-8')
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt.trim(), 'utf-8')
}

console.log(`✓ sitemap.xml generated with ${allRoutes.length} canonical URLs`)
console.log(`✓ robots.txt generated pointing to ${SITE_URL}/sitemap.xml`)
