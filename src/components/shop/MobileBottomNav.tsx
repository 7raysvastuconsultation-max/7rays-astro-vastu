import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, ShoppingBag, Compass, User } from 'lucide-react'
import { useShop } from '@/context/ShopContext'

interface MobileBottomNavProps {
  onOpenConsultation?: () => void
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenConsultation }) => {
  const location = useLocation()
  const { openAccount, cartCount } = useShop()
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  const isShopActive = location.pathname.startsWith('/shop')
  const isHomeActive = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY.current

      // Always show near top or when scrolled to the very bottom
      if (
        currentScrollY < 80 ||
        window.innerHeight + currentScrollY >= document.body.offsetHeight - 150
      ) {
        setIsVisible(true)
      } else if (delta > 12) {
        // Scrolling down -> hide smoothly down off screen (just like WhatsApp / floating actions)
        setIsVisible(false)
      } else if (delta < -8) {
        // Scrolling up -> reveal smoothly
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label="Mobile Navigation"
      className={`fixed right-0 bottom-0 left-0 z-40 block border-t border-amber-500/20 bg-slate-950/95 px-3 py-2 pb-safe backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-md items-center justify-around">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 px-3 py-1 transition ${
            isHomeActive ? 'font-semibold text-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] tracking-tight">Home</span>
        </Link>

        {/* Shop */}
        <Link
          to="/shop/"
          className={`relative flex flex-col items-center gap-1 px-3 py-1 transition ${
            isShopActive ? 'font-bold text-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px] font-bold text-slate-950">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight">Shop</span>
          {isShopActive && (
            <span className="absolute -bottom-1 h-1 w-6 rounded-full bg-amber-400" />
          )}
        </Link>

        {/* Consultation */}
        <button
          type="button"
          onClick={() => {
            if (onOpenConsultation) {
              onOpenConsultation()
            } else {
              window.location.href = '/contact/'
            }
          }}
          className="flex flex-col items-center gap-1 px-3 py-1 text-slate-400 transition hover:text-amber-400"
        >
          <Compass className="h-5 w-5" />
          <span className="text-[10px] tracking-tight">Consultation</span>
        </button>

        {/* Account */}
        <button
          type="button"
          onClick={openAccount}
          className="flex flex-col items-center gap-1 px-3 py-1 text-slate-400 transition hover:text-amber-400"
        >
          <User className="h-5 w-5" />
          <span className="text-[10px] tracking-tight">Account</span>
        </button>
      </div>
    </nav>
  )
}
