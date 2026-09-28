import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { initAnalytics } from './utils/analytics'
import { initWebVitals } from './utils/vitals'

// Initialize analytics and performance tracking
initAnalytics()
initWebVitals((metric) => {
  if (import.meta.env.DEV) {
    console.info(`[Web Vital] ${metric.name}: ${metric.value}ms (${metric.rating})`)
  }
})

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
