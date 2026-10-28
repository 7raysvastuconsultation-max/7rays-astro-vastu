import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Phone, ArrowRight } from 'lucide-react'
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
        <div className="mx-auto mb-6 relative flex h-20 w-20 items-center justify-center rounded-3xl border border-amber-400/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-xl shadow-amber-500/20">
          <div className="absolute -inset-1 rounded-3xl bg-amber-500/20 blur-md animate-gold-breathe" />
          <img
            src="/images/7rays-symbol.webp"
            alt="7Rays Celestial Star"
            width={64}
            height={64}
            className="relative z-10 h-14 w-14 object-contain animate-spin"
            style={{ animationDuration: "20s" }}
          />
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
            to="/vastu-services/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-slate-500"
          >
            <span>Browse Services</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/contact/"
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
              <Link to="/vastu/commercial/" className="hover:underline">
                &rarr; Commercial &amp; Office Vastu Consultations
              </Link>
            </li>
            <li>
              <Link to="/vastu/residential/" className="hover:underline">
                &rarr; Residential &amp; Apartment Vastu
              </Link>
            </li>
            <li>
              <Link to="/vastu/non-demolition/" className="hover:underline">
                &rarr; Non-Demolition Vastu Remedies
              </Link>
            </li>
            <li>
              <Link to="/locations/hsr-layout/" className="hover:underline">
                &rarr; HSR Layout Bangalore Vastu Consultation
              </Link>
            </li>
            <li>
              <Link
                to="/blog/vastu-remedies-without-demolition-modern-apartments/"
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
