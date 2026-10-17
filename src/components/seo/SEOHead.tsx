import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { env } from '@/config/env'
import { siteConfig } from '@/config/site'
import type { MetaTagProps } from '@/types/seo'

function normalizeCanonical(rawUrl?: string, pathname = '/'): string {
  const baseUrl = (env.siteUrl || 'https://7raysastrovastu.in').replace(/\/+$/, '')
  const input = rawUrl?.trim()

  if (!input) {
    const cleanPath = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
    return cleanPath ? `${baseUrl}/${cleanPath}/` : `${baseUrl}/`
  }

  // If a relative path was passed (e.g. "/about" or "services/online-vastu-consultation")
  if (input.startsWith('/') || !input.includes('://')) {
    const cleanPath = input.replace(/^\/+/, '').replace(/\/+$/, '')
    return cleanPath ? `${baseUrl}/${cleanPath}/` : `${baseUrl}/`
  }

  // Absolute URL
  try {
    const parsed = new URL(input)
    const cleanPath = parsed.pathname.replace(/^\/+/, '').replace(/\/+$/, '')
    const pathWithSlash = cleanPath ? `/${cleanPath}/` : '/'
    return `${parsed.origin}${pathWithSlash}`
  } catch {
    return input.endsWith('/') ? input : `${input}/`
  }
}

export const SEOHead: React.FC<MetaTagProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  noFollow = false,
  publishedTime,
  modifiedTime,
  authorName,
  section,
  tags,
}) => {
  const location = useLocation()
  const pathname = location?.pathname || '/'

  // Intelligent title synthesis: avoid double brand suffixes (e.g., "| 7Rays Astro Vastu | 7Rays")
  const fullTitle = React.useMemo(() => {
    if (!title) return env.defaultTitle
    if (/\|\s*7Rays/i.test(title)) {
      return title
    }
    return `${title} | ${siteConfig.shortName}`
  }, [title])

  const metaDescription = description || env.defaultDescription
  const currentCanonical = React.useMemo(() => {
    return normalizeCanonical(canonicalUrl, pathname)
  }, [canonicalUrl, pathname])

  const shareImage = ogImage || siteConfig.ogImage

  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1',
  ].join(', ')

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={currentCanonical} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      {/* Google Search Console Verification */}
      {env.gscVerificationToken && (
        <meta name="google-site-verification" content={env.gscVerificationToken} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Open Graph Article Specifics */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && authorName && (
        <meta property="article:author" content={authorName} />
      )}
      {ogType === 'article' && section && <meta property="article:section" content={section} />}
      {ogType === 'article' &&
        tags?.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter / X Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      {siteConfig.social.twitter && (
        <meta name="twitter:site" content={siteConfig.social.twitter} />
      )}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={shareImage} />

      {/* Mobile & App Capabilities */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#1e1b4b" />
    </Helmet>
  )
}
