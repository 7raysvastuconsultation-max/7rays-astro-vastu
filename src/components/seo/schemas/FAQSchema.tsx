import React from 'react'
import { Helmet } from 'react-helmet-async'
import type { FAQItem } from '@/types/seo'

interface FAQSchemaProps {
  items: FAQItem[]
}

/**
 * FAQPage Schema
 * CRITICAL SEO RULE: Deploy ONLY on pages with genuine, visible Q&A content to avoid Google Search console spam penalties.
 */
export const FAQSchema: React.FC<FAQSchemaProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
