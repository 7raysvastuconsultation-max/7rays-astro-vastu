import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ProcessSection } from '@/components/home/ProcessSection'
import { siteConfig } from '@/config/site'

export const ProcessPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Vastu Consultation Process & Methodology | 7Rays"
        description="Explore the 7Rays 4-step consultation protocol: blueprint review, directional analysis, non-demolition recommendations, and spatial transformation."
        canonicalUrl={`${siteConfig.url}/process`}
      />
      <BreadcrumbSchema items={[{ name: 'Consultation Process', url: '/process' }]} />

      <div className="border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              METHODOLOGY &amp; WORKFLOW
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl">
              A Structured, <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Scientific Pathway
              </span>
            </h1>
            <p className="mt-6 text-sm leading-relaxed font-light text-slate-300 sm:text-base">
              From the initial property briefing to 16-zone energy mapping and post-remedy guidance,
              our consultation approach is structured, methodical and clearly documented.
            </p>
          </div>
        </div>
      </div>

      <ProcessSection />

      {/* Detailed Technical Stages */}
      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6">
          <div className="space-y-2 border-l-4 border-amber-500 pl-6">
            <span className="text-xs font-bold text-amber-700 uppercase">Stage 01</span>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Discovery &amp; Architectural Intake
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              We gather architectural blueprints, CAD floor plans, accurate compass degree readings,
              family or founder birth charts, and specific challenges (e.g. sales stagnation,
              employee friction, or chronic insomnia).
            </p>
          </div>

          <div className="space-y-2 border-l-4 border-amber-500 pl-6">
            <span className="text-xs font-bold text-amber-700 uppercase">Stage 02</span>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              16-Zone Energy &amp; Geopathic Diagnostics
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              The consultant plots the 16 Vastu angular zones (Shodasha Varga) and 32 entrance padas
              over your floor plan. During on-site assessments, a calibrated digital compass,
              digital Gauss meter, and dowsing rods are used to evaluate directional alignments and
              detect subterranean earth energy disturbances.
            </p>
          </div>

          <div className="space-y-2 border-l-4 border-amber-500 pl-6">
            <span className="text-xs font-bold text-amber-700 uppercase">Stage 03</span>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Personalized Non-Demolition Remedial Blueprint
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              A written consultation report is prepared recommending appropriate elemental metallic
              inlay materials (brass, copper, zinc, lead), directional spatial adjustments, and
              seating or furniture reorientations — without requiring structural demolition where
              applicable.
            </p>
          </div>

          <div className="space-y-2 border-l-4 border-amber-500 pl-6">
            <span className="text-xs font-bold text-amber-700 uppercase">Stage 04</span>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Implementation &amp; Follow-Up
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Clients receive guidance on implementing the recommended adjustments. A follow-up
              consultation is available to review implementation and address any subsequent
              questions. The availability and timing of follow-up consultations is confirmed at the
              time of engagement.
            </p>
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
            >
              <span>Initiate Your 4-Step Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
