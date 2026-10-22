import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  Sparkles,
  MessageSquare,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { locationsData } from '@/data/locations'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'

const bangaloreLocalityImages: Record<string, { image: string; alt: string }> = {
  indiranagar: {
    image: '/images/services/commercial-retail-showroom.webp',
    alt: 'Indiranagar Bangalore Luxury Residential and Commercial Architecture',
  },
  'hsr-layout': {
    image: '/images/projects/corporate-office-bangalore.webp',
    alt: 'HSR Layout Bangalore Tech Startup Workspace and Villa Architecture',
  },
  koramangala: {
    image: '/images/hero-penthouse.webp',
    alt: 'Koramangala Bangalore Luxury Penthouse and Commercial Architecture',
  },
  whitefield: {
    image: '/images/services/residential-apartment.webp',
    alt: 'Whitefield Bangalore Luxury Gated Community and High-Rise Apartment Architecture',
  },
}

export const LocationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = locationsData.find((l) => l.slug === slug || l.id === slug)

  if (!location) {
    return (
      <div className="py-24 text-center text-white">
        <h1 className="text-2xl font-bold">Location Not Found</h1>
        <Link to="/locations/bangalore" className="mt-4 inline-block text-amber-400 underline">
          View Bangalore Master Hub
        </Link>
      </div>
    )
  }

  const localityImageData = bangaloreLocalityImages[location.slug] || {
    image: '/images/services/residential-vastu.webp',
    alt: `${location.name} Bangalore Vastu Shastra Consultation`,
  }

  const canonicalUrl = `${siteConfig.url}/locations/${location.slug}/`
  const whatsAppUrl = `https://wa.me/${(siteConfig.contact.whatsApp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello 7Rays Astro Vastu, I would like to schedule an on-site Vastu audit for my property in ${location.name}, Bangalore.`)}`

  return (
    <>
      <SEOHead
        title={`Vastu Consultant in ${location.name}, Bangalore | 7Rays`}
        description={location.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations/' },
          { name: 'Bangalore', url: '/locations/bangalore/' },
          { name: location.name, url: `/locations/${location.slug}/` },
        ]}
      />
      {/* Authoritative Single-Location Schema: Dasarahalli Headquarters with Area Served */}
      <LocalBusinessSchema
        name={siteConfig.name}
        description={location.metaDescription}
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
        latitude={businessConfig.latitude ?? undefined}
        longitude={businessConfig.longitude ?? undefined}
        areaServed={[location.name, ...location.popularAreas, 'Bengaluru']}
      />
      {location.faqs && location.faqs.length > 0 && <FAQSchema items={location.faqs} />}

      {/* 1. HERO SECTION (Dark Luxury with Architectural Hero Image & Gradient Overlays) */}
      <section className="relative min-h-[540px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={localityImageData.image}
            alt={localityImageData.alt}
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
            <Link to="/locations/bangalore" className="transition hover:text-amber-300">Bangalore</Link>
            <ChevronRight className="h-3 w-3 text-slate-500" />
            <span aria-current="page" className="text-amber-300 font-medium">{location.name}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Heading, Subtitle & Buttons */}
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>
                  {location.region}, {location.city} • ON-SITE SERVICE AREA
                </span>
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                Vastu Consultant in{' '}
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  {location.name}
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                {location.metaDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="font-semibold text-amber-400">Key Sectors Served:</span>
                <span>{location.popularAreas.join(' • ')}</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book On-site Audit in {location.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
                >
                  <span>View HQ on Maps</span>
                  <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Quality Preview Card (Visible on Desktop) */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="rounded-2xl border border-amber-400/30 bg-slate-900/80 p-7 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-400 uppercase">
                    <Sparkles className="h-3.5 w-3.5" />
                    On-Site Bangalore Audit
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                    Physical + CAD
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>On-Site Property Inspection:</strong> In-person scanning of entrances, room layout & geopathic stress in {location.name}.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>100% Non-Demolition:</strong> Tailored metallic strips (brass, copper), crystal placements & room-use balancing.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>Certified Expert Rishwa Sinha:</strong> Direct 1-on-1 consultation with 5+ years of verified Bangalore experience.
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                  <p className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider">Fast Booking for {location.name}</p>
                  <p className="mt-1 text-xs text-slate-300">Scheduled slots available for residential apartments, villas & commercial offices.</p>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                  <span>Direct Desk:</span>
                  <a href={`tel:${businessConfig.phone || '+91 70910 21616'}`} className="font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1">
                    <PhoneCall className="h-3 w-3" /> {businessConfig.displayPhone || '+91 70910 21616'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & OFFICIAL SERVICE AREA NOTICE (Warm Cream Background) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-800">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/locations" className="transition hover:text-amber-800">
              Locations
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/locations/bangalore" className="transition hover:text-amber-800">
              Bangalore
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-medium text-slate-800">{location.name}</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
            <span>
              Single Registered Headquarters: <strong>Dasarahalli, Bengaluru (560024)</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE OVERVIEW (Clean White) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                ON-SITE CONSULTATION EXPERTISE
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why Property Owners in {location.name} Choose 7Rays Astro Vastu
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {location.whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-amber-200/80 bg-[#FAF8F5] p-6 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Headquartered in Dasarahalli, Serving {location.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  While our primary registered office is in Dasarahalli (560024), we conduct scheduled on-site property visits throughout {location.name} and surrounding layouts across {location.region}.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-amber-800">
                  <MapPin className="h-4 w-4" />
                  <span>Coverage Pincodes: {location.pincodes.join(', ')}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                COMMON ARCHITECTURAL CHALLENGES
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Spatial Patterns in {location.name}
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Properties in {location.name} often exhibit recurring directional challenges due to local urban development styles:
              </p>

              <div className="mt-6 space-y-4">
                {location.commonVastuIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-amber-200/70 bg-[#FAF8F5] p-4 text-xs text-slate-700 sm:text-sm shadow-2xs"
                  >
                    <AlertTriangle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCAL FREQUENTLY ASKED QUESTIONS (Warm Off-White Background) */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              TRANSPARENCY &amp; LOCAL POLICIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions for {location.name}
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {location.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-amber-200/70 bg-white p-6 shadow-2xs"
              >
                <h3 className="font-serif text-base font-bold text-slate-900 sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE PRE-FOOTER SUNSET VILLA BANNER (With Hero/Footer Image & Glassmorphism Quote) */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.webp"
          width={1376}
          height={768}
          alt={`Luxury architectural villa sunset for ${location.name} Bangalore Vastu consultations`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: Heading & Buttons */}
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>ON-SITE BENGALURU VISIT • {location.name.toUpperCase()}</span>
              </div>
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
                Ready to Harmonize Your Property <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  in {location.name}, Bangalore?
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Connect directly with Certified Vastu Consultant Rishwa Sinha for on-site residential, commercial, and industrial property audits across {location.name}.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Schedule {location.name} On-Site Audit</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
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
                  Physical on-site visits scheduled across {location.name} and neighboring layouts. Comprehensive 16-zone blueprint report provided following the audit.
                </p>
                <div className="mt-4 border-t border-slate-800 pt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Pincodes: {location.pincodes.join(', ')}</span>
                  <span className="text-amber-400 font-medium">On-Site &amp; Video</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quick Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-slate-800 pt-6 text-xs text-slate-400">
            <Link to="/locations/bangalore" className="hover:text-amber-300">Bangalore Authority Hub</Link>
            <Link to="/locations/" className="hover:text-amber-300">All Locations</Link>
            <Link to="/services/online-vastu-consultation/" className="hover:text-amber-300">Online Vastu Consultation</Link>
            <Link to="/consultant/rishwa-sinha/" className="hover:text-amber-300">Consultant Profile</Link>
          </div>
        </div>
      </section>
    </>
  )
}
