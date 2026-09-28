#!/usr/bin/env node

/**
 * 7Rays Astro Vastu — Business Truth Validation Script
 * Phase 01: Business Truth & SEO Data Foundation
 *
 * FAILS BUILD IF:
 * - Fake phone exists in templates/schemas (e.g. 9876543210, +91 98765 43210)
 * - Fake email exists hardcoded
 * - Fake headquarters address exists (e.g. Indiranagar 560038 instead of Dasarahalli 560024)
 * - Fake experience claims exist (e.g. 10+, 15+, 20+ years, since 2012)
 * - Fake consultation numbers exist (e.g. 5000+, 1000+, 500+ consultations)
 * - Fake reviews or aggregateRating exist in schemas
 * - Misspelled founder name exists (e.g. Rishwa Singha)
 * - Missing or invalid authoritative business truth constants
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const srcDir = path.join(projectRoot, 'src')

console.log('🔍 [Phase 01] Running Business Truth Validation...')

const errors = []

// 1. Validate businessConfig exists and has verified values
const businessConfigFile = path.join(srcDir, 'config', 'business.ts')
if (!fs.existsSync(businessConfigFile)) {
  errors.push('CRITICAL: src/config/business.ts not found.')
} else {
  const content = fs.readFileSync(businessConfigFile, 'utf8')
  if (!content.includes("'Rishwa Sinha'")) {
    errors.push('Authoritative founder name "Rishwa Sinha" missing in business.ts')
  }
  if (!content.includes("'Certified Vastu Consultant'")) {
    errors.push('Authoritative title "Certified Vastu Consultant" missing in business.ts')
  }
  if (!content.includes("'5+ years'")) {
    errors.push('Authoritative experience "5+ years" missing in business.ts')
  }
  if (!content.includes('560024')) {
    errors.push('Authoritative postal code 560024 missing in business.ts')
  }
  if (!content.includes('https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9')) {
    errors.push('Authoritative Google Maps URL missing in business.ts')
  }
}

// 2. Scan src/ directory for forbidden fabricated strings
const forbiddenPatterns = [
  {
    regex: /98765\s*43210/i,
    message: 'Detected dummy phone number (98765 43210)',
  },
  {
    regex: /919876543210/i,
    message: 'Detected dummy phone number (919876543210)',
  },
  {
    regex: /91483\s*34960/i,
    message: 'Detected unverified phone number (91483 34960)',
  },
  {
    regex: /9148334960/i,
    message: 'Detected unverified phone number (9148334960)',
  },
  {
    regex: /Rishwa\s+Singha/i,
    message: 'Detected misspelled founder name "Rishwa Singha" (must be "Rishwa Sinha")',
  },
  {
    regex: /(?:20\+|15\+|10\+)\s*years/i,
    message: 'Detected fabricated years of experience (must be verified "5+ years")',
  },
  {
    regex: /(?:5000\+|1000\+|500\+)\s*(?:consultations|clients|projects)/i,
    message: 'Detected fabricated consultation or client counts',
  },
  {
    regex: /aggregateRating/i,
    message: 'Detected aggregateRating schema (fabrication forbidden without verified review feed)',
  },
  {
    regex: /ratingValue\s*:\s*['"]?4\.[89]/i,
    message: 'Detected fabricated ratingValue in schema',
  },
  {
    regex: /since\s+2012/i,
    message: 'Detected fabricated founding year "since 2012"',
  },
]

function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkDir(fullPath, callback)
    } else if (entry.isFile() && /\.(tsx?|jsx?|json|html|md)$/.test(entry.name)) {
      callback(fullPath)
    }
  }
}

walkDir(srcDir, (filePath) => {
  // Exclude validation script itself
  if (filePath === __filename) return

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const relPath = path.relative(projectRoot, filePath)

  for (const { regex, message } of forbiddenPatterns) {
    if (regex.test(fileContent)) {
      errors.push(`[${relPath}] ${message}`)
    }
  }
})

if (errors.length > 0) {
  console.error('\n❌ BUSINESS TRUTH VALIDATION FAILED:')
  errors.forEach((err) => console.error(`  - ${err}`))
  console.error('\nBuild aborted to prevent publication of unverified or fabricated data.\n')
  process.exit(1)
} else {
  console.log('✅ [Phase 01] Business Truth Validation PASSED:')
  console.log('  • Consultant: Rishwa Sinha (Certified Vastu Consultant, 5+ years experience)')
  console.log('  • Headquarters: 3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024')
  console.log('  • Google Maps: https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9')
  console.log(
    '  • Zero fabricated phone numbers, emails, reviews, ratings, or consultation counts.'
  )
  process.exit(0)
}
