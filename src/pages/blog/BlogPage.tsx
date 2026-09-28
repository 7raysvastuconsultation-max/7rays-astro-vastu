import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  Users2,
  Home,
  Building2,
  Factory,
  Sparkles,
  MapPin,
  Lightbulb,
  Search,
  ArrowRight,
  ChevronRight,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { siteConfig } from '@/config/site'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BlogPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/insights`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('General Consultation')
  const [activeCategory, setActiveCategory] = useState('All Articles')
  const [searchQuery, setSearchQuery] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const whatsAppUrl = siteConfig.contact.phone
    ? `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello 7Rays Astro Vastu, I would like to book a consultation.'
      )}`
    : '/contact'

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailInput.trim()) {
      setIsSubscribed(true)
      setEmailInput('')
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  // 8 Category Filter Tabs matching Screenshot
  const categoryTabs = [
    { label: 'All Articles', icon: FileText },
    { label: 'Vastu Basics', icon: Users2 },
    { label: 'Residential Vastu', icon: Home },
    { label: 'Commercial Vastu', icon: Building2 },
    { label: 'Industrial Vastu', icon: Factory },
    { label: 'Astrology', icon: Sparkles },
    { label: 'Bangalore Insights', icon: MapPin },
    { label: 'Tips & Guides', icon: Lightbulb },
  ]

  // 9 Exact Articles from Mockup Screenshot
  const articles = [
    {
      id: '7-vastu-principles',
      title: '7 Vastu Principles Every Homeowner Should Know',
      category: 'VASTU BASICS',
      filterCat: 'Vastu Basics',
      date: 'Sep 20, 2026',
      readTime: '8 min read',
      excerpt:
        'Discover the essential Vastu principles that can help create a harmonious, positive and prosperous home.',
      image: '/images/insights/insight-principles.jpg',
      slug: 'vastu-principles-every-homeowner-should-know',
    },
    {
      id: 'vastu-modern-apartments-bangalore',
      title: 'Vastu for Modern Apartments in Bangalore',
      category: 'RESIDENTIAL VASTU',
      filterCat: 'Residential Vastu',
      date: 'Sep 18, 2026',
      readTime: '6 min read',
      excerpt: 'Practical Vastu solutions for apartments, flats and high-rise living in Bangalore.',
      image: '/images/insights/insight-apartments.jpg',
      slug: 'vastu-for-modern-apartments-in-bangalore',
    },
    {
      id: 'best-directions-home-office',
      title: 'Best Directions for Your Home Office',
      category: 'VASTU TIPS',
      filterCat: 'Tips & Guides',
      date: 'Sep 15, 2026',
      readTime: '5 min read',
      excerpt:
        'Design a productive and positive workspace with the right Vastu directions and layout tips.',
      image: '/images/insights/insight-home-office.jpg',
      slug: 'best-directions-for-home-office',
    },
    {
      id: 'vastu-for-commercial-spaces',
      title: 'Vastu for Commercial Spaces',
      category: 'COMMERCIAL VASTU',
      filterCat: 'Commercial Vastu',
      date: 'Sep 12, 2026',
      readTime: '7 min read',
      excerpt:
        'How Vastu can enhance business growth, customer flow and financial stability in commercial properties.',
      image: '/images/insights/insight-commercial.jpg',
      slug: 'vastu-for-commercial-spaces',
    },
    {
      id: 'understanding-five-elements-vastu',
      title: 'Understanding the Five Elements in Vastu',
      category: 'VASTU KNOWLEDGE',
      filterCat: 'Vastu Basics',
      date: 'Sep 10, 2026',
      readTime: '6 min read',
      excerpt:
        'Learn how Earth, Water, Fire, Air and Space elements influence your health, wealth and relationships.',
      image: '/images/insights/insight-five-elements.jpg',
      slug: 'understanding-five-elements-vastu',
    },
    {
      id: 'bedroom-vastu-peace-energy',
      title: 'Bedroom Vastu: Create Peace and Positive Energy',
      category: 'RESIDENTIAL VASTU',
      filterCat: 'Residential Vastu',
      date: 'Sep 10, 2026',
      readTime: '5 min read',
      excerpt:
        'Simple yet effective Vastu tips for a restful sleep, better health and stronger relationships.',
      image: '/images/services/residential-bedroom.jpg',
      slug: 'bedroom-vastu-create-peace-positive-energy',
    },
    {
      id: 'vastu-audit-what-to-expect',
      title: 'Vastu Audit: What to Expect and How It Works',
      category: 'VASTU AUDIT',
      filterCat: 'Tips & Guides',
      date: 'Sep 20, 2026',
      readTime: '8 min read',
      excerpt:
        'A complete guide to Vastu property audits, what is analysed and how it can benefit your space.',
      image: '/images/services/vastu-audit.jpg',
      slug: 'vastu-audit-what-to-expect-how-it-works',
    },
    {
      id: 'luxury-villa-transformation-goa',
      title: 'Case Study: Luxury Villa Transformation in Goa',
      category: 'CASE STUDY',
      filterCat: 'Residential Vastu',
      date: 'Sep 01, 2026',
      readTime: '5 min read',
      excerpt:
        'How Vastu principles helped create a balanced, peaceful and prosperous living space.',
      image: '/images/projects/villa-goa.jpg',
      slug: 'case-study-luxury-villa-transformation-goa',
    },
    {
      id: 'astrology-complements-vastu',
      title: 'How Astrology Complements Vastu in Life Planning',
      category: 'ASTROLOGY',
      filterCat: 'Astrology',
      date: 'Aug 28, 2026',
      readTime: '7 min read',
      excerpt:
        'Understand how Vedic astrology and Vastu together can guide you towards a more balanced and harmonious life.',
      image: '/images/services/astrology-consultation.jpg',
      slug: 'how-astrology-complements-vastu-life-planning',
    },
  ]

  // 5 Popular Articles from Mockup Sidebar
  const popularArticles = [
    {
      title: 'Vastu for New Home Construction',
      readTime: '12 min read',
      image: '/images/services/residential-vastu.jpg',
      slug: 'vastu-for-new-home-construction',
    },
    {
      title: 'Main Door Vastu: Directions & Tips',
      readTime: '8 min read',
      image: '/images/services/residential-new-home.jpg',
      slug: 'main-door-vastu-directions-tips',
    },
    {
      title: 'Kitchen Vastu: Best Placement & Remedies',
      readTime: '7 min read',
      image: '/images/services/commercial-restaurant-dining.jpg',
      slug: 'kitchen-vastu-placement-remedies',
    },
    {
      title: 'Vastu for Office Spaces',
      readTime: '6 min read',
      image: '/images/services/corporate-vastu.jpg',
      slug: 'vastu-for-office-spaces',
    },
    {
      title: 'Common Vastu Mistakes to Avoid',
      readTime: '5 min read',
      image: '/images/services/residential-corrections.jpg',
      slug: 'common-vastu-mistakes-to-avoid',
    },
  ]

  // Categories Widget with Counts
  const categoriesList = [
    { name: 'Vastu Basics', count: 12 },
    { name: 'Residential Vastu', count: 18 },
    { name: 'Commercial Vastu', count: 14 },
    { name: 'Industrial Vastu', count: 8 },
    { name: 'Astrology', count: 10 },
    { name: 'Bangalore Insights', count: 15 },
    { name: 'Tips & Guides', count: 20 },
    { name: 'Case Studies', count: 6 },
  ]

  // Filter logic
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === 'All Articles' ||
      article.filterCat === activeCategory ||
      article.category.toLowerCase().includes(activeCategory.toLowerCase())

    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <>
      <SEOHead
        title="Vastu & Astrology Insights & Practical Guides | 7Rays Astro Vastu"
        description="Explore practical Vastu Shastra articles, non-demolition spatial insights, and Vedic astrology guidance by Certified Vastu Consultant Rishwa Sinha."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/insights' },
        ]}
      />

      {/* 1. HERO SECTION (Warm Luxury Living Study with Glowing Mandala) */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:min-h-[580px] sm:pt-36 sm:pb-20">
        {/* Background Image with Dark Vignette & Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-penthouse.jpg"
            alt="Insights for Better Spaces & Better Living"
            className="h-full w-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Column: Heading & Content */}
          <div className="max-w-2xl py-6 sm:py-10">
            {/* Tag Badge */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.25em] text-amber-400 uppercase">
                OUR INSIGHTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl leading-[1.15] font-bold text-white sm:text-5xl lg:text-6xl">
              Insights for Better
              <br />
              Spaces &amp; Better Living
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Explore expert articles, practical Vastu tips, astrology insights and modern design
              ideas for a more harmonious life.
            </p>
          </div>

          {/* Right Column: Illuminated Golden Vastu Mandala & Spaced Text */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* Glowing Golden Mandala */}
            <div className="relative flex items-center justify-center">
              <img
                src="/images/footer-mandala.png"
                alt="Sacred Geometry Astrolabe"
                className="h-44 w-44 object-contain opacity-75 drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]"
              />
            </div>

            {/* Vertical Golden Attributes */}
            <div className="border-l border-amber-500/30 pl-6 text-left">
              <div className="flex flex-col space-y-3.5 font-serif text-[11px] font-semibold tracking-[0.25em] text-amber-300/90 uppercase">
                <span className="transition-colors hover:text-amber-200">SPACES</span>
                <span className="transition-colors hover:text-amber-200">PEOPLE</span>
                <span className="transition-colors hover:text-amber-200">ENERGY</span>
                <span className="transition-colors hover:text-amber-200">BALANCE</span>
                <span className="transition-colors hover:text-amber-200">GROWTH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS / BAR (Pure White Background) */}
      <section className="border-b border-slate-200/80 bg-white py-4 text-slate-900 shadow-2xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex scrollbar-none items-center gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-start sm:px-0 lg:justify-between">
            {categoryTabs.map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeCategory === tab.label
              return (
                <button
                  key={tab.label}
                  onClick={() => {
                    setActiveCategory(tab.label)
                    setCurrentPage(1)
                  }}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'border border-amber-400 bg-amber-50/80 text-amber-800 shadow-xs'
                      : 'border border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <TabIcon
                    className={`h-4 w-4 ${isActive ? 'text-amber-700' : 'text-slate-400'}`}
                  />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT: 2-COLUMN LAYOUT (Articles Grid + Sidebar) */}
      <section className="bg-white py-12 text-slate-900 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left / Main Column: Articles (lg:col-span-8) */}
            <div className="lg:col-span-8">
              {/* Header Row */}
              <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                    LATEST ARTICLES
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                    Expert Insights &amp; Practical Guidance
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setActiveCategory('All Articles')
                    setSearchQuery('')
                  }}
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-800"
                >
                  <span>View All Articles</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* 3x3 Articles Grid */}
              {filteredArticles.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-12 text-center">
                  <p className="font-serif text-base text-slate-600">
                    No articles found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('All Articles')
                      setSearchQuery('')
                    }}
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
                    >
                      {/* Image Container with Category Badge */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Category Tag on bottom left of image */}
                        <div className="absolute bottom-2.5 left-2.5 rounded-md border border-white/40 bg-white/95 px-2 py-0.5 text-[9px] font-bold tracking-wider text-amber-800 uppercase shadow-xs backdrop-blur-xs">
                          {article.category}
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                        <div>
                          {/* Date & Read Time */}
                          <div className="text-[11px] font-medium text-slate-500">
                            {article.date} &bull; {article.readTime}
                          </div>

                          {/* Title */}
                          <h3 className="mt-2 font-serif text-sm font-bold text-slate-900 transition-colors group-hover:text-amber-800 sm:text-base">
                            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                          </h3>

                          {/* Excerpt */}
                          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600">
                            {article.excerpt}
                          </p>
                        </div>

                        {/* Read More Link */}
                        <div className="pt-4">
                          <Link
                            to={`/blog/${article.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                          >
                            <span>Read More</span>
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                    currentPage === 1
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'border border-slate-200 text-slate-600 hover:border-amber-400'
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                    currentPage === 2
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'border border-slate-200 text-slate-600 hover:border-amber-400'
                  }`}
                >
                  2
                </button>
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                    currentPage === 3
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'border border-slate-200 text-slate-600 hover:border-amber-400'
                  }`}
                >
                  3
                </button>
                <span className="px-1 text-slate-400">...</span>
                <button
                  onClick={() => setCurrentPage(10)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                    currentPage === 10
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'border border-slate-200 text-slate-600 hover:border-amber-400'
                  }`}
                >
                  10
                </button>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-amber-400 hover:text-amber-800"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Sidebar Widgets (lg:col-span-4) */}
            <aside className="space-y-8 lg:col-span-4">
              {/* 1. Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-10 pl-4 text-xs text-slate-900 placeholder-slate-400 shadow-2xs transition focus:border-amber-500 focus:outline-hidden"
                />
                <Search className="pointer-events-none absolute top-3.5 right-3.5 h-4 w-4 text-slate-400" />
              </div>

              {/* 2. Popular Articles */}
              <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">Popular Articles</h3>

                <div className="mt-5 space-y-4">
                  {popularArticles.map((item, idx) => (
                    <div key={idx} className="group flex items-center gap-3">
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif text-xs font-bold text-slate-900 transition-colors group-hover:text-amber-700 sm:text-sm">
                          <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                        </h4>
                        <div className="mt-1 text-[11px] text-slate-500">{item.readTime}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Categories Widget */}
              <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">Categories</h3>

                <div className="mt-4 divide-y divide-slate-100">
                  {categoriesList.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(cat.name)}
                      className="flex w-full items-center justify-between py-2.5 text-xs text-slate-700 transition hover:text-amber-700"
                    >
                      <span
                        className={activeCategory === cat.name ? 'font-bold text-amber-800' : ''}
                      >
                        {cat.name}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Newsletter Subscription Card (Dark Midnight Navy Blue) */}
              <div className="relative overflow-hidden rounded-2xl bg-[#070E1E] p-6 text-white shadow-xl sm:p-7">
                <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-10">
                  <img
                    src="/images/footer-mandala.png"
                    alt="Mandala Background"
                    className="h-32 w-32 object-contain"
                  />
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase">
                    STAY UPDATED
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-white">
                    Get the Latest Insights
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Subscribe to receive expert articles, Vastu tips and special updates.
                  </p>

                  {isSubscribed ? (
                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/80 p-3 text-xs text-emerald-200">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Thank you for subscribing! Check your inbox soon.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full rounded-lg bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                      />
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                      >
                        <span>Subscribe</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. PRE-FOOTER CTA BANNER (Thin Visible Panoramic Sunset Villa Layer) */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-8 text-white sm:py-10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-sunset-villa.jpg"
            alt="Align Your Space Energy Sunset"
            className="h-full w-full object-cover object-[center_40%]"
          />
          {/* Subtle translucent overlay so the pool villa, sunset horizon and palms shine through */}
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:text-left md:flex-row">
            {/* Left: Heading & Subtitle */}
            <div className="max-w-xl">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                Your Space Has Energy.
                <br className="hidden sm:inline" />
                Let&apos;s Align It.
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-200 sm:text-sm">
                Book a personalized consultation with 7Rays Astro Vastu.
              </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <button
                onClick={() => openBooking('General Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/70 px-5 py-2.5 text-xs font-semibold text-slate-100 backdrop-blur-xs transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  )
}
