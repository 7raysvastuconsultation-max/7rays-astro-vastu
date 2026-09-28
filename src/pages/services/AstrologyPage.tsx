import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  ArrowRight,
  BookOpen,
  Briefcase,
  Heart,
  TrendingUp,
  Sparkles,
  MessageSquare,
  Sun,
  ShieldCheck,
  Plus,
  Minus,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const AstrologyPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Vedic Astrology Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const whatsAppUrl = siteConfig.contact.phone
    ? `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello 7Rays Astro Vastu, I would like to schedule an astrology consultation.'
      )}`
    : '/contact'

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  // Testimonials removed per Phase 10 E-E-A-T policy — see TESTIMONIAL_VERIFICATION_POLICY.md
  // Only verified, permission-obtained testimonials may be published

  const astrologyFaqs = [
    {
      question: 'What happens during a Vedic astrology consultation with 7Rays?',
      answer:
        'A consultation is a private, one-on-one session where we analyze your natal birth chart (Janam Kundli) based on your exact birth time, date, and location. We examine planetary alignments, your current planetary cycle (Mahadasha and Antardasha), and your key houses of life purpose, career, relationships, and wellbeing. The session is conversational, focused on your specific life questions, and geared toward practical self-awareness.',
    },
    {
      question: 'What information do I need to provide before the session?',
      answer:
        'To construct an accurate Vedic birth chart, you need three pieces of data: your exact date of birth, your exact time of birth (recorded from birth certificate or hospital records), and your exact city/place of birth. Accurate birth time is essential because the ascendant (Lagna) changes roughly every two hours.',
    },
    {
      question: 'Does Vedic astrology guarantee specific future outcomes or wealth?',
      answer:
        'No. At 7Rays Astro Vastu, we maintain strict ethical standards: astrology is an ancient interpretive system of planetary cycles, behavioral tendencies, and psychological archetypes. It indicates potentials, favorable timing, and natural inclinations, but it never guarantees specific outcomes, wealth amounts, or relationship events. Free will, personal effort, and conscious decision-making always remain paramount.',
    },
    {
      question: 'How does Vedic astrology differ from Western astrology?',
      answer:
        'Vedic astrology (Jyotish) utilizes the sidereal zodiac, which aligns with the observable physical constellations in the sky and accounts for the precession of equinoxes (Ayanamsha). Western astrology typically utilizes the tropical zodiac, which is tied to the Earth-Sun seasons. Additionally, Vedic astrology relies heavily on the 27 Nakshatras (lunar mansions) and the predictive Dasha timing system.',
    },
    {
      question: 'What is the difference between Astrology and Vastu Shastra?',
      answer:
        'Astrology is time-oriented: it maps personal temporal cycles, planetary archetypes, and individual life patterns through your horoscope. Vastu Shastra is space-oriented: it governs the directional orientation, five elements (Pancha Tattva), and 16 energetic zones of a physical building. While Astrology deals with when, Vastu deals with where.',
    },
    {
      question: 'How does an Astro-Vastu consultation combine the two disciplines?',
      answer:
        'An Astro-Vastu consultation synthesizes personal planetary signatures with spatial zoning. If a client is experiencing a challenging planetary period (for example, Saturn or Sun Dasha), an Astro-Vastu assessment inspects the corresponding directional zones of their home or workplace (such as West for Saturn or East for Sun) to ensure those physical spaces are balanced and free from elemental clashes.',
    },
    {
      question: 'Do you offer in-person consultations in Bangalore or online sessions?',
      answer:
        'Both formats are available. We conduct online video consultations for clients across India and globally, as well as in-person consultations by prior appointment at our Bengaluru registered address in Dasarahalli (560024).',
    },
  ]

  return (
    <>
      <SEOHead
        title="Vedic Astrology Consultation in Bangalore | 7Rays"
        description="Authentic Vedic astrology consultations in Bangalore by Certified Vastu Consultant Rishwa Sinha. Detailed birth chart (Kundli) analysis, career timing, and relationship guidance."
        canonicalUrl={`${siteConfig.url}/astrology`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Astrology', url: '/astrology' },
        ]}
      />
      <ServiceSchema
        name="Vedic Astrology & Life Guidance Consultation"
        description="Authentic Vedic astrology horoscope readings, birth chart synthesis, career timing, and relationship guidance rooted in classical Parashari Jyotish principles."
        serviceType="Astrology Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={astrologyFaqs} />

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden py-24 sm:py-32">
        <img
          src="/images/astrology-hero-study.jpg"
          alt="Atmospheric Vedic astrology library study with glowing zodiac wheel and candlelight"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width={1376}
          height={768}
          className="absolute inset-0 h-full w-full object-cover object-center brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/85" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: Heading & Intro */}
            <div className="space-y-6 text-left lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>• VEDIC ASTROLOGY &amp; LIFE PATH GUIDANCE</span>
              </div>

              <h1 className="font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl lg:text-7xl">
                Guidance for <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  A Brighter Tomorrow
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Discover clarity through classical Vedic astrology (Jyotish). Gain objective
                insights into your natural strengths, planetary timing cycles, and life transitions
                with personalized consultations led by Rishwa Sinha in Bengaluru.
              </p>

              {/* 3 Feature Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Self-Awareness &amp; Purpose</span>
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Timing &amp; Decision Clarity</span>
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Ethical &amp; Non-Fatalistic</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => openBooking('Vedic Astrology Consultation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Astrology Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  to="/locations/bangalore/astrology"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
                >
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  <span>Bangalore Astrology Desk</span>
                </Link>
              </div>
            </div>

            {/* Right: Elegant Floating Quote Card */}
            <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
              <div className="max-w-xs rounded-2xl border border-white/20 bg-slate-950/70 p-6 text-right shadow-2xl backdrop-blur-md">
                <p className="font-serif text-lg leading-snug text-amber-200/90 italic">
                  "When you understand yourself, life flows with ease."
                </p>
                <span className="mt-3 block text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
                  — 7Rays Astro Vastu
                </span>
                <div className="mt-4 border-t border-white/10 pt-3 text-left text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-medium text-amber-300">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Sidereal Parashari Calculations</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-400/70" />
                    <span>Private &amp; Confidential Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AEO DIRECT ANSWER CARDS (Quick Answers for Search Engines & Clients) */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              FUNDAMENTALS OF JYOTISH
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Understanding Vedic Astrology
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Clear, transparent answers to core questions about traditional Vedic horoscope
              interpretation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <Sun className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-slate-900">
                What Is Vedic Astrology?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Vedic astrology (Jyotish) is the ancient Indian science of light that analyzes the
                sidereal positions of nine celestial bodies (Navagrahas) relative to twelve zodiac
                houses (Bhavas) to map energetic patterns and personal temperaments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-slate-900">
                What Is a Birth Chart?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                A Janam Kundli is a precise astronomical map of the sky at the exact second, date,
                and geographic coordinates of your birth. It reveals your rising sign (Lagna), moon
                sign (Rashi), planetary strengths, and life inclinations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-slate-900">
                What Information Is Needed?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Accurate chart computation requires three elements: exact date of birth, exact time
                of birth (hours, minutes, AM/PM), and the specific birth city. Precise birth time is
                critical for determining the rising ascendant.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-slate-900">Astrology vs Vastu?</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Astrology examines chronological planetary cycles (time), while Vastu Shastra
                harmonizes the directional orientation and 5 elements of physical buildings (space).
                Together, they offer a holistic understanding of time and environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 3: SPECIALIZED GUIDANCE CLUSTERS */}
      <section className="border-b border-slate-200 bg-white py-18 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
                SPECIALIZED CONSULTATION CLUSTERS
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Personalized Guidance for <br /> Every Stage of Life
              </h2>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                Our astrology consultations are rooted in authentic Vedic wisdom, offering
                structured, practical insights for modern living without fatalistic claims.
              </p>
            </div>
            <div>
              <Link
                to="/vastu-services"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800"
              >
                <span>Explore Vastu Services</span>
                <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              </Link>
            </div>
          </div>

          {/* 5 Column Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {/* 1. Birth Chart Analysis */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/astrology-consultation.jpg"
                    alt="Birth Chart Analysis horoscope"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 transition group-hover:text-amber-800">
                    Birth Chart Analysis
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Detailed study of your Janam Kundli, 12 Bhavas, rising Lagna, and planetary
                    strengths for self-awareness.
                  </p>
                </div>
              </div>
              <div className="space-y-2 p-4 pt-0">
                <Link
                  to="/astrology/birth-chart"
                  className="block text-[11px] font-bold text-amber-700 hover:underline"
                >
                  Explore Birth Chart →
                </Link>
                <button
                  onClick={() => openBooking('Birth Chart Analysis')}
                  className="w-full rounded-md border border-slate-200 py-1.5 text-center text-[11px] font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-amber-800"
                >
                  Book Session
                </button>
              </div>
            </div>

            {/* 2. Career Guidance */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/astro-career.jpg"
                    alt="Career Guidance modern city skyline at sunrise"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 transition group-hover:text-amber-800">
                    Career Astrology
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Evaluate 10th house indicators, Saturn and Sun transits, and professional timing
                    to navigate career shifts.
                  </p>
                </div>
              </div>
              <div className="space-y-2 p-4 pt-0">
                <Link
                  to="/astrology/career"
                  className="block text-[11px] font-bold text-amber-700 hover:underline"
                >
                  Explore Career Advisory →
                </Link>
                <button
                  onClick={() => openBooking('Career Guidance Astrology')}
                  className="w-full rounded-md border border-slate-200 py-1.5 text-center text-[11px] font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-amber-800"
                >
                  Book Session
                </button>
              </div>
            </div>

            {/* 3. Business Astrology */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/commercial-vastu.jpg"
                    alt="Business Astrology Consultation"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 transition group-hover:text-amber-800">
                    Business Astrology
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Venture launch timing, co-founder compatibility, and commercial cycle
                    understanding for founders and executives.
                  </p>
                </div>
              </div>
              <div className="space-y-2 p-4 pt-0">
                <Link
                  to="/astrology/business"
                  className="block text-[11px] font-bold text-amber-700 hover:underline"
                >
                  Explore Business Advisory →
                </Link>
                <button
                  onClick={() => openBooking('Business Astrology Advisory')}
                  className="w-full rounded-md border border-slate-200 py-1.5 text-center text-[11px] font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-amber-800"
                >
                  Book Session
                </button>
              </div>
            </div>

            {/* 4. Relationship & Marriage */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/astro-relationship.jpg"
                    alt="Relationship & Marriage harmony"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Heart className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 transition group-hover:text-amber-800">
                    Marriage &amp; Compatibility
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Traditional Kundli Milan, 7th house analysis, and emotional compatibility
                    evaluation without fear-based claims.
                  </p>
                </div>
              </div>
              <div className="space-y-2 p-4 pt-0">
                <Link
                  to="/astrology/marriage"
                  className="block text-[11px] font-bold text-amber-700 hover:underline"
                >
                  Explore Compatibility →
                </Link>
                <button
                  onClick={() => openBooking('Relationship & Marriage Astrology')}
                  className="w-full rounded-md border border-slate-200 py-1.5 text-center text-[11px] font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-amber-800"
                >
                  Book Session
                </button>
              </div>
            </div>

            {/* 5. Wealth & Financial Timing */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
              <div>
                <div className="h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/astro-wealth.jpg"
                    alt="Wealth & Financial Decision Timing"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-slate-900 transition group-hover:text-amber-800">
                    Financial Timing
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">
                    Examine 2nd and 11th houses (Dhana Bhavas) and planetary Dasha periods to align
                    major financial commitments.
                  </p>
                </div>
              </div>
              <div className="space-y-2 p-4 pt-0">
                <button
                  onClick={() => openBooking('Financial Timing & Wealth Astrology')}
                  className="block w-full text-left text-[11px] font-bold text-amber-700 hover:underline"
                >
                  Consult on Timing →
                </button>
                <button
                  onClick={() => openBooking('Financial Timing & Wealth Astrology')}
                  className="w-full rounded-md border border-slate-200 py-1.5 text-center text-[11px] font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-amber-800"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASTRO-VASTU SYNTHESIS SECTION (Bridging Time and Space) */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-slate-100 sm:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-300 uppercase">
                <Layers className="h-3.5 w-3.5" />
                <span>THE ASTRO-VASTU RELATIONSHIP</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-100 sm:text-4xl lg:text-5xl">
                Synthesizing Personal Timing <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  with Spatial Energy
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Astrology and Vastu Shastra are distinct yet complementary disciplines. While
                Astrology examines chronological planetary cycles (time), Vastu Shastra balances the
                16 directional zones of a physical building (space).
              </p>
              <div className="space-y-3 pt-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <h3 className="font-serif text-sm font-bold text-amber-300">
                    Directional Planetary Rulerships
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    In classical Vastu texts, every cardinal and intercardinal direction aligns with
                    a specific planetary ruler: Sun governs East, Venus governs South-East, Mars
                    governs South, Rahu governs South-West, Saturn governs West, Moon governs
                    North-West, Mercury governs North, and Jupiter governs North-East.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <h3 className="font-serif text-sm font-bold text-amber-300">
                    Practical Astro-Vastu Synthesis
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    During challenging planetary transits (e.g. Saturn or Rahu Dasha), an
                    Astro-Vastu consultation verifies that the corresponding directional zones of
                    the home or office (West and South-West) are free of clutter, fire elements, or
                    drainage conflicts, providing physical grounding to planetary influences.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/insights/astrology-vs-vastu-difference-and-synthesis"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Read our comprehensive Astro-Vastu Synthesis Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-md">
                <h3 className="font-serif text-lg font-bold text-white">
                  Consultation Ethics &amp; Transparency
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  We believe astrology should empower, not intimidate. Our consultative framework is
                  strictly non-sensational:
                </p>
                <ul className="mt-4 space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>
                      <strong>No Fear Marketing:</strong> We never make alarmist claims about curses
                      or fatal calamities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>
                      <strong>No Outcome Guarantees:</strong> We do not promise lottery wins,
                      miraculous promotions, or guaranteed matches.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>
                      <strong>Practical Focus:</strong> Insights are translated into constructive
                      lifestyle and decision-making clarity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>
                      <strong>Strict Confidentiality:</strong> Birth data and personal discussions
                      remain completely private.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION PROCESS SECTION */}
      <section className="border-b border-slate-200 bg-white py-18 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              STRUCTURED CONSULTATION WORKFLOW
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              How Your Astrology Session Works
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              From birth data verification to the post-session summary, here is the exact 4-step
              journey.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-bold text-amber-700">01</span>
                <Calendar className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="mt-3 font-serif text-base font-bold text-slate-900">
                Data Verification
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                You submit your exact date, time, and city of birth. We verify coordinate accuracy
                and compute the primary Lagna and divisional charts.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-bold text-amber-700">02</span>
                <BookOpen className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="mt-3 font-serif text-base font-bold text-slate-900">
                Chart Computation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                We analyze your 12 Bhavas, planetary dignities (exaltation, debilitation), and
                current Vimshottari Mahadasha / Antardasha timelines.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-bold text-amber-700">03</span>
                <Compass className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="mt-3 font-serif text-base font-bold text-slate-900">
                1-on-1 Consultation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                A private 45-to-60 minute audio/video or in-person session in Bangalore discussing
                your specific questions, strengths, and upcoming cycles.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-bold text-amber-700">04</span>
                <ShieldCheck className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="mt-3 font-serif text-base font-bold text-slate-900">
                Practical Guidance
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Receive practical remedies such as mindful timing, lifestyle alignments, and
                meditative focus areas without superstitious burdens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BANGALORE ASTROLOGY DESK INTEGRATION */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>BENGALURU HEADQUARTERS &amp; CONSULTING DESK</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                  In-Person &amp; Online Astrology Consultations in Bangalore
                </h2>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our consultancy is headquartered in Dasarahalli, Bengaluru (560024). We serve
                  clients across the entire metropolitan area including Hebbal, Yelahanka,
                  Indiranagar, Whitefield, Koramangala, and HSR Layout, as well as clients
                  nationwide through high-definition virtual consultations.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/locations/bangalore/astrology"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-400"
                  >
                    <span>View Bangalore Astrology Hub</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 underline hover:text-amber-950"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-xs text-slate-600 lg:col-span-4">
                <span className="font-serif text-sm font-bold text-slate-900">
                  Consultation Format Options
                </span>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>In-Person by Prior Appointment</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Online Video Call (Zoom / Google Meet)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Confidential Chart Summary Shared</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT EXPERIENCES — VERIFICATION NOTICE */}
      <section className="border-b border-slate-200 bg-white py-18 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              CLIENT FEEDBACK
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Client Experiences
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Client testimonials will be published here as verified feedback becomes available.
            </p>
            <a
              href="https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
            >
              <span>View Independent Reviews on Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="border-b border-slate-200 bg-slate-50 py-18 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Common Questions About Astrology Sessions
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Everything you need to know about our astrological methodology and consultation
              standards.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {astrologyFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-amber-400"
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
                  <div className="border-t border-slate-100 bg-slate-50/50 p-5 pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRE-FOOTER SUNSET BANNER */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.jpg"
          alt="Luxury architectural terrace overlooking golden sunset horizon"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/75" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: Heading & Buttons */}
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl lg:text-6xl">
                Discover Clarity. <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Embrace Possibilities.
                </span>
              </h2>

              <p className="max-w-xl text-sm leading-relaxed font-light text-slate-200 sm:text-base">
                Schedule your personalized Vedic astrology consultation with 7Rays Astro Vastu.
                Grounded insights for life, career, and relationships.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => openBooking('Vedic Astrology Consultation')}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right: 5 Focus Areas */}
            <div className="hidden border-l border-white/20 pl-8 text-left lg:col-span-4 lg:block">
              <ul className="space-y-3 font-serif text-sm tracking-wide text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Career Guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Birth Chart (Kundli)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Relationship Compatibility</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Business Timing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Astro-Vastu Synthesis</span>
                </li>
              </ul>
            </div>
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
