import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Link2,
  Check,
  Download,
  Lightbulb,
  DoorClosed,
  Bed,
  Leaf,
  Sparkles,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ArticleSchema } from '@/components/seo/schemas/ArticleSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { ConsultationModal } from '@/components/common/ConsultationModal'
import { blogPostsData } from '@/data/blog'
import { siteConfig } from '@/config/site'
import { env } from '@/config/env'
import { trackConversion } from '@/utils/analytics'

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.538 1.849.88 2.791.88 3.182 0 5.768-2.587 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm9.965 5.765c.002 5.514-4.484 9.999-9.996 9.999-1.758 0-3.411-.459-4.85-1.258l-5.385 1.411 1.438-5.253c-.886-1.488-1.354-3.21-1.354-4.9c-.002-5.514 4.484-9.999 9.996-9.999 5.513 0 9.951 4.485 9.951 10z" />
  </svg>
)

// Curated Popular Articles matching the design screenshot
const popularArticlesList = [
  {
    title: 'Vastu for New Home Construction',
    slug: 'north-facing-house-vastu-plan',
    readingTime: '12 min read',
    image: '/images/insights/insight-principles.jpg',
  },
  {
    title: 'Main Door Vastu Directions & Tips',
    slug: 'south-facing-house-vastu-myths',
    readingTime: '8 min read',
    image: '/images/insights/insight-home-office.jpg',
  },
  {
    title: 'Kitchen Vastu: Best Placement & Remedies',
    slug: 'kitchen-vastu-direction-guide',
    readingTime: '7 min read',
    image: '/images/insights/insight-apartments.jpg',
  },
  {
    title: 'Vastu for Office Spaces',
    slug: 'office-layout-executive-cabin-vastu',
    readingTime: '6 min read',
    image: '/images/insights/insight-commercial.jpg',
  },
  {
    title: 'Common Vastu Mistakes to Avoid',
    slug: 'vastu-remedies-without-demolition-modern-apartments',
    readingTime: '5 min read',
    image: '/images/insights/insight-five-elements.jpg',
  },
]

// Category Counts matching the design screenshot
const categoryList = [
  { name: 'Vastu Basics', count: 12, slug: 'vastu-basics' },
  { name: 'Residential Vastu', count: 18, slug: 'residential' },
  { name: 'Commercial Vastu', count: 14, slug: 'commercial' },
  { name: 'Industrial Vastu', count: 6, slug: 'industrial' },
  { name: 'Astrology', count: 10, slug: 'astrology' },
  { name: 'Bangalore Insights', count: 15, slug: 'bangalore' },
  { name: 'Tips & Guides', count: 9, slug: 'tips-and-guides' },
  { name: 'Case Studies', count: 7, slug: 'case-studies', href: '/case-studies' },
]

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('understanding-south-facing')
  const [pdfDownloaded, setPdfDownloaded] = useState(false)

  // Find post by slug or fallback to the primary featured post
  const post =
    blogPostsData.find((p) => p.slug === slug) ||
    blogPostsData.find((p) => p.slug === 'south-facing-house-vastu-myths') ||
    blogPostsData[0]

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`
  const whatsAppUrl = `https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(
    `Hello 7Rays Astro Vastu, I was reading your insight "${post.title}" and would like to consult with Rishwa Sinha.`
  )}`

  // Scrollspy observer for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'understanding-south-facing',
        'key-vastu-principles',
        'ideal-room-placement',
        'entrance-main-door',
        'common-myths',
        'practical-remedies',
        'faqs',
        'final-thoughts',
      ]

      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadPdf = () => {
    setPdfDownloaded(true)
    trackConversion('form_submission', 'Vastu Checklist for Home Buyers')
    // Open print or simulated guide download
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

  // Dynamic or default table of contents
  const tocItems = post.tableOfContents || [
    { id: 'understanding-south-facing', title: '1. Understanding South Facing Houses' },
    { id: 'key-vastu-principles', title: '2. Key Vastu Principles' },
    { id: 'ideal-room-placement', title: '3. Ideal Room Placement' },
    { id: 'entrance-main-door', title: '4. Entrance and Main Door' },
    { id: 'common-myths', title: '5. Common Myths' },
    { id: 'practical-remedies', title: '6. Practical Remedies' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
    { id: 'final-thoughts', title: '8. Final Thoughts' },
  ]

  // Key takeaways fallback
  const takeaways = post.keyTakeaways || [
    'South facing houses can be balanced and prosperous with the right Vastu design.',
    'Main door placement, room allocation and energy flow are crucial.',
    'Specific remedies can neutralise common Vastu defects.',
    'Consult a qualified Vastu expert for personalised assessment.',
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-950">
      <SEOHead
        title={`${post.seoTitle || post.title} | 7Rays Astro Vastu`}
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
          <span>{post.readingTimeMinutes || 9} MIN READ</span>
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
          {/* Author Details */}
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

          {/* Social Share Buttons */}
          <div className="flex items-center gap-2">
            <span className="mr-1 text-xs font-medium text-slate-500">Share:</span>
            {/* Copy Link Button */}
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
            {/* Twitter / X */}
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
            {/* LinkedIn */}
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
            {/* WhatsApp */}
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
            src={post.coverImage || '/images/insights/south-facing-house-villa.jpg'}
            alt={post.title}
            className="aspect-[16/9] max-h-[540px] w-full object-cover"
            loading="eager"
          />
        </div>

        {/* 2-Column Content Grid: Main Body + Sticky Right Sidebar */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Main Article (8 cols) */}
          <main className="space-y-8 lg:col-span-8">
            {/* Introduction Section */}
            <section id="introduction">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Introduction
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                A south facing house is often misunderstood in Vastu. With the right design, layout
                and remedies, it can be a stable, powerful and prosperous home. In this guide, we
                explore the key Vastu principles, common misconceptions and practical solutions for
                south facing houses.
              </p>
            </section>

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

            {/* Section 1: Understanding South Facing Houses */}
            <section id="understanding-south-facing" className="pt-2">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                1. Understanding South Facing Houses
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                In <strong className="font-semibold text-slate-900">Vastu Shastra</strong>, the
                south direction is associated with stability, discipline and strength. While it is
                often considered challenging, a south facing house can bring excellent results when
                designed in harmony with Vastu principles.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Governed by Mars (Mangal) and aligned with the energy of leadership and righteous
                action, the southern sector carries intense thermal and solar momentum. When
                calibrated with dense structural massing in the South and light, expansive openings
                in the North, south-facing dwellings generate remarkable executive resilience and
                wealth accumulation.
              </p>

              {/* In-Article Image */}
              <div className="mt-6 mb-2 overflow-hidden rounded-xl border border-slate-200/90 shadow-xs">
                <img
                  src={post.inArticleImage?.src || '/images/insights/south-facing-living-room.jpg'}
                  alt={
                    post.inArticleImage?.alt ||
                    'A well-designed south facing home with balanced Vastu elements creates harmony and prosperity'
                  }
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs text-slate-500 italic">
                {post.inArticleImage?.caption ||
                  'A well-designed south facing home with balanced Vastu elements creates harmony and prosperity.'}
              </p>
            </section>

            {/* Section 2: Key Vastu Principles for South Facing Houses */}
            <section id="key-vastu-principles" className="pt-4">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                2. Key Vastu Principles for South Facing Houses
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Here are the most important Vastu principles to keep in mind when designing or
                buying a south facing house in Bangalore or anywhere in India.
              </p>

              {/* 4-Card Feature Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {/* Card 1: Main Door Position */}
                <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-center shadow-xs transition hover:border-amber-300">
                  <div className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    <DoorClosed className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                    Main Door Position
                  </h4>
                  <p className="mt-1 text-[11px] leading-tight text-slate-500">
                    Ideally in the south-east or south-west padas.
                  </p>
                </div>

                {/* Card 2: Room Placement */}
                <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-center shadow-xs transition hover:border-amber-300">
                  <div className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    <Bed className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">Room Placement</h4>
                  <p className="mt-1 text-[11px] leading-tight text-slate-500">
                    Bedrooms, kitchen and living room placement.
                  </p>
                </div>

                {/* Card 3: Energy Flow */}
                <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-center shadow-xs transition hover:border-amber-300">
                  <div className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">Energy Flow</h4>
                  <p className="mt-1 text-[11px] leading-tight text-slate-500">
                    Ensure natural light and ventilation.
                  </p>
                </div>

                {/* Card 4: Remedies */}
                <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-center shadow-xs transition hover:border-amber-300">
                  <div className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">Remedies</h4>
                  <p className="mt-1 text-[11px] leading-tight text-slate-500">
                    Simple and effective Vastu remedies.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Ideal Room Placement */}
            <section id="ideal-room-placement" className="pt-4">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                3. Ideal Room Placement for South Facing Homes
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Precise room allocation balances the intense solar thermal load of southern facades
                while optimizing the cool magnetic currents from the North and East:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    Master Bedroom — South-West (Nairutya)
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Anchors the master of the house with heavy gravitational grounding, emotional
                    serenity, and restorative sleep. Keep beds positioned with the head pointing
                    South or East.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    Kitchen — South-East (Agneya)
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    The primordial fire quadrant. Situating the cooking stove in the South-East
                    facing East ensures domestic vitality, positive digestive health, and unhindered
                    cash liquidity.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    Living Room &amp; Entrance Foyer — North or East
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Welcomes visitors and channels pure pranic light into family common areas. Open
                    balconies facing North promote pleasant cross-ventilation.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    Pooja Room / Meditation Space — North-East (Ishanya)
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    The divine water zone must remain lightweight, spotless, and undisturbed by
                    overhead tanks or toilets to preserve intuitive clarity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Entrance and Main Door */}
            <section id="entrance-main-door" className="pt-4">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                4. Entrance and Main Door (Pada Analysis)
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Classical Vastu texts—including the <em>Mayamatam</em> and <em>Manasara</em>—divide
                the southern boundary into 8 distinct energetic padas (S1 to S8). Rather than
                categorically dismissing southern entrances, pada analysis reveals the power gates:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-amber-200/80 px-2 py-0.5 text-xs font-bold text-amber-900">
                      S3 — Vithetha
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">
                      Highly Auspicious
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-700">
                    Generates aggressive business expansion, prominent social recognition, and rapid
                    career ascendance for entrepreneurs and leadership executives.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-amber-200/80 px-2 py-0.5 text-xs font-bold text-amber-900">
                      S4 — Grihakshata
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">
                      Highly Auspicious
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-700">
                    Attracts enduring societal respect, legal protection, strong family vitality,
                    and generational financial stability.
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-sm">
                Entrances situated in S1, S2, or S5 through S8 can be balanced using authentic brass
                and copper elemental threshold strips, neutralizing directional resistance without
                demolition.
              </p>
            </section>

            {/* Section 5: Common Myths */}
            <section id="common-myths" className="pt-4">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                5. Common Myths vs Reality
              </h2>
              <div className="space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4.5 shadow-2xs">
                  <div className="flex items-start gap-2.5">
                    <span className="rounded bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-800">
                      MYTH
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900">
                      South facing houses universally bring misfortune or financial loss.
                    </h4>
                  </div>
                  <div className="mt-2.5 flex items-start gap-2.5 pl-0.5">
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                      REALITY
                    </span>
                    <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                      Leading Bangalore business founders and thriving families inhabit south-facing
                      properties. When the S3 or S4 padas are utilized and internal zoning is
                      balanced, these homes generate exceptional wealth and decisive clarity.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4.5 shadow-2xs">
                  <div className="flex items-start gap-2.5">
                    <span className="rounded bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-800">
                      MYTH
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900">
                      Fixing a south-facing entrance always requires heavy civil remodeling.
                    </h4>
                  </div>
                  <div className="mt-2.5 flex items-start gap-2.5 pl-0.5">
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                      REALITY
                    </span>
                    <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                      Modern non-demolition Vastu remedies—such as calibrated metallic threshold
                      dividers, directional lead stabilizers, and lighting adjustments—fully
                      harmonize energy flow without knocking down a single brick.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Practical Remedies */}
            <section id="practical-remedies" className="pt-4">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                6. Practical Remedies Without Demolition
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                For existing apartments or villas where changing structural openings is not
                feasible, our non-invasive corrective protocols include:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                  <h4 className="text-xs font-bold text-amber-900 sm:text-sm">
                    Threshold Metallic Strips
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    A 3mm brass or copper strip embedded flush into the doorway groove creates an
                    energetic boundary, deflecting unfavorable vibrational fields.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                  <h4 className="text-xs font-bold text-amber-900 sm:text-sm">
                    Lead Helix &amp; Pyramids
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Placed subtly in the South-West floor or corners to elevate gravitational
                    density and anchor the household's emotional balance.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                  <h4 className="text-xs font-bold text-amber-900 sm:text-sm">
                    Warm Lighting Schemes
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Illuminating southern entryways with warm white or golden lighting during dusk
                    harmonizes the fiery Mars frequency gracefully.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                  <h4 className="text-xs font-bold text-amber-900 sm:text-sm">
                    Earth-Toned Palette
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Subtle terracotta, beige, sand, and cream wall treatments ground southern
                    spaces, preventing aggressive energy agitation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Frequently Asked Questions */}
            <section id="faqs" className="pt-4">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                7. Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {post.faqs?.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-white p-4.5 shadow-2xs"
                  >
                    <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Final Thoughts */}
            <section id="final-thoughts" className="pt-4">
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                8. Final Thoughts
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                A south facing home is not a curse; it is an architectural opportunity. When paired
                with rigorous pada measurement, balanced functional zoning, and personalized birth
                chart alignment, south-facing spaces nurture dynamic growth and enduring prosperity.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Before purchasing or renovating a property in Bangalore, schedule an expert Vastu
                audit to ensure every zone works in your favor.
              </p>
            </section>
          </main>

          {/* RIGHT COLUMN: Sticky Sidebar Widgets (4 cols) */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
            {/* Widget 1: Table of Contents */}
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

            {/* Widget 2: Need Personalised Guidance? */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#FAFAFA] p-5 shadow-xs">
              <h3 className="font-serif text-base font-bold text-slate-900">
                Need Personalised Guidance?
              </h3>
              <p className="mt-1.5 mb-4 text-xs leading-relaxed text-slate-600">
                Get expert Vastu consultation for your home from Rishwa Sinha.
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
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/cta-sunset-villa.jpg"
            alt="7Rays Astro Vastu Consultations"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        {/* Content Container */}
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
