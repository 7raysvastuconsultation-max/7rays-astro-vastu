-- Migration: 0001_create_enquiries.sql
-- 7Rays Astro Vastu: Primary durable store for consultation enquiries

CREATE TABLE IF NOT EXISTS enquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service_required TEXT DEFAULT 'General Consultation',
  message TEXT,
  property_type TEXT,
  location TEXT,
  approx_size TEXT,
  consultation_type TEXT,
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
  email_notification_status TEXT DEFAULT 'skipped',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries (status);
CREATE INDEX IF NOT EXISTS idx_enquiries_ip_created ON enquiries (ip_address, created_at DESC);
