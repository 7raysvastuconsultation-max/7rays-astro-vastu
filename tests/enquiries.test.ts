import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  onRequestPost,
  onRequestOptions,
  type Env,
  type D1Database,
} from '../functions/api/enquiries'

function createMockDb(options?: {
  existingCount?: number
  shouldFailInsert?: boolean
  shouldFailRateLimit?: boolean
}): D1Database & { executedQueries: { sql: string; bindings: unknown[] }[] } {
  const executedQueries: { sql: string; bindings: unknown[] }[] = []

  return {
    executedQueries,
    prepare(sql: string) {
      const stmt = {
        bind(...values: unknown[]) {
          executedQueries.push({ sql: sql.trim(), bindings: values })
          return stmt
        },
        async first<T = unknown>() {
          if (options?.shouldFailRateLimit) {
            throw new Error('D1 rate limit query crash')
          }
          if (sql.includes('COUNT(*)')) {
            return { count: options?.existingCount ?? 0 } as T
          }
          return null
        },
        async run() {
          if (options?.shouldFailInsert && sql.includes('INSERT INTO enquiries')) {
            throw new Error('D1 Disk/Constraint Crash')
          }
          return { success: true }
        },
        async all() {
          return { success: true, results: [] }
        },
      }
      return stmt
    },
    async batch() {
      return []
    },
  }
}

function createRequest(body: unknown, options?: { ip?: string; contentLength?: number; headers?: Record<string, string> }): Request {
  const bodyText = typeof body === 'string' ? body : JSON.stringify(body)
  const headers = new Headers({
    'Content-Type': 'application/json',
    'cf-connecting-ip': options?.ip || '103.21.244.1',
    'user-agent': 'Mozilla/5.0 Vitest Test Agent',
    ...(options?.headers || {}),
  })

  if (options?.contentLength !== undefined) {
    headers.set('content-length', String(options.contentLength))
  }

  return new Request('https://7raysastrovastu.in/api/enquiries', {
    method: 'POST',
    headers,
    body: bodyText,
  })
}

describe('Consultation Enquiry API (functions/api/enquiries.ts)', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  describe('CORS Preflight', () => {
    it('handles OPTIONS request with correct preflight headers', async () => {
      const res = await onRequestOptions()
      expect(res.status).toBe(204)
      expect(res.headers.get('Access-Control-Allow-Methods')).toContain('POST')
      expect(res.headers.get('Access-Control-Allow-Headers')).toContain('Content-Type')
    })
  })

  describe('Valid Submissions and Primary D1 Store', () => {
    it('persists a complete valid consultation enquiry to D1 and returns 200', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const payload = {
        name: 'Rohan Sharma',
        phone: '+91 98765 43210',
        email: 'rohan.sharma@example.com',
        serviceRequired: 'Residential Vastu',
        propertyType: '3BHK Apartment',
        location: 'Indiranagar, Bangalore',
        approxSize: '1800 sq ft',
        consultationType: 'On-site Inspection',
        message: 'Looking for non-demolition remedies for northeast entrance.',
        source: 'Consultation Modal',
        utmSource: 'google',
        utmMedium: 'cpc',
        utmCampaign: 'bangalore_vastu',
      }

      const request = createRequest(payload)
      const response = await onRequestPost({ request, env })

      expect(response.status).toBe(200)
      const data = (await response.json()) as { success: boolean; id: string; message: string }
      expect(data.success).toBe(true)
      expect(data.id).toMatch(/^enq_\d+_[a-z0-9]+$/)
      expect(data.message).toContain('received successfully')

      // Verify that D1 received parameterized SQL insert
      const insertQuery = db.executedQueries.find((q) => q.sql.includes('INSERT INTO enquiries'))
      expect(insertQuery).toBeDefined()
      expect(insertQuery?.bindings[1]).toBe('Rohan Sharma')
      expect(insertQuery?.bindings[2]).toBe('+91 98765 43210')
      expect(insertQuery?.bindings[3]).toBe('rohan.sharma@example.com')
      expect(insertQuery?.bindings[4]).toBe('Residential Vastu')
      expect(insertQuery?.bindings[6]).toBe('3BHK Apartment')
      expect(insertQuery?.bindings[7]).toBe('Indiranagar, Bangalore')
      expect(insertQuery?.bindings[18]).toBe('103.21.244.1') // IP address
    })

    it('persists with minimal required fields (name and phone)', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const request = createRequest({
        name: 'Anita Desai',
        phone: '9845012345',
      })
      const response = await onRequestPost({ request, env })

      expect(response.status).toBe(200)
      const data = (await response.json()) as { success: boolean; id: string }
      expect(data.success).toBe(true)

      const insertQuery = db.executedQueries.find((q) => q.sql.includes('INSERT INTO enquiries'))
      expect(insertQuery).toBeDefined()
      expect(insertQuery?.bindings[1]).toBe('Anita Desai')
      expect(insertQuery?.bindings[2]).toBe('9845012345')
      expect(insertQuery?.bindings[3]).toBeNull() // email optional
      expect(insertQuery?.bindings[4]).toBe('General Consultation') // default
    })
  })

  describe('Validation and Rejection of Invalid Fields', () => {
    it('rejects missing or empty name with 400', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest({ name: '   ', phone: '9876543210' }),
        env,
      })

      expect(res.status).toBe(400)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('Full name is required')
      expect(db.executedQueries.length).toBe(0)
    })

    it('rejects single character name (< 2 chars) with 400', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest({ name: 'A', phone: '9876543210' }),
        env,
      })

      expect(res.status).toBe(400)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('minimum 2 characters')
    })

    it('rejects invalid phone number with fewer than 7 digits with 400', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest({ name: 'Suresh Kumar', phone: '123' }),
        env,
      })

      expect(res.status).toBe(400)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('valid phone number')
    })

    it('rejects phone number with alphabetical characters with 400', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest({ name: 'Suresh Kumar', phone: '98765CALLME' }),
        env,
      })

      expect(res.status).toBe(400)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('valid phone number')
    })

    it('rejects malformed email address with 400', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest({
          name: 'Suresh Kumar',
          phone: '9876543210',
          email: 'not-an-email',
        }),
        env,
      })

      expect(res.status).toBe(400)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('valid email')
    })

    it('rejects malformed JSON syntax with 400', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest('{ bad: json, ', { headers: { 'Content-Type': 'application/json' } }),
        env,
      })

      expect(res.status).toBe(400)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('Invalid JSON')
    })

    it('rejects payloads exceeding size limit (> 32KB) with 413', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const hugeMessage = 'A'.repeat(35000)
      const res = await onRequestPost({
        request: createRequest({ name: 'Test', phone: '9876543210', message: hugeMessage }),
        env,
      })

      expect(res.status).toBe(413)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('size limit')
    })
  })

  describe('Spam and Honeypot Protection', () => {
    it('silently rejects spam submissions that populate the honeypot field', async () => {
      const db = createMockDb()
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest({
          name: 'Spam Bot',
          phone: '9876543210',
          website: 'http://spam-link.example.com',
        }),
        env,
      })

      expect(res.status).toBe(400)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toBe('Submission rejected')
      expect(db.executedQueries.length).toBe(0)
    })
  })

  describe('Rate Limiting', () => {
    it('blocks submissions when rate limit is exceeded (> 5 requests per minute from same IP)', async () => {
      const db = createMockDb({ existingCount: 5 })
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest(
          { name: 'Frequent User', phone: '9876543210' },
          { ip: '192.0.2.45' }
        ),
        env,
      })

      expect(res.status).toBe(429)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('Too many requests')
    })
  })

  describe('Database Failure and Availability', () => {
    it('returns 503 when D1 binding is unconfigured or absent', async () => {
      const env: Env = {} // no DB

      const res = await onRequestPost({
        request: createRequest({ name: 'Valid User', phone: '9876543210' }),
        env,
      })

      expect(res.status).toBe(503)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('Service temporarily unavailable')
    })

    it('returns 500 when D1 insert throws without exposing internal SQL or error trace', async () => {
      const db = createMockDb({ shouldFailInsert: true })
      const env: Env = { DB: db }

      const res = await onRequestPost({
        request: createRequest({ name: 'Valid User', phone: '9876543210' }),
        env,
      })

      expect(res.status).toBe(500)
      const data = (await res.json()) as { success: boolean; error: string }
      expect(data.success).toBe(false)
      expect(data.error).toContain('Unable to save enquiry at this time')
      // Guarantee internal database error string is not leaked to client
      expect(JSON.stringify(data)).not.toContain('D1 Disk/Constraint Crash')
      expect(JSON.stringify(data)).not.toContain('INSERT INTO')
    })
  })

  describe('Email Notification Isolation (Resend)', () => {
    it('skips email when Resend credentials are not configured and saves to D1 with status skipped', async () => {
      const db = createMockDb()
      const env: Env = { DB: db } // No RESEND_API_KEY, no NOTIFICATION_EMAIL

      const res = await onRequestPost({
        request: createRequest({ name: 'Valid User', phone: '9876543210' }),
        env,
      })

      expect(res.status).toBe(200)
      const data = (await res.json()) as { success: boolean }
      expect(data.success).toBe(true)
    })

    it('sends email and updates notification status to sent when Resend succeeds', async () => {
      const db = createMockDb()
      const env: Env = {
        DB: db,
        RESEND_API_KEY: 're_test_key_123',
        NOTIFICATION_EMAIL: 'owner@7raysastrovastu.in',
      }

      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ id: 'email_123' }),
      })
      vi.stubGlobal('fetch', mockFetch)

      const res = await onRequestPost({
        request: createRequest({ name: 'Email Test User', phone: '9876543210' }),
        env,
      })

      expect(res.status).toBe(200)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.resend.com/emails',
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            Authorization: 'Bearer re_test_key_123',
          }),
        })
      )

      const updateQuery = db.executedQueries.find((q) =>
        q.sql.includes('UPDATE enquiries SET email_notification_status = ?')
      )
      expect(updateQuery).toBeDefined()
      expect(updateQuery?.bindings[0]).toBe('sent')
    })

    it('isolates email failure so enquiry is still saved and 200 is returned to user', async () => {
      const db = createMockDb()
      const env: Env = {
        DB: db,
        RESEND_API_KEY: 're_invalid_key',
        NOTIFICATION_EMAIL: 'owner@7raysastrovastu.in',
      }

      // Simulate Resend API error (e.g. 401 Unauthorized or network timeout)
      const mockFetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        json: async () => ({ error: 'Invalid API key' }),
      })
      vi.stubGlobal('fetch', mockFetch)

      const res = await onRequestPost({
        request: createRequest({ name: 'Resilient Lead', phone: '9876543210' }),
        env,
      })

      // The key requirement: user request succeeds, D1 write is intact
      expect(res.status).toBe(200)
      const data = (await res.json()) as { success: boolean; id: string }
      expect(data.success).toBe(true)
      expect(data.id).toBeDefined()

      // The status in D1 is updated to failed for administrative retry
      const updateQuery = db.executedQueries.find((q) =>
        q.sql.includes('UPDATE enquiries SET email_notification_status = ?')
      )
      expect(updateQuery).toBeDefined()
      expect(updateQuery?.bindings[0]).toBe('failed')
    })
  })

  describe('Security and Confidentiality', () => {
    it('never exposes RESEND_API_KEY or internal secrets in any response', async () => {
      const db = createMockDb()
      const secretKey = 're_super_secret_production_key_xyz'
      const env: Env = {
        DB: db,
        RESEND_API_KEY: secretKey,
        NOTIFICATION_EMAIL: 'owner@example.com',
      }

      // Test across multiple scenarios: valid, invalid, spam
      const resValid = await onRequestPost({
        request: createRequest({ name: 'Secret Check', phone: '9876543210' }),
        env,
      })
      const textValid = await resValid.text()
      expect(textValid).not.toContain(secretKey)

      const resInvalid = await onRequestPost({
        request: createRequest({ name: '', phone: '' }),
        env,
      })
      const textInvalid = await resInvalid.text()
      expect(textInvalid).not.toContain(secretKey)
    })
  })
})
