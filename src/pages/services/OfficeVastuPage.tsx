import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  MapPin,
  Building,
  CheckCircle2,
  Users,
  Briefcase,
  Layers,
  Laptop,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const OfficeVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/vastu/office-vastu`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Office Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const officeFaqs = [
    {
      question: 'Which direction is best for the CEO or Managing Director cabin?',
      answer:
        'The South-West (Nairutya) quadrant is universally recommended for the chief executive, founder, or managing director. Representing the Earth element, it provides psychological grounding, stability, and command authority. The executive should sit facing North or East with a solid wall behind their back.',
    },
    {
      question: 'Can Vastu corrections be made in an already furnished or leased office?',
      answer:
        'Yes. In commercial office spaces where tenant agreements prohibit structural alterations, non-demolition methods are applied. These include strategic task chair realignment, desktop orientation adjustments, and authentic metallic boundary inlay materials (copper, brass, zinc) to address directional imbalances.',
    },
    {
      question: 'Where should the finance and accounting team be seated?',
      answer:
        'The finance department, cashier desk, and accounting workstations should be located in the North (Kuber zone) or North-North-East. The accounts manager should face North or East while processing transactions to encourage liquidity and financial order.',
    },
    {
      question: 'What information do I need to provide for an office Vastu audit?',
      answer:
        'For a comprehensive office audit, you need to provide a scaled architectural floor plan (AutoCAD DWG or high-resolution PDF), exact North compass reading, photographs of key areas (entrance, executive cabin, server room, conference hall), and current employee seating layout.',
    },
    {
      question: 'Where should server racks, UPS units, and electrical panels be positioned?',
      answer:
        'All heat-generating equipment—including primary server racks, telecom panels, UPS battery banks, and electrical switchboards—belong in the South-East (Agni Kona) to keep the fire element properly isolated from administrative and creative zones.',
    },
  ]

  const zones = [
    {
      direction: 'SOUTH-WEST • NAIRUTYA',
      title: 'MD & Leadership Cabin',
      element: 'Earth Element (Prithvi)',
      description:
        'Anchors the executive decision-maker with commanding presence and stability. Desk oriented facing North or East with a solid background wall.',
      icon: Briefcase,
    },
    {
      direction: 'NORTH • KUBER ZONE',
      title: 'Finance & Accounts Desk',
      element: 'Water / Liquidity',
      description:
        'Governs capital preservation, accounting precision, and steady cash inflow. Cash vaults and ledger desks aligned facing North.',
      icon: Layers,
    },
    {
      direction: 'NORTH-WEST • VAYU ZONE',
      title: 'Conference & Negotiations',
      element: 'Air Element (Movement)',
      description:
        'Facilitates dynamic discourse, persuasive sales pitching, client presentations, and consensus-driven board meetings.',
      icon: Users,
    },
    {
      direction: 'EAST & NORTH-EAST',
      title: 'Engineering & Innovation Pods',
      element: 'Solar / Mental Clarity',
      description:
        'Stimulates mental agility, creative brainstorming, and code clarity for software developers, design teams, and product architects.',
      icon: Laptop,
    },
    {
      direction: 'SOUTH-EAST • AGNEYA',
      title: 'Server Room & Cafeteria',
      element: 'Fire Element (Agni)',
      description:
        'Safely houses high-heat electrical switchboards, UPS battery systems, server racks, microwave ovens, and pantry equipment.',
      icon: Compass,
    },
    {
      direction: 'EAST • INDRA PADA',
      title: 'Reception & Entrance Lobby',
      element: 'Social Inflow',
      description:
        'Welcoming, well-illuminated threshold creating positive first impressions for corporate clients, candidates, and visiting stakeholders.',
      icon: Building,
    },
  ]

  return (
    <>
      <SEOHead
        title="Office Vastu Consultant in Bangalore | 7Rays"
        description="Professional office Vastu consultation for startups, corporate suites, and professional studios in Bangalore. Optimize CEO cabins, workstations, and finance desks without demolition."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Commercial Vastu', url: '/vastu/commercial' },
          { name: 'Office Vastu', url: '/vastu/office-vastu' },
        ]}
      />
      <ServiceSchema
        name="Office Vastu Consultation"
        description="Comprehensive workplace spatial layout, executive cabin orientation, and department zoning for modern offices in Bangalore."
        serviceType="Commercial Office Vastu Shastra"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={officeFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[540px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:min-h-[580px] sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/corporate-vastu.jpg"
            alt="Modern Corporate Office Interior Bangalore"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1200}
            height={896}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Building className="h-3.5 w-3.5 text-amber-400" />
              <span>OFFICE &amp; WORKPLACE SPECIALIZATION</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Office Vastu Consultation
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Workplace Layout &amp; Seating Architecture
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Align executive authority, team collaboration, and financial order in your workplace.
              Specialized non-demolition Vastu solutions for tech startups, corporate suites, and
              professional offices across Bengaluru.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Office Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Request Office Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/vastu/commercial"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-medium text-slate-200 backdrop-blur-xs transition hover:bg-slate-800"
              >
                <span>Commercial Pillar</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation Bar */}
      <section className="border-b border-slate-200 bg-white py-3.5 text-xs text-slate-600">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="transition hover:text-amber-800">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link to="/vastu/commercial" className="transition hover:text-amber-800">
            Commercial Vastu
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Office Vastu</span>
        </div>
      </section>

      {/* AEO Direct Answer Section */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                WORKPLACE SPATIAL ARCHITECTURE
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                How Does Office Vastu Optimize Workplace Layout &amp; Seating?
              </h2>
              <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                <p className="text-xs leading-relaxed font-medium text-slate-800 sm:text-sm">
                  <strong>Direct Answer:</strong> Office Vastu aligns organizational hierarchy, team
                  collaboration, and operational workflows with directional energies. Within the
                  7Rays consultation framework, leadership cabins (CEOs, founders) are anchored in
                  the Southwest for stability and authority, accounts and finance desks in the
                  Southeast or North for financial clarity, and active marketing or business
                  development teams in the Northwest or East for outreach.
                </p>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                In modern commercial spaces and leased IT tech parks across Bangalore, breaking
                drywall or rerouting centralized HVAC ducting is rarely feasible. 7Rays Astro Vastu,
                led by Rishwa Sinha (Certified Vastu Consultant, 5+ years experience), applies
                non-demolition remedies—such as metal energy strips (brass, copper, zinc) and
                strategic furniture re-orientation—to achieve directional balance without violating
                commercial lease terms.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                  <span>No Civil Demolition</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <Briefcase className="h-3.5 w-3.5 text-amber-700" />
                  <span>Executive Seating Alignment</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <Building className="h-3.5 w-3.5 text-amber-700" />
                  <span>Commercial Lease Friendly</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-500/5 via-[#FAF8F5] to-amber-500/10 p-6 shadow-xs sm:p-8">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Core Seating &amp; Zoning Takeaways
                </h3>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Founder / Director:</strong> Southwest zone, seated facing North or
                      East for long-term vision.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Accounts &amp; Cashflow:</strong> Southeast (Agni fire energy) or
                      North (Kubera liquidity zone).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Tech &amp; Engineering:</strong> West or East clusters to maintain
                      focus, reduce glare, and support sprints.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Conference / Meeting:</strong> Northwest or North zone to facilitate
                      productive client discussions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Zone Office Department Alignment */}
      <section className="bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              STRATEGIC DEPARTMENT ZONING
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              16-Zone Office Functional Grid
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Each department functions at its highest potential when aligned with its corresponding
              natural element. Discover optimal desk and cabin allocations below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone, idx) => {
              const ZoneIcon = zone.icon
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                      {zone.direction}
                    </span>
                    <ZoneIcon className="h-4 w-4 text-amber-700" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{zone.title}</h3>
                  <span className="mt-1 inline-block text-[11px] font-semibold text-slate-500">
                    {zone.element}
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{zone.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pre-Lease vs Existing Office Fit-Out */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase">
                TWO WAYS WE ASSIST
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Pre-Lease Evaluation &amp; Retrofit Optimization
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Whether you are vetting a raw commercial shell in an IT corridor or fine-tuning an
                operational corporate workspace, our methodology adapts to your project timeline.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    1. Pre-Lease Floor Plan Review
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Before signing long-term commercial lease agreements, submit architectural CAD
                    drawings to verify core entrance coordinates, column grid geometry, and daylight
                    inflow to avoid inherently defective floorplates.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    2. Non-Demolition Retrofit Corrections
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    In existing fitted-out spaces, we reorient executive desks, balance conference
                    room geometry, and isolate pantry fire elements without breaking glass
                    partitions or disturbing daily work schedules.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openBooking('Office Floor Plan Audit')}
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
                >
                  <span>Submit Office Floor Plan</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right: Technical Guide Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-amber-300/80 bg-white p-8 shadow-sm">
                <span className="text-xs font-bold tracking-wider text-amber-800 uppercase">
                  DEEP DIVE TECHNICAL GUIDE
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">
                  Detailed Seating &amp; Executive Cabin Blueprint
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Read our full technical breakdown covering desktop angles, solid back wall
                  shielding, safe placement in accounts, and air-zone meeting pod dynamics.
                </p>
                <div className="mt-6">
                  <Link
                    to="/insights/commercial-vastu/office-layout-executive-cabin-vastu"
                    className="inline-flex items-center gap-2 rounded-lg border border-amber-400 bg-amber-50 px-5 py-3 text-xs font-bold text-amber-900 transition hover:bg-amber-100"
                  >
                    <span>Read Executive Cabin Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Direct Answers Accordion */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              DIRECT ANSWERS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {officeFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>
                    <div className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-2xs">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200/60 px-5 pt-3 pb-5">
                      <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bengaluru Commercial Desk */}
      <section className="border-t border-slate-200 bg-[#070E1E] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                BENGALURU COMMERCIAL DESK
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                On-Site Workplace Audits Across Bangalore
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Headquartered at {businessConfig.address.fullAddress}, 7Rays conducts on-site office
                inspections across Bangalore’s premier commercial corridors, personally supervised
                by {businessConfig.ownerName}, {businessConfig.ownerJobTitle} (
                {businessConfig.ownerExperience} experience).
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-300 sm:grid-cols-3">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Koramangala</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>HSR Layout</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Indiranagar</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Outer Ring Road</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Whitefield</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>MG Road / CBD</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-400/30 bg-slate-900/90 p-6 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <MapPin className="h-4 w-4" />
                  <span>LOCAL B2B CONSULTATION</span>
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold text-white">
                  Schedule an On-Site Office Inspection
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Comprehensive spatial energy mapping, directional compass calibration, and
                  departmental layout optimization.
                </p>
                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => openBooking('On-Site Office Consultation')}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-4 py-3 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                  >
                    <span>Book On-Site Office Visit</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/locations/bangalore/commercial-vastu"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-700"
                  >
                    <span>View Bangalore Commercial Hub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  )
}
