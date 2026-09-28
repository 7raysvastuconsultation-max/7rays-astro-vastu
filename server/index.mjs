import express from 'express'
import cors from 'cors'
import {
  saveEnquiry,
  logEvent,
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
  getAnalyticsDashboard,
  getAllEvents,
} from './db.mjs'

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Session-ID'],
  })
)

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Helper to extract client IP
function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket?.remoteAddress || req.ip || null
}

// -------------------------------------------------------------
// Health Check
// -------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: '7Rays Astro Vastu Analytics & Leads Engine',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  })
})

// -------------------------------------------------------------
// Analytics Events Tracking (Calls, WhatsApp clicks, Page views)
// -------------------------------------------------------------
app.post('/api/analytics/event', (req, res) => {
  try {
    const {
      eventType,
      eventLabel,
      pagePath,
      pageTitle,
      referrer,
      sessionId,
      utmSource,
      utmMedium,
      utmCampaign,
      metadata,
    } = req.body

    if (!eventType) {
      return res.status(400).json({ error: 'eventType is required' })
    }

    const ipAddress = getClientIp(req)
    const userAgent = req.headers['user-agent'] || null

    const result = logEvent({
      eventType,
      eventLabel,
      pagePath,
      pageTitle,
      referrer,
      sessionId: sessionId || req.headers['x-session-id'] || null,
      utmSource,
      utmMedium,
      utmCampaign,
      metadata,
      ipAddress,
      userAgent,
    })

    res.status(201).json(result)
  } catch (error) {
    console.error('Error logging event:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error.message })
  }
})

// -------------------------------------------------------------
// Customer Enquiry Submissions (Consultation Modal, Contact Page)
// -------------------------------------------------------------
app.post('/api/enquiries', (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      propertyType,
      location,
      serviceRequired,
      approxSize,
      consultationType,
      message,
      fileName,
      source,
      pageUrl,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      sessionId,
    } = req.body

    if (!phone && !name) {
      return res.status(400).json({ error: 'Name and Phone number are required' })
    }

    const ipAddress = getClientIp(req)
    const userAgent = req.headers['user-agent'] || null

    const result = saveEnquiry({
      name,
      phone,
      email,
      propertyType,
      location,
      serviceRequired,
      approxSize,
      consultationType,
      message,
      fileName,
      source: source || 'Website Enquiry Form',
      pageUrl,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      sessionId: sessionId || req.headers['x-session-id'] || null,
      ipAddress,
      userAgent,
      status: 'new',
    })

    console.log(`[LEAD RECEIVED] ${name} (${phone}) - Service: ${serviceRequired || 'General'}`)

    res.status(201).json({
      success: true,
      id: result.id,
      message: 'Enquiry submitted successfully. Our team will contact you shortly.',
      createdAt: result.createdAt,
    })
  } catch (error) {
    console.error('Error creating enquiry:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error.message })
  }
})

// -------------------------------------------------------------
// Get Enquiries List (with filtering and pagination)
// -------------------------------------------------------------
app.get('/api/enquiries', (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 50
    const offset = parseInt(req.query.offset, 10) || 0
    const status = req.query.status || null
    const search = req.query.search || null

    const data = getEnquiries({ limit, offset, status, search })
    res.json(data)
  } catch (error) {
    console.error('Error fetching enquiries:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error.message })
  }
})

// -------------------------------------------------------------
// Update Enquiry Status & Notes
// -------------------------------------------------------------
app.patch('/api/enquiries/:id', (req, res) => {
  try {
    const { id } = req.params
    const { status, notes } = req.body

    const result = updateEnquiryStatus(id, { status, notes })
    if (!result.updated) {
      return res.status(404).json({ error: 'Enquiry not found' })
    }

    res.json({ success: true, message: 'Enquiry updated successfully', ...result })
  } catch (error) {
    console.error('Error updating enquiry:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error.message })
  }
})

// -------------------------------------------------------------
// Delete Enquiry
// -------------------------------------------------------------
app.delete('/api/enquiries/:id', (req, res) => {
  try {
    const { id } = req.params
    const result = deleteEnquiry(id)
    if (!result.deleted) {
      return res.status(404).json({ error: 'Enquiry not found' })
    }
    res.json({ success: true, message: 'Enquiry deleted' })
  } catch (error) {
    console.error('Error deleting enquiry:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error.message })
  }
})

// -------------------------------------------------------------
// Export Enquiries as CSV
// -------------------------------------------------------------
app.get('/api/enquiries/export', (req, res) => {
  try {
    const { rows } = getEnquiries({ limit: 10000, offset: 0 })

    const headers = [
      'ID',
      'Date',
      'Name',
      'Phone',
      'Email',
      'Property Type',
      'Location',
      'Service Required',
      'Approx Size',
      'Consultation Type',
      'Status',
      'Source',
      'Notes',
    ]

    const csvRows = [headers.join(',')]

    for (const row of rows) {
      const escape = (val) => {
        if (!val) return '""'
        return `"${String(val).replace(/"/g, '""')}"`
      }

      csvRows.push(
        [
          escape(row.id),
          escape(new Date(row.created_at).toLocaleString('en-IN')),
          escape(row.name),
          escape(row.phone),
          escape(row.email),
          escape(row.property_type),
          escape(row.location),
          escape(row.service_required),
          escape(row.approx_size),
          escape(row.consultation_type),
          escape(row.status),
          escape(row.source),
          escape(row.notes),
        ].join(',')
      )
    }

    res.setHeader('Content-Type', 'text/csv')
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="7rays_enquiries_${new Date().toISOString().slice(0, 10)}.csv"`
    )
    res.send(csvRows.join('\n'))
  } catch (error) {
    console.error('Error exporting enquiries:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error.message })
  }
})

// -------------------------------------------------------------
// Analytics Dashboard Aggregates & KPIs
// -------------------------------------------------------------
app.get('/api/analytics/dashboard', (req, res) => {
  try {
    const dashboard = getAnalyticsDashboard()
    res.json(dashboard)
  } catch (error) {
    console.error('Error fetching dashboard:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error.message })
  }
})

// -------------------------------------------------------------
// Raw Analytics Events Log
// -------------------------------------------------------------
app.get('/api/analytics/events', (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 100
    const offset = parseInt(req.query.offset, 10) || 0
    const eventType = req.query.eventType || null

    const data = getAllEvents({ limit, offset, eventType })
    res.json(data)
  } catch (error) {
    console.error('Error fetching events:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error.message })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`\n==================================================`)
  console.log(`🚀 7Rays Astro Vastu Analytics Backend Running`)
  console.log(`📍 Port: http://localhost:${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`)
  console.log(`📈 Dashboard API: http://localhost:${PORT}/api/analytics/dashboard`)
  console.log(`==================================================\n`)
})

export default app
