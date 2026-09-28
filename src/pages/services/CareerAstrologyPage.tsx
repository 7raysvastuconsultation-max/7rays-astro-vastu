import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, ArrowRight, CheckCircle2, ShieldCheck, Plus, Minus } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const CareerAstrologyPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/astrology/career`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Career Astrology Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const careerFaqs = [
    {
      question: 'What aspects of career does Vedic astrology examine?',
      answer:
        'A career astrology consultation focuses on the 10th house (Karma Bhava - professional status, authority, and public work), the 2nd house (earned wealth and resources), the 6th house (daily service, employment conditions, and competitive hurdles), and the 11th house (gains and professional network). We also evaluate the D10 Dashamsha divisional chart to discern vocation-specific planetary dignities.',
    },
    {
      question: 'Can astrology tell me whether I should pursue employment or business?',
      answer:
        'In classical Jyotish, employment (service) is primarily analyzed through the 6th house and Saturn, while independent enterprise and entrepreneurship connect to the 7th, 3rd, and 10th houses and planetary indicators like Mercury, Mars, and Sun. We examine the relative strength of these sectors to help you understand your natural aptitude for structured organizational roles versus self-directed business.',
    },
    {
      question: 'Does career astrology guarantee a job offer, promotion, or salary increase?',
      answer:
        'No. We maintain strict ethical and professional boundaries: astrology never guarantees job offers, corporate promotions, or salary figures. Career success is built upon actual competence, continuous effort, interview preparation, and organizational dynamics. The consultation provides timing context (such as favorable planetary periods for initiating changes) and vocational self-awareness.',
    },
    {
      question: 'How does planetary timing (Dasha and Gochara) apply to career decisions?',
      answer:
        'Planetary periods (Vimshottari Dasha) indicate shifting focus areas over multi-year cycles, while transits (Gochara), particularly of Saturn and Jupiter, highlight periods of consolidation, increased responsibility, or outward expansion. Understanding these cycles helps professionals pace career transitions and navigate periods requiring patience.',
    },
    {
      question: 'Can career astrology help when I feel stuck or burned out?',
      answer:
        'Yes. Feeling stuck often correlates with transits through introspective houses or the Dasha of a planet governing reorientation rather than external expansion. A consultation helps contextualize these periods as phases for skill-building, introspection, and preparation, relieving unnecessary panic.',
    },
  ]

  const vocationalPillars = [
    {
      title: '10th House (Karma Bhava)',
      desc: 'The pinnacle of the birth chart, indicating your vocational calling, public standing, leadership aptitude, and relationship to authority.',
    },
    {
      title: 'D10 Dashamsha Chart',
      desc: 'The harmonic 10th divisional chart specifically scrutinized in classical Vedic astrology to analyze career longevity and professional achievements.',
    },
    {
      title: 'Saturn & Sun Rulership',
      desc: 'Saturn governs perseverance, discipline, and long-term organizational mastery, while the Sun represents executive autonomy, visibility, and confidence.',
    },
    {
      title: 'Career Transition Timing',
      desc: 'Identifying cyclic windows favorable for role changes, higher learning, relocation, or strategic patience according to active Dasha periods.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Career Astrology Consultation in Bangalore | 7Rays"
        description="Navigate career transitions, leadership opportunities, and vocational timing with Vedic career astrology in Bangalore led by Rishwa Sinha. Ethical & grounded."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Astrology', url: '/astrology' },
          { name: 'Career Astrology', url: '/astrology/career' },
        ]}
      />
      <ServiceSchema
        name="Vedic Career Astrology Consultation"
        description="Comprehensive career horoscope analysis evaluating 10th house Karma Bhava, D10 Dashamsha, and planetary timing for professional alignment and decision clarity."
        serviceType="Astrology Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={careerFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/astro-career.jpg"
            alt="Career Guidance modern city skyline at sunrise"
            className="h-full w-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <span>PROFESSIONAL ALIGNMENT • 10TH HOUSE JYOTISH</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Career Astrology <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                &amp; Timing Guidance
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Navigate vocational choices, leadership opportunities, and career timing with
              structured Vedic horoscope analysis. Objective guidance for professionals, founders,
              and executives in Bengaluru and worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Career Guidance Astrology')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Career Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/astrology/business"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
              >
                <span>Business Advisory</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Career Analysis Framework */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              Vedic Vocational Analysis
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              How We Analyze Professional Direction
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We look beyond simplistic predictions to uncover your innate cognitive strengths,
              workstyle preferences, and temporal cycles.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vocationalPillars.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <Briefcase className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics & Transparent Explanations */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-700" />
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Ethical &amp; Non-Guaranteed Guidance
              </h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We do not promise promotions, wealth windfalls, or effortless career shortcuts. Our
              role is to provide thoughtful, grounded counsel:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-xs text-slate-700 sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>No Guaranteed Promotions:</strong> Advancement depends on merit, workplace
                  performance, and market circumstances.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Timing Perspective:</strong> We help you recognize whether you are in a
                  period for consolidation, skill acquisition, or assertive movement.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Constructive Action Plans:</strong> Discussions focus on communication,
                  professional boundaries, and realistic milestones.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Strict Confidentiality:</strong> Your employer, industry, and career plans
                  remain strictly confidential.
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
              CAREER INQUIRIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions on Career Astrology
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {careerFaqs.map((faq, idx) => (
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
            Gain Clarity on Your Career Path
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Book a private career astrology consultation with Certified Vastu Consultant Rishwa
            Sinha. In-person in Bengaluru or online worldwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking('Career Guidance Astrology')}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule Career Consultation</span>
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
