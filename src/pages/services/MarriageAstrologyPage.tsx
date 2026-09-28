import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ArrowRight, CheckCircle2, ShieldCheck, Plus, Minus } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const MarriageAstrologyPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/astrology/marriage`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Marriage Compatibility Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const marriageFaqs = [
    {
      question: 'What is Kundli Milan and how is it traditionally conducted?',
      answer:
        'Kundli Milan is the traditional Vedic method of evaluating relationship compatibility by comparing two birth charts. While many automated tools look solely at the 36-point Ashtakoota Guna Milan, our consultations provide a far deeper synthesis: we examine the 7th house of partnership, the strength of Venus and Jupiter, the D9 Navamsha chart, and the emotional resilience of both Moon signs.',
    },
    {
      question: 'Does a high Guna score guarantee a successful marriage?',
      answer:
        'No. A Guna score is simply a mathematical comparison of lunar Nakshatras. A high score does not guarantee marital bliss, nor does an average score doom a partnership. Genuine compatibility relies on mutual respect, shared core values, emotional maturity, clear communication, and ongoing dedication. Vedic astrology provides temperamental awareness to support those efforts.',
    },
    {
      question: 'How do you handle Manglik Dosha (Kuja Dosha) in consultations?',
      answer:
        'Manglik Dosha occurs when Mars is placed in specific houses (1st, 2nd, 4th, 7th, 8th, or 12th). In popular media, this placement is frequently sensationalized with fear-inducing myths. In classical Jyotish, there are numerous standard cancellations (Bhanga) based on sign rulership, aspect, and the partner’s chart. We explain Manglik placements calmly and constructively as reflections of passion and directness, completely rejecting fear-mongering.',
    },
    {
      question: 'Can marriage astrology help couples who are already married?',
      answer:
        'Yes. Relationship consultations are very valuable for existing marriages going through challenging phases. By analyzing active Dasha periods and planetary transits, we help couples understand each other’s current stress levels, emotional needs, and cyclical patterns, fostering empathy rather than conflict.',
    },
    {
      question: 'Do you make absolute predictions about divorce or separation?',
      answer:
        'No. We strictly refrain from making fatalistic predictions regarding divorce or separation. Relationships are living bonds shaped by human choice and free will. Our role is to highlight communication strengths, potential friction points, and constructive timing to foster harmony.',
    },
  ]

  const compatibilityPillars = [
    {
      title: '7th House & Kalatra Bhava',
      desc: 'Scrutinizing the house of partnership, the condition of its ruling planet, and aspects to understand relational commitment and expectations.',
    },
    {
      title: 'D9 Navamsha Harmony',
      desc: 'Evaluating the harmonic 9th division chart, which classical texts consider the definitive indicator of long-term spousal compatibility and inner values.',
    },
    {
      title: 'Balanced Manglik Analysis',
      desc: 'Objective, fear-free evaluation of Mars placements, taking into account classical cancellations and personal temperament rather than superstitions.',
    },
    {
      title: 'Emotional & Mind Synthesis',
      desc: 'Comparing Moon signs (Rashis) and Nakshatras to evaluate emotional empathy, daily communication cadence, and conflict-resolution styles.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Marriage Astrology & Kundli Milan in Bangalore | 7Rays"
        description="Compassionate, ethical Vedic marriage compatibility and Kundli Milan in Bangalore with Certified Vastu Consultant Rishwa Sinha. In-depth, fear-free guidance."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Astrology', url: '/astrology' },
          { name: 'Marriage Astrology', url: '/astrology/marriage' },
        ]}
      />
      <ServiceSchema
        name="Vedic Marriage Compatibility & Relationship Astrology"
        description="Holistic Kundli Milan and relationship compatibility consultation evaluating 7th house, D9 Navamsha, and emotional temperament with zero fear-based claims."
        serviceType="Astrology Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={marriageFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/astro-relationship.jpg"
            alt="Relationship and Marriage Astrology Harmony"
            className="h-full w-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <span>RELATIONSHIP HARMONY • KUNDLI MILAN</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Marriage Astrology <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                &amp; Compatibility Guidance
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Compassionate, structured Kundli Milan and relationship compatibility readings. We
              help couples understand temperamental dynamics, communication styles, and shared life
              phases without fatalism or superstitious fears.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Relationship & Marriage Astrology')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Compatibility Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/astrology/birth-chart"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
              >
                <span>Individual Birth Chart</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Analysis Pillars */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              Beyond Automated Guna Scores
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Holistic Vedic Compatibility Analysis
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We move far beyond automated 36-guna calculators to understand how two individual
              horoscopes interact psychologically, emotionally, and practically.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {compatibilityPillars.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <Heart className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship Ethics */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-700" />
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Ethical Relationship Consultation Commitment
              </h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Marriage is a profound personal decision. We conduct compatibility consultations with
              the utmost dignity:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-xs text-slate-700 sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>No Fatalistic Condemnations:</strong> We never declare a match "cursed" or
                  unconditionally doomed.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>No Guaranteed Outcomes:</strong> We do not promise effortless matrimony;
                  healthy marriages require conscious partnership.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Respect for Free Choice:</strong> The decision to marry belongs entirely
                  to the individuals and their families.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Absolute Discretion:</strong> All birth details and personal backgrounds
                  are held in strict professional confidence.
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
              RELATIONSHIP INQUIRIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions on Marriage Astrology
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {marriageFaqs.map((faq, idx) => (
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
            Gain Compassionate Relationship Perspective
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Book a marriage compatibility or relationship guidance consultation with Certified Vastu
            Consultant Rishwa Sinha. In-person in Bengaluru or online worldwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking('Relationship & Marriage Astrology')}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule Compatibility Session</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/locations/bangalore/astrology"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <span>Bangalore Astrology Desk</span>
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
