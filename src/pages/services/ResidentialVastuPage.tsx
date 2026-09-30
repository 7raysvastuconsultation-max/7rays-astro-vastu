import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Heart,
  Sun,
  Leaf,
  Users2,
  BarChart3,
  Building2,
  Sparkles,
  Wrench,
  Search,
  FileText,
  Infinity as InfinityIcon,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
  MessageSquare,
  CheckCircle2,
  Compass,
  MapPin,
  Flame,
  ShieldCheck,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const ResidentialVastuPage: React.FC = () => {
  const routerLocation = useLocation()
  const isVastuServicesAlias = routerLocation.pathname.includes('/vastu-services/')
  const pageTitle = isVastuServicesAlias
    ? 'Home Vastu Shastra Consultation in Bangalore | 7Rays'
    : 'Residential Vastu Consultant in Bangalore | 7Rays'
  const canonicalUrl = `${siteConfig.url}/vastu/residential`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Residential Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const whatsAppUrl = siteConfig.contact.phone
    ? `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello 7Rays Astro Vastu, I would like to book a Residential Vastu consultation for my home.'
      )}`
    : '/contact'

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const residentialServices = [
    {
      id: 'apartment-vastu',
      title: 'Apartment & Flat Vastu',
      image: '/images/projects/luxury-residence-mumbai.jpg',
      icon: Building2,
      description:
        'Practical non-demolition Vastu solutions for high-rise apartments, shared walls, and leased flats.',
      cta: 'Explore Apartment Vastu',
      link: '/vastu/apartment-vastu',
    },
    {
      id: 'villa-vastu',
      title: 'Villa & Duplex Vastu',
      image: '/images/projects/villa-goa.jpg',
      icon: Sparkles,
      description:
        'Harmonious space planning for independent villas, gated community duplexes, and private estates.',
      cta: 'Bangalore Villa Services',
      link: '/locations/bangalore/residential-vastu',
    },
    {
      id: 'new-home-vastu',
      title: 'New Home Construction',
      image: '/images/services/residential-vastu.jpg',
      icon: Home,
      description:
        'Ensure your architectural CAD blueprints and foundation are aligned with cardinal energies before building.',
      cta: 'Construction Planning',
      link: '/vastu-services',
    },
    {
      id: 'existing-home-corrections',
      title: 'Existing Home Corrections',
      image: '/images/services/residential-corrections.jpg',
      icon: Wrench,
      description:
        'Practical, non-demolition remedies using elemental metallic strips and spatial alignment for existing homes.',
      cta: 'Non-Demolition Remedies',
      link: '/vastu/non-demolition',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'We learn about your home, lifestyle and goals.',
      icon: Home,
    },
    {
      step: '02',
      title: 'Analyse',
      desc: 'We study the layout, directions and energy flow.',
      icon: Search,
    },
    {
      step: '03',
      title: 'Recommend',
      desc: 'We provide easy-to-implement solutions and remedies.',
      icon: FileText,
    },
    {
      step: '04',
      title: 'Transform',
      desc: 'You experience a more balanced, happier and prosperous home.',
      icon: Sparkles,
    },
  ]

  const benefits = [
    {
      icon: Heart,
      line1: 'Better Health',
      line2: '& Well-being',
    },
    {
      icon: Users2,
      line1: 'Stronger',
      line2: 'Relationships',
    },
    {
      icon: Leaf,
      line1: 'Peaceful',
      line2: 'Living Environment',
    },
    {
      icon: BarChart3,
      line1: 'Financial',
      line2: 'Stability',
    },
    {
      icon: Sparkles,
      line1: 'Positive',
      line2: 'Mindset',
    },
    {
      icon: InfinityIcon,
      line1: 'Long-Term',
      line2: 'Happiness',
    },
  ]

  const illustrativeScenarios = [
    {
      property: 'High-Rise Apartment (3BHK)',
      location: 'Whitefield, Bangalore',
      focus: 'Master Bedroom Sleep & Directional Alignment',
      protocol: 'Calibrated digital compass mapping & zinc boundary strip floor inlays',
      slug: 'whitefield-apartment-health-harmony',
      image: '/images/services/residential-new-home.jpg',
    },
    {
      property: 'Independent Villa',
      location: 'Goa',
      focus: 'Perimeter Drainage & Geopathic Evaluation',
      protocol: 'Digital Gauss meter electromagnetic scan & directional landscaping',
      slug: 'villa-goa',
      image: '/images/projects/villa-goa.jpg',
    },
    {
      property: 'Coastal Penthouse',
      location: 'Mumbai',
      focus: 'Entrance Pada & Non-Demolition Grid Overlay',
      protocol: '16-zone CAD grid overlay & brass threshold boundary alignment',
      slug: 'luxury-residence-mumbai',
      image: '/images/projects/luxury-residence-mumbai.jpg',
    },
  ]

  const faqs = [
    {
      question: 'How can Vastu improve my home life?',
      answer:
        'Vastu aligns the 16 cardinal and elemental directions of your home with cosmic energy flows. This optimizes sleep quality, family harmony, health vitality, and financial stability by eliminating unseen energetic blocks and stress zones.',
    },
    {
      question: 'Do you offer Vastu consultation for apartments?',
      answer:
        'Yes. Most of our residential clients live in high-rise apartments and leased flats. We specialize in non-structural Vastu corrections tailored specifically for apartment limitations where walls and entrances cannot be moved.',
    },
    {
      question: 'Can Vastu remedies be done without structural changes?',
      answer:
        'Absolutely. The vast majority of residential Vastu imbalances are addressed through non-demolition methods. Where applicable, authentic metallic inlay materials (brass, copper, zinc, lead) and directional spatial adjustments are used without requiring structural changes.',
    },
    {
      question: 'How long does a consultation take?',
      answer:
        'An on-site residential visit typically takes 2 to 3 hours depending on property size. For online CAD blueprint audits, delivery of the comprehensive report and recommendations usually takes 2 to 4 business days.',
    },
    {
      question: 'Do you provide both online and on-site consultations?',
      answer:
        'Yes. We provide complete online blueprint consultations across India and globally via architectural CAD drawings and video walkthroughs, as well as hands-on on-site energy scans in Bangalore and major cities.',
    },
    {
      question: 'What information do I need before the consultation?',
      answer:
        'You will need your property floor plan or architectural layout, exact North directional orientation (or Google Maps location), family birth details if astrological overlay is requested, and a brief summary of your core family goals.',
    },
  ]

  return (
    <>
      <SEOHead
        title={pageTitle}
        description="Create a harmonious and prosperous home with expert Residential Vastu consultation for apartments, villas, and independent homes. Zero structural demolition."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Vastu Services', url: '/vastu-services' },
          { name: 'Residential Vastu', url: '/vastu-services/residential-vastu' },
        ]}
      />
      <ServiceSchema
        name="Residential Vastu Consultation"
        description="Expert Residential Vastu consultation for apartments, villas, new homes, and existing properties."
        serviceType="Residential Vastu Shastra"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={faqs} />

      {/* 1. HERO SECTION (Sunlit Luxury Penthouse Living Room) */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:min-h-[640px] sm:pt-36 sm:pb-20">
        {/* Background Image with Dark Vignette & Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-penthouse.jpg"
            alt="Residential Vastu Harmonious Living Room"
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
                RESIDENTIAL VASTU
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl leading-[1.12] font-bold text-white sm:text-5xl lg:text-6xl">
              Residential Vastu Consultation
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Harmonious Homes &amp; Brighter Lives
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Create a home that supports your health, relationships, peace and prosperity with
              expert Residential Vastu.
            </p>

            {/* Feature Pills Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 sm:gap-6 sm:text-sm">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4 text-amber-400" />
                <span>Peace</span>
              </div>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-amber-400" />
                <span>Well-being</span>
              </div>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-amber-400" />
                <span>Positive Energy</span>
              </div>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-amber-400" />
                <span>Prosperity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Illuminated Golden Vastu Mandala & Quote */}
          <div className="relative hidden w-80 lg:block">
            {/* Glowing Golden Astrolabe / Mandala background */}
            <div className="relative flex flex-col items-center text-center">
              <img
                src="/images/footer-mandala.png"
                alt="Vastu Purusha Mandala"
                className="h-48 w-48 object-contain opacity-75 drop-shadow-[0_0_25px_rgba(251,191,36,0.35)]"
              />
              {/* Quote Card */}
              <div className="mt-2 rounded-xl border border-amber-400/30 bg-slate-950/70 p-4 text-center backdrop-blur-md">
                <p className="font-serif text-sm font-medium text-amber-200 italic">
                  &ldquo;A Home in Harmony Creates a Brighter You&rdquo;
                </p>
              </div>
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
            <span className="font-medium text-slate-800">Residential Vastu</span>
          </nav>

          {/* 3-Column / Intro Grid */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                RESIDENTIAL VASTU CONSULTANT
              </span>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-slate-900 sm:text-4xl">
                Vastu for Homes, Apartments and Villas
              </h2>
              <div className="mt-4 rounded-xl border border-amber-200/80 bg-[#FAF8F5] p-4">
                <p className="text-xs leading-relaxed font-medium text-slate-800">
                  <strong>Direct Answer:</strong> Residential Vastu is the spatial alignment of
                  domestic living zones—entrances, bedrooms, kitchens, and living areas—with natural
                  directional elements (Pancha Tattva). Within the 7Rays consultation framework led
                  by Rishwa Sinha (Certified Vastu Consultant, 5+ years experience), we evaluate 16
                  directional zones to enhance family harmony and restful sleep using non-demolition
                  remedies tailored for apartments, villas, and independent homes.
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                Our Residential Vastu consultation helps you create a balanced and positive living
                environment that enhances your health, wealth, relationships and overall well-being.
                Whether you are building a new home, buying a property or seeking remedies for an
                existing space, we provide practical, easy-to-implement Vastu solutions tailored to
                your lifestyle.
              </p>

              <div className="pt-8">
                <button
                  onClick={() => openBooking('Residential Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book a Residential Vastu Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Middle Column: 4 Value Propositions */}
            <div className="space-y-6 lg:col-span-4 lg:pl-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-2xs">
                  <Users2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                    Happier Families
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Strengthen relationships and create a peaceful home environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-2xs">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                    Better Health
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Promote physical and mental well-being through balanced energy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-2xs">
                  <Sun className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                    Positive Energy
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Enhance the natural flow of positivity and remove blockages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-2xs">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                    Wealth &amp; Prosperity
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Attract abundance and stability into your life.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Vertical Luxury Bedroom Photo with Quote */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl lg:col-span-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
                <img
                  src="/images/services/residential-bedroom.jpg"
                  alt="Modern Luxury Master Bedroom"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                {/* Quote Overlay */}
                <div className="absolute inset-x-4 top-8 rounded-xl border border-white/20 bg-slate-950/70 p-4 text-center backdrop-blur-md">
                  <p className="font-serif text-sm font-medium text-amber-100 italic sm:text-base">
                    &ldquo;Your Home Sets the Energy for Your Entire Life.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: Solutions for Every Home (Pure White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              OUR RESIDENTIAL VASTU SERVICES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Solutions for Every Home
            </h2>
          </div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {residentialServices.map((service) => {
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

                    <div className="flex items-center justify-between pt-4">
                      {service.link ? (
                        <Link
                          to={service.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                        >
                          <span>{service.cta}</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => openBooking(service.title)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                        >
                          <span>{service.cta}</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3B. ROOM-BY-ROOM ENERGY ARCHITECTURE (Pure White Background with Soft Cards) */}
      <section className="border-t border-slate-100 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              TOPICAL AUTHORITY &amp; ROOM-BY-ROOM VASTU
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              16-Zone Residential Energy Alignment
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Every quadrant of your living space influences specific bio-energetic, psychological,
              and financial dimensions. Explore our detailed directional guides below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Room Card 1: Master Bedroom */}
            <div className="group rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  SOUTH-WEST • NAIRUTYA
                </span>
                <Compass className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Master Bedroom &amp; Bed Placement
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                The earth quadrant for stability, restful sleep, and marital harmony. Learn optimal
                sleeping head directions and mirror placements.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/insights/master-bedroom-vastu-guidelines"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read Master Bedroom Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Room Card 2: Kitchen & Agni */}
            <div className="group rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  SOUTH-EAST • AGNEYA
                </span>
                <Flame className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Kitchen &amp; Fire Element (Agni)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Balancing the metabolic fire for family vitality and steady cash flow. Resolving
                common modular kitchen fire-water conflicts.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/insights/kitchen-vastu-direction-guide"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read Kitchen Vastu Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Room Card 3: Toilet & Drainage */}
            <div className="group rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  DISPOSAL • NON-DEMOLITION
                </span>
                <Wrench className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Toilet &amp; Drainage Neutralization
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Neutralizing negative disposal fields in North-East or South-West zones using
                metallic boundary strips and directional realignment.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/insights/bathroom-toilet-vastu-remedies"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read Toilet Remedies Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Room Card 4: North Facing Blueprint */}
            <div className="group rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  NORTH ZONE • KUBER
                </span>
                <Compass className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                North Facing House Blueprint
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Harnessing the celestial wealth sector. Evaluating the 8 Northern entrance padas
                (N1–N8) with specific focus on Mukhya and Bhallat.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/insights/north-facing-house-vastu-plan"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read North Facing Blueprint</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Room Card 5: South Facing Myths */}
            <div className="group rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  SOUTH ZONE • MARS &amp; YAMA
                </span>
                <ShieldCheck className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                South Facing House: Myths vs Reality
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Debunking superstition. How the Vithetha (S3) and Grihakshata (S4) padas create
                immense fame, leadership authority, and commercial victory.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/insights/south-facing-house-vastu-myths"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read South Facing Myth Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Room Card 6: Apartment Specialized Service */}
            <div className="group rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  HIGH-RISE • FLATS
                </span>
                <Building2 className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Apartment &amp; High-Rise Flat Vastu
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Dedicated solutions for multi-storey living, shared party walls, central light
                wells, and leased apartments without civil alterations.
              </p>
              <div className="mt-4 border-t border-slate-200/70 pt-3">
                <Link
                  to="/vastu/apartment-vastu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Apartment Vastu Hub</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Comparative Framework: Apartment vs Villa Vastu Realities */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-amber-200/80 bg-white shadow-xs">
            <div className="border-b border-amber-200/80 bg-[#FAF8F5] px-6 py-4">
              <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                PRACTICAL DECISION FRAMEWORK
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                High-Rise Apartment vs. Independent Villa Vastu Comparison
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                According to traditional Vastu principles, residential spaces interact with cardinal
                energy axes. In modern housing, physical construction realities (shear walls,
                plumbing shafts) require practical non-demolition methodology rather than civil
                alteration.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-amber-100/70 font-serif text-[11px] font-bold text-amber-950 uppercase">
                  <tr>
                    <th className="px-6 py-3">Evaluation Dimension</th>
                    <th className="px-6 py-3">High-Rise Apartment Reality</th>
                    <th className="px-6 py-3">Independent Villa Reality</th>
                    <th className="px-6 py-3">7Rays Remedial Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-amber-50/40">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Structural Walls &amp; Columns
                    </td>
                    <td className="px-6 py-3.5">
                      Fixed RCC shear walls; civil demolition strictly prohibited by building
                      association bylaws.
                    </td>
                    <td className="px-6 py-3.5">
                      Load-bearing columns fixed, but non-structural internal partitions may allow
                      planned adjustments.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      Elemental boundary metallic strips (brass, copper, zinc) inlaid flush with
                      flooring; zero civil destruction.
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/40">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Plumbing &amp; Wet Shafts
                    </td>
                    <td className="px-6 py-3.5">
                      Fixed common vertical plumbing core shared across multi-storey residential
                      stacks.
                    </td>
                    <td className="px-6 py-3.5">
                      Dedicated private drainage routes, rainwater sumps, and septic facilities.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      Traditional elemental boundary wire or metallic strip placement along floor
                      perimeters without altering plumbing.
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/40">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Main Entrance (Pada)
                    </td>
                    <td className="px-6 py-3.5">
                      Determined by architectural floor plan opening into shared common access
                      lobby.
                    </td>
                    <td className="px-6 py-3.5">
                      Main compound gate and front portal can be planned during architectural
                      design.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      Recessed brass or zinc threshold inlays to address traditional entrance pada
                      alignments.
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/40">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      Environmental &amp; Subterranean Factors
                    </td>
                    <td className="px-6 py-3.5">
                      Ambient electromagnetic fields influenced by building electrical
                      infrastructure.
                    </td>
                    <td className="px-6 py-3.5">
                      Direct interaction with natural subterranean soil contours, groundwater flow,
                      and site topography.
                    </td>
                    <td className="px-6 py-3.5 font-medium text-amber-800">
                      On-site screening with digital Gauss meters for ambient field levels combined
                      with classical compass degree bed headboard realignment.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3C. AEO & BANGALORE AUTHORITY SECTION (Ivory Background) */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left: AEO Direct Answers */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase">
                DIRECT ANSWERS • AT A GLANCE
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Understanding Residential Vastu Consultation
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    What is Residential Vastu Shastra?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Residential Vastu Shastra is the traditional Indian science of spatial
                    architecture that harmonizes living environments with solar radiation,
                    geomagnetic axes, and the five natural elements (Pancha Tattva). By orienting
                    functional zones (sleep, cooking, worship, drainage) to their natural elemental
                    sectors, it optimizes health, harmony, and vitality for the occupants.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    What does a consultation include?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    A comprehensive residential consultation includes: 16-zone CAD directional grid
                    mapping, exact entrance pada identification, bedroom and kitchen elemental
                    evaluation, geopathic stress energy assessment, and a detailed non-demolition
                    remedial action report.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    Can Vastu corrections be done without demolition?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Yes. The vast majority of Vastu imbalances in modern flats and houses are
                    addressed without structural demolition, using authentic metallic inlay
                    materials (brass, copper, zinc, lead) and directional spatial adjustments.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Bangalore Local Hub Connection */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-300/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-800 uppercase">
                  <MapPin className="h-4 w-4" />
                  <span>BENGALURU RESIDENTIAL DESK</span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">
                  On-Site Home Visits Across Bangalore
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Headquartered at {businessConfig.address.fullAddress}, 7Rays conducts on-site
                  inspections for apartments, villas, and independent residences across all zones of
                  Greater Bengaluru, directed personally by {businessConfig.ownerName},{' '}
                  {businessConfig.ownerJobTitle} ({businessConfig.ownerExperience} experience):
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Hebbal &amp; Yelahanka</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Indiranagar</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>HSR Layout</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Whitefield</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Koramangala</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                    <span>Sarjapur Road</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    to="/locations/bangalore/residential-vastu"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
                  >
                    <span>View Bangalore Residential Landing Page</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    onClick={() => openBooking('Bangalore Home Visit')}
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

      {/* 4. SECTION: A Simple Path to a Harmonious Home (Dark Midnight Navy Background) */}
      <section className="relative overflow-hidden bg-[#070E1E] py-16 text-white sm:py-20">
        {/* Golden Astrolabe Watermark on Left Edge */}
        <div className="pointer-events-none absolute -bottom-12 -left-16 z-0 opacity-15">
          <img
            src="/images/footer-mandala.png"
            alt="Astrolabe Sacred Geometry"
            className="h-96 w-96 object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-4">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                OUR PROCESS
              </span>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-white sm:text-4xl">
                A Simple Path to a
                <br />
                Harmonious Home
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                We follow a structured and practical approach to deliver personalized Vastu
                solutions for your home.
              </p>

              <div className="pt-6">
                <button
                  onClick={() => openBooking('Residential Vastu Consultation')}
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

      {/* 5. SECTION: A Home That Supports Your Best Life (Pure White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              KEY BENEFITS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              A Home That Supports Your Best Life
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

      {/* 6. SECTION: Illustrative Assessments & Residential Vastu FAQ (Pure White Background) */}
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
                    Methodology Walkthroughs
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Educational walkthroughs demonstrating compass mapping and non-demolition
                    remedies.
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
                          alt={study.property}
                          className="h-full w-full object-cover transition duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-sm font-bold text-slate-900">
                          {study.property}
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

            {/* Right Column: Residential Vastu FAQ (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Residential Vastu FAQ
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
            alt="Residential Harmony Living Room Sunset"
            className="h-full w-full object-cover object-[center_35%]"
          />
          {/* Subtle translucent overlay so the panoramic living room and plants remain clearly visible */}
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* Left: Headline, Subtitle & Action Buttons */}
            <div className="text-center lg:col-span-8 lg:text-left">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                Ready to Create a Harmonious Home?
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-200 sm:text-sm">
                Book your personalized Residential Vastu consultation with 7Rays Astro Vastu.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 lg:justify-start">
                <button
                  onClick={() => openBooking('Residential Vastu Consultation')}
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

            {/* Right: 4 Value Pillars */}
            <div className="hidden border-l border-white/20 pl-8 text-left lg:col-span-4 lg:block">
              <ul className="space-y-2.5 font-serif text-xs font-semibold tracking-wider text-slate-100 uppercase">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>HARMONY</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>HEALTH</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>PROSPERITY</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>HAPPINESS</span>
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
