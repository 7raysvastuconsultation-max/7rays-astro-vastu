/* eslint-disable react-refresh/only-export-components */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/common/Layout'

// Static imports for 100% synchronous SSR pre-rendering
import { HomePage } from '@/pages/static/HomePage'
import { AboutPage } from '@/pages/static/AboutPage'
import { The7RaysPage } from '@/pages/static/The7RaysPage'
import { ProcessPage } from '@/pages/static/ProcessPage'
import { ContactPage } from '@/pages/static/ContactPage'
import { PrivacyPolicyPage } from '@/pages/static/PrivacyPolicyPage'
import { TermsPage } from '@/pages/static/TermsPage'
import { DisclaimerPage } from '@/pages/static/DisclaimerPage'
import { HtmlSitemapPage } from '@/pages/static/HtmlSitemapPage'
import { InternationalConsultationPage } from '@/pages/static/InternationalConsultationPage'
import { ConsultantProfilePage } from '@/pages/static/ConsultantProfilePage'
import { FaqPage } from '@/pages/static/FaqPage'
import { ShopPage } from '@/pages/shop/ShopPage'

import { ServicesPage } from '@/pages/services/ServicesPage'
import { ResidentialVastuPage } from '@/pages/services/ResidentialVastuPage'
import { ApartmentVastuPage } from '@/pages/services/ApartmentVastuPage'
import { CommercialVastuPage } from '@/pages/services/CommercialVastuPage'
import { OfficeVastuPage } from '@/pages/services/OfficeVastuPage'
import { IndustrialVastuPage } from '@/pages/services/IndustrialVastuPage'
import { CorporateVastuPage } from '@/pages/services/CorporateVastuPage'
import { NonDemolitionVastuPage } from '@/pages/services/NonDemolitionVastuPage'
import { VastuAuditPage } from '@/pages/services/VastuAuditPage'
import { OnlineVastuPage } from '@/pages/services/OnlineVastuPage'
import { AstroVastuPage } from '@/pages/services/AstroVastuPage'
import { ServiceDetailPage } from '@/pages/services/ServiceDetailPage'

import { AstrologyPage } from '@/pages/services/AstrologyPage'
import { BirthChartPage } from '@/pages/services/BirthChartPage'
import { CareerAstrologyPage } from '@/pages/services/CareerAstrologyPage'
import { BusinessAstrologyPage } from '@/pages/services/BusinessAstrologyPage'
import { MarriageAstrologyPage } from '@/pages/services/MarriageAstrologyPage'

import { LocationsPage } from '@/pages/locations/LocationsPage'
import { BangaloreMasterPage } from '@/pages/locations/BangaloreMasterPage'
import { BangaloreResidentialVastuPage } from '@/pages/locations/BangaloreResidentialVastuPage'
import { BangaloreCommercialVastuPage } from '@/pages/locations/BangaloreCommercialVastuPage'
import { BangaloreIndustrialVastuPage } from '@/pages/locations/BangaloreIndustrialVastuPage'
import { BangaloreVastuAuditPage } from '@/pages/locations/BangaloreVastuAuditPage'
import { BangaloreAstrologyPage } from '@/pages/locations/BangaloreAstrologyPage'
import { LocationDetailPage } from '@/pages/locations/LocationDetailPage'
import { RegionalLocationPage } from '@/pages/locations/RegionalLocationPage'

import { BlogPage } from '@/pages/blog/BlogPage'
import { BlogPostPage } from '@/pages/blog/BlogPostPage'
import { CaseStudiesPage } from '@/pages/caseStudies/CaseStudiesPage'
import { CaseStudyDetailPage } from '@/pages/caseStudies/CaseStudyDetailPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ServerApp() {
  return (
    <Layout>
      <Routes>
        {/* Core & Brand Philosophy */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/consultant/rishwa-sinha" element={<ConsultantProfilePage />} />
        <Route path="/the-7-rays" element={<The7RaysPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/sitemap" element={<HtmlSitemapPage />} />
        <Route path="/international" element={<InternationalConsultationPage />} />

        {/* Vastu Services Hierarchy */}
        <Route path="/vastu/residential" element={<ResidentialVastuPage />} />
        <Route path="/vastu/apartment-vastu" element={<ApartmentVastuPage />} />
        <Route path="/vastu/commercial" element={<CommercialVastuPage />} />
        <Route path="/vastu/office-vastu" element={<OfficeVastuPage />} />
        <Route path="/vastu/corporate" element={<CorporateVastuPage />} />
        <Route path="/vastu/industrial" element={<IndustrialVastuPage />} />
        <Route path="/vastu/non-demolition" element={<NonDemolitionVastuPage />} />
        <Route path="/vastu-services" element={<ServicesPage />} />
        <Route path="/vastu-services/residential-vastu" element={<ResidentialVastuPage />} />
        <Route path="/vastu-services/apartment-vastu" element={<ApartmentVastuPage />} />
        <Route path="/vastu-services/commercial-vastu" element={<CommercialVastuPage />} />
        <Route path="/vastu-services/office-vastu" element={<OfficeVastuPage />} />
        <Route path="/vastu-services/industrial-vastu" element={<IndustrialVastuPage />} />
        <Route path="/vastu-services/corporate-vastu" element={<CorporateVastuPage />} />
        <Route path="/vastu-services/non-demolition-vastu" element={<NonDemolitionVastuPage />} />
        <Route path="/vastu-services/vastu-audit" element={<VastuAuditPage />} />
        <Route path="/services/online-vastu-consultation" element={<OnlineVastuPage />} />
        <Route path="/online-vastu-consultation-india" element={<OnlineVastuPage />} />
        <Route path="/services/astro-vastu-synthesis" element={<AstroVastuPage />} />
        <Route path="/astro-vastu-consultation" element={<AstroVastuPage />} />
        <Route path="/vastu-services/:slug" element={<ServiceDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />

        {/* Direct Service Aliases */}
        <Route path="/vastu/office" element={<OfficeVastuPage />} />
        <Route path="/vastu/home" element={<ResidentialVastuPage />} />
        <Route path="/vastu/flat" element={<ApartmentVastuPage />} />
        <Route path="/vastu/plot" element={<VastuAuditPage />} />
        <Route path="/vastu/interior" element={<NonDemolitionVastuPage />} />
        <Route path="/vastu/consultation" element={<ServicesPage />} />

        {/* Astrology Services Hierarchy */}
        <Route path="/astrology" element={<AstrologyPage />} />
        <Route path="/astrology-consultation" element={<AstrologyPage />} />
        <Route path="/astrology/birth-chart" element={<BirthChartPage />} />
        <Route path="/astrology/career" element={<CareerAstrologyPage />} />
        <Route path="/astrology/business" element={<BusinessAstrologyPage />} />
        <Route path="/astrology/marriage" element={<MarriageAstrologyPage />} />

        {/* E-Commerce Shop Section */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:categoryOrSlug" element={<ShopPage />} />
        <Route path="/store" element={<ShopPage />} />
        <Route path="/products" element={<ShopPage />} />

        {/* Local SEO Architecture */}
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/bangalore" element={<BangaloreMasterPage />} />
        <Route
          path="/locations/bangalore/residential-vastu"
          element={<BangaloreResidentialVastuPage />}
        />
        <Route
          path="/locations/bangalore/commercial-vastu"
          element={<BangaloreCommercialVastuPage />}
        />
        <Route
          path="/locations/bangalore/industrial-vastu"
          element={<BangaloreIndustrialVastuPage />}
        />
        <Route path="/locations/bangalore/vastu-audit" element={<BangaloreVastuAuditPage />} />
        <Route path="/locations/bangalore/astrology" element={<BangaloreAstrologyPage />} />
        <Route path="/locations/mumbai" element={<RegionalLocationPage />} />
        <Route path="/locations/delhi-ncr" element={<RegionalLocationPage />} />
        <Route path="/locations/hyderabad" element={<RegionalLocationPage />} />
        <Route path="/locations/pune" element={<RegionalLocationPage />} />
        <Route path="/locations/kolkata" element={<RegionalLocationPage />} />
        <Route path="/locations/:slug" element={<LocationDetailPage />} />

        {/* Insights & Blog Hierarchy */}
        <Route path="/insights" element={<BlogPage />} />
        <Route path="/insights/commercial-vastu/:slug" element={<BlogPostPage />} />
        <Route path="/insights/residential-vastu/:slug" element={<BlogPostPage />} />
        <Route path="/insights/astrology/:slug" element={<BlogPostPage />} />
        <Route path="/insights/:slug" element={<BlogPostPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        {/* Case Studies */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export function render(url: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const helmetContext: any = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <ServerApp />
      </StaticRouter>
    </HelmetProvider>
  )

  const helmet = helmetContext.helmet || {}

  return {
    html,
    head: {
      title: helmet.title ? helmet.title.toString() : '',
      meta: helmet.meta ? helmet.meta.toString() : '',
      link: helmet.link ? helmet.link.toString() : '',
      script: helmet.script ? helmet.script.toString() : '',
      style: helmet.style ? helmet.style.toString() : '',
      htmlAttributes: helmet.htmlAttributes ? helmet.htmlAttributes.toString() : '',
      bodyAttributes: helmet.bodyAttributes ? helmet.bodyAttributes.toString() : '',
    },
    helmet,
  }
}
