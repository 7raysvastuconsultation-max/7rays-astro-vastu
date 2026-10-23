import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'

interface RelatedArticle {
  slug: string
  title: string
  description: string
  image: string
}

interface RelatedArticlesSchemaProps {
  pageUrl: string
  articles: RelatedArticle[]
}

const toAbsoluteUrl = (url: string): string =>
  url.startsWith('http') ? url : `${siteConfig.url}${url.startsWith('/') ? '' : '/'}${url}`

/** Structured data for visible related-guide cards on locality pages. */
export const RelatedArticlesSchema: React.FC<RelatedArticlesSchemaProps> = ({
  pageUrl,
  articles,
}) => {
  if (articles.length === 0) return null

  const normalizedPageUrl = pageUrl.endsWith('/') ? pageUrl : `${pageUrl}/`
  const articleEntities = articles.map((article) => {
    const articleUrl = `${siteConfig.url}/blog/${article.slug}/`

    return {
      '@type': 'Article',
      '@id': `${articleUrl}#article`,
      headline: article.title,
      description: article.description,
      url: articleUrl,
      image: [toAbsoluteUrl(article.image)],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': articleUrl,
      },
    }
  })

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${normalizedPageUrl}#related-guides`,
        name: 'Related Vastu Guides',
        itemListOrder: 'https://schema.org/ItemListOrderUnordered',
        numberOfItems: articles.length,
        itemListElement: articleEntities.map((article, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: { '@id': article['@id'] },
        })),
      },
      ...articleEntities,
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
