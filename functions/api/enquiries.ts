/**
 * 7Rays Astro Vastu — Consultation Enquiry API
 * Durable edge persistence on Cloudflare Pages (D1) with optional Resend notification
 */

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  first<T = unknown>(colName?: string): Promise<T | null>
  run<T = unknown>(): Promise<{ success: boolean; error?: string; results?: T[] }>
  all<T = unknown>(): Promise<{ success: boolean; error?: string; results: T[] }>
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement
  batch(statements: D1PreparedStatement[]): Promise<unknown[]>
}

export interface Env {
  DB?: D1Database
  RESEND_API_KEY?: string
  NOTIFICATION_EMAIL?: string
  NOTIFICATION_FROM_EMAIL?: string
}

export interface PagesContext {
  request: Request
  env: Env
}

interface SanitizedEnquiry {
  name: string
  phone: string
  email: string | null
  serviceRequired: string
  message: string | null
  propertyType: string | null
  location: string | null
  approxSize: string | null
  consultationType: string | null
  fileName: string | null
  source: string
  pageUrl: string | null
  referrer: string | null
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
  sessionId: string | null
  ipAddress: string | null
  userAgent: string | null
}

const CORS_HEADERS = {
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Session-ID',
  'Access-Control-Max-Age': '86400',
}

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
  ...CORS_HEADERS,
}

// Limits
const MAX_PAYLOAD_BYTES = 32 * 1024 // 32 KB
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 60 seconds
const MAX_REQUESTS_PER_WINDOW = 5

export const onRequestOptions = async (): Promise<Response> => {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  })
}

function sanitizeText(val: unknown, maxLen: number): string {
  if (typeof val !== 'string') return ''
  // Strip non-printable control characters while preserving standard whitespace (newlines, tabs)
  return val
    .split('')
    .filter((char) => {
      const code = char.charCodeAt(0)
      return code >= 32 || code === 10 || code === 13 || code === 9
    })
    .join('')
    .trim()
    .slice(0, maxLen)
}

function validatePayload(body: Record<string, unknown>): {
  sanitized?: SanitizedEnquiry
  error?: string
} {
  // 1. Spam Honeypot Check
  const honeypot = String(body.website || body.honeypot || body.fax || '').trim()
  if (honeypot) {
    return { error: 'Submission rejected' }
  }

  // 2. Name validation
  const name = sanitizeText(body.name, 100)
  if (!name || name.length < 2) {
    return { error: 'Full name is required (minimum 2 characters)' }
  }

  // 3. Phone validation
  const rawPhone = sanitizeText(body.phone, 25)
  const digitsOnly = rawPhone.replace(/\D/g, '')
  const validPhoneFormat = /^[\d\s+\-().]{7,25}$/.test(rawPhone)
  if (!rawPhone || !validPhoneFormat || digitsOnly.length < 7 || digitsOnly.length > 15) {
    return { error: 'A valid phone number is required (7 to 15 digits)' }
  }

  // 4. Email validation (optional)
  const rawEmail = sanitizeText(body.email, 254)
  let email: string | null = null
  if (rawEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(rawEmail)) {
      return { error: 'Please enter a valid email address' }
    }
    email = rawEmail.toLowerCase()
  }

  // 5. Optional metadata fields
  const serviceRequired = sanitizeText(body.serviceRequired || body.service, 100) || 'General Consultation'
  const message = sanitizeText(body.message, 2000) || null
  const propertyType = sanitizeText(body.propertyType, 100) || null
  const location = sanitizeText(body.location, 100) || null
  const approxSize = sanitizeText(body.approxSize, 100) || null
  const consultationType = sanitizeText(body.consultationType, 100) || null
  const fileName = sanitizeText(body.fileName, 150) || null
  const source = sanitizeText(body.source, 100) || 'Website Form'
  const pageUrl = sanitizeText(body.pageUrl, 500) || null
  const referrer = sanitizeText(body.referrer, 500) || null
  const utmSource = sanitizeText(body.utmSource, 100) || null
  const utmMedium = sanitizeText(body.utmMedium, 100) || null
  const utmCampaign = sanitizeText(body.utmCampaign, 100) || null
  const sessionId = sanitizeText(body.sessionId, 100) || null

  return {
    sanitized: {
      name,
      phone: rawPhone,
      email,
      serviceRequired,
      message,
      propertyType,
      location,
      approxSize,
      consultationType,
      fileName,
      source,
      pageUrl,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      sessionId,
      ipAddress: null,
      userAgent: null,
    },
  }
}

async function checkRateLimit(db: D1Database, ipAddress: string): Promise<boolean> {
  if (!ipAddress || ipAddress === 'unknown') return true
  try {
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString()
    const result = await db
      .prepare('SELECT COUNT(*) as count FROM enquiries WHERE ip_address = ? AND created_at > ?')
      .bind(ipAddress, windowStart)
      .first<{ count: number }>()

    if (result && typeof result.count === 'number' && result.count >= MAX_REQUESTS_PER_WINDOW) {
      return false
    }
  } catch {
    // If rate limit query fails, allow the request rather than blocking legitimate users
    return true
  }
  return true
}

async function sendNotificationEmail(
  env: Env,
  id: string,
  enquiry: SanitizedEnquiry
): Promise<'sent' | 'failed' | 'skipped'> {
  const apiKey = env.RESEND_API_KEY?.trim()
  const toEmail = env.NOTIFICATION_EMAIL?.trim()

  if (!apiKey || !toEmail) {
    return 'skipped'
  }

  const fromEmail = env.NOTIFICATION_FROM_EMAIL?.trim() || '7Rays Enquiries <onboarding@resend.dev>'
  const subject = `New Consultation Enquiry: ${enquiry.name} (${enquiry.serviceRequired})`

  const textContent = [
    `New Consultation Lead Received:`,
    `ID: ${id}`,
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email || 'N/A'}`,
    `Service: ${enquiry.serviceRequired}`,
    `Property Type: ${enquiry.propertyType || 'N/A'}`,
    `Location: ${enquiry.location || 'N/A'}`,
    `Approx Size: ${enquiry.approxSize || 'N/A'}`,
    `Consultation Type: ${enquiry.consultationType || 'N/A'}`,
    `Source: ${enquiry.source}`,
    `Page URL: ${enquiry.pageUrl || 'N/A'}`,
    `Message: ${enquiry.message || 'N/A'}`,
    `Timestamp: ${new Date().toISOString()}`,
  ].join('\n')

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #b45309; border-bottom: 2px solid #fef3c7; padding-bottom: 8px;">New Consultation Enquiry</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px; font-weight: bold; width: 140px; color: #475569;">Lead ID:</td><td style="padding: 8px;"><code>${id}</code></td></tr>
        <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Name:</td><td style="padding: 8px;"><strong>${enquiry.name}</strong></td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Phone:</td><td style="padding: 8px;"><a href="tel:${enquiry.phone}">${enquiry.phone}</a></td></tr>
        <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Email:</td><td style="padding: 8px;">${enquiry.email ? `<a href="mailto:${enquiry.email}">${enquiry.email}</a>` : 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Service:</td><td style="padding: 8px;">${enquiry.serviceRequired}</td></tr>
        <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Property Type:</td><td style="padding: 8px;">${enquiry.propertyType || 'N/A'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Location:</td><td style="padding: 8px;">${enquiry.location || 'N/A'}</td></tr>
        <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Size:</td><td style="padding: 8px;">${enquiry.approxSize || 'N/A'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Consultation:</td><td style="padding: 8px;">${enquiry.consultationType || 'N/A'}</td></tr>
        <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Source:</td><td style="padding: 8px;">${enquiry.source}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Page:</td><td style="padding: 8px;">${enquiry.pageUrl || 'N/A'}</td></tr>
        <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Message:</td><td style="padding: 8px;">${enquiry.message || 'None'}</td></tr>
      </table>
      <p style="margin-top: 20px; font-size: 12px; color: #94a3b8; text-align: center;">7Rays Astro Vastu — Edge Consultation Capture</p>
    </div>
  `

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        text: textContent,
        html: htmlContent,
      }),
    })

    return res.ok ? 'sent' : 'failed'
  } catch {
    // Resend network / fetch failure isolated
    return 'failed'
  }
}

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  // 1. Content-Length header pre-check
  const contentLength = Number(context.request.headers.get('content-length') || 0)
  if (contentLength > MAX_PAYLOAD_BYTES) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Payload exceeds size limit of 32 KB',
      }),
      { status: 413, headers: JSON_HEADERS }
    )
  }

  // 2. Parse request text with size enforcement
  let rawBody: string
  try {
    rawBody = await context.request.text()
    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Payload exceeds size limit of 32 KB',
        }),
        { status: 413, headers: JSON_HEADERS }
      )
    }
  } catch {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Unable to read request payload',
      }),
      { status: 400, headers: JSON_HEADERS }
    )
  }

  // 3. Parse JSON
  let body: Record<string, unknown>
  try {
    body = JSON.parse(rawBody) as Record<string, unknown>
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      throw new Error('Malformed JSON')
    }
  } catch {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid JSON request payload',
      }),
      { status: 400, headers: JSON_HEADERS }
    )
  }

  // 4. Validate and sanitize inputs
  const validation = validatePayload(body)
  if (validation.error || !validation.sanitized) {
    return new Response(
      JSON.stringify({
        success: false,
        error: validation.error || 'Invalid request parameters',
      }),
      { status: 400, headers: JSON_HEADERS }
    )
  }

  const enquiry = validation.sanitized

  // 5. Extract IP and User Agent safely
  const clientIp =
    context.request.headers.get('cf-connecting-ip') ||
    context.request.headers.get('x-real-ip') ||
    context.request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  const userAgent = sanitizeText(context.request.headers.get('user-agent') || '', 500) || null

  enquiry.ipAddress = clientIp
  enquiry.userAgent = userAgent

  // 6. Check D1 binding
  const db = context.env.DB
  if (!db) {
    // D1 is not bound (e.g. unconfigured environment)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Service temporarily unavailable. Please contact us directly via WhatsApp or phone.',
      }),
      { status: 503, headers: JSON_HEADERS }
    )
  }

  // 7. Rate Limit Check
  const allowed = await checkRateLimit(db, clientIp)
  if (!allowed) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Too many requests. Please wait a minute before submitting again.',
      }),
      { status: 429, headers: JSON_HEADERS }
    )
  }

  // 8. Generate Unique ID and Timestamps
  const now = new Date().toISOString()
  const randomSuffix = typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID().slice(0, 8)
    : Math.random().toString(36).slice(2, 10)
  const id = `enq_${Date.now()}_${randomSuffix}`

  // 9. Primary Store: Parameterized D1 Database Insert
  try {
    const insertStmt = db.prepare(`
      INSERT INTO enquiries (
        id, name, phone, email, service_required, message,
        property_type, location, approx_size, consultation_type,
        file_name, source, page_url, referrer, utm_source,
        utm_medium, utm_campaign, session_id, ip_address, user_agent,
        status, email_notification_status, created_at, updated_at
      ) VALUES (
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?
      )
    `)

    await insertStmt
      .bind(
        id,
        enquiry.name,
        enquiry.phone,
        enquiry.email,
        enquiry.serviceRequired,
        enquiry.message,
        enquiry.propertyType,
        enquiry.location,
        enquiry.approxSize,
        enquiry.consultationType,
        enquiry.fileName,
        enquiry.source,
        enquiry.pageUrl,
        enquiry.referrer,
        enquiry.utmSource,
        enquiry.utmMedium,
        enquiry.utmCampaign,
        enquiry.sessionId,
        enquiry.ipAddress,
        enquiry.userAgent,
        'new',
        'pending',
        now,
        now
      )
      .run()
  } catch {
    // Database write failure — return clean 500 without internal leaks
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Unable to save enquiry at this time. Please contact us directly via WhatsApp or phone.',
      }),
      { status: 500, headers: JSON_HEADERS }
    )
  }

  // 10. Secondary Store: Resend Notification (Isolated from primary success)
  try {
    const emailStatus = await sendNotificationEmail(context.env, id, enquiry)
    if (emailStatus !== 'skipped') {
      await db
        .prepare('UPDATE enquiries SET email_notification_status = ?, updated_at = ? WHERE id = ?')
        .bind(emailStatus, new Date().toISOString(), id)
        .run()
    }
  } catch {
    // Non-blocking isolation: email attempt failed, D1 write remains intact
    try {
      await db
        .prepare('UPDATE enquiries SET email_notification_status = ?, updated_at = ? WHERE id = ?')
        .bind('failed', new Date().toISOString(), id)
        .run()
    } catch {
      // Ignore update error
    }
  }

  // 11. Final Confirmed Response
  return new Response(
    JSON.stringify({
      success: true,
      id,
      message: 'Your enquiry has been received successfully. Our team will contact you shortly.',
    }),
    {
      status: 200,
      headers: JSON_HEADERS,
    }
  )
}
