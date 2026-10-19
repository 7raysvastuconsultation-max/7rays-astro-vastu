import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import type { BreadcrumbItem } from '@/types/seo'

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const sanitizedItems = items.filter(
    (item) => item.name.toLowerCase() !== 'home' && item.url !== '/' && item.url !== ''
  )

  const normalizeItemUrl = (rawUrl: string): string => {
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      const urlObj = new URL(rawUrl)
      const cleanPath = urlObj.pathname.replace(/^\/+/, '').replace(/\/+$/, '')
      return cleanPath ? `${siteConfig.url}/${cleanPath}/` : `${siteConfig.url}/`
    }
    const cleanPath = rawUrl.replace(/^\/+/, '').replace(/\/+$/, '')
    return cleanPath ? `${siteConfig.url}/${cleanPath}/` : `${siteConfig.url}/`
  }

  const fullItems = [
    { name: 'Home', url: `${siteConfig.url}/` },
    ...sanitizedItems.map((item) => ({
      name: item.name,
      url: normalizeItemUrl(item.url),
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
