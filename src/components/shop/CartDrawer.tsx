import React, { useState } from 'react'
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'
import { useShop } from '@/context/ShopContext'
import { env } from '@/config/env'

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    originalTotal,
    totalSavings,
    cartCount,
  } = useShop()

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [customerPincode, setCustomerPincode] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi'>('upi')
  const [orderPlaced, setOrderPlaced] = useState(false)

  if (!isCartOpen) return null

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return

    const itemsSummary = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.name}* (Qty: ${item.quantity}) - ₹${
            item.product.price * item.quantity
          }`
      )
      .join('\n')

    const message = `Namaste 7Rays Astro Vastu team,\n\nI want to place an order for authentic Vastu products:\n\n${itemsSummary}\n\n*Total Amount:* ₹${cartTotal}\n*Total Discount:* ₹${totalSavings} (Free Delivery across India)\n\nPlease confirm availability and dispatch timeline for my address.`

    const url = `https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderPlaced(true)
    setTimeout(() => {
      // also redirect to whatsapp confirmation
      const itemsList = cart.map((i) => `${i.product.name} x${i.quantity}`).join(', ')
      const msg = `Namaste! New Shop Order Placed:\nName: ${customerName}\nPhone: ${customerPhone}\nPincode: ${customerPincode}\nAddress: ${customerAddress}\nPayment: ${paymentMethod.toUpperCase()}\nItems: ${itemsList}\nTotal: ₹${cartTotal}`
      window.open(`https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(msg)}`, '_blank')
    }, 1200)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      {/* Slide-over Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-md flex-col bg-[#FAF8F5] text-slate-900 shadow-2xl transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-200/80 bg-white px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-slate-900">Your Shopping Cart</h2>
              <span className="text-xs font-medium text-slate-500">
                {cartCount} {cartCount === 1 ? 'item' : 'items'} &bull; 100% Energised
              </span>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Delivery Banner */}
        <div className="flex items-center gap-2 border-b border-amber-200/60 bg-amber-50/80 px-5 py-2.5 text-xs font-semibold text-amber-900">
          <Truck className="h-4 w-4 shrink-0 text-amber-700" />
          <span>Pan-India Free Express Delivery &amp; Safe Transit Packaging</span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 divide-y divide-amber-200/50 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100/70 text-amber-800">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-slate-900">
                Your cart is empty
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Explore our handpicked Vastu remedies, crystals, and yantras.
              </p>
              <button
                onClick={closeCart}
                className="mt-5 rounded-lg bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:bg-amber-400"
              >
                Browse Products
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex gap-3.5">
                  {/* Thumbnail */}
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-amber-200/70 bg-white">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-xs leading-snug font-bold text-slate-900">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 transition hover:text-red-600"
                          title="Remove item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="mt-0.5 inline-block text-[10px] font-semibold text-amber-800">
                        {item.product.categoryLabel}
                      </span>
                    </div>

                    {/* Price and Quantity Controls */}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-slate-900">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <span className="text-[11px] text-slate-400 line-through">
                          ₹{(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600">
                          {item.product.discountPercent}% off
                        </span>
                      </div>

                      {/* Flipkart style Stepper */}
                      <div className="flex items-center rounded-lg border border-amber-300 bg-white shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-slate-600 transition hover:bg-amber-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-slate-600 transition hover:bg-amber-50"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {cart.length > 0 && (
          <div className="border-t border-amber-200/80 bg-white p-5 shadow-lg">
            {/* Price Details Breakdown */}
            <div className="mb-4 rounded-xl border border-amber-200/70 bg-[#FAF8F5] p-3 text-xs">
              <span className="font-serif text-[11px] font-bold tracking-wider text-amber-900 uppercase">
                PRICE DETAILS
              </span>
              <div className="mt-2.5 space-y-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span>Price ({cartCount} items)</span>
                  <span>₹{originalTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Discount</span>
                  <span>- ₹{totalSavings.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="font-bold text-emerald-700">FREE</span>
                </div>
                <div className="flex justify-between border-t border-amber-200/60 pt-2 text-sm font-bold text-slate-900">
                  <span>Total Amount</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className="mt-2 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
                You will save ₹{totalSavings.toLocaleString('en-IN')} on this order!
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={handleWhatsAppOrder}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-98"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Instant Order via WhatsApp</span>
              </button>

              <button
                onClick={() => setIsCheckoutModalOpen(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-4 py-3 text-xs font-bold text-slate-950 shadow-md shadow-amber-500/25 transition hover:brightness-105 active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-700" />
              <span>Safe &amp; Verified Pre-energised Vastu Remedies</span>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs"
            onClick={() => setIsCheckoutModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-amber-200/80 bg-white p-6 shadow-2xl">
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            {orderPlaced ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-slate-900">
                  Order Successfully Initiated!
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  Thank you, <strong>{customerName}</strong>! Our Vastu dispatch desk is preparing
                  your order. You will receive WhatsApp tracking and delivery details shortly.
                </p>
                <div className="mt-6 rounded-xl border border-amber-200 bg-[#FAF8F5] p-3 text-xs text-slate-700">
                  Amount Payable: <strong>₹{cartTotal.toLocaleString('en-IN')}</strong> (
                  {paymentMethod.toUpperCase()})
                </div>
                <button
                  onClick={() => {
                    setIsCheckoutModalOpen(false)
                    closeCart()
                    setOrderPlaced(false)
                  }}
                  className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-amber-300 hover:bg-slate-800"
                >
                  Return to Shop
                </button>
              </div>
            ) : (
              <form onSubmit={handleCompleteOrder}>
                <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                  DELIVERY DETAILS
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Complete Your Vastu Order
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Total Payable: <strong>₹{cartTotal.toLocaleString('en-IN')}</strong> &bull; Free
                  Pan-India Delivery
                </p>

                <div className="mt-4 space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 560024"
                        value={customerPincode}
                        onChange={(e) => setCustomerPincode(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">
                      Delivery Address *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="House / Flat No, Street, Landmark, City, State"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">
                      Payment Preference
                    </label>
                    <div className="mt-1.5 grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        className={`rounded-lg border p-2 text-center font-semibold transition ${
                          paymentMethod === 'upi'
                            ? 'border-amber-500 bg-amber-50 text-amber-900'
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        UPI / QR / Online
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('cod')}
                        className={`rounded-lg border p-2 text-center font-semibold transition ${
                          paymentMethod === 'cod'
                            ? 'border-amber-500 bg-amber-50 text-amber-900'
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        Cash on Delivery
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCheckoutModalOpen(false)}
                    className="w-1/3 rounded-xl border border-slate-300 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 rounded-xl bg-amber-500 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-400"
                  >
                    Confirm Order (₹{cartTotal.toLocaleString('en-IN')})
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
