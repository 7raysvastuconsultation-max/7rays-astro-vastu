/**
 * Core Web Vitals telemetry and performance tracking utility
 * Measures and logs:
 * - TTFB (Time to First Byte)
 * - LCP (Largest Contentful Paint)
 * - CLS (Cumulative Layout Shift)
 * - INP (Interaction to Next Paint)
 */

export interface Metric {
  name: 'TTFB' | 'LCP' | 'CLS' | 'INP'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta?: number
}

const thresholds = {
  TTFB: { good: 800, poor: 1800 },
  LCP: { good: 2500, poor: 4000 },
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
}

function getRating(name: keyof typeof thresholds, value: number): Metric['rating'] {
  const { good, poor } = thresholds[name]
  if (value <= good) return 'good'
  if (value <= poor) return 'needs-improvement'
  return 'poor'
}

export function initWebVitals(onReport?: (metric: Metric) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return
  }

  // 1. TTFB (Navigation Timing)
  try {
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
    if (navEntries.length > 0) {
      const ttfb = navEntries[0].responseStart - navEntries[0].requestStart
      if (ttfb > 0) {
        const metric: Metric = {
          name: 'TTFB',
          value: Math.round(ttfb),
          rating: getRating('TTFB', ttfb),
        }
        if (onReport) onReport(metric)
      }
    }
  } catch {
    // Ignore navigation timing error
  }

  // 2. LCP (Largest Contentful Paint)
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number }
      if (lastEntry) {
        const value = Math.round(lastEntry.startTime)
        const metric: Metric = {
          name: 'LCP',
          value,
          rating: getRating('LCP', value),
        }
        if (onReport) onReport(metric)
      }
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
  } catch {
    // LCP observer not supported
  }

  // 3. CLS (Cumulative Layout Shift)
  try {
    let clsValue = 0
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const layoutShift = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number }
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value
        }
      }
      const metric: Metric = {
        name: 'CLS',
        value: Number(clsValue.toFixed(4)),
        rating: getRating('CLS', clsValue),
      }
      if (onReport) onReport(metric)
    })
    clsObserver.observe({ type: 'layout-shift', buffered: true })
  } catch {
    // CLS observer not supported
  }

  // 4. INP (Event Timing / Interaction to Next Paint)
  try {
    let maxDuration = 0
    const inpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const eventEntry = entry as PerformanceEntry & { duration: number; interactionId?: number }
        if (eventEntry.interactionId && eventEntry.duration > maxDuration) {
          maxDuration = eventEntry.duration
          const metric: Metric = {
            name: 'INP',
            value: Math.round(maxDuration),
            rating: getRating('INP', maxDuration),
          }
          if (onReport) onReport(metric)
        }
      }
    })
    inpObserver.observe({
      type: 'event',
      buffered: true,
      durationThreshold: 40,
    } as PerformanceObserverInit)
  } catch {
    // INP observer not supported
  }
}
