import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  Building2,
  Globe2,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { locationsData } from '@/data/locations'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'

export const LocationsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Vastu Consultation Locations in Bangalore | 7Rays"
        description="Find verified Astro-Vastu consultation coverage across Bengaluru: Indiranagar, HSR Layout, Koramangala, Whitefield, and surrounding hubs. On-site property audits."
        canonicalUrl={`${siteConfig.url}/locations/`}
      />
      <BreadcrumbSchema items={[{ name: 'Bangalore Locations', url: '/locations/' }]} />

      {/* 1. HERO SECTION (Dark Luxury with Architectural Hero Image) */}
      <section className="relative min-h-[540px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-vastu.webp"
            alt="Bangalore City skyline and modern architectural spatial planning"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1376}
            height={768}
            className="h-full w-full object-cover object-center brightness-[0.38]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="transition hover:text-amber-300">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-500" />
            <span aria-current="page" className="text-amber-300 font-medium">Locations</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Heading, Subtitle & Buttons */}
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>BENGALURU LOCALITIES • SERVICE COVERAGE</span>
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                Bangalore Regional{' '}
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Consultation Desks
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                7Rays Astro Vastu provides scheduled on-site residential and commercial audits across Bangalore’s major tech corridors and residential hubs, addressing specific urban architectural constraints.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 text-xs font-medium text-amber-200">
                <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Single registered headquarters in Dasarahalli, Bengaluru (560024)</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/locations/bangalore"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Explore Bangalore Master Hub</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services/online-vastu-consultation"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
                >
                  <Globe2 className="h-4 w-4 text-amber-400" />
                  <span>Pan-India Remote Audits</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Quality Preview Card (Visible on Desktop) */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="rounded-2xl border border-amber-400/30 bg-slate-900/80 p-7 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-400 uppercase">
                    <Sparkles className="h-3.5 w-3.5" />
                    City-Wide Coverage
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                    On-Site + CAD
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>On-Site Bangalore Visits:</strong> North, South, East, and West Bengaluru residential &amp; corporate enclaves.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>Non-Demolition Protocol:</strong> Practical metallic inlay strips, crystal placements &amp; room-use balancing.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong>Certified Lead Consultant:</strong> Direct 1-on-1 consultations led by Rishwa Sinha (5+ years verified).
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                  <p className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider">Metropolitan Coverage</p>
                  <p className="mt-1 text-xs text-slate-300">Bengaluru on-site audits + nationwide remote CAD consultations for Mumbai, Delhi-NCR, Hyderabad, Pune &amp; Kolkata.</p>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                  <span>Questions? Direct Desk:</span>
                  <a href={`tel:${businessConfig.phone || '+91 70910 21616'}`} className="font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1">
                    <PhoneCall className="h-3 w-3" /> {businessConfig.displayPhone || '+91 70910 21616'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & HEADQUARTERS NOTICE (Warm Cream Background) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-800">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-medium text-slate-800">Bangalore Locations</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
            <span>
              Single Registered Headquarters: <strong>Dasarahalli, Bengaluru (560024)</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 2.5 REGIONAL HUBS (PAN-INDIA REMOTE CONSULTATION) */}
      <section className="border-b border-amber-200/60 bg-[#FBF9F5] py-14 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">PAN-INDIA REMOTE CONSULTATION HUBS</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">Metropolitan Consultation Desks</h2>
            <p className="mt-3 text-sm text-slate-600">Property-specific online Vastu reviews across major metropolitan regions. Consult with Certified Vastu Consultant Rishwa Sinha from your architectural floor plan.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'mumbai', name: 'Mumbai', desc: 'High-rise apartments, compact modular layouts, sea-facing flats & BKC offices.' },
              { slug: 'delhi-ncr', name: 'Delhi-NCR', desc: 'Multi-level builder floors, basements, farmhouses & Gurugram/Noida workspaces.' },
              { slug: 'hyderabad', name: 'Hyderabad', desc: 'Gated community villas, road-approach geometry & HITEC City offices.' },
              { slug: 'pune', name: 'Pune', desc: 'Sloped-site properties, WFH home-offices, duplexes & PCMC facilities.' },
              { slug: 'kolkata', name: 'Kolkata', desc: 'Ancestral & heritage courtyard homes, high-rises in New Town & Salt Lake offices.' },
            ].map((hub) => (
              <div key={hub.slug} className="flex flex-col justify-between rounded-2xl border border-amber-200/70 bg-white p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-800">
                      Remote Vastu
                    </span>
                    <span className="text-[11px] font-medium text-slate-600">Video + CAD Overlay</span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-slate-900">{hub.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{hub.desc}</p>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <Link
                    to={`/locations/${hub.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 transition hover:text-amber-950"
                  >
                    <span>View {hub.name} Consultation Guidance</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOCATIONS DIRECTORY (Clean White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              LOCAL HUBS DIRECTORY
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Active Bangalore On-Site Territories
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Select your locality below to understand specific architectural challenges, common apartment defects, and on-site audit availability:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {locationsData.map((loc) => (
              <div
                key={loc.id}
                className="flex flex-col justify-between rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-2xs transition hover:border-amber-400 hover:bg-white hover:shadow-md sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-800">
                      {loc.region}
                    </span>
                    <span className="text-xs font-medium text-slate-600">
                      Pincodes: {loc.pincodes.join(', ')}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900">{loc.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {loc.metaDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {loc.popularAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-600"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 transition hover:text-amber-950"
                  >
                    <span>View {loc.name} Consultation Protocol</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PRE-FOOTER SUNSET VILLA BANNER (With Hero/Footer Image & Glassmorphism Quote) */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.webp"
          width={1376}
          height={768}
          alt="Luxury architectural villa sunset for Bangalore Vastu consultations"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: Heading & Buttons */}
            <div className="space-y-6 text-center lg:col-span-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
                <span>ON-SITE &amp; REMOTE VASTU AUDITS • PAN-INDIA</span>
              </div>
              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
                Need an On-Site Vastu Audit <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Anywhere in Bangalore or Across India?
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Consult directly with Certified Vastu Consultant Rishwa Sinha. We travel across Bengaluru for in-depth residential, commercial, and industrial property audits, and provide remote CAD reviews nationwide.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Schedule Bangalore Visit</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/locations/bangalore"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
                >
                  <Building2 className="h-4 w-4 text-amber-400" />
                  <span>Bangalore Authority Hub</span>
                </Link>
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
                  Physical on-site audits conducted throughout Bengaluru. Nationwide digital floor plan analysis available for clients across India.
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
            <Link to="/locations/bangalore" className="hover:text-amber-300">Bangalore Authority Hub</Link>
            <Link to="/services/online-vastu-consultation/" className="hover:text-amber-300">Pan-India Online Consultation</Link>
            <Link to="/consultant/rishwa-sinha/" className="hover:text-amber-300">Consultant Profile</Link>
            <Link to="/case-studies/" className="hover:text-amber-300">Illustrative Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  )
}
