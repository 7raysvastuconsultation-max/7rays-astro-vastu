import React from 'react'
import { Link } from 'react-router-dom'
import { Compass, FileText, MapPin, Building } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { siteConfig } from '@/config/site'
import { locationsData } from '@/data/locations'
import { blogPostsData } from '@/data/blog'
import { caseStudiesData } from '@/data/caseStudies'

export const HtmlSitemapPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="HTML Sitemap & Website Directory | 7Rays Astro Vastu"
        description="Comprehensive index of all static pages, Vastu services, Bangalore locations, insights, and case studies on 7Rays Astro Vastu."
        canonicalUrl={`${siteConfig.url}/sitemap`}
      />
      <BreadcrumbSchema items={[{ name: 'Sitemap', url: '/sitemap' }]} />

      <div className="border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            INDEX OF ARCHITECTURE
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-slate-100 sm:text-5xl">
            Website Sitemap
          </h1>
          <p className="mt-4 max-w-xl text-xs text-slate-300 sm:text-sm">
            Quick directory to explore our services, Bangalore neighborhood consultations,
            scientific research articles, and company information.
          </p>
        </div>
      </div>

      <div className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Core Pages */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-2 border-b border-amber-200 pb-2 font-serif text-base font-bold text-slate-900">
                <Compass className="h-4 w-4 text-amber-700" />
                <span>Core Pages</span>
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                <li>
                  <Link to="/" className="hover:text-amber-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-amber-800">
                    About 7Rays
                  </Link>
                </li>
                <li>
                  <Link to="/the-7-rays" className="hover:text-amber-800">
                    The 7 Rays Philosophy
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="hover:text-amber-800">
                    Consultation Process
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-800">
                    Contact &amp; Bookings
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-amber-800">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-amber-800">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-amber-800 underline"
                  >
                    XML Sitemap (for Crawlers)
                  </a>
                </li>
              </ul>
            </div>

            {/* Vastu Services */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-2 border-b border-amber-200 pb-2 font-serif text-base font-bold text-slate-900">
                <Building className="h-4 w-4 text-amber-700" />
                <span>Vastu Services</span>
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                <li>
                  <Link to="/vastu-services" className="hover:text-amber-800">
                    All Vastu Services
                  </Link>
                </li>
                <li>
                  <Link to="/vastu/residential" className="hover:text-amber-800">
                    Residential Vastu (Bangalore)
                  </Link>
                </li>
                <li>
                  <Link to="/vastu/commercial" className="hover:text-amber-800">
                    Commercial Office Vastu
                  </Link>
                </li>
                <li>
                  <Link to="/vastu/industrial" className="hover:text-amber-800">
                    Industrial &amp; Factory Vastu
                  </Link>
                </li>
                <li>
                  <Link to="/vastu/corporate" className="hover:text-amber-800">
                    Corporate Workplace Vastu
                  </Link>
                </li>
                <li>
                  <Link to="/vastu-services/vastu-audit" className="hover:text-amber-800">
                    Vastu Audit &amp; Energy Scan
                  </Link>
                </li>
                <li className="pt-2 font-semibold text-slate-900">
                  <Link to="/astrology" className="hover:text-amber-800">
                    Vedic Astrology Hub
                  </Link>
                </li>
                <li>
                  <Link to="/astrology/birth-chart" className="hover:text-amber-800">
                    Birth Chart &amp; Kundli Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/astrology/career" className="hover:text-amber-800">
                    Career Astrology Guidance
                  </Link>
                </li>
                <li>
                  <Link to="/astrology/business" className="hover:text-amber-800">
                    Business &amp; Enterprise Timing
                  </Link>
                </li>
                <li>
                  <Link to="/astrology/marriage" className="hover:text-amber-800">
                    Marriage &amp; Kundli Milan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Bangalore Hubs */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-2 border-b border-amber-200 pb-2 font-serif text-base font-bold text-slate-900">
                <MapPin className="h-4 w-4 text-amber-700" />
                <span>Bangalore Local Hubs</span>
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                <li>
                  <Link to="/locations/bangalore" className="font-semibold hover:text-amber-800">
                    Bangalore Master Hub
                  </Link>
                </li>
                <li>
                  <Link
                    to="/locations/bangalore/residential-vastu"
                    className="hover:text-amber-800"
                  >
                    Bangalore Residential Vastu
                  </Link>
                </li>
                <li>
                  <Link to="/locations/bangalore/commercial-vastu" className="hover:text-amber-800">
                    Bangalore Commercial Vastu
                  </Link>
                </li>
                <li>
                  <Link to="/locations/bangalore/industrial-vastu" className="hover:text-amber-800">
                    Bangalore Industrial Vastu
                  </Link>
                </li>
                <li>
                  <Link to="/locations/bangalore/vastu-audit" className="hover:text-amber-800">
                    Bangalore Vastu Energy Audit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/locations/bangalore/astrology"
                    className="font-medium text-amber-800 hover:text-amber-950"
                  >
                    Bangalore Astrology Desk
                  </Link>
                </li>
                {locationsData.map((loc) => (
                  <li key={loc.slug}>
                    <Link to={`/locations/${loc.slug}`} className="hover:text-amber-800">
                      {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insights & Case Studies */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-2 border-b border-amber-200 pb-2 font-serif text-base font-bold text-slate-900">
                <FileText className="h-4 w-4 text-amber-700" />
                <span>Insights &amp; Results</span>
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                <li>
                  <Link to="/insights" className="font-semibold hover:text-amber-800">
                    All Insights / Blog
                  </Link>
                </li>
                {blogPostsData.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/insights/${post.slug}`}
                      className="line-clamp-1 hover:text-amber-800"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link to="/case-studies" className="font-semibold hover:text-amber-800">
                    All Case Studies
                  </Link>
                </li>
                {caseStudiesData.map((cs) => (
                  <li key={cs.slug}>
                    <Link
                      to={`/case-studies/${cs.slug}`}
                      className="line-clamp-1 hover:text-amber-800"
                    >
                      {cs.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
