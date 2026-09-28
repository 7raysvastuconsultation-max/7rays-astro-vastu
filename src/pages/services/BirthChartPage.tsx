import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
  MapPin,
  Plus,
  Minus,
  ShieldCheck,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BirthChartPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/astrology/birth-chart`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Birth Chart Analysis Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const birthChartFaqs = [
    {
      question: 'What is a Janam Kundli or Vedic Birth Chart?',
      answer:
        'A Janam Kundli is an astronomical map of the heavens at the precise minute and geographical coordinates of your birth. Using the sidereal zodiac, it plots the 12 houses (Bhavas), the rising constellation on the eastern horizon (Lagna or Ascendant), the Moon sign (Rashi), and the exact degrees of the nine celestial bodies (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu).',
    },
    {
      question: 'Why is the exact time of birth so crucial for Kundli analysis?',
      answer:
        'Because the Earth rotates 360 degrees in approximately 24 hours, the rising sign (Lagna) changes roughly every two hours, and subtle divisional charts (such as the D9 Navamsha) change every few minutes. An error of even 15 minutes can shift house cusps and planetary rulerships, altering the interpretive framework.',
    },
    {
      question: 'What if I do not know my exact birth time?',
      answer:
        'If you do not have an exact minute, we examine whether a hospital record, birth certificate, or family record exists. When birth time is known within a narrow window (e.g., 20–30 minutes), classical birth time rectification (Nashta Jataka techniques) may be explored using past significant life milestones. If birth time is entirely unknown, Prashna (horary astrology) or general solar chart reading may be considered.',
    },
    {
      question: 'What should I expect during a birth chart reading with 7Rays?',
      answer:
        'You should expect an objective, educational, and conversational session. We do not make fatalistic proclamations. Instead, we explain your primary personality markers, core vocational potentials, relational temperament, and active planetary periods (Mahadasha/Antardasha), giving you practical perspective to make your own empowered choices.',
    },
    {
      question: 'Does a birth chart reading determine my fate with no room for free will?',
      answer:
        'No. Classical Vedic philosophy holds that a birth chart reflects Prarabdha Karma (accumulated tendencies and inclinations), while Kriyamana Karma (current actions and conscious choices) shapes ongoing outcomes. The chart acts like a topographical map showing terrain and weather conditions; how you navigate that terrain depends on your conscious decisions.',
    },
  ]

  const chartComponents = [
    {
      title: 'Lagna (Rising Sign)',
      subtitle: 'The 1st House & Self-Identity',
      desc: 'The zodiac constellation rising on the eastern horizon at birth, representing your physical constitution, vitality, personal outlook, and foundational approach to life.',
    },
    {
      title: 'Chandra Rashi (Moon Sign)',
      subtitle: 'Mind, Emotions & Mental Patterns',
      desc: 'The sign occupied by the Moon at birth, governing emotional instincts, mental tranquility, perceptual filters, and subconscious reactions.',
    },
    {
      title: 'Surya Rashi (Sun Sign)',
      subtitle: 'Soul, Willpower & Authority',
      desc: 'The position of the Sun reflecting core ego, self-worth, leadership inclination, and connection to fatherhood and societal authority.',
    },
    {
      title: '12 Bhavas (Houses of Life)',
      subtitle: 'Domains of Human Experience',
      desc: 'The twelve astrological houses governing health, family wealth, communication, property, intelligence, obstacles, relationships, transformation, dharma, career, gains, and spiritual liberation.',
    },
    {
      title: 'Vimshottari Dasha System',
      subtitle: 'Planetary Timing of Life Phases',
      desc: 'The 120-year cyclic planetary sequence revealing which planetary energies are actively influencing your current psychological and practical reality.',
    },
    {
      title: 'Navamsha (D9) Chart',
      subtitle: 'Inner Strength & Dharma Confirmation',
      desc: 'The foundational harmonic divisional chart dividing each sign into nine parts, used to verify marital harmony, hidden talents, and the actual strength of natal planets.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Birth Chart Analysis in Bangalore | Janam Kundli | 7Rays"
        description="Detailed Vedic birth chart (Janam Kundli) analysis in Bangalore with Certified Vastu Consultant Rishwa Sinha. Lagna, 12 Bhavas, and Dasha timing clarity."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Astrology', url: '/astrology' },
          { name: 'Birth Chart Analysis', url: '/astrology/birth-chart' },
        ]}
      />
      <ServiceSchema
        name="Vedic Birth Chart & Kundli Analysis"
        description="Comprehensive Janam Kundli analysis evaluating Lagna, 12 Bhavas, planetary dignities, and active Vimshottari Dasha cycles for self-discovery and life path clarity."
        serviceType="Astrology Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={birthChartFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/astrology-consultation.jpg"
            alt="Vedic birth chart Janam Kundli reading"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1200}
            height={896}
            className="h-full w-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <span>JYOTISH FOUNDATIONS • JANAM KUNDLI</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Birth Chart Analysis <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                &amp; Kundli Reading
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              A precise astronomical and psychological study of your celestial blueprint. Gain
              objective clarity on your natural tendencies, strengths, and active planetary periods
              without fear or superstition.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Birth Chart Analysis Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Birth Chart Session</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/astrology"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
              >
                <span>All Astrology Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Required Consultation Data Section */}
      <section className="border-b border-slate-200 bg-amber-50/60 py-10 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                PREPARATION CHECKLIST
              </span>
              <h2 className="font-serif text-xl font-bold text-slate-900 sm:text-2xl">
                What Information Is Needed for Your Session?
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-800">
              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-2xs">
                <Calendar className="h-4 w-4 text-amber-700" />
                <span>Exact Date of Birth</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-2xs">
                <Clock className="h-4 w-4 text-amber-700" />
                <span>Exact Time of Birth (AM/PM)</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-2xs">
                <MapPin className="h-4 w-4 text-amber-700" />
                <span>City / Place of Birth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy of a Birth Chart Reading */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              COMPREHENSIVE ANATOMY
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              What We Examine in Your Kundli
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Classical Vedic astrology does not isolate a single sign. We examine the integrated
              synthesis of all twelve houses, nine planets, and divisional charts.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chartComponents.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md"
              >
                <div>
                  <span className="text-[11px] font-semibold text-amber-800 uppercase">
                    {item.subtitle}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics & Transparent Interpretation */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-700" />
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Ethical Interpretation Standards
              </h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We approach astrology as an ancient symbolic language that assists self-knowledge,
              personal responsibility, and conscious living.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-xs text-slate-700 sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>No Fatalistic Prophecies:</strong> We do not make definitive claims about
                  mortality, accidents, or unavoidable negative events.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Empowerment Over Dependence:</strong> Consultations are structured to help
                  you make better choices, not create psychological dependency on readings.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>No Commercial Ritual Upselling:</strong> We do not prescribe exorbitant
                  remedies or create artificial urgency.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Privacy Commitment:</strong> All birth records and consultation notes are
                  strictly confidential.
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
              QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions About Kundli Reading
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {birthChartFaqs.map((faq, idx) => (
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

      {/* Booking CTA */}
      <section className="bg-slate-950 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Understand Your Natal Blueprint
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Book a dedicated one-on-one birth chart analysis with Certified Vastu Consultant Rishwa
            Sinha. In-person in Bengaluru or online worldwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking('Birth Chart Analysis Consultation')}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule Birth Chart Reading</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/locations/bangalore/astrology"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <span>Bangalore Astrology Office</span>
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
