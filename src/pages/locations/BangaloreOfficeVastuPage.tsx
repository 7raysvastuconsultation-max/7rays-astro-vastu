import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowRight,
  Plus,
  Minus,
  Briefcase,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Building2,
  Users,
  Cpu,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BangaloreOfficeVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore/office-vastu/`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Office Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const localOfficeFaqs = [
    {
      question: 'Where should startup founders and managing directors sit according to office Vastu?',
      answer:
        'In corporate and startup office layouts, the Nairutya (South-West) directional zone governs strategic authority, decision-making stability, and financial retention. Founder and CXO cabins should face East or North with a solid wall behind their seating, while avoiding direct alignment with bathroom doors or structural beams.',
    },
    {
      question: 'How do you optimize rented commercial tech park spaces without violating landlord lease terms?',
      answer:
        'Most tech offices in Bangalore operate on commercial leases in business parks across Outer Ring Road, Whitefield, and Electronic City where structural alterations are prohibited. We calibrate energy grids using flush metallic divider strips (brass, copper, zinc) laid beneath modular carpet tiles or thresholds, strategic elemental desk zoning, and workplace harmonization with zero structural demolition.',
    },
    {
      question: 'What is the ideal Vastu orientation for server rooms and IT infrastructure in Bangalore offices?',
      answer:
        'Server racks, UPS battery banks, and high-voltage IT networking equipment represent high thermal and electrical energy and belong in the Agni (South-East) zone. Locating heavy server racks in the North-East (Ishanya) water zone can introduce directional conflict and thermal disharmony within the water quadrant.',
    },
    {
      question: 'Do you conduct on-site office inspections across all Bangalore tech corridors?',
      answer:
        'Yes. While our headquarters is situated in Dasarahalli (PIN 560024), we conduct scheduled on-site commercial audits across all major business districts, including HSR Layout, Koramangala, Outer Ring Road, Whitefield IT parks, Electronic City, and CBD (MG Road, Lavelle Road).',
    },
  ]

  const workplaceZones = [
    {
      title: 'Founder & Executive Cabins',
      direction: 'South-West (Nairutya Zone)',
      description:
        'Positioning leadership seating in the earth quadrant anchors executive decision-making stability, command authority, and sustained leadership focus.',
      icon: Briefcase,
    },
    {
      title: 'Engineering & Developer Bullpen',
      direction: 'North & East (Kuber & Indra Zones)',
      description:
        'Open-plan software developer desks facing North or East foster cognitive clarity, logical precision, and sustained coding productivity.',
      icon: Users,
    },
    {
      title: 'Sales & Business Development',
      direction: 'North-West (Vayu Zone)',
      description:
        'The air element zone supports movement, client negotiation speed, swift proposal sign-offs, and dynamic pipeline momentum.',
      icon: Sparkles,
    },
    {
      title: 'Server Rooms & IT Infrastructure',
      direction: 'South-East (Agni Zone)',
      description:
        'Aligning high-heat electrical racks, UPS systems, and core data hardware with the fire quadrant ensures uptime and hardware longevity.',
      icon: Cpu,
    },
  ]

  const techCorridors = [
    {
      corridor: 'HSR Layout & Koramangala',
      role: 'Startup Seed & Scale-up Corridor',
      description: 'VC-funded startup offices, co-working floors, and founder incubator suites.',
    },
    {
      corridor: 'Outer Ring Road (Bellandur to Mahadevapura)',
      role: 'Global Tech Campuses & GCCs',
      description: 'Multi-floor enterprise campuses, software development centers, and banking tech hubs.',
    },
    {
      corridor: 'Whitefield & ITPL',
      role: 'Enterprise Software & R&D Hubs',
      description: 'Dedicated tech park office towers, global hardware R&D centers, and engineering suites.',
    },
    {
      corridor: 'Electronic City & CBD',
      role: 'Established Corporate Headquarters',
      description: 'Traditional enterprise headquarters, legal firms, financial services, and commercial trading desks.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Office Vastu Consultant in Bangalore | Startup & Tech Workspaces | 7Rays"
        description="Scientific Office Vastu consultancy in Bangalore for tech startups, corporate headquarters, and IT park offices by Rishwa Sinha. Leadership cabin & team zoning."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations/' },
          { name: 'Bangalore Hub', url: '/locations/bangalore/' },
          { name: 'Office Vastu Bangalore', url: '/locations/bangalore/office-vastu/' },
        ]}
      />
      <LocalBusinessSchema
        name={`${businessConfig.businessName} - Bangalore Office Vastu Desk`}
        description="On-site office, startup workspace, and corporate Vastu consultation across Bengaluru."
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
      />
      <ServiceSchema
        name="Bangalore Office Vastu Consultation"
        description="On-site Vastu audits for tech offices, corporate workspaces, and startup cabins in Bangalore."
        serviceType="Commercial Office Vastu Consulting"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={localOfficeFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-boardroom-hero.webp"
            alt="Modern Bangalore corporate executive boardroom with city view"
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
              Office Vastu
            </span>
          </nav>

          <div className="max-w-3xl py-4 sm:py-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Briefcase className="h-3.5 w-3.5" />
              <span>BENGALURU TECH WORKPLACE ARCHITECTURE</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Office Vastu Consultant <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                in Bangalore
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Strategic workplace energy alignment for tech startups, corporate headquarters, and IT park offices
              across Bengaluru. Executive cabin positioning, team productivity grids, and lease-friendly non-demolition
              balancing led by Certified Vastu Consultant Rishwa Sinha.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Bangalore Office Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Office Inspection</span>
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
                Lease-Friendly Balancing
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-amber-400" />
                Startups &amp; Enterprise Campuses
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-400" />
                All Tech Corridors Covered
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
              What is Commercial Office Vastu?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Commercial Office Vastu is the strategic spatial calibration of workplace layouts to support executive leadership, team productivity, and operational stability. It maps functional workplace zones—such as leadership cabins in the South-West, developer workstations facing North or East, and IT infrastructure in the South-East—using non-demolition methods that respect commercial lease covenants.
            </p>
          </div>

          {/* Comparative Analysis Table */}
          <div className="mt-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                WORKPLACE COMPARATIVE FRAMEWORK
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Traditional Commercial Vastu vs. Modern Tech Workplace Vastu
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                How modern tech campuses and startup incubators in Bengaluru apply directional zoning:
              </p>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full min-w-[640px] text-left text-xs sm:text-sm">
                <thead className="border-b border-slate-200 bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-4 font-serif font-bold">Workplace Element</th>
                    <th className="p-4 font-medium text-slate-700">Traditional Commercial Vastu</th>
                    <th className="p-4 font-medium text-slate-700">Modern Tech Office Reality</th>
                    <th className="p-4 font-bold text-amber-900">7Rays Workplace Alignment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Leadership Seating</td>
                    <td className="p-4">Fixed enclosed cabin in South-West</td>
                    <td className="p-4">Open founder desks or agile huddle pods</td>
                    <td className="p-4 font-medium text-amber-950">Nairutya leadership anchor zone with solid backing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Engineering Bullpen</td>
                    <td className="p-4">Isolated private cubicles</td>
                    <td className="p-4">Open bench seating and hot-desking rows</td>
                    <td className="p-4 font-medium text-amber-950">North &amp; East facing orientations for focus and flow</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Server &amp; Network Racks</td>
                    <td className="p-4">Small utility meter box in South-East</td>
                    <td className="p-4">High-voltage server rooms and UPS battery banks</td>
                    <td className="p-4 font-medium text-amber-950">Agni fire quadrant placement with thermal balancing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Commercial Leases</td>
                    <td className="p-4">Owner-operated standalone property</td>
                    <td className="p-4">Strict IT park or builder lease agreements</td>
                    <td className="p-4 font-medium text-amber-950">Flush metallic divider strips under carpet tiles</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Deal &amp; Sales Rooms</td>
                    <td className="p-4">Formal reception room</td>
                    <td className="p-4">Glass conference pods and demo lounges</td>
                    <td className="p-4 font-medium text-amber-950">North-West (Vayu) positioning for dynamic pipeline velocity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Workplace Zoning Grid */}
      <section className="border-b border-slate-200 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              WORKPLACE ERGONOMICS &amp; ENERGY FLOW
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              16-Zone Spatial Calibration for Bangalore Workspaces
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base font-light">
              High-growth tech companies require balanced energetic sectors to sustain leadership stability,
              retain key talent, accelerate deal velocity, and safeguard core infrastructure.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workplaceZones.map((zone, idx) => {
              const Icon = zone.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-amber-200/80 bg-white p-6 shadow-2xs transition hover:border-amber-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-bold text-slate-900">{zone.title}</h3>
                    <span className="mt-1 inline-block text-xs font-semibold text-amber-800">
                      {zone.direction}
                    </span>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{zone.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contextual Link to Office Cabin Guide */}
          <div className="mt-10 rounded-2xl border border-amber-200 bg-white p-6 shadow-2xs sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                  LEADERSHIP RESOURCE
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900 sm:text-xl">
                  Planning Your Executive Cabin or Desk Placement?
                </h3>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Read our in-depth guide on executive cabin orientations, desk facing rules, and board table positioning.
                </p>
              </div>
              <Link
                to="/blog/office-layout-executive-cabin-vastu/"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
              >
                <span>Read Executive Cabin Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Corridors Covered */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              BENGALURU BUSINESS DISTRICTS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              On-Site Office Audits Across Bangalore Tech Belts
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We conduct on-site workplace inspections across all tech parks and commercial clusters:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techCorridors.map((c, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-5 shadow-2xs transition hover:border-amber-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-amber-800">
                  <MapPin className="h-4 w-4 shrink-0 text-amber-700" />
                  <h3 className="font-serif text-base font-bold text-slate-900">{c.corridor}</h3>
                </div>
                <p className="mt-2 text-xs font-semibold text-amber-900">{c.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{c.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
            <span>
              Operating a retail showroom, clinic, or hospitality venue? Explore our{' '}
              <Link to="/locations/bangalore/commercial-vastu/" className="font-bold text-amber-800 underline hover:text-amber-950">
                Bangalore Commercial Vastu Page
              </Link>
              .
            </span>
            <span>
              Review our real-world startup case study in{' '}
              <Link to="/case-studies/fintech-startup-growth-hsr-layout/" className="font-bold text-amber-800 underline hover:text-amber-950">
                HSR Layout Fintech Assessment
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
              Bangalore Office Vastu FAQs
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Answers to common queries regarding executive cabins, tech park leases, and developer bullpens.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {localOfficeFaqs.map((faq, idx) => {
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
          alt="Luxury architectural terrace sunset for Bangalore commercial office consultations"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>ON-SITE BENGALURU WORKSPACE VISIT</span>
              </div>
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
                Ready to Optimize Your <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Bangalore Office or Startup Space?
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Connect directly with Certified Vastu Consultant Rishwa Sinha for on-site workplace audits, cabin alignments, and non-disruptive balancing across Bengaluru.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => openBooking('Bangalore Office Vastu Consultation')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Schedule Office Audit</span>
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

export default BangaloreOfficeVastuPage
