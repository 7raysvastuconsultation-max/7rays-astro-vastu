import React, { useState } from 'react'

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  aspectRatio?: string
  priority?: boolean // If true, sets fetchPriority="high" and loading="eager" for LCP optimization
  className?: string
  sizes?: string
  fallbackSrc?: string
}

/**
 * OptimizedImage
 * Engineering for Core Web Vitals (CLS & LCP):
 * - Enforces explicit dimensions / aspect ratio to prevent layout shifts (CLS = 0)
 * - Priority loading for hero/LCP images (eager + fetchpriority=high)
 * - Native lazy loading and asynchronous decoding for below-the-fold images
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fallbackSrc,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src

  return (
    <div
      className={`relative overflow-hidden bg-slate-900/10 dark:bg-slate-800/40 ${className}`}
      style={{
        aspectRatio: aspectRatio || (width && height ? `${width} / ${height}` : undefined),
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        // @ts-expect-error fetchpriority is a valid HTML attribute for LCP optimization
        fetchpriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...rest}
      />
    </div>
  )
}
