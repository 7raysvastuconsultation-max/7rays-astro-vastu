import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

interface RayItem {
  id: string
  name: string
  color: string
  glowClass: string
  accentColor: string
  description: string
  quality: string
}

export const SevenRaysSection: React.FC = () => {
  const [activeRay, setActiveRay] = useState<number | null>(null)

  const rays: RayItem[] = [
    {
      id: 'space',
      name: 'Space',
      color: '#F59E0B',
      glowClass: 'shadow-amber-500/50',
      accentColor: 'text-amber-400',
      description: 'Create the right environment',
      quality: 'Akasha / Spatial resonance ensuring clutter-free energy channels in home & office.',
    },
    {
      id: 'light',
      name: 'Light',
      color: '#FBBF24',
      glowClass: 'shadow-yellow-400/50',
      accentColor: 'text-yellow-400',
      description: 'Invite positivity and clarity',
      quality: 'Solar spectrum alignment (Surya Prakasha) driving mental acuity and optimism.',
    },
    {
      id: 'direction',
      name: 'Direction',
      color: '#10B981',
      glowClass: 'shadow-emerald-500/50',
      accentColor: 'text-emerald-400',
      description: 'Align with natural energies',
      quality:
        'Geomagnetic precision across 16 Vastu padas connecting human bio-fields to cardinal axes.',
    },
    {
      id: 'elements',
      name: 'Elements',
      color: '#06B6D4',
      glowClass: 'shadow-cyan-500/50',
      accentColor: 'text-cyan-400',
      description: 'Balance the five elements',
      quality:
        'Pancha Tattva equilibrium (Water, Fire, Earth, Air, Space) preventing elemental conflicts.',
    },
    {
      id: 'energy',
      name: 'Energy',
      color: '#EF4444',
      glowClass: 'shadow-rose-500/50',
      accentColor: 'text-rose-400',
      description: 'Enhance flow and vitality',
      quality:
        'Prana vayu circulation neutralizing underground geopathic stress and biological fatigue.',
    },
    {
      id: 'balance',
      name: 'Balance',
      color: '#3B82F6',
      glowClass: 'shadow-blue-500/50',
      accentColor: 'text-blue-400',
      description: 'Create stability and growth',
      quality: 'Astro-Vastu horoscope alignment grounding leadership and capital reserves.',
    },
    {
      id: 'harmony',
      name: 'Harmony',
      color: '#8B5CF6',
      glowClass: 'shadow-purple-500/50',
      accentColor: 'text-purple-400',
      description: 'Unite people, spaces and purpose',
      quality: 'Synergistic resonance fostering team collaboration and familial peace.',
    },
  ]

  return (
    <section className="relative overflow-hidden border-y border-amber-500/20 bg-slate-950 py-16 sm:py-24">
      {/* Background Image: Directly Related Seven Rays Architectural Sanctuary & Cosmic Beams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/images/seven-rays-bg.jpg"
          alt="Seven Rays Cosmic Energies Celestial Sanctuary"
          loading="eager"
          className="h-full w-full object-cover object-center opacity-45 brightness-110 contrast-120"
        />
        {/* Soft edge gradient vignettes so the image remains clearly visible while foreground text maintains perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-slate-950/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Philosophy */}
          <div className="space-y-5 text-left lg:col-span-4 lg:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>THE 7 RAYS</span>
            </div>

            <h2 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-5xl">
              Seven Energies. <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h2>

            <p className="text-sm leading-relaxed text-slate-300">
              Our philosophy is built on the 7 rays of cosmic energy that influence our spaces and
              lives. When these forces are in harmony, they create balance, prosperity and
              well-being.
            </p>

            <div className="pt-2">
              <Link
                to="/the-7-rays"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Learn About The 7 Rays</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Center Column: Radiant 7 Rays Geometric Mandala (Responsive Scalable Architecture) */}
          <div className="flex items-center justify-center py-4 sm:py-6 lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[285px] sm:max-w-[360px] md:max-w-[400px]">
              {/* Outer Golden Concentric Geometry */}
              <svg
                viewBox="0 0 400 400"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="175"
                  stroke="#F59E0B"
                  strokeWidth="0.75"
                  strokeDasharray="4,4"
                  opacity="0.3"
                  fill="none"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="135"
                  stroke="#F59E0B"
                  strokeWidth="0.5"
                  opacity="0.25"
                  fill="none"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="90"
                  stroke="#F59E0B"
                  strokeWidth="1"
                  opacity="0.4"
                  fill="none"
                />
                {/* 7 Radiating Light Rays */}
                {rays.map((ray, i) => {
                  const angle = (i * (360 / 7) - 90) * (Math.PI / 180)
                  const x2 = 200 + 135 * Math.cos(angle)
                  const y2 = 200 + 135 * Math.sin(angle)
                  return (
                    <line
                      key={ray.id}
                      x1="200"
                      y1="200"
                      x2={x2}
                      y2={y2}
                      stroke={ray.color}
                      strokeWidth="1.2"
                      strokeDasharray="2,2"
                      opacity="0.6"
                    />
                  )
                })}
              </svg>

              {/* Central Glowing Core Emblem */}
              <div className="absolute top-1/2 left-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-amber-400/60 bg-slate-950/90 text-center shadow-xl shadow-amber-500/20 backdrop-blur-md sm:h-28 sm:w-28 md:h-32 md:w-32">
                <span className="font-serif text-[10px] font-semibold text-amber-200 sm:text-xs">
                  The 7 Rays
                </span>
                <span className="font-serif text-xs font-bold text-amber-400 sm:text-sm">
                  of Balance
                </span>
              </div>

              {/* 7 Orbiting Glowing Orbs - Percentage Positioned for Perfect Scaling Across Devices */}
              {rays.map((ray, i) => {
                const angle = (i * (360 / 7) - 90) * (Math.PI / 180)
                const radiusPercent = 33.75 // exactly (135 / 400) * 100
                const leftPercent = 50 + radiusPercent * Math.cos(angle)
                const topPercent = 50 + radiusPercent * Math.sin(angle)

                const isCurrent = activeRay === i

                return (
                  <button
                    key={ray.id}
                    onClick={() => setActiveRay(isCurrent ? null : i)}
                    onMouseEnter={() => setActiveRay(i)}
                    className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center transition-transform duration-300 hover:scale-115 focus:outline-none"
                    style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                    aria-label={`Ray ${ray.name}: ${ray.description}`}
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full shadow-lg transition-all duration-300 sm:h-10 sm:w-10 md:h-11 md:w-11 ${
                        isCurrent ? 'scale-110 ring-4 ring-white/80' : ''
                      }`}
                      style={{
                        backgroundColor: ray.color,
                        boxShadow: `0 0 20px ${ray.color}99`,
                      }}
                    >
                      <span className="text-[10px] font-bold text-slate-950 uppercase sm:text-xs">
                        {ray.name[0]}
                      </span>
                    </div>
                    <span className="mt-0.5 text-[9px] font-semibold tracking-wider text-slate-200 drop-shadow sm:mt-1 sm:text-[10px]">
                      {ray.name}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Interactive Descriptor List */}
          <div className="space-y-3.5 text-left lg:col-span-3">
            {rays.map((ray, i) => (
              <div
                key={ray.id}
                onMouseEnter={() => setActiveRay(i)}
                className={`cursor-pointer rounded-xl border p-2.5 transition-all duration-200 ${
                  activeRay === i
                    ? 'border-amber-400 bg-slate-900/90 shadow-md'
                    : 'border-slate-800/80 bg-slate-900/30 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: ray.color }}
                  />
                  <span className={`text-xs font-bold ${ray.accentColor}`}>{ray.name}</span>
                  <span className="text-[11px] text-slate-400">— {ray.description}</span>
                </div>
                {activeRay === i && (
                  <p className="animate-fadeIn mt-1.5 pl-5 text-[11px] leading-relaxed text-slate-300">
                    {ray.quality}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
