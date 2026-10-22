import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  ChevronRight,
  Star,
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
      icon: <Sun className="h-6 w-6 text-amber-700" />,
    },
    {
      title: '16-Zone Spatial Mapping',
      description:
        'Precise directional zoning of your residence or commercial office, mapping planetary rulers to each specific room and entrance.',
      icon: <Compass className="h-6 w-6 text-amber-700" />,
    },
    {
      title: 'Synastry of Space & Time',
      description:
        'Harmonizing the 4th house (domestic peace/property) and 10th house (career/authority) with your physical property layout.',
      icon: <Layers className="h-6 w-6 text-amber-700" />,
    },
    {
      title: 'Targeted Non-Demolition Cures',
      description:
        'Balancing elemental frequencies and directional vectors through subtle metal inlays, colors, and lighting without structural damage.',
      icon: <ShieldCheck className="h-6 w-6 text-amber-700" />,
    },
  ]

  const planetaryZones = [
    { zone: 'Northeast (Ishan)', planet: 'Jupiter (Brihaspati)', energy: 'Wisdom, Higher Learning, Clarity of Vision & Intuition' },
    { zone: 'East (Purva)', planet: 'Sun (Surya)', energy: 'Leadership, Government Connections, Vitality & Social Respect' },
    { zone: 'Southeast (Agni)', planet: 'Venus (Shukra)', energy: 'Cash Flow, Passion, Brand Value & Luxury Living' },
    { zone: 'South (Dakshin)', planet: 'Mars (Mangal)', energy: 'Confidence, Drive, Courage, Security & Legal Victory' },
    { zone: 'Southwest (Nairutya)', planet: 'Rahu (Ascending Node)', energy: 'Stability, Master Skills, Family Headship & Wealth Anchor' },
    { zone: 'West (Paschim)', planet: 'Saturn (Shani)', energy: 'Long-term Gains, Asset Accumulation & Structured Discipline' },
    { zone: 'Northwest (Vayu)', planet: 'Moon (Chandra)', energy: 'Support Systems, Bank Credit, Helpful Relationships & Travel' },
    { zone: 'North (Kuber)', planet: 'Mercury (Budha)', energy: 'New Clients, Career Opportunities, Communication & Intellect' },
  ]

  return (
    <>
      <SEOHead
        title="Astro Vastu Consultant India | Kundli & Vastu | 7Rays"
        description="Integrate your Vedic birth chart with 16-zone Vastu architecture. Certified Vastu Consultant Rishwa Sinha provides scientific Astro-Vastu consultations across India."
        canonicalUrl={canonicalUrl}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/vastu-services/' },
          { name: 'Astro-Vastu Synthesis', url: '/services/astro-vastu-synthesis/' },
        ]}
      />

      <ServiceSchema
        name="Astro-Vastu Synthesis Consultation"
        description="Scientific integration of Vedic horoscope analysis with 16-zone spatial Vastu Shastra for customized, non-demolition life and career remedies across India."
        serviceType="Astro-Vastu Consultation"
      />

      <FAQSchema items={faqs} />

      {/* 1. HERO SECTION (Dark Luxury with Architectural Hero Image) */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/astrology-consultation.webp"
            alt="Astro-Vastu Synthesis Consultation Birth Chart and Vastu Layout"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1200}
            height={896}
            className="h-full w-full object-cover object-center"
          />
          {/* Subtle dark gradient overlay allowing image to shine through vividly */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/90" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>THE SYNTHESIS OF PLANETARY TIMING &amp; SPATIAL ENERGY</span>
            </div>

            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Scientific{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Astro-Vastu
              </span>{' '}
              Synthesis Consultation
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
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
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
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-4 text-left text-xs text-slate-300">
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

      {/* 2. BREADCRUMBS & TRUST STRIP (Warm Cream / Off-White) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-800">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/vastu-services" className="transition hover:text-amber-800">
              Services
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-medium text-slate-800">Astro-Vastu Synthesis</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-amber-900">
            <Star className="h-4 w-4 text-amber-700" />
            <span>Personalized Horoscope Synastry • Non-Demolition Elemental Remedies</span>
          </div>
        </div>
      </section>

      {/* 3. THE CORE CONCEPT (Clean White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              THE SCIENCE OF SYNASTRY
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              How Horoscope &amp; Architecture Interact
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              In classical Vedic wisdom, the directional grid of your physical home is a macrocosm of your birth chart.
              When planetary transits coincide with blocked domestic zones, challenges manifest.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-2xs transition hover:border-amber-400 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                  {pillar.icon}
                </div>
                <h3 className="mt-6 font-serif text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILED LIFE APPLICATIONS (Warm Off-White Background) */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                TARGETED SOLUTIONS
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Addressing Real Life Challenges with Astro-Vastu
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                By mapping which planets and directional zones govern specific life domains, we resolve persistent obstacles with pinpoint precision:
              </p>

              <div className="mt-6 space-y-4 text-xs leading-relaxed text-slate-700">
                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs">
                  <strong className="text-amber-800 text-sm">Career Growth &amp; Authority:</strong>
                  <p className="mt-1 text-slate-600">
                    Synchronizing the 10th astrological house with the South and Southwest zones, stabilizing executive decision-making and business reputation.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs">
                  <strong className="text-amber-800 text-sm">Financial Liquidity &amp; Opportunity:</strong>
                  <p className="mt-1 text-slate-600">
                    Aligning Mercury and Venus planetary strengths with the North (Kuber zone) and Southeast (Agni fire zone), removing financial bottlenecks.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs">
                  <strong className="text-amber-800 text-sm">Health, Vitality &amp; Mental Clarity:</strong>
                  <p className="mt-1 text-slate-600">
                    Balancing the Sun (health ruler) with the Northeast (Ishan corner) and North-Northwest, reducing persistent lethargy and sleeplessness.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                CONSULTATION DOSSIER
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900">
                What You Receive in Your Session
              </h3>
              <ul className="mt-6 space-y-3.5 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Complete Janma Kundli calculation with current Dasha analysis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>16-zone digital blueprint overlay of your residential or commercial space.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Cross-matching of active dasha lords with corresponding home directions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Customized non-demolition remedial blueprint with metallic and elemental remedies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>60-to-90 minute private interactive consultation with Rishwa Sinha.</span>
                </li>
              </ul>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-3.5 text-center text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                >
                  Schedule Your Session Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLANETARY DIRECTIONAL SYNTHESIS (Dark Luxury Accent Section) */}
      <section className="relative overflow-hidden bg-[#070E1E] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase">
              THE 8 PRIMARY CARDINAL AXES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Planetary Rulers of the 16 Vastu Zones
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Each cardinal direction in your home is continuously energized by its presiding Navagraha planet. When that planet is favorable in your chart, optimizing its zone multiplies opportunities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {planetaryZones.map((item) => (
              <div
                key={item.zone}
                className="rounded-xl border border-amber-400/20 bg-slate-900/80 p-5 backdrop-blur-xs transition hover:border-amber-400/50"
              >
                <div className="text-xs font-bold tracking-wider text-amber-400 uppercase">
                  {item.zone}
                </div>
                <div className="mt-1 font-serif text-sm font-bold text-white">{item.planet}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.energy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXTENDED FAQS (Warm Cream Background) */}
      <section className="border-t border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              EXPERT ANSWERS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Understanding how Astro-Vastu integrates horoscope charts with environmental energies.
            </p>
          </div>

          <div className="mt-12 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-amber-200/70 bg-white transition hover:border-amber-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-slate-900 transition hover:text-amber-800"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <HelpCircle className="h-5 w-5 shrink-0 text-amber-700" />
                  </button>
                  {isOpen && (
                    <div className="border-t border-amber-200/60 bg-[#FAF8F5]/60 px-5 pt-3 pb-5 text-xs sm:text-sm leading-relaxed text-slate-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER (Dark Slate-950) */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Harmonize Your Stars With Your Living Space
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Personalized Astro-Vastu consultations led by Certified Vastu Consultant Rishwa Sinha.
            Available on-site across Bengaluru and digitally across India and worldwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Book Astro-Vastu Session</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" />
              <span>Call {businessConfig.displayPhone || '+91 70910 21616'}</span>
            </a>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Astro-Vastu Consultation"
      />
    </>
  )
}

