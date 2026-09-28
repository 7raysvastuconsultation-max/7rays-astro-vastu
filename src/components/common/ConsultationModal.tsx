import React, { useState, useEffect } from 'react'
import { X, Send, CheckCircle2, MessageSquare, UploadCloud } from 'lucide-react'
import { env } from '@/config/env'
import { siteConfig } from '@/config/site'
import { trackConversion, submitEnquiry } from '@/utils/analytics'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'residential-vastu',
}) => {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential Apartment',
    location: '',
    serviceRequired: initialService,
    approxSize: '',
    consultationType: 'On-site Inspection (Bangalore)',
    message: '',
    fileName: '',
  })

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await submitEnquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      propertyType: formData.propertyType,
      location: formData.location,
      serviceRequired: formData.serviceRequired,
      approxSize: formData.approxSize,
      consultationType: formData.consultationType,
      message: formData.message,
      fileName: formData.fileName,
      source: 'Consultation Modal',
    })
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleWhatsApp = () => {
    trackConversion('whatsapp_click', 'Modal Quick Book')
    const text = encodeURIComponent(
      `Hello 7Rays Astro Vastu, I would like to book a consultation for ${formData.propertyType} in ${formData.location || 'Bangalore'}.`
    )
    window.open(`https://wa.me/${env.whatsAppPhone}?text=${text}`, '_blank')
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-consultation-title"
      onClick={onClose}
      className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-amber-500/30 bg-slate-900 p-6 text-slate-100 shadow-2xl shadow-amber-500/10 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-slate-700 hover:text-amber-400"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="space-y-4 py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-100">Consultation Scheduled</h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-300">
              Thank you, <strong className="text-amber-400">{formData.name}</strong>. Our senior
              Astro-Vastu coordinator will contact you via WhatsApp/call within 2 hours to confirm
              your property orientation and time slot.
            </p>
            <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-500"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Confirm on WhatsApp Now</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false)
                  onClose()
                }}
                className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-slate-800 pb-4">
              <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase">
                7Rays Astro Vastu
              </span>
              <h2
                id="modal-consultation-title"
                className="mt-1 font-serif text-2xl font-bold text-slate-100"
              >
                Book a Consultation
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Scientific non-demolition Vastu audits, corporate spatial planning &amp; Vedic
                Jyotish analysis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-name" className="mb-1 block font-medium text-slate-300">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-100 focus:border-amber-400 focus:outline-none"
                    placeholder="e.g. Ramesh Kulkarni"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="mb-1 block font-medium text-slate-300">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-100 focus:border-amber-400 focus:outline-none"
                    placeholder="+91 Enter phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-email" className="mb-1 block font-medium text-slate-300">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-100 focus:border-amber-400 focus:outline-none"
                    placeholder="ramesh@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium text-slate-300">
                    Property Location (Bangalore or City)
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-100 focus:border-amber-400 focus:outline-none"
                    placeholder="e.g. Indiranagar, HSR Layout, Whitefield"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-medium text-slate-300">Service Required</label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-100 focus:border-amber-400 focus:outline-none"
                  >
                    <option value="residential-vastu">Residential Vastu (Apartment / Villa)</option>
                    <option value="commercial-vastu">Commercial Vastu (Office / Retail)</option>
                    <option value="industrial-vastu">Industrial &amp; Factory Vastu</option>
                    <option value="corporate-vastu">Corporate Workplace Vastu</option>
                    <option value="vastu-audit">Complete Vastu Audit &amp; Energy Scan</option>
                    <option value="astrology">Vedic Astrology &amp; Kundli Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-medium text-slate-300">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-100 focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Apartment / Flat">Apartment / Flat</option>
                    <option value="Independent Villa">Independent Villa</option>
                    <option value="Commercial Office">Commercial Office / Startup Space</option>
                    <option value="Retail Showroom / Shop">Retail Showroom / Shop</option>
                    <option value="Industrial Factory / Warehouse">
                      Industrial Factory / Warehouse
                    </option>
                    <option value="Plot / Land Purchase">Plot / Land Purchase</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-medium text-slate-300">
                    Approximate Area (Sq.Ft)
                  </label>
                  <input
                    type="text"
                    value={formData.approxSize}
                    onChange={(e) => setFormData({ ...formData, approxSize: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-100 focus:border-amber-400 focus:outline-none"
                    placeholder="e.g. 1800 sq ft or 25,000 sq ft"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium text-slate-300">Consultation Mode</label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-100 focus:border-amber-400 focus:outline-none"
                  >
                    <option value="On-site Inspection (Bangalore)">
                      On-site Inspection (Bangalore)
                    </option>
                    <option value="Online Virtual CAD Consultation">
                      Online Virtual CAD Consultation
                    </option>
                    <option value="Architectural Blueprint Review">
                      Pre-Purchase Blueprint Review
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block font-medium text-slate-300">
                  Floor Plan or Property Notes
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-slate-700 bg-slate-950/60 p-3 text-slate-400 transition hover:border-amber-400">
                    <UploadCloud className="h-4 w-4 text-amber-400" />
                    <span>{formData.fileName || 'Attach CAD / PDF Blueprint (Optional)'}</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFormData({ ...formData, fileName: e.target.files[0].name })
                          trackConversion('form_submission', 'Floor Plan Attached')
                        }
                      }}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-1 block font-medium text-slate-300">
                  Specific Goals / Challenges
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-slate-100 focus:border-amber-400 focus:outline-none"
                  placeholder="Tell us about directional orientation, health, sleep, or business goals..."
                />
              </div>

              <div className="flex flex-col items-center justify-between gap-3 pt-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500 disabled:opacity-60 sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Processing...' : 'Submit Request'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/30 px-5 py-3 font-semibold text-emerald-300 transition hover:bg-emerald-900/40 sm:w-auto"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>Fast Book via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 text-center text-[11px] text-slate-500">
                <span>Direct Desk: {siteConfig.contact.displayPhone}</span>
                <span>•</span>
                <span>Strict Non-Disclosure Commitment</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
