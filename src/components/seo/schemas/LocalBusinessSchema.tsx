import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import type { LocalBusinessSchemaProps } from '@/types/seo'

/**
 * LocalBusiness Schema — Phase 09 Entity Graph
 * @type: ProfessionalService (subtype of LocalBusiness)
 * @id: https://7raysastrovastu.in/#localbusiness
 *
 * Entity relationships:
 *   LocalBusiness (#localbusiness)
 *     ├─ parentOrganization → Organization (#organization) [stable @id]
 *     └─ founder/employee → Person (#rishwa-sinha) [stable @id]
 *
 * Single HQ: Only one address/location. No branch fabrication.
 *
 * sameAs: Omitted. The Maps short-link (googleMapsUrl / gbpUrl) is used in
 * hasMap (correct — it is a map link). It is not appropriate for sameAs, which
 * requires an authoritative identity URL. Will be added when confirmed.
 */
export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = businessConfig.businessName,
  legalName = businessConfig.legalBusinessName,
  description = businessConfig.description,
  url = siteConfig.url,
  telephone = businessConfig.phone,
  email = businessConfig.email,
  image = siteConfig.ogImage,
  areaServed = [...businessConfig.serviceAreas],
  streetAddress = businessConfig.address.streetAddress,
  addressLocality = businessConfig.address.locality,
  addressRegion = businessConfig.address.state,
  postalCode = businessConfig.address.postalCode,
  addressCountry = businessConfig.address.country,
  latitude = businessConfig.latitude,
  longitude = businessConfig.longitude,
}) => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#localbusiness`,
    name,
    legalName,
    description,
    url,
    image,
    // Maps URL correctly placed in hasMap (a location reference, not an identity)
    hasMap: businessConfig.googleMapsUrl,
    // Parent organization link — establishes the entity hierarchy
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
    // Founder reference via stable @id
    founder: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#rishwa-sinha`,
    },
    // Principal consultant — same person as founder
    employee: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#rishwa-sinha`,
      name: businessConfig.ownerName,
      jobTitle: businessConfig.ownerJobTitle,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry: addressCountry === 'India' ? 'IN' : addressCountry,
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vastu Shastra & Vedic Astrology Consultation Services',
      itemListElement: siteConfig.servicesSummary.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
        position: index + 1,
      })),
    },
    // Alternate name handles Bengaluru/Bangalore disambiguation
    alternateName: ['7 Rays Astro Vastu', '7Rays Vastu Bangalore', '7Rays Astro Vastu Bengaluru'],
  }

  if (telephone) {
    schema.telephone = telephone
  }
  if (email) {
    schema.email = email
  }
  if (latitude !== null && longitude !== null) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
