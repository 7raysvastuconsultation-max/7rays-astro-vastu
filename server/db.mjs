import { DatabaseSync } from 'node:sqlite'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdirSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, '..', 'data')

// Ensure data directory exists
mkdirSync(dataDir, { recursive: true })

const dbPath = join(dataDir, '7rays_analytics.db')
const db = new DatabaseSync(dbPath)

// Initialize WAL mode and Pragmas for optimal read/write concurrency
db.exec('PRAGMA journal_mode = WAL;')
db.exec('PRAGMA foreign_keys = ON;')

// Initialize Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    property_type TEXT,
    location TEXT,
    service_required TEXT,
    approx_size TEXT,
    consultation_type TEXT,
    message TEXT,
    file_name TEXT,
    source TEXT DEFAULT 'Website Form',
    page_url TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    session_id TEXT,
    ip_address TEXT,
    user_agent TEXT,
    status TEXT DEFAULT 'new',
    notes TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries (created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries (status);

  CREATE TABLE IF NOT EXISTS analytics_events (
    id TEXT PRIMARY KEY,
    event_type TEXT NOT NULL,
    event_label TEXT,
    page_path TEXT,
    page_title TEXT,
    referrer TEXT,
    session_id TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    metadata TEXT,
    ip_address TEXT,
    user_agent TEXT,
    created_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_events_type ON analytics_events (event_type);
  CREATE INDEX IF NOT EXISTS idx_events_created ON analytics_events (created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_events_session ON analytics_events (session_id);
`)

// Prepared queries
const insertEnquiryStmt = db.prepare(`
  INSERT INTO enquiries (
    id, name, phone, email, property_type, location,
    service_required, approx_size, consultation_type, message,
    file_name, source, page_url, referrer, utm_source,
    utm_medium, utm_campaign, session_id, ip_address, user_agent,
    status, notes, created_at, updated_at
  ) VALUES (
    ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?,
    ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?,
    ?, ?, ?, ?
  )
`)

const insertEventStmt = db.prepare(`
  INSERT INTO analytics_events (
    id, event_type, event_label, page_path, page_title,
    referrer, session_id, utm_source, utm_medium, utm_campaign,
    metadata, ip_address, user_agent, created_at
  ) VALUES (
    ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?,
    ?, ?, ?, ?
  )
`)

export function saveEnquiry(enquiry) {
  const now = new Date().toISOString()
  const id = enquiry.id || `enq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`

  insertEnquiryStmt.run(
    id,
    enquiry.name?.trim() || 'Unknown',
    enquiry.phone?.trim() || '',
    enquiry.email?.trim() || null,
    enquiry.propertyType || enquiry.property_type || null,
    enquiry.location || null,
    enquiry.serviceRequired || enquiry.service_required || 'General Consultation',
    enquiry.approxSize || enquiry.approx_size || null,
    enquiry.consultationType || enquiry.consultation_type || null,
    enquiry.message || null,
    enquiry.fileName || enquiry.file_name || null,
    enquiry.source || 'Website Form',
    enquiry.pageUrl || enquiry.page_url || null,
    enquiry.referrer || null,
    enquiry.utmSource || enquiry.utm_source || null,
    enquiry.utmMedium || enquiry.utm_medium || null,
    enquiry.utmCampaign || enquiry.utm_campaign || null,
    enquiry.sessionId || enquiry.session_id || null,
    enquiry.ipAddress || enquiry.ip_address || null,
    enquiry.userAgent || enquiry.user_agent || null,
    enquiry.status || 'new',
    enquiry.notes || null,
    now,
    now
  )

  // Also log form_submission event into analytics_events table
  logEvent({
    eventType: 'form_submission',
    eventLabel: enquiry.source || enquiry.serviceRequired || 'Enquiry Form',
    pagePath: enquiry.pageUrl,
    sessionId: enquiry.sessionId,
    utmSource: enquiry.utmSource,
    utmMedium: enquiry.utmMedium,
    utmCampaign: enquiry.utmCampaign,
    ipAddress: enquiry.ipAddress,
    userAgent: enquiry.userAgent,
    metadata: {
      enquiryId: id,
      name: enquiry.name,
      phone: enquiry.phone,
      service: enquiry.serviceRequired,
    },
  })

  return { id, status: 'success', createdAt: now }
}

export function logEvent(event) {
  const now = new Date().toISOString()
  const id = `evt_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
  const metadataStr =
    typeof event.metadata === 'object' ? JSON.stringify(event.metadata) : event.metadata || null

  insertEventStmt.run(
    id,
    event.eventType || 'unknown',
    event.eventLabel || null,
    event.pagePath || null,
    event.pageTitle || null,
    event.referrer || null,
    event.sessionId || null,
    event.utmSource || null,
    event.utmMedium || null,
    event.utmCampaign || null,
    metadataStr,
    event.ipAddress || null,
    event.userAgent || null,
    now
  )

  return { id, status: 'logged', createdAt: now }
}

export function getEnquiries({ limit = 50, offset = 0, status, search } = {}) {
  let query = 'SELECT * FROM enquiries'
  const params = []
  const conditions = []

  if (status && status !== 'all') {
    conditions.push('status = ?')
    params.push(status)
  }

  if (search) {
    conditions.push('(name LIKE ? OR phone LIKE ? OR email LIKE ? OR location LIKE ?)')
    const pattern = `%${search}%`
    params.push(pattern, pattern, pattern, pattern)
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ')
  }

  query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?'
  params.push(limit, offset)

  const rows = db.prepare(query).all(...params)

  // Total count
  let countQuery = 'SELECT COUNT(*) as count FROM enquiries'
  if (conditions.length > 0) {
    countQuery += ' WHERE ' + conditions.join(' AND ')
  }
  const countParams = params.slice(0, -2)
  const total = db.prepare(countQuery).get(...countParams)?.count || 0

  return { rows, total, limit, offset }
}

export function updateEnquiryStatus(id, { status, notes }) {
  const now = new Date().toISOString()
  const updates = []
  const params = []

  if (status) {
    updates.push('status = ?')
    params.push(status)
  }
  if (notes !== undefined) {
    updates.push('notes = ?')
    params.push(notes)
  }
  updates.push('updated_at = ?')
  params.push(now)

  params.push(id)

  const stmt = db.prepare(`UPDATE enquiries SET ${updates.join(', ')} WHERE id = ?`)
  const result = stmt.run(...params)
  return { updated: result.changes > 0, id, updatedAt: now }
}

export function deleteEnquiry(id) {
  const stmt = db.prepare('DELETE FROM enquiries WHERE id = ?')
  const result = stmt.run(id)
  return { deleted: result.changes > 0 }
}

export function getAnalyticsDashboard() {
  const totalEnquiries = db.prepare('SELECT COUNT(*) as count FROM enquiries').get()?.count || 0
  const newEnquiries =
    db.prepare("SELECT COUNT(*) as count FROM enquiries WHERE status = 'new'").get()?.count || 0

  const totalCalls =
    db
      .prepare("SELECT COUNT(*) as count FROM analytics_events WHERE event_type = 'phone_call'")
      .get()?.count || 0

  const totalWhatsApp =
    db
      .prepare("SELECT COUNT(*) as count FROM analytics_events WHERE event_type = 'whatsapp_click'")
      .get()?.count || 0

  const totalPageViews =
    db
      .prepare("SELECT COUNT(*) as count FROM analytics_events WHERE event_type = 'page_view'")
      .get()?.count || 0

  // Event breakdowns
  const eventsByType = db
    .prepare(
      `
    SELECT event_type, COUNT(*) as count
    FROM analytics_events
    GROUP BY event_type
    ORDER BY count DESC
  `
    )
    .all()

  // WhatsApp click breakdown by label / location on site
  const whatsAppBreakdown = db
    .prepare(
      `
    SELECT COALESCE(event_label, 'Unknown') as label, COUNT(*) as count
    FROM analytics_events
    WHERE event_type = 'whatsapp_click'
    GROUP BY label
    ORDER BY count DESC
    LIMIT 10
  `
    )
    .all()

  // Call breakdown by label
  const callsBreakdown = db
    .prepare(
      `
    SELECT COALESCE(event_label, 'General') as label, COUNT(*) as count
    FROM analytics_events
    WHERE event_type = 'phone_call'
    GROUP BY label
    ORDER BY count DESC
    LIMIT 10
  `
    )
    .all()

  // Enquiries by Service
  const enquiriesByService = db
    .prepare(
      `
    SELECT COALESCE(service_required, 'Unspecified') as service, COUNT(*) as count
    FROM enquiries
    GROUP BY service
    ORDER BY count DESC
    LIMIT 10
  `
    )
    .all()

  // Enquiries by Source (Modal vs Contact Page)
  const enquiriesBySource = db
    .prepare(
      `
    SELECT COALESCE(source, 'Website Form') as source, COUNT(*) as count
    FROM enquiries
    GROUP BY source
    ORDER BY count DESC
  `
    )
    .all()

  // Top Pages viewed
  const topPages = db
    .prepare(
      `
    SELECT COALESCE(page_path, '/') as path, COUNT(*) as views
    FROM analytics_events
    WHERE event_type = 'page_view'
    GROUP BY path
    ORDER BY views DESC
    LIMIT 10
  `
    )
    .all()

  // Recent 10 enquiries
  const recentEnquiries = db
    .prepare('SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 10')
    .all()

  // Recent 15 events
  const recentEvents = db
    .prepare('SELECT * FROM analytics_events ORDER BY created_at DESC LIMIT 15')
    .all()

  return {
    kpis: {
      totalEnquiries,
      newEnquiries,
      totalCalls,
      totalWhatsApp,
      totalPageViews,
      totalConversions: totalEnquiries + totalCalls + totalWhatsApp,
    },
    breakdowns: {
      eventsByType,
      whatsAppBreakdown,
      callsBreakdown,
      enquiriesByService,
      enquiriesBySource,
      topPages,
    },
    recentEnquiries,
    recentEvents,
    serverTime: new Date().toISOString(),
  }
}

export function getAllEvents({ limit = 100, offset = 0, eventType } = {}) {
  let query = 'SELECT * FROM analytics_events'
  const params = []

  if (eventType && eventType !== 'all') {
    query += ' WHERE event_type = ?'
    params.push(eventType)
  }

  query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?'
  params.push(limit, offset)

  const rows = db.prepare(query).all(...params)
  const total = db.prepare('SELECT COUNT(*) as count FROM analytics_events').get()?.count || 0

  return { rows, total, limit, offset }
}

export { db }
