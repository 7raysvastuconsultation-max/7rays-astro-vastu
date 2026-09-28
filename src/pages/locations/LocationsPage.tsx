import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { locationsData } from '@/data/locations'
import { siteConfig } from '@/config/site'

export const LocationsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Vastu Consultation Locations in Bangalore | 7Rays"
        description="Find verified Astro-Vastu consultation coverage across Bengaluru: Indiranagar, HSR Layout, Koramangala, Whitefield, and surrounding hubs. On-site property audits."
        canonicalUrl={`${siteConfig.url}/locations`}
      />
      <BreadcrumbSchema items={[{ name: 'Bangalore Locations', url: '/locations' }]} />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-amber-400 sm:text-5xl">
            Bangalore Regional Consultation Desks
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            7Rays Astro Vastu provides on-site home and commercial audits across Bangalore key
            localities, tackling neighborhood-specific urban layout challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-amber-500/30 sm:p-8"
            >
              <div>
                <div className="mb-3 flex items-center gap-2 text-amber-400">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs font-bold tracking-wider uppercase">{loc.region}</span>
                </div>
                <h2 className="font-serif text-xl font-bold text-slate-100">{loc.name}</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  {loc.metaDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {loc.popularAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end border-t border-slate-800 pt-4">
                <Link
                  to={`/locations/${loc.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Explore {loc.name} Services</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
