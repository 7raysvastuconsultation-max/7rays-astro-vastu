import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ConsultationModal } from './ConsultationModal'
import { FloatingActions } from './FloatingActions'
import { ShopProvider } from '@/context/ShopContext'
import { CartDrawer } from '@/components/shop/CartDrawer'
import { QuickViewModal } from '@/components/shop/QuickViewModal'
import { AccountDrawer } from '@/components/shop/AccountDrawer'
import { MobileBottomNav } from '@/components/shop/MobileBottomNav'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  return (
    <ShopProvider>
      <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100 selection:bg-amber-400 selection:text-slate-950">
        {/* Precision Sticky Navigation Header */}
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Main Page Slot with mobile bottom clearance */}
        <main className="flex-1 pt-20 pb-14 md:pt-24 md:pb-0">{children}</main>

        {/* Precision Luxury Footer */}
        <Footer />

        {/* Interactive Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />

        {/* Luxury Responsive Floating Actions */}
        <FloatingActions onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* E-Commerce Interactive Drawers & Modals */}
        <CartDrawer />
        <QuickViewModal />
        <AccountDrawer />

        {/* Mobile App Bottom Navigation Bar */}
        <MobileBottomNav onOpenConsultation={() => setIsConsultationOpen(true)} />
      </div>
    </ShopProvider>
  )
}
