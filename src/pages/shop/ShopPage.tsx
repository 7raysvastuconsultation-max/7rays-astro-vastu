import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Search,
  Star,
  Heart,
  ShoppingCart,
  ShieldCheck,
  Truck,
  UserCheck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Check,
  Compass,
  SlidersHorizontal,
  CheckCircle2,
  Building,
} from 'lucide-react'
import { PRODUCTS, PRODUCT_CATEGORIES, type Product } from '@/data/products'
import { useShop } from '@/context/ShopContext'
import { businessConfig } from '@/config/business'

export const ShopPage: React.FC = () => {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView } = useShop()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSort, setSelectedSort] = useState<'featured' | 'low-high' | 'high-low' | 'rating'>(
    'featured'
  )
  const [heroSlide, setHeroSlide] = useState(0)
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null)

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS]

    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.vastuPlacement.direction.toLowerCase().includes(q)
      )
    }

    if (selectedSort === 'low-high') {
      list.sort((a, b) => a.price - b.price)
    } else if (selectedSort === 'high-low') {
      list.sort((a, b) => b.price - a.price)
    } else if (selectedSort === 'rating') {
      list.sort((a, b) => b.rating - a.rating)
    }

    return list
  }, [selectedCategory, searchQuery, selectedSort])

  const handleAddToCartClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation()
    addToCart(product, 1)
    setAddedAnimationId(product.id)
    setTimeout(() => setAddedAnimationId(null), 1500)
  }

  const handleWishlistClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation()
    toggleWishlist(productId)
  }

  // Hero carousel slides
  const heroSlides = [
    {
      tag: 'VASTU PRODUCTS',
      titleDesktop: 'Create Positive Energy in Your Space',
      titleMobile: 'Positive Energy for a Balanced Life',
      subtitle:
        'Authentic Vastu remedies, energised crystals, yantras and home décor for a more balanced and prosperous life.',
      cta: 'Shop All Products',
      ctaMobile: 'Shop Now',
    },
    {
      tag: 'SACRED YANTRAS',
      titleDesktop: 'Neutralize Vastu Doshas Without Demolition',
      titleMobile: 'Vastu Dosha Remedies Without Demolition',
      subtitle:
        'Precision-calibrated geometric copper and brass yantras to balance Brahmasthan and directional faults.',
      cta: 'Explore Yantras',
      ctaMobile: 'View Yantras',
    },
    {
      tag: 'NATURAL CRYSTALS',
      titleDesktop: 'Energise Your Home & Career Corners',
      titleMobile: 'Energise Wealth & Career Corners',
      subtitle:
        'Natural unheated amethyst, black tourmaline, and 7-chakra crystals cleansed under moonlight.',
      cta: 'Shop Healing Crystals',
      ctaMobile: 'View Crystals',
    },
  ]

  const currentHero = heroSlides[heroSlide]

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900">
      <Helmet>
        <title>Shop Authentic Vastu Products, Crystals &amp; Yantras | 7Rays Astro Vastu</title>
        <meta
          name="description"
          content="Buy pre-energised authentic Vastu remedies, brass pyramids, sacred yantras, healing crystals, and home décor. Curated by Certified Vastu Consultant Rishwa Sinha. Pan-India free delivery."
        />
        <meta
          name="keywords"
          content="vastu products online, vastu pyramid for home, brass ganesha idol, vastu dosh nivaran yantra, 7 chakra bracelet, himalayan salt lamp, buy authentic vastu items bangalore"
        />
        <link rel="canonical" href="https://7raysastrovastu.com/shop" />
      </Helmet>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-3 pt-2 pb-16 sm:px-6 lg:px-8">
        {/* Mobile Search Bar (Directly below top app bar as in mockup phone frame) */}
        <div className="mb-3 block md:hidden">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Vastu Products..."
              className="w-full rounded-xl border border-amber-300/80 bg-white py-2.5 pr-10 pl-4 text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:border-amber-500 focus:outline-none"
            />
            <button
              className="absolute top-1/2 right-2.5 -translate-y-1/2 text-slate-400 hover:text-amber-600"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 1. HERO BANNER SECTION (Desktop & Mobile matching mockup) */}
        <section className="relative overflow-hidden rounded-2xl border border-amber-200/80 shadow-md lg:rounded-3xl">
          {/* Background image with warm ambient spiritual lighting */}
          <div className="relative aspect-[16/9] min-h-[300px] w-full sm:aspect-[21/9] sm:min-h-[360px] lg:min-h-[420px]">
            <img
              src="/images/shop/shop-hero-banner.jpg"
              alt="Authentic Vastu Products and Crystals Altar"
              className="absolute inset-0 h-full w-full object-cover object-center brightness-90"
              loading="eager"
            />
            {/* Dark warm gradient overlay for high contrast text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40 sm:via-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:hidden" />

            {/* Hero Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                {/* Left Text Block */}
                <div className="max-w-2xl lg:col-span-8">
                  {/* Eyebrow Tag */}
                  <span className="inline-block rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-amber-300 uppercase backdrop-blur-xs sm:text-xs">
                    {currentHero.tag}
                  </span>

                  {/* Heading: Desktop vs Mobile */}
                  <h1 className="mt-3 font-serif text-2xl leading-tight font-bold text-white drop-shadow-md sm:text-4xl lg:text-5xl">
                    <span className="hidden sm:inline">{currentHero.titleDesktop}</span>
                    <span className="sm:hidden">{currentHero.titleMobile}</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-2.5 max-w-xl text-xs leading-relaxed text-slate-200 drop-shadow-xs sm:text-sm lg:text-base">
                    {currentHero.subtitle}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-5 flex items-center gap-4 sm:mt-7">
                    <button
                      onClick={() => {
                        const el = document.getElementById('product-catalog')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:brightness-110 active:scale-98 sm:px-6 sm:py-3 sm:text-sm"
                    >
                      <span className="hidden sm:inline">{currentHero.cta}</span>
                      <span className="sm:hidden">{currentHero.ctaMobile}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Feature Glass Cards (Desktop only as in mockup) */}
                <div className="hidden flex-col items-end justify-center gap-2.5 lg:col-span-4 lg:flex">
                  <div className="flex w-64 items-center gap-2.5 rounded-xl border border-amber-300/30 bg-slate-950/65 p-3 text-xs text-slate-100 shadow-lg backdrop-blur-md">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">Authentic &amp; Energised</span>
                  </div>

                  <div className="flex w-64 items-center gap-2.5 rounded-xl border border-amber-300/30 bg-slate-950/65 p-3 text-xs text-slate-100 shadow-lg backdrop-blur-md">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                      <Compass className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">Curated by Vastu Experts</span>
                  </div>

                  <div className="flex w-64 items-center gap-2.5 rounded-xl border border-amber-300/30 bg-slate-950/65 p-3 text-xs text-slate-100 shadow-lg backdrop-blur-md">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                      <Building className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">Home &amp; Office Solutions</span>
                  </div>

                  <div className="flex w-64 items-center gap-2.5 rounded-xl border border-amber-300/30 bg-slate-950/65 p-3 text-xs text-slate-100 shadow-lg backdrop-blur-md">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                      <Truck className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">Pan India Delivery</span>
                  </div>
                </div>
              </div>

              {/* Slider Pagination Dots (interactive) */}
              <div className="mt-4 flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      heroSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. FLIPKART STYLE CATEGORY STRIP */}
        <section className="mt-6 rounded-2xl border border-amber-200/80 bg-white p-4 shadow-xs sm:mt-8 sm:p-6">
          {/* Desktop Categories: Horizontal row of circular icons (10 items) */}
          <div className="hidden grid-cols-10 gap-3 text-center md:grid">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <div
                    className={`relative h-16 w-16 overflow-hidden rounded-full border-2 shadow-xs transition-all duration-300 ${
                      isActive
                        ? 'scale-105 border-amber-500 ring-4 ring-amber-400/25'
                        : 'border-amber-200/80 group-hover:scale-105 group-hover:border-amber-400'
                    }`}
                  >
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-amber-500/15 backdrop-blur-[1px]" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs leading-tight font-semibold transition-colors ${
                      isActive
                        ? 'font-bold text-amber-900'
                        : 'text-slate-700 group-hover:text-amber-800'
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile Categories: 2 rows of 4 circular items (8 items matching mockup frame!) */}
          <div className="grid grid-cols-4 gap-x-2 gap-y-4 text-center md:hidden">
            {PRODUCT_CATEGORIES.slice(0, 8).map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <div
                    className={`relative h-13 w-13 overflow-hidden rounded-full border-2 shadow-xs transition-all ${
                      isActive
                        ? 'scale-105 border-amber-500 ring-3 ring-amber-400/30'
                        : 'border-amber-200/80 active:scale-95'
                    }`}
                  >
                    <img src={cat.imageUrl} alt={cat.name} className="h-full w-full object-cover" />
                  </div>
                  <span
                    className={`mt-1.5 line-clamp-2 text-[11px] leading-tight font-medium ${
                      isActive ? 'font-bold text-amber-900' : 'text-slate-700'
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile "View All" category reset button */}
          <div className="mt-3 flex justify-center md:hidden">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-4 py-1 text-[11px] font-bold transition ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-slate-950'
                  : 'border border-amber-300 bg-amber-50 text-amber-900'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
          </div>
        </section>

        {/* 3. TRUST / VALUE PROPOSITION STRIP */}
        <section className="mt-5 rounded-2xl border border-amber-200/80 bg-white px-4 py-4 shadow-xs sm:py-5">
          {/* Desktop 5 items */}
          <div className="hidden grid-cols-5 divide-x divide-amber-200/60 text-left md:grid">
            <div className="flex items-center gap-3 px-4 first:pl-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  100% Authentic Products
                </span>
                <span className="text-[11px] text-slate-500">Sourced &amp; Verified</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  Energised for Positive Energy
                </span>
                <span className="text-[11px] text-slate-500">Blessed &amp; Cleansed</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">Pan India Delivery</span>
                <span className="text-[11px] text-slate-500">Secure Packaging</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">Expert Guidance</span>
                <span className="text-[11px] text-slate-500">Product Recommendations</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 last:pr-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <RotateCcw className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">Easy Returns</span>
                <span className="text-[11px] text-slate-500">Hassle Free</span>
              </div>
            </div>
          </div>

          {/* Mobile 4 items (Matching mockup frame) */}
          <div className="grid grid-cols-4 gap-2 text-center md:hidden">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-5 w-5 text-amber-700" />
              <span className="mt-1 text-[10px] leading-tight font-semibold text-slate-800">
                Authentic Products
              </span>
            </div>

            <div className="flex flex-col items-center">
              <Truck className="h-5 w-5 text-amber-700" />
              <span className="mt-1 text-[10px] leading-tight font-semibold text-slate-800">
                Pan India Delivery
              </span>
            </div>

            <div className="flex flex-col items-center">
              <UserCheck className="h-5 w-5 text-amber-700" />
              <span className="mt-1 text-[10px] leading-tight font-semibold text-slate-800">
                Expert Guidance
              </span>
            </div>

            <div className="flex flex-col items-center">
              <RotateCcw className="h-5 w-5 text-amber-700" />
              <span className="mt-1 text-[10px] leading-tight font-semibold text-slate-800">
                Easy Returns
              </span>
            </div>
          </div>
        </section>

        {/* 4. FEATURED PRODUCTS CATALOG SECTION */}
        <section id="product-catalog" className="mt-8">
          {/* Section Header */}
          <div className="flex flex-col gap-2 border-b border-amber-200/80 pb-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Featured Products
              </h2>
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                Handpicked Vastu products for a more harmonious home and workplace.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort selector */}
              <div className="flex items-center gap-1 text-xs text-slate-600">
                <SlidersHorizontal className="h-3.5 w-3.5 text-amber-700" />
                <span className="hidden font-medium sm:inline">Sort:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value as any)}
                  className="rounded-lg border border-amber-200/80 bg-white px-2 py-1 text-xs font-semibold text-slate-800 focus:border-amber-500 focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="group flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900"
              >
                <span>View All Products</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Active Filter Chips */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-500">Categories:</span>
            {[
              'all',
              'vastu-remedies',
              'crystals-stones',
              'brass-idols',
              'vastu-yantras',
              'home-decor',
            ].map((catId) => {
              const label =
                catId === 'all'
                  ? 'All Items'
                  : PRODUCT_CATEGORIES.find((c) => c.id === catId)?.name || catId
              const isActive = selectedCategory === catId
              return (
                <button
                  key={catId}
                  onClick={() => setSelectedCategory(catId)}
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                    isActive
                      ? 'border border-amber-500 bg-amber-100 font-bold text-amber-950 shadow-2xs'
                      : 'border border-amber-200/70 bg-white text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* Products Grid: 2 columns on mobile (Flipkart style!), 3 on tablet, 6 on desktop */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {filteredProducts.map((product) => {
              const isLiked = isInWishlist(product.id)
              const isAdded = addedAnimationId === product.id

              return (
                <div
                  key={product.id}
                  onClick={() => openQuickView(product)}
                  className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-amber-200/80 bg-white p-2.5 shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-md sm:p-3"
                >
                  <div>
                    {/* Product Image Box */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />

                      {/* Top Badges (e.g. Bestseller, Popular) */}
                      {product.badge && (
                        <span
                          className={`absolute top-2 left-2 rounded-md px-2 py-0.5 text-[9px] font-extrabold uppercase shadow-xs ${
                            product.badge === 'Bestseller'
                              ? 'bg-amber-500 text-slate-950'
                              : 'bg-orange-500 text-white'
                          }`}
                        >
                          {product.badge}
                        </span>
                      )}

                      {/* Wishlist Heart Button */}
                      <button
                        onClick={(e) => handleWishlistClick(e, product.id)}
                        className={`absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-xs transition ${
                          isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-500'
                        }`}
                        aria-label="Toggle wishlist"
                      >
                        <Heart className={`h-3.5 w-3.5 ${isLiked ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Content Details */}
                    <div className="mt-2.5">
                      <h3 className="line-clamp-1 font-serif text-xs font-bold text-slate-900 transition-colors group-hover:text-amber-800 sm:text-sm">
                        {product.name}
                      </h3>

                      {/* Flipkart Star Rating Pill */}
                      <div className="mt-1 flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-0.5 rounded bg-emerald-700 px-1.5 py-0.5 text-[10px] font-bold text-white">
                          <span>{product.rating}</span>
                          <Star className="h-2.5 w-2.5 fill-current" />
                        </span>
                        <span className="text-[10px] font-medium text-slate-400">
                          ({product.reviewsCount})
                        </span>
                      </div>

                      {/* Price Row (Flipkart format) */}
                      <div className="mt-2 flex flex-wrap items-baseline gap-1.5">
                        <span className="text-xs font-bold text-slate-900 sm:text-sm">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700">
                          {product.discountPercent}% off
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button (Gold filled button as in mockup) */}
                  <div className="mt-3">
                    <button
                      onClick={(e) => handleAddToCartClick(e, product)}
                      className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold shadow-xs transition-all duration-200 active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-400 text-slate-950 hover:bg-amber-500'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-3.5 w-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="my-12 rounded-2xl border border-amber-200/80 bg-white p-8 text-center">
              <p className="font-serif text-base font-bold text-slate-800">
                No Vastu remedies found matching "{searchQuery}"
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Try searching for crystals, yantras, pyramids, or reset filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="mt-4 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </section>

        {/* 5. PROMOTIONAL 3-CARD GRID (Desktop & Mobile matching bottom of mockup) */}
        <section className="mt-10 sm:mt-14">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {/* Card 1: Natural Healing Crystals */}
            <div className="relative overflow-hidden rounded-2xl border border-amber-200/80 bg-slate-950 shadow-md">
              <div className="relative aspect-[16/9] w-full sm:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80"
                  alt="Natural Healing Crystals"
                  className="absolute inset-0 h-full w-full object-cover brightness-75 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <h3 className="font-serif text-lg font-bold sm:text-xl">
                    Natural Healing Crystals
                  </h3>
                  <p className="mt-1 text-xs text-slate-200">
                    Balance your energy and attract positivity.
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedCategory('crystals-stones')}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-300"
                    >
                      <span>Explore Crystals</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Vastu Yantras */}
            <div className="relative overflow-hidden rounded-2xl border border-amber-200/80 bg-slate-950 shadow-md">
              <div className="relative aspect-[16/9] w-full sm:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80"
                  alt="Vastu Yantras"
                  className="absolute inset-0 h-full w-full object-cover brightness-75 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <h3 className="font-serif text-lg font-bold sm:text-xl">Vastu Yantras</h3>
                  <p className="mt-1 text-xs text-slate-200">
                    Sacred geometry for harmony, protection and prosperity.
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedCategory('vastu-yantras')}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-300"
                    >
                      <span>Shop Yantras</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Home & Office Décor */}
            <div className="relative overflow-hidden rounded-2xl border border-amber-200/80 bg-slate-950 shadow-md">
              <div className="relative aspect-[16/9] w-full sm:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?w=800&auto=format&fit=crop&q=80"
                  alt="Home & Office Décor"
                  className="absolute inset-0 h-full w-full object-cover brightness-75 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <h3 className="font-serif text-lg font-bold sm:text-xl">
                    Home &amp; Office Décor
                  </h3>
                  <p className="mt-1 text-xs text-slate-200">
                    Enhance your space with Vastu-aligned décor.
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedCategory('home-decor')}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-300"
                    >
                      <span>Explore Décor</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. VASTU CONSECRATION ASSURANCE & CONSULTATION BANNER */}
        <section className="mt-10 rounded-2xl border border-amber-300/80 bg-gradient-to-br from-amber-500/10 via-[#FAF8F5] to-amber-500/15 p-6 shadow-xs sm:mt-14 sm:rounded-3xl sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                PERSONALLY ENERGISED BY RISHWA SINHA
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Need Guidance on Where to Place Your Vastu Products?
              </h3>
              <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-700 sm:text-sm">
                Every residential apartment, independent bungalow, and corporate office possesses a
                unique energetic orientation. Prior to positioning heavy brass pyramids or elemental
                yantras, our certified consultant <strong>{businessConfig.ownerName}</strong> can
                analyze your CAD floor plan to prescribe the exact degree, muhurta, and directional
                sector.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/vastu-services"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-amber-300 shadow-md transition hover:bg-slate-800"
                >
                  <span>Book Vastu Audit Consultation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white px-5 py-2.5 text-xs font-bold text-amber-900 transition hover:bg-amber-50"
                >
                  <span>Contact Bangalore Desk</span>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200/90 bg-white p-5 shadow-xs lg:col-span-4">
              <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                OUR ASSURANCE
              </span>
              <div className="mt-3 space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>100% Solid virgin brass &amp; genuine certified gemstones</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>Free Pan-India tracked delivery with bubble cushion packaging</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>
                    Includes step-by-step directional placement guide in English &amp; Hindi
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>Dedicated WhatsApp support for muhurta and installation timing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
