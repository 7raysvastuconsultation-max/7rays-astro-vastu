import React from 'react'
import {
  X,
  User,
  Package,
  Heart,
  HelpCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
  Compass,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useShop } from '@/context/ShopContext'
import { businessConfig } from '@/config/business'
import { env } from '@/config/env'

export const AccountDrawer: React.FC = () => {
  const { isAccountOpen, closeAccount, wishlist, cartCount, openCart } = useShop()

  if (!isAccountOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={closeAccount}
      />

      <div className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-sm flex-col bg-[#FAF8F5] text-slate-900 shadow-2xl transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-200/80 bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-base font-bold text-slate-900">7Rays Customer Desk</h2>
              <span className="text-[11px] text-slate-500">Verified Vastu &amp; Astro Member</span>
            </div>
          </div>
          <button
            onClick={closeAccount}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close account drawer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                closeAccount()
                openCart()
              }}
              className="rounded-2xl border border-amber-200/80 bg-white p-3.5 text-left shadow-2xs hover:border-amber-400"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                  Cart Items
                </span>
                <Package className="h-4 w-4 text-amber-600" />
              </div>
              <span className="mt-1 block font-serif text-xl font-bold text-slate-900">
                {cartCount}
              </span>
              <span className="text-[10px] text-slate-500">View active items</span>
            </button>

            <div className="rounded-2xl border border-amber-200/80 bg-white p-3.5 text-left shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                  Wishlist
                </span>
                <Heart className="h-4 w-4 fill-current text-red-500" />
              </div>
              <span className="mt-1 block font-serif text-xl font-bold text-slate-900">
                {wishlist.length}
              </span>
              <span className="text-[10px] text-slate-500">Saved remedies</span>
            </div>
          </div>

          {/* Links List */}
          <div className="divide-y divide-amber-100/80 overflow-hidden rounded-2xl border border-amber-200/80 bg-white shadow-2xs">
            <a
              href={`https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(
                'Namaste, I want to check my order status with 7Rays Astro Vastu.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3.5 text-xs text-slate-700 hover:bg-amber-50/50"
            >
              <div className="flex items-center gap-2.5">
                <Package className="h-4 w-4 text-amber-700" />
                <span className="font-semibold text-slate-900">Track My Order</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </a>

            <Link
              to="/vastu-services"
              onClick={closeAccount}
              className="flex items-center justify-between px-4 py-3.5 text-xs text-slate-700 hover:bg-amber-50/50"
            >
              <div className="flex items-center gap-2.5">
                <Compass className="h-4 w-4 text-amber-700" />
                <span className="font-semibold text-slate-900">Book Vastu Audit Consultation</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              to="/astrology"
              onClick={closeAccount}
              className="flex items-center justify-between px-4 py-3.5 text-xs text-slate-700 hover:bg-amber-50/50"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-amber-700" />
                <span className="font-semibold text-slate-900">Astrology Kundli Guidance</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              to="/contact"
              onClick={closeAccount}
              className="flex items-center justify-between px-4 py-3.5 text-xs text-slate-700 hover:bg-amber-50/50"
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className="h-4 w-4 text-amber-700" />
                <span className="font-semibold text-slate-900">Support &amp; Remedies Help</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>
          </div>

          {/* Vastu Expert Contact Box */}
          <div className="rounded-2xl border border-amber-300/80 bg-amber-50/60 p-4">
            <span className="text-[10px] font-bold tracking-wider text-amber-900 uppercase">
              NEED PLACEMENT ASSISTANCE?
            </span>
            <h4 className="mt-1 font-serif text-sm font-bold text-slate-900">
              Consult with {businessConfig.ownerName}
            </h4>
            <p className="mt-1 text-[11px] text-slate-600">
              Not sure which yantra or pyramid matches your property? Talk directly with our team.
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href={`tel:${businessConfig.phone}`}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 py-2 text-xs font-bold text-amber-300 hover:bg-slate-800"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(
                  'Namaste, I need expert guidance for choosing Vastu products for my home/office.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 py-2 text-xs font-bold text-white hover:bg-emerald-700"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-200/80 bg-white px-5 py-3 text-center text-[10px] text-slate-400">
          7Rays Astro Vastu • Official Online Store
        </div>
      </div>
    </>
  )
}
