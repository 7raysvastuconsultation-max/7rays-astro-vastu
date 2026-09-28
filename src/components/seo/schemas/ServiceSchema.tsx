import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import type { ServiceSchemaProps } from '@/types/seo'

/**
 * Service Schema — Phase 09 Entity Graph
 *
 * Entity relationships:
 *   Service (stable @id per service URL)
 *     ├─ provider → LocalBusiness (#localbusiness) [stable @id reference]
 *     └─ subjectOf → WebSite (#website) [site-level context]
 *
 * Each Service gets a stable @id derived from its canonical URL.
 * This allows Google to co-reference service entities across pages.
 */
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  serviceType,
  providerName = siteConfig.name,
  providerUrl = siteConfig.url,
  areaServed = [...siteConfig.serviceAreas],
  priceRange,
  serviceOutput = 'Comprehensive Astro-Vastu Audit Report & Remedy Blueprint without Demolition',
  offers,
}) => {
  const providerAddress: Record<string, unknown> = {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address.streetAddress,
    addressLocality: siteConfig.contact.address.addressLocality,
    addressRegion: siteConfig.contact.address.addressRegion,
    postalCode: siteConfig.contact.address.postalCode,
    addressCountry: siteConfig.contact.address.addressCountry,
  }

  const providerObj: Record<string, unknown> = {
    '@type': 'LocalBusiness',
    // Stable @id links to canonical LocalBusiness entity
    '@id': `${siteConfig.url}/#localbusiness`,
    name: providerName,
    url: providerUrl,
    address: providerAddress,
  }

  if (siteConfig.contact.phone) {
    providerObj.telephone = siteConfig.contact.phone
  }

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: providerObj,
    areaServed: areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    serviceOutput,
  }

  if (priceRange) {
    schema.priceRange = priceRange
  }

  if (offers) {
    schema.offers = {
      '@type': 'Offer',
      price: offers.price || 'Contact for Quote',
      priceCurrency: offers.priceCurrency || 'INR',
      availability: offers.availability || 'https://schema.org/InStock',
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
