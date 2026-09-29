import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Compass, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { trackConversion } from '@/utils/analytics'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-amber-500/20 bg-slate-950 text-slate-400">
      {/* Background Cosmic Starfield Image Overlay */}
      <img
        src="/images/seven-rays-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
      />
      <div className="pointer-events-none absolute inset-0 bg-slate-950/90" />
      <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-28 sm:px-6 sm:pb-16 lg:px-8 lg:pb-12">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Philosophy (lg:col-span-3) */}
          <div className="space-y-4 lg:col-span-3">
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 text-slate-950 shadow-lg shadow-amber-500/20">
                <Compass className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest text-slate-100">
                  7RAYS
                </span>
                <span className="-mt-1 text-[9px] font-semibold tracking-[0.25em] text-amber-400 uppercase">
                  Astro Vastu
                </span>
              </div>
            </Link>

            <p className="max-w-xs text-xs leading-relaxed text-slate-400">
              Creating harmony between people, spaces and energy.
            </p>

            {/* Social Icons (Verified Only) */}
            <div className="pt-2">
              <div className="flex items-center gap-3 text-slate-400">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-amber-400"
                    aria-label="Instagram"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-amber-400"
                    aria-label="Facebook"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-amber-400"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                )}
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-amber-400"
                    aria-label="YouTube"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                )}
                {siteConfig.social.twitter && (
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-amber-400"
                    aria-label="X Twitter"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="space-y-3 text-xs lg:col-span-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-slate-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="transition hover:text-amber-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/consultant/rishwa-sinha" className="transition hover:text-amber-400">
                  Lead Consultant
                </Link>
              </li>
              <li>
                <Link to="/vastu-services" className="transition hover:text-amber-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/vastu/residential" className="transition hover:text-amber-400">
                  Residential Vastu
                </Link>
              </li>
              <li>
                <Link to="/vastu/commercial" className="transition hover:text-amber-400">
                  Commercial Vastu
                </Link>
              </li>
              <li>
                <Link to="/vastu/non-demolition" className="transition hover:text-amber-400">
                  Non-Demolition Vastu
                </Link>
              </li>
              <li>
                <Link to="/astrology" className="transition hover:text-amber-400">
                  Astrology
                </Link>
              </li>
              <li>
                <Link to="/international" className="transition hover:text-amber-400">
                  International / NRI
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition hover:text-amber-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/insights" className="transition hover:text-amber-400">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-amber-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us (lg:col-span-3) */}
          <div className="space-y-3 text-xs lg:col-span-3">
            <h4 className="font-serif text-sm font-bold tracking-wider text-slate-100">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span>{siteConfig.contact.address.addressLocality}, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  onClick={() => trackConversion('phone_call', 'Footer Phone')}
                  className="hover:text-amber-400"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-amber-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-400">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1 text-[11px] text-slate-400">
                <Clock className="h-4 w-4 shrink-0 text-amber-400" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter (lg:col-span-2) */}
          <div className="space-y-3 text-xs lg:col-span-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-slate-100">
              Newsletter
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Get insights, tips and updates.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-2 flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full min-w-0 rounded-l-lg border border-slate-800 bg-slate-900/90 px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to 7Rays newsletter"
                  className="flex h-[34px] w-9 shrink-0 items-center justify-center rounded-r-lg bg-amber-500 text-slate-950 transition hover:bg-amber-400"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Col 5: Golden Sacred Geometry Celestial Compass Rose Image & ALIGN BALANCE THRIVE (lg:col-span-2) */}
          <div className="flex flex-col items-center justify-center lg:col-span-2 lg:items-end">
            <div className="group relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
              {/* Golden Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-2xl transition-all duration-700 group-hover:bg-amber-400/30" />
              <img
                src="/images/footer-mandala.png"
                alt="7Rays Astro Vastu 16-Zone Sacred Geometry Astrolabe & Compass Rose"
                loading="lazy"
                className="relative h-40 w-40 object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_0_40px_rgba(245,158,11,0.6)] sm:h-48 sm:w-48"
              />
            </div>
            <div className="mt-2 flex flex-col items-center space-y-0.5 text-center font-serif text-[10px] font-semibold tracking-[0.28em] text-amber-300 uppercase">
              <span>ALIGN</span>
              <span>BALANCE</span>
              <span>THRIVE</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-6 text-xs text-slate-500 sm:flex-row">
          <div>&copy; 2026 {siteConfig.legalName || '7Rays Astro Vastu'}. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="transition hover:text-amber-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-amber-400">
              Terms &amp; Conditions
            </Link>
            <Link to="/disclaimer" className="transition hover:text-amber-400">
              Disclaimer
            </Link>
            <Link to="/sitemap" className="transition hover:text-amber-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
