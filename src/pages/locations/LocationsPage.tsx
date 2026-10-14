import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, ShieldCheck, ChevronRight, PhoneCall } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { locationsData } from '@/data/locations'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'

export const LocationsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Vastu Consultation Locations in Bangalore | 7Rays"
        description="Find verified Astro-Vastu consultation coverage across Bengaluru: Indiranagar, HSR Layout, Koramangala, Whitefield, and surrounding hubs. On-site property audits."
        canonicalUrl={`${siteConfig.url}/locations`}
      />
      <BreadcrumbSchema items={[{ name: 'Bangalore Locations', url: '/locations' }]} />

      {/* 1. HERO SECTION (Dark Luxury) */}
      <section className="relative min-h-[460px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5" />
              <span>BENGALURU LOCALITIES • SERVICE COVERAGE</span>
            </div>

            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bangalore Regional{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Consultation Desks
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              7Rays Astro Vastu provides scheduled on-site residential and commercial audits across Bangalore’s major tech corridors and residential hubs, addressing specific urban architectural constraints.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & HEADQUARTERS NOTICE (Warm Cream Background) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-800">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-medium text-slate-800">Bangalore Locations</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-amber-700" />
            <span>
              Single Registered Headquarters: <strong>Dasarahalli, Bengaluru (560024)</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 3. LOCATIONS DIRECTORY GRID (Clean White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              METROPOLITAN SERVICE TERRITORIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Dedicated Locality Desks
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Select your locality below for neighborhood-specific floor plan challenges, directional remedies, and local consultation booking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {locationsData.map((loc) => (
              <div
                key={loc.id}
                className="flex flex-col justify-between rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-2xs transition hover:border-amber-400 hover:bg-white hover:shadow-md sm:p-8"
              >
                <div>
                  <div className="mb-3 flex items-center gap-2 text-amber-800">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-bold tracking-wider uppercase">{loc.region}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">{loc.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {loc.metaDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {loc.popularAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-amber-100/70 px-2.5 py-0.5 text-[11px] font-medium text-amber-900"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-xs font-semibold text-slate-500">
                    On-Site Visits Available
                  </span>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 transition hover:text-amber-950"
                  >
                    <span>Explore {loc.name} Services</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER (Dark Slate-950) */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Need an On-Site Vastu Audit Anywhere in Bangalore?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Consult directly with Certified Vastu Consultant Rishwa Sinha. We travel to all corners of Bengaluru for in-depth residential, commercial, and industrial property audits.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule Bangalore Visit</span>
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
        </div>
      </section>
    </>
  )
}

