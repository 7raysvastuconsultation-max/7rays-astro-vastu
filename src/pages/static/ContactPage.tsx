import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Upload,
  Plus,
  Minus,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { siteConfig } from '@/config/site'
import { trackConversion, submitEnquiry } from '@/utils/analytics'
import { GoogleMapEmbed } from '@/components/common/GoogleMapEmbed'

export const ContactPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/contact`
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    location: '',
    service: '',
    propertySize: '',
    consultationType: '',
    message: '',
    agreePolicy: true,
  })

  const whatsAppUrl = siteConfig.contact.phone
    ? `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello 7Rays Astro Vastu, I would like to schedule a consultation.'
      )}`
    : ''

  const googleMapsUrl = siteConfig.contact.googleMapsUrl

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitEnquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      propertyType: formData.propertyType,
      location: formData.location,
      serviceRequired: formData.service,
      approxSize: formData.propertySize,
      consultationType: formData.consultationType,
      message: formData.message,
      fileName: fileName || undefined,
      source: 'Contact Page Form',
    })
    setSubmitted(true)
  }

  const faqs = [
    {
      question: 'How do I book a consultation?',
      answer:
        'You can book directly by filling out the consultation form above or requesting an appointment via our inquiry channels. Our team reviews your property drawings and schedules an inspection slot within 24 hours.',
    },
    {
      question: 'Do you offer online consultations?',
      answer:
        'Yes. We offer complete digital Vastu consultations across India and globally. Simply provide your architectural floor plan or CAD drawing, and we conduct our directional 16-zone analysis via video conference.',
    },
    {
      question: 'What types of properties do you consult for?',
      answer:
        'We consult for residential homes, apartments, penthouses, villas, commercial corporate offices, retail showrooms, restaurants, hotels, warehouses, and industrial manufacturing plants.',
    },
    {
      question: 'How long does a consultation take?',
      answer:
        'On-site visits generally take 2 to 3 hours depending on property dimensions. Online CAD blueprint audits are typically completed and delivered within 2 to 4 business days.',
    },
    {
      question: 'Do you provide a detailed report?',
      answer:
        'Yes. Every consultation includes a comprehensive Vastu Energy Audit Report featuring your 16-zone directional analysis, identified discrepancies, and step-by-step non-demolition remedies.',
    },
    {
      question: 'What is the consultation fee?',
      answer:
        'Consultation fees vary depending on the property type, total square footage, and whether you require an online blueprint audit or an on-site visit. Contact us with your property details for an upfront quote.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Contact Us | Vastu Consultation in Bangalore | 7Rays"
        description="Book your Residential, Commercial, or Astrology consultation with 7Rays Astro Vastu. Fast response via WhatsApp or our online booking form."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <LocalBusinessSchema />

      {/* 1. HERO SECTION (Luxury Corporate Reception with Logo on Wall) */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:min-h-[580px] sm:pt-36 sm:pb-20">
        {/* Background Image with Dark Vignette & Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-reception-lobby.jpg"
            alt="7Rays Astro Vastu Reception Lobby"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={896}
            height={1200}
            className="h-full w-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Column: Heading & Content */}
          <div className="max-w-2xl py-6 sm:py-10">
            {/* Tag Badge */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.25em] text-amber-400 uppercase">
                GET IN TOUCH
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl leading-[1.15] font-bold text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Create a
              <br />
              Harmonious Space Together.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Book a consultation with 7Rays Astro Vastu and take the first step towards a
              healthier, happier and more prosperous life.
            </p>

            {/* Feature Pills Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 sm:gap-6 sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>Consult</span>
              </div>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-amber-400" />
                <span>Plan</span>
              </div>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>Transform</span>
              </div>
            </div>
          </div>

          {/* Right Column: Wall Quote Card */}
          <div className="hidden border-l border-amber-500/30 pl-8 lg:block">
            <div className="text-right">
              <p className="font-serif text-sm font-medium tracking-wide text-amber-200 italic">
                &ldquo;Better
                <br />
                Spaces
                <br />
                Brighter
                <br />
                Lives&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SECTION: 2 COLUMNS (Send Us a Message + Get in Touch) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Consultation Form (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                BOOK A CONSULTATION
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Share your details and our team will get back to you shortly to schedule your
                consultation. You can also reach us directly via phone or WhatsApp.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/40 bg-emerald-50/80 p-8 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-emerald-950">
                    Thank You! Message Received.
                  </h3>
                  <p className="mt-2 text-xs text-emerald-800">
                    Our lead Vastu consultant will review your property requirements and connect
                    with you within 24 hours.
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-500"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Full Name <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Phone Number <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        placeholder="+91 Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Property Type */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Email Address <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Property Type <span className="text-amber-700">*</span>
                      </label>
                      <select
                        required
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                      >
                        <option value="">Select property type</option>
                        <option value="Apartment / Flat">Apartment / Flat</option>
                        <option value="Independent House / Villa">Independent House / Villa</option>
                        <option value="Corporate Office / Workspace">
                          Corporate Office / Workspace
                        </option>
                        <option value="Retail Store / Showroom">Retail Store / Showroom</option>
                        <option value="Hotel / Restaurant">Hotel / Restaurant</option>
                        <option value="Industrial Unit / Warehouse">
                          Industrial Unit / Warehouse
                        </option>
                        <option value="Plot / Land Layout">Plot / Land Layout</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Location / Area & Service Interested In */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Location / Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Indiranagar, Bangalore"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Service Interested In <span className="text-amber-700">*</span>
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                      >
                        <option value="">Select a service</option>
                        <option value="Residential Vastu">Residential Vastu</option>
                        <option value="Commercial Vastu">Commercial Vastu</option>
                        <option value="Industrial Vastu">Industrial Vastu</option>
                        <option value="Vastu Audit">Vastu Audit</option>
                        <option value="Astrology Consultation">Astrology Consultation</option>
                        <option value="Complete Astro-Vastu Alignment">
                          Complete Astro-Vastu Alignment
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Approx Property Size & Preferred Consultation Type */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Approx. Property Size (sq ft)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1200"
                        value={formData.propertySize}
                        onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Preferred Consultation Type <span className="text-amber-700">*</span>
                      </label>
                      <select
                        required
                        value={formData.consultationType}
                        onChange={(e) =>
                          setFormData({ ...formData, consultationType: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                      >
                        <option value="">Online / On-site / Either</option>
                        <option value="On-site Consultation (Bangalore)">
                          On-site Consultation (Bangalore)
                        </option>
                        <option value="Online CAD Blueprint Audit">
                          Online CAD Blueprint Audit
                        </option>
                        <option value="Either / Flexible">Either / Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Message (Optional) */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us more about your requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Row 6: Upload Floor Plan / Images */}
                  <div className="relative rounded-xl border border-dashed border-amber-300 bg-[#FAF8F5] p-4 text-center transition hover:border-amber-400 hover:bg-white">
                    <input
                      type="file"
                      id="file-upload"
                      onChange={handleFileChange}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                        <Upload className="h-4 w-4" />
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-slate-800">
                          {fileName ? fileName : 'Upload Floor Plan / Images (Optional)'}
                        </span>
                        <span className="block text-[11px] text-slate-500">
                          Drag &amp; drop files here or click to upload &bull; Supports PDF, JPG,
                          PNG (Max 10MB)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkbox: Agreement */}
                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      checked={formData.agreePolicy}
                      onChange={(e) => setFormData({ ...formData, agreePolicy: e.target.checked })}
                      className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                    />
                    <label htmlFor="agree" className="text-xs text-slate-600">
                      I agree to the{' '}
                      <Link to="/privacy-policy" className="text-amber-700 hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      and consent to being contacted by 7Rays Astro Vastu.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Contact Information (lg:col-span-5) */}
            <div className="space-y-8 lg:col-span-5">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                  CONTACT INFORMATION
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  We&apos;re here to answer your questions and help you find the right Vastu and
                  astrology solutions for your home, business or workspace.
                </p>
              </div>

              {/* Contact List with Right Brand Stack */}
              <div className="flex items-start justify-between gap-6">
                {/* Contact Items */}
                <div className="space-y-5">
                  {/* Call Us */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                        Consultation Desk
                      </h3>
                      {siteConfig.contact.displayPhone ? (
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          onClick={() =>
                            trackConversion('phone_call', 'Contact Page Consultation Desk')
                          }
                          className="mt-0.5 block text-xs font-semibold text-slate-700 transition hover:text-amber-700"
                        >
                          {siteConfig.contact.displayPhone}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-xs font-semibold text-slate-700">
                          Submit Appointment Request
                        </p>
                      )}
                      <p className="text-[11px] text-slate-500">
                        Fast confirmation within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Us */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                        WhatsApp Consultation
                      </h3>
                      {whatsAppUrl ? (
                        <a
                          href={whatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackConversion('whatsapp_click', 'Contact Page WhatsApp Card')
                          }
                          className="mt-0.5 block text-xs font-semibold text-slate-700 transition hover:text-emerald-700"
                        >
                          Connect via WhatsApp
                        </a>
                      ) : (
                        <p className="mt-0.5 text-xs font-semibold text-slate-700">
                          Shared upon appointment confirmation
                        </p>
                      )}
                      <p className="text-[11px] text-slate-500">Direct floor plan sharing</p>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 sm:text-sm">Inquiry Desk</h3>
                      {siteConfig.contact.email ? (
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="mt-0.5 block text-xs font-semibold text-slate-700 transition hover:text-amber-700"
                        >
                          {siteConfig.contact.email}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-xs font-semibold text-slate-700">
                          Via Online Consultation Form
                        </p>
                      )}
                      <p className="text-[11px] text-slate-500">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Our Office */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 sm:text-sm">Our Location</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-700">
                        Dasarahalli, Bengaluru, Karnataka 560024
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Google Maps: 3J64+827 Balaji Layout
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                        Consultation Hours
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-700">By Prior Appointment</p>
                      <p className="text-[11px] text-slate-500">
                        On-site inspections &amp; digital sessions
                      </p>
                    </div>
                  </div>

                  {/* Google Maps Directions Button */}
                  <div className="pt-2">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-xs font-bold text-amber-800 transition hover:bg-amber-100"
                    >
                      <MapPin className="h-4 w-4 text-amber-700" />
                      <span>Get Directions on Google Maps</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Edge: Vertical Spaced Attributes */}
                <div className="hidden border-l border-amber-300/40 pl-6 text-left sm:block">
                  <div className="flex flex-col space-y-4 font-serif text-[10px] font-bold tracking-[0.25em] text-amber-800 uppercase">
                    <span>SPACES</span>
                    <span>PEOPLE</span>
                    <span>ENERGY</span>
                    <span>BALANCE</span>
                    <span>GROWTH</span>
                    <span className="text-slate-300">&mdash;</span>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map Embed Card */}
              <GoogleMapEmbed
                height={300}
                title="7Rays Vastu Consultant Bangalore — Google Maps Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPLIT SECTION: Have a Question? We're Here to Help + FAQ */}
      <section className="border-t border-slate-100 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Dark Photo Card (lg:col-span-6) */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-xl sm:p-10 lg:col-span-6">
              {/* Background Image with Dark Vignette */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/hero-penthouse.jpg"
                  alt="Harmonious Space Help"
                  className="h-full w-full object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-slate-950/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
              </div>

              <div className="relative z-10 flex min-h-[300px] flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase">
                    HAVE A QUESTION?
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                    We&apos;re Here to Help.
                  </h3>
                  <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Whether it&apos;s a quick question or a detailed consultation, our team is happy
                    to assist you.
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg transition hover:from-amber-300 hover:to-amber-500"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: FAQ Accordion (lg:col-span-6) */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                QUICK ANSWERS
              </span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 divide-y divide-slate-100 border-t border-b border-slate-100">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div key={idx} className="py-3.5">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="flex w-full items-center justify-between text-left text-xs font-medium text-slate-900 transition hover:text-amber-700 sm:text-sm"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <span className="shrink-0 text-amber-700">
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-2.5 pr-4 text-xs leading-relaxed text-slate-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
