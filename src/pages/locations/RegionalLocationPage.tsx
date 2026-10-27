import React, { useState } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Compass,
  MapPin,
  MessageSquare,
  PhoneCall,
  Plus,
  Minus,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'
import { regionalLocations } from '@/data/regionalLocations'

const regionalHeroImages: Record<string, { image: string; alt: string }> = {
  mumbai: {
    image: '/images/projects/luxury-residence-mumbai.webp',
    alt: 'Mumbai Coastal High-Rise Apartment and Skyline Architecture',
  },
  'delhi-ncr': {
    image: '/images/services/commercial-boardroom-hero.webp',
    alt: 'Delhi NCR Corporate Office and Luxury Builder Floor Architecture',
  },
  hyderabad: {
    image: '/images/projects/commercial-space-hyderabad.webp',
    alt: 'Hyderabad HITEC City Commercial Space and Luxury Villa Architecture',
  },
  pune: {
    image: '/images/services/corporate-vastu.webp',
    alt: 'Pune Modern Workplace and Residential Duplex Architecture',
  },
  kolkata: {
    image: '/images/about-zen-courtyard.webp',
    alt: 'Kolkata Heritage Courtyard and High-Rise Living Architecture',
  },
}

export const RegionalLocationPage: React.FC = () => {
  const { slug: paramSlug } = useParams<{ slug: string }>()
  const { pathname } = useLocation()
  const pathSlug = pathname.replace(/^.*\/locations\//, '').replace(/\/$/, '')
  const slug = paramSlug || pathSlug
  const location = regionalLocations.find((item) => item.slug === slug)
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  if (!location) {
    return typeof window === 'undefined' ? null : <Navigate to="/404/" replace />
  }

  const heroImageData = regionalHeroImages[location.slug] || {
    image: '/images/projects/luxury-residence-mumbai.webp',
    alt: `${location.name} Property Vastu Consultation`,
  }

  const canonicalUrl = `${siteConfig.url}/locations/${location.slug}/`
  const whatsAppUrl = `https://wa.me/${(siteConfig.contact.whatsApp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello 7Rays Astro Vastu, I would like to ask about a Vastu consultation for my property in ${location.name}.`)}`

  return (
    <>
      <SEOHead title={location.title} description={location.description} canonicalUrl={canonicalUrl} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations/' },
          { name: location.name, url: `/locations/${location.slug}/` },
        ]}
      />
      <ServiceSchema
        name={`Online Vastu Consultation for ${location.name}`}
        description={location.description}
        serviceType="Online Vastu Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
        areaServed={[location.name, location.region, 'India']}
      />
      <FAQSchema items={location.faqs} />

      {/* 1. HERO SECTION (Dark Luxury with Architectural Hero Image & Gradient Overlays) */}
      <section className="relative min-h-[540px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImageData.image}
            alt={heroImageData.alt}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1376}
            height={768}
            className="h-full w-full object-cover object-center"
          />
          {/* Left-side directional scrim ensuring crystal-clear text contrast while keeping image bright & visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20 lg:via-slate-950/50 lg:to-transparent" />
          {/* Subtle top & bottom edge blend into adjacent sections */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="transition hover:text-amber-300">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-500" />
            <Link to="/locations/" className="transition hover:text-amber-300">Locations</Link>
            <ChevronRight className="h-3 w-3 text-slate-500" />
            <span aria-current="page" className="text-amber-300 font-medium">{location.name}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Heading, Subtitle & Buttons */}
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>{location.region} · REMOTE CONSULTATION</span>
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                Vastu Consultant in{' '}
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  {location.name}
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                {location.intro}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 text-xs font-medium text-amber-200">
                <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Registered headquarters in Bengaluru · remote consultations available across India</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Ask about a consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Quality Preview Card (Visible on Desktop) */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="rounded-2xl border border-amber-400/30 bg-slate-900/80 p-7 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-400 uppercase">
                    <Sparkles className="h-3.5 w-3.5" />
                    100% Non-Demolition
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                    Live Video & CAD
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>16-Zone Energy Grid:</strong> Degree-calibrated directional alignment mapped onto your architectural CAD floor plan.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>Zero Demolition:</strong> Practical elemental metallic strips (brass, copper), directional crystals & room-use balancing.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>Led by Rishwa Sinha:</strong> Certified Vastu Consultant with 5+ years verified Pan-India practice.
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                  <p className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider">Fast Turnaround for {location.name}</p>
                  <p className="mt-1 text-xs text-slate-300">Share blueprint via WhatsApp or form. Detailed report delivered in 48-72 hours.</p>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                  <span>Questions? Direct Desk:</span>
                  <a href={`tel:${businessConfig.phone || '+91 70910 21616'}`} className="font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1">
                    <PhoneCall className="h-3 w-3" /> {businessConfig.displayPhone || '+91 70910 21616'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL SERVICE AREA NOTICE (Warm Cream Background) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 text-xs sm:px-6 lg:px-8">
          <Building2 className="h-4 w-4 text-amber-700 shrink-0" />
          <span>
            <strong>Service-area notice:</strong> 7Rays has one registered headquarters in Dasarahalli, Bengaluru (560024), not a branch in {location.name}. Remote consultation is available nationwide; on-site travel availability is confirmed individually.
          </span>
        </div>
      </section>

      {/* Quick Facts / Pan-India Remote Consultation Strip */}
      <section className="border-b border-amber-200/60 bg-amber-50/40 py-8 text-slate-900 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200/80 bg-white p-4 shadow-sm sm:p-6 lg:p-7">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-amber-800 uppercase sm:mb-5 sm:text-sm">
              <Sparkles className="h-4 w-4 shrink-0 text-amber-700" />
              <span>{location.name} Remote Vastu Consultation at a Glance</span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-amber-100/80 bg-amber-50/30 p-3.5 sm:p-4">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold text-slate-900 sm:text-sm">Lead Consultant</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Led by Certified Vastu Consultant Rishwa Sinha with 5+ years of dedicated practice in Vastu Shastra, Vedic Astrology, and spatial energy mapping.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-amber-100/80 bg-amber-50/30 p-3.5 sm:p-4">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                  <Compass className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold text-slate-900 sm:text-sm">Consultation Format</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    100% remote consultations for {location.name} properties. Analysis is performed using architectural floor plans, verified directional orientation, and photos or video walkthroughs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-amber-100/80 bg-amber-50/30 p-3.5 sm:p-4">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                  <Layers className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold text-slate-900 sm:text-sm">Remedy Approach</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Non-demolition, society-compliant adjustments focused on elemental balancing, room utility alignment, and precision metal inlays—zero civil demolition required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-amber-100/80 bg-amber-50/30 p-3.5 sm:p-4">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold text-slate-900 sm:text-sm">Headquarters &amp; Service Area</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Registered headquarters in Dasarahalli, Bengaluru (560024). {location.name} is served through remote consultation; physical on-site travel is evaluated individually on request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE EDITORIAL CONTENT (Clean White) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">{location.focusLabel}</span>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl text-slate-900">
              A property-first review, not a one-size-fits-all city prescription
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{location.focus}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {location.sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 sm:p-7 shadow-2xs">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-800">
                  <Compass className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-amber-800 uppercase">{section.eyebrow}</p>
                <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCALITIES & RELATED GUIDANCE (Warm Off-White Background) */}
      <section className="border-y border-slate-200 bg-[#FBF9F5] py-14 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">AREAS WE CAN SERVE REMOTELY</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900">Across {location.name} and nearby areas</h2>
            <p className="mt-3 text-sm text-slate-600">These are examples of localities where clients can request remote consultation. They are not 7Rays branch offices.</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {location.localities.map((area) => (
                <li key={area} className="rounded-full border border-amber-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-2xs">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">RELATED GUIDANCE</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900">Continue exploring</h2>
            <div className="mt-5 space-y-3">
              {location.services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-amber-400 hover:shadow-xs"
                >
                  <span>
                    <strong className="block text-sm text-slate-900">{service.label}</strong>
                    <span className="mt-1 block text-xs text-slate-600">{service.description}</span>
                  </span>
                  <ArrowRight className="ml-3 h-4 w-4 shrink-0 text-amber-700" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS SECTION (Clean White) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">CLEAR, PRACTICAL ANSWERS</p>
          <h2 className="mt-2 text-center font-serif text-3xl font-bold text-slate-900 sm:text-4xl">{location.name} Vastu consultation FAQs</h2>
          <div className="mt-9 space-y-3">
            {location.faqs.map((faq, index) => {
              const expanded = openFaq === index
              return (
                <article key={faq.question} className="overflow-hidden rounded-xl border border-amber-200/70 bg-[#FAF8F5]">
                  <h3>
                    <button
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-slate-900 transition hover:bg-amber-50/50"
                      aria-expanded={expanded}
                      onClick={() => setOpenFaq(expanded ? null : index)}
                    >
                      <span>{faq.question}</span>
                      {expanded ? <Minus className="h-4 w-4 shrink-0 text-amber-700" /> : <Plus className="h-4 w-4 shrink-0 text-amber-700" />}
                    </button>
                  </h3>
                  {expanded && (
                    <div className="border-t border-amber-100 bg-white px-5 py-4 text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE PRE-FOOTER SUNSET VILLA BANNER (With Hero/Footer Image & Glassmorphism Quote) */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.webp"
          width={1376}
          height={768}
          alt={`Luxury architectural villa sunset for ${location.name} Vastu consultations`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: Heading & Buttons */}
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>REMOTE VASTU AUDIT • {location.name.toUpperCase()}</span>
              </div>
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
                Every Space Has Potential. <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Let's Align Yours in {location.name}.
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Share your floor plan and orientation details. Certified Vastu Consultant Rishwa Sinha provides precise 16-zone CAD analysis with 100% non-demolition remedies.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Consultation for {location.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
                >
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  <span>Call {businessConfig.displayPhone || '+91 70910 21616'}</span>
                </a>
              </div>
            </div>

            {/* Right: Translucent Trust Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-amber-400/30 bg-slate-900/80 p-6 text-left backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-amber-300 uppercase">Registered Headquarters</p>
                    <p className="text-sm font-semibold text-white">Dasarahalli, Bengaluru</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  Direct consultations led by Certified Vastu Consultant Rishwa Sinha. All {location.name} consultations are delivered digitally via high-definition video with CAD overlays.
                </p>
                <div className="mt-4 border-t border-slate-800 pt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Pincodes: 560024 HQ</span>
                  <span className="text-amber-400 font-medium">Pan-India Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quick Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-slate-800 pt-6 text-xs text-slate-400">
            <Link to="/locations/" className="hover:text-amber-300">All Locations</Link>
            <Link to="/services/online-vastu-consultation/" className="hover:text-amber-300">Pan-India Online Consultation</Link>
            <Link to="/consultant/rishwa-sinha/" className="hover:text-amber-300">Consultant Profile</Link>
            <Link to="/case-studies/" className="hover:text-amber-300">Illustrative Case Studies</Link>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialService={`Online Vastu Consultation - ${location.name}`} />
    </>
  )
}
