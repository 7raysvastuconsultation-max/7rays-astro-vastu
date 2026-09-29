import React, { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Link2,
  Check,
  Download,
  Lightbulb,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ArticleSchema } from '@/components/seo/schemas/ArticleSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { ConsultationModal } from '@/components/common/ConsultationModal'
import { MarkdownRenderer } from '@/components/common/MarkdownRenderer'
import { extractHeadings } from '@/utils/markdownUtils'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { blogPostsData } from '@/data/blog'
import { siteConfig } from '@/config/site'
import { env } from '@/config/env'
import { trackConversion } from '@/utils/analytics'

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.538 1.849.88 2.791.88 3.182 0 5.768-2.587 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm9.965 5.765c.002 5.514-4.484 9.999-9.996 9.999-1.758 0-3.411-.459-4.85-1.258l-5.385 1.411 1.438-5.253c-.886-1.488-1.354-3.21-1.354-4.9c-.002-5.514 4.484-9.999 9.996-9.999 5.513 0 9.951 4.485 9.951 10z" />
  </svg>
)

// Curated Popular Articles linking to active canonical slugs
const popularArticlesList = [
  {
    title: '7 Vastu Principles Every Homeowner Should Know',
    slug: 'vastu-principles-every-homeowner-should-know',
    readingTime: '8 min read',
    image: '/images/insights/insight-principles.jpg',
  },
  {
    title: 'Non-Demolition Vastu for Modern Apartments',
    slug: 'vastu-remedies-without-demolition-modern-apartments',
    readingTime: '7 min read',
    image: '/images/insights/insight-apartments.jpg',
  },
  {
    title: 'Best Directions for Your Home Office',
    slug: 'best-directions-for-home-office',
    readingTime: '7 min read',
    image: '/images/insights/insight-home-office.jpg',
  },
  {
    title: 'Master Bedroom Vastu Guidelines & Sleep Science',
    slug: 'master-bedroom-vastu-guidelines',
    readingTime: '7 min read',
    image: '/images/services/residential-bedroom.jpg',
  },
  {
    title: 'South Facing House Vastu: Myths vs Reality',
    slug: 'south-facing-house-vastu-myths',
    readingTime: '9 min read',
    image: '/images/insights/south-facing-house-villa.jpg',
  },
]

// Category Counts matching site architecture
const categoryList = [
  { name: 'Vastu Basics', count: 2, slug: 'vastu-basics' },
  { name: 'Residential Vastu', count: 5, slug: 'residential' },
  { name: 'Commercial Vastu', count: 3, slug: 'commercial' },
  { name: 'Industrial Vastu', count: 1, slug: 'industrial' },
  { name: 'Vedic Astrology', count: 4, slug: 'astrology' },
  { name: 'Case Studies', count: 6, slug: 'case-studies', href: '/case-studies' },
]

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [pdfDownloaded, setPdfDownloaded] = useState(false)

  // Find post by slug with semantic alias resolution
  const post =
    blogPostsData.find((p) => p.slug === slug) ||
    (slug === '7-vastu-principles-every-homeowner-should-know'
      ? blogPostsData.find((p) => p.slug === 'vastu-principles-every-homeowner-should-know')
      : undefined) ||
    (slug === 'best-directions-for-home-office-vastu'
      ? blogPostsData.find((p) => p.slug === 'best-directions-for-home-office')
      : undefined) ||
    (slug === 'understanding-the-five-elements-pancha-tattva'
      ? blogPostsData.find((p) => p.slug === 'astrology-vs-vastu-difference-and-synthesis')
      : undefined) ||
    (slug === 'vastu-for-commercial-and-retail-spaces'
      ? blogPostsData.find((p) => p.slug === 'retail-store-and-showroom-vastu')
      : undefined)

  // Extract headings dynamically from the post's markdown content
  const tocItems = useMemo(() => {
    if (!post) return []
    const extractedToc = extractHeadings(post.content)
    return extractedToc.length > 0 ? extractedToc : post.tableOfContents || []
  }, [post])

  // Scrollspy observer for active section
  useEffect(() => {
    if (!post) return
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const item of tocItems) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [post, tocItems])

  // Return true 404 page if no matching article exists
  if (!post) {
    return <NotFoundPage />
  }

  // Enforce canonical URL consistency
  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`

  const whatsAppUrl = `https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(
    `Hello 7Rays Astro Vastu, I was reading your insight "${post.title}" and would like to consult with Rishwa Sinha.`
  )}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadPdf = () => {
    setPdfDownloaded(true)
    trackConversion('form_submission', 'Vastu Checklist for Home Buyers')
    const link = document.createElement('a')
    link.href = '/images/vastu-checklist-book-cover.jpg'
    link.download = '7Rays-Vastu-Checklist-for-Home-Buyers.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setTimeout(() => setPdfDownloaded(false), 3000)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  const formattedDate = new Date(post.publishedAt)
    .toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    .toUpperCase()

  // Key takeaways fallback
  const takeaways = post.keyTakeaways || [
    'Spatial harmony is achieved by aligning physical layouts with natural thermodynamic and magnetic fields.',
    'Non-demolition elemental remedies can harmonize over 85% of architectural imperfections.',
    'Always verify direction with a calibrated digital compass rather than street approximations.',
    'Consult a certified Vastu expert for personalized 16-zone CAD evaluation.',
  ]

  // Contextual Service Routing
  const getRelatedService = () => {
    if (post.category.toLowerCase().includes('apartment') || post.slug.includes('apartment')) {
      return {
        title: 'Apartment Vastu Consultation',
        description:
          'Comprehensive non-demolition spatial assessment for high-rise flats in Bangalore.',
        link: '/vastu/apartment-vastu',
      }
    }
    if (
      post.category.toLowerCase().includes('commercial') ||
      post.slug.includes('office') ||
      post.slug.includes('retail') ||
      post.slug.includes('restaurant')
    ) {
      return {
        title: 'Commercial & Office Vastu Consultancy',
        description:
          'Optimize executive leadership seating, cash counter flow, and business growth.',
        link: '/vastu/office-vastu',
      }
    }
    if (post.category.toLowerCase().includes('industrial') || post.slug.includes('factory')) {
      return {
        title: 'Industrial & Factory Vastu Planning',
        description: 'Heavy machinery orientation, raw material logistics, and plant energy flow.',
        link: '/vastu/industrial',
      }
    }
    if (
      post.category.toLowerCase().includes('astrology') ||
      post.slug.includes('astrology') ||
      post.slug.includes('dasha')
    ) {
      return {
        title: 'Vedic Astrology Consultation',
        description:
          'In-depth Janam Kundli analysis, career timing, and personalized Dasha insights.',
        link: '/astrology',
      }
    }
    if (post.slug.includes('geopathic') || post.slug.includes('audit')) {
      return {
        title: 'Scientific Vastu & Energy Audit',
        description:
          '16-zone digital CAD mapping, bio-resonance scanning, and non-demolition solutions.',
        link: '/vastu-services/vastu-audit',
      }
    }
    return {
      title: 'Residential Vastu Consultation',
      description: 'Room-by-room directional alignment and non-demolition harmony for your home.',
      link: '/vastu/residential',
    }
  }

  const relatedService = getRelatedService()

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-950">
      <SEOHead
        title={`${post.seoTitle || post.title}`}
        description={post.excerpt}
        canonicalUrl={canonicalUrl}
        ogImage={post.coverImage}
        ogType="article"
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt}
        authorName={post.author.name}
        section={post.category}
        tags={post.tags}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Insights', url: '/insights' },
          { name: post.category, url: '/insights' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        url={canonicalUrl}
        image={post.coverImage}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        authorName={post.author.name}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema items={post.faqs} />}

      {/* Top Breadcrumb Bar */}
      <div className="border-b border-slate-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500">
            <Link to="/" className="transition hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3.5 w-3.5 text-slate-400" />
            <Link to="/insights" className="transition hover:text-slate-900">
              Insights
            </Link>
            <ChevronRight className="mx-2 h-3.5 w-3.5 text-slate-400" />
            <Link to="/insights" className="transition hover:text-slate-900">
              {post.category || 'Residential Vastu'}
            </Link>
            <ChevronRight className="mx-2 h-3.5 w-3.5 text-slate-400" />
            <span className="max-w-[180px] truncate font-medium text-slate-900 sm:max-w-md">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        {/* Article Meta Row */}
        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wider text-[#A0703B] uppercase sm:text-xs">
          <span>{post.category || 'RESIDENTIAL VASTU'}</span>
          <span className="text-slate-300">|</span>
          <span>{formattedDate}</span>
          <span className="text-slate-300">|</span>
          <span>{post.readingTimeMinutes || 7} MIN READ</span>
        </div>

        {/* Article Main H1 Title */}
        <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
          {post.title}
        </h1>

        {/* Lead Excerpt */}
        <p className="mt-3.5 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
          {post.excerpt}
        </p>

        {/* Author Bio & Social Share Bar */}
        <div className="mt-6 flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar || '/images/rishwa-sinha.jpg'}
              alt={post.author.name}
              className="h-11 w-11 rounded-full border border-amber-200/60 object-cover shadow-2xs"
            />
            <div>
              <div className="text-sm font-semibold text-slate-900">By {post.author.name}</div>
              <div className="text-xs text-slate-500">
                {post.author.title || 'Certified Vastu Consultant'} | 7Rays Astro Vastu
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-1 text-xs font-medium text-slate-500">Share:</span>
            <button
              onClick={handleCopyLink}
              title="Copy link"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-2xs transition hover:border-slate-400 hover:text-slate-900"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-600" />
              ) : (
                <Link2 className="h-3.5 w-3.5" />
              )}
            </button>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                canonicalUrl
              )}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on X"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition hover:border-slate-400 hover:text-slate-950"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                canonicalUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0A66C2] shadow-2xs transition hover:border-[#0A66C2]"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `${post.title} - ${canonicalUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-[#25D366] shadow-2xs transition hover:border-emerald-400 hover:bg-emerald-50/50"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="my-8 overflow-hidden rounded-2xl border border-slate-200/80 shadow-md sm:rounded-3xl">
          <img
            src={post.coverImage || '/images/insights/insight-principles.jpg'}
            alt={post.title}
            className="aspect-[16/9] max-h-[540px] w-full object-cover"
            loading="eager"
          />
        </div>

        {/* 2-Column Content Grid: Main Body + Sticky Right Sidebar */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Main Article (8 cols) */}
          <main className="space-y-8 lg:col-span-8">
            {/* Key Takeaways Callout Box */}
            <div className="rounded-2xl border border-[#F6E3B8] bg-[#FFF9EE] p-6 shadow-xs sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5E6CC] text-amber-800">
                  <Lightbulb className="h-5 w-5 text-amber-700" />
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-950 sm:text-xl">
                  Key Takeaways
                </h3>
              </div>
              <ul className="space-y-3">
                {takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DEB86F] text-white">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-xs leading-relaxed font-medium text-slate-800 sm:text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Collapsible Table of Contents (Hidden on lg+ where sticky sidebar displays) */}
            {tocItems.length > 0 && (
              <details className="group rounded-2xl border border-amber-200/80 bg-[#FAF8F5] p-4.5 shadow-2xs lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold tracking-wide text-slate-900 uppercase">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span>Table of Contents ({tocItems.length} Sections)</span>
                  </span>
                  <span className="text-amber-700 transition-transform duration-200 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <nav className="mt-3.5 space-y-2 border-t border-amber-200/60 pt-3">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs leading-relaxed text-slate-700 transition hover:text-amber-800"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </details>
            )}

            {/* Dynamic Markdown Content Renderer */}
            <article className="max-w-none text-slate-700">
              <MarkdownRenderer content={post.content} />
            </article>

            {/* Frequently Asked Questions Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-24 pt-6">
                <h2 className="mb-4 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3.5">
                  {post.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs"
                    >
                      <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contextual Related Service Callout Box */}
            <div className="mt-10 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 to-white p-6 shadow-xs sm:p-8">
              <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                RECOMMENDED PROFESSIONAL SERVICE
              </span>
              <h3 className="mt-1 font-serif text-xl font-bold text-slate-900 sm:text-2xl">
                {relatedService.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {relatedService.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  to={relatedService.link}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-amber-700"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-2xs transition hover:border-slate-400"
                >
                  Book Assessment
                </button>
              </div>
            </div>
          </main>

          {/* RIGHT COLUMN: Sticky Sidebar Widgets (4 cols) */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
            {/* Widget 1: Table of Contents */}
            {tocItems.length > 0 && (
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
                <h3 className="mb-3 font-serif text-base font-bold text-slate-900">
                  Table of Contents
                </h3>
                <nav aria-label="Table of Contents">
                  <ol className="space-y-1 text-xs">
                    {tocItems.map((item) => {
                      const isActive = activeSection === item.id
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full rounded-md px-2.5 py-1.5 text-left transition ${
                              isActive
                                ? 'bg-[#FDF8EE] font-semibold text-[#8B5E28]'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            {item.title}
                          </button>
                        </li>
                      )
                    })}
                  </ol>
                </nav>
              </div>
            )}

            {/* Widget 2: Need Personalised Guidance? */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#FAFAFA] p-5 shadow-xs">
              <h3 className="font-serif text-base font-bold text-slate-900">
                Need Personalised Guidance?
              </h3>
              <p className="mt-1.5 mb-4 text-xs leading-relaxed text-slate-600">
                Get expert Vastu consultation for your home or business from Rishwa Sinha.
              </p>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full rounded-lg bg-[#DEB86F] py-2.5 text-xs font-semibold text-slate-950 shadow-xs transition hover:bg-[#d0a757]"
              >
                Book a Consultation &rarr;
              </button>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('whatsapp_click', 'Blog Sidebar Widget')}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-emerald-400 hover:text-emerald-700"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Widget 3: Popular Articles */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <h3 className="mb-4 font-serif text-base font-bold text-slate-900">
                Popular Articles
              </h3>
              <div className="space-y-3.5">
                {popularArticlesList.map((article, idx) => (
                  <Link
                    key={idx}
                    to={`/blog/${article.slug}`}
                    className="group flex items-center gap-3 transition"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-14 w-14 shrink-0 rounded-lg object-cover shadow-2xs"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="line-clamp-2 text-xs leading-snug font-bold text-slate-900 transition group-hover:text-amber-800">
                        {article.title}
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-400">{article.readingTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 4: Categories */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-slate-900">Categories</h3>
                <Link
                  to="/insights"
                  className="text-xs font-semibold text-[#8B5E28] transition hover:underline"
                >
                  View All &rarr;
                </Link>
              </div>
              <div className="space-y-1.5">
                {categoryList.map((cat, idx) => (
                  <Link
                    key={idx}
                    to={cat.href || `/insights`}
                    className="group flex items-center justify-between py-1 text-xs text-slate-600 transition hover:text-slate-900"
                  >
                    <span className="transition group-hover:translate-x-0.5 group-hover:text-amber-900">
                      {cat.name}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 group-hover:bg-amber-100/70 group-hover:text-amber-900">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 5: FREE GUIDE Lead Magnet */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <div className="flex items-start gap-4">
                <img
                  src="/images/vastu-checklist-book-cover.jpg"
                  alt="Vastu Checklist for Home Buyers"
                  className="w-20 shrink-0 rounded-md object-cover shadow-sm sm:w-22"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                    FREE GUIDE
                  </span>
                  <h4 className="mt-0.5 font-serif text-sm leading-snug font-bold text-slate-900">
                    Vastu Checklist for Home Buyers
                  </h4>
                  <p className="mt-1 mb-3 text-[11px] leading-tight text-slate-500">
                    Download our expert checklist and make a Vastu-compliant home.
                  </p>
                  <button
                    onClick={handleDownloadPdf}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#F5E6CC] px-3 py-1.5 text-xs font-bold text-amber-950 shadow-2xs transition hover:bg-[#ebdac0]"
                  >
                    {pdfDownloaded ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
                        <span>Downloaded!</span>
                      </>
                    ) : (
                      <>
                        <span>Download Free PDF</span>
                        <Download className="h-3 w-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Pre-Footer Full-Width CTA Banner */}
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute inset-0">
          <img
            src="/images/cta-sunset-villa.jpg"
            alt="7Rays Astro Vastu Consultations"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your Space Has Energy.
              <br />
              Let's Align It.
            </h2>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">
              Book a personalised consultation with 7Rays Astro Vastu.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="rounded-lg bg-[#DEB86F] px-6 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:bg-[#d0a757] sm:text-sm"
              >
                Book Your Consultation &rarr;
              </button>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('whatsapp_click', 'Blog Pre-Footer Banner')}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-5 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-slate-800 sm:text-sm"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService="residential-vastu"
      />
    </div>
  )
}
export default BlogPostPage
