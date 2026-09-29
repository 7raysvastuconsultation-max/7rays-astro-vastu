import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Compass,
  Home,
  Building,
  Sparkles,
  Globe2,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'

interface FAQCategory {
  id: string
  name: string
  icon: React.ElementType
  faqs: { question: string; answer: string }[]
}

export const FaqPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/faq`
  const [activeTab, setActiveTab] = useState<string>('vastu')
  const [openIndexes, setOpenIndexes] = useState<Record<string, number | null>>({})

  const toggleAccordion = (catId: string, idx: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [catId]: prev[catId] === idx ? null : idx,
    }))
  }

  const categories: FAQCategory[] = [
    {
      id: 'vastu',
      name: 'Vastu Shastra Basics',
      icon: Compass,
      faqs: [
        {
          question: 'What is Vastu Shastra and how does it affect modern buildings?',
          answer:
            'Vastu Shastra is the ancient Indian science of spatial architecture that harmonizes living and working spaces with the five natural elements (Panchatattva: Earth, Water, Fire, Air, Space) and cosmic electromagnetic energies. Modern applications optimize natural lighting, ventilation, and functional room placements to support psychological well-being and productivity.',
        },
        {
          question: 'Is it necessary to break walls or undergo demolition for Vastu remedies?',
          answer:
            'No. At 7Rays Astro Vastu, over 95% of directional imbalances can be rectified without civil demolition using elemental metallic inlays (copper, brass, zinc, aluminium), color frequencies, lighting recalibration, and spatial reallocation.',
        },
        {
          question: 'Are South-facing properties inherently inauspicious?',
          answer:
            'No, this is a widespread myth. In classical Vastu texts, specific padas (entrance divisions) on the South side, notably South-3 (Vithetha) and South-4 (Gruhakshat), are considered highly auspicious for prosperity and vitality when correctly balanced.',
        },
      ],
    },
    {
      id: 'residential',
      name: 'Residential & Apartments',
      icon: Home,
      faqs: [
        {
          question: 'How do you apply Vastu to high-rise apartments with fixed builder layouts?',
          answer:
            'In apartments where external walls, plumbing stacks, and entrance doors cannot be relocated, we apply non-demolition micro-remedies. We balance the 16 zones from the geometric center of the flat, applying metallic thresholds and elemental color cures at the skirting level.',
        },
        {
          question: 'Which direction is ideal for the master bedroom?',
          answer:
            'The South-West (Nairutya) direction is classically recommended for the master bedroom. It represents the Earth element (Prithvi Tattva), providing emotional stability, grounded decision-making, and restful sleep for the head of the household.',
        },
        {
          question: 'What should be done if the kitchen is in the North-East direction?',
          answer:
            'The North-East (Ishanya) represents the Water element. Placing a fire source here creates an elemental clash (Fire vs. Water). We remedy this without demolition by introducing green marble under the stove, using specific color frequencies, and installing balancing metallic strips.',
        },
      ],
    },
    {
      id: 'commercial',
      name: 'Commercial & Offices',
      icon: Building,
      faqs: [
        {
          question: 'How does office Vastu improve workplace performance and team retention?',
          answer:
            'By orienting executive leadership cabins in stabilizing zones (South-West) and aligning creative and sales teams with dynamic directional zones (East and North-West), spatial stress is reduced and workflow collaboration improves naturally.',
        },
        {
          question: 'Where should the finance and accounts team sit in a commercial facility?',
          answer:
            'Finance teams, cash chests, and accounting departments are best situated in the North (Kuber / opportunities zone) or South-East (Agni / cash liquidity zone), ensuring uninterrupted liquidity and prompt collections.',
        },
      ],
    },
    {
      id: 'astrology',
      name: 'Vedic Astrology & Kundli',
      icon: Sparkles,
      faqs: [
        {
          question: 'What is the synergy between Vastu Shastra and Vedic Astrology (Astro-Vastu)?',
          answer:
            'Astro-Vastu personalizes architectural principles to the specific birth chart (Janam Kundli) of the occupant. While general Vastu governs universal directions, Astro-Vastu identifies which planetary zones directly support your active Mahadasha cycles.',
        },
        {
          question: 'What birth details are required for a horoscope consultation?',
          answer:
            'We require your exact date of birth, precise time of birth (to the minute), and city/place of birth. An accurate birth time is vital for erecting your Lagna (ascendant) chart and Navamsha division.',
        },
      ],
    },
    {
      id: 'international',
      name: 'International & Remote Audits',
      icon: Globe2,
      faqs: [
        {
          question: 'Can Vastu audits be performed accurately online for overseas properties?',
          answer:
            'Yes. Online audits utilize high-resolution architectural CAD blueprints, satellite coordinates via Google Earth to determine true geographic North, and interactive video walkthroughs. We advise clients across the USA, UK, UAE, Australia, and Singapore with equal precision.',
        },
        {
          question: 'How do international clients acquire recommended remedy materials?',
          answer:
            'Our remedy blueprints specify standard universal metals (copper, brass, zinc strips) and spectral lighting easily available at local building supply stores in your home country, or couriered directly when specialized items are needed.',
        },
      ],
    },
  ]

  const allFaqs = categories.flatMap((c) => c.faqs)
  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0]

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions (FAQ) | 7Rays Astro Vastu"
        description="Clear, expert answers to common questions about residential Vastu, non-demolition remedies, commercial office alignment, Vedic astrology, and remote international audits."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ]}
      />
      <FAQSchema items={allFaqs} />

      {/* Hero */}
      <div className="border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
            <span>KNOWLEDGE REPOSITORY</span>
          </div>
          <h1 className="font-serif text-3xl font-bold sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-300 sm:text-sm">
            Practical, evidence-grounded answers about spatial Vastu Shastra, zero-demolition
            remediation, Kundli analysis, and remote advisory workflows.
          </p>
        </div>
      </div>

      {/* Main FAQ Section with Tabs */}
      <div className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = cat.id === activeTab
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{cat.name}</span>
                </button>
              )
            })}
          </div>

          {/* Accordion Questions */}
          <div className="mt-8 space-y-4">
            {currentCategory.faqs.map((faq, idx) => {
              const isOpen = openIndexes[currentCategory.id] === idx
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition"
                >
                  <button
                    onClick={() => toggleAccordion(currentCategory.id, idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-amber-700 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200/80 bg-white p-5 text-xs leading-relaxed text-slate-700 sm:text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Prompt CTA */}
          <div className="mt-16 rounded-2xl border border-amber-200 bg-amber-50/60 p-8 text-center">
            <h2 className="font-serif text-xl font-bold text-slate-900">
              Have a Specific Property Question?
            </h2>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              Our principal consultant Rishwa Sinha is available for direct preliminary reviews of
              your architectural floor plans.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-amber-700"
              >
                <span>Ask a Consultant Directly</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/vastu/non-demolition"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <span>Explore Non-Demolition Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
