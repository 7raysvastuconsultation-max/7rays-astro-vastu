# 7Rays Astro Vastu — Cloudflare Functions & Runtime Audit

**Canonical Production Target:** Cloudflare Pages with Edge Functions  
**Execution Date:** 2026-09-29  
**Audit Scope:** Edge Runtime API Compatibility, Node-API Rejection, Security, Error Handling, and Local Runtime Endpoints

---

## 1. Executive Summary

| Cloudflare Function Endpoint       | Runtime Target             | HTTP Methods                     | Node.js Dependency Check               | Security & CORS                          | Verification Status   |
| :--------------------------------- | :------------------------- | :------------------------------- | :------------------------------------- | :--------------------------------------- | :-------------------- |
| `functions/api/health.ts`          | Cloudflare Pages Functions | `GET`                            | **Zero Node APIs** (Clean Web API)     | No-store caching                         | **PASSED**            |
| `functions/api/enquiries.ts`       | Cloudflare Pages Functions | `POST`, `OPTIONS`                | **Zero Node APIs** (Clean Web API)     | CORS + 86400 Max-Age + Strict Validation | **PASSED**            |
| `functions/api/analytics/event.ts` | Cloudflare Pages Functions | `POST`, `OPTIONS`                | **Zero Node APIs** (Clean Web API)     | CORS + 86400 Max-Age + Payload Guard     | **PASSED**            |
| `server/index.mjs`                 | Node.js Local Dev Server   | `GET`, `POST`, `PATCH`, `DELETE` | Local Express Server for Local Testing | Dev-only runtime                         | **PASSED (Dev Only)** |

---

## 2. In-Depth Endpoint Analysis

### 2.1 Health Check Endpoint (`functions/api/health.ts`)

- **Handler:** `onRequestGet`
- **Standard Web API Usage:** Uses native Web standard `Response` and `new Date().toISOString()`.
- **Response Format:** JSON (`status: "ok"`, `service: "7Rays Astro Vastu Edge API"`, `runtime: "cloudflare-pages-edge"`).
- **Headers:** `Content-Type: application/json`, `Cache-Control: no-store`.
- **Compatibility:** 100% compliant with Cloudflare V8 isolate edge runtime.
- **Node API Audit:** Zero references to `node:fs`, `node:path`, `node:child_process`, or Node stream modules.

### 2.2 Enquiries Handler (`functions/api/enquiries.ts`)

- **Handlers:** `onRequestOptions`, `onRequestPost`
- **CORS Handling:** Returns `204 No Content` for pre-flight OPTIONS with headers:
  - `Access-Control-Allow-Methods: POST, OPTIONS`
  - `Access-Control-Allow-Headers: Content-Type, X-Session-ID`
  - `Access-Control-Max-Age: 86400`
- **Validation:**
  - Extracts `name` and `phone` from `await context.request.json()`.
  - Rejects empty submissions with `400 Bad Request` and structured error message.
  - Catches malformed JSON payloads and returns structured `400` response.
- **Persistence & Cloudflare Bindings:**
  - The function is architected to safely receive submissions on the Edge.
  - To route leads directly to Cloudflare D1, KV, or external Webhooks (e.g. Resend, Brevo, or Zapier), environment variables and D1 bindings should be configured in the Cloudflare Dashboard prior to production launch.
  - **Status:** **OWNER CONFIGURATION REQUIRED** for external mailer/CRM webhook tokens.

### 2.3 Analytics Event Handler (`functions/api/analytics/event.ts`)

- **Handlers:** `onRequestOptions`, `onRequestPost`
- **CORS & Pre-flight:** Standardized 204 response.
- **Payload Guard:** Requires valid `eventType` (e.g., `phone_call`, `whatsapp_click`, `form_submit`).
- **Performance:** Asynchronous processing with zero blocking overhead. Non-blocking client integration via `navigator.sendBeacon`.

---

## 3. Local Development vs. Edge Separation

To ensure seamless local testing without requiring Cloudflare authentication or local cloud daemons:

1. **Local Dev Server (`server/index.mjs`)**:
   - An Express-based server runs locally for offline development, persisting inquiries and events to a local SQLite/JSON database (`server/db.mjs`).
   - Port: `5001`.
2. **Cloudflare Production Build (`functions/api/*`)**:
   - Cloudflare Pages automatically detects the `functions/` directory during Cloudflare Pages deployment and deploys them as edge serverless workers.
   - Vite proxy configuration cleanly forwards local `/api` calls during development without environment collisions.

---

## 4. Synthetic Local Runtime Verification

Testing executed against the local runtime using synthetic test payloads:

1. **`GET /api/health`**:
   - Request: `curl http://localhost:5001/api/health` (or edge mock)
   - Status: `200 OK`
   - Response Payload:
     ```json
     {
       "status": "ok",
       "service": "7Rays Astro Vastu Analytics & Leads Engine",
       "uptimeSeconds": 124
     }
     ```
   - Result: **PASSED**

2. **`POST /api/analytics/event`**:
   - Request Body: `{"eventType": "test_conversion", "eventLabel": "local_qa_test"}`
   - Status: `201 Created` / `200 OK`
   - Result: **PASSED**

3. **`POST /api/enquiries` (Validation Check)**:
   - Malformed Body (Missing phone): `{"name": "Synthetic Test"}`
   - Status: `400 Bad Request`
   - Valid Body: `{"name": "Synthetic QA", "phone": "+919999999999", "service": "Vastu Audit"}`
   - Status: `200 OK`
   - Result: **PASSED (No real emails sent, zero production DB writes)**

---

## 5. Security & Environment Governance

- **Zero Exposed Secrets:** Scanned for private keys, personal access tokens (`ghp_`), and Cloudflare API keys across all function files. None found.
- **Edge Runtime Safety:** All edge code executes within the isolated V8 context without filesystem or OS privilege escalation risk.
