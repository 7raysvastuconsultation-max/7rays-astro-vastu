import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'

/**
 * WebSite Schema — Phase 09 Entity Graph
 * @id: https://7raysastrovastu.in/#website
 *
 * Entity relationships:
 *   WebSite (#website)
 *     └─ publisher → Organization (#organization) [stable @id reference]
 *
 * Alternate names handle Bengaluru/Bangalore disambiguation for Google KG.
 */
export const WebSiteSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    // Alternate names allow Google to match both common city spellings
    alternateName: [
      siteConfig.shortName,
      '7 Rays Astro Vastu Bangalore',
      '7Rays Astro Vastu Bengaluru',
    ],
    url: siteConfig.url,
    inLanguage: 'en-IN',
    // Publisher links to canonical Organization entity
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
