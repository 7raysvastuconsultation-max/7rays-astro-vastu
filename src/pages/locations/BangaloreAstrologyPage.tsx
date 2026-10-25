import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Briefcase,
  Heart,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Minus,
  PhoneCall,
  Sparkles,
  Layers,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BangaloreAstrologyPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore/astrology`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Vedic Astrology Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const localAstrologyFaqs = [
    {
      question: 'Where are your in-person astrology consultations held in Bangalore?',
      answer:
        'In-person consultations are conducted by prior appointment at our registered Bengaluru consulting office located at 3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024. We request clients to confirm their slot in advance so their charts can be calculated before the meeting.',
    },
    {
      question: 'Do you also offer online astrology consultations for Bangalore residents?',
      answer:
        'Yes. Many Bangalore professionals, founders, and families prefer online video sessions (via Zoom or Google Meet) to save commuting time in city traffic. Online sessions provide the identical depth of chart analysis, with visual screen sharing of your Janam Kundli and a post-session summary document.',
    },
    {
      question: 'What details must I provide for an astrology session in Bangalore?',
      answer:
        'You need your exact Date of Birth (DD/MM/YYYY), exact Time of Birth (including AM/PM, ideally from birth records), and exact City/Town of Birth. These parameters are essential to compute your Lagna (rising sign), planetary degrees, and divisional charts accurately.',
    },
    {
      question: 'How does your consultation differ from traditional superstitious astrologers?',
      answer:
        'At 7Rays Astro Vastu, our consultations led by Rishwa Sinha are strictly non-fatalistic, transparent, and ethical. We do not use fear-based tactics, we do not claim to rewrite your destiny, and we do not sell overpriced superstitious gemstones. We focus on psychological self-awareness, timing of major life phases, and constructive decision-making.',
    },
    {
      question:
        'Can I combine an astrology consultation with a residential Vastu audit in Bangalore?',
      answer:
        'Yes. As a dual-discipline consultancy, we offer integrated Astro-Vastu consultations. In this session, your personal planetary Dasha cycles are synthesized with the directional energy zones of your Bangalore apartment or independent home, ensuring your physical environment supports your life phase.',
    },
  ]

  const bangaloreCoverageZones = [
    {
      region: 'North Bangalore (Headquarters)',
      localities: 'Dasarahalli, Hebbal, Yelahanka, Jakkur, Sahakar Nagar, Thanisandra',
      description:
        'In-person consultations at our Dasarahalli consulting desk and priority scheduling for North Bengaluru residents.',
    },
    {
      region: 'East Bangalore & Tech Corridor',
      localities: 'Indiranagar, Whitefield, Marathahalli, Varthur, KR Puram, CV Raman Nagar',
      description:
        'Widely chosen by tech professionals and entrepreneurs for career timing and startup advisory via online and hybrid sessions.',
    },
    {
      region: 'South Bangalore',
      localities: 'Koramangala, HSR Layout, JP Nagar, Jayanagar, BTM Layout, Sarjapur Road',
      description:
        'Frequent consultations for startup founders, established business families, and young couples seeking marriage compatibility.',
    },
    {
      region: 'West & Central Bangalore',
      localities: 'Malleshwaram, Rajajinagar, Sadashivanagar, Basavanagudi, MG Road / CBD',
      description:
        'Serving traditional family establishments and ancestral property owners seeking life path and generational estate clarity.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Vedic Astrologer in Bangalore | 7Rays"
        description="Authentic Vedic astrology consultation in Bangalore with Certified Vastu Consultant Rishwa Sinha. In-person at Dasarahalli 560024 & online video sessions."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations/' },
          { name: 'Bangalore', url: '/locations/bangalore/' },
          { name: 'Vedic Astrology', url: '/locations/bangalore/astrology/' },
        ]}
      />
      <LocalBusinessSchema
        name={`${siteConfig.name} - Bangalore Vedic Astrology`}
        description="Authentic Vedic astrology horoscope readings, birth chart synthesis, career timing, and relationship guidance in Bengaluru."
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
        areaServed={[...siteConfig.serviceAreas]}
        latitude={siteConfig.contact.geo.latitude ?? undefined}
        longitude={siteConfig.contact.geo.longitude ?? undefined}
      />
      <ServiceSchema
        name="Bangalore Vedic Astrology Consultation"
        description="Private in-person and digital Vedic astrology consultations covering birth chart analysis, career timing, and life path direction across Bengaluru."
        serviceType="Astrology Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={localAstrologyFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[560px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/astrology-hero-study.webp"
            width={1376}
            height={768}
            alt="Vedic astrology chart analysis in Bangalore studio"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="h-full w-full object-cover object-center"
          />
          {/* Left-side directional scrim ensuring crystal-clear text contrast while keeping image bright & visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20 lg:via-slate-950/50 lg:to-transparent" />
          {/* Subtle top & bottom edge blend into adjacent sections */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="transition hover:text-amber-300">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-500" aria-hidden="true" />
            <Link to="/locations/" className="transition hover:text-amber-300">
              Locations
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-500" aria-hidden="true" />
            <Link to="/locations/bangalore/" className="transition hover:text-amber-300">
              Bangalore
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-500" aria-hidden="true" />
            <span aria-current="page" className="font-medium text-amber-300">
              Vedic Astrology
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="py-6 sm:py-10 lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>BENGALURU • IN-PERSON &amp; ONLINE SESSIONS</span>
              </div>

              <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
                Vedic Astrology
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Consultant in Bangalore
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Personalized Vedic birth chart (Kundli) consultations in Bengaluru. Understand your
                planetary cycles, professional timing, and personal strengths with ethical,
                non-fatalistic guidance led by Certified Vastu Consultant Rishwa Sinha.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openBooking('Bangalore Vedic Astrology Consultation')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Bangalore Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  to="/astrology/"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
                >
                  <span>Astrology Pillar Overview</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural / Vedic Preview Card (Desktop) */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="rounded-2xl border border-amber-400/30 bg-slate-900/80 p-7 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-400 uppercase">
                    <Sparkles className="h-3.5 w-3.5" />
                    Ethical &amp; Non-Fatalistic
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                    In-Person &amp; Video
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>Kundli &amp; Dasha Synthesis:</strong> Precise birth chart analysis mapping Mahadasha / Antardasha timelines to career and family decisions.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>Zero Superstition:</strong> No fear-mongering, no forced expensive gemstones, and transparent astronomical calculations.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>Astro-Vastu Integration:</strong> Align your residential floor plan energy zones with your active planetary cycles.
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                  <p className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider">Consultation Desk</p>
                  <p className="mt-1 text-xs text-slate-300">Dasarahalli registered office (560024) or screen-share session via Zoom / Meet.</p>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                  <span>Questions? Direct Desk:</span>
                  <a href={`tel:${businessConfig.phone || '+91 70910 21616'}`} className="font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1">
                    <PhoneCall className="h-3 w-3" /> {businessConfig.displayPhone || '+91 70910 21616'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified NAP & Entity Banner */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-6 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <MapPin className="h-4 w-4 text-amber-800" />
            <span className="font-semibold text-slate-800">
              Bangalore Consulting Office: 3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024
            </span>
          </div>
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 underline transition hover:text-amber-950"
          >
            <span>View on Google Maps</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </section>

      {/* Core Consultation Areas in Bangalore */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              CONSULTATION TOPICS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Practical Vedic Guidance for Bangalore Urban Living
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Navigating dynamic corporate careers, fast-growing tech ventures, and modern
              relationships with classical astronomical perspective.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">Career &amp; Tech</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                10th house analysis, Saturn transits, and job change timing for professionals in
                Bangalore's fast-paced tech and corporate sectors.
              </p>
              <Link
                to="/astrology/career/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:underline"
              >
                <span>Career Astrology Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Startups &amp; Founders
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Founding chart alignment, commercial timing, and partnership synergy evaluation for
                entrepreneurs across Bengaluru.
              </p>
              <Link
                to="/astrology/business/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:underline"
              >
                <span>Business Advisory Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Marriage &amp; Compatibility
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Ethical Kundli Milan, temperamental harmony, and 7th house study without fatalistic
                claims or superstitious fears.
              </p>
              <Link
                to="/astrology/marriage/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:underline"
              >
                <span>Compatibility Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">Birth Chart Reading</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Holistic Janam Kundli analysis evaluating rising Lagna, 12 Bhavas, and active
                Vimshottari Dasha planetary periods.
              </p>
              <Link
                to="/astrology/birth-chart/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:underline"
              >
                <span>Birth Chart Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-xl border border-amber-300 bg-gradient-to-br from-amber-500/10 via-slate-50 to-white p-6 shadow-2xs sm:col-span-2 lg:col-span-1">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-200 text-amber-900">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">
                Astro-Vastu Synergy
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Ground personal planetary Dashas in your physical space. Harmonize birth chart planets with your Bangalore property's 16 directional zones.
              </p>
              <Link
                to="/services/astro-vastu-synthesis/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:underline"
              >
                <span>Explore Astro-Vastu Synthesis</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Greater Bengaluru Coverage Zones */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              METROPOLITAN REACH
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Serving Clients Across Greater Bengaluru
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Whether you prefer visiting our Dasarahalli consulting desk or connecting through
              secure high-definition virtual consultation, we provide dedicated astrological
              guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bangaloreCoverageZones.map((zone, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-amber-200/70 bg-white p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <MapPin className="h-4 w-4" />
                    <span className="font-serif text-sm font-bold text-slate-900">
                      {zone.region}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-medium text-slate-700">{zone.localities}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{zone.description}</p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-semibold text-amber-800">
                    Online &amp; In-Person Available
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Ethics & Standards */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200/80 bg-[#FAF8F5] p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-800" />
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Ethical Consultation Commitment
              </h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
              We operate with strict professional boundaries designed to provide authentic peace of
              mind:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-xs text-slate-700 sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-800" />
                <span>
                  <strong>Zero Fear Tactics:</strong> We strictly prohibit alarmist statements about
                  calamities, curses, or unavoidable misfortunes.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-800" />
                <span>
                  <strong>No Guaranteed Predictions:</strong> We do not make false promises of
                  guaranteed financial gains, lottery success, or forced relationship outcomes.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-800" />
                <span>
                  <strong>No Superstitious Upselling:</strong> We do not prescribe costly gemstones
                  or mandatory commercial rituals.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-800" />
                <span>
                  <strong>Strict Privacy:</strong> Your date, time, and birthplace information is
                  kept completely private and never shared.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Astro-Vastu Synergy: Grounding Vedic Horoscopes in Bangalore Spaces */}
      <section className="border-b border-amber-200/80 bg-gradient-to-b from-white to-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-200/90 bg-[#FAF8F5] p-8 shadow-sm sm:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-900">
                  <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                  <span>DUAL-DISCIPLINE INTEGRATION</span>
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Grounding Your Horoscopic Energy in Bangalore Spaces
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base font-light">
                  A Janam Kundli analysis reveals <em>when</em> planetary forces influence your career, health, and finances. Vastu Shastra governs <em>where</em> you live and work. When personal transits (such as Saturn Sade Sati or Jupiter transits) activate specific life themes, balancing the corresponding directional zones of your Bengaluru home or tech office provides tangible environmental support.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base font-light">
                  Rather than viewing astrology and architectural space as separate, 7Rays synthesizes both disciplines from our registered Dasarahalli headquarters, helping Bangalore families and entrepreneurs create supportive living and working environments.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/services/astro-vastu-synthesis/"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-700 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-amber-800"
                  >
                    <span>Explore Astro-Vastu Synthesis Methodology</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/locations/bangalore/"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 transition hover:bg-slate-50"
                  >
                    <span>Visit Bangalore Vastu Master Hub</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="space-y-4 rounded-2xl border border-amber-200/80 bg-white p-6 text-xs text-slate-700 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900 uppercase tracking-wider text-amber-800">
                    How Astrological Insights Guide Vastu
                  </h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <div>
                      <strong className="font-semibold text-slate-900">Personal Directional Resonance: </strong>
                      Identifying which cardinal directions in your home directly strengthen your Lagna lord and functional benefic planets.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <div>
                      <strong className="font-semibold text-slate-900">Workstation &amp; Executive Cabin Power: </strong>
                      Positioning tech founder and management desks to activate favorable 10th-house planetary influences.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <div>
                      <strong className="font-semibold text-slate-900">On-Site &amp; Virtual Consultations: </strong>
                      Combine in-person property audits across Bengaluru with detailed horoscopic birth-chart assessments.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ Section */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              LOCAL CLIENT INQUIRIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions in Bangalore
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {localAstrologyFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-amber-200/70 bg-white transition hover:border-amber-400"
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

      {/* Signature Pre-Footer Sunset Villa CTA Banner */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.webp"
          width={1376}
          height={768}
          alt="Luxury architectural villa sunset for Bangalore Vedic astrology consultations"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: Heading & Buttons */}
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>IN-PERSON &amp; DIGITAL CHART ADVISORY • BENGALURU</span>
              </div>
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
                Gain Astronomical Clarity on <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Your Life &amp; Career Trajectory
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Schedule a deep-dive birth chart reading with Certified Vastu Consultant Rishwa Sinha. In-person at our registered Dasarahalli consulting office or via high-definition video call with interactive Kundli screen-sharing.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => openBooking('Bangalore Vedic Astrology Consultation')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Schedule Bangalore Session</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
                >
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  <span>Call {businessConfig.displayPhone || '+91 70910 21616'}</span>
                </a>
              </div>
            </div>

            {/* Right: Translucent Trust Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-amber-400/30 bg-slate-900/80 p-6 text-left backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-amber-300 uppercase">Registered Bangalore HQ</p>
                    <p className="text-sm font-semibold text-white">Dasarahalli, Bengaluru</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  Private one-on-one sessions held at Balaji Layout, Dasarahalli (560024) by prior reservation. Screen-share digital sessions available across India.
                </p>
                <div className="mt-4 border-t border-slate-800 pt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Pincode: 560024 HQ</span>
                  <span className="text-amber-400 font-medium">Google Maps Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quick Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-slate-800 pt-6 text-xs text-slate-400">
            <Link to="/locations/bangalore/" className="hover:text-amber-300">Bangalore Master Hub</Link>
            <Link to="/locations/" className="hover:text-amber-300">All Locations</Link>
            <Link to="/astrology/" className="hover:text-amber-300">Vedic Astrology</Link>
            <Link to="/consultant/rishwa-sinha/" className="hover:text-amber-300">Consultant Profile</Link>
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
