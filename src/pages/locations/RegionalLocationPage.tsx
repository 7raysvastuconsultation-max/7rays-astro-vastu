import React, { useState } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { ArrowRight, Building2, ChevronRight, Compass, MapPin, MessageSquare, PhoneCall, Plus, Minus, ShieldCheck } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'
import { regionalLocations } from '@/data/regionalLocations'

export const RegionalLocationPage: React.FC = () => {
  const { slug: paramSlug } = useParams<{ slug: string }>()
  const { pathname } = useLocation()
  const pathSlug = pathname.replace(/^.*\/locations\//, '').replace(/\/$/, '')
  const slug = paramSlug || pathSlug
  const location = regionalLocations.find((item) => item.slug === slug)
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  if (!location) {
    return typeof window === 'undefined' ? null : <Navigate to="/404/" replace />
  }

  const canonicalUrl = `${siteConfig.url}/locations/${location.slug}/`
  const whatsAppUrl = `https://wa.me/${(siteConfig.contact.whatsApp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello 7Rays Astro Vastu, I would like to ask about a Vastu consultation for my property in ${location.name}.`)}`

  return (
    <>
      <SEOHead title={location.title} description={location.description} canonicalUrl={canonicalUrl} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Locations', url: '/locations/' },
        { name: location.name, url: `/locations/${location.slug}/` },
      ]} />
      <ServiceSchema
        name={`Online Vastu Consultation for ${location.name}`}
        description={location.description}
        serviceType="Online Vastu Consultation"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
        areaServed={[location.name, location.region, 'India']}
      />
      <FAQSchema items={location.faqs} />

      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-amber-300">Home</Link><ChevronRight className="h-3 w-3" />
            <Link to="/locations/" className="hover:text-amber-300">Locations</Link><ChevronRight className="h-3 w-3" />
            <span aria-current="page" className="text-slate-200">{location.name}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase">
              <MapPin className="h-3.5 w-3.5" /> {location.region} · REMOTE CONSULTATION
            </div>
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{location.title.split(' | ')[0]}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{location.intro}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-amber-200"><ShieldCheck className="h-4 w-4" /> Registered headquarters in Bengaluru · remote consultations available across India</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 hover:from-amber-300 hover:to-amber-500">Ask about a consultation <ArrowRight className="h-4 w-4" /></button>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-emerald-500/50 hover:text-emerald-300"><MessageSquare className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 text-xs sm:px-6 lg:px-8">
          <Building2 className="h-4 w-4 text-amber-700" />
          <span><strong>Service-area notice:</strong> 7Rays has one registered headquarters in Dasarahalli, Bengaluru (560024), not a branch in {location.name}. Remote consultation is available; on-site availability is confirmed individually.</span>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">{location.focusLabel}</span><h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">A property-first review, not a one-size-fits-all city prescription</h2><p className="mt-4 text-sm leading-relaxed text-slate-600">{location.focus}</p></div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {location.sections.map((section) => <article key={section.title} className="rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 sm:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-800"><Compass className="h-5 w-5" /></div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-amber-800 uppercase">{section.eyebrow}</p>
              <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">{section.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#FBF9F5] py-14 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div><p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">AREAS WE CAN SERVE REMOTELY</p><h2 className="mt-2 font-serif text-2xl font-bold">Across {location.name} and nearby areas</h2><p className="mt-3 text-sm text-slate-600">These are examples of localities where clients can request remote consultation. They are not 7Rays branch offices.</p><ul className="mt-5 flex flex-wrap gap-2">{location.localities.map((area) => <li key={area} className="rounded-full border border-amber-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">{area}</li>)}</ul></div>
          <div><p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">RELATED GUIDANCE</p><h2 className="mt-2 font-serif text-2xl font-bold">Continue exploring</h2><div className="mt-5 space-y-3">{location.services.map((service) => <Link key={service.href} to={service.href} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-amber-400"><span><strong className="block text-sm text-slate-900">{service.label}</strong><span className="mt-1 block text-xs text-slate-600">{service.description}</span></span><ArrowRight className="ml-3 h-4 w-4 shrink-0 text-amber-700" /></Link>)}</div></div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">CLEAR, PRACTICAL ANSWERS</p><h2 className="mt-2 text-center font-serif text-3xl font-bold">{location.name} Vastu consultation FAQs</h2>
          <div className="mt-9 space-y-3">{location.faqs.map((faq, index) => { const expanded = openFaq === index; return <article key={faq.question} className="overflow-hidden rounded-xl border border-amber-200/70 bg-[#FAF8F5]"><h3><button className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-semibold" aria-expanded={expanded} onClick={() => setOpenFaq(expanded ? null : index)}><span>{faq.question}</span>{expanded ? <Minus className="h-4 w-4 shrink-0 text-amber-700" /> : <Plus className="h-4 w-4 shrink-0 text-amber-700" />}</button></h3>{expanded && <p className="border-t border-amber-100 bg-white px-4 py-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>}</article> })}</div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6"><h2 className="font-serif text-3xl font-bold">Ask about a Vastu consultation for your {location.name} property</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">Share your floor plan and property details. We’ll confirm the right consultation format and the information needed before making recommendations.</p><div className="mt-7 flex flex-wrap justify-center gap-4"><button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-bold text-slate-950 hover:bg-amber-400">Contact 7Rays <ArrowRight className="h-4 w-4" /></button><a href={`tel:${businessConfig.phone || '+91 70910 21616'}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:border-amber-400"><PhoneCall className="h-4 w-4 text-amber-400" /> {businessConfig.displayPhone || '+91 70910 21616'}</a></div><div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-slate-800 pt-5 text-xs text-slate-400"><Link to="/locations/" className="hover:text-amber-300">All location pages</Link><Link to="/services/online-vastu-consultation/" className="hover:text-amber-300">Pan-India online consultation</Link><Link to="/consultant/rishwa-sinha/" className="hover:text-amber-300">Consultant profile</Link></div></div></section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialService={`Online Vastu Consultation - ${location.name}`} />
    </>
  )
}
