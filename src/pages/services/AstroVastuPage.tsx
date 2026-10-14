import React, { useState } from 'react'
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  Sun,
  ShieldCheck,
  Award,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const AstroVastuPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canonicalUrl = `${siteConfig.url}/services/astro-vastu-synthesis`

  const whatsAppUrl = `https://wa.me/${(siteConfig.contact.whatsApp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello 7Rays Astro Vastu, I would like to book an Astro-Vastu Consultation.'
  )}`

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'What is Astro-Vastu and how does it differ from traditional Vastu Shastra?',
      answer:
        'Traditional Vastu Shastra evaluates spatial orientations based on universal rules (e.g., placing the kitchen in the Southeast or master bedroom in the Southwest). However, two individuals living in identical apartments often experience vastly different fortunes. Astro-Vastu resolves this by superimposing your individual Vedic birth chart (Janma Kundli) onto your property’s 16-zone energy map. This customizes directional remedies to your active planetary Dasha cycle, ensuring the home supports your specific karmic strengths.',
    },
    {
      question: 'Why do generic Vastu remedies sometimes fail or cause delays?',
      answer:
        'Generic Vastu treats a home as an isolated physical structure without accounting for the inhabitant’s personal planetary vibrations. If a generic remedy strengthens an elemental direction governed by a planet that is currently an unfavorable functional malefic in your birth chart, it can create unintended friction. Astro-Vastu ensures that remedies harmonize both spatial energy and astrological timing simultaneously.',
    },
    {
      question: 'What birth details are required for an Astro-Vastu consultation?',
      answer:
        'To generate your precise Janma Kundli and Dasha timeline, we require your exact Date of Birth, Time of Birth (with AM/PM specification), and Place of Birth (City and State). If evaluating a family home or business partnership, the birth details of the primary earning members or partners are incorporated.',
    },
    {
      question: 'Do you prescribe expensive gemstones during Astro-Vastu consultations?',
      answer:
        'No. 7Rays Astro Vastu adheres to an ethical, authentic methodology. We do not sell commercial gemstones. Our solutions focus on directional non-demolition spatial remedies, elemental inlays (brass, copper, zinc, lead), color frequency balancing, and classical lifestyle/timing alignments.',
    },
    {
      question: 'Can Astro-Vastu help resolve career stagnation and financial blockages?',
      answer:
        'Yes. In Vedic astrology, the 10th house governs career and social standing, while the 2nd and 11th houses govern accumulated wealth and cash flow. In Vastu, the North governs financial opportunity and the Southeast governs liquidity. Astro-Vastu pinpoints where energetic blockages exist in your property corresponding to the planetary rulers of these houses, releasing stagnation.',
    },
    {
      question: 'Is this consultation available online for clients outside Bangalore?',
      answer:
        'Yes. We conduct complete digital Astro-Vastu consultations for clients across India—including Mumbai, Delhi NCR, Hyderabad, Pune, Kolkata, and Chennai—as well as international NRI clients. Blueprints and birth charts are analyzed digitally prior to an interactive live video session.',
    },
  ]

  const pillars = [
    {
      title: 'Individual Kundli Calibration',
      description:
        'Deep analysis of your Lagna (ascendant), Rashi (moon sign), and current Vimshottari Dasha period to isolate active planetary influences.',
      icon: <Sun className="h-6 w-6 text-amber-400" />,
    },
    {
      title: '16-Zone Spatial Mapping',
      description:
        'Precise directional zoning of your residence or commercial office, mapping planetary rulers to each specific room and entrance.',
      icon: <Compass className="h-6 w-6 text-amber-400" />,
    },
    {
      title: 'Synastry of Space & Time',
      description:
        'Harmonizing the 4th house (domestic peace/property) and 10th house (career/authority) with your physical property layout.',
      icon: <Layers className="h-6 w-6 text-amber-400" />,
    },
    {
      title: 'Targeted Non-Demolition Cures',
      description:
        'Balancing elemental frequencies and directional vectors through subtle metal inlays, colors, and lighting without structural damage.',
      icon: <ShieldCheck className="h-6 w-6 text-amber-400" />,
    },
  ]

  return (
    <>
      <SEOHead
        title="Astro Vastu Consultant India | Scientific Kundli & Vastu | 7Rays"
        description="Integrate your Vedic birth chart with 16-zone Vastu architecture. Certified Vastu Consultant Rishwa Sinha provides scientific Astro-Vastu consultations across India."
        canonicalUrl={canonicalUrl}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Astro-Vastu Synthesis', url: '/services/astro-vastu-synthesis' },
        ]}
      />

      <ServiceSchema
        name="Astro-Vastu Synthesis Consultation"
        description="Scientific integration of Vedic horoscope analysis with 16-zone spatial Vastu Shastra for customized, non-demolition life and career remedies across India."
        serviceType="Astro-Vastu Consultation"
      />

      <FAQSchema items={faqs} />

      <main className="min-h-screen bg-slate-950 text-slate-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>The Synthesis of Planetary Timing & Spatial Energy</span>
              </div>

              <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Scientific <span className="text-amber-400">Astro-Vastu</span> Synthesis Consultation
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                Why do two families living in identical floor plans experience completely different lives?
                Because a space resonates uniquely with each occupant’s Vedic planetary chart.
                Led by <strong>Rishwa Sinha</strong>, Certified Vastu Consultant with 5+ years of verified practice,
                we align your personal Kundli with your living and working environment.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-400 hover:to-amber-500"
                >
                  <span>Book Astro-Vastu Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>Consult via WhatsApp</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-4 text-left text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-amber-400 shrink-0" />
                  <span>Kundli Synchronized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-amber-400 shrink-0" />
                  <span>16 Directional Zones</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0" />
                  <span>Zero Demolition</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-400 shrink-0" />
                  <span>Ethical Practice</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Concept */}
        <section className="border-t border-slate-900 bg-slate-900/50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                The Science of Synastry
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-100 sm:text-4xl">
                How Horoscope & Architecture Interact
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                In classical Vedic wisdom, the directional grid of your physical home is a macrocosm of your birth chart.
                When planetary transits coincide with blocked domestic zones, challenges manifest.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-amber-500/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                    {pillar.icon}
                  </div>
                  <h3 className="mt-6 font-serif text-lg font-bold text-slate-100">{pillar.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Application Areas */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                  Targeted Solutions
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-slate-100 sm:text-4xl">
                  Addressing Real Life Challenges with Astro-Vastu
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  By mapping which planets and directional zones govern specific life domains, we resolve persistent obstacles with pinpoint precision:
                </p>

                <div className="mt-6 space-y-4 text-xs leading-relaxed text-slate-300">
                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
                    <strong className="text-amber-400">Career Growth & Authority:</strong>
                    <p className="mt-1 text-slate-400">
                      Synchronizing the 10th astrological house with the South and Southwest zones, stabilizing executive decision-making and business reputation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
                    <strong className="text-amber-400">Financial Liquidity & Opportunity:</strong>
                    <p className="mt-1 text-slate-400">
                      Aligning Mercury and Venus planetary strengths with the North (Kuber zone) and Southeast (Agni fire zone), removing financial bottlenecks.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
                    <strong className="text-amber-400">Health, Vitality & Mental Clarity:</strong>
                    <p className="mt-1 text-slate-400">
                      Balancing the Sun (health ruler) with the Northeast (Ishan corner) and North-Northwest, reducing persistent lethargy and sleeplessness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
                <h3 className="font-serif text-xl font-bold text-slate-100">
                  What You Receive in Your Consultation
                </h3>
                <ul className="mt-6 space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>Complete Janma Kundli calculation with current Dasha analysis.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>16-zone digital blueprint overlay of your residential or commercial space.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>Cross-matching of active dasha lords with corresponding home directions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>Customized non-demolition remedial blueprint with metallic and elemental remedies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>60-to-90 minute private interactive consultation with Rishwa Sinha.</span>
                  </li>
                </ul>

                <div className="mt-8 border-t border-slate-800 pt-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full rounded-xl bg-amber-500 py-3 text-center text-xs font-bold text-slate-950 transition hover:bg-amber-400"
                  >
                    Schedule Your Session Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-slate-900 bg-slate-900/40 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                Expert Answers
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-100 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm text-slate-400">
                Understanding how Astro-Vastu integrates horoscope charts with environmental energies.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 transition hover:border-slate-700"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-slate-200 transition hover:text-amber-400 sm:p-6"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <HelpCircle className="h-5 w-5 shrink-0 text-amber-400" />
                  </button>
                  {openFaq === index && (
                    <div className="border-t border-slate-800/80 px-5 pt-3 pb-5 text-xs leading-relaxed text-slate-300 sm:px-6 sm:pb-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="relative overflow-hidden border-t border-amber-500/20 bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-20">
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-slate-100 sm:text-4xl">
              Harmonize Your Stars With Your Living Space
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
              Personalized Astro-Vastu consultations led by Certified Vastu Consultant Rishwa Sinha.
              Available on-site across Bengaluru and digitally across India and worldwide.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-400"
              >
                <span>Book Astro-Vastu Session</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-amber-400"
              >
                <PhoneCall className="h-4 w-4 text-amber-400" />
                <span>Call {businessConfig.displayPhone || '+91 70910 21616'}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Astro-Vastu Consultation"
      />
    </>
  )
}
