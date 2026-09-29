import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Building,
  Home,
  Check,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'

export const NonDemolitionVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/vastu/non-demolition`

  const faqs = [
    {
      question: 'What is Non-Demolition Vastu consultation?',
      answer:
        'Non-demolition Vastu is a modern, scientific application of classical Vastu Shastra that balances directional and energetic flaws in a built property using metallic inlays (brass, copper, aluminium, zinc, iron), elemental color therapy, lighting frequencies, and sacred geometric placements without breaking walls or altering architectural structures.',
    },
    {
      question: 'Can Vastu doshas be genuinely balanced without demolition?',
      answer:
        'Yes. In classical Vastu texts, energy flow is governed by the Panchatattva (Five Elements) and directional attributes. Physical demolition is rarely mandatory; elemental imbalances can be neutralized at the subtle energetic boundary using targeted elemental strips, natural minerals, and directional recalibration.',
    },
    {
      question: 'Is non-demolition Vastu suitable for rented apartments or leased offices?',
      answer:
        'It is ideal for rented properties and leased corporate spaces. Because no structural modification, brickwork cutting, or permanent civil work is executed, tenants can implement remedies without violating lease terms or forfeiting security deposits.',
    },
    {
      question: 'What tools and materials are used in non-demolition corrections?',
      answer:
        'Consultations prescribe specialized metallic boundary strips (copper for East/South-East, brass for South/South-West, aluminium for North-West, stainless steel for North), directional pyramids, crystal grids, mirror placements, and therapeutic spectrum color frequencies.',
    },
    {
      question: 'How quickly can non-demolition Vastu remedies be implemented?',
      answer:
        'Most non-demolition remedies can be installed within 24 to 48 hours following the delivery of your CAD directional audit and remedy blueprint, minimizing disruption to daily living or commercial operations.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Non-Demolition Vastu Consultation & Remedies | 7Rays Astro Vastu"
        description="Scientific non-demolition Vastu remedies for apartments, rented homes, and corporate offices. Balance the 16 Vastu zones with metallic inlays and zero structural damage."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Vastu Services', url: '/vastu-services' },
          { name: 'Non-Demolition Vastu', url: '/vastu/non-demolition' },
        ]}
      />
      <ServiceSchema
        name="Non-Demolition Vastu Consultation & Elemental Remedies"
        description="Scientific Vastu balancing without breaking walls or structural civil alteration using metallic boundary inlays, color therapy, and directional realignment."
        serviceType="Vastu Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <section className="border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              <span>ZERO STRUCTURAL DESTRUCTION</span>
            </div>

            <h1 className="font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl">
              Non-Demolition Vastu &amp; <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Elemental Remedies
              </span>
            </h1>

            <p className="mt-6 text-sm leading-relaxed font-light text-slate-300 sm:text-base">
              Achieve spatial harmony and directional balance across your home or business without
              breaking a single brick, tearing down walls, or altering completed interior designs.
            </p>

            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Request Non-Demolition Consultation</span>
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
                What is Non-Demolition Vastu?
              </h2>
              <div className="mt-4 rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-5 text-sm leading-relaxed text-slate-800">
                <strong>Direct Answer:</strong> Non-demolition Vastu is the specialized methodology
                of correcting directional, elemental, and subtle energetic imbalances within a
                property without carrying out civil demolition or structural modifications. It
                relies on balancing the <strong>Five Elements (Panchatattva)</strong> across 16
                compass zones using authentic metallic inlay strips (copper, brass, aluminium,
                zinc), specific color frequencies, lighting recalibrations, and spatial activity
                realignments.
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Traditional Vastu Shastra texts emphasize that energy distortion occurs at the
                boundary interface between space and substance. By re-establishing energetic
                equilibrium at these junction points, property owners experience harmonious living
                and workplace productivity while preserving their architectural investments.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm lg:col-span-5">
              <h3 className="text-base font-bold text-slate-900">Key Pillars of Zero-Demolition</h3>
              <ul className="mt-4 space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Elemental Inlays:</strong> Metallic strips embedded at skirting levels
                    to seal energy leaks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Color Balancing:</strong> Chromo-energetic wall treatments aligning with
                    zonal planetary rulers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Spatial Reallocation:</strong> Reorienting work desks, beds, and heavy
                    storage without moving walls.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Subtle Boundary Corrections:</strong> Neutralizing negative entrance
                    padas via metal thresholds.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Elements & Metallic Remedy System */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              REMEDY METHODOLOGY
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Scientific Elemental Balancing Across 16 Zones
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every direction correlates with one of the Five Elements (Water, Air, Fire, Earth,
              Space) and specific metal conductivity profiles:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">North &amp; North-East</h3>
              <p className="mt-1 text-xs font-semibold text-blue-600">Water Element (Jal Tattva)</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Remedied with stainless steel or aluminium inlays, blue/white color accents, and
                water frequency balancing to stimulate clarity and career opportunities.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">East &amp; South-East</h3>
              <p className="mt-1 text-xs font-semibold text-emerald-600">
                Air &amp; Fire (Vayu &amp; Agni)
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Corrected using pure copper wire boundaries and amber spectrum lighting to restore
                vitality, cash liquidity, and social connectivity.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Building className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">South &amp; South-West</h3>
              <p className="mt-1 text-xs font-semibold text-amber-700">
                Earth Element (Prithvi Tattva)
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Stabilized using brass inlays, earth weight balancing, and ochre/golden pigments to
                anchor leadership decisions, relationships, and financial stability.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <Home className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">West &amp; North-West</h3>
              <p className="mt-1 text-xs font-semibold text-indigo-600">
                Space &amp; Air (Akash &amp; Vayu)
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Tuned using zinc metallic strips, white or grey hues, and planetary grounding to
                enhance profitability, supportive partnerships, and banking relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Scenarios */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                PRACTICAL APPLICATIONS
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900">
                When is Non-Demolition Vastu Recommended?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Structural breaking is neither feasible nor legally permissible in modern apartment
                high-rises, leased commercial offices, or leased heritage homes. Our non-demolition
                solutions are specifically created for:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      High-Rise Gated Community Apartments
                    </h3>
                    <p className="text-xs text-slate-600">
                      Rented or owned apartments where altering columns, shear walls, or external
                      doors is strictly prohibited by society bylaws.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Corporate &amp; Tech Offices
                    </h3>
                    <p className="text-xs text-slate-600">
                      Commercial spaces where business operations cannot tolerate downtime, noise,
                      dust, or landlord friction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Completed Designer Interiors
                    </h3>
                    <p className="text-xs text-slate-600">
                      Villas or bungalows where expensive woodwork, marble flooring, and false
                      ceilings have already been installed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-8">
              <h3 className="font-serif text-xl font-bold text-slate-900">
                What You Receive in Your Remedy Blueprint
              </h3>
              <ul className="mt-6 space-y-4 text-xs text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                    1
                  </span>
                  <span>
                    <strong>16-Zone CAD Directional Blueprint:</strong> Degree-accurate spatial
                    audit of your property.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                    2
                  </span>
                  <span>
                    <strong>Metal Inlay Specifications:</strong> Exact millimeter dimensions and
                    placement coordinates for metal strips.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                    3
                  </span>
                  <span>
                    <strong>Color &amp; Lighting Schedule:</strong> Room-by-room spectral lighting
                    and decorative suggestions.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                    4
                  </span>
                  <span>
                    <strong>Occupant Chart Integration:</strong> Astro-Vastu synchronization
                    aligning room usage with personal horoscopes.
                  </span>
                </li>
              </ul>

              <div className="mt-8 border-t border-amber-200/60 pt-6">
                <Link
                  to="/contact"
                  className="block w-full rounded-lg bg-amber-600 py-3 text-center text-xs font-bold text-white shadow-md transition hover:bg-amber-700"
                >
                  Book Your Zero-Demolition Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Understanding Non-Demolition Corrections
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-400"
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

      {/* Related Services */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Explore Related Consultations
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/vastu/apartment-vastu"
              className="group rounded-xl border border-slate-200 p-5 transition hover:border-amber-400 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">
                Apartment Vastu
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Directional balancing for multi-storey residential flats and penthouses.
              </p>
            </Link>
            <Link
              to="/vastu/office-vastu"
              className="group rounded-xl border border-slate-200 p-5 transition hover:border-amber-400 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">Office Vastu</h3>
              <p className="mt-2 text-xs text-slate-600">
                Executive cabin placement and cash flow optimization for corporate teams.
              </p>
            </Link>
            <Link
              to="/vastu-services/vastu-audit"
              className="group rounded-xl border border-slate-200 p-5 transition hover:border-amber-400 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">
                Scientific Vastu Audit
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Detailed diagnostic scanning and CAD energy blueprint generation.
              </p>
            </Link>
            <Link
              to="/locations/bangalore"
              className="group rounded-xl border border-slate-200 p-5 transition hover:border-amber-400 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">
                Bangalore Services
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                On-site inspections and consultations across all Bangalore localities.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
