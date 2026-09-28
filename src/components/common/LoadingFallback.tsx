import React from 'react'

export const LoadingFallback: React.FC = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[50vh] w-full items-center justify-center bg-slate-950 px-4"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex h-10 w-10 animate-pulse items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-slate-950 shadow-lg shadow-amber-500/20">
          <span className="font-serif text-xs font-bold tracking-wider">7R</span>
        </div>
        <p className="font-serif text-xs tracking-widest text-amber-300/80 uppercase">
          Loading 7Rays Experience...
        </p>
      </div>
    </div>
  )
}
