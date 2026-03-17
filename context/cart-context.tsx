"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type CartItem = {
  id: number | string
  name: string
  price: number
  quantity: number
  image?: string
  slug?: string
  size?: string
  color?: string
  category?: string
  variant?: string
  bordadoOption?: string
  product_id?: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
  removeItem: (id: number | string) => void
  updateQuantity: (id: number | string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (!savedCart) {
      return
    }

    try {
      setItems(JSON.parse(savedCart))
    } catch (error) {
      console.error("Error loading cart:", error)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addItem = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((currentItem) => {
        return (
          currentItem.id === item.id &&
          currentItem.size === item.size &&
          currentItem.color === item.color &&
          currentItem.variant === item.variant
        )
      })

      if (existingItem) {
        return prevItems.map((currentItem) =>
          currentItem.id === item.id &&
          currentItem.size === item.size &&
          currentItem.color === item.color &&
          currentItem.variant === item.variant
            ? { ...currentItem, quantity: currentItem.quantity + (item.quantity || 1) }
            : currentItem,
        )
      }

      return [...prevItems, { ...item, quantity: item.quantity || 1 }]
    })
  }

  const removeItem = (id: number | string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number | string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = {
    items,
    addItem,
    addToCart: addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
