import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AntifluidoCollection from "@/components/batas-glamor/antifluido-collection"

// Definimos los colores de Batas Glamor
const batasGlamorColors = {
  primary: "#74A4AB",
  secondary: "#3E5860",
  accent: "#B5DEDA",
  accent2: "#C9D4D6",
  accent3: "#DBEDCB",
  darkGray: "#414444",
  lightGray: "#949A9C",
  white: "#FFFFFF",
  black: "#000000",
}

export default function AntifluidoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Banner - Responsive */}
      <section
        className="relative py-6 sm:py-8 md:py-12 lg:py-16"
        style={{ backgroundColor: batasGlamorColors.accent3 + "20" }}
      >
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Imagen responsive */}
            <div className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">
              <Image
                src="/images/design-mode/linea-antifluido.png"
                alt="Colección Antifluido"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>

            {/* Sombra adicional para efecto flotante - solo en desktop */}
            <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-teal-600/10 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-lg sm:blur-xl -z-10 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb - Responsive */}
      <div className="border-b py-2 sm:py-3 md:py-4" style={{ borderColor: batasGlamorColors.lightGray + "30" }}>
        <div className="container mx-auto px-4">
          <div className="flex text-xs sm:text-sm">
            <Link href="/" className="text-muted hover:text-[#74A4AB] transition-colors">
              Inicio
            </Link>
            <span className="mx-1 sm:mx-2 text-muted">/</span>
            <Link href="/batas-glamor" className="text-muted hover:text-[#74A4AB] transition-colors">
              Batas Glamor
            </Link>
            <span className="mx-1 sm:mx-2 text-muted">/</span>
            <span style={{ color: batasGlamorColors.secondary }}>Antifluido</span>
          </div>
        </div>
      </div>

      {/* Colección Antifluido */}
      <AntifluidoCollection colors={batasGlamorColors} />

      {/* Pedidos Empresariales - Responsive */}
      <section
        className="py-8 sm:py-12 md:py-16 lg:py-20"
        style={{ backgroundColor: batasGlamorColors.accent3 + "20" }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8"
            style={{ color: batasGlamorColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Pedidos Empresariales
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 px-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Realizamos pedidos con logo empresarial a partir de 12 unidades. Puedes mezclar entre productos para
              completar tu pedido.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 px-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contáctanos para obtener una cotización personalizada para tu empresa o negocio.
            </p>
            <Button
              size="lg"
              className="text-white w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold"
              style={{
                backgroundColor: batasGlamorColors.primary,
                borderColor: "transparent",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
              }}
              asChild
            >
              <Link
                href="https://wa.me/573156614208?text=Hola,%20quiero%20cotizar%20la%20linea%20de%20batas%20antifluido"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
