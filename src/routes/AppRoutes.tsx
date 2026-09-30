import React, { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from '@/components/common/Layout'
import { LoadingFallback } from '@/components/common/LoadingFallback'
import { HomePage } from '@/pages/static/HomePage'

// Lazy-loaded routes for performance & Core Web Vitals optimization
const AboutPage = lazy(() =>
  import('@/pages/static/AboutPage').then((m) => ({ default: m.AboutPage }))
)
const The7RaysPage = lazy(() =>
  import('@/pages/static/The7RaysPage').then((m) => ({ default: m.The7RaysPage }))
)
const ProcessPage = lazy(() =>
  import('@/pages/static/ProcessPage').then((m) => ({ default: m.ProcessPage }))
)
const ContactPage = lazy(() =>
  import('@/pages/static/ContactPage').then((m) => ({ default: m.ContactPage }))
)
const PrivacyPolicyPage = lazy(() =>
  import('@/pages/static/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage }))
)
const TermsPage = lazy(() =>
  import('@/pages/static/TermsPage').then((m) => ({ default: m.TermsPage }))
)
const DisclaimerPage = lazy(() =>
  import('@/pages/static/DisclaimerPage').then((m) => ({ default: m.DisclaimerPage }))
)
const HtmlSitemapPage = lazy(() =>
  import('@/pages/static/HtmlSitemapPage').then((m) => ({ default: m.HtmlSitemapPage }))
)
const InternationalConsultationPage = lazy(() =>
  import('@/pages/static/InternationalConsultationPage').then((m) => ({
    default: m.InternationalConsultationPage,
  }))
)
const ConsultantProfilePage = lazy(() =>
  import('@/pages/static/ConsultantProfilePage').then((m) => ({
    default: m.ConsultantProfilePage,
  }))
)
const FaqPage = lazy(() => import('@/pages/static/FaqPage').then((m) => ({ default: m.FaqPage })))
const ShopPage = lazy(() => import('@/pages/shop/ShopPage').then((m) => ({ default: m.ShopPage })))

const ServicesPage = lazy(() =>
  import('@/pages/services/ServicesPage').then((m) => ({ default: m.ServicesPage }))
)
const ResidentialVastuPage = lazy(() =>
  import('@/pages/services/ResidentialVastuPage').then((m) => ({ default: m.ResidentialVastuPage }))
)
const ApartmentVastuPage = lazy(() =>
  import('@/pages/services/ApartmentVastuPage').then((m) => ({ default: m.ApartmentVastuPage }))
)
const CommercialVastuPage = lazy(() =>
  import('@/pages/services/CommercialVastuPage').then((m) => ({ default: m.CommercialVastuPage }))
)
const OfficeVastuPage = lazy(() =>
  import('@/pages/services/OfficeVastuPage').then((m) => ({ default: m.OfficeVastuPage }))
)
const IndustrialVastuPage = lazy(() =>
  import('@/pages/services/IndustrialVastuPage').then((m) => ({ default: m.IndustrialVastuPage }))
)
const CorporateVastuPage = lazy(() =>
  import('@/pages/services/CorporateVastuPage').then((m) => ({ default: m.CorporateVastuPage }))
)
const NonDemolitionVastuPage = lazy(() =>
  import('@/pages/services/NonDemolitionVastuPage').then((m) => ({
    default: m.NonDemolitionVastuPage,
  }))
)
const VastuAuditPage = lazy(() =>
  import('@/pages/services/VastuAuditPage').then((m) => ({ default: m.VastuAuditPage }))
)
const ServiceDetailPage = lazy(() =>
  import('@/pages/services/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
)

const AstrologyPage = lazy(() =>
  import('@/pages/services/AstrologyPage').then((m) => ({ default: m.AstrologyPage }))
)
const BirthChartPage = lazy(() =>
  import('@/pages/services/BirthChartPage').then((m) => ({ default: m.BirthChartPage }))
)
const CareerAstrologyPage = lazy(() =>
  import('@/pages/services/CareerAstrologyPage').then((m) => ({ default: m.CareerAstrologyPage }))
)
const BusinessAstrologyPage = lazy(() =>
  import('@/pages/services/BusinessAstrologyPage').then((m) => ({
    default: m.BusinessAstrologyPage,
  }))
)
const MarriageAstrologyPage = lazy(() =>
  import('@/pages/services/MarriageAstrologyPage').then((m) => ({
    default: m.MarriageAstrologyPage,
  }))
)

const LocationsPage = lazy(() =>
  import('@/pages/locations/LocationsPage').then((m) => ({ default: m.LocationsPage }))
)
const BangaloreMasterPage = lazy(() =>
  import('@/pages/locations/BangaloreMasterPage').then((m) => ({ default: m.BangaloreMasterPage }))
)
const BangaloreResidentialVastuPage = lazy(() =>
  import('@/pages/locations/BangaloreResidentialVastuPage').then((m) => ({
    default: m.BangaloreResidentialVastuPage,
  }))
)
const BangaloreCommercialVastuPage = lazy(() =>
  import('@/pages/locations/BangaloreCommercialVastuPage').then((m) => ({
    default: m.BangaloreCommercialVastuPage,
  }))
)
const BangaloreIndustrialVastuPage = lazy(() =>
  import('@/pages/locations/BangaloreIndustrialVastuPage').then((m) => ({
    default: m.BangaloreIndustrialVastuPage,
  }))
)
const BangaloreVastuAuditPage = lazy(() =>
  import('@/pages/locations/BangaloreVastuAuditPage').then((m) => ({
    default: m.BangaloreVastuAuditPage,
  }))
)
const BangaloreAstrologyPage = lazy(() =>
  import('@/pages/locations/BangaloreAstrologyPage').then((m) => ({
    default: m.BangaloreAstrologyPage,
  }))
)
const LocationDetailPage = lazy(() =>
  import('@/pages/locations/LocationDetailPage').then((m) => ({ default: m.LocationDetailPage }))
)

const BlogPage = lazy(() => import('@/pages/blog/BlogPage').then((m) => ({ default: m.BlogPage })))
const BlogPostPage = lazy(() =>
  import('@/pages/blog/BlogPostPage').then((m) => ({ default: m.BlogPostPage }))
)
const CaseStudiesPage = lazy(() =>
  import('@/pages/caseStudies/CaseStudiesPage').then((m) => ({ default: m.CaseStudiesPage }))
)
const CaseStudyDetailPage = lazy(() =>
  import('@/pages/caseStudies/CaseStudyDetailPage').then((m) => ({
    default: m.CaseStudyDetailPage,
  }))
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
)
const AnalyticsDashboardPage = lazy(() =>
  import('@/pages/admin/AnalyticsDashboardPage').then((m) => ({
    default: m.AnalyticsDashboardPage,
  }))
)

import { trackPageView } from '@/utils/analytics'

function RouteChangeTracker(): null {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(location.pathname)
  }, [location])

  return null
}

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <RouteChangeTracker />
      <Suspense fallback={<LoadingFallback />}>
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

          {/* Vastu & Astrology E-Commerce Shop Section */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:categoryOrSlug" element={<ShopPage />} />
          <Route path="/store" element={<ShopPage />} />
          <Route path="/products" element={<ShopPage />} />

          {/* Bangalore Local SEO Architecture */}
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

          {/* Analytics & Leads Central */}
          <Route path="/admin/analytics" element={<AnalyticsDashboardPage />} />
          <Route path="/analytics" element={<AnalyticsDashboardPage />} />
          <Route path="/dashboard" element={<AnalyticsDashboardPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
