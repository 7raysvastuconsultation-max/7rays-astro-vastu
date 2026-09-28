import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import type { BreadcrumbItem } from '@/types/seo'

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const sanitizedItems = items.filter(
    (item) => item.name.toLowerCase() !== 'home' && item.url !== '/'
  )

  const fullItems = [
    { name: 'Home', url: siteConfig.url },
    ...sanitizedItems.map((item) => ({
      name: item.name,
      url: item.url.startsWith('http')
        ? item.url
        : `${siteConfig.url}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
