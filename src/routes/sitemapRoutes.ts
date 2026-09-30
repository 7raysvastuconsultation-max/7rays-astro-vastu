import { servicesData } from '@/data/services'
import { locationsData } from '@/data/locations'
import { blogPostsData } from '@/data/blog'
import { caseStudiesData } from '@/data/caseStudies'

export interface SitemapRouteEntry {
  path: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
  lastmod?: string
}

export const staticRoutes: SitemapRouteEntry[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/services', changefreq: 'weekly', priority: 0.9 },
  { path: '/shop', changefreq: 'daily', priority: 0.95 },
  { path: '/locations', changefreq: 'weekly', priority: 0.9 },
  { path: '/blog', changefreq: 'daily', priority: 0.8 },
  { path: '/case-studies', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },
  { path: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms', changefreq: 'yearly', priority: 0.3 },
]

export function getAllSitemapRoutes(): SitemapRouteEntry[] {
  const serviceRoutes: SitemapRouteEntry[] = servicesData.map((service) => ({
    path: `/services/${service.slug}`,
    changefreq: 'weekly',
    priority: 0.85,
  }))

  const locationRoutes: SitemapRouteEntry[] = locationsData.map((loc) => ({
    path: `/locations/${loc.slug}`,
    changefreq: 'weekly',
    priority: 0.85,
  }))

  const blogRoutes: SitemapRouteEntry[] = blogPostsData.map((post) => ({
    path: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: 0.75,
    lastmod: post.updatedAt || post.publishedAt,
  }))

  const caseStudyRoutes: SitemapRouteEntry[] = caseStudiesData.map((cs) => ({
    path: `/case-studies/${cs.slug}`,
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: cs.date,
  }))

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes, ...caseStudyRoutes]
}
