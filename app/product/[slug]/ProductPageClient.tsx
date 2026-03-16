"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ChevronDown, Minus, Plus, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductList from "@/components/product-list"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/context/auth-context"
import { ReviewList } from "@/components/reviews/review-list"
import { ReviewForm } from "@/components/reviews/review-form"
import { fetchProductBySlug, checkFavorite, toggleFavorite } from "@/lib/api-client"

interface ProductPageClientProps {
  params: {
    slug: string
  }
}

export default function ProductPageClient({ params }: ProductPageClientProps) {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const { addToCart } = useCart()
  const { user } = useAuth()

  const [product, setProduct] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedVariant, setSelectedVariant] = useState<any | null>(null)
  const [bordadoOption, setBordadoOption] = useState("delantero")
  const [isFav, setIsFav] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)

  // Cargar el producto desde la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await fetchProductBySlug(params.slug)
        if (productData) {
          setProduct(productData)

          // Establecer valores predeterminados
          if (productData.variants && productData.variants.length > 0) {
            setSelectedVariant(productData.variants[0])
            if (productData.variants[0].size) setSelectedSize(productData.variants[0].size)
            if (productData.variants[0].color) setSelectedColor(productData.variants[0].color)
          }
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.slug])

  // Verificar si el producto está en favoritos
  useEffect(() => {
    const checkIsFavorite = async () => {
      if (product && user) {
        const result = await checkFavorite(product.id)
        setIsFav(result)
      }
    }

    checkIsFavorite()
  }, [product, user])

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity(quantity + 1)
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Calcular precio según la opción de bordado
  const calculatePrice = () => {
    if (!product) return 0

    const basePrice = selectedVariant?.price || product.price

    // Aplicar precio especial para bordado en espalda (5% adicional)
    if (bordadoOption === "espalda") {
      return basePrice * 1.05
    }

    return basePrice
  }

  const finalPrice = calculatePrice()

  // Obtener colores y tallas disponibles
  const getAvailableColors = () => {
    if (!product) return []
    const colors = product.variants
      .map((variant: any) => variant.color)
      .filter(
        (color: string | null, index: number, self: (string | null)[]) => color && self.indexOf(color) === index,
      ) as string[]
    return colors
  }

  const getAvailableSizes = () => {
    if (!product) return []
    const sizes = product.variants
      .map((variant: any) => variant.size)
      .filter(
        (size: string | null, index: number, self: (string | null)[]) => size && self.indexOf(size) === index,
      ) as string[]
    return sizes
  }

  // Actualizar la variante seleccionada cuando cambia el color o la talla
  useEffect(() => {
    if (!product) return

    const variant = product.variants.find(
      (v: any) => (!selectedColor || v.color === selectedColor) && (!selectedSize || v.size === selectedSize),
    )

    if (variant) {
      setSelectedVariant(variant)
    }
  }, [selectedColor, selectedSize, product])

  // Manejar la adición al carrito
  const handleAddToCart = () => {
    if (!product || !selectedVariant) return

    addToCart({
      id: selectedVariant.id.toString(),
      product_id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.images.length > 0 ? product.images[0].url : "/placeholder.svg",
      quantity,
      variant: `${selectedColor ? selectedColor + " / " : ""}${selectedSize || ""}`,
      bordadoOption,
    })

    toast({
      title: "Producto añadido al carrito",
      description: `${quantity} x ${product.name} (${selectedColor ? selectedColor + " / " : ""}${selectedSize || ""})`,
    })
  }

  // Manejar favoritos
  const handleToggleFavorite = async () => {
    if (!product || !user) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para guardar productos en favoritos",
        variant: "destructive",
      })
      return
    }

    try {
      const result = await toggleFavorite(product.id)
      if (result.success) {
        setIsFav(result.isFavorite)
        toast({
          title: result.isFavorite ? "Añadido a favoritos" : "Eliminado de favoritos",
          description: result.isFavorite
            ? `${product.name} ha sido añadido a tus favoritos`
            : `${product.name} ha sido eliminado de tus favoritos`,
        })
      }
    } catch (error) {
      console.error("Error toggling favorite:", error)
      toast({
        title: "Error",
        description: "Ha ocurrido un error al actualizar tus favoritos",
        variant: "destructive",
      })
    }
  }

  // Características del producto (ejemplo)
  const features = [
    "Material de alta calidad",
    "Diseño exclusivo",
    "Personalizable con bordado",
    "Lavable a máquina",
    "Secado rápido",
  ]

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="container py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Cargando producto...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-medium mb-4">Producto no encontrado</h2>
          <p className="mb-6">Lo sentimos, el producto que buscas no existe o ha sido eliminado.</p>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Bar */}
      <div className="bg-secondary text-white py-2 text-center text-sm">
        Envíos GRATIS en pedidos superiores a $200.000 *Aplica solo en Colombia
      </div>

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="border-b py-4">
        <div className="container">
          <div className="flex text-sm">
            <Link href="/" className="text-muted hover:text-primary">
              Inicio
            </Link>
            <span className="mx-2 text-muted">/</span>
            <Link
              href={product.category ? `/category/${product.category.slug}` : "/products"}
              className="text-muted hover:text-primary"
            >
              {product.category ? product.category.name : "Productos"}
            </Link>
            <span className="mx-2 text-muted">/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-sm">
                <Image
                  src={product.images[selectedImage]?.url || "/placeholder.svg?height=800&width=600&text=Sin+Imagen"}
                  alt={product.images[selectedImage]?.alt_text || product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image: any, index: number) => (
                  <button
                    key={index}
                    className={`aspect-square relative overflow-hidden rounded-sm ${
                      selectedImage === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image.url || "/placeholder.svg?height=200&width=200&text=Sin+Imagen"}
                      alt={image.alt_text || `${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                <p className="text-2xl font-medium text-primary">${finalPrice.toLocaleString("es-CO")}</p>
                {product.compare_at_price && (
                  <p className="text-lg text-muted line-through">${product.compare_at_price.toLocaleString("es-CO")}</p>
                )}
              </div>

              <div className="mb-6">
                <p className="text-muted">{product.description}</p>
              </div>

              {/* Size Selection */}
              {getAvailableSizes().length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Talla</span>
                    <button className="text-sm text-primary flex items-center">
                      Guía de tallas
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getAvailableSizes().map((size) => (
                      <button
                        key={size}
                        className={`h-10 min-w-10 px-3 rounded-sm border flex items-center justify-center text-sm hover:border-primary ${
                          selectedSize === size ? "border-primary bg-primary/10" : "border-input"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {getAvailableColors().length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Color</span>
                    <span className="text-sm text-muted">{selectedColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getAvailableColors().map((color) => (
                      <button
                        key={color}
                        className={`h-8 w-8 rounded-full border flex items-center justify-center hover:border-primary ${
                          selectedColor === color ? "ring-2 ring-primary ring-offset-2" : "border-input"
                        }`}
                        title={color}
                        onClick={() => setSelectedColor(color)}
                      >
                        <span
                          className="h-6 w-6 rounded-full"
                          style={{
                            backgroundColor:
                              color.toLowerCase() === "blanco"
                                ? "#ffffff"
                                : color.toLowerCase() === "negro"
                                  ? "#000000"
                                  : color.toLowerCase() === "gris"
                                    ? "#808080"
                                    : color.toLowerCase() === "azul"
                                      ? "#74A4AB"
                                      : color.toLowerCase() === "beige"
                                        ? "#F5F5DC"
                                        : "#FFB6C1",
                          }}
                        ></span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bordado Options */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Opción de Bordado</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-4 py-2 rounded-sm border text-sm ${
                      bordadoOption === "delantero" ? "border-primary bg-primary/10" : "border-input"
                    }`}
                    onClick={() => setBordadoOption("delantero")}
                  >
                    Bordado Delantero (${finalPrice.toLocaleString("es-CO")})
                  </button>
                  <button
                    className={`px-4 py-2 rounded-sm border text-sm ${
                      bordadoOption === "espalda" ? "border-primary bg-primary/10" : "border-input"
                    }`}
                    onClick={() => setBordadoOption("espalda")}
                  >
                    Bordado Espalda (${(finalPrice * 1.05).toLocaleString("es-CO")})
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <span className="font-medium block mb-2">Cantidad</span>
                <div className="flex items-center border border-input rounded-sm w-32">
                  <button
                    className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground"
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="w-12 h-10 text-center border-none focus:outline-none focus:ring-0"
                    readOnly
                  />
                  <button
                    className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90 text-white"
                  onClick={handleAddToCart}
                  disabled={!selectedVariant || selectedVariant.inventory_quantity < quantity}
                >
                  {selectedVariant && selectedVariant.inventory_quantity >= quantity
                    ? "Añadir al Carrito"
                    : "Sin stock disponible"}
                </Button>
                <Button variant="outline" size="icon" onClick={handleToggleFavorite}>
                  <Heart className={`h-5 w-5 ${isFav ? "fill-current text-red-500" : ""}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <h3 className="font-medium mb-4">Características</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personalization */}
              <div className="border-t border-b py-6 my-6">
                <h3 className="font-medium mb-4">Pedidos Empresariales</h3>
                <p className="text-muted mb-4">
                  Pedidos con logo empresarial a partir de 12 unidades. Puedes mezclar entre productos.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Solicitar Cotización
                </Button>
              </div>

              {/* Shipping */}
              <div className="flex items-center gap-2 text-sm text-muted">
                <span>Envío gratis en pedidos superiores a $200.000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-8 border-t">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Reseñas</h2>
          {showReviewForm ? (
            <ReviewForm
              productId={product.id}
              onSuccess={() => {
                setShowReviewForm(false)
                // Recargar las reseñas
              }}
              onCancel={() => setShowReviewForm(false)}
            />
          ) : (
            <ReviewList productId={product.id} onAddReview={() => setShowReviewForm(true)} />
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-accent-2/20">
        <div className="container">
          <h2 className="text-2xl font-medium mb-8">También te puede interesar</h2>
          <ProductList categorySlug={product.category?.slug} limit={4} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
