import React from 'react'
import { Home, Compass, FileCheck, Sparkles, ArrowRight } from 'lucide-react'

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      desc: 'Understand your property, requirements and goals.',
      icon: Home,
    },
    {
      number: '02',
      title: 'Analyse',
      desc: 'Analyse directions, layout, elements and energy zones.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Recommend',
      desc: 'Develop personalized Vastu recommendations.',
      icon: FileCheck,
    },
    {
      number: '04',
      title: 'Transform',
      desc: 'Implement practical changes for a more harmonious space.',
      icon: Sparkles,
    },
  ]

  return (
    <section className="border-b border-slate-200 bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
            OUR PROCESS
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            A Simple Path to Positive Change
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-amber-500" />
        </div>

        {/* Desktop 4-Step Sequential Grid */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-xl"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 text-amber-700 transition duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-amber-600/40">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 transition group-hover:text-amber-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.desc}</p>
                </div>

                {/* Subtle Arrow pointing to next step on desktop */}
                {idx < 3 && (
                  <div className="absolute top-1/2 -right-3.5 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-600 shadow-sm md:flex">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Inspirational Quote Card matching mobile mockup */}
        <div className="via-warm-cream mx-auto mt-12 max-w-xl rounded-2xl border border-amber-200/60 bg-gradient-to-r from-amber-50 to-amber-100/60 p-6 text-center shadow-sm">
          <p className="font-serif text-base text-slate-800 italic">
            "Small Changes. Big Transformations."
          </p>
          <span className="mt-1 block text-[11px] font-semibold tracking-wider text-amber-800 uppercase">
            — 7Rays Non-Demolition Remedial Principle
          </span>
        </div>
      </div>
    </section>
  )
}
