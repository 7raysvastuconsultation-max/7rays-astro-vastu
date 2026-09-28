import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import type { ArticleSchemaProps } from '@/types/seo'

/**
 * Article (BlogPosting) Schema — Phase 09 Entity Graph
 *
 * Entity relationships:
 *   BlogPosting
 *     ├─ author → Person (#rishwa-sinha) [stable @id reference]
 *     └─ publisher → Organization (#organization) [stable @id reference]
 *
 * CRITICAL: author and publisher must use @id references matching the canonical
 * entity @ids to enable Google Knowledge Graph entity co-reference resolution.
 */
export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = siteConfig.founder.name,
  authorUrl = `${siteConfig.url}/about`,
  publisherName = siteConfig.name,
  publisherLogo = siteConfig.logoUrl,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    image: [image],
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    // Author uses stable @id to link to canonical Person entity
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#rishwa-sinha`,
      name: authorName,
      url: authorUrl,
    },
    // Publisher uses stable @id to link to canonical Organization entity
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    // Breadcrumb context links article to the site entity
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
