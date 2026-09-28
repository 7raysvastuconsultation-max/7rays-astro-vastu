import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  MessageSquare,
  Users,
  Eye,
  RefreshCw,
  Download,
  Search,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'

interface DashboardData {
  kpis: {
    totalEnquiries: number
    newEnquiries: number
    totalCalls: number
    totalWhatsApp: number
    totalPageViews: number
    totalConversions: number
  }
  breakdowns: {
    eventsByType: { event_type: string; count: number }[]
    whatsAppBreakdown: { label: string; count: number }[]
    callsBreakdown: { label: string; count: number }[]
    enquiriesByService: { service: string; count: number }[]
    enquiriesBySource: { source: string; count: number }[]
    topPages: { path: string; views: number }[]
  }
  recentEnquiries: EnquiryItem[]
  recentEvents: EventItem[]
  serverTime: string
}

interface EnquiryItem {
  id: string
  name: string
  phone: string
  email?: string
  property_type?: string
  location?: string
  service_required?: string
  approx_size?: string
  consultation_type?: string
  message?: string
  file_name?: string
  source?: string
  status: 'new' | 'contacted' | 'converted' | 'archived'
  notes?: string
  created_at: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

interface EventItem {
  id: string
  event_type: string
  event_label?: string
  page_path?: string
  created_at: string
  ip_address?: string
}

export const AnalyticsDashboardPage: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [expandedEnquiryId, setExpandedEnquiryId] = useState<string | null>(null)
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null)
  const [noteText, setNoteText] = useState('')

  const fetchDashboard = useCallback(async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/analytics/dashboard')
      if (!res.ok) {
        throw new Error('Failed to connect to analytics backend')
      }
      const json = await res.json()
      setData(json)
      setError(null)
    } catch (err) {
      console.error('Error fetching dashboard:', err)
      setError(
        'Backend server is connecting. Ensure backend is running via "npm run server" or dev proxy.'
      )
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const loadInitialData = async () => {
      try {
        const res = await fetch('/api/analytics/dashboard')
        if (!res.ok) throw new Error('Failed to connect')
        const json = await res.json()
        if (isMounted) {
          setData(json)
          setError(null)
          setLoading(false)
        }
      } catch {
        if (isMounted) {
          setError(
            'Backend server is connecting. Ensure backend is running via "npm run server" or dev proxy.'
          )
          setLoading(false)
        }
      }
    }

    loadInitialData()
    const interval = setInterval(loadInitialData, 30000)
    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [])

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        fetchDashboard()
      }
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  const handleSaveNotes = async (id: string) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: noteText }),
      })
      if (res.ok) {
        setEditingNotesId(null)
        fetchDashboard()
      }
    } catch (err) {
      console.error('Error saving notes:', err)
    }
  }

  const filteredEnquiries = (data?.recentEnquiries || []).filter((enquiry) => {
    const matchesStatus = statusFilter === 'all' || enquiry.status === statusFilter
    const matchesSearch =
      !search ||
      enquiry.name.toLowerCase().includes(search.toLowerCase()) ||
      enquiry.phone.includes(search) ||
      (enquiry.email && enquiry.email.toLowerCase().includes(search.toLowerCase())) ||
      (enquiry.location && enquiry.location.toLowerCase().includes(search.toLowerCase()))
    return matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-900 selection:bg-amber-100 selection:text-amber-950">
      <SEOHead
        title="Analytics & Leads Intelligence Dashboard | 7Rays Astro Vastu"
        description="Comprehensive backend analytics for tracking phone calls, WhatsApp consultations, and customer enquiry submissions."
        noIndex={true}
        noFollow={true}
      />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top Header Bar */}
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
              <h1 className="font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Analytics &amp; Leads Central
              </h1>
            </div>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Live tracking for phone calls, WhatsApp consultations, customer enquiries &amp;
              website traffic.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchDashboard}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${loading ? 'animate-spin text-amber-700' : ''}`}
              />
              <span>Refresh</span>
            </button>

            <a
              href="/api/enquiries/export"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-[#DEB86F] px-4 py-2 text-xs font-bold text-slate-950 shadow-xs transition hover:bg-[#d0a757]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CSV</span>
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-2xs transition hover:text-slate-900"
            >
              <span>View Site</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-amber-300 bg-[#FFF9EE] p-4 text-xs font-medium text-amber-900">
            {error}
          </div>
        )}

        {/* 4 Core KPI Stat Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Phone Calls */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition hover:border-amber-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Calls Tracked
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Phone className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-slate-900">
                {data?.kpis.totalCalls ?? 0}
              </span>
              <span className="text-xs text-slate-500">dial clicks</span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              Direct consultation calls from Header, Contact &amp; Footer.
            </p>
          </div>

          {/* Card 2: WhatsApp Consultations */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition hover:border-emerald-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                WhatsApp Clicks
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageSquare className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-slate-900">
                {data?.kpis.totalWhatsApp ?? 0}
              </span>
              <span className="text-xs text-slate-500">chats initiated</span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              Floating button, blog sidebars, and direct CTAs.
            </p>
          </div>

          {/* Card 3: Form Fill-Ups / Customer Leads (Warm Amber Card) */}
          <div className="rounded-2xl border border-[#F6E3B8] bg-[#FFF9EE] p-5 shadow-xs transition hover:border-amber-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-amber-900 uppercase">
                Customer Leads
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5E6CC] text-amber-900">
                <Users className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-amber-950">
                {data?.kpis.totalEnquiries ?? 0}
              </span>
              <span className="rounded-full bg-[#DEB86F] px-2.5 py-0.5 text-xs font-bold text-slate-950">
                {data?.kpis.newEnquiries ?? 0} new
              </span>
            </div>
            <p className="mt-2 text-[11px] text-amber-900/80">
              High-intent consultation form submissions.
            </p>
          </div>

          {/* Card 4: Total Pageviews */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition hover:border-sky-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Total Pageviews
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <Eye className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-slate-900">
                {data?.kpis.totalPageViews ?? 0}
              </span>
              <span className="text-xs text-slate-500">views</span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              Total internal navigation &amp; organic arrivals.
            </p>
          </div>
        </div>

        {/* SECTION 1: Customer Enquiries & Lead Management Table */}
        <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Customer Enquiries &amp; Leads
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Real-time submissions with complete customer details, property type, and contact
                info.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="pointer-events-none absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search name, phone, city..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-lg border border-slate-200 bg-[#FAFAFA] py-1.5 pr-3 pl-8.5 text-xs text-slate-800 placeholder-slate-400 focus:border-amber-400 focus:bg-white focus:outline-none"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-lg border border-slate-200 bg-[#FAFAFA] px-3 py-1.5 text-xs text-slate-700 focus:border-amber-400 focus:outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="new">New Only</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          {/* Enquiries Table */}
          <div className="mt-6 overflow-x-auto">
            {filteredEnquiries.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-500">
                No customer enquiries found matching the selected filters.
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-semibold text-slate-500 uppercase">
                    <th className="py-3 pr-4 pl-3">Customer Details</th>
                    <th className="py-3 pr-4">Service &amp; Property</th>
                    <th className="py-3 pr-4">Location</th>
                    <th className="py-3 pr-4">Date</th>
                    <th className="py-3 pr-4">Status</th>
                    <th className="py-3 pr-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredEnquiries.map((lead) => {
                    const isExpanded = expandedEnquiryId === lead.id
                    const isEditingNotes = editingNotesId === lead.id

                    return (
                      <React.Fragment key={lead.id}>
                        <tr className="transition hover:bg-slate-50/80">
                          <td className="py-3.5 pr-4 pl-3">
                            <div className="font-semibold text-slate-900">{lead.name}</div>
                            <div className="mt-0.5 flex items-center gap-2 text-slate-500">
                              <a
                                href={`tel:${lead.phone}`}
                                className="font-mono font-semibold text-amber-800 hover:underline"
                              >
                                {lead.phone}
                              </a>
                              {lead.email && <span className="text-slate-400">• {lead.email}</span>}
                            </div>
                          </td>

                          <td className="py-3.5 pr-4">
                            <div className="font-medium text-slate-800">
                              {lead.service_required || 'Vastu Consultation'}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {lead.property_type || 'Residential'}
                            </div>
                          </td>

                          <td className="py-3.5 pr-4 text-slate-700">
                            {lead.location || 'Bangalore'}
                          </td>

                          <td className="py-3.5 pr-4 whitespace-nowrap text-slate-500">
                            {new Date(lead.created_at).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>

                          <td className="py-3.5 pr-4">
                            <select
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${
                                lead.status === 'new'
                                  ? 'border border-amber-200 bg-amber-50 text-amber-800'
                                  : lead.status === 'contacted'
                                    ? 'border border-sky-200 bg-sky-50 text-sky-800'
                                    : lead.status === 'converted'
                                      ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                                      : 'border border-slate-200 bg-slate-100 text-slate-600'
                              } focus:outline-none`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="converted">Converted</option>
                              <option value="archived">Archived</option>
                            </select>
                          </td>

                          <td className="py-3.5 pr-3 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-1.5">
                              {/* Call Customer Button */}
                              <a
                                href={`tel:${lead.phone}`}
                                title="Call Customer"
                                className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-2xs transition hover:border-amber-400 hover:bg-amber-50/50 hover:text-amber-800"
                              >
                                <Phone className="h-3.5 w-3.5" />
                              </a>

                              {/* WhatsApp Customer Button */}
                              <a
                                href={`https://wa.me/${lead.phone.replace(
                                  /[^0-9]/g,
                                  ''
                                )}?text=${encodeURIComponent(
                                  `Hello ${lead.name}, thank you for contacting 7Rays Astro Vastu regarding ${lead.service_required || 'your consultation'}.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Chat on WhatsApp"
                                className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-emerald-600 shadow-2xs transition hover:border-emerald-400 hover:bg-emerald-50/50"
                              >
                                <MessageSquare className="h-3.5 w-3.5" />
                              </a>

                              {/* Expand Details Button */}
                              <button
                                onClick={() => setExpandedEnquiryId(isExpanded ? null : lead.id)}
                                title="View Details"
                                className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-2xs transition hover:text-slate-900"
                              >
                                {isExpanded ? (
                                  <ChevronUp className="h-3.5 w-3.5" />
                                ) : (
                                  <ChevronDown className="h-3.5 w-3.5" />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>

                        {/* Expanded Details Row */}
                        {isExpanded && (
                          <tr className="bg-[#FCFBF8]">
                            <td colSpan={6} className="border-t border-slate-100 p-4 text-xs">
                              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div>
                                  <span className="font-semibold text-slate-700">
                                    Message / Requirement:
                                  </span>
                                  <p className="mt-1 text-slate-600">
                                    {lead.message || 'No additional message provided.'}
                                  </p>
                                  {lead.file_name && (
                                    <div className="mt-2 font-medium text-amber-800">
                                      Attached: 📄 {lead.file_name}
                                    </div>
                                  )}
                                </div>

                                <div>
                                  <span className="font-semibold text-slate-700">
                                    Consultation Details:
                                  </span>
                                  <div className="mt-1 space-y-0.5 text-slate-600">
                                    <div>Type: {lead.consultation_type || 'Standard'}</div>
                                    <div>Size: {lead.approx_size || 'N/A'}</div>
                                    <div>Source: {lead.source || 'Website'}</div>
                                  </div>
                                </div>

                                <div>
                                  <div className="flex items-center justify-between">
                                    <span className="font-semibold text-slate-700">
                                      Internal Staff Notes:
                                    </span>
                                    {!isEditingNotes && (
                                      <button
                                        onClick={() => {
                                          setEditingNotesId(lead.id)
                                          setNoteText(lead.notes || '')
                                        }}
                                        className="text-[11px] font-semibold text-amber-800 hover:underline"
                                      >
                                        Edit
                                      </button>
                                    )}
                                  </div>

                                  {isEditingNotes ? (
                                    <div className="mt-1.5 space-y-2">
                                      <textarea
                                        rows={2}
                                        value={noteText}
                                        onChange={(e) => setNoteText(e.target.value)}
                                        placeholder="Add follow-up notes..."
                                        className="w-full rounded-md border border-slate-300 bg-white p-2 text-xs text-slate-800 focus:border-amber-400 focus:outline-none"
                                      />
                                      <div className="flex gap-2">
                                        <button
                                          onClick={() => handleSaveNotes(lead.id)}
                                          className="rounded bg-[#DEB86F] px-2.5 py-1 text-[11px] font-bold text-slate-950"
                                        >
                                          Save
                                        </button>
                                        <button
                                          onClick={() => setEditingNotesId(null)}
                                          className="rounded border border-slate-300 bg-white px-2 py-1 text-[11px] text-slate-600"
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <p className="mt-1 text-slate-600 italic">
                                      {lead.notes || 'No internal notes added yet.'}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    )
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* SECTION 2: Analytics Breakdowns */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Breakdown 1: WhatsApp Clicks by Location */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
            <h3 className="flex items-center gap-2 font-serif text-base font-bold text-slate-900">
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp Click Sources</span>
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Where users click to initiate WhatsApp chats.
            </p>
            <div className="mt-4 space-y-2">
              {(data?.breakdowns.whatsAppBreakdown || []).length === 0 ? (
                <div className="py-6 text-center text-xs text-slate-400">
                  No WhatsApp clicks recorded yet.
                </div>
              ) : (
                data?.breakdowns.whatsAppBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-slate-100 py-1 text-xs last:border-0"
                  >
                    <span className="truncate text-slate-700">{item.label}</span>
                    <span className="font-mono font-semibold text-emerald-700">{item.count}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Breakdown 2: Calls by Location */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
            <h3 className="flex items-center gap-2 font-serif text-base font-bold text-slate-900">
              <Phone className="h-4 w-4 text-amber-700" />
              <span>Phone Call Click Sources</span>
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Where users click to dial consultation numbers.
            </p>
            <div className="mt-4 space-y-2">
              {(data?.breakdowns.callsBreakdown || []).length === 0 ? (
                <div className="py-6 text-center text-xs text-slate-400">
                  No phone calls recorded yet.
                </div>
              ) : (
                data?.breakdowns.callsBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-slate-100 py-1 text-xs last:border-0"
                  >
                    <span className="truncate text-slate-700">{item.label}</span>
                    <span className="font-mono font-semibold text-amber-800">{item.count}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Breakdown 3: Enquiries by Service */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
            <h3 className="flex items-center gap-2 font-serif text-base font-bold text-slate-900">
              <Users className="h-4 w-4 text-sky-700" />
              <span>Enquiries by Service</span>
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">Demand by consultation domain.</p>
            <div className="mt-4 space-y-2">
              {(data?.breakdowns.enquiriesByService || []).length === 0 ? (
                <div className="py-6 text-center text-xs text-slate-400">
                  No service breakdown data yet.
                </div>
              ) : (
                data?.breakdowns.enquiriesByService.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-slate-100 py-1 text-xs last:border-0"
                  >
                    <span className="truncate text-slate-700">{item.service}</span>
                    <span className="font-mono font-semibold text-sky-700">{item.count}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* SECTION 3: Live Real-Time Activity Feed */}
        <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-serif text-base font-bold text-slate-900">
              <Clock className="h-4 w-4 text-slate-500" />
              <span>Live Website Activity Feed</span>
            </h3>
            <span className="text-[11px] text-slate-400">Auto-refreshes every 30s</span>
          </div>

          <div className="mt-4 divide-y divide-slate-100">
            {(data?.recentEvents || []).length === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400">
                No activity events recorded yet. Browse the website to generate live telemetry.
              </div>
            ) : (
              data?.recentEvents.map((evt) => (
                <div key={evt.id} className="flex items-center justify-between py-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        evt.event_type === 'whatsapp_click'
                          ? 'bg-emerald-500'
                          : evt.event_type === 'phone_call'
                            ? 'bg-amber-500'
                            : evt.event_type === 'form_submission'
                              ? 'bg-purple-500'
                              : 'bg-sky-500'
                      }`}
                    />
                    <span className="font-mono font-semibold text-slate-800">{evt.event_type}</span>
                    {evt.event_label && <span className="text-slate-600">• {evt.event_label}</span>}
                    {evt.page_path && (
                      <span className="hidden text-slate-400 sm:inline">• {evt.page_path}</span>
                    )}
                  </div>
                  <span className="font-mono text-[11px] whitespace-nowrap text-slate-400">
                    {new Date(evt.created_at).toLocaleTimeString('en-IN')}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboardPage
