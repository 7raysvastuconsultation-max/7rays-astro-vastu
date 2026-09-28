/**
 * SEO & Structured Data Types for 7Rays Astro Vastu
 */

export interface MetaTagProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile' | 'business.business'
  twitterCard?: 'summary' | 'summary_large_image'
  noIndex?: boolean
  noFollow?: boolean
  publishedTime?: string
  modifiedTime?: string
  authorName?: string
  section?: string
  tags?: string[]
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ServiceSchemaProps {
  name: string
  description: string
  serviceType: string
  providerName?: string
  providerUrl?: string
  areaServed?: string[]
  priceRange?: string
  serviceOutput?: string
  offers?: {
    price?: string
    priceCurrency?: string
    availability?: string
  }
}

export interface LocalBusinessSchemaProps {
  name?: string
  legalName?: string
  description?: string
  url?: string
  telephone?: string
  email?: string
  image?: string
  priceRange?: string
  currenciesAccepted?: string
  paymentAccepted?: string
  areaServed?: string[]
  streetAddress?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry?: string
  latitude?: number
  longitude?: number
  openingHours?: readonly string[] | string[]
}

export interface ArticleSchemaProps {
  headline: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  authorName?: string
  authorUrl?: string
  publisherName?: string
  publisherLogo?: string
}

export interface PersonSchemaProps {
  name?: string
  jobTitle?: string
  description?: string
  url?: string
  image?: string
  knowsAbout?: string[]
  worksFor?: {
    name: string
    url: string
  }
}
