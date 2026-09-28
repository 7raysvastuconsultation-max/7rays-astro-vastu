/**
 * Content modeling types for services, location landing pages, blog, and case studies
 */

export interface ServiceItem {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  category: 'vastu' | 'astrology' | 'energy' | 'numerology'
  iconName: string
  benefits: string[]
  processSteps: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  pricingModel?: string
  targetAudience: string[]
  deliverables: string[]
}

export interface LocationItem {
  id: string
  slug: string
  name: string
  city: string
  state: string
  region: string
  pincodes: string[]
  popularAreas: string[]
  heroHeadline: string
  metaDescription: string
  commonVastuIssues: string[]
  whyChooseUs: string[]
  faqs: { question: string; answer: string }[]
  geo: {
    lat: number
    lng: number
  }
}

export interface BlogPostItem {
  id: string
  slug: string
  title: string
  seoTitle?: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: {
    name: string
    title: string
    avatar?: string
  }
  publishedAt: string
  updatedAt?: string
  readingTimeMinutes: number
  faqs?: { question: string; answer: string }[]
  keyTakeaways?: string[]
  inArticleImage?: {
    src: string
    alt: string
    caption?: string
  }
  principlesGrid?: {
    title: string
    description: string
    icon?: string
  }[]
  tableOfContents?: {
    id: string
    title: string
  }[]
  // SEO Operating System & Content Intelligence Architecture
  cluster?:
    'residential' | 'commercial' | 'industrial' | 'astrology' | 'spiritual-energy' | 'foundations'
  subcluster?: string
  searchIntent?: 'informational' | 'commercial-investigation' | 'transactional' | 'navigational'
  propertyType?: 'residential' | 'commercial' | 'industrial' | 'spiritual' | 'all'
  locationScope?: 'global' | 'india' | 'bangalore' | 'regional'
  funnelStage?: 'top-of-funnel' | 'middle-of-funnel' | 'bottom-of-funnel'
  canonicalOwner?: string
  parentPillar?: string
  commercialTarget?: string
  entityTargets?: string[]
  informationGain?: string
  aeoQuestions?: string[]
  geoEntities?: string[]
}

export interface CaseStudyItem {
  id: string
  slug: string
  title: string
  seoTitle?: string
  clientType: 'Commercial' | 'Residential' | 'Industrial' | 'Individual'
  location: string
  challenge: string
  solution: string
  results: string[]
  remedyType: 'Non-demolition Vastu' | 'Astro-Vastu Synergy' | 'Energy Grid Correction'
  testimonial?: {
    quote: string
    author: string
    role?: string
  }
  date: string
}
