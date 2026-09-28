import React from 'react'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import { businessConfig } from '@/config/business'

interface GoogleMapEmbedProps {
  title?: string
  className?: string
  height?: number | string
  showCardHeader?: boolean
  showDirectionsButton?: boolean
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  title = '7Rays Vastu Consultant Bangalore — Google Maps Location',
  className = '',
  height = 360,
  showCardHeader = true,
  showDirectionsButton = true,
}) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition hover:shadow-md ${className}`}
    >
      {showCardHeader && (
        <div className="flex flex-col justify-between gap-3 border-b border-slate-100 bg-slate-50/60 p-4 sm:flex-row sm:items-center sm:px-5 sm:py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-serif text-xs font-bold text-slate-900 sm:text-sm">
                7Rays Vastu Consultant Bangalore
              </h4>
              <p className="text-[11px] text-slate-500">
                3J64+827, Balaji Layout, Dasarahalli, Bengaluru, Karnataka 560024
              </p>
            </div>
          </div>

          {showDirectionsButton && (
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 transition hover:bg-amber-100 sm:self-auto"
            >
              <Navigation className="h-3 w-3 text-amber-700" />
              <span>Get Directions</span>
              <ExternalLink className="h-3 w-3 text-amber-600" />
            </a>
          )}
        </div>
      )}

      <div className="relative w-full bg-slate-100" style={{ height }}>
        <iframe
          src={businessConfig.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={title}
          className="h-full w-full"
        />
      </div>
    </div>
  )
}
