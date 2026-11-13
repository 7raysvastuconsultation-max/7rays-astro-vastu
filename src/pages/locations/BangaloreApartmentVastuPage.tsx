import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowRight,
  Plus,
  Minus,
  Building,
  CheckCircle2,
  AlertTriangle,
  Compass,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BangaloreApartmentVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore/apartment-vastu/`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Apartment Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const localApartmentFaqs = [
    {
      question: 'How does an apartment Vastu audit in Bangalore differ from an independent house audit?',
      answer:
        'In high-rise apartment complexes, structural elements like shear walls, fixed plumbing shafts, pre-cast utility ducts, and shared lift cores cannot be modified. We evaluate your flat using a 16-zone CAD compass overlay aligned to true magnetic North, addressing interior room usage, bed orientation, modular kitchen fire-water placement, and metal inlays without requiring any civil structural changes.',
    },
    {
      question: 'Do you offer pre-purchase or pre-registration Vastu audits for Bangalore flats?',
      answer:
        'Yes. Pre-purchase flat evaluation is one of our most requested services. Before signing builder agreements or taking handover across prominent high-rise developments in Bangalore (such as in Whitefield, Sarjapur Road, Bellandur, and Hebbal), we inspect floor plates and site orientation to verify entrance padas, master bedroom stability, and kitchen fire zones.',
    },
    {
      question: 'Are your Vastu remedies compliant with Bangalore apartment society (RWA) bylaws?',
      answer:
        'Yes. Non-demolition remedies are designed to align with standard apartment society (RWA) bylaws because they avoid structural drilling, wall demolition, and facade alterations. We implement calibrated metallic boundary strips (copper, brass, zinc, lead) and elemental balancing methods placed flush with door frames or floor joints, leaving RCC beams and common plumbing lines untouched.',
    },
    {
      question: 'Do you conduct on-site visits across all apartment corridors in Bengaluru?',
      answer:
        'Yes. While our primary registered office is in Dasarahalli (PIN 560024), we conduct scheduled on-site property audits across all major apartment clusters in Whitefield, Sarjapur Road, Bellandur, Electronic City, Hebbal, Kanakapura Road, Thanisandra, and Bannerghatta Road.',
    },
    {
      question: 'Can you correct directional issues if our apartment entrance faces South or West?',
      answer:
        'Yes. Classical Vastu Shastra identifies specific auspicious padas (entrance vectors) along every cardinal direction, including South and West. If your builder unit entrance falls on an inauspicious pada, we harmonize the energetic threshold using metal divider strips and elemental balancing rather than relocating the main door.',
    },
  ]

  const apartmentChallenges = [
    {
      title: 'Fixed Builder Shear Walls & Lift Cores',
      challenge:
        'Modern RCC shear-wall construction makes wall demolition structurally hazardous and legally prohibited by apartment bylaws.',
      solution:
        'Elemental zoning and micro-metallic boundary inlays that re-calibrate room energy without breaking reinforced concrete.',
    },
    {
      title: 'Pre-Cast Plumbing & Kitchen Ducts',
      challenge:
        'Toilets situated in sensitive North-East (Ishanya) or South-East (Agni) zones due to vertical developer pipe stacking.',
      solution:
        'Neutralizing water-fire clashing zones using non-invasive elemental frequency tapes and boundary isolation strips.',
    },
    {
      title: 'Angled Tower Orientation vs True North',
      challenge:
        'Many Bengaluru residential high-rises are angled 15° to 35° away from cardinal North to maximize road frontage or daylight.',
      solution:
        'Precision 16-zone CAD grid overlay calculated with calibrated digital compass measurements to map true magnetic axes for your specific floor.',
    },
  ]

  const apartmentHubs = [
    {
      name: 'East Bangalore High-Rise Corridor',
      localities: 'Whitefield, Varthur, Marathahalli, ITPL Road, KR Puram',
      focus: 'Multi-tower gated societies, IT professional residences, and pre-purchase flat audits.',
    },
    {
      name: 'South-East Tech & Outer Ring Road',
      localities: 'Bellandur, Sarjapur Road, HSR Layout, Kasavanahalli, Haralur',
      focus: 'High-density apartment complexes, duplex penthouses, and rental flat harmonization.',
    },
    {
      name: 'North Bangalore Airport Corridor',
      localities: 'Hebbal, Thanisandra, Jakkur, Yelahanka, Sahakar Nagar',
      focus: 'Luxury high-rise residential towers, panoramic lakefront flats, and new builder launches.',
    },
    {
      name: 'South & West Bangalore Established Belts',
      localities: 'Koramangala, Jayanagar, JP Nagar, Kanakapura Road, Electronic City',
      focus: 'Premium residential apartments, redevelopment projects, and modular kitchen alignments.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Apartment Vastu Consultant in Bangalore | Flat Audits | 7Rays"
        description="Certified Apartment Vastu consultation in Bangalore for high-rise flats, gated towers, and penthouses by Rishwa Sinha. 16-zone CAD audit and non-demolition cures."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations/' },
          { name: 'Bangalore Hub', url: '/locations/bangalore/' },
          { name: 'Apartment Vastu Bangalore', url: '/locations/bangalore/apartment-vastu/' },
        ]}
      />
      <LocalBusinessSchema
        name={`${businessConfig.businessName} - Bangalore Apartment Vastu Desk`}
        description="On-site apartment, flat, and penthouse Vastu consultation services across Bengaluru."
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
      />
      <ServiceSchema
        name="Bangalore Apartment Vastu Consultation"
        description="On-site Vastu audits for high-rise apartments, flats, and penthouses in Bangalore."
        serviceType="Apartment Vastu Consulting"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={localApartmentFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/apartment-vastu.webp"
            alt="Modern luxury Bangalore high-rise apartment living room with panoramic view"
            width={1376}
            height={768}
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
              Apartment Vastu
            </span>
          </nav>

          <div className="max-w-3xl py-4 sm:py-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Building className="h-3.5 w-3.5" />
              <span>BENGALURU HIGH-RISE &amp; FLAT SPECIALIZATION</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Apartment Vastu Consultant <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                in Bangalore
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Specialized scientific Vastu assessments for modern flats, penthouses, and gated high-rise
              communities across Bengaluru. 16-zone CAD orientation and 100% non-demolition remedies compliant
              with apartment society bylaws.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Bangalore Apartment Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Apartment Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                to="/locations/bangalore/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/60 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:border-amber-400/50 hover:bg-slate-900/80"
              >
                <span>Bangalore Authority Hub</span>
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                Zero-Demolition Methods
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="h-4 w-4 text-amber-400" />
                16-Zone CAD Analysis
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-400" />
                Bengaluru On-Site Visits
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AEO / GEO Definition & Comparison Section */}
      <section className="border-b border-slate-200 bg-white py-12 text-slate-900 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Direct Answer Definition Callout */}
          <div className="rounded-2xl border-l-4 border-amber-600 bg-amber-50/70 p-6 sm:p-8">
            <span className="text-xs font-bold tracking-widest text-amber-800 uppercase">
              QUICK DEFINITION • ANSWER ENGINE SUMMARY
            </span>
            <h2 className="mt-2 font-serif text-xl font-bold text-slate-900 sm:text-2xl">
              What is High-Rise Apartment Vastu?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              High-rise apartment Vastu is the specialized application of classical 16-zone directional principles to multi-storey residential units where structural elements (such as shear walls, plumbing ducts, and tower orientation) are fixed. Rather than relocating walls or doors, energy balancing is achieved through true magnetic North CAD alignment, functional room zoning, and non-invasive elemental remedies that comply with apartment association bylaws.
            </p>
          </div>

          {/* Comparative Analysis Table */}
          <div className="mt-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                COMPARATIVE AUDIT FRAMEWORK
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Independent House vs. High-Rise Apartment Vastu in Bengaluru
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                How spatial constraints shape remedial approaches for flats compared to plotted residences:
              </p>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full min-w-[640px] text-left text-xs sm:text-sm">
                <thead className="border-b border-slate-200 bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-4 font-serif font-bold">Vastu Factor</th>
                    <th className="p-4 font-medium text-slate-700">Independent Villa / House</th>
                    <th className="p-4 font-medium text-slate-700">High-Rise Apartment Flat</th>
                    <th className="p-4 font-bold text-amber-900">7Rays Apartment Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Structural Walls</td>
                    <td className="p-4">Walls and room partitions can be modified</td>
                    <td className="p-4">RCC shear walls cannot be altered or broken</td>
                    <td className="p-4 font-medium text-amber-950">Non-demolition elemental boundary balancing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Tower Orientation</td>
                    <td className="p-4">Aligned directly with plot boundaries</td>
                    <td className="p-4">Towers often angled 15°–35° off cardinal North</td>
                    <td className="p-4 font-medium text-amber-950">16-zone CAD grid mapped to true magnetic North</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Plumbing &amp; Ducts</td>
                    <td className="p-4">Septic tanks and drains can be relocated</td>
                    <td className="p-4">Fixed vertical shafts shared with entire tower</td>
                    <td className="p-4 font-medium text-amber-950">Elemental boundary balancing and threshold strips</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Main Entrance</td>
                    <td className="p-4">Compound gate and door can be shifted</td>
                    <td className="p-4">Fixed door location along shared corridor</td>
                    <td className="p-4 font-medium text-amber-950">Threshold pada balancing using metal divider inlays</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Society Bylaws (RWA)</td>
                    <td className="p-4">Owner has full civil modification freedom</td>
                    <td className="p-4">Strict rules against exterior or structural changes</td>
                    <td className="p-4 font-medium text-amber-950">Surface-aligned, non-invasive cures</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Challenges in Bangalore Apartments */}
      <section className="border-b border-slate-200 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              HIGH-RISE REAL ESTATE REALITIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Overcoming High-Rise Architectural Limitations in Bengaluru
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base font-light">
              Unlike plotted homes where ground slope and external walls can be modified, Bangalore apartments
              feature standardized structural frames, fixed builder utility lines, and strict RWA guidelines.
              Our methodology harmonizes energy without altering RCC civil structures.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {apartmentChallenges.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-amber-200/80 bg-white p-6 shadow-2xs transition hover:border-amber-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-900">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base font-bold text-slate-900">{item.title}</h3>
                  </div>

                  <div className="mt-4 rounded-xl border border-amber-100 bg-[#FAF8F5] p-3.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900">
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                      <span>Developer Constraint</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.challenge}</p>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                      <span>7Rays Non-Demolition Solution</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-700 sm:text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Link Banner to Pre-Purchase Checklist */}
          <div className="mt-10 rounded-2xl border border-amber-200 bg-white p-6 shadow-2xs sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                  HOMEBUYER RESOURCE
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900 sm:text-xl">
                  Evaluating a Flat Before Handover or Agreement?
                </h3>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Review our actionable pre-purchase checklist covering entrance padas, kitchen fire-water placement, and room orientations.
                </p>
              </div>
              <Link
                to="/blog/bangalore-apartment-vastu-checklist-before-buying/"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
              >
                <span>Read Pre-Purchase Checklist</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Clusters Covered in Bangalore */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              BENGALURU RESIDENTIAL HUBS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              On-Site Apartment Vastu Coverage Across Bangalore
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We conduct on-site physical audits across all major apartment corridors in Bengaluru:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {apartmentHubs.map((hub, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-5 shadow-2xs transition hover:border-amber-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-amber-800">
                  <MapPin className="h-4 w-4 shrink-0 text-amber-700" />
                  <h3 className="font-serif text-base font-bold text-slate-900">{hub.name}</h3>
                </div>
                <p className="mt-2 text-xs font-medium text-amber-900/80">{hub.localities}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{hub.focus}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
            <span>
              Looking for standalone villa or plotted land audits? Visit our{' '}
              <Link to="/locations/bangalore/residential-vastu/" className="font-bold text-amber-800 underline hover:text-amber-950">
                Bangalore Residential Vastu Page
              </Link>
              .
            </span>
            <span>
              Need a full property energy diagnostic? See{' '}
              <Link to="/locations/bangalore/vastu-audit/" className="font-bold text-amber-800 underline hover:text-amber-950">
                Scientific Vastu Audit
              </Link>
              .
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="border-b border-slate-200 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Bangalore Apartment Vastu FAQs
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Answers to common queries regarding high-rise audits, builder floor plans, and society guidelines.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {localApartmentFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-amber-200/80 bg-white p-5 shadow-2xs transition hover:border-amber-300"
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
          alt="Luxury architectural apartment terrace sunset for Bangalore flat consultations"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>ON-SITE BENGALURU FLAT VISIT</span>
              </div>
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
                Ready to Harmonize Your <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Bangalore Apartment or Penthouse?
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Connect directly with Certified Vastu Consultant Rishwa Sinha for on-site apartment audits and non-demolition cures across Bengaluru.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => openBooking('Bangalore Apartment Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Schedule Apartment Audit</span>
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

export default BangaloreApartmentVastuPage
