import React, { useState, useEffect, useRef } from 'react'
import { PhoneCall, MessageCircle } from 'lucide-react'
import { env } from '@/config/env'
import { siteConfig } from '@/config/site'
import { trackConversion } from '@/utils/analytics'

interface FloatingActionsProps {
  onOpenConsultation?: () => void
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
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
      } else if (delta > 15) {
        // Fast scroll down -> minimize
        setIsVisible(false)
      } else if (delta < -10) {
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

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE VIEW: Tiny Floating Round Buttons (WhatsApp & Call)             */}
      {/* Stacked neatly on the bottom right above the bottom navigation bar        */}
      {/* Does NOT overlap bottom nav (bottom-18 provides clear separation)         */}
      {/* ========================================================================= */}
      <aside
        aria-label="Quick Mobile Contact"
        className={`fixed right-3 bottom-18 z-40 flex flex-col items-center gap-2 transition-all duration-300 md:hidden ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-8 scale-90 opacity-0'
        }`}
      >
        {/* Tiny Round WhatsApp Button */}
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 transition-transform active:scale-90"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-100" />
          </span>
        </a>

        {/* Tiny Round Call Button */}
        <a
          href={telHref}
          onClick={handleCallClick}
          className="group flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/50 bg-slate-950/95 text-amber-400 shadow-md shadow-black/60 transition-transform active:scale-90"
          aria-label="Call 7Rays Astro Vastu Consultant"
        >
          <PhoneCall className="h-4 w-4" />
        </a>
      </aside>

      {/* ========================================================================= */}
      {/* 2. DESKTOP VIEW: Floating WhatsApp & Call Buttons (>=768px)                */}
      {/* ========================================================================= */}
      <aside
        aria-label="Desktop Quick Contact"
        className={`fixed right-6 bottom-6 z-40 hidden flex-col items-end gap-2.5 transition-all duration-300 md:flex ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-12 scale-90 opacity-0'
        }`}
      >
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-xl shadow-emerald-950/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30"
          aria-label="Chat with 7Rays Astro Vastu Consultant on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
          </span>
        </a>

        <a
          href={telHref}
          onClick={handleCallClick}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/40 bg-slate-950/90 text-amber-400 shadow-lg shadow-black/60 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-amber-400 hover:text-amber-300"
          aria-label="Call 7Rays Astro Vastu Consultant"
        >
          <PhoneCall className="h-4 w-4" />
        </a>
      </aside>
    </>
  )
}
