import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { servicesData } from '@/data/services'
import { siteConfig } from '@/config/site'

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <Link to="/services" className="mt-4 inline-block text-amber-400 underline">
          Back to all services
        </Link>
      </div>
    )
  }

  const canonicalUrl = `${siteConfig.url}/services/${service.slug}`

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.shortDescription}
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: service.title, url: `/services/${service.slug}` },
        ]}
      />
      <ServiceSchema
        name={service.title}
        description={service.fullDescription}
        serviceType={service.category}
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      {service.faqs && service.faqs.length > 0 && <FAQSchema items={service.faqs} />}

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border-b border-slate-800 pb-8">
          <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
            {service.category} Consultation
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-slate-100 sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            {service.fullDescription}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12">
          <h2 className="mb-6 font-serif text-xl font-bold text-amber-400">
            Key Outcomes &amp; Strategic Benefits
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-xs text-slate-200 sm:text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-12">
          <h2 className="mb-6 font-serif text-xl font-bold text-amber-400">
            Consultation Methodology
          </h2>
          <div className="space-y-4">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-slate-800/80 bg-slate-900/30 p-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">{step.title}</h3>
                  <p className="mt-1 text-xs text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-amber-400" />
            <h2 className="font-serif text-lg font-bold text-slate-100">Audit Deliverables</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 text-xs text-slate-300 sm:grid-cols-2">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-amber-400" />
              <h2 className="font-serif text-xl font-bold text-slate-100">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                  <h3 className="text-sm font-semibold text-amber-300">{faq.question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 sm:text-sm"
          >
            <span>Book This Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
