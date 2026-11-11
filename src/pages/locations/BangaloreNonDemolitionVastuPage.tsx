import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowRight,
  Plus,
  Minus,
  Compass,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Layers,
  Ban,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BangaloreNonDemolitionVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore/non-demolition-vastu/`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Non-Demolition Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const localNonDemolitionFaqs = [
    {
      question: 'How do non-demolition Vastu remedies work without breaking walls or tiles in Bangalore homes?',
      answer:
        'Vastu Shastra operates on subtle energetic and magnetic frequencies (Pancha Tattva). By utilizing calibrated elemental metals (copper for Agni/South-East, brass for Nairutya/South-West, zinc for Vayu/North-West, lead for extreme earth grounding), boundary separation strips, mineral resonance, and directional mirrors, we neutralize spatial defects without chiseling marble, cutting tiles, or damaging walls.',
    },
    {
      question: 'Are non-demolition remedies permitted in rented apartments and leased offices?',
      answer:
        'Yes. Standard Bangalore tenancy agreements and commercial fit-out rules strictly forbid structural alterations. Our non-demolition techniques are surface-applied, removable, and 100% compliant with landlord lease covenants and apartment society (RWA) bylaws.',
    },
    {
      question: 'Can you remedy an incorrectly placed toilet or kitchen without civil reconstruction?',
      answer:
        'Yes. Toilets situated in the North-East (Ishanya) or modular kitchens with stove-sink clashes are among the most common defects in Bengaluru high-rises. We install calibrated elemental boundary inlays and micro-frequency insulators around the affected fixtures to sever the negative energetic spillover without plumbing changes.',
    },
    {
      question: 'How do you conduct an on-site non-demolition inspection in Bangalore?',
      answer:
        'Our consultant visits your property with calibrated diagnostic instruments, including a digital compass and electromagnetic scanning tools. We map the 16 spatial zones, inspect subtle energy lines, and provide an exact blueprint detailing where to install metallic strips, elemental colors, or mineral balances.',
    },
  ]

  const remedialMethods = [
    {
      title: 'Calibrated Metallic Inlays',
      material: 'Copper, Brass, Zinc, Lead & Silver Strips',
      description:
        'Installed flush with floor joints or under thresholds to establish energetic barriers that contain or reflect directional imbalances.',
      icon: Layers,
    },
    {
      title: 'Elemental Color & Light Therapy',
      material: 'Pancha Tattva Chromatic Tuning',
      description:
        'Calibrated color frequencies and targeted spectrum illumination that neutralize clashing elements (e.g. fire-water conflicts in kitchens).',
      icon: Sparkles,
    },
    {
      title: 'Geopathic & Subterranean Shielding',
      material: 'Natural Mineral & Crystal Grids',
      description:
        'Neutralizing underground water veins, earth stress faults, and electrical EMF nodes affecting master bedroom sleep stability.',
      icon: Compass,
    },
    {
      title: 'Directional Threshold Balancing',
      material: 'Threshold Energy Calibrators',
      description:
        'Rectifying inauspicious entrance padas along South or West facing doors without structural door frame relocation.',
      icon: ShieldCheck,
    },
  ]

  return (
    <>
      <SEOHead
        title="Vastu Remedies Without Demolition in Bangalore | 7Rays"
        description="Non-demolition Vastu consultation in Bangalore for apartments, leased offices, and furnished homes by Rishwa Sinha. Calibrated metal inlays and zero civil damage."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations/' },
          { name: 'Bangalore Hub', url: '/locations/bangalore/' },
          { name: 'Non-Demolition Vastu Bangalore', url: '/locations/bangalore/non-demolition-vastu/' },
        ]}
      />
      <LocalBusinessSchema
        name={`${businessConfig.businessName} - Bangalore Non-Demolition Vastu Desk`}
        description="Zero-demolition Vastu remedial consultations for residences and workplaces across Bengaluru."
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
      />
      <ServiceSchema
        name="Bangalore Non-Demolition Vastu Consultation"
        description="On-site non-demolition Vastu remedial audits for homes, flats, and offices in Bangalore."
        serviceType="Non-Demolition Vastu Consulting"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={localNonDemolitionFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-vastu.webp"
            alt="Harmonious luxury Bengaluru home interior with zero structural demolition"
            width={1200}
            height={896}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Non-Demolition Vastu
            </span>
          </nav>

          <div className="max-w-3xl py-4 sm:py-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Ban className="h-3.5 w-3.5 text-amber-400" />
              <span>100% NON-INVASIVE SCIENTIFIC CURES</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Vastu Remedies Without Demolition <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                in Bangalore
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Harmonize directional defects in finished flats, leased corporate offices, and furnished homes across
              Bengaluru without breaking structural walls, tiles, or plumbing lines. Calibrated metal inlays and subtle
              elemental cures by Certified Vastu Consultant Rishwa Sinha.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Bangalore Non-Demolition Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Non-Demolition Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                to="/locations/bangalore/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/60 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:border-amber-400/50 hover:bg-slate-900/80"
              >
                <span>Bangalore Master Hub</span>
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                Zero Structural Damage
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-amber-400" />
                Calibrated Metal Inlays
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-400" />
                Bengaluru On-Site Visits
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Remedial Methodology Grid */}
      <section className="border-b border-slate-200 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              THE ZERO-DEMOLITION METHODOLOGY
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Scientific Elemental Cures for Occupied Bangalore Properties
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base font-light">
              Demolishing walls or relocating plumbing is expensive, disruptive, and often structurally impossible.
              Our non-demolition methods neutralize directional anomalies at the vibrational frequency level.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {remedialMethods.map((m, idx) => {
              const Icon = m.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-amber-200/80 bg-white p-6 shadow-2xs transition hover:border-amber-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-bold text-slate-900">{m.title}</h3>
                    <span className="mt-1 inline-block text-xs font-semibold text-amber-800">
                      {m.material}
                    </span>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{m.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contextual Link to Non-Demolition In-Depth Guide */}
          <div className="mt-10 rounded-2xl border border-amber-200 bg-white p-6 shadow-2xs sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                  IN-DEPTH READING
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900 sm:text-xl">
                  Curious About How Elemental Metal Inlays Work?
                </h3>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Explore our detailed article explaining metallic boundary lines, bathroom isolation, and kitchen fire-water cures.
                </p>
              </div>
              <Link
                to="/blog/vastu-remedies-without-demolition-modern-apartments/"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
              >
                <span>Read Non-Demolition Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Non-Demolition Vastu FAQs in Bangalore
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Answers to common queries about metal strips, rented properties, and bathroom remedies.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {localNonDemolitionFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-amber-200/80 bg-[#FAF8F5] p-5 shadow-2xs transition hover:border-amber-300 hover:bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-serif text-base font-bold text-slate-900"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pre-Footer Sunset Villa CTA Banner */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.webp"
          width={1376}
          height={768}
          loading="lazy"
          decoding="async"
          alt="Luxury architectural terrace sunset for Bangalore non-demolition consultations"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>ON-SITE BENGALURU VISIT • ZERO CIVIL ALTERATION</span>
              </div>
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
                Ready to Correct Your Space <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Without Breaking a Single Wall?
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Connect directly with Certified Vastu Consultant Rishwa Sinha for on-site non-demolition cures across Bengaluru apartments, leased offices, and furnished homes.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => openBooking('Bangalore Non-Demolition Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Schedule Non-Demolition Audit</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-amber-400/50 hover:bg-slate-900/80"
                >
                  <span>Contact Our Office</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  )
}

export default BangaloreNonDemolitionVastuPage
