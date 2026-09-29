import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import type { PersonSchemaProps } from '@/types/seo'

/**
 * Person Schema — Phase 09 Entity Graph
 * Canonical @id: https://7raysastrovastu.in/#rishwa-sinha
 *
 * Entity relationships:
 *   Person (#rishwa-sinha)
 *     └─ worksFor → Organization (#organization) [stable @id reference]
 *
 * hasCredential: name-only. No issuing organization, URL, or credential number
 * is recorded because none has been verified. Simplest valid form only.
 *
 * sameAs: Omitted. No verified external identity URL (social profile, Wikidata,
 * GBP profile page) is currently available. The Maps short-link stored in
 * gbpUrl is a location link, not an identity page, and is not appropriate for
 * sameAs. Will be added when a verified identity profile is confirmed.
 */
export const PersonSchema: React.FC<PersonSchemaProps> = ({
  name = businessConfig.ownerName,
  jobTitle = businessConfig.ownerJobTitle,
  description = `${businessConfig.ownerName} is a ${businessConfig.ownerCertification} and Founder of ${businessConfig.businessName} with ${businessConfig.ownerExperience} of experience in Bengaluru, India.`,
  url = `${siteConfig.url}/about`,
  image = `${siteConfig.url}/images/rishwa-sinha.jpg`,
  knowsAbout = [
    'Vastu Shastra',
    'Residential Vastu',
    'Commercial Vastu',
    'Industrial Vastu',
    'Vastu Audit',
    'Vedic Astrology',
    'Non-Demolition Energy Alignment',
    'Geopathic Stress Analysis',
    'Birth Chart Analysis',
  ],
  worksFor = {
    name: siteConfig.name,
    url: siteConfig.url,
  },
}) => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    // Stable canonical @id — used across all schemas that reference this person
    '@id': `${siteConfig.url}/#rishwa-sinha`,
    name,
    jobTitle,
    description,
    url,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    knowsAbout,
    // Bidirectional link: Person → Organization via stable @id
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: worksFor.name,
      url: worksFor.url,
    },
    // Professional credential — name only. No issuing org, URL, or ID invented.
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: businessConfig.ownerCertification,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
