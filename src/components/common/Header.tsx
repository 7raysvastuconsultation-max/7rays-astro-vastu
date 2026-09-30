import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  MessageSquare,
  Compass,
  Search,
  ShoppingBag,
  User,
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { env } from '@/config/env'
import { trackConversion } from '@/utils/analytics'
import { useShop } from '@/context/ShopContext'

interface HeaderProps {
  onOpenConsultation: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navSearch, setNavSearch] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { cartCount, openCart, openAccount } = useShop()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  const [prevPath, setPrevPath] = useState(location.pathname)
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    setIsMobileMenuOpen(false)
  }

  // Navigation Links matching user mockup
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Vastu Services', path: '/vastu-services' },
    { label: 'Astrology', path: '/astrology' },
    { label: 'Shop', path: '/shop' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ]

  const whatsAppUrl = `https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(
    env.whatsAppDefaultMessage
  )}`

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (navSearch.trim()) {
      navigate(`/shop?search=${encodeURIComponent(navSearch.trim())}`)
    } else {
      navigate('/shop')
    }
  }

  // Helper to determine if a navigation link should be highlighted for the current route
  const isRouteActive = (linkPath: string, currentPath: string): boolean => {
    if (linkPath === '/') {
      return currentPath === '/'
    }

    if (linkPath === '/shop') {
      return (
        currentPath === '/shop' ||
        currentPath.startsWith('/shop/') ||
        currentPath === '/store' ||
        currentPath === '/products'
      )
    }

    if (linkPath === '/insights') {
      return (
        currentPath === '/insights' ||
        currentPath.startsWith('/insights/') ||
        currentPath === '/blog' ||
        currentPath.startsWith('/blog/') ||
        currentPath.startsWith('/case-studies')
      )
    }

    if (linkPath === '/about') {
      return (
        currentPath === '/about' ||
        currentPath === '/the-7-rays' ||
        currentPath === '/process' ||
        currentPath.startsWith('/consultant/')
      )
    }

    if (linkPath === '/vastu-services') {
      return (
        currentPath === '/vastu-services' ||
        currentPath.startsWith('/vastu-services/') ||
        currentPath.startsWith('/vastu/')
      )
    }

    if (linkPath === '/astrology') {
      return (
        currentPath === '/astrology' ||
        currentPath.startsWith('/astrology/') ||
        currentPath === '/astrology-consultation' ||
        currentPath === '/locations/bangalore/astrology'
      )
    }

    if (linkPath === '/contact') {
      return currentPath === '/contact'
    }

    return currentPath === linkPath || currentPath.startsWith(`${linkPath}/`)
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-amber-500/20 bg-slate-950/98 shadow-2xl shadow-slate-950/80 backdrop-blur-md'
          : 'border-b border-slate-900/60 bg-slate-950/95 backdrop-blur-md'
      }`}
    >
      {/* Top Bar (Flipkart style with Search, Account, Cart) */}
      <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-slate-900/80 px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        {/* Mobile Left: Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:bg-slate-900 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5 text-slate-200" />
            )}
          </button>
        </div>

        {/* Brand Logo (Centered on mobile as in mockup, left-aligned on desktop) */}
        <Link to="/" className="group mx-auto flex items-center gap-2.5 md:mx-0">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-slate-950 shadow-md shadow-amber-500/20 sm:h-9 sm:w-9">
            <Compass className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
            <div className="absolute inset-0 rounded-xl border border-amber-300/40" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-base font-bold tracking-widest text-slate-100 transition group-hover:text-amber-400 sm:text-lg">
              7RAYS
            </span>
            <span className="-mt-1 text-[8px] font-semibold tracking-[0.22em] text-amber-400/90 uppercase sm:text-[9px]">
              Astro Vastu
            </span>
          </div>
        </Link>

        {/* Central Search Bar (Desktop) */}
        <div className="relative mx-6 hidden max-w-xl flex-1 md:block">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              placeholder="Search Vastu Products, Crystals, Yantras, Home Decor..."
              className="w-full rounded-full border border-slate-700 bg-slate-900/90 py-2 pr-11 pl-4 text-xs text-white placeholder-slate-400 shadow-inner transition focus:border-amber-400 focus:bg-slate-900 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 transition hover:text-amber-400"
              aria-label="Search products"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Header Right Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Account Button (Desktop) */}
          <button
            onClick={openAccount}
            className="hidden items-center gap-1.5 text-xs font-semibold text-slate-200 transition hover:text-amber-400 md:flex"
          >
            <User className="h-4 w-4 text-amber-400" />
            <span>Account</span>
          </button>

          {/* Cart Button (Always visible with badge count!) */}
          <button
            onClick={openCart}
            className="relative flex items-center gap-1.5 text-xs font-semibold text-slate-200 transition hover:text-amber-400"
            aria-label="View shopping cart"
          >
            <div className="relative">
              <ShoppingBag className="h-5 w-5 text-amber-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[9px] font-extrabold text-slate-950 shadow-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>

      {/* Bottom Nav Tier (Desktop Links & CTA Button) */}
      <div className="hidden border-t border-slate-900/50 bg-slate-950/70 py-2 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-7 text-[13px] font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = isRouteActive(link.path, location.pathname)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-all duration-200 ${
                    isActive
                      ? 'font-bold text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.35)]'
                      : 'text-slate-300 hover:text-amber-400'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute right-0 -bottom-1.5 left-0 h-[2.5px] rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  )}
                </Link>
              )
            })}
          </nav>

          <button
            onClick={() => {
              trackConversion('consultation_booking', 'Header CTA')
              onOpenConsultation()
            }}
            className="group relative inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-4 py-1.5 text-xs font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/40 hover:brightness-110"
          >
            <span>Book Consultation</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="animate-fadeIn max-h-[calc(100vh-70px)] overflow-y-auto overscroll-contain border-b border-amber-500/20 bg-slate-950/98 px-6 py-6 backdrop-blur-2xl md:hidden"
        >
          {/* Mobile search input */}
          <form onSubmit={handleSearchSubmit} className="relative mb-5 w-full">
            <input
              type="text"
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              placeholder="Search Vastu Products, Crystals..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-2.5 pr-10 pl-4 text-xs text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-amber-400"
              aria-label="Submit search"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          <nav className="flex flex-col space-y-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = isRouteActive(link.path, location.pathname)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-200 ${
                    isActive
                      ? 'border-l-2 border-amber-400 bg-amber-500/10 font-bold text-amber-400'
                      : 'border-b border-slate-900/60 text-slate-300 hover:bg-slate-900/40 hover:text-amber-400'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  )}
                </Link>
              )
            })}

            <div className="space-y-3 pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onOpenConsultation()
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 py-3 text-xs font-bold text-slate-950"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  onClick={() => trackConversion('phone_call', 'Mobile Menu Call')}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-slate-300"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-400" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('whatsapp_click', 'Mobile Menu WhatsApp')}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-2.5 text-emerald-300"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
