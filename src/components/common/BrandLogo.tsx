import React from 'react'

export interface BrandLogoProps {
  /** Size variant for the emblem and text */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Whether to show the text lockup (7RAYS ASTRO VASTU) */
  showText?: boolean
  /** Whether to enable luxury animations (ambient glow, gleam sweep, hover rotation) */
  animated?: boolean
  /** Additional wrapper class names */
  className?: string
  /** Custom text styling overrides */
  textClassName?: string
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  animated = true,
  className = '',
  textClassName = '',
}) => {
  const sizeMap = {
    sm: {
      box: 'h-9 w-9 rounded-lg',
      imgSize: 36,
      title: 'text-base',
      subtitle: 'text-[8px] tracking-[0.24em] -mt-0.5',
    },
    md: {
      box: 'h-11 w-11 rounded-xl',
      imgSize: 44,
      title: 'text-lg sm:text-xl',
      subtitle: 'text-[9px] sm:text-[10px] tracking-[0.28em] -mt-1',
    },
    lg: {
      box: 'h-14 w-14 rounded-2xl',
      imgSize: 56,
      title: 'text-2xl',
      subtitle: 'text-xs tracking-[0.3em] -mt-1',
    },
    xl: {
      box: 'h-20 w-20 rounded-3xl',
      imgSize: 80,
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-sm tracking-[0.34em] -mt-1.5',
    },
  }

  const currentSize = sizeMap[size]

  return (
    <div className={`group flex items-center gap-3 ${className}`}>
      {/* 3D Gold Celestial Star Emblem */}
      <div className="relative shrink-0">
        {/* Ambient Breathing Gold Aura */}
        {animated && (
          <div
            aria-hidden="true"
            className="animate-gold-breathe absolute -inset-1 rounded-2xl bg-amber-500/25 blur-md transition-all duration-500 group-hover:bg-amber-400/40 group-hover:blur-lg"
          />
        )}

        {/* Luxury Emblem Container */}
        <div
          className={`relative flex ${currentSize.box} items-center justify-center overflow-hidden border border-amber-400/35 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-lg shadow-amber-500/20 transition-all duration-500 group-hover:border-amber-300/70 group-hover:shadow-[0_0_24px_rgba(251,191,36,0.4)] group-hover:scale-[1.03]`}
        >
          {/* Subtle Ambient Radial Lighting Behind Star */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.22)_0%,transparent_70%)]"
          />

          {/* 8-Pointed 3D Faceted Gold Star Symbol */}
          <picture className="relative z-10 flex h-full w-full items-center justify-center p-1">
            <source srcSet="/images/7rays-symbol.webp" type="image/webp" />
            <img
              src="/images/7rays-symbol.png"
              alt="7Rays Astro Vastu Emblem"
              width={currentSize.imgSize}
              height={currentSize.imgSize}
              loading="eager"
              decoding="async"
              className={`h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                animated
                  ? 'transition-transform duration-700 ease-out group-hover:rotate-12 group-hover:scale-105'
                  : ''
              }`}
            />
          </picture>

          {/* Light-Gleam Sheen Sweep */}
          {animated && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
            >
              <div className="animate-logo-gleam h-full w-1/2 bg-gradient-to-r from-transparent via-amber-200/35 to-transparent" />
            </div>
          )}

          {/* Inner Golden Rim Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] border border-amber-200/20"
          />
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className={`flex flex-col ${textClassName}`}>
          <span
            className={`font-serif font-bold tracking-widest text-slate-100 transition-all duration-300 group-hover:text-amber-300 ${currentSize.title}`}
          >
            <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:brightness-110">
              7RAYS
            </span>
          </span>
          <span
            className={`font-semibold uppercase text-amber-400/90 transition-colors duration-300 group-hover:text-amber-300 ${currentSize.subtitle}`}
          >
            Astro Vastu
          </span>
        </div>
      )}
    </div>
  )
}
