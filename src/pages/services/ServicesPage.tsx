import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  ArrowRight,
  Home,
  Building2,
  Factory,
  Briefcase,
  Sparkles,
  FileSearch,
  CheckCircle2,
  Heart,
  TrendingUp,
  Users,
  Sun,
  Target,
  ShieldCheck,
  MessageSquare,
  Plus,
  Minus,
  ChevronRight,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const ServicesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('General Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const whatsAppUrl = siteConfig.contact.phone
    ? `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello 7Rays Astro Vastu, I would like to schedule a Vastu consultation.'
      )}`
    : '/contact'

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const faqs = [
    {
      q: 'What types of properties do you provide Vastu consultation for?',
      a: 'We provide specialized Vastu consultations for all property types including residential spaces (apartments, penthouses, villas, plotted layouts), commercial offices (tech enterprise workspaces, retail, co-working facilities), industrial units (manufacturing plants, warehouses), and institutional buildings.',
    },
    {
      q: 'Do you offer both online and on-site consultations?',
      a: 'Yes. We provide complete online CAD blueprint audits across India and worldwide using high-precision 16-zone angular grids and astrological overlays. We also conduct comprehensive on-site geopathic stress scans and energy evaluations throughout Bangalore and major metropolitan cities.',
    },
    {
      q: 'How long does a Vastu consultation take?',
      a: 'Comprehensive blueprint audits typically take 2 to 4 business days. On-site property visits generally require 2 to 3 hours depending on the total square footage and complexity of the layout.',
    },
    {
      q: 'Will I need to make major structural changes?',
      a: 'No. At 7Rays, the vast majority of Vastu imbalances are addressed through non-demolition remedies. We use authentic metallic inlay materials (brass, copper, zinc, lead) and directional spatial adjustments to correct directional and elemental discrepancies without requiring structural changes.',
    },
    {
      q: 'Do you provide a detailed report?',
      a: 'Yes. Every client receives an exhaustive, color-coded 16-zone architectural audit report detailing directional padavinyasa, Pancha Tattva elemental distributions, planetary Dasha alignments, and prioritized non-destructive remedy blueprints.',
    },
    {
      q: 'How do I book a consultation?',
      a: 'You can easily request a consultation using the online booking form on our website or by contacting our desk directly on WhatsApp or phone for immediate scheduling.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Vastu Consultancy Services in Bangalore | 7Rays"
        description="Comprehensive Vastu Shastra and Vedic Astrology consultation services in Bangalore by Certified Vastu Consultant Rishwa Sinha. Non-demolition residential, commercial, industrial, and audit solutions."
        canonicalUrl={`${siteConfig.url}/vastu-services`}
      />
      <BreadcrumbSchema items={[{ name: 'Vastu Services', url: '/vastu-services' }]} />
      <FAQSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* 1. HERO SECTION (Matching Mockup with Luxury Penthouse Background) */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden py-24 sm:py-32">
        <img
          src="/images/hero-penthouse.jpg"
          alt="Luxury penthouse interior with floor to ceiling glass windows and golden sunlight"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
            <span>• VASTU SERVICES</span>
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl lg:text-7xl">
            Vastu Solutions <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
              for Every Space
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Timeless Vastu principles, Practical solutions. Harmonious spaces for a better tomorrow.
          </p>

          {/* 5 Feature Tags Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-300 sm:gap-4">
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Homes</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Offices</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Businesses</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Industries</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Spaces</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & INTRO SECTION (Pure White Background) */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-700">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-semibold text-amber-800">Vastu Services</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left: Narrative & CTA */}
            <div className="space-y-5 lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                OUR VASTU SERVICES
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                Spaces in Balance. <br />
                <span className="text-amber-700">Lives in Harmony.</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                At 7Rays Astro Vastu, we offer expert Vastu consultation for all types of spaces —
                from homes and apartments to offices, commercial spaces, industrial units and more.
                Our solutions are practical, modern and designed for today's lifestyles and business
                needs.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openBooking('Vastu Consultation Inquiry')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right: 4 Feature Cards Row */}
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:col-span-6">
              <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center shadow-2xs transition hover:border-amber-400">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <Home className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xs font-bold text-slate-900">Personalized</h3>
                <span className="text-[11px] text-slate-500">Consultations</span>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center shadow-2xs transition hover:border-amber-400">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xs font-bold text-slate-900">Practical</h3>
                <span className="text-[11px] text-slate-500">&amp; Implementable</span>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center shadow-2xs transition hover:border-amber-400">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xs font-bold text-slate-900">Modern</h3>
                <span className="text-[11px] text-slate-500">Approach</span>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center shadow-2xs transition hover:border-amber-400">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xs font-bold text-slate-900">Trusted</h3>
                <span className="text-[11px] text-slate-500">Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID (2x3 Layout with High-Fidelity Cards Matching Mockup) */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 1. Residential Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-xl">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/residential-vastu.jpg"
                    alt="Residential Vastu apartment in Bangalore"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Home className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 transition group-hover:text-amber-800">
                    Residential Vastu
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Create harmonious, balanced and positive living environments for homes,
                    apartments and villas.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/vastu/residential"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Commercial Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-xl">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/commercial-vastu.jpg"
                    alt="Commercial Vastu modern office layout in Bangalore"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 transition group-hover:text-amber-800">
                    Commercial Vastu
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Optimize offices, retail spaces and business environments for growth and
                    success.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/vastu/commercial"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Non-Demolition Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-xl">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/residential-vastu.jpg"
                    alt="Non-Demolition Vastu metallic inlays and elemental balancing"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 transition group-hover:text-amber-800">
                    Non-Demolition Vastu
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Harmonize rented flats, apartments, and corporate offices using elemental
                    metallic inlays with zero structural damage.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/vastu/non-demolition"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. Industrial Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-xl">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/industrial-vastu.jpg"
                    alt="Industrial manufacturing plant Vastu planning"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Factory className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 transition group-hover:text-amber-800">
                    Industrial Vastu
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Vastu planning for factories, warehouses, manufacturing units and industrial
                    spaces.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/vastu/industrial"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 5. Corporate Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-xl">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/corporate-vastu.jpg"
                    alt="Corporate Vastu executive boardroom"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 transition group-hover:text-amber-800">
                    Corporate Vastu
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Strategic spatial guidance for modern workplaces and corporate organisations.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/vastu/corporate"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 6. Astrology Consultation */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-xl">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/astrology-consultation.jpg"
                    alt="Vedic Astrology birth chart reading"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 transition group-hover:text-amber-800">
                    Astrology Consultation
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Personalized astrological guidance and life insights for a brighter future.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/astrology"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 7. Vastu Audit */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-xl">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/vastu-audit.jpg"
                    alt="Vastu Audit blueprint analysis"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <FileSearch className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 transition group-hover:text-amber-800">
                    Vastu Audit
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Detailed analysis of existing properties with practical recommendations and
                    remedies.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/vastu-services/vastu-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH / PROCESS (Dark Midnight Navy Matching Mockup) */}
      <section className="relative overflow-hidden border-y border-amber-500/20 bg-slate-950 py-20 text-slate-100 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: Heading & Intro */}
            <div className="space-y-6 lg:col-span-4">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                OUR APPROACH
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-100 sm:text-4xl lg:text-5xl">
                A Simple Process. <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Powerful Results.
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                We follow a structured and transparent process to deliver practical Vastu solutions
                that create harmonious spaces and meaningful change.
              </p>
              <div className="pt-2">
                <Link
                  to="/process"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Learn About Our Process</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: 4 Horizontal Process Steps */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-8">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center backdrop-blur-xs transition hover:border-amber-400/60">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <Home className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold text-amber-400">01</span>
                <h3 className="font-serif text-sm font-bold text-slate-100">Understand</h3>
                <p className="mt-1 text-[11px] leading-tight text-slate-400">
                  Understand your property, requirements and goals.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center backdrop-blur-xs transition hover:border-amber-400/60">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <Compass className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold text-amber-400">02</span>
                <h3 className="font-serif text-sm font-bold text-slate-100">Analyse</h3>
                <p className="mt-1 text-[11px] leading-tight text-slate-400">
                  Analyse directions, layout, elements and energy zones.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center backdrop-blur-xs transition hover:border-amber-400/60">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <FileSearch className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold text-amber-400">03</span>
                <h3 className="font-serif text-sm font-bold text-slate-100">Recommend</h3>
                <p className="mt-1 text-[11px] leading-tight text-slate-400">
                  Develop personalized Vastu recommendations.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center backdrop-blur-xs transition hover:border-amber-400/60">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <Target className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold text-amber-400">04</span>
                <h3 className="font-serif text-sm font-bold text-slate-100">Transform</h3>
                <p className="mt-1 text-[11px] leading-tight text-slate-400">
                  Implement practical changes for a more harmonious space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE BENEFITS: MORE THAN JUST SPACES (White Background) */}
      <section className="border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              THE BENEFITS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              More Than Just Spaces
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Vastu is not just about directions; it's about creating environments that support your
              health, wealth, happiness and growth.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-amber-500" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              {
                icon: Heart,
                title: 'Better Health',
                subtitle: '& Well-being',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                subtitle: '& Prosperity',
              },
              {
                icon: Users,
                title: 'Positive',
                subtitle: 'Relationships',
              },
              {
                icon: Sun,
                title: 'Peace &',
                subtitle: 'Mental Clarity',
              },
              {
                icon: Target,
                title: 'Productivity',
                subtitle: '& Focus',
              },
              {
                icon: Sparkles,
                title: 'Long-Term',
                subtitle: 'Harmony',
              },
            ].map((benefit, idx) => {
              const IconComp = benefit.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/50 p-5 text-center shadow-2xs transition-all duration-300 hover:border-amber-400 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 sm:text-sm">
                    {benefit.title}
                  </h3>
                  <span className="text-[11px] text-slate-500">{benefit.subtitle}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. PRE-FOOTER SUNSET CTA BANNER (With Translucent Quote Card on Right) */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.jpg"
          alt="Luxury architectural terrace overlooking golden sunset horizon"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: Heading & Buttons */}
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl lg:text-6xl">
                Every Space Has Potential. <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Let's Unlock Yours.
                </span>
              </h2>

              <p className="max-w-xl text-sm leading-relaxed font-light text-slate-200 sm:text-base">
                Book a personalized Vastu consultation with 7Rays Astro Vastu.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => openBooking('General Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Your Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right: Elegant Translucent Quote Card matching Mockup */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/20 bg-slate-950/60 p-6 text-left shadow-2xl backdrop-blur-md">
                <p className="font-serif text-base leading-relaxed text-slate-200 italic">
                  "When your space is in harmony, life flows effortlessly."
                </p>
                <span className="mt-3 block text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  — 7Rays Astro Vastu
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) (Pure White Background) */}
      <section className="border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left: Heading & Intro */}
            <div className="space-y-4 lg:col-span-4">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Vastu Services FAQ
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                Find answers to common questions about our Vastu services, consultation process and
                what to expect.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 transition hover:border-amber-400 hover:text-amber-800"
                >
                  <span>View All FAQs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Accordion List */}
            <div className="space-y-3 lg:col-span-8">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-amber-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-4 text-left transition sm:p-5"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 font-serif text-sm font-bold text-slate-900 sm:text-base">
                        {faq.q}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 px-4 pt-3 pb-5 sm:px-5">
                        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  )
}
