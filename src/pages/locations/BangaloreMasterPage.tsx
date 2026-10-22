import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowRight,
  Navigation,
  Building,
  Home,
  Factory,
  Compass,
  Sparkles,
  ShieldCheck,
  Layers,
  Plus,
  Minus,
  PhoneCall,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'
import { GoogleMapEmbed } from '@/components/common/GoogleMapEmbed'

export const BangaloreMasterPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const localAeoFaqs = [
    {
      question: 'Where is 7Rays Astro Vastu located in Bangalore?',
      answer:
        '7Rays Astro Vastu is physically headquartered at 3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024. Consultations at the office are conducted by prior appointment.',
    },
    {
      question: 'Does 7Rays provide on-site Vastu visits across Bangalore?',
      answer:
        'Yes. Certified Vastu Consultant Rishwa Sinha conducts physical on-site audits across all zones of Greater Bengaluru, including North Bangalore (Dasarahalli, Hebbal, Yelahanka), East Bangalore (Indiranagar, Whitefield), South Bangalore (Koramangala, HSR Layout, JP Nagar), and West Bangalore (Malleshwaram, Rajajinagar).',
    },
    {
      question: 'Do you require demolition of walls or renovation for Bangalore homes?',
      answer:
        'No. We emphasize non-demolition Vastu remedies wherever applicable. We harmonize directional imbalances using calibrated metallic floor inlays (copper, brass, zinc, lead), directional remedies, and spatial realignment without breaking structural walls or tiles.',
    },
    {
      question: 'What is the difference between your business location and your service areas?',
      answer:
        '7Rays Astro Vastu operates from a single registered consulting headquarters in Dasarahalli (560024). Locality mentions such as Whitefield, HSR Layout, or Koramangala represent our active service areas for on-site property visits, not separate branch offices.',
    },
    {
      question: 'What types of properties do you inspect in Bengaluru?',
      answer:
        'We consult on high-rise residential apartments, duplex townhouses, luxury villas, tech startup offices, corporate headquarters, retail showrooms, commercial restaurants, and manufacturing plants in industrial corridors like Peenya and Bommasandra.',
    },
    {
      question: 'How do you check Vastu for Bangalore apartments where you cannot alter entrances?',
      answer:
        'We measure exact compass degrees from the center of the apartment (Brahmasthan) using calibrated digital sensors. If an entrance opens into an inauspicious pada, we energetically neutralize the boundary using metallic threshold strips and elemental color adjustments without modifying common society corridors.',
    },
    {
      question: 'Can I combine Vastu with a Vedic astrology consultation in Bangalore?',
      answer:
        'Yes. We offer an integrated Astro-Vastu consultation that synthesizes your personal planetary Dasha cycles with the 16 directional zones of your property, ensuring your physical space directly supports your life phase.',
    },
    {
      question: 'How do I book an on-site property audit in Bangalore?',
      answer:
        'You can book through our online consultation form, select your property type (Residential, Commercial, Industrial, or Astrology), and schedule an inspection slot. On-site visits are scheduled following initial blueprint review.',
    },
  ]

  const servicePillars = [
    {
      icon: Home,
      title: 'Residential Vastu',
      url: '/locations/bangalore/residential-vastu/',
      description:
        'On-site audits for high-rise flats, villas, and independent houses across Bengaluru. Master bedroom, kitchen Agni alignment, and non-demolition remedies.',
    },
    {
      icon: Building,
      title: 'Commercial & Office Vastu',
      url: '/locations/bangalore/commercial-vastu/',
      description:
        'Layout optimization for tech startup headquarters, corporate workstations, executive cabins, and retail spaces in HSR, Koramangala, and CBD.',
    },
    {
      icon: Factory,
      title: 'Industrial & Factory Vastu',
      url: '/locations/bangalore/industrial-vastu/',
      description:
        'Heavy machinery orientation, electrical substations, raw material storage, and dispatch loading bay alignment for plants in Peenya, Bommasandra, and Bidadi.',
    },
    {
      icon: Compass,
      title: 'Scientific Vastu Energy Audit',
      url: '/locations/bangalore/vastu-audit/',
      description:
        'Diagnostic 16-zone angular grid analysis, digital compass verification, and geopathic stress detection for new and existing Bangalore properties.',
    },
    {
      icon: Sparkles,
      title: 'Vedic Astrology Consultation',
      url: '/locations/bangalore/astrology/',
      description:
        'One-on-one Janam Kundli analysis, career timing, and business advisory at our Dasarahalli consulting desk and via high-definition video calls.',
    },
  ]

  const serviceZones = [
    {
      zone: 'North Bangalore (Headquarters)',
      localities:
        'Dasarahalli (Physical Office), Hebbal, Yelahanka, Jakkur, Thanisandra, Sahakar Nagar',
      coverage:
        'Priority scheduling for in-person consultations, independent homes, and airport corridor villas.',
    },
    {
      zone: 'East Bangalore & Tech Corridor',
      localities: 'Indiranagar, Whitefield, Marathahalli, Varthur, KR Puram, CV Raman Nagar',
      coverage:
        'On-site audits for tech enterprise offices, luxury gated communities, and high-rise apartments.',
    },
    {
      zone: 'South Bangalore',
      localities: 'Koramangala, HSR Layout, JP Nagar, Jayanagar, Electronic City, Sarjapur Road',
      coverage:
        'Startup headquarters, founder residences, commercial retail, and contemporary duplex homes.',
    },
    {
      zone: 'West & Central Bangalore',
      localities: 'Malleshwaram, Rajajinagar, Sadashivanagar, Basavanagudi, MG Road, CBD',
      coverage:
        'Heritage ancestral residences, redeveloped family properties, and prime commercial complexes.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Best Vastu Consultant in Bangalore: Homes & Offices | 7Rays"
        description="Looking for a Vastu consultant in Bangalore? Explore 7Rays residential, apartment and commercial consultations, on-site Bengaluru coverage, the assessment process and non-demolition options."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations/' },
          { name: 'Bangalore', url: '/locations/bangalore/' },
        ]}
      />
      <LocalBusinessSchema
        name={siteConfig.name}
        description="Premier luxury Astro-Vastu and Vedic Astrology consultancy in Bengaluru led by Certified Vastu Consultant Rishwa Sinha."
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
        areaServed={[...siteConfig.serviceAreas]}
        latitude={businessConfig.latitude ?? undefined}
        longitude={businessConfig.longitude ?? undefined}
      />
      <FAQSchema items={localAeoFaqs} />

      {/* 1. Hero Section */}
      <section className="relative min-h-[560px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-vastu.webp"
            alt="Bangalore City skyline and modern architecture"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1200}
            height={896}
            className="h-full w-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5" />
              <span>BENGALURU LOCAL AUTHORITY HUB</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Vastu Consultant <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                in Bangalore for Homes &amp; Offices
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Trusted scientific Vastu Shastra audits and authentic Vedic astrology consultations
              led by <strong>Certified Vastu Consultant Rishwa Sinha</strong> (5+ years verified
              experience). Headquartered in Dasarahalli (560024), delivering on-site property
              inspections across Bengaluru with a strong focus on non-demolition remedies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Bangalore Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Bangalore On-Site Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
              >
                <Navigation className="h-3.5 w-3.5 text-amber-400" />
                <span>View Google Maps Listing</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Verified Business Location vs Service Area Banner */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-6 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" />
              <div className="text-xs leading-relaxed text-slate-800 sm:text-sm">
                <strong className="text-slate-900">Verified Physical Headquarters:</strong>{' '}
                3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru,
                Karnataka 560024.{' '}
                <span className="text-slate-600">
                  (Single verified location. All other named Bangalore areas represent on-site
                  inspection service territories, not branch offices.)
                </span>
              </div>
            </div>
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-amber-800 underline hover:text-amber-950"
            >
              <span>Get Directions on Google Maps</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Bangalore Services Grid */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              LOCAL SERVICE PORTFOLIO
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Bangalore Vastu Consultations for Homes, Apartments & Businesses
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Each discipline addresses the distinct physical, regulatory, and architectural
              realities of Bengaluru real estate.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md"
                >
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-200/60 pt-4">
                    <Link
                      to={service.url}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
                    >
                      <span>Explore Bangalore {service.title}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}

            {/* Astro-Vastu Synthesis Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-500/10 via-slate-50 to-white p-6 shadow-2xs">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-200 text-amber-900">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Dual-Discipline Astro-Vastu
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Synthesize personal planetary Dasha cycles with your home or workplace directional
                  zoning. Ground temporal planetary transitions in balanced physical spaces.
                </p>
              </div>
              <div className="mt-6 border-t border-amber-200 pt-4">
                <Link
                  to="/blog/astrology-vs-vastu-difference-and-synthesis"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
                >
                  <span>Read Astro-Vastu Synthesis</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bangalore Geographic Zones & Coverage */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              GREATER BENGALURU COVERAGE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              On-Site Property Inspection Zones
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              We travel directly to your residence, commercial office, or industrial plant anywhere
              across the metropolitan territory.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceZones.map((zone, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-amber-200/70 bg-white p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <MapPin className="h-4 w-4" />
                    <h3 className="font-serif text-sm font-bold text-slate-900">{zone.zone}</h3>
                  </div>
                  <p className="mt-3 text-xs font-medium text-slate-800">{zone.localities}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{zone.coverage}</p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-semibold text-emerald-700">
                    ✓ Full On-Site Coverage
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Locality Quick Links */}
          <div className="mt-10 rounded-xl border border-amber-200/70 bg-white p-6 shadow-2xs">
            <h4 className="font-serif text-xs font-bold tracking-wider text-slate-900 uppercase">
              Dedicated Locality Service Area Profiles
            </h4>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link
                to="/locations/indiranagar/"
                className="rounded-lg border border-amber-200/70 bg-[#FAF8F5] px-3 py-1.5 font-medium text-slate-700 hover:border-amber-400 hover:text-amber-800"
              >
                Indiranagar (100ft &amp; Defence Colony)
              </Link>
              <Link
                to="/locations/hsr-layout/"
                className="rounded-lg border border-amber-200/70 bg-[#FAF8F5] px-3 py-1.5 font-medium text-slate-700 hover:border-amber-400 hover:text-amber-800"
              >
                HSR Layout (Sectors 1–7)
              </Link>
              <Link
                to="/locations/koramangala/"
                className="rounded-lg border border-amber-200/70 bg-[#FAF8F5] px-3 py-1.5 font-medium text-slate-700 hover:border-amber-400 hover:text-amber-800"
              >
                Koramangala (Blocks 1–8)
              </Link>
              <Link
                to="/locations/whitefield/"
                className="rounded-lg border border-amber-200/70 bg-[#FAF8F5] px-3 py-1.5 font-medium text-slate-700 hover:border-amber-400 hover:text-amber-800"
              >
                Whitefield (ITPB &amp; Gated Villas)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-Step Consultation Workflow */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              CONSULTATION METHODOLOGY
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              How to Choose a Vastu Consultant in Bangalore
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Compare a consultant’s credentials, local visit availability, assessment scope,
              written recommendations, and whether they avoid promising guaranteed outcomes. For a
              broader checklist of what to ask before booking, read our{' '}
              <Link
                to="/blog/how-to-choose-vastu-consultation-services/"
                className="font-semibold text-amber-800 underline underline-offset-2 hover:text-amber-900"
              >
                guide to choosing Vastu consultation services
              </Link>
              .
            </p>
          </div>

          <h3 className="mt-10 text-center font-serif text-xl font-bold text-slate-900 sm:text-2xl">
            What to Expect from a 7Rays On-Site Audit
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-2xs transition hover:border-amber-400 hover:bg-white">
              <span className="font-serif text-sm font-bold text-amber-700">01</span>
              <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                Blueprint Review
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                You share your architectural floor plan or layout. We identify initial directional
                quadrants and prepare the 16-zone diagnostic grid before the visit.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-2xs transition hover:border-amber-400 hover:bg-white">
              <span className="font-serif text-sm font-bold text-amber-700">02</span>
              <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                Calibrated On-Site Audit
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Our consultant visits your property in Bangalore, measuring exact compass bearings
                from the Brahmasthan, testing geopathic stress lines, and inspecting energy flows.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-2xs transition hover:border-amber-400 hover:bg-white">
              <span className="font-serif text-sm font-bold text-amber-700">03</span>
              <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                Non-Demolition Blueprint
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Receive a customized remedial plan specifying elemental metallic strips, color
                wavelength adjustments, and spatial reorganizations—with zero demolition required.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-2xs transition hover:border-amber-400 hover:bg-white">
              <span className="font-serif text-sm font-bold text-amber-700">04</span>
              <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                Ongoing Follow-up
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Post-implementation guidance to verify correct remedy installation and address any
                architectural adjustments during interior fit-outs.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Real-World Bengaluru Consultation Walkthroughs (Whitefield & HSR Layout) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                DOCUMENTED LOCAL ASSESSMENTS
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Bengaluru Case Walkthroughs: Whitefield &amp; HSR Layout
              </h2>
              <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                Real-world spatial diagnostics conducted across Bengaluru properties. In strict adherence
                to client confidentiality and verifiable claim governance, client identities are anonymized
                and outcomes are strictly confined to verified spatial deliverables and non-demolition specifications.
              </p>
            </div>
            <Link
              to="/case-studies/"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-800 sm:mt-0"
            >
              <span>Explore All Scenarios</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Whitefield Case Study Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-amber-200/80 bg-white p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md sm:p-8">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-900">
                    Residential Assessment
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="h-3.5 w-3.5 text-amber-700" />
                    <span>Bengaluru (Whitefield)</span>
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-slate-900 sm:text-2xl">
                  High-Rise Apartment Master Bedroom &amp; Sleep Alignment
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 text-xs leading-relaxed text-slate-700">
                    <strong className="block mb-1 font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
                      Spatial Context &amp; Constraint:
                    </strong>
                    A high-rise residential apartment experiencing spatial restlessness and sleep disruption in the master suite. Fixed plumbing shafts and common structural shear walls prohibited any civil relocation or wall demolition.
                  </div>

                  <div className="rounded-xl border border-amber-200/60 bg-amber-50/40 p-4 text-xs leading-relaxed text-slate-700">
                    <strong className="block mb-1 font-semibold text-amber-900 uppercase tracking-wider text-[11px]">
                      Diagnostic &amp; Remedial Protocol:
                    </strong>
                    On-site evaluation using a calibrated digital compass, digital Gauss meter, and dowsing instruments. Specified reorienting the bed headboard toward the South quadrant, establishing an elemental boundary using zinc strips along the attached bathroom perimeter, and balancing Northwest balcony air-flow.
                  </div>

                  <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/50 p-4 text-xs leading-relaxed text-slate-700">
                    <strong className="block mb-1.5 font-semibold text-emerald-900 uppercase tracking-wider text-[11px]">
                      Verified Deliverables &amp; Outcomes:
                    </strong>
                    <ul className="space-y-1.5 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Digital compass degree documentation establishing true magnetic alignment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Electromagnetic field readings and geopathic stress scan logs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Zero-demolition furniture realignment blueprint for restful sleep orientation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Precision metallic zinc boundary inlay specifications for ensuite containment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                  Energy Grid Correction
                </span>
                <Link
                  to="/case-studies/whitefield-apartment-health-harmony/"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read Full Whitefield Walkthrough</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* HSR Layout Case Study Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-amber-200/80 bg-white p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md sm:p-8">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-900">
                    Commercial Assessment
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="h-3.5 w-3.5 text-amber-700" />
                    <span>Bengaluru (HSR Layout)</span>
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-slate-900 sm:text-2xl">
                  Fintech Scale-Up Hub in HSR Layout
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 text-xs leading-relaxed text-slate-700">
                    <strong className="block mb-1 font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
                      Spatial Context &amp; Constraint:
                    </strong>
                    A fast-scaling fintech enterprise occupying an open-plan leased facility. High workstation density, glass meeting rooms, and team expansion required structured spatial zoning with strict prohibition of civil demolition under lease terms.
                  </div>

                  <div className="rounded-xl border border-amber-200/60 bg-amber-50/40 p-4 text-xs leading-relaxed text-slate-700">
                    <strong className="block mb-1 font-semibold text-amber-900 uppercase tracking-wider text-[11px]">
                      Diagnostic &amp; Remedial Protocol:
                    </strong>
                    16-zone directional analysis mapped executive workstations to the Southwest quadrant for strategic stability, placed finance operations in the North Kuber sector, and applied non-demolition brass threshold transition strips at entrance vectors.
                  </div>

                  <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/50 p-4 text-xs leading-relaxed text-slate-700">
                    <strong className="block mb-1.5 font-semibold text-emerald-900 uppercase tracking-wider text-[11px]">
                      Verified Deliverables &amp; Outcomes:
                    </strong>
                    <ul className="space-y-1.5 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Open-plan seating distribution matrix aligned with 16 elemental Vastu zones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Leadership cabin alignment blueprint for executive focus and strategic decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Non-destructive threshold correction specifications utilizing precision brass floor inlays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Scalable floor plate roadmap for phased hiring without disrupting directional balance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                  Non-demolition Vastu
                </span>
                <Link
                  to="/case-studies/fintech-startup-growth-hsr-layout/"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read Full HSR Layout Walkthrough</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Local AEO FAQ Accordion */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-18 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              BENGALURU CLIENT INQUIRIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions: Bangalore Hub
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Direct, factual answers regarding our verified Bangalore location, consultation
              process, and non-demolition remedies.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {localAeoFaqs.map((faq, idx) => (
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

      {/* 6B. Verified Headquarters Map Section */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              PHYSICAL HEADQUARTERS &amp; DIRECTIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Locate 7Rays Astro Vastu in Bengaluru
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Our registered consultation office is located in Dasarahalli, Bengaluru. We conduct
              both on-site spatial audits across Bengaluru neighborhoods and in-person consultations
              by prior appointment.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
              {/* Left: Office Signboard & Premises Representation */}
              <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/evidence/7rays-bangalore-office-signboard.webp"
            width={1024}
            height={682}
                    alt="Conceptual representation of 7Rays Vastu Consultant office signage at Dasarahalli, Bengaluru"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-xs">
                    Office Premises
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-slate-900">
                      7Rays Vastu Consultant Desk
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli,
                      Bengaluru 560024
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-500">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>Registered Location · Google Maps Verified</span>
                  </div>
                </div>
              </div>

              {/* Right: Interactive Google Map */}
              <div className="lg:col-span-7">
                <GoogleMapEmbed
                  height={380}
                  title="7Rays Vastu Consultant Bangalore — Google Maps Location"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Signature Pre-Footer Sunset Villa CTA Banner */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.webp"
          width={1376}
          height={768}
          alt="Luxury architectural villa sunset for Bangalore Vastu inspections"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: Heading & Buttons */}
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>BENGALURU HEADQUARTERS • ON-SITE VISITS</span>
              </div>
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
                Schedule Your Bangalore <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Property Inspection
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Connect directly with Certified Vastu Consultant Rishwa Sinha for on-site residential, commercial, and industrial property audits across Bengaluru.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => openBooking('Bangalore Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Bangalore Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
                >
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>Locate on Google Maps</span>
                </a>
                <a
                  href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
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
                    <p className="text-xs font-bold tracking-wider text-amber-300 uppercase">Single Registered HQ</p>
                    <p className="text-sm font-semibold text-white">Dasarahalli, Bengaluru</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  Physical on-site audits conducted throughout Bengaluru. Comprehensive 16-zone blueprint report provided following the audit.
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
            <Link to="/locations/" className="hover:text-amber-300">All Locations</Link>
            <Link to="/services/online-vastu-consultation/" className="hover:text-amber-300">Online Vastu Consultation</Link>
            <Link to="/consultant/rishwa-sinha/" className="hover:text-amber-300">Consultant Profile</Link>
            <Link to="/case-studies/" className="hover:text-amber-300">Illustrative Case Studies</Link>
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
