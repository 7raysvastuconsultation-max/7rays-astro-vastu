import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Navigation,
  ShieldCheck,
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
      <div className="py-24 text-center">
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

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border-b border-slate-800 pb-8">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
            <MapPin className="h-4 w-4" />
            <span>
              {location.region}, {location.city} • SERVICE AREA
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-slate-100 sm:text-5xl">
            {location.heroHeadline}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            {location.metaDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Key Sectors Served:</span>
            {location.popularAreas.join(' • ')}
          </div>
        </div>

        {/* Clear Business Location vs Service Area Notice */}
        <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-xs leading-relaxed text-amber-200">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <div>
              <strong className="text-amber-300">Official Service Area Notice:</strong> 7Rays Astro
              Vastu operates from its single registered headquarters in{' '}
              <strong>Dasarahalli, Bengaluru (560024)</strong>. We provide scheduled on-site
              consultations and property audits across {location.name}. This page represents our
              dedicated service territory for on-site visits, not a physical branch office.
            </div>
          </div>
        </div>

        {/* Common Local Vastu Challenges */}
        <div className="mt-12">
          <h2 className="mb-4 font-serif text-xl font-bold text-amber-400">
            Common Property Challenges in {location.name}
          </h2>
          <div className="space-y-3">
            {location.commonVastuIssues.map((issue, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-rose-900/30 bg-rose-950/10 p-4 text-xs text-slate-300 sm:text-sm"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                <span>{issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose 7Rays in this location */}
        <div className="mt-12">
          <h2 className="mb-4 font-serif text-xl font-bold text-amber-400">
            Why {location.name} Property Owners Trust 7Rays
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {location.whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-200 sm:text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {location.faqs && location.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 font-serif text-xl font-bold text-slate-100">
              Frequently Asked Questions for {location.name}
            </h2>
            <div className="space-y-4">
              {location.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                  <h3 className="text-sm font-semibold text-amber-300">{faq.question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA & Internal Linking */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8">
          <Link
            to="/locations/bangalore"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white"
          >
            <Navigation className="h-4 w-4 text-amber-400" />
            <span>← Back to Bangalore Authority Hub</span>
          </Link>

          <div className="flex flex-wrap gap-3">
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-amber-400"
            >
              <span>View Registered Office on Maps</span>
              <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
            >
              <span>Book On-site Audit in {location.name}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
