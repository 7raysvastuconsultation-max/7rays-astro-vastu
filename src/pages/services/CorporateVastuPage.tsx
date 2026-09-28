import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Briefcase,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building2,
  Users2,
  Compass,
  Layers,
  MapPin,
  Plus,
  Minus,
  Sparkles,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const CorporateVastuPage: React.FC = () => {
  const routerLocation = useLocation()
  const isVastuServicesAlias = routerLocation.pathname.includes('/vastu-services/')
  const pageTitle = isVastuServicesAlias
    ? 'Corporate Campus & Tech Park Vastu in Bangalore | 7Rays'
    : 'Corporate Vastu Consultant in Bangalore | 7Rays'
  const canonicalUrl = `${siteConfig.url}/vastu/corporate`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Corporate Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const corporateFaqs = [
    {
      question: 'How does Corporate Vastu address multi-floor tenancy in Bangalore IT tech parks?',
      answer:
        'In multi-storey IT parks and commercial towers, tenancy is often distributed across non-contiguous floors with central core elevator shafts. We map each individual leased floor plate as an independent energetic mandala, aligning core executive zones, open development pods, and server infrastructure relative to that specific floor’s directional center (Brahmasthan).',
    },
    {
      question:
        'Can corporate Vastu corrections be executed without violating landlord lease agreements?',
      answer:
        'Yes. Leased commercial buildings have stringent fit-out regulations prohibiting the movement of structural columns, core demising walls, or wet stacks. We deploy non-demolition solutions including task chair re-alignment, metallic boundary encapsulation in carpet trims, elemental color balancing, and directional acoustic paneling—with zero masonry destruction.',
    },
    {
      question:
        'What is the optimal spatial quadrant for corporate boardrooms and investor suites?',
      answer:
        'Boardrooms, investor presentation suites, and high-stakes negotiation rooms are best positioned in the North-West (Vayu / Movement zone). Governed by the air element, this quadrant facilitates forward momentum, persuasive dialogue, and timely consensus during board meetings.',
    },
    {
      question: 'What documents are required to begin an enterprise corporate Vastu audit?',
      answer:
        'Enterprise clients provide architectural AutoCAD (.DWG) or high-resolution vector PDF floor plans indicating true North coordinates, current workstation seating distribution, executive cabin placements, server room locations, and primary core elevator lobbies.',
    },
  ]

  const enterprisePillars = [
    {
      title: 'Executive & C-Suite Governance',
      direction: 'SOUTH-WEST • EARTH SECTOR',
      description:
        'Positioning managing directors, board chairs, and chief executives in the South-West anchors organizational leadership with grounded stability, long-term vision, and command authority.',
      icon: Briefcase,
    },
    {
      title: 'Software Development & Innovation',
      direction: 'EAST & NORTH-EAST • SOLAR SECTOR',
      description:
        'Orienting agile software development squads, data scientists, and product architects toward the East and North fosters cognitive clarity, creative problem solving, and sustained focus.',
      icon: Layers,
    },
    {
      title: 'Boardrooms & Strategic Pitching',
      direction: 'NORTH-WEST • AIR SECTOR',
      description:
        'Situating investor presentation rooms and executive boardrooms in the North-West stimulates persuasive communication, partnership alignment, and decisive contract closures.',
      icon: Users2,
    },
    {
      title: 'Mission-Critical Server & IT Infrastructure',
      direction: 'SOUTH-EAST • FIRE SECTOR',
      description:
        'Allocating enterprise server rooms, UPS battery arrays, and telecommunication switchgear to the South-East ensures thermal containment and electrical safety.',
      icon: Compass,
    },
  ]

  return (
    <>
      <SEOHead
        title={pageTitle}
        description="Enterprise corporate Vastu consultancy for technology campuses, multinational headquarters, and high-growth startups in Bangalore. Non-demolition spatial engineering."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Commercial Vastu', url: '/vastu/commercial' },
          { name: 'Corporate Vastu', url: '/vastu/corporate' },
        ]}
      />
      <ServiceSchema
        name="Corporate Vastu Consulting"
        description="Enterprise workplace Vastu and leadership spatial engineering across Bengaluru tech parks."
        serviceType="Corporate Vastu Shastra"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={corporateFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[540px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:min-h-[580px] sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-boardroom-hero.jpg"
            alt="Corporate Boardroom Vastu Bangalore"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Building2 className="h-3.5 w-3.5 text-amber-400" />
              <span>ENTERPRISE &amp; TECH WORKPLACES</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Corporate Vastu <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Workplace Architecture
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Spatial engineering for multinational tech campuses, corporate headquarters, and
              high-growth scaleups across Bangalore IT corridors. Balancing executive governance,
              collaborative agility, and technical operations without structural demolition.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Corporate Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Request Corporate Proposal</span>
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
          <span className="font-semibold text-slate-900">Corporate Vastu</span>
        </div>
      </section>

      {/* 4 Enterprise Pillars Grid */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              WORKPLACE SPATIAL ENGINEERING
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Strategic Zoning for Enterprise Organizations
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Modern corporate work environments require a delicate balance between open-plan team
              agility, acoustic privacy, and executive stability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enterprisePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                    <PillarIcon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                    {pillar.direction}
                  </span>
                  <h3 className="mt-1 font-serif text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Multi-Floor & Non-Demolition Leased Fit-Out Section */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase">
                LEASED WORKPLACE COMPLIANCE
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Non-Demolition Remedies for Tech Park Tenancy
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Corporate real estate managers face rigid landlord covenants prohibiting structural
                modifications. Our remedial engineering works within these exact constraints:
              </p>

              <div className="mt-6 space-y-3 text-xs leading-relaxed text-slate-700">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-amber-700" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">
                      Workstation Re-Orientation
                    </h4>
                    <p className="mt-1 text-slate-600">
                      Adjusting desk orientation, monitor sightlines, and team seating facing East
                      or North without dismantling modular raceway systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <Sparkles className="h-5 w-5 shrink-0 text-amber-700" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">
                      Subtle Elemental Boundary Strips
                    </h4>
                    <p className="mt-1 text-slate-600">
                      Embedding slender brass, copper, or zinc boundary strips beneath carpet tiles
                      or baseboard joints to correct directional discrepancies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <Compass className="h-5 w-5 shrink-0 text-amber-700" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">
                      Directional &amp; Acoustic Optimization
                    </h4>
                    <p className="mt-1 text-slate-600">
                      Deploying acoustic paneling and intentional workspace material palettes to
                      support productive departmental zoning across open floor plates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-300/80 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase">
                  <MapPin className="h-4 w-4" />
                  <span>BANGALORE TECH PARKS</span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">
                  On-Site Campus Audits Across Bengaluru
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Serving multinational corporations and unicorn startups across Outer Ring Road,
                  Whitefield (ITPB / EPIP), Electronic City, and Manyata Tech Park. Directed
                  personally by Certified Vastu Consultant {businessConfig.ownerName}.
                </p>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => openBooking('Corporate Campus Audit')}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
                  >
                    <span>Request Corporate Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/locations/bangalore/commercial-vastu"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-amber-50/60 px-4 py-2.5 text-xs font-semibold text-amber-900 transition hover:bg-amber-100"
                  >
                    <span>Bangalore Commercial Landing Page</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate AEO FAQ Accordion */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              DIRECT ANSWERS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Corporate Vastu Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {corporateFaqs.map((faq, index) => {
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

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  )
}
