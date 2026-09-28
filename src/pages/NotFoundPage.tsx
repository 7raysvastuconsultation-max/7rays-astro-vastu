import React from 'react'
import { Link } from 'react-router-dom'
import { Compass, Home, Phone, ArrowRight } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The requested page could not be found. Explore 7Rays Astro Vastu services, Bangalore locations, or request a consultation."
        noIndex={true}
        noFollow={true}
      />

      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
          <Compass className="h-8 w-8 animate-spin" style={{ animationDuration: '12s' }} />
        </div>

        <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">Error 404</span>

        <h1 className="mt-2 font-serif text-3xl font-bold text-slate-100 sm:text-5xl">
          Direction Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
          The page or cosmic coordinates you are searching for might have moved, been renamed, or
          are temporarily unavailable.
        </p>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-400"
          >
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-slate-500"
          >
            <span>Browse Services</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-slate-500"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Contact Desk</span>
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-lg rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-left">
          <h2 className="mb-3 text-xs font-bold tracking-wider text-slate-300 uppercase">
            Popular Destinations
          </h2>
          <ul className="space-y-2 text-xs text-amber-400">
            <li>
              <Link to="/services/commercial-vastu-consultation" className="hover:underline">
                &rarr; Commercial Office Vastu Consultations
              </Link>
            </li>
            <li>
              <Link to="/services/residential-apartment-vastu" className="hover:underline">
                &rarr; Apartment &amp; Flat Vastu (Non-Demolition)
              </Link>
            </li>
            <li>
              <Link
                to="/locations/vastu-consultant-hsr-layout-bangalore"
                className="hover:underline"
              >
                &rarr; HSR Layout Bangalore Vastu Consultant
              </Link>
            </li>
            <li>
              <Link
                to="/blog/vastu-remedies-without-demolition-modern-apartments"
                className="hover:underline"
              >
                &rarr; Scientific Vastu Remedies Without Demolition
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
