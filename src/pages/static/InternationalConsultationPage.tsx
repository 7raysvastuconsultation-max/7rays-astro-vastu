import React from 'react'
import { Link } from 'react-router-dom'
import { Globe2, ArrowRight, Clock, HelpCircle, Check } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'

export const InternationalConsultationPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/international`

  const faqs = [
    {
      question: 'How do you perform accurate Vastu audits remotely across different countries?',
      answer:
        'Remote international consultations rely on architectural CAD drawings, satellite coordinates via Google Earth, true geographic North verification, and live high-definition video walkthroughs. We cross-verify orientation down to single-degree accuracy regardless of whether the property is located in Dubai, London, New York, or Sydney.',
    },
    {
      question: 'Which time zones do you accommodate for live consultations?',
      answer:
        'We offer flexible consultation slots aligned with North American time zones (EST, CST, PST), European & UK time (GMT/BST), Gulf Standard Time (GST), Singapore Time (SGT), and Australian Eastern Time (AEST). Sessions are scheduled via our international booking calendar.',
    },
    {
      question: 'What floor plan documents are required for an overseas consultation?',
      answer:
        'Clients provide an architectural scaled floor plan (PDF, CAD, or high-res image), the exact Google Maps location pin, high-resolution photographs or video clips of key rooms, and birth data (date, precise time, place) for Astro-Vastu chart synchronization.',
    },
    {
      question: 'How are non-demolition remedies sourced internationally?',
      answer:
        'Our remedy recommendations specify universal elemental metals (copper, brass, aluminium, zinc strips), spectral light frequencies, and geometric alignments that can be purchased from local hardware/building material suppliers in your host country, or sourced through authorized international couriers.',
    },
    {
      question: 'Can you consult on pre-purchase property selection abroad?',
      answer:
        'Yes. Many NRI clients consult us prior to finalizing residential leases or purchasing real estate overseas. We evaluate short-listed property layouts to identify potential directional doshas before purchase contracts are signed.',
    },
  ]

  return (
    <>
      <SEOHead
        title="International & NRI Vastu Consultation Worldwide | 7Rays Astro Vastu"
        description="Global remote Vastu and Vedic astrology consultations for NRIs and international property owners in USA, UK, UAE, Singapore, and Australia. Accurate CAD-based remote audits."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'International Consultation', url: '/international' },
        ]}
      />
      <ServiceSchema
        name="International & NRI Remote Vastu Consultation"
        description="Remote architectural Vastu analysis, degree-accurate CAD energy mapping, and Astro-Vastu alignment for global clients across the US, UK, UAE, Australia, and Singapore."
        serviceType="International Vastu Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <section className="border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <Globe2 className="h-3.5 w-3.5 text-amber-400" />
              <span>GLOBAL &amp; NRI CONSULTANCY ARCHITECTURE</span>
            </div>

            <h1 className="font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl">
              International &amp; NRI <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Vastu &amp; Astro Consultations
              </span>
            </h1>

            <p className="mt-6 text-sm leading-relaxed font-light text-slate-300 sm:text-base">
              Bringing classical Vastu Shastra principles and planetary horoscope insights to
              residences, apartments, and corporate offices worldwide through high-precision
              satellite orientation and live video consultations.
            </p>

            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Global Remote Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Direct Answer Section */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                AEO DIRECT DEFINITION
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                How Does Remote International Vastu Work?
              </h2>
              <div className="mt-4 rounded-xl border border-l-4 border-amber-200/80 border-l-amber-500 bg-[#FAF8F5] p-5 text-sm leading-relaxed text-slate-800">
                <strong>Direct Answer:</strong> Remote international Vastu consultation combines
                architectural blueprints (CAD/PDF), satellite-verified true North coordinates, and
                live 1-on-1 video consultations to assess and balance property energy anywhere in
                the world. Through mathematical 16-zone directional dividing and occupant birth
                chart synergy, clients receive a comprehensive digital remedy report prescribing
                non-demolition corrections using readily available elemental materials.
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Whether purchasing a condo in Toronto, setting up a tech headquarters in Silicon
                Valley, leasing an apartment in Dubai Marina, or designing a villa in London, our
                remote methodology guarantees the same scientific rigor as on-site inspections.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200/80 bg-[#FAF8F5] p-6 shadow-sm lg:col-span-5">
              <h3 className="text-base font-bold text-slate-900">
                Key Pillars of Global Remote Audits
              </h3>
              <ul className="mt-4 space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Geographic Satellite Mapping:</strong> GPS latitude/longitude
                    verification of geographic true North.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Time Zone Synchronized:</strong> Live consultations tailored to your
                    local working hours.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Global Non-Demolition Remediation:</strong> Solutions using materials
                    available in your domestic market.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Bilingual Advisory:</strong> Clear English and Hindi consultations with
                    documented PDF reports.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Regions Supported */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              GLOBAL FOOTPRINT
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Regions Served with Dedicated Time-Zone Windows
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We regularly advise overseas property buyers, NRI families, and global corporate
              founders across major international hubs:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">United States &amp; Canada</h3>
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">
                Time Zones: EST, CST, MST, PST
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Specialized in single-family suburban homes, condos in major metropolitan centres
                (NYC, Bay Area, Seattle, Toronto), and tech commercial spaces.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">United Arab Emirates &amp; GCC</h3>
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Time Zones: GST (+4 GMT)</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Consultations for Dubai luxury villas, high-rise luxury towers in Downtown &amp;
                Marina, and corporate offices in Abu Dhabi, Doha, and Riyadh.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">United Kingdom &amp; Europe</h3>
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">
                Time Zones: GMT / BST / CET
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Balancing Victorian townhouses, modern suburban residences, and London financial
                consultancy suites with practical architectural adjustments.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">Singapore &amp; Southeast Asia</h3>
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Time Zones: SGT (+8 GMT)</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Expertise in HDB apartments, high-end private condominiums, and regional corporate
                headquarters across Singapore, Malaysia, and Hong Kong.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">Australia &amp; New Zealand</h3>
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Time Zones: AEST / NZST</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Tailored advisory for Sydney and Melbourne properties, addressing southern
                hemisphere solar angles and magnetic orientation nuances.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">Pre-Purchase Blueprint Review</h3>
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Global Service</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Have multiple builder plans under consideration? We evaluate candidate blueprints
                before you sign foreign real estate purchase contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Consultation Workflow */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              STEP-BY-STEP PROCESS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              The 4-Step Global Consultation Journey
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                1
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Document Submission</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Submit your scaled floor plan, precise property address/GPS pin, and birth details
                through our secure enquiry portal.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                2
              </div>
              <h3 className="mt-4 font-bold text-slate-900">CAD Energy Analysis</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Our team maps the 16 Vastu directional zones, computes entrance pada degrees, and
                evaluates personal natal horoscope charts.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                3
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Live Video Consultation</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Connect on a 60-minute interactive Zoom or Google Meet call scheduled in your local
                time zone to walk through findings.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                4
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Written Blueprint &amp; Support</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Receive your comprehensive PDF Vastu Blueprint with detailed non-demolition remedy
                specifications and 30-day email follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              COMMON QUESTIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              International Consultation FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-amber-200/70 bg-white p-6 shadow-sm transition hover:border-amber-400"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-16 text-slate-100 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Ready for a Global Vastu Consultation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Share your floor plan and coordinate a convenient time-zone slot with our principal
            consultant Rishwa Sinha.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule Your Remote Session</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/vastu/non-demolition"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-xs font-bold text-slate-200 transition hover:bg-slate-800"
            >
              <span>Learn About Non-Demolition Remedies</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
