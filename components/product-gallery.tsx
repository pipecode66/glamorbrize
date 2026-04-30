"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Bata Microfibra Blanca",
    price: 85000,
    image: "/images/batamicroblanca.png",
    category: "Batas Glamor",
    type: "microfibra",
  },
  {
    id: 2,
    name: "Bata en seda blanca",
    price: 85000,
    image: "/images/batasedablanca.png",
    category: "Batas Glamor",
    type: "seda",
  },
  {
    id: 3,
    name: "Estraplera Microfibra Blanca",
    price: 50000,
    image: "/images/estramicroblanca.png",
    category: "Batas Glamor",
    type: "microfibra",
  },
  {
    id: 4,
    name: "Bata Antifluidos Negra",
    price: 95000,
    image: "/images/bataantinegra.png",
    category: "Batas Glamor",
    type: "antifluido",
  },
  {
    id: 5,
    name: "Estraplera Antifluidos Negra",
    price: 60000,
    image: "/images/estraantinegra.png",
    category: "Batas Glamor",
    type: "antifluido",
  },
  {
    id: 6,
    name: "Balaca Antifluido",
    price: 20000,
    image: "/images/balaca-antifluido.png",
    category: "Batas Glamor",
    type: "antifluido",
  },
]

export default function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches)
    }

    const updateItemsPerView = () => {
      // Use actual viewport width for items per view calculation
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    checkTouchDevice()
    updateItemsPerView()

    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsPerView
      return nextIndex >= products.length ? 0 : nextIndex
    })
  }, [itemsPerView])

  // Función para retroceder al slide anterior
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return Math.max(0, products.length - itemsPerView)
      }
      return Math.max(0, prev - itemsPerView)
    })
  }, [itemsPerView])

  // Función para iniciar el autoplay automático
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    
    // Inicia el autoplay automáticamente sin controles para el usuario
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 8000) // Cambia cada 8 segundos (antes eran 3)
  }, [nextSlide])

  // Función para pausar el autoplay temporalmente (solo al interactuar)
  const pauseAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }, [])

  // Iniciar autoplay automáticamente al montar
  useEffect(() => {
    startAutoPlay()
    
    // Limpiar intervalo al desmontar
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [startAutoPlay])

  // Reiniciar autoplay cuando cambia currentIndex
  useEffect(() => {
    startAutoPlay()
  }, [currentIndex, startAutoPlay])

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView)
  const totalPages = Math.ceil(products.length / itemsPerView)
  const currentPage = Math.floor(currentIndex / itemsPerView)

  return (
    <div className="relative px-4">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          onMouseEnter={pauseAutoPlay} // Pausar temporalmente al pasar el mouse
          onMouseLeave={startAutoPlay} // Reanudar al salir
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-transparent min-h-[44px] min-w-[44px]"
          disabled={currentIndex === 0}
          aria-label="Productos anteriores"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        <div className="flex gap-2 sm:gap-3 items-center">
          {(() => {
            const maxDotsToShow = 3
            const halfWindow = Math.floor(maxDotsToShow / 2)

            let startPage = Math.max(0, currentPage - halfWindow)
            const endPage = Math.min(totalPages, startPage + maxDotsToShow)

            if (endPage - startPage < maxDotsToShow) {
              startPage = Math.max(0, endPage - maxDotsToShow)
            }

            const visiblePages = Array.from({ length: endPage - startPage }, (_, i) => startPage + i)

            return (
              <>
                {startPage > 0 && <span className="text-gray-400 text-xs">...</span>}
                {visiblePages.map((pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => {
                      setCurrentIndex(pageIndex * itemsPerView)
                      pauseAutoPlay()
                    }}
                    onMouseEnter={pauseAutoPlay}
                    onMouseLeave={startAutoPlay}
                    aria-label={`Ir a página ${pageIndex + 1}`}
                    className={`w-4 h-4 sm:w-4 sm:h-4 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                      currentPage === pageIndex ? "bg-primary scale-110" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${currentPage === pageIndex ? "bg-primary" : "bg-gray-300"}`}
                    />
                  </button>
                ))}
                {endPage < totalPages && <span className="text-gray-400 text-xs">...</span>}
              </>
            )
          })()}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={startAutoPlay}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-transparent min-h-[44px] min-w-[44px]"
          disabled={currentIndex + itemsPerView >= products.length}
          aria-label="Productos siguientes"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>

      {/* Products Grid - con pausa temporal al hacer hover */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        onMouseEnter={pauseAutoPlay} // Pausar al pasar el mouse sobre los productos
        onMouseLeave={startAutoPlay} // Reanudar al salir
      >
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden min-w-0"
          >
            <div className="aspect-square relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <div className="mb-2">
                <span className="text-xs sm:text-sm text-primary font-medium">{product.category}</span>
              </div>
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-primary font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
                ${product.price.toLocaleString("es-CO")}
              </p>
              <Link href={`/batas-glamor/${product.type}`} passHref>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm py-2 min-h-[44px]">
                  Ver detalles
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
