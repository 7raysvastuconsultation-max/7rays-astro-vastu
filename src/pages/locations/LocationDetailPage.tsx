import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Navigation,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { locationsData } from '@/data/locations'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'

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

  const canonicalUrl = `${siteConfig.url}/locations/${location.slug}`

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
          { name: 'Locations', url: '/locations' },
          { name: 'Bangalore', url: '/locations/bangalore' },
          { name: location.name, url: `/locations/${location.slug}` },
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

      {/* 1. HERO SECTION (Dark Luxury) */}
      <section className="relative min-h-[460px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5" />
              <span>
                {location.region}, {location.city} • SERVICE TERRITORY
              </span>
            </div>

            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {location.heroHeadline}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {location.metaDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="font-semibold text-amber-400">Key Sectors Served:</span>
              <span>{location.popularAreas.join(' • ')}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book On-site Audit in {location.name}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
              >
                <span>View Registered Office on Maps</span>
                <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              </a>
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
            <span className="font-medium text-slate-800">{location.name}</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
            <span>
              Official Service Notice: Single registered headquarters in <strong>Dasarahalli, Bengaluru (560024)</strong>. On-site audits conducted across {location.name}.
            </span>
          </div>
        </div>
      </section>

      {/* 3. COMMON LOCAL VASTU CHALLENGES (Clean White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              LOCALIZED DIAGNOSTICS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Common Property Challenges in {location.name}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Urban construction in {location.name} often introduces specific directional compromises that require non-demolition corrections.
            </p>
          </div>

          <div className="space-y-4">
            {location.commonVastuIssues.map((issue, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-xl border border-rose-200 bg-rose-50/40 p-4 text-xs text-slate-800 sm:text-sm"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                <span className="leading-relaxed">{issue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY TRUST 7RAYS (Warm Off-White Background) */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              SCIENTIFIC APPROACH
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Why {location.name} Property Owners Trust 7Rays
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {location.whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-amber-200/70 bg-white p-5 shadow-xs text-xs text-slate-700 sm:text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span className="leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCAL FAQS (Pure White Background) */}
      {location.faqs && location.faqs.length > 0 && (
        <section className="border-t border-amber-200/80 bg-white py-16 text-slate-900 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                NEIGHBORHOOD FAQS
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Frequently Asked Questions for {location.name}
              </h2>
            </div>
            <div className="space-y-4">
              {location.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-amber-200/70 bg-[#FAF8F5] p-5">
                  <h3 className="text-sm font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. BOTTOM CTA BANNER (Dark Slate-950) */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Book an On-Site Consultation in {location.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Certified Vastu Consultant Rishwa Sinha provides hands-on 16-zone diagnostic scans and non-demolition remedies for apartments, luxury villas, and workspaces across {location.name}.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule {location.name} Audit</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" />
              <span>Call {businessConfig.displayPhone || '+91 70910 21616'}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <Link
              to="/locations/bangalore"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white"
            >
              <Navigation className="h-3.5 w-3.5 text-amber-400" />
              <span>← Back to Bangalore Authority Hub</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

