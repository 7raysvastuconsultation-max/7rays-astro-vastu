import React, { useState, useEffect, useRef } from 'react'
import { PhoneCall, MessageCircle, Phone } from 'lucide-react'
import { env } from '@/config/env'
import { siteConfig } from '@/config/site'
import { trackConversion } from '@/utils/analytics'

export const FloatingActions: React.FC = () => {
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

      // If near the top, always show
      if (currentScrollY < 60) {
        setIsVisible(true)
      } else if (delta > 8) {
        // Scrolling down -> hide with smooth animation
        setIsVisible(false)
      } else if (delta < -8) {
        // Scrolling up -> reveal with smooth animation
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
      {/* 1. MOBILE & TABLET: iOS-Style Floating Glass Bottom Navigation Bar        */}
      {/* Responsive: visible on screen widths below desktop (max-md:block)        */}
      {/* Smooth scroll-down hide / scroll-up show with iOS spring cubic-bezier     */}
      {/* ========================================================================= */}
      <aside
        aria-label="Quick Contact Actions"
        className={`fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pointer-events-none md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-24 opacity-0 scale-95'
        }`}
      >
        <div className="pointer-events-auto flex w-full max-w-sm items-center justify-between rounded-full border border-amber-500/25 bg-slate-950/85 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_20px_rgba(212,175,55,0.12)] backdrop-blur-xl">
          {/* Call Consultant Button */}
          <a
            href={telHref}
            onClick={handleCallClick}
            className="group flex flex-1 items-center justify-center gap-2 rounded-full border border-amber-500/20 bg-slate-900/90 px-3.5 py-2.5 text-xs font-semibold tracking-wide text-amber-300 transition-all duration-200 hover:border-amber-400/50 hover:bg-slate-800 active:scale-95"
            aria-label={`Call 7Rays Astro Vastu Consultant at ${siteConfig.contact.displayPhone || phoneRaw}`}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/15 text-amber-400 transition-transform group-hover:scale-110">
              <PhoneCall className="h-3.5 w-3.5" />
            </div>
            <span>Call Now</span>
          </a>

          {/* Delicate Divider */}
          <div className="mx-1 h-5 w-px bg-slate-800" aria-hidden="true" />

          {/* WhatsApp Action Button */}
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-3.5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-md shadow-emerald-950/40 transition-all duration-200 hover:from-emerald-500 hover:to-emerald-400 active:scale-95"
            aria-label="Chat with 7Rays Astro Vastu Consultant on WhatsApp"
          >
            <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:scale-110">
              <MessageCircle className="h-3.5 w-3.5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-100" />
              </span>
            </div>
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. DESKTOP & LAPTOP: Sleek Tiny Floating WhatsApp & Call Buttons          */}
      {/* Responsive: visible on md:flex (>=768px)                                  */}
      {/* Smooth scroll hide on reading down / reveal on scroll up                  */}
      {/* ========================================================================= */}
      <aside
        aria-label="Desktop Quick Contact"
        className={`fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-12 opacity-40 hover:opacity-100 pointer-events-auto'
        }`}
      >
        {/* Tiny Call Button */}
        <div className="group relative flex items-center">
          <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded-md border border-slate-800 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium tracking-wide text-amber-200 shadow-xl opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0">
            Call: {siteConfig.contact.displayPhone || phoneRaw}
          </span>
          <a
            href={telHref}
            onClick={handleCallClick}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/30 bg-slate-900/85 text-amber-300 shadow-lg shadow-black/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-amber-400 hover:bg-slate-800 hover:text-amber-200 hover:shadow-amber-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
            aria-label={`Call Consultant at ${siteConfig.contact.displayPhone || phoneRaw}`}
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>

        {/* Tiny WhatsApp Button */}
        <div className="group relative flex items-center">
          <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded-md border border-slate-800 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium tracking-wide text-emerald-200 shadow-xl opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0">
            Chat on WhatsApp
          </span>
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-950/60 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:from-emerald-400 hover:to-emerald-500 hover:shadow-emerald-500/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            aria-label="Direct WhatsApp Consultation"
          >
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-200 ring-2 ring-slate-950" />
            </span>
          </a>
        </div>
      </aside>
    </>
  )
}
