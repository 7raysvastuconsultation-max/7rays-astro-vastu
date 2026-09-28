import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Home,
  Factory,
  Briefcase,
  Compass,
  FileSearch,
  CheckCircle2,
  Award,
  Users,
  HeartHandshake,
  MessageSquare,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { WebSiteSchema } from '@/components/seo/schemas/WebSiteSchema'
import { SevenRaysSection } from '@/components/home/SevenRaysSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { InsightsSection } from '@/components/home/InsightsSection'
import { ConsultationModal } from '@/components/common/ConsultationModal'
import { siteConfig } from '@/config/site'
import { env } from '@/config/env'
import { trackConversion } from '@/utils/analytics'

export const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('residential-vastu')

  const openBooking = (serviceKey: string = 'residential-vastu') => {
    setSelectedService(serviceKey)
    setIsModalOpen(true)
    trackConversion('consultation_booking', `Homepage - ${serviceKey}`)
  }

  const whatsAppUrl = `https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(
    env.whatsAppDefaultMessage
  )}`

  return (
    <>
      <SEOHead
        title="Vastu & Astrology Consultant in Bangalore | 7Rays Astro Vastu"
        description="7Rays Astro Vastu blends ancient Vastu Shastra principles with modern spatial architecture, Vedic astrology, and geopathic energy diagnostics in Bangalore, India."
        canonicalUrl={siteConfig.url}
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />

      {/* 1. HERO SECTION: Full-Bleed Panoramic Penthouse (Matching Mockup Exactly) */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-slate-950 lg:min-h-[92vh]">
        {/* Full-Bleed Background Penthouse Image */}
        <img
          src="/images/hero-penthouse.jpg"
          alt="7Rays Astro Vastu Luxury Penthouse with Golden Sunbeams and Sacred Geometry"
          fetchPriority="high"
          loading="eager"
          width={1376}
          height={768}
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover object-right lg:object-center"
        />

        {/* Cinematic Dark Gradient Overlay on Left Side for Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent sm:via-slate-950/65 lg:to-transparent" />

        {/* Subtle Top & Bottom Vignettes */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/90 to-transparent" />

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <span>HARMONIOUS SPACES • BRIGHTER LIVES</span>
            </div>

            {/* Main Headline in Pure Elegant White */}
            <h1 className="font-serif text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-6xl lg:text-[68px]">
              Align Your Space. <br />
              Transform Your Life.
            </h1>

            {/* Subtitle */}
            <p className="max-w-lg text-sm leading-relaxed font-light text-slate-200 sm:text-base">
              Ancient Vastu wisdom, refined for modern living and thriving spaces.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openBooking('hero-cta')}
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/25 transition-all duration-300 hover:from-amber-300 hover:to-amber-500 hover:shadow-amber-500/40"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/vastu-services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-slate-900/60 px-7 py-3.5 text-xs font-semibold text-white backdrop-blur-md transition hover:border-amber-400/60 hover:bg-slate-900/80"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Tag Pill Bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/15 pt-5 text-xs text-slate-300">
              <span className="text-amber-400">✦</span>
              <span>Vastu</span>
              <span className="text-slate-500">•</span>
              <span>Astrology</span>
              <span className="text-slate-500">•</span>
              <span>Space Planning</span>
              <span className="text-slate-500">•</span>
              <span>Energy Alignment</span>
            </div>
          </div>
        </div>

        {/* Bottom Right Floating Badge: Watch Our Story */}
        <div className="absolute right-8 bottom-8 z-10 hidden items-center gap-3 rounded-full border border-amber-400/30 bg-slate-950/70 px-4 py-2 text-xs text-white backdrop-blur-md transition hover:border-amber-400 lg:flex">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-slate-950">
            <span className="text-[10px] font-bold">▶</span>
          </div>
          <span className="font-serif text-xs tracking-wider text-amber-200">Watch Our Story</span>
        </div>
      </section>

      {/* 2. TRUST BAR (Pure Crisp White Background matching Mockup) */}
      <section className="border-b border-slate-200 bg-white py-10 text-slate-900 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {/* Metric 1: Verified Experience */}
            <div className="flex flex-col items-center space-y-1.5 p-3">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                5+ Years
              </span>
              <span className="text-xs font-medium text-slate-600">Professional Experience</span>
            </div>

            {/* Metric 2: Verified Certification */}
            <div className="flex flex-col items-center space-y-1.5 p-3">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                <Users className="h-5 w-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Certified
              </span>
              <span className="text-xs font-medium text-slate-600">Vastu Consultant</span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center space-y-1.5 p-3">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="font-serif text-lg leading-tight font-bold text-slate-900 sm:text-xl">
                Residential &amp; Commercial
              </span>
              <span className="text-xs font-medium text-slate-600">Spatial Energy Planning</span>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center space-y-1.5 p-3">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <span className="font-serif text-lg leading-tight font-bold text-slate-900 sm:text-xl">
                Non-Demolition
              </span>
              <span className="text-xs font-medium text-slate-600">Spatial Remedies</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (Crisp White Background Matching Mockup) */}
      <section className="border-b border-slate-200 bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Consultant Photograph Column */}
            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <img
                  src="/images/rishwa-sinha.jpg"
                  alt="Rishwa Sinha - Certified Vastu Consultant & Founder of 7Rays Astro Vastu"
                  loading="lazy"
                  width={853}
                  height={1024}
                  decoding="async"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Founder Tag & Quote Banner */}
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="font-serif text-sm text-slate-800 italic">
                  "Better Spaces Create Better Lives."
                </p>
                <span className="mt-1 block text-xs font-bold text-amber-800">Rishwa Sinha</span>
                <span className="block text-[11px] font-medium text-slate-600">
                  Certified Vastu Consultant &amp; Founder
                </span>
              </div>
            </div>

            {/* About Story & Credentials Column */}
            <div className="space-y-6 text-left lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                ABOUT 7RAYS ASTRO VASTU
              </span>

              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-900 sm:text-5xl">
                Ancient Wisdom. <br />
                <span className="text-amber-700">Modern Perspective.</span>
              </h2>

              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                At 7Rays Astro Vastu, we blend timeless Vastu principles with modern architecture,
                spatial planning and astrological insights to create harmonious spaces that support
                your health, wealth, relationships and growth. Our approach is practical,
                personalized and designed for modern living.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:border-amber-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-slate-900">
                      Traditional Knowledge
                    </h3>
                    <p className="text-xs text-slate-500">Authentic Vedic Shastras</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:border-amber-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-slate-900">
                      Modern Solutions
                    </h3>
                    <p className="text-xs text-slate-500">Zero Demolition Needed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:border-amber-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-slate-900">
                      Personalized Guidance
                    </h3>
                    <p className="text-xs text-slate-500">Tailored to Your Chart</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:border-amber-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-slate-900">Results Driven</h3>
                    <p className="text-xs text-slate-500">Documented Outcomes</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
                >
                  <span>Discover Our Approach</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION: Holistic Solutions for Every Space (Compact 6-Column Layout Matching Mockup) */}
      <section className="border-b border-slate-200 bg-white py-14 text-slate-900 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              OUR SERVICES
            </span>
            <h2 className="mt-1.5 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Holistic Solutions for Every Space
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              From homes to businesses, we offer expert Vastu and astrology guidance tailored to
              your unique needs.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-amber-500" />
          </div>

          {/* 6 Services Compact Grid matching Mockup */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {/* 1. Residential Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-28 w-full overflow-hidden bg-slate-100 sm:h-32">
                  <img
                    src="/images/services/residential-vastu.jpg"
                    alt="Residential Vastu living room in Bangalore"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-3.5">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Home className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 transition group-hover:text-amber-800 sm:text-sm">
                    Residential Vastu
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Create harmonious, balanced and positive living environments.
                  </p>
                </div>
              </div>
              <div className="p-3 pt-0 sm:p-3.5 sm:pt-0">
                <Link
                  to="/vastu-services/residential-vastu"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* 2. Commercial Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-28 w-full overflow-hidden bg-slate-100 sm:h-32">
                  <img
                    src="/images/services/commercial-vastu.jpg"
                    alt="Commercial Vastu modern office layout in Bangalore"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-3.5">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Building2 className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 transition group-hover:text-amber-800 sm:text-sm">
                    Commercial Vastu
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Optimize office, retail spaces and business environments.
                  </p>
                </div>
              </div>
              <div className="p-3 pt-0 sm:p-3.5 sm:pt-0">
                <Link
                  to="/vastu-services/commercial-vastu"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* 3. Industrial Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-28 w-full overflow-hidden bg-slate-100 sm:h-32">
                  <img
                    src="/images/services/industrial-vastu.jpg"
                    alt="Industrial and factory Vastu planning"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-3.5">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Factory className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 transition group-hover:text-amber-800 sm:text-sm">
                    Industrial Vastu
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Vastu planning for factories, warehouses and industrial spaces.
                  </p>
                </div>
              </div>
              <div className="p-3 pt-0 sm:p-3.5 sm:pt-0">
                <Link
                  to="/vastu-services/industrial-vastu"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* 4. Corporate Vastu */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-28 w-full overflow-hidden bg-slate-100 sm:h-32">
                  <img
                    src="/images/services/corporate-vastu.jpg"
                    alt="Corporate Vastu workplace architecture"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-3.5">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Briefcase className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 transition group-hover:text-amber-800 sm:text-sm">
                    Corporate Vastu
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Strategic spatial guidance for modern workplaces.
                  </p>
                </div>
              </div>
              <div className="p-3 pt-0 sm:p-3.5 sm:pt-0">
                <Link
                  to="/vastu-services/corporate-vastu"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* 5. Astrology Consultation */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-28 w-full overflow-hidden bg-slate-100 sm:h-32">
                  <img
                    src="/images/services/astrology-consultation.jpg"
                    alt="Vedic Astrology celestial horoscope reading"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-3.5">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Compass className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 transition group-hover:text-amber-800 sm:text-sm">
                    Astrology Consultation
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Personalized astrological guidance and life insights.
                  </p>
                </div>
              </div>
              <div className="p-3 pt-0 sm:p-3.5 sm:pt-0">
                <Link
                  to="/astrology"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* 6. Vastu Audit */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-28 w-full overflow-hidden bg-slate-100 sm:h-32">
                  <img
                    src="/images/services/vastu-audit.jpg"
                    alt="Vastu Audit architectural CAD blueprint review"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-3.5">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <FileSearch className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 transition group-hover:text-amber-800 sm:text-sm">
                    Vastu Audit
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Detailed analysis of existing properties with practical recommendations.
                  </p>
                </div>
              </div>
              <div className="p-3 pt-0 sm:p-3.5 sm:pt-0">
                <Link
                  to="/vastu-services/vastu-audit"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 7 RAYS SIGNATURE SECTION */}
      <SevenRaysSection />

      {/* 6. OUR PROCESS SECTION */}
      <ProcessSection />

      {/* 7. FEATURED PROJECTS SECTION */}
      <FeaturedProjectsSection />

      {/* 8. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 9. INSIGHTS SECTION */}
      <InsightsSection />

      {/* 10. PRE-FOOTER SUNSET CTA BANNER (Matching Mockup with Sunset Pool Villa Image) */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        {/* Full-width Luxury Sunset Penthouse Villa Background */}
        <img
          src="/images/cta-sunset-villa.jpg"
          alt="Luxury architectural terrace overlooking golden sunset horizon"
          loading="lazy"
          width={1376}
          height={768}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Subtle Contrast Gradient Overlay allowing the sunset pool villa to shine through */}
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left/Center Column */}
            <div className="space-y-6 text-center lg:col-span-9 lg:text-left">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                CONNECT WITH 7RAYS
              </span>

              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl lg:text-6xl">
                Your Space Has Energy. <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Let's Align It.
                </span>
              </h2>

              <p className="max-w-xl text-sm leading-relaxed font-light text-slate-200 sm:text-base">
                Book a personalized consultation with 7Rays Astro Vastu.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => openBooking('footer-cta')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Your Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('whatsapp_click', 'Footer Banner CTA')}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right Column: Key Focus Areas matching Mockup */}
            <div className="hidden border-l border-white/20 pl-8 text-left lg:col-span-3 lg:block">
              <ul className="space-y-4 font-serif text-sm tracking-wide text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Homes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Workplaces</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Grow Spaces</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Possibilities</span>
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
