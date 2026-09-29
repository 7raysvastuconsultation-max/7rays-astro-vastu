import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Phone, MessageSquare, Compass } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { env } from '@/config/env'
import { trackConversion } from '@/utils/analytics'

interface HeaderProps {
  onOpenConsultation: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Vastu Services', path: '/vastu-services' },
    { label: 'Commercial Vastu', path: '/vastu/commercial' },
    { label: 'Residential Vastu', path: '/vastu/residential' },
    { label: 'Astrology', path: '/astrology' },
    { label: 'International', path: '/international' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ]

  const whatsAppUrl = `https://wa.me/${env.whatsAppPhone}?text=${encodeURIComponent(
    env.whatsAppDefaultMessage
  )}`

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-amber-500/20 bg-slate-950/95 py-3.5 shadow-2xl shadow-slate-950/80 backdrop-blur-md'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-slate-950 shadow-lg shadow-amber-500/20">
            <Compass className="h-6 w-6 transition-transform duration-500 group-hover:rotate-90" />
            <div className="absolute inset-0 rounded-xl border border-amber-300/40" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-widest text-slate-100 transition group-hover:text-amber-400">
              7RAYS
            </span>
            <span className="-mt-1 text-[9px] font-semibold tracking-[0.25em] text-amber-400/90 uppercase">
              Astro Vastu
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 text-[13px] font-medium tracking-wide xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-200 hover:text-amber-400 ${
                  isActive ? 'font-semibold text-amber-400' : 'text-slate-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Button Desktop */}
        <div className="hidden items-center gap-4 sm:flex">
          <button
            onClick={() => {
              trackConversion('consultation_booking', 'Header CTA')
              onOpenConsultation()
            }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/40 hover:brightness-110"
          >
            <span>Book Consultation</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={() => {
              trackConversion('consultation_booking', 'Mobile Header CTA')
              onOpenConsultation()
            }}
            className="inline-flex items-center gap-1 rounded bg-amber-500 px-3 py-1.5 text-[11px] font-bold text-slate-950 sm:hidden"
          >
            Book
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-slate-300 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="animate-fadeIn border-b border-amber-500/20 bg-slate-950/98 px-6 py-6 backdrop-blur-xl xl:hidden"
        >
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-slate-900 py-1.5 transition ${
                    isActive
                      ? 'border-amber-500/30 pl-2 font-semibold text-amber-400'
                      : 'text-slate-300 hover:text-amber-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

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
