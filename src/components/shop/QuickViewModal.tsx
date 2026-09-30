import React, { useState } from 'react'
import {
  X,
  Star,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Heart,
  ShoppingCart,
  MessageSquare,
} from 'lucide-react'
import { useShop } from '@/context/ShopContext'
import { env } from '@/config/env'

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, isInWishlist, toggleWishlist } = useShop()
  const [pincode, setPincode] = useState('560024')
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(
    'Delivery by 2-3 business days in Bangalore • Pan India available'
  )

  if (!quickViewProduct) return null

  const isLiked = isInWishlist(quickViewProduct.id)

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault()
    if (pincode.length >= 6) {
      setPincodeStatus(`Verified: Delivery available to ${pincode} within 3-4 days (Free Delivery)`)
    } else {
      setPincodeStatus('Please enter a valid 6-digit PIN code')
    }
  }

  const handleWhatsAppInquiry = () => {
    const text = `Namaste Rishwa Sinha ji, I want to inquire about Vastu remedy: *${quickViewProduct.name}* (Price: ₹${quickViewProduct.price}). Is this suitable for my property floor plan?`
    window.open(`https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
        onClick={closeQuickView}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-amber-200/90 bg-[#FAF8F5] p-6 text-slate-900 shadow-2xl sm:p-8">
        <button
          onClick={closeQuickView}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-400 shadow-xs transition hover:text-slate-700"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Product Image Column */}
          <div className="md:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-amber-200/80 bg-white shadow-sm">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="h-full w-full object-cover"
              />
              {quickViewProduct.badge && (
                <span className="absolute top-3 left-3 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-2.5 py-1 text-[11px] font-bold text-slate-950 uppercase shadow-xs">
                  {quickViewProduct.badge}
                </span>
              )}
              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-xs transition ${
                  isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-500'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Energised Trust Badge */}
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-xs text-emerald-900">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <div>
                <span className="block font-bold">100% Pre-Energised &amp; Verified</span>
                <span className="text-[11px] text-emerald-800">
                  Consecrated with Vedic mantras by certified Vastu consultant Rishwa Sinha prior to
                  dispatch.
                </span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-between md:col-span-7">
            <div>
              <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                {quickViewProduct.categoryLabel}
              </span>
              <h2 className="mt-1 font-serif text-xl font-bold text-slate-900 sm:text-2xl">
                {quickViewProduct.name}
              </h2>

              {/* Flipkart style Rating and Reviews */}
              <div className="mt-2.5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-emerald-700 px-2 py-0.5 text-xs font-bold text-white">
                  <span>{quickViewProduct.rating}</span>
                  <Star className="h-3 w-3 fill-current" />
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {quickViewProduct.reviewsCount} Ratings &amp; Reviews
                </span>
                <span className="text-xs font-semibold text-emerald-700">• In Stock</span>
              </div>

              {/* Price Row */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-serif text-2xl font-bold text-slate-900">
                  ₹{quickViewProduct.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm font-bold text-emerald-700">
                  {quickViewProduct.discountPercent}% off
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                {quickViewProduct.description}
              </p>

              {/* Vastu Direction & Placement Guide Box */}
              <div className="mt-4 rounded-xl border border-amber-200/90 bg-white p-3.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-900 uppercase">
                  <Compass className="h-3.5 w-3.5 text-amber-700" />
                  <span>Vastu Placement Guidelines</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase">
                      Ideal Direction
                    </span>
                    <span className="font-semibold text-slate-900">
                      {quickViewProduct.vastuPlacement.direction}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase">
                      Governing Zone
                    </span>
                    <span className="font-semibold text-slate-900">
                      {quickViewProduct.vastuPlacement.zone}
                    </span>
                  </div>
                </div>
                <p className="mt-2 border-t border-amber-100/80 pt-2 text-[11px] text-slate-600">
                  <strong>Key Benefit:</strong> {quickViewProduct.vastuPlacement.benefit}
                </p>
              </div>

              {/* Specifications / Highlights */}
              <div className="mt-4 space-y-1.5">
                <span className="block text-[11px] font-bold tracking-wider text-slate-800 uppercase">
                  Product Highlights
                </span>
                {quickViewProduct.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Pincode Checker */}
              <div className="mt-5 border-t border-amber-200/70 pt-4">
                <form onSubmit={handleCheckPincode} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Enter Delivery Pincode"
                      className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-slate-900 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-amber-300 hover:bg-slate-800"
                  >
                    Check
                  </button>
                </form>
                {pincodeStatus && (
                  <span className="mt-1.5 block text-[11px] font-medium text-emerald-700">
                    {pincodeStatus}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                onClick={() => {
                  addToCart(quickViewProduct, 1)
                  closeQuickView()
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-xs font-bold text-slate-950 shadow-md shadow-amber-500/25 transition hover:bg-amber-400 active:scale-98"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 active:scale-98"
              >
                <MessageSquare className="h-4 w-4 text-emerald-700" />
                <span>Ask Vastu Expert</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
