import React, { useState, useEffect, useRef } from 'react'
import { PhoneCall, MessageCircle, Calendar } from 'lucide-react'
import { env } from '@/config/env'
import { siteConfig } from '@/config/site'
import { trackConversion } from '@/utils/analytics'

interface FloatingActionsProps {
  onOpenConsultation?: () => void
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultation }) => {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  const phoneRaw = siteConfig.contact.phone || env.whatsAppPhone || '7091021616'
  const phoneClean = phoneRaw.replace(/[^0-9+]/g, '')
  const telHref = phoneClean.startsWith('+') ? `tel:${phoneClean}` : `tel:+91${phoneClean}`

  const whatsAppPhoneClean = (env.whatsAppPhone || '917091021616').replace(/[^0-9]/g, '')
  const whatsAppHref = `https://wa.me/${whatsAppPhoneClean}?text=${encodeURIComponent(
    env.whatsAppDefaultMessage || 'Hello 7Rays Astro Vastu, I would like to book a consultation.'
  )}`

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY.current

      // Always show near top or bottom
      if (
        currentScrollY < 80 ||
        window.innerHeight + currentScrollY >= document.body.offsetHeight - 150
      ) {
        setIsVisible(true)
      } else if (delta > 10) {
        // Fast scroll down -> minimize
        setIsVisible(false)
      } else if (delta < -8) {
        // Scroll up -> reveal
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCallClick = () => {
    trackConversion('phone_call', 'Floating Action Button')
  }

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_click', 'Floating Action Button')
  }

  const handleBookClick = () => {
    trackConversion('consultation_booking', 'Floating Action Bar Mobile')
    if (onOpenConsultation) {
      onOpenConsultation()
    }
  }

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE & TABLET: iOS-Style Floating Glass Quick Action Hub             */}
      {/* Responsive: visible below md (<768px). Features Call + WhatsApp + Book     */}
      {/* ========================================================================= */}
      <aside
        aria-label="Quick Contact Actions"
        className={`pointer-events-none fixed inset-x-0 bottom-3 z-50 flex justify-center px-3 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-20 scale-95 opacity-0'
        }`}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="pointer-events-auto flex w-full max-w-[390px] items-center justify-between gap-1.5 rounded-full border border-amber-500/30 bg-slate-950/92 p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
          {/* Call Consultant Button */}
          <a
            href={telHref}
            onClick={handleCallClick}
            className="group flex flex-1 items-center justify-center gap-1.5 rounded-full border border-amber-500/20 bg-slate-900/90 py-2.5 text-[11px] font-semibold tracking-wide text-amber-300 transition-all duration-200 active:scale-95"
            aria-label="Call 7Rays Astro Vastu Consultant"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
              <PhoneCall className="h-3 w-3" />
            </div>
            <span>Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="group flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 py-2.5 text-[11px] font-semibold tracking-wide text-white shadow-sm shadow-emerald-950/40 transition-all duration-200 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-3 w-3 text-white" />
              <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-100" />
              </span>
            </div>
            <span>WhatsApp</span>
          </a>

          {/* Instant Book Consultation Button */}
          <button
            onClick={handleBookClick}
            className="group flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-2.5 text-[11px] font-bold tracking-wide text-slate-950 shadow-sm shadow-amber-500/30 transition-all duration-200 active:scale-95"
            aria-label="Book a Consultation"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-950/20 text-slate-950">
              <Calendar className="h-3 w-3" />
            </div>
            <span>Book</span>
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. DESKTOP & LAPTOP: Floating WhatsApp & Call Buttons                      */}
      {/* Responsive: visible on md:flex (>=768px)                                  */}
      {/* ========================================================================= */}
      <aside
        aria-label="Desktop Quick Contact"
        className={`fixed right-6 bottom-6 z-40 hidden flex-col items-end gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:flex ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-16 scale-90 opacity-0'
        }`}
      >
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-xl shadow-emerald-950/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30"
          aria-label="Chat with 7Rays Astro Vastu Consultant on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-6" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400" />
          </span>
        </a>

        <a
          href={telHref}
          onClick={handleCallClick}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/40 bg-slate-950/90 text-amber-400 shadow-lg shadow-black/60 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-amber-400 hover:text-amber-300"
          aria-label="Call 7Rays Astro Vastu Consultant"
        >
          <PhoneCall className="h-4.5 w-4.5" />
        </a>
      </aside>
    </>
  )
}

export default FloatingActions
