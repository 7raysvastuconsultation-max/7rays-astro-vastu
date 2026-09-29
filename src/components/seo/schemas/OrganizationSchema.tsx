import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'

/**
 * Organization Schema — Phase 09 Entity Graph
 * @id: https://7raysastrovastu.in/#organization
 *
 * Entity relationships:
 *   Organization (#organization)
 *     └─ founder → Person (#rishwa-sinha) [stable @id reference]
 *
 * sameAs: Omitted. The only available URL (Google Maps short-link) is a location
 * reference, not a verified identity profile. sameAs requires an authoritative
 * identity URL (social profile, Wikidata, GBP profile page). Will be added when
 * a verified profile is confirmed by the founder.
 *
 * Social profiles: All null — do NOT add until officially confirmed.
 */
export const OrganizationSchema: React.FC = () => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: businessConfig.businessName,
    legalName: businessConfig.legalBusinessName,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.logoUrl,
    },
    image: siteConfig.ogImage,
    description: businessConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.streetAddress,
      addressLocality: businessConfig.address.locality,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.postalCode,
      addressCountry:
        businessConfig.address.country === 'India' ? 'IN' : businessConfig.address.country,
    },
    // Stable @id reference — links to the canonical Person entity
    founder: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#rishwa-sinha`,
    },
  }

  if (businessConfig.phone) {
    schema.telephone = businessConfig.phone
  }
  if (businessConfig.email) {
    schema.email = businessConfig.email
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
