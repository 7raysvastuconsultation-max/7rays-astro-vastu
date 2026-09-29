import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ConsultationModal } from './ConsultationModal'
import { FloatingActions } from './FloatingActions'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

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

      {/* Luxury Responsive Floating Actions (Call + WhatsApp + Instant Book on mobile/tablet) */}
      <FloatingActions onOpenConsultation={() => setIsConsultationOpen(true)} />
    </div>
  )
}
