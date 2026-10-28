import React, { useState } from 'react'
import { Play, ShieldCheck, ExternalLink, X, Sparkles, CheckCircle2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'

interface FeaturedVideo {
  id: string
  title: string
  category: string
  tag: string
  description: string
  thumbnail: string
  duration: string
}

const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: '21aUHFW1ifo',
    title: 'Vastu Shastra and the Five Elements (Pancha Tattva)',
    category: 'Vedic Foundations',
    tag: '5 Elements',
    description:
      'Understanding elemental balance across spatial zones, earth vibrations, and natural room orientations without demolition.',
    thumbnail: '/images/youtube/vastu-5-elements.webp',
    duration: 'Educational Guide',
  },
  {
    id: '7ZiflPzK0g8',
    title: 'Opportunity & Growth: Check Your North Zone Energy',
    category: 'Career & Prosperity',
    tag: 'North Zone',
    description:
      'How the North directional sector governs career pathways, financial flow, and clean energy circulation in residences and workspaces.',
    thumbnail: '/images/youtube/north-zone-growth.webp',
    duration: 'Practical Tip',
  },
  {
    id: 'NVYfVqts94g',
    title: 'Lighting Every Direction As Per Vastu Principles',
    category: 'Space Harmonisation',
    tag: 'Directional Light',
    description:
      'Practical guidance on solar spectrum alignment, ambient lighting balance, and evening energy transitions in modern homes.',
    thumbnail: '/images/youtube/lighting-directions.webp',
    duration: 'Lighting Guide',
  },
  {
    id: 'u13IoO2VCVg',
    title: 'Mirror Placement & Energy Reflections in Modern Homes',
    category: 'Apartment Layouts',
    tag: 'Mirror Vastu',
    description:
      'Why reflective surfaces influence directional energy amplification and how to position mirrors harmoniously in bedrooms and corridors.',
    thumbnail: '/images/youtube/mirror-placement.webp',
    duration: 'Placement Tip',
  },
]

export const FeaturedVideoSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const activeVideo = FEATURED_VIDEOS[selectedIndex]
  const youtubeChannelUrl =
    siteConfig.social.youtube || 'https://youtube.com/@7rays_rs?si=_jhoJM4e0Pno8U1J'
  const activeVideoWatchUrl = `https://www.youtube.com/watch?v=${activeVideo.id}`

  const handleSelectVideo = (index: number) => {
    setSelectedIndex(index)
    setIsPlaying(true)
  }

  // Schema for the currently featured video
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${activeVideo.title} | 7Rays Astro Vastu`,
    description: activeVideo.description,
    thumbnailUrl: [`${siteConfig.url}${activeVideo.thumbnail}`],
    uploadDate: '2024-01-01T08:00:00+05:30',
    embedUrl: `https://www.youtube-nocookie.com/embed/${activeVideo.id}`,
    contentUrl: activeVideoWatchUrl,
    publisher: {
      '@type': 'Organization',
      name: businessConfig.businessName,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/7rays-symbol-96.png`,
      },
    },
    author: {
      '@type': 'Person',
      name: businessConfig.ownerName,
      jobTitle: businessConfig.ownerJobTitle,
    },
  }

  return (
    <section
      id="featured-video"
      className="relative overflow-hidden border-b border-amber-500/20 bg-slate-950 py-20 text-white sm:py-24"
      aria-labelledby="featured-video-heading"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
      </Helmet>

      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-300 uppercase">
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 fill-current text-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span>Featured Channel • @7rays_rs</span>
            </div>
            <h2
              id="featured-video-heading"
              className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl"
            >
              Watch &amp; Learn: Vastu &amp; Space Harmony
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Explore authentic video insights, directional energy principles, and non-demolition
              remedies by Certified Vastu Consultant Rishwa Sinha on our official YouTube channel.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-600/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-red-950/40 transition hover:bg-red-600 hover:shadow-red-600/20 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Subscribe to @7rays_rs on YouTube (opens in new tab)"
            >
              <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span>Subscribe on YouTube</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Video Player + Playlist/Channel Info */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Main Video Showcase (7 Columns) */}
          <div className="space-y-4 lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-amber-500/30 bg-slate-900 shadow-2xl shadow-black/80">
              {isPlaying ? (
                <div className="relative h-full w-full">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={`${activeVideo.title} - 7Rays Astro Vastu YouTube`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/90 px-2.5 py-1 text-xs font-medium text-slate-300 shadow-md backdrop-blur-sm transition hover:bg-slate-900 hover:text-white"
                    title="Close player and return to preview"
                  >
                    <X className="h-3.5 w-3.5 text-amber-400" />
                    <span>Close</span>
                  </button>
                </div>
              ) : (
                <div className="group relative h-full w-full">
                  {/* High-res Optimized WebP Poster */}
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    width={1280}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlays for Readability and Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3 text-amber-400" />
                      <span>{activeVideo.category}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-sm">
                      <ShieldCheck className="h-3 w-3 text-emerald-400" />
                      <span>Privacy-Friendly Player</span>
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="group/btn relative flex items-center justify-center focus:outline-none"
                      aria-label={`Play video: ${activeVideo.title}`}
                    >
                      {/* Outer animated gold aura ring */}
                      <span className="absolute h-20 w-20 rounded-full bg-amber-500/20 blur-md transition duration-300 group-hover/btn:scale-125 group-hover/btn:bg-amber-500/40" />

                      {/* Red YouTube pill button */}
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-red-600 text-white shadow-xl shadow-red-950/50 transition duration-300 group-hover/btn:scale-110 group-hover/btn:bg-red-500 sm:h-20 sm:w-20">
                        <Play className="ml-1 h-7 w-7 fill-current sm:h-9 sm:w-9" />
                      </span>
                    </button>
                    <span className="mt-3 text-xs font-semibold tracking-wide text-slate-200 drop-shadow-md sm:text-sm">
                      Click to Play Video
                    </span>
                  </div>

                  {/* Bottom Video Meta Bar on Poster */}
                  <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-slate-800 bg-slate-950/85 p-3.5 backdrop-blur-md">
                    <h3 className="line-clamp-1 font-serif text-base font-bold text-white sm:text-lg">
                      {activeVideo.title}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-xs text-slate-300">
                      {activeVideo.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-amber-300">
                      <span>Rishwa Sinha • Certified Vastu Consultant</span>
                      <span className="font-mono text-slate-400">{activeVideo.duration}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Controls & Privacy Notice */}
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  <strong>Privacy Protected:</strong> YouTube cookies and external scripts only load
                  when you tap play.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeVideoWatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition hover:text-amber-200"
                  aria-label={`Watch ${activeVideo.title} on YouTube (opens in new tab)`}
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Playlist & Official Channel Sidebar (5 Columns) */}
          <div className="space-y-4 lg:col-span-5">
            {/* Channel Profile Box */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-500/20 to-slate-900 text-amber-400 shadow-md">
                  <img
                    src="/images/7rays-symbol-48.webp"
                    alt="7Rays Symbol"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate font-serif text-sm font-bold text-white sm:text-base">
                      7 Rays_RS by Rishhwa Scinha
                    </h3>
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                  </div>
                  <p className="text-xs font-medium text-amber-400/90">@7rays_rs</p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Educational video guides on Vastu Shastra, 16-zone blueprint assessments,
                non-demolition space remedies, and Vedic astrology synthesis.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-xs font-semibold text-amber-300 transition hover:bg-amber-500/20 hover:text-white"
                >
                  <svg aria-hidden="true" className="h-4 w-4 fill-current text-red-500" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span>Visit @7rays_rs Channel</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Video Selector List */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
                <span>Featured Channel Videos</span>
                <span className="text-[11px] text-amber-400">{FEATURED_VIDEOS.length} Guides</span>
              </div>

              <div className="space-y-2">
                {FEATURED_VIDEOS.map((video, idx) => {
                  const isSelected = selectedIndex === idx
                  return (
                    <button
                      key={video.id}
                      type="button"
                      onClick={() => handleSelectVideo(idx)}
                      className={`group flex w-full items-center gap-3 rounded-xl border p-2.5 text-left transition duration-200 ${
                        isSelected
                          ? 'border-amber-500/60 bg-amber-500/15 shadow-md shadow-amber-950/30'
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                      aria-pressed={isSelected}
                    >
                      {/* Mini Thumbnail */}
                      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-950">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          width={96}
                          height={64}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/20 ${
                            isSelected ? 'bg-amber-950/40' : ''
                          }`}
                        >
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full ${
                              isSelected ? 'bg-amber-400 text-slate-950' : 'bg-red-600 text-white'
                            }`}
                          >
                            <Play className="ml-0.5 h-3 w-3 fill-current" />
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold tracking-wider text-amber-400 uppercase">
                          {video.tag}
                        </span>
                        <h4
                          className={`line-clamp-1 text-xs font-semibold sm:text-sm ${
                            isSelected ? 'text-amber-200' : 'text-slate-200 group-hover:text-white'
                          }`}
                        >
                          {video.title}
                        </h4>
                        <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-400">
                          {video.description}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Topics Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-[11px] text-slate-400">
                16-Zone Blueprint Audits
              </span>
              <span className="rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-[11px] text-slate-400">
                Non-Demolition Remedies
              </span>
              <span className="rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-[11px] text-slate-400">
                Bengaluru High-Rise Living
              </span>
              <span className="rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-[11px] text-slate-400">
                Pancha Tattva Balance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
