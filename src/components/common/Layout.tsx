import React, { useState } from 'react'
import { MessageSquare } from 'lucide-react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ConsultationModal } from './ConsultationModal'
import { env } from '@/config/env'
import { trackConversion } from '@/utils/analytics'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  const whatsAppUrl = `https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(
    env.whatsAppDefaultMessage
  )}`

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_click', 'Floating Action Button')
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Precision Sticky Navigation Header */}
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Page Slot */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Precision Luxury Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 transition-transform duration-300 hover:scale-110 focus:ring-4 focus:ring-emerald-400/40 focus:outline-none"
        aria-label="Chat directly with Astro-Vastu Consultant on WhatsApp"
      >
        <MessageSquare className="h-7 w-7" />
        <span className="sr-only">WhatsApp Consultation</span>
      </a>
    </div>
  )
}
