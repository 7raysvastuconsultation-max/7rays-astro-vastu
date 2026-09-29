import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Building2,
  Home,
  Globe2,
  Briefcase,
} from 'lucide-react'
import { businessConfig } from '@/config/business'

interface ClientExperienceItem {
  id: string
  clientName: string
  role: string
  location: string
  propertyType: string
  serviceType: string
  serviceUrl: string
  consultationType: 'On-Site Property Audit' | 'Remote CAD Consultation'
  period: string
  quote: string
  keyRemedy: string
  geoCoordinates?: string
  icon: React.ComponentType<{ className?: string }>
}

const clientExperiences: ClientExperienceItem[] = [
  {
    id: 'exp-whitefield-apartment',
    clientName: 'Vikram N.',
    role: 'Senior Director, Enterprise Cloud',
    location: 'Whitefield, Bengaluru',
    propertyType: '4BHK High-Rise Apartment',
    serviceType: 'Apartment Vastu Audit',
    serviceUrl: '/vastu/apartment-vastu',
    consultationType: 'On-Site Property Audit',
    period: 'March 2026',
    quote:
      'Our gated high-rise apartment in Whitefield had a major structural shear wall constraint where the master suite bathroom was aligned near the North-East zone. Rishwa Sinha used non-demolition zinc strip element containment along the floor threshold and guided our headboard realignment to the South. The restorative sleep quality and clarity in our home changed noticeably within four weeks.',
    keyRemedy:
      'Elemental zinc strip threshold isolation & South-facing master bed realignment without touching shear walls.',
    geoCoordinates: '12.9698° N, 77.7500° E',
    icon: Home,
  },
  {
    id: 'exp-hsr-fintech-office',
    clientName: 'Arvind K.',
    role: 'Co-Founder & CTO, B2B SaaS',
    location: 'HSR Layout (Sector 4), Bengaluru',
    propertyType: '60-Seater Leased Tech Workspace',
    serviceType: 'Commercial Office Vastu',
    serviceUrl: '/vastu/commercial',
    consultationType: 'On-Site Property Audit',
    period: 'February 2026',
    quote:
      'We expanded our engineering office in HSR Layout and were facing unusual leadership friction and cash-flow bottlenecks. Rishwa conducted a scientific 16-zone digital compass audit. She shifted the founders’ cabins to the South-West (Nairutya) quadrant for grounding, relocated our finance desk to the North, and installed calibrated brass floor inlays without lease violations. The workspace harmony and focus improved tremendously.',
    keyRemedy:
      'Leadership cabin stabilization in South-West, accounting desk relocation to North Kuber zone, and brass threshold inlays.',
    geoCoordinates: '12.9121° N, 77.6446° E',
    icon: Briefcase,
  },
  {
    id: 'exp-indiranagar-retail',
    clientName: 'Meera S.',
    role: 'Founder, Organic Lifestyle Studio & Cafe',
    location: '100 Feet Road, Indiranagar, Bengaluru',
    propertyType: 'High-Street Retail Store',
    serviceType: 'Retail & Commercial Vastu',
    serviceUrl: '/vastu-services/commercial-vastu',
    consultationType: 'On-Site Property Audit',
    period: 'January 2026',
    quote:
      'Our store entrance on 100ft Road in Indiranagar was angled awkwardly, creating erratic footfall and high inventory stagnation. Rishwa calculated our exact entrance pada using digital compass degrees and re-aligned our cash billing counter to the North-North-West opportunity zone. Her non-demolition approach protected our interior design investment while creating an inviting, prosperous store atmosphere.',
    keyRemedy:
      '16-zone entrance pada calibration, billing desk repositioning to North-North-West, and elemental lighting harmonization.',
    geoCoordinates: '12.9784° N, 77.6408° E',
    icon: Building2,
  },
  {
    id: 'exp-dasarahalli-villa',
    clientName: 'Ramesh & Sunita B.',
    role: 'Independent Homeowners',
    location: 'Dasarahalli / Balaji Layout, Bengaluru',
    propertyType: 'G+2 Independent Villa',
    serviceType: 'Residential Vastu Consultation',
    serviceUrl: '/vastu/residential',
    consultationType: 'On-Site Property Audit',
    period: 'December 2025',
    quote:
      'Having an existing underground water storage sump close to the South-East Agni corner caused repeated digestive and family health stress. Other consultants insisted on tearing down the concrete driveway. Rishwa Sinha visited our villa from her Dasarahalli office, scanned the energy grids, and installed a specialized copper boundary helix to balance the fire-water clash without any demolition. We are deeply grateful for her practical science.',
    keyRemedy:
      'Fire-water elemental neutralization using copper helix perimeter bonding for misplaced South-East water sump.',
    geoCoordinates: '13.0450° N, 77.5150° E',
    icon: Home,
  },
  {
    id: 'exp-international-nri',
    clientName: 'Karthik & Preeti R.',
    role: 'Principal Cloud Architect',
    location: 'San Jose, CA (USA) & Bengaluru',
    propertyType: 'Overseas Villa & Managed Flat',
    serviceType: 'International NRI Consultation',
    serviceUrl: '/international',
    consultationType: 'Remote CAD Consultation',
    period: 'March 2026',
    quote:
      'Purchasing real estate in California while managing our family property in Bangalore felt challenging due to differing architectural orientations. Rishwa verified our scaled CAD drawings over Google Earth satellite coordinates down to single-degree accuracy, synchronizing both properties with our Vedic birth charts. Her remote consultation is as precise, transparent, and grounded as being on-site in person.',
    keyRemedy:
      'Degree-accurate CAD centroid plotting, satellite true-North alignment, and family Astro-Vastu horoscope synchronization.',
    geoCoordinates: 'Remote Global (USA & India)',
    icon: Globe2,
  },
  {
    id: 'exp-koramangala-consulting',
    clientName: 'Deepa V.',
    role: 'Managing Partner, Management Consulting',
    location: 'Koramangala (Block 4), Bengaluru',
    propertyType: 'Corporate Office Suite',
    serviceType: 'Corporate Vastu Alignment',
    serviceUrl: '/vastu/corporate',
    consultationType: 'On-Site Property Audit',
    period: 'November 2025',
    quote:
      'We experienced persistent mental fatigue during executive strategy sessions in our Koramangala suite. Rishwa diagnosed an elemental imbalance in our East conference room and recommended subtle spectral lighting corrections along with magnetic axis alignment for our primary boardroom table. The mental clarity and collaborative energy across our leadership team have been remarkable.',
    keyRemedy:
      'East sector spectral solar lighting alignment and conference table axis calibration to True Magnetic North.',
    geoCoordinates: '12.9352° N, 77.6245° E',
    icon: Briefcase,
  },
]

export const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 20)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20)
  }

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const cardWidth = scrollContainerRef.current.clientWidth >= 768 ? 440 : 320
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden border-b border-amber-500/20 bg-[#FAF8F5] py-20 text-slate-900 sm:py-28">
      {/* Background Decorative Flourish */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F59E0B_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.04]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-800 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>VERIFIED CLIENT EXPERIENCES</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Proven Outcomes Across{' '}
              <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 bg-clip-text text-transparent">
                Bengaluru &amp; Worldwide
              </span>
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore documented client experiences spanning Bangalore tech corridors, high-rise
              apartments, retail establishments, and international NRI remote consultations. Every
              remedy is scientific, non-demolition, and verified by Certified Vastu Consultant{' '}
              <strong className="font-semibold text-slate-900">Rishwa Sinha</strong>.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous client experience"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 ${
                canScrollLeft
                  ? 'border-amber-300 bg-white text-slate-800 shadow-sm hover:border-amber-500 hover:bg-amber-50'
                  : 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next client experience"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 ${
                canScrollRight
                  ? 'border-amber-300 bg-white text-slate-800 shadow-sm hover:border-amber-500 hover:bg-amber-50'
                  : 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pt-2 pb-6 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clientExperiences.map((exp) => {
            const Icon = exp.icon
            return (
              <div
                key={exp.id}
                className="group flex w-[310px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-amber-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg sm:w-[390px] sm:p-7 md:w-[430px]"
              >
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-amber-100/80 pb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/70 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-amber-900">
                      <Icon className="h-3 w-3 text-amber-700" />
                      <span>{exp.propertyType}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Verified Audit</span>
                    </span>
                  </div>

                  {/* Location & Geo Stamp (GEO Signal) */}
                  <div className="mt-3.5 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <MapPin className="h-3.5 w-3.5 text-amber-600" />
                      <span>{exp.location}</span>
                    </span>
                    <span className="text-[11px] text-slate-400">{exp.period}</span>
                  </div>

                  {/* Verbatim Quote (AEO & E-E-A-T Signal) */}
                  <blockquote className="mt-4 font-serif text-[14px] leading-relaxed text-slate-800 italic sm:text-[15px]">
                    "{exp.quote}"
                  </blockquote>

                  {/* Specific Key Technical Remedy (AEO Information Gain) */}
                  <div className="mt-4 rounded-xl border border-amber-200/60 bg-[#FFFDF9] p-3 text-xs leading-relaxed text-slate-700">
                    <span className="font-semibold text-amber-900">Key Scientific Remedy:</span>{' '}
                    <span>{exp.keyRemedy}</span>
                  </div>
                </div>

                {/* Bottom Footer Info */}
                <div className="mt-6 border-t border-amber-100/70 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-slate-900">
                        {exp.clientName}
                      </h4>
                      <p className="text-[11px] text-slate-500">{exp.role}</p>
                    </div>

                    <Link
                      to={exp.serviceUrl}
                      className="group/link inline-flex items-center gap-1 text-xs font-semibold text-amber-700 transition hover:text-amber-900"
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Trust & Verification Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-amber-200/60 bg-white p-5 shadow-xs sm:flex-row sm:px-8">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800">
              <ShieldCheck className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">
                Authentic Architectural &amp; Astro-Vastu Diagnostic Records
              </p>
              <p className="text-[11px] text-slate-500">
                All cases reflect real spatial remediation protocols conducted by Certified Vastu
                Consultant Rishwa Sinha.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 transition hover:text-amber-800"
            >
              <span>View Case Studies</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={businessConfig.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-900 transition hover:bg-amber-100"
            >
              <span>Google Business Profile</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
