import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Minus,
  Building2,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BusinessAstrologyPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/astrology/business`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Business Astrology Advisory')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const businessFaqs = [
    {
      question: 'What is Business Astrology and how is it used by founders?',
      answer:
        'Business Astrology is the application of classical Jyotish principles to commercial enterprises. It evaluates two primary components: the founder’s personal natal chart (evaluating commercial aptitude, risk tolerance, and active planetary periods) and the venture’s founding or incorporation chart (analyzing the energetic signature of the entity’s launch date).',
    },
    {
      question: 'Does business astrology guarantee revenue, profit, or investor funding?',
      answer:
        'No. We adhere to rigorous professional ethics: business astrology never guarantees financial returns, profits, customer acquisition, or venture capital funding. Commercial success requires a viable product, solid market demand, operational excellence, sound financial management, and persistent effort. Astrology offers traditional timing perspective and partnership clarity.',
    },
    {
      question: 'Can astrology help evaluate co-founder compatibility?',
      answer:
        'Yes. In classical astrology, business partnerships are examined through the 7th house (alliances, contracts, and public partnerships), along with the elemental temperament of each founder’s Lagna and Moon sign. Evaluating complementary skills—such as pairing a visionary founder with an operational executor—helps clarify team dynamics and potential friction points.',
    },
    {
      question: 'What is Muhurtha and how does it relate to commercial launches?',
      answer:
        'Muhurtha is the traditional Vedic discipline of selecting an auspicious astronomical window to inaugurate significant endeavors (such as company incorporation, signing major lease agreements, or product launches). It seeks to align the event with harmonious planetary hours (Hora) and lunar days (Tithi) to support constructive beginnings.',
    },
    {
      question: 'How does business astrology connect with Commercial Vastu?',
      answer:
        'They form two halves of complete enterprise alignment. While business astrology examines temporal cycles (when to launch, sign, or expand), Commercial Vastu optimizes spatial energy (where the CEO sits, where finance is placed, and directional energy flow in the office). We frequently integrate both for corporate clients in Bangalore.',
    },
  ]

  const enterprisePillars = [
    {
      title: 'Founder Natal Alignment',
      desc: 'Assessing personal planetary Dasha cycles to understand whether current phases favor bold venture launches, prudent consolidation, or capital preservation.',
    },
    {
      title: 'Co-Founder & Team Dynamics',
      desc: 'Synastry and 7th house analysis to map complementary temperamental strengths, communication patterns, and governance alignment between partners.',
    },
    {
      title: 'Launch Timing & Muhurtha',
      desc: 'Traditional electional astrology identifying favorable astronomical windows for corporate registration, website launches, and contract signings.',
    },
    {
      title: 'Commercial Spatial Synergy',
      desc: 'Harmonizing founder horoscopes with commercial office layouts, executive desks, and cash-flow zones through integrated Astro-Vastu audits.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Business Astrology Consultation in Bangalore | 7Rays"
        description="Vedic business astrology for founders, executives, and commercial enterprises in Bangalore by Rishwa Sinha. Venture timing, partnership synergy & ethics."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Astrology', url: '/astrology' },
          { name: 'Business Astrology', url: '/astrology/business' },
        ]}
      />
      <ServiceSchema
        name="Vedic Business Astrology Consultation"
        description="Executive business astrology consultation evaluating enterprise launch timing, founder chart synergy, commercial partnership compatibility, and Astro-Vastu alignment."
        serviceType="Astrology Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={businessFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-vastu.jpg"
            alt="Business Astrology Consultation for Founders"
            className="h-full w-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <span>ENTERPRISE ADVISORY • FOUNDER JYOTISH</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Business Astrology <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                &amp; Commercial Timing
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Vedic horoscope advisory for entrepreneurs, business owners, and corporate executives.
              Gain perspective on venture timing, partnership dynamics, and commercial cycles with
              grounded, non-speculative guidance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Business Astrology Advisory')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Business Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/vastu/commercial"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
              >
                <Building2 className="h-3.5 w-3.5 text-amber-400" />
                <span>Commercial Vastu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Analysis Pillars */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              STRATEGIC COMMERCE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Vedic Insights for Commercial Decision-Making
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We apply classical Jyotish to assist entrepreneurs in navigating enterprise risk,
              partnership dynamics, and expansion timing.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enterprisePillars.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Ethics & Non-Guaranteed Disclaimer */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-700" />
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Commercial Transparency &amp; Non-Guarantees
              </h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              In business consulting, ethical integrity is non-negotiable. We operate under explicit
              guidelines:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-xs text-slate-700 sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>No Revenue Guarantees:</strong> We do not claim astrology can guarantee
                  venture capital funding, client acquisition, or commercial profit.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>No Speculative Tips:</strong> We do not provide day-trading tips or
                  guaranteed financial speculation advice.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Support for Real Diligence:</strong> Astrology complements, but never
                  replaces, standard legal, financial, and operational due diligence.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Enterprise Confidentiality:</strong> All business concepts, founder
                  identities, and proprietary data are treated with strict NDAs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              ENTERPRISE QUESTIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions on Business Astrology
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {businessFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition hover:border-amber-400"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900"
                >
                  <span className="pr-4">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="h-4 w-4 shrink-0 text-amber-700" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-slate-400" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="border-t border-slate-200 bg-white p-5 pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Align Your Business Timing with Vedic Wisdom
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Schedule an enterprise astrology session with Certified Vastu Consultant Rishwa Sinha.
            Serving founders across Bengaluru tech corridors and global locations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking('Business Astrology Advisory')}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule Business Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/vastu/commercial"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <span>Explore Commercial Vastu</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  )
}
