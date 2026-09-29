import React from 'react'
import { Link } from 'react-router-dom'
import {
  UserCheck,
  Compass,
  MapPin,
  Calendar,
  Award,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { PersonSchema } from '@/components/seo/schemas/PersonSchema'
import { siteConfig } from '@/config/site'

export const ConsultantProfilePage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/consultant/rishwa-sinha`

  return (
    <>
      <SEOHead
        title="Rishwa Sinha — Certified Vastu Consultant & Astrologer | 7Rays"
        description="Professional profile of Rishwa Sinha, Certified Vastu Consultant and Vedic Astrologer in Bengaluru with 5+ years of practical consultation experience."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
          { name: 'Rishwa Sinha', url: '/consultant/rishwa-sinha' },
        ]}
      />
      <PersonSchema />

      {/* Hero Section */}
      <section className="border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
                <UserCheck className="h-3.5 w-3.5 text-amber-400" />
                <span>LEAD CONSULTANT PROFILE</span>
              </div>

              <h1 className="font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl">
                Rishwa Sinha
              </h1>
              <p className="mt-2 text-lg font-medium text-amber-400">
                Certified Vastu Consultant &amp; Vedic Astrologer
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-amber-400" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>Dasarahalli, Bengaluru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-amber-400" />
                  <span>Non-Demolition Specialist</span>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed font-light text-slate-300 sm:text-base">
                Rishwa Sinha is the founder and principal consultant at 7Rays Astro Vastu. Combining
                classical Parashari astrological scholarship with modern 16-zone spatial energy
                mapping, she specializes in non-invasive, zero-demolition remedies tailored for
                urban apartments, commercial offices, and industrial plants across India and
                worldwide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Consultation with Rishwa</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/the-7-rays"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-bold text-slate-200 transition hover:bg-slate-800"
                >
                  <span>Explore 7 Rays Methodology</span>
                </Link>
              </div>
            </div>

            {/* Profile Avatar / Photo Requirement Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 shadow-2xl">
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-amber-500/20 bg-slate-950">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  {/* High quality sacred geometry motif placeholder until owner photo upload */}
                  <Compass className="h-32 w-32 animate-pulse text-amber-500/40" />
                  <div className="absolute right-4 bottom-4 left-4 z-20 text-center">
                    <span className="text-[11px] font-semibold tracking-widest text-amber-300 uppercase">
                      Founder &amp; Principal Consultant
                    </span>
                    <h3 className="font-serif text-lg font-bold text-slate-100">Rishwa Sinha</h3>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-[11px] leading-relaxed text-amber-300/80">
                  <ShieldCheck className="mr-1 inline-block h-3.5 w-3.5 text-amber-400" />
                  <span>
                    Verified Practitioner: Zero exaggerated claims. Practical spatial guidance
                    anchored in traditional Vastu Shastra texts.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Methodology */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              CONSULTATION APPROACH
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Ethical, Scientific, and Non-Demolition
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Rishwa Sinha approaches spatial harmony as an integrated science combining
              orientation, elemental chemistry, and occupant horoscope synergy.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">16-Zone Precision</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Audits divide floor plans mathematically into 16 distinct directional zones, each
                ruling specific life domains like wealth liquidity, health, and family
                relationships.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Zero Civil Destruction</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Remedies rely on metallic inlay strips (copper, brass, zinc, aluminium), spectral
                color therapy, and spatial activity realignment without breaking structural walls.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Astro-Vastu Synergy</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Synthesizing individual Janam Kundli charts with property orientation ensures that
                rooms are allocated according to favorable planetary directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Led by Consultant */}
      <section className="bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Advisory Areas Led by Rishwa Sinha
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/vastu/residential"
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-400 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">
                Residential Vastu
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Independent villas, flats, and ancestral homes.
              </p>
            </Link>
            <Link
              to="/vastu/commercial"
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-400 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">
                Commercial Workplaces
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Tech offices, executive cabins, and retail stores.
              </p>
            </Link>
            <Link
              to="/astrology/birth-chart"
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-400 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">
                Kundli &amp; Astrology
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Career timing, dasha analysis, and matrimonial synergy.
              </p>
            </Link>
            <Link
              to="/international"
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-400 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">
                Global Remote Audits
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Serving NRI clients in USA, UK, UAE, and Singapore.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
