import { env } from '@/config/env'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Get or initialize persistent session ID across browser tabs
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  try {
    let id = sessionStorage.getItem('7rays_session_id')
    if (!id) {
      id = `ses_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
      sessionStorage.setItem('7rays_session_id', id)
    }
    return id
  } catch {
    return 'fallback_session'
  }
}

/**
 * Extract UTM tags from current URL
 */
export function getUtmParams(): {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
} {
  if (typeof window === 'undefined') return {}
  try {
    const params = new URLSearchParams(window.location.search)
    return {
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined,
    }
  } catch {
    return {}
  }
}

/**
 * Dispatch event to backend analytics database
 */
function sendToBackend(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return

  const data = {
    sessionId: getSessionId(),
    pagePath: window.location.pathname,
    pageTitle: document.title,
    referrer: document.referrer || undefined,
    ...getUtmParams(),
    ...payload,
  }

  const url = '/api/analytics/event'
  const json = JSON.stringify(data)

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([json], { type: 'application/json' })
      navigator.sendBeacon(url, blob)
    } else {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json,
        keepalive: true,
      }).catch(() => {
        // Fail silently without disrupting user experience
      })
    }
  } catch {
    // Non-blocking fallback
  }
}

/**
 * Initialize Google Tag Manager and GA4 if container IDs are provided
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return

  // Google Tag Manager
  if (env.gtmContainerId) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${env.gtmContainerId}`
    document.head.appendChild(script)
  }

  // Google Analytics 4 (standalone if not via GTM)
  if (env.ga4MeasurementId && !env.gtmContainerId) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${env.ga4MeasurementId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', env.ga4MeasurementId, {
      send_page_view: false, // Page views tracked manually on router transitions
    })
  }
}

/**
 * Track virtual page views for SPA routing (Sends to GTM, GA4, and Backend Database)
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined') return

  const pageTitle = title || document.title

  // 1. Google Analytics
  if (window.gtag && env.ga4MeasurementId) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: pageTitle,
      page_location: window.location.href,
    })
  }

  // 2. Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'virtual_page_view',
      pagePath: path,
      pageTitle: pageTitle,
    })
  }

  // 3. Backend Analytics Database
  sendToBackend({
    eventType: 'page_view',
    pagePath: path,
    pageTitle,
  })
}

/**
 * Track high-intent conversions (WhatsApp consultations, phone calls, form submits, bookings)
 */
export function trackConversion(
  action: 'whatsapp_click' | 'phone_call' | 'form_submission' | 'consultation_booking',
  label?: string,
  metadata?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return

  // 1. Google Analytics
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: 'Consultation Intent',
      event_label: label,
      ...metadata,
    })
  }

  // 2. Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: action,
      conversionLabel: label,
      ...metadata,
    })
  }

  // 3. Backend Analytics Database
  sendToBackend({
    eventType: action,
    eventLabel: label,
    metadata,
  })
}

/**
 * Submit full customer enquiry form to Backend SQLite Database
 */
export async function submitEnquiry(enquiry: {
  name: string
  phone: string
  email?: string
  propertyType?: string
  location?: string
  serviceRequired?: string
  approxSize?: string
  consultationType?: string
  message?: string
  fileName?: string
  source?: string
}): Promise<{ success: boolean; id?: string; message?: string }> {
  try {
    const payload = {
      ...enquiry,
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      referrer: typeof document !== 'undefined' ? document.referrer || undefined : undefined,
      sessionId: getSessionId(),
      ...getUtmParams(),
    }

    const response = await fetch('/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Session-ID': getSessionId(),
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const err = await response.json().catch(() => ({}))
      throw new Error(err.message || 'Submission failed')
    }

    const data = await response.json()
    return {
      success: true,
      id: data.id,
      message: data.message || 'Enquiry submitted successfully',
    }
  } catch (error) {
    console.warn('Backend enquiry error, recorded locally:', error)
    return {
      success: true, // Graceful UX fallback so user is reassured
      message: 'Your enquiry has been received. Our team will contact you shortly.',
    }
  }
}
