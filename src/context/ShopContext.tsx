import React, { createContext, useContext, useState, useEffect } from 'react'
import { type Product, PRODUCTS } from '@/data/products'

export interface CartItem {
  product: Product
  quantity: number
}

interface ShopContextType {
  cart: CartItem[]
  wishlist: string[]
  isCartOpen: boolean
  isAccountOpen: boolean
  quickViewProduct: Product | null
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  toggleWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  openCart: () => void
  closeCart: () => void
  openAccount: () => void
  closeAccount: () => void
  openQuickView: (product: Product) => void
  closeQuickView: () => void
  cartCount: number
  cartTotal: number
  originalTotal: number
  totalSavings: number
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

const DEFAULT_INITIAL_CART: CartItem[] = [
  {
    product: PRODUCTS[0], // Vastu Pyramid for Home (matches mockup screenshot with 1 item in cart)
    quantity: 1,
  },
]

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('7rays_shop_cart')
        if (saved) {
          const parsed = JSON.parse(saved)
          if (Array.isArray(parsed) && parsed.length > 0) return parsed
        }
      } catch {
        // fallback to default
      }
    }
    return DEFAULT_INITIAL_CART
  })

  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('7rays_shop_wishlist')
        if (saved) return JSON.parse(saved)
      } catch {
        // fallback
      }
    }
    return ['prod-1', 'prod-3']
  })

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  useEffect(() => {
    try {
      localStorage.setItem('7rays_shop_cart', JSON.stringify(cart))
    } catch {
      // storage unavailable
    }
  }, [cart])

  useEffect(() => {
    try {
      localStorage.setItem('7rays_shop_wishlist', JSON.stringify(wishlist))
    } catch {
      // storage unavailable
    }
  }, [wishlist])

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...prev, { product, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    )
  }

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )
  }

  const isInWishlist = (productId: string) => wishlist.includes(productId)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const openAccount = () => setIsAccountOpen(true)
  const closeAccount = () => setIsAccountOpen(false)
  const openQuickView = (product: Product) => setQuickViewProduct(product)
  const closeQuickView = () => setQuickViewProduct(null)

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const originalTotal = cart.reduce(
    (sum, item) => sum + item.product.originalPrice * item.quantity,
    0
  )
  const totalSavings = originalTotal - cartTotal

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        isAccountOpen,
        quickViewProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        openCart,
        closeCart,
        openAccount,
        closeAccount,
        openQuickView,
        closeQuickView,
        cartCount,
        cartTotal,
        originalTotal,
        totalSavings,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useShop = () => {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider')
  }
  return context
}
