import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { SevenRaysSection } from '@/components/home/SevenRaysSection'
import { siteConfig } from '@/config/site'

export const The7RaysPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="The 7 Rays Philosophy | Spatial Harmony Principles | 7Rays"
        description="Discover the 7 Rays of Balance: Space, Light, Direction, Elements, Energy, Balance, and Harmony. The signature Astro-Vastu philosophy developed by 7Rays."
        canonicalUrl={`${siteConfig.url}/the-7-rays`}
      />
      <BreadcrumbSchema items={[{ name: 'The 7 Rays', url: '/the-7-rays' }]} />

      <div className="relative overflow-hidden border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100 sm:py-24">
        {/* Atmospheric Background Image */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src="/images/seven-rays-bg.jpg"
            alt="The 7 Rays Cosmic Energies Sanctuary"
            className="h-full w-full object-cover object-center opacity-30 brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              SIGNATURE PHILOSOPHY
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl">
              The 7 Rays <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                of Cosmic Balance
              </span>
            </h1>
            <p className="mt-6 text-sm leading-relaxed font-light text-slate-300 sm:text-base">
              Every building is an energetic microcosm. Discover how the seven cosmic vibrational
              rays govern your living quarters, workplace focus, emotional tranquility, and
              financial abundance.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive 7 Rays Component */}
      <SevenRaysSection />

      {/* In-Depth Explanation of Each Ray */}
      <section className="border-b border-amber-100 bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Deep Dive into the 7 Energetic Dimensions
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              How our consultants diagnose and align each cosmic ray in your property layout
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-amber-500 shadow-sm" />
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  1. Ray of Space (Akasha)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Space is the mother element within which all creation exists. In Vastu, the center
                of any layout is the Brahma-sthana (sacred space). If the Brahma-sthana is burdened
                by heavy structural columns, staircases, or underground septic tanks, the occupants
                experience mental claustrophobia, stagnant growth, and inability to manifest new
                ventures.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-yellow-400 shadow-sm" />
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  2. Ray of Light (Tejas / Surya)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Light is clarity and visionary leadership. The morning infra-red and beneficial
                ultraviolet rays emanate from the North-East and East. When properly harnessed
                through clear glazing and unobstructed entries, it activates the pineal gland,
                dispelling clinical depression, cognitive fatigue, and inertia.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-emerald-500 shadow-sm" />
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  3. Ray of Direction (Dik / Geomagnetism)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                The earth is a massive dipolar magnet with magnetic lines flowing North to South.
                Aligning sleeping axes (head to South or East) prevents magnetic friction with the
                iron in human hemoglobin, ensuring restorative cellular regeneration and
                uninterrupted sleep.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-cyan-500 shadow-sm" />
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  4. Ray of Elements (Pancha Tattva)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Water (North), Air/Wood (East), Fire (South-East), Earth (South-West), and Space
                (West). Elemental balancing harmonizes directional friction without tearing down
                masonry or breaking tiles.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-rose-500 shadow-sm" />
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  5. Ray of Energy (Prana &amp; Earth Grid)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Screening out geopathic stress lines, Hartmann grids, Curry grids, and
                electromagnetic smog so human bio-energy remains unencumbered.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-blue-500 shadow-sm" />
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  6. Ray of Balance (Sthirata / Astrology Synergy)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Stabilizing the South-West zone with the owner natal horoscope ensures leadership
                grounding, debt clearance, and steady capital accumulation.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-purple-500 shadow-sm" />
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  7. Ray of Harmony (Aikyam)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                The ultimate synthesis uniting people, physical space, and spiritual purpose into a
                thriving, positive ecosystem.
              </p>
            </div>
          </div>

          <div className="pt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
            >
              <span>Harmonize Your Property With The 7 Rays</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
