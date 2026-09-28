import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  ArrowRight,
  Home,
  Sparkles,
  Award,
  BookOpen,
  Building2,
  Users,
  CheckCircle2,
  MessageSquare,
  HeartHandshake,
  Sun,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { PersonSchema } from '@/components/seo/schemas/PersonSchema'
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema'
import { siteConfig } from '@/config/site'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const AboutPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const whatsAppUrl = `https://wa.me/${(siteConfig.contact.whatsApp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello 7Rays Astro Vastu, I would like to schedule a consultation.'
  )}`

  return (
    <>
      <SEOHead
        title="About Rishwa Sinha | Certified Vastu Consultant | 7Rays"
        description="Learn about 7Rays Astro Vastu and founder Rishwa Sinha, Certified Vastu Consultant. Blending ancient Vedic wisdom with modern architecture and astrology across Bangalore and India."
        canonicalUrl={`${siteConfig.url}/about`}
      />
      <BreadcrumbSchema items={[{ name: 'About Us', url: '/about' }]} />
      {/* Person entity — canonical authority page for Rishwa Sinha */}
      <PersonSchema
        name="Rishwa Sinha"
        jobTitle="Certified Vastu Consultant & Founder"
        description="Rishwa Sinha is a Certified Vastu Consultant and Founder of 7Rays Astro Vastu with 5+ years of experience providing non-demolition Vastu Shastra and Vedic Astrology consultations for homes, offices, commercial spaces and industrial units in Bengaluru, India."
        url={`${siteConfig.url}/about`}
        image={`${siteConfig.url}/images/rishwa-sinha.jpg`}
        knowsAbout={[
          'Vastu Shastra',
          'Residential Vastu',
          'Apartment Vastu',
          'Commercial Vastu',
          'Office Vastu',
          'Corporate Vastu',
          'Industrial Vastu',
          'Vastu Audit',
          'Vedic Astrology',
          'Birth Chart Analysis',
          'Career Astrology',
          'Marriage Astrology',
          'Business Astrology',
          'Geopathic Stress Analysis',
          'Non-Demolition Energy Alignment',
        ]}
      />
      {/* Organization entity — bidirectional entity co-reference with Person */}
      <OrganizationSchema />

      {/* 1. HERO SECTION (Matching Mockup with Luxury Penthouse Background) */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden py-24 sm:py-32">
        <img
          src="/images/hero-penthouse.jpg"
          alt="Luxury penthouse interior with golden sunlight streaming through floor to ceiling windows"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width={1376}
          height={768}
          className="absolute inset-0 h-full w-full object-cover object-center brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
            <span>• ABOUT US</span>
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl lg:text-7xl">
            Ancient Wisdom. <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
              Modern Perspective.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Creating harmonious spaces for healthier, happier and more prosperous lives.
          </p>

          {/* 4 Feature Tags Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-300 sm:gap-4">
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Vastu</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Astrology</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Architecture</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Modern Living</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE STORY BEHIND 7RAYS ASTRO VASTU (Pure White Background) */}
      <section
        id="our-story"
        className="border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: Founder Portrait with Quote Banner */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <img
                  src="/images/rishwa-sinha.jpg"
                  alt="Rishwa Sinha - Certified Vastu Consultant & Founder"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-xs">
                <p className="font-serif text-sm text-slate-800 italic">
                  "Better Spaces Brighter Lives."
                </p>
                <span className="mt-1 block text-xs font-bold text-amber-800">
                  — Founder, 7Rays Astro Vastu
                </span>
              </div>
            </div>

            {/* Right: Narrative Story + 6 Value Pillars */}
            <div className="space-y-6 lg:col-span-7">
              <div>
                <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                  OUR STORY
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                  The Story Behind 7Rays Astro Vastu
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                7Rays Astro Vastu was founded with a vision to bring the timeless wisdom of Vastu
                Shastra and Vedic Astrology into modern spaces and modern lives. We believe that the
                spaces we live and work in have a profound influence on our health, relationships,
                growth and overall well-being.
              </p>

              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Our approach blends ancient principles with modern architecture, spatial planning
                and practical solutions, making Vastu relevant, accessible and effective for today's
                homes, businesses and workplaces.
              </p>

              {/* 6 Value Pillars Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
                {[
                  'Traditional Wisdom',
                  'Modern Architecture',
                  'Personalized Solutions',
                  'Practical & Implementable',
                  'People-Centric Approach',
                  'Long-Term Positive Impact',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/70 p-2.5 text-xs font-medium text-slate-800 shadow-2xs"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600" />
                    <span className="text-[11px] font-semibold sm:text-xs">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('our-approach')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
                >
                  <span>Discover Our Approach</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET OUR FOUNDER (Pure White Background) */}
      <section className="border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left: Founder Story & Signature (lg:col-span-5) */}
            <div className="space-y-5 lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                OUR FOUNDER
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Meet Our Founder
              </h2>
              <p className="font-serif text-sm leading-relaxed font-semibold text-amber-900">
                A passionate Vastu consultant and student of Vedic sciences, dedicated to creating
                harmonious spaces for modern living.
              </p>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                With a deep interest in Vastu Shastra, astrology, architecture and human well-being,
                the founder of 7Rays Astro Vastu brings together traditional knowledge and modern
                design thinking to offer practical, effective and personalized guidance for homes
                and businesses.
              </p>

              {/* Signature Block */}
              <div className="pt-3">
                <span className="font-serif text-2xl font-bold tracking-wide text-slate-900 italic">
                  Rishwa Sinha
                </span>
                <span className="block text-xs font-medium text-slate-500">
                  Certified Vastu Consultant &amp; Founder, 7Rays Astro Vastu
                </span>
              </div>
            </div>

            {/* Middle: 4 Stacked Credential Cards (lg:col-span-3) */}
            <div className="space-y-3 lg:col-span-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs transition hover:border-amber-400">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Home className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-bold text-slate-900">
                      Vastu Consultant
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Residential, Commercial &amp; Industrial
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs transition hover:border-amber-400">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-bold text-slate-900">
                      Astrology Consultant
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Personalized guidance &amp; life insights
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs transition hover:border-amber-400">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-bold text-slate-900">
                      Architecture &amp; Space Planning
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Modern and practical spatial solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs transition hover:border-amber-400">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-bold text-slate-900">
                      Client-Centric Approach
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Honest, practical and result-oriented
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Second Desk Portrait of Founder (lg:col-span-4) */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <img
                  src="/images/rishwa-sinha.jpg"
                  alt="Rishwa Sinha - Dedicated Vastu Consultant"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CREDENTIALS & EXPERTISE (5 Column Cards) */}
      <section className="border-b border-slate-200 bg-white py-18 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Credentials &amp; Expertise
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Our guidance is based on deep study, continuous learning and real-world experience.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-amber-500" />
          </div>

          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-5">
            {[
              {
                icon: Compass,
                title: 'Vastu Shastra',
                desc: 'In-depth knowledge of traditional Vastu principles',
              },
              {
                icon: Sparkles,
                title: 'Vedic Astrology',
                desc: 'Study of planetary influences and life patterns',
              },
              {
                icon: Building2,
                title: 'Architectural Sensibility',
                desc: 'Integration of Vastu with modern architecture and design',
              },
              {
                icon: BookOpen,
                title: 'Continuous Learning',
                desc: 'Ongoing study, research and practical application',
              },
              {
                icon: Award,
                title: 'Real-World Experience',
                desc: 'Guidance across residential, commercial and industrial spaces',
              },
            ].map((card, idx) => {
              const IconComp = card.icon
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-center shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition group-hover:scale-110">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xs font-bold text-slate-900 sm:text-sm">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-500">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR PHILOSOPHY: SPACES THAT SUPPORT A BETTER YOU (Matching Mockup with Zen Courtyard) */}
      <section className="border-b border-slate-200 bg-[#FAF8F5] py-20 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left Column: Stacked Core Dimensions */}
            <div className="space-y-4 lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="mb-4 block text-[11px] font-bold tracking-widest text-amber-700 uppercase">
                  5 CORE HARMONIES
                </span>
                <ul className="space-y-3 font-serif text-sm font-semibold text-slate-800">
                  <li className="flex items-center gap-2.5">
                    <Sun className="h-4 w-4 text-amber-600" />
                    <span>Spaces</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Users className="h-4 w-4 text-amber-600" />
                    <span>People</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    <span>Energy</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Compass className="h-4 w-4 text-amber-600" />
                    <span>Balance</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Award className="h-4 w-4 text-amber-600" />
                    <span>Growth</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle Column: Zen Minimalist Bonsai Courtyard Image */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                <img
                  src="/images/about-zen-courtyard.jpg"
                  alt="Minimalist indoor Zen garden courtyard with peaceful Bonsai tree and sunlight"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Philosophy Narrative & CTA */}
            <div className="space-y-5 lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Spaces That Support a Better You
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We believe that every space carries energy. When designed and aligned correctly, it
                can support better health, peace of mind, stronger relationships, greater focus and
                sustained growth.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Our goal is to create environments that not only look good but also feel good —
                spaces that truly support the people who live and work in them.
              </p>
              <div className="pt-2">
                <Link
                  to="/vastu-services"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH (4 Step Horizontal Workflow) */}
      <section
        id="our-approach"
        className="border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              A balanced blend of tradition, science and practical application.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-amber-500" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                image: '/images/services/vastu-audit.jpg',
                title: 'Traditional Knowledge',
                desc: 'Rooted in authentic Vastu principles and Vedic wisdom.',
              },
              {
                step: '02',
                image: '/images/services/corporate-vastu.jpg',
                title: 'Modern Perspective',
                desc: 'Integrated with modern architecture and lifestyle.',
              },
              {
                step: '03',
                image: '/images/services/residential-vastu.jpg',
                title: 'Personalized Guidance',
                desc: 'Tailored recommendations for your unique needs.',
              },
              {
                step: '04',
                image: '/images/services/commercial-vastu.jpg',
                title: 'Practical Implementation',
                desc: 'Realistic, effective and implementable solutions.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg"
              >
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-md bg-slate-950/80 font-serif text-xs font-bold text-amber-300 backdrop-blur-xs">
                    {item.step}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm font-bold text-slate-900 transition group-hover:text-amber-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6B. FIRST-HAND FIELD EVIDENCE & TOOLING */}
      <section className="border-b border-slate-200 bg-[#FAF8F5] py-20 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              GENUINE FIRST-HAND EVIDENCE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Authentic Tooling, Materials &amp; Local Presence
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We ground our consultations in verified diagnostic instruments, high-purity remedial
              metals, and an active physical practice in Bengaluru.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-amber-500" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Asset 1: Office Signboard */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/evidence/7rays-bangalore-office-signboard.webp"
                  alt="Conceptual rendering of 7Rays Vastu Consultant signage at Dasarahalli, Bengaluru"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-xs">
                  Office Premises
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-sm font-bold text-slate-900">
                  Bengaluru Headquarters
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Registered physical consulting office at Balaji Layout, Dasarahalli, Bengaluru
                  560024.
                </p>
              </div>
            </div>

            {/* Asset 2: Diagnostic Instruments */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/evidence/vastu-diagnostic-instruments.webp"
                  alt="Diagnostic instruments overview: digital compass, EMF meter, and dowsing rods"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-xs">
                  Field Instruments
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-sm font-bold text-slate-900">
                  Calibrated Field Instruments
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Suunto 0° calibrated digital compass, Tenmars TM-191 EMF meter, and solid brass
                  dowsing rods for environmental scans.
                </p>
              </div>
            </div>

            {/* Asset 3: Remedial Metal Strips */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/evidence/vastu-remedial-metal-strips.webp"
                  alt="Elemental metal strips for non-demolition remedies: Brass, Copper, Zinc, Lead"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-xs">
                  Elemental Inlays
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-sm font-bold text-slate-900">
                  Elemental Metal Inlays
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Precision-cut Brass, Copper, Zinc, and Lead strips used for non-demolition
                  boundary rectifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE 7RAYS ASTRO VASTU? (Dark Luxury Architectural Villa Section) */}
      <section className="relative overflow-hidden border-b border-amber-500/20 bg-slate-950 py-20 text-slate-100 sm:py-24">
        {/* Ambient Evening Architecture Backdrop */}
        <img
          src="/images/cta-sunset-villa.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-screen"
        />
        <div className="pointer-events-none absolute inset-0 bg-slate-950/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              WHY CHOOSE US
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-100 sm:text-4xl">
              Why Choose 7Rays Astro Vastu?
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
              A trusted partner for your Vastu and astrology journey.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-amber-500" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Holistic Approach',
                desc: 'Vastu + Astrology balance for complete spatial and personal alignment.',
              },
              {
                title: 'Customized Solutions',
                desc: 'Fully personalised analysis adapted to your exact floor plan, property type and goals.',
              },
              {
                title: 'Practical & Non-Destructive',
                desc: 'Zero demolition needed; scientific elemental balancing remedies.',
              },
              {
                title: 'Zero Negative Remedies',
                desc: 'Positive, verified remedies that elevate flow without fear or dogma.',
              },
              {
                title: 'Real-World Experience',
                desc: 'Over 5+ years of dedicated spatial energy research and practical consultations across Bangalore and India.',
              },
              {
                title: 'Support at Every Step',
                desc: 'Dedicated post-consultation assistance and ongoing implementation guidance.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xs transition hover:border-amber-400/60"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-slate-100">{card.title}</h3>
                </div>
                <p className="mt-2 pl-11 text-xs leading-relaxed text-slate-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR JOURNEY IN NUMBERS (White Background) */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Practice Pillars
            </h2>
            <p className="mt-1.5 text-xs text-slate-600 sm:text-sm">
              Rooted in verified Vedic principles and modern architectural science.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/50 p-5 text-center shadow-2xs">
              <span className="font-serif text-3xl font-bold text-amber-800 sm:text-4xl">5+</span>
              <span className="mt-1 text-xs font-semibold text-slate-700">Years of Experience</span>
              <span className="text-[11px] text-slate-500">Dedicated Practice</span>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/50 p-5 text-center shadow-2xs">
              <span className="font-serif text-2xl font-bold text-amber-800 sm:text-3xl">
                Certified
              </span>
              <span className="mt-1 text-xs font-semibold text-slate-700">Vastu Consultant</span>
              <span className="text-[11px] text-slate-500">Professional Rigor</span>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/50 p-5 text-center shadow-2xs">
              <span className="font-serif text-3xl font-bold text-amber-800 sm:text-4xl">
                16-Zone
              </span>
              <span className="mt-1 text-xs font-semibold text-slate-700">Energy Analysis</span>
              <span className="text-[11px] text-slate-500">Precision Blueprinting</span>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/50 p-5 text-center shadow-2xs">
              <span className="font-serif text-2xl font-bold text-amber-800 sm:text-3xl">
                Non-Demolition
              </span>
              <span className="mt-1 text-xs font-semibold text-slate-700">Remedial Approach</span>
              <span className="text-[11px] text-slate-500">Where Applicable</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRACTICE LEADERSHIP & EXPERTISE (White Background) */}
      <section className="border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Consultancy Leadership
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Led by Certified Vastu Consultant Rishwa Sinha with 5+ years of dedicated practice in
              Bengaluru.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-amber-500" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Home,
                title: 'Residential Vastu',
                desc: 'Apartment and independent home layout alignment for family harmony and health.',
              },
              {
                icon: Building2,
                title: 'Commercial Vastu',
                desc: 'Strategic office, retail, and boardroom energy optimization for business growth.',
              },
              {
                icon: Sparkles,
                title: 'Vedic Astrology',
                desc: 'Birth chart and planetary timing analysis for decisive life clarity.',
              },
              {
                icon: HeartHandshake,
                title: 'Vastu Audits',
                desc: 'Comprehensive 16-zone blueprint diagnosis with zero civil demolition.',
              },
            ].map((domain, idx) => {
              const DomainIcon = domain.icon
              return (
                <div
                  key={idx}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <DomainIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{domain.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{domain.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. PRE-FOOTER SUNSET CTA BANNER */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <img
          src="/images/cta-sunset-villa.jpg"
          alt="Luxury architectural terrace overlooking golden sunset horizon"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-6 text-center lg:col-span-9 lg:text-left">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                CONNECT WITH 7RAYS
              </span>

              <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl lg:text-6xl">
                Let's Create a Harmonious <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Space Together
                </span>
              </h2>

              <p className="max-w-xl text-sm leading-relaxed font-light text-slate-200 sm:text-base">
                Book a personalized consultation with 7Rays Astro Vastu.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:from-amber-300 hover:to-amber-500"
                >
                  <span>Book Your Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div className="hidden border-l border-white/20 pl-8 text-left lg:col-span-3 lg:block">
              <ul className="space-y-4 font-serif text-sm tracking-wide text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Homes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Workplaces</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Grow Spaces</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Possibilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="About Page Inquiry"
      />
    </>
  )
}
