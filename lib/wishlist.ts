export interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export function addToWishlist(item: WishlistItem): void {
  if (typeof window === "undefined") return

  const wishlist = getWishlist()
  const exists = wishlist.some((w) => w.id === item.id)

  if (!exists) {
    wishlist.push(item)
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }
}

export function removeFromWishlist(id: string): void {
  if (typeof window === "undefined") return

  const wishlist = getWishlist()
  const updated = wishlist.filter((item) => item.id !== id)
  localStorage.setItem("wishlist", JSON.stringify(updated))
}

export function getWishlist(): WishlistItem[] {
  if (typeof window === "undefined") return []

  const saved = localStorage.getItem("wishlist")
  return saved ? JSON.parse(saved) : []
}

export function isInWishlist(id: string): boolean {
  const wishlist = getWishlist()
  return wishlist.some((item) => item.id === id)
}

export function toggleWishlist(item: WishlistItem): boolean {
  const inWishlist = isInWishlist(item.id)

  if (inWishlist) {
    removeFromWishlist(item.id)
    return false
  } else {
    addToWishlist(item)
    return true
  }
}
