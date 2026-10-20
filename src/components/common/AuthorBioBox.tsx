import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award } from 'lucide-react'
import { businessConfig } from '@/config/business'

interface AuthorBioBoxProps {
  className?: string
}

export const AuthorBioBox: React.FC<AuthorBioBoxProps> = ({ className = '' }) => {
  return (
    <div
      className={`rounded-2xl border border-amber-200/80 bg-gradient-to-br from-[#FCFBF8] via-white to-amber-50/40 p-6 shadow-2xs sm:p-8 ${className}`}
    >
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="relative shrink-0">
          <img
            src="/images/rishwa-sinha.webp"
            alt={`${businessConfig.ownerName} - ${businessConfig.ownerJobTitle}`}
            className="h-20 w-20 rounded-2xl border-2 border-amber-300/80 object-cover shadow-sm sm:h-24 sm:w-24"
            width={96}
            height={96}
            loading="lazy"
          />
          <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white shadow-xs">
            <Award className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <h3 className="font-serif text-xl font-bold text-slate-900">
              {businessConfig.ownerName}
            </h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100/80 px-2.5 py-0.5 text-[11px] font-bold text-amber-900 uppercase tracking-wider">
              {businessConfig.ownerJobTitle}
            </span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Founder and lead practitioner at 7Rays Astro Vastu with {businessConfig.ownerExperience} of documented field experience in Bengaluru and nationwide remote consultations. Specializes in structural energy audits, directional balance, and scientific non-demolition spatial corrections for modern apartments, builder floors, and commercial workplaces.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 border-t border-slate-100 pt-4 text-xs font-semibold sm:justify-start">
            <Link
              to="/about/"
              className="inline-flex items-center gap-1 text-amber-800 transition hover:text-amber-950"
            >
              <span>About Rishwa Sinha</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-1 text-slate-700 transition hover:text-slate-950"
            >
              <span>Consultation Desk</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
