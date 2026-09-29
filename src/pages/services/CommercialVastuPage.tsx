import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  ChevronRight,
  BarChart3,
  FileText,
  Settings,
  Clock,
  Building2,
  Store,
  UtensilsCrossed,
  Users2,
  Factory,
  Home,
  Search,
  SlidersHorizontal,
  Sparkles,
  Brain,
  Handshake,
  ShieldCheck,
  Plus,
  Minus,
  MapPin,
  Compass,
  Flame,
  Wrench,
  CheckCircle2,
  Gauge,
  Sun,
  Leaf,
  TrendingUp,
  MessageSquare,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const CommercialVastuPage: React.FC = () => {
  const routerLocation = useLocation()
  const isVastuServicesAlias = routerLocation.pathname.includes('/vastu-services/')
  const pageTitle = isVastuServicesAlias
    ? 'Commercial Space & Retail Vastu in Bangalore | 7Rays'
    : 'Commercial Vastu Consultant in Bangalore | 7Rays'
  const canonicalUrl = `${siteConfig.url}/vastu/commercial`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Commercial Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const whatsAppUrl = siteConfig.contact.phone
    ? `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello 7Rays Astro Vastu, I would like to book a Commercial Vastu consultation for my business.'
      )}`
    : '/contact'

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const commercialServices = [
    {
      id: 'office-vastu',
      title: 'Office Vastu',
      image: '/images/services/corporate-vastu.jpg',
      icon: Building2,
      description:
        'Create productive, focused and harmonious workspaces for executive and team pods.',
      link: '/vastu/office-vastu',
      cta: 'Explore Office Hub',
    },
    {
      id: 'corporate-vastu',
      title: 'Corporate Vastu',
      image: '/images/services/commercial-boardroom-hero.jpg',
      icon: Users2,
      description:
        'Enterprise workplace spatial architecture for IT parks, tech campuses, and headquarters.',
      link: '/vastu/corporate',
      cta: 'Explore Corporate Hub',
    },
    {
      id: 'retail-vastu',
      title: 'Retail & Showroom Vastu',
      image: '/images/services/commercial-retail-showroom.jpg',
      icon: Store,
      description:
        'Optimize customer footfall circulation, cash counter positioning, and product display staging.',
      link: '/insights/commercial-vastu/retail-store-and-showroom-vastu',
      cta: 'Read Retail Guide',
    },
    {
      id: 'hotel-restaurant-vastu',
      title: 'Hotel & Restaurant Vastu',
      image: '/images/services/commercial-restaurant-dining.jpg',
      icon: UtensilsCrossed,
      description:
        'Balance commercial kitchen burners, water elements, bar counters, and dining comfort.',
      link: '/insights/commercial-vastu/restaurant-and-hospitality-vastu',
      cta: 'Read Dining Guide',
    },
    {
      id: 'industrial-vastu',
      title: 'Industrial & Factory Vastu',
      image: '/images/services/industrial-vastu.jpg',
      icon: Factory,
      description:
        'Optimize manufacturing plants, heavy machinery orientation, and warehouse dispatch logistics.',
      link: '/vastu/industrial',
      cta: 'Explore Industrial Hub',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Learn about your business, goals and space layout.',
      icon: Home,
    },
    {
      step: '02',
      title: 'Analyse',
      desc: 'Study energy flow, directions and key Vastu elements.',
      icon: Search,
    },
    {
      step: '03',
      title: 'Recommend',
      desc: 'Provide practical, customized solutions and implementation plan.',
      icon: SlidersHorizontal,
    },
    {
      step: '04',
      title: 'Transform',
      desc: 'Create a balanced space that supports long-term growth and success.',
      icon: Sparkles,
    },
  ]

  const benefits = [
    {
      icon: Settings,
      line1: 'Increased',
      line2: 'Productivity',
    },
    {
      icon: Brain,
      line1: 'Better Decision',
      line2: 'Making',
    },
    {
      icon: BarChart3,
      line1: 'Financial',
      line2: 'Growth',
    },
    {
      icon: Users2,
      line1: 'Positive',
      line2: 'Work Culture',
    },
    {
      icon: Handshake,
      line1: 'Client Attraction',
      line2: '& Retention',
    },
    {
      icon: ShieldCheck,
      line1: 'Long-Term',
      line2: 'Stability',
    },
  ]

  const illustrativeScenarios = [
    {
      title: 'Enterprise Tech Office Realignment',
      location: 'Bangalore (Outer Ring Road)',
      focus: 'Departmental Seating & Server Room Vastu',
      protocol: '16-zone CAD mapping, metallic floor inlays & executive desk realignment',
      slug: 'corporate-office-bangalore',
      image: '/images/projects/corporate-office-bangalore.jpg',
    },
    {
      title: 'Fintech Scale-Up Workspace',
      location: 'Bangalore (HSR Layout)',
      focus: 'Open-Plan Startup Layout & Founder Cabins',
      protocol: 'Southwest leadership orientation & North finance pod balancing',
      slug: 'fintech-startup-growth-hsr-layout',
      image: '/images/services/commercial-retail-showroom.jpg',
    },
    {
      title: 'Flagship Retail Showroom',
      location: 'Hyderabad (Commercial High Street)',
      focus: 'Customer Footfall Circulation & Cash Counter',
      protocol: 'Clockwise pedestrian flow analysis & Southeast illumination planning',
      slug: 'commercial-space-hyderabad',
      image: '/images/services/commercial-restaurant-dining.jpg',
    },
  ]

  const faqs = [
    {
      question: 'How can Commercial Vastu help my business?',
      answer:
        'Commercial Vastu aligns the directional flow of capital, employee energy, and executive leadership. By balancing the 16 energetic zones, businesses experience increased footfall, higher retention, smooth operations, and accelerated financial returns without requiring demolition.',
    },
    {
      question: 'What types of businesses do you consult for?',
      answer:
        'We consult for corporate offices, IT tech parks, retail showrooms, co-working hubs, hotels, restaurants, factories, warehouses, healthcare clinics, and educational institutions of all sizes.',
    },
    {
      question: 'Do I need to make major structural changes?',
      answer:
        'No. Our methodology focuses on non-demolition remedies. We use directional spatial adjustments, seating realignment, authentic metallic inlay materials (brass, copper, zinc, lead), and elemental balancing to address directional discrepancies without disrupting existing architecture.',
    },
    {
      question: 'How long does a consultation take?',
      answer:
        'A standard commercial audit typically takes between 2 to 5 business days, comprising initial space intake, high-precision directional compass mapping, comprehensive energy analysis, and the delivery of your detailed action report.',
    },
    {
      question: 'Do you provide both online and on-site consultations?',
      answer:
        'Yes. We offer both comprehensive on-site consultations with physical directional measurements and advanced digital consultations conducted via high-resolution architectural CAD layouts and video walkthroughs.',
    },
    {
      question: 'Will the consultation disrupt my daily operations?',
      answer:
        'Not at all. Our team conducts non-invasive assessments, and recommendations are designed for phased implementation during off-hours or normal operational workflows with zero employee downtime.',
    },
  ]

  return (
    <>
      <SEOHead
        title={pageTitle}
        description="Transform your workplace with expert Commercial Vastu consultation for offices, retail spaces, hotels, co-working spaces, and factories. Zero demolition."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Vastu Services', url: '/vastu-services' },
          { name: 'Commercial Vastu', url: '/vastu-services/commercial-vastu' },
        ]}
      />
      <ServiceSchema
        name="Commercial Vastu Consultation"
        description="Expert Commercial Vastu consultation for offices, retail stores, showrooms, co-working spaces, hotels, and business premises."
        serviceType="Commercial Vastu Shastra"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={faqs} />

      {/* 1. HERO SECTION (Dark Luxury Boardroom Overlooking City Skyline) */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:min-h-[640px] sm:pt-36 sm:pb-20">
        {/* Background Image with Dark Vignette & Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-boardroom-hero.jpg"
            alt="Commercial Vastu Boardroom Skyline"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1376}
            height={768}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Column: Heading & Content */}
          <div className="max-w-2xl py-6 sm:py-10">
            {/* Tag Badge */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.25em] text-amber-400 uppercase">
                COMMERCIAL VASTU
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl leading-[1.12] font-bold text-white sm:text-5xl lg:text-6xl">
              Commercial Vastu Consultation
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Aligned Spaces for Business Growth
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Harness the power of Vastu to create productive workplaces, stronger teams and
              long-term business growth.
            </p>

            {/* Feature Pills Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 sm:gap-6 sm:text-sm">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-amber-400" />
                <span>Growth</span>
              </div>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-amber-400" />
                <span>Productivity</span>
              </div>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-amber-400" />
                <span>Positive Energy</span>
              </div>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-amber-400" />
                <span>Sustainable Success</span>
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Luxury Brand Attributes */}
          <div className="hidden border-l border-amber-500/30 pl-8 lg:block">
            <div className="flex flex-col space-y-5 text-right font-serif text-xs font-semibold tracking-[0.3em] text-amber-300/90 uppercase">
              <span className="transition-colors hover:text-amber-200">BUSINESS</span>
              <span className="transition-colors hover:text-amber-200">PEOPLE</span>
              <span className="transition-colors hover:text-amber-200">GROWTH</span>
              <span className="transition-colors hover:text-amber-200">HARMONY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & INTRO SECTION (Pure White Background) */}
      <section className="bg-white pt-6 pb-16 text-slate-900 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-700">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/vastu-services" className="transition hover:text-amber-700">
              Vastu Services
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-medium text-slate-800">Commercial Vastu</span>
          </nav>

          {/* 3-Column / Intro Grid */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                COMMERCIAL VASTU CONSULTANT
              </span>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-slate-900 sm:text-4xl">
                Vastu for Offices, Retail Spaces and Business Premises
              </h2>
              <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/50 p-4">
                <p className="text-xs leading-relaxed font-medium text-slate-800">
                  <strong>Direct Answer:</strong> Commercial Vastu is the strategic spatial
                  organization of workplaces, retail showrooms, and corporate offices to support
                  leadership clarity, financial liquidity, and team productivity. At 7Rays Astro
                  Vastu, our certified methodology aligns executive seating (Southwest), finance
                  pods (North/Southeast), and client entries (North/East) using practical
                  non-demolition spatial adjustments suitable for commercial leases.
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                We provide expert Commercial Vastu consultation for offices, retail stores,
                showrooms, co-working spaces, hotels, restaurants and all types of business
                establishments. Our solutions combine ancient Vastu wisdom with modern business
                needs to create spaces that attract prosperity and support your organisational
                goals.
              </p>

              <div className="pt-8">
                <button
                  onClick={() => openBooking('Commercial Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book a Commercial Vastu Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Middle Column: 4 Value Propositions */}
            <div className="space-y-6 lg:col-span-4 lg:pl-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-2xs">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                    Personalized Analysis
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Based on your business type, space and goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-2xs">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                    Practical Solutions
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Easy-to-implement changes with real impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-2xs">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                    Minimal Disruption
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Solutions designed to work within your existing setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-2xs">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                    Long-Term Growth
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Spaces that support people, performance and profits.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Vertical Luxury Reception Photo with Quote */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl lg:col-span-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/images/services/commercial-reception-lobby.jpg"
                  alt="Modern Luxury Office Reception"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Quote Overlay */}
                <div className="absolute inset-x-4 top-8 rounded-xl border border-white/20 bg-slate-950/70 p-4 text-center backdrop-blur-md">
                  <p className="font-serif text-sm font-medium text-amber-100 italic sm:text-base">
                    &ldquo;A Balanced Workplace Builds a Brighter Future.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: Solutions for Every Business Need (Pure White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                OUR COMMERCIAL VASTU SERVICES
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Solutions for Every Business Need
              </h2>
            </div>
            <div>
              <Link
                to="/vastu-services"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-800"
              >
                <span>View All Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 5 Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {commercialServices.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Floating Icon Badge */}
                    <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-amber-300/40 bg-white/95 text-amber-700 shadow-sm backdrop-blur-xs">
                      <IconComponent className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-serif text-base font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3B. 16-ZONE COMMERCIAL ENERGY ARCHITECTURE (Pure White Background with Soft Cards) */}
      <section className="border-t border-slate-100 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              TOPICAL AUTHORITY &amp; BUSINESS ZONING
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              16-Zone Commercial Energy Architecture
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Every department, executive desk, and machine bay influences specific operational,
              administrative, and transactional dynamics. Explore our specialized commercial guides.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Zone Card 1: MD Cabin */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  SOUTH-WEST • NAIRUTYA
                </span>
                <Compass className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Executive &amp; Managing Director Cabin
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Anchors the primary decision-maker with command stability and unshakeable authority.
                Desk oriented facing North or East with a solid back wall.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/vastu/office-vastu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Office Vastu Hub</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Zone Card 2: Accounts & Finance */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  NORTH ZONE • KUBER
                </span>
                <BarChart3 className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Finance, Cashier &amp; Accounts Desk
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Governed by the water element and Lord Kubera. Position cash vaults, accountants,
                and financial records in the North to safeguard liquidity and capital preservation.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/insights/commercial-vastu/office-layout-executive-cabin-vastu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read Accounts Placement Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Zone Card 3: Conference & Negotiations */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  NORTH-WEST • VAYU ZONE
                </span>
                <Users2 className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Conference Rooms &amp; Pitching Pods
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                The air element stimulates forward momentum, persuasive communication, client
                presentation consensus, and productive stakeholder discussions.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/vastu/corporate"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Corporate Hub</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Zone Card 4: Retail Display */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  RETAIL • FOOTFALL FLOW
                </span>
                <Store className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Retail Stores &amp; Showroom Display
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Clockwise customer circulation, heavy inventory grounded on South/West perimeters,
                and cash counters oriented for swift, orderly customer transactions.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/insights/commercial-vastu/retail-store-and-showroom-vastu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read Retail Showroom Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Zone Card 5: Restaurant Kitchen */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  SOUTH-EAST • AGNEYA
                </span>
                <Flame className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Restaurant Kitchen &amp; Hospitality Dining
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Aligning commercial cooking ranges with the fire sector while isolating water
                drainage, refrigeration, and bar beverage dispensers to maintain sensory harmony.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/insights/commercial-vastu/restaurant-and-hospitality-vastu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read Hospitality Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Zone Card 6: Industrial Machinery */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  INDUSTRIAL • PLANT LAYOUT
                </span>
                <Wrench className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Factory Machinery &amp; Warehouse Staging
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Heavy machinery grounded in South-West, boiler/transformers in South-East, and
                finished goods staged in North-West for fluid logistics dispatch.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/vastu/industrial"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Industrial Hub</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Departmental & Executive Seating Decision Matrix */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                EXECUTIVE DECISION FRAMEWORK
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Workplace Seating &amp; Departmental Zoning Matrix
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                According to traditional Vastu principles, corporate organizational departments
                correlate with directional elemental sectors. Within the 7Rays consultation
                methodology, we consider these classical associations alongside physical workplace
                constraints during commercial assessments.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100/75 text-[11px] font-bold text-slate-800 uppercase">
                  <tr>
                    <th className="px-6 py-3">Role / Department</th>
                    <th className="px-6 py-3">Traditional Vastu Sector</th>
                    <th className="px-6 py-3">Governing Element</th>
                    <th className="px-6 py-3">Traditional Association</th>
                    <th className="px-6 py-3">Consultation Layout Guideline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Founders &amp; Managing Directors
                    </td>
                    <td className="px-6 py-3.5">South-West (Nairrutya)</td>
                    <td className="px-6 py-3.5">Earth (Prithvi)</td>
                    <td className="px-6 py-3.5">
                      Traditional principles associate South-West with grounding, stability, and
                      executive decision-making.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      Solid wall backing; desk oriented facing North or East where layout permits.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Finance &amp; Accounts
                    </td>
                    <td className="px-6 py-3.5">North (Kuber Zone)</td>
                    <td className="px-6 py-3.5">Water (Jala)</td>
                    <td className="px-6 py-3.5">
                      Traditional Vastu frameworks commonly associate the North with financial and
                      treasury functions.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      Cash registers &amp; accounts workstations placed in North quadrant facing
                      North or East.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Product &amp; Software Engineering
                    </td>
                    <td className="px-6 py-3.5">West &amp; North-West</td>
                    <td className="px-6 py-3.5">Air &amp; Space</td>
                    <td className="px-6 py-3.5">
                      Classical frameworks correlate West with disciplined execution and Northwest
                      with movement.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      Linear workstation rows aligned East-West to support team collaboration and
                      focus.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Sales &amp; Business Development
                    </td>
                    <td className="px-6 py-3.5">East &amp; South-East</td>
                    <td className="px-6 py-3.5">Fire (Agni)</td>
                    <td className="px-6 py-3.5">
                      Traditional frameworks associate East/Southeast sectors with dynamic
                      communication and deal momentum.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      Open collaboration pods with dynamic lighting and unimpeded movement flow.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Server Hub &amp; Electricals
                    </td>
                    <td className="px-6 py-3.5">South-East (Agni)</td>
                    <td className="px-6 py-3.5">Fire (Tejas)</td>
                    <td className="px-6 py-3.5">
                      Traditional fire sector alignment; physically harmonized with ventilation and
                      thermal management.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      Server racks arranged along South/West walls within Southeast thermal hub.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3C. AEO & BANGALORE COMMERCIAL DESK (Ivory Background) */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left: AEO Direct Answers */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase">
                DIRECT ANSWERS • AT A GLANCE
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Understanding Commercial Vastu Consultation
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    What is Commercial Vastu Shastra?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Commercial Vastu Shastra is the scientific study of spatial and energetic
                    alignment within business environments. It arranges executive cabins, financial
                    desks, employee workstations, entrance thresholds, and utilities according to
                    natural electromagnetic and solar axes to foster organizational focus,
                    leadership stability, and orderly operations.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    What does a commercial consultation include?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    A comprehensive commercial consultation includes: 16-zone CAD grid overlay on
                    architectural drawings, compass verification of primary entrances and glass
                    facades, executive cabin alignment, accounts desk evaluation, geopathic energy
                    assessment, and a phased non-demolition remedial report.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    Can an existing commercial space be corrected without demolition?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Yes. The vast majority of structural and seating imbalances in commercial
                    premises are addressed through desk reorientation, authentic metallic boundary
                    inlay strips (brass, copper, zinc, lead), and directional spatial
                    adjustments—without requiring civil works or workplace downtime.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Bangalore Commercial Hub Connection */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-300/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-800 uppercase">
                  <MapPin className="h-4 w-4" />
                  <span>BENGALURU COMMERCIAL DESK</span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">
                  On-Site Business Visits Across Bangalore
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Headquartered at {businessConfig.address.fullAddress}, 7Rays conducts on-site
                  inspections for corporate offices, retail stores, and factories across all major
                  business corridors of Greater Bengaluru, directed personally by{' '}
                  {businessConfig.ownerName}, {businessConfig.ownerJobTitle} (
                  {businessConfig.ownerExperience} experience):
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Outer Ring Road &amp; Marathahalli</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Whitefield IT Corridors</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Koramangala &amp; HSR Layout</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Indiranagar 100ft Road</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>MG Road &amp; Central Business District</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Peenya &amp; Industrial Belts</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    to="/locations/bangalore/commercial-vastu"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
                  >
                    <span>View Bangalore Commercial Landing Page</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    onClick={() => openBooking('Bangalore Commercial On-Site Visit')}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-amber-400 bg-amber-50 px-4 py-2.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100"
                  >
                    <span>Schedule On-Site Inspection</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: A Structured Process for Measurable Results (Dark Navy Background) */}
      <section className="bg-[#070E1E] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-4">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                OUR APPROACH
              </span>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-white sm:text-4xl">
                A Structured Process
                <br />
                for Measurable Results
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                We follow a practical and results-oriented approach to deliver Commercial Vastu
                solutions that align with your business goals.
              </p>

              <div className="pt-6">
                <button
                  onClick={() => openBooking('Commercial Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Learn About Our Process</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 4 Connected Steps */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:gap-4">
              {processSteps.map((step, idx) => {
                const StepIcon = step.icon
                return (
                  <div key={idx} className="relative flex flex-col items-center text-center">
                    {/* Circle Node */}
                    <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-slate-900 text-amber-400 shadow-md">
                      <StepIcon className="h-6 w-6 text-amber-400" />
                    </div>

                    {/* Step Number & Title */}
                    <div className="text-xs font-bold tracking-wider text-amber-400 uppercase">
                      {step.step}
                    </div>
                    <h3 className="mt-1 font-serif text-base font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{step.desc}</p>

                    {/* Connector Arrow (Desktop Only, except last item) */}
                    {idx < processSteps.length - 1 && (
                      <div className="absolute top-7 -right-3 hidden text-slate-500 lg:block">
                        <ChevronRight className="h-4 w-4 text-slate-500" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: Why Businesses Choose Commercial Vastu (Pure White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              KEY BENEFITS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Businesses Choose Commercial Vastu
            </h2>
          </div>

          {/* 6 Benefits Row */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {benefits.map((item, idx) => {
              const BenefitIcon = item.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center rounded-xl border border-slate-200/70 bg-white p-5 text-center transition-all duration-300 hover:border-amber-400 hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <BenefitIcon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 sm:text-sm">
                    {item.line1}
                    <br />
                    {item.line2}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. SECTION: Illustrative Scenarios & Commercial Vastu FAQ (Pure White Background) */}
      <section className="border-t border-slate-100 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Illustrative Scenarios (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                    ILLUSTRATIVE SCENARIOS
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                    Commercial Assessment Walkthroughs
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Educational walkthroughs demonstrating workplace zoning and cash flow alignment.
                  </p>
                </div>
                <Link
                  to="/case-studies"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-800"
                >
                  <span>View All Assessments</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* 3 Illustrative Scenario Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {illustrativeScenarios.map((study, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-2xs transition hover:border-amber-300 hover:shadow-md"
                  >
                    <div>
                      <div className="aspect-[4/3] w-full overflow-hidden bg-white">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="h-full w-full object-cover transition duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-sm font-bold text-slate-900">
                          {study.title}
                        </h3>
                        <div className="text-xs font-medium text-amber-700">{study.location}</div>
                        <p className="mt-2 text-[11px] leading-relaxed font-semibold text-slate-700">
                          {study.focus}
                        </p>
                        <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                          {study.protocol}
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-slate-100 p-3 pt-2">
                      <Link
                        to={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 hover:text-amber-900"
                      >
                        <span>View Scenario Walkthrough</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Commercial Vastu FAQ (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Commercial Vastu FAQ
              </h2>

              {/* Accordion */}
              <div className="mt-6 divide-y divide-slate-100 border-t border-b border-slate-100">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div key={idx} className="py-4">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="flex w-full items-center justify-between text-left text-xs font-medium text-slate-900 transition hover:text-amber-700 sm:text-sm"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <span className="shrink-0 text-amber-700">
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-3 pr-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRE-FOOTER CTA BANNER (Thin Visible Panoramic Photo Layer Before Footer) */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-8 text-white sm:py-10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-penthouse.jpg"
            alt="Commercial Prosperity Sunset Skyline"
            className="h-full w-full object-cover object-[center_35%]"
          />
          {/* Subtle translucent overlay so the sunset skyline and palm trees remain clearly visible */}
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* Left: Headline, Subtitle & Action Buttons */}
            <div className="text-center lg:col-span-8 lg:text-left">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                Let&apos;s Create a Prosperous Workspace Together
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-200 sm:text-sm">
                Book a personalized Commercial Vastu consultation with 7Rays Astro Vastu.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 lg:justify-start">
                <button
                  onClick={() => openBooking('Commercial Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Consultation</span>
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

            {/* Right: 3 Value Pillars */}
            <div className="hidden border-l border-white/20 pl-8 text-left lg:col-span-4 lg:block">
              <ul className="space-y-2.5 font-serif text-xs font-semibold tracking-wider text-slate-100 uppercase">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>ALIGN SPACES</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>EMPOWER PEOPLE</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>DRIVE GROWTH</span>
                </li>
              </ul>
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
