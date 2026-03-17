export interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
  category: string
  slug?: string
}

const WISHLIST_KEY = "wishlist"

function isBrowser() {
  return typeof window !== "undefined"
}

export function getWishlist(): WishlistItem[] {
  if (!isBrowser()) {
    return []
  }

  try {
    const savedWishlist = window.localStorage.getItem(WISHLIST_KEY)
    return savedWishlist ? (JSON.parse(savedWishlist) as WishlistItem[]) : []
  } catch (error) {
    console.error("Error loading wishlist:", error)
    return []
  }
}

export function saveWishlist(items: WishlistItem[]) {
  if (!isBrowser()) {
    return
  }

  window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(items))
}

export function isWishlistItem(id: string) {
  return getWishlist().some((item) => item.id === id)
}

export function toggleWishlistItem(item: WishlistItem) {
  const currentWishlist = getWishlist()
  const exists = currentWishlist.some((currentItem) => currentItem.id === item.id)

  if (exists) {
    const updatedWishlist = currentWishlist.filter((currentItem) => currentItem.id !== item.id)
    saveWishlist(updatedWishlist)
    return { isFavorite: false, items: updatedWishlist }
  }

  const updatedWishlist = [...currentWishlist, item]
  saveWishlist(updatedWishlist)
  return { isFavorite: true, items: updatedWishlist }
}

export function removeWishlistItem(id: string) {
  const updatedWishlist = getWishlist().filter((item) => item.id !== id)
  saveWishlist(updatedWishlist)
  return updatedWishlist
}
