import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Video,
  FileText,
  MapPin,
  ShieldCheck,
  Globe2,
  Layers,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  Laptop,
  ChevronRight,
  Award,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const OnlineVastuPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canonicalUrl = `${siteConfig.url}/services/online-vastu-consultation`

  const whatsAppUrl = `https://wa.me/${(siteConfig.contact.whatsApp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello 7Rays Astro Vastu, I would like to book an Online Vastu Consultation for my property.'
  )}`

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'How does an Online Vastu Consultation work without an on-site visit?',
      answer:
        'Online Vastu Consultation relies on high-precision architectural floor plans or CAD blueprints coupled with satellite directional verification. Using Google Earth satellite orientation and magnetic declination calculation, we calibrate the precise 16 Vastu zones of your property. Our Certified Vastu Consultant, Rishwa Sinha, reviews every zone and conducts an interactive video consultation via Google Meet or Zoom, delivering identical diagnostic accuracy to an on-site evaluation.',
    },
    {
      question: 'What documents or information do I need to provide for a remote consultation?',
      answer:
        'You only need to provide: (1) An architectural layout, builder floor plan, or hand-drawn sketch with proportional room dimensions, (2) The geographic address or Google Maps location pin of the property to verify the true North orientation, and (3) Photographs or short video walk-throughs of key areas such as the main entrance, kitchen, master bedroom, and balconies.',
    },
    {
      question: 'Do online Vastu remedies require breaking walls or demolition?',
      answer:
        'No. 7Rays Astro Vastu practices a 100% scientific, non-demolition methodology. All remedial recommendations utilize elemental balancing, metallic inlays (brass, copper, zinc, lead), color frequency adjustments, directional energy reflectors, and purposeful furniture realignment. No structural demolition is ever prescribed.',
    },
    {
      question: 'Can clients outside Bangalore and international NRIs book this service?',
      answer:
        'Yes. Our Online Vastu Consultation serves homeowners, corporate executives, and business owners across all Indian metropolitan hubs—including Mumbai, Delhi NCR, Hyderabad, Pune, Kolkata, Chennai, and Ahmedabad—as well as NRI clients in the USA, UAE, UK, Singapore, Australia, and Canada.',
    },
    {
      question: 'What deliverables will I receive after the consultation?',
      answer:
        'Following the live video consultation, you receive a comprehensive digital Vastu Audit Report. This includes your property’s 16-zone energy grid mapping, an itemized discrepancy diagnosis, step-by-step remedial instructions with clear placement diagrams, and planetary timing synchronization.',
    },
    {
      question: 'How long does the entire remote audit process take?',
      answer:
        'From the moment your floor plan drawings and location coordinates are submitted, our diagnostic blueprint audit is typically completed within 2 to 4 business days, followed by your scheduled 60-to-90-minute live video session.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: 'Submit Floor Plan & Pin',
      description:
        'Share your architectural drawing, builder blueprint, or dimensional sketch alongside the Google Maps location pin to establish true North alignment.',
      icon: <FileText className="h-6 w-6 text-amber-700" />,
    },
    {
      step: '02',
      title: '16-Zone Precision Mapping',
      description:
        'We superimpose the 16 Vastu zones and 32 entrance angular grids onto your blueprint, analyzing elemental allocations and energy flow vectors.',
      icon: <Layers className="h-6 w-6 text-amber-700" />,
    },
    {
      step: '03',
      title: 'Live Video Consultation',
      description:
        'A comprehensive 60–90 minute video consultation with Certified Vastu Consultant Rishwa Sinha to walk through your blueprint findings room by room.',
      icon: <Video className="h-6 w-6 text-amber-700" />,
    },
    {
      step: '04',
      title: 'Written Audit & Remedy Plan',
      description:
        'Receive your complete Vastu Audit Dossier featuring actionable, non-demolition remedial solutions and room-by-room directional alignment.',
      icon: <CheckCircle2 className="h-6 w-6 text-amber-700" />,
    },
  ]

  const metroHubs = [
    { city: 'Mumbai & MMR', focus: 'High-Rise Apartments, Sea-Facing Penthouses & BKC Commercial Offices', href: '/locations/mumbai/' },
    { city: 'Delhi NCR (Gurgaon & Noida)', focus: 'Corporate Headquarters, Luxury Villas & Industrial Units', href: '/locations/delhi-ncr/' },
    { city: 'Hyderabad', focus: 'HITEC City Tech Parks, Gachibowli Gated Communities & Commercial Retail', href: '/locations/hyderabad/' },
    { city: 'Pune', focus: 'IT Spaces in Hinjawadi, Baner Residential Flats & Industrial Warehouses', href: '/locations/pune/' },
    { city: 'Kolkata', focus: 'Ancestral Courtyard Homes, New Town High-Rises & Salt Lake Offices', href: '/locations/kolkata/' },
    { city: 'Bengaluru', focus: 'Tech Hub Apartments, Indiranagar Villas & Startup Workspace Energy Alignment', href: '/locations/bangalore/' },
    { city: 'Global NRIs (USA, UAE, UK, Singapore)', focus: 'Overseas Floor Plan Vastu Audits & International Property Investments', href: '/international/' },
  ]

  return (
    <>
      <SEOHead
        title="Online Vastu Consultation India | Remote Vastu Audit | 7Rays"
        description="Book scientific Online Vastu Consultation across India and globally with Certified Vastu Consultant Rishwa Sinha. Precision CAD blueprint analysis with zero demolition."
        canonicalUrl={canonicalUrl}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/vastu-services/' },
          { name: 'Online Vastu Consultation', url: '/services/online-vastu-consultation/' },
        ]}
      />

      <ServiceSchema
        name="Online Vastu Consultation India"
        description="Scientific remote Vastu consultation and CAD floor plan energy audit for apartments, villas, and commercial spaces across India and globally."
        serviceType="Online Vastu Consultation"
      />

      <FAQSchema items={faqs} />

      {/* 1. HERO SECTION (Dark Luxury with Golden Glow) */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Globe2 className="h-3.5 w-3.5" />
              <span>PAN-INDIA & GLOBAL REMOTE CONSULTATION</span>
            </div>

            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Scientific{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Online Vastu
              </span>{' '}
              Consultation Across India
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Experience world-class Vastu Shastra analysis from anywhere in India or abroad.
              Led by <strong>Rishwa Sinha</strong>, Certified Vastu Consultant with 5+ years of verified practice.
              We diagnose your architectural floor plans with calibrated satellite alignment and provide 100% non-demolition remedies.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Online Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-400"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-4 text-left text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0" />
                <span>100% Zero Demolition</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-amber-400 shrink-0" />
                <span>16-Zone Grid Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5 text-amber-400 shrink-0" />
                <span>HD Video Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-400 shrink-0" />
                <span>Detailed Written Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & TRUST STRIP (Warm Cream / Off-White) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-800">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/vastu-services" className="transition hover:text-amber-800">
              Services
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-medium text-slate-800">Online Vastu Consultation</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-amber-900">
            <Award className="h-4 w-4 text-amber-700" />
            <span>Certified Consultant Rishwa Sinha • 5+ Years Experience • Scientific Methodology</span>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE ONLINE CONSULTATION (Clean White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              REMOTE PRECISION ENGINEERING
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Equal In Accuracy to an On-Site Inspection
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Modern architectural blueprints and satellite geocoding allow us to compute directional orientations within 0.5 degrees of accuracy—delivering complete clarity without travel overhead.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-8 shadow-2xs transition hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-slate-900">
                Satellite North Calibration
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We verify true astronomical North using satellite coordinates rather than relying solely on erratic handheld magnetic compasses that can be skewed by interior steel reinforcements.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-8 shadow-2xs transition hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-slate-900">
                16-Zone Elemental Balancing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Every functional zone—from Northeast (Water/Clarity) to Southeast (Fire/Liquidity)—is systematically mapped against your family members’ activities and priorities.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-8 shadow-2xs transition hover:border-amber-400 hover:bg-white hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-slate-900">
                Non-Demolition Remedies
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Remedies use authentic elemental frequencies: brass and copper energy rods, color spectrum balancing, sacred geometry, and furniture orientation adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUR-STEP PROCESS (Warm Off-White Background) */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              SEAMLESS 4-STAGE WORKFLOW
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              How Your Online Consultation Unfolds
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              A structured, four-phase engagement ensuring complete thoroughness and actionable guidance.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition hover:border-amber-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                    {item.icon}
                  </div>
                  <span className="font-serif text-2xl font-bold text-amber-600/40">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PAN-INDIA METRO COVERAGE (Dark Luxury Accent Section) */}
      <section className="relative overflow-hidden bg-[#070E1E] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase">
              PAN-INDIA METRO COVERAGE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Trusted by Homeowners &amp; Businesses Across India
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Whether you are purchasing an under-construction apartment in Mumbai, designing an office in Gurgaon, or managing industrial spaces in Pune, our online consultations provide rapid, authoritative direction.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metroHubs.map((hub) => (
              <Link
                key={hub.city}
                to={hub.href}
                className="group block rounded-xl border border-amber-400/20 bg-slate-900/80 p-5 backdrop-blur-xs transition hover:border-amber-400/60 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between text-amber-400">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-300">{hub.city}</h3>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-300">{hub.focus}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU RECEIVE (Pure White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                DELIVERABLES &amp; REPORTING
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                What You Receive in Your Online Consultation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                You receive more than general advice; you receive an architectural-grade digital dossier that you or your interior designer can implement immediately.
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-[#FAF8F5] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">16-Zone Energy Grid Blueprint</h3>
                    <p className="mt-0.5 text-xs text-slate-600">
                      High-precision angular division mapped onto your CAD drawing, identifying exact boundaries of all 16 directional zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-[#FAF8F5] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Itemized Vastu Discrepancy Diagnosis</h3>
                    <p className="mt-0.5 text-xs text-slate-600">
                      Room-by-room audit of the main entrance, kitchen, bedrooms, water elements, and electronics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-[#FAF8F5] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">100% Non-Demolition Remedial Plan</h3>
                    <p className="mt-0.5 text-xs text-slate-600">
                      Detailed placement diagrams for metallic strips (copper, brass), color therapy, and sacred spatial balancing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-[#FAF8F5] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">60-to-90 Min Live Video Session</h3>
                    <p className="mt-0.5 text-xs text-slate-600">
                      1-on-1 walkthrough with Certified Vastu Consultant Rishwa Sinha with recorded video and live Q&amp;A.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-[#FAF8F5] p-8 shadow-sm lg:col-span-5">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Book Your Remote Audit
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Share your floor plans today. Receive your comprehensive report within 2–4 business days.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                  <span>No physical site visit needed</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                  <span>Convenient weekend &amp; evening video slots</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                  <span>Transparent scientific methodology</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-3.5 text-center text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                >
                  Schedule Remote Consultation
                </button>
                <div className="mt-3 text-center">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Or quick chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXTENDED FAQS (Warm Cream Background) */}
      <section className="border-t border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              GOT QUESTIONS?
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Everything you need to know about remote CAD analysis and online Vastu consultations.
            </p>
          </div>

          <div className="mt-12 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-amber-200/70 bg-white transition hover:border-amber-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-slate-900 transition hover:text-amber-800"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <HelpCircle className="h-5 w-5 shrink-0 text-amber-700" />
                  </button>
                  {isOpen && (
                    <div className="border-t border-amber-200/60 bg-[#FAF8F5]/60 px-5 pt-3 pb-5 text-xs sm:text-sm leading-relaxed text-slate-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER (Dark Slate-950) */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Harmonize Your Property Without Breaking a Single Wall
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Schedule your remote consultation with Certified Vastu Consultant Rishwa Sinha.
            Accurate blueprint diagnosis, non-demolition remedies, and complete peace of mind.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule Online Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" />
              <span>Call {businessConfig.displayPhone || '+91 70910 21616'}</span>
            </a>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Online Vastu Consultation"
      />
    </>
  )
}

