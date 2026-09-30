import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Factory,
  ArrowRight,
  ChevronRight,
  Wrench,
  Flame,
  Layers,
  Compass,
  MapPin,
  Plus,
  Minus,
  Truck,
  Building,
  CheckCircle2,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const IndustrialVastuPage: React.FC = () => {
  const routerLocation = useLocation()
  const isVastuServicesAlias = routerLocation.pathname.includes('/vastu-services/')
  const pageTitle = isVastuServicesAlias
    ? 'Factory & Manufacturing Plant Vastu in Bangalore | 7Rays'
    : 'Industrial Vastu Consultant in Bangalore | 7Rays'
  const canonicalUrl = `${siteConfig.url}/vastu/industrial`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Industrial Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const industrialFaqs = [
    {
      question: 'What is the most critical Vastu factor for industrial manufacturing units?',
      answer:
        'Heavy production machinery, stamping presses, and CNC milling centers must be anchored in the South, West, or South-West sectors. This utilizes the natural gravitational stability of the Earth element, dampening mechanical vibrations and reducing frequent structural breakdowns.',
    },
    {
      question: 'Where should industrial boilers, furnaces, and transformers be located?',
      answer:
        'All high-heat equipment—including steam boilers, industrial furnaces, high-voltage transformers, diesel generator (DG) sets, and primary electrical distribution panels—must be positioned in the South-East (Agni Kona). Keeping fire elements isolated to this sector minimizes fire hazards and electrical tripping.',
    },
    {
      question: 'Where should raw materials and finished goods be stored?',
      answer:
        'Raw material inventory (steel coils, chemical drums, bulk inputs) should be placed in the South or South-West to maintain grounded weight. Finished goods ready for market dispatch belong in the North-West (Vayu / Air zone) to facilitate rapid inventory turnover and swift logistics dispatch.',
    },
    {
      question:
        'Do you assist in industrial plot selection and slope evaluation in Karnataka industrial belts?',
      answer:
        'Yes. We evaluate raw industrial plots across Peenya, Bommasandra, Bidadi, and Dabaspet for soil load capacity, slope gradients (optimally declining toward North-East), plot geometry (Shermukhi vs Gomukhi), and surrounding arterial road hit (Veedhi Shoola) analysis.',
    },
    {
      question: 'Can factory Vastu corrections be implemented without halting production lines?',
      answer:
        'Yes. Industrial plant downtime is extremely costly. The vast majority of our industrial recommendations are designed for phased implementation during scheduled plant maintenance shutdowns or shift changeovers without interrupting ongoing assembly lines.',
    },
  ]

  const plantZonings = [
    {
      title: 'Heavy Plant Machinery & Tooling',
      direction: 'SOUTH-WEST & SOUTH',
      description:
        'Grounding CNC machines, stamping presses, injection molding machines, and heavy mechanical tooling in the Earth zone to absorb kinetic vibration and ensure machine longevity.',
      icon: Wrench,
    },
    {
      title: 'Boilers, Transformers & DG Sets',
      direction: 'SOUTH-EAST • AGNEYA',
      description:
        'Safely containing high-temperature furnaces, steam boilers, HT electrical transformers, and backup generators in the primary Fire quadrant.',
      icon: Flame,
    },
    {
      title: 'Finished Goods & Dispatch Bay',
      direction: 'NORTH-WEST • VAYU ZONE',
      description:
        'Staging inspected finished products and logistics loading docks in the dynamic Air sector to ensure prompt order fulfillment and fluid transit.',
      icon: Truck,
    },
    {
      title: 'Raw Material Yard & Heavy Storage',
      direction: 'SOUTH & SOUTH-WEST',
      description:
        'Storing heavy raw inventory, steel beams, and bulk processing inputs along southern boundaries to reinforce foundational structural weight.',
      icon: Layers,
    },
    {
      title: 'Underground Water & ETP Sumps',
      direction: 'NORTH-EAST • ISHANYA',
      description:
        'Situating underground borewells, rainwater collection tanks, and clean water reservoirs in the North-East to maintain hydraulic balance.',
      icon: Compass,
    },
    {
      title: 'Administrative Office & Security Gate',
      direction: 'SOUTH-WEST & NORTH/EAST',
      description:
        'Positioning the plant management office in the South-West for executive oversight, with security check-posts and main weighbridges at the North or East gate.',
      icon: Building,
    },
  ]

  return (
    <>
      <SEOHead
        title={pageTitle}
        description="Certified industrial Vastu consultant in Bangalore. Expert manufacturing plant layouts, heavy machinery orientation, and warehouse logistics without operational downtime."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Commercial Vastu', url: '/vastu/commercial' },
          { name: 'Industrial Vastu', url: '/vastu/industrial' },
        ]}
      />
      <ServiceSchema
        name="Industrial Vastu Consultation in Bangalore"
        description="Comprehensive industrial plant and warehouse spatial engineering across Karnataka manufacturing corridors."
        serviceType="Industrial Vastu Shastra"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={industrialFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[540px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:min-h-[580px] sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/industrial-vastu.jpg"
            alt="Industrial Manufacturing Plant Vastu Bangalore"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1200}
            height={896}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Factory className="h-3.5 w-3.5 text-amber-400" />
              <span>MANUFACTURING &amp; INDUSTRIAL VASTU</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Industrial Vastu <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Factory &amp; Warehouse Layouts
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Align heavy machinery tonnage, high-temperature thermal utilities, raw material
              storage, and warehouse dispatch logistics with classical physical and electromagnetic
              axes. Specialized industrial audits across Peenya, Bommasandra, Bidadi, and Dabaspet.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Industrial Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Request Plant Assessment</span>
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
          <span className="font-semibold text-slate-900">Industrial Vastu</span>
        </div>
      </section>

      {/* AEO Direct Answer Section */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                INDUSTRIAL SPATIAL METHODOLOGY
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                How Does Industrial Vastu Optimize Manufacturing Plant Layouts?
              </h2>
              <div className="mt-4 rounded-xl border border-amber-200/80 bg-[#FAF8F5] p-5">
                <p className="text-xs leading-relaxed font-medium text-slate-800 sm:text-sm">
                  <strong>Direct Answer:</strong> Industrial Vastu optimizes plant efficiency,
                  workplace safety, and logistics flow by synchronizing heavy mass, thermodynamic
                  equipment, and dispatch corridors with directional elements. Within the 7Rays
                  methodology, heavy production machinery, CNC units, and raw materials are anchored
                  in the Southwest and South (Earth/Stability), high-heat boilers and electrical
                  substations in the Southeast (Agni/Fire), and finished goods dispatch in the
                  Northwest (Vayu/Movement).
                </p>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Unlike residential properties, industrial manufacturing units operate under severe
                vibrational loads, high power consumption, and continuous material transit. Led by
                Rishwa Sinha (Certified Vastu Consultant, 5+ years experience), 7Rays Astro Vastu
                provides specialized non-demolition alignments, metal inlays, and operational flow
                audits across Bangalore industrial zones including Peenya, Bommasandra, Bidadi,
                Nelamangala, and Hoskote.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                  <span>Non-Demolition Remedies</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <Factory className="h-3.5 w-3.5 text-amber-700" />
                  <span>Heavy Machinery Weighting</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <Truck className="h-3.5 w-3.5 text-amber-700" />
                  <span>Logistics &amp; Dispatch Flow</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-500/5 via-[#FAF8F5] to-amber-500/10 p-6 shadow-xs sm:p-8">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Key Industrial Layout Principles
                </h3>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Machinery &amp; Raw Material:</strong> Southwest zone provides
                      structural stability and reduces vibration stress.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Boilers &amp; Substations:</strong> Southeast (Agni fire energy)
                      safely channels high electrical and thermal loads.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Finished Goods Dispatch:</strong> Northwest (Vayu wind energy)
                      facilitates continuous transit and prevents dead stock.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Administrative Management:</strong> West or North sectors align
                      leadership overview with operational harmony.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Plant Zoning Quadrants Grid */}
      <section className="bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              PLANT SPATIAL ARCHITECTURE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Core Functional Zoning for Manufacturing Plants
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Industrial facilities operate through mass displacement, continuous vibration, and
              high-energy thermal processes. Explore our spatial positioning matrix below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plantZonings.map((zone, idx) => {
              const ZoneIcon = zone.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                      {zone.direction}
                    </span>
                    <ZoneIcon className="h-4 w-4 text-amber-700" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{zone.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{zone.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Logistics Workflow & Machine Placement Section */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase">
                PRODUCTION LINE EFFICIENCY
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Harmonizing Material Flow &amp; Machinery Tonnage
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                A well-designed industrial plant coordinates natural physical forces with modern
                assembly line operations:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    1. Clockwise Production Circuit
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Raw materials enter and stage in the South/South-West, progress through central
                    fabrication and assembly bays, and conclude at finished goods warehouses in the
                    North-West, creating a harmonious and unblocked manufacturing flow.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    2. Thermal &amp; Electrical Safety Containment
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    High-temperature furnaces, steam boilers, HT substations, and generator sets are
                    anchored in the South-East to prevent electrical fires and keep intense thermal
                    radiation away from administrative offices.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <h3 className="font-serif text-sm font-bold text-slate-900">
                    3. Non-Disruptive Phased Implementation
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Remedies for operating industrial plants are structured to occur during planned
                    maintenance shutdowns or shift handovers with zero downtime on
                    revenue-generating assembly lines.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-300/80 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase">
                  <MapPin className="h-4 w-4" />
                  <span>KARNATAKA INDUSTRIAL BELTS</span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">
                  On-Site Factory Audits Across Bangalore
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Inspecting manufacturing plants, warehouses, and industrial plots across Peenya
                  Industrial Estate, Bommasandra, Bidadi, Dabaspet, and Whitefield Export Promotion
                  Park. Directed personally by Certified Vastu Consultant {businessConfig.ownerName}
                  .
                </p>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => openBooking('Factory Site Inspection')}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
                  >
                    <span>Request Factory Site Inspection</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/insights/commercial-vastu/factory-machinery-and-raw-material-vastu"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-amber-200/80 bg-amber-50 px-4 py-2.5 text-xs font-semibold text-amber-900 transition hover:bg-amber-100"
                  >
                    <span>Read Industrial Machinery Guide</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial AEO FAQ Accordion */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              DIRECT ANSWERS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Industrial Vastu Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {industrialFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] transition-colors"
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
