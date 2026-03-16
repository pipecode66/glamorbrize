import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PriveeCategory from "@/components/uniformes-g/privee-category"

// Definimos los colores de Uniformes G basados en la paleta oficial del manual de marca
const uniformesGColors = {
  primary: "#354358", // Azul marino
  secondary: "#697C87", // Gris azulado
  accent: "#A78786", // Rosa
  accent2: "#7E6863", // Marrón
  accent3: "#98837A", // Beige oscuro
  light: "#CFC2B6", // Beige claro
  white: "#FFFFFF",
  black: "#000000",
}

export default function UniformesGPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Banner - Responsive */}
      <section
        className="relative py-6 sm:py-8 md:py-12 lg:py-16"
        style={{ backgroundColor: uniformesGColors.light + "10" }}
      >
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Imagen responsive */}
            <div className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">
              <Image
                src="/images/design-mode/BANNER%20COLECCI%C3%93N%20PRIVE%C3%89%202.png"
                alt="Nueva Colección Priveé"
                fill
                className="object-cover object-[center_top_5%]"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>

            {/* Sombra adicional para efecto flotante - solo en desktop */}
            <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-lg sm:blur-xl -z-10 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb - Responsive */}
      <div className="border-b py-2 sm:py-3 md:py-4" style={{ borderColor: uniformesGColors.light + "30" }}>
        <div className="container mx-auto px-4">
          <div className="flex text-xs sm:text-sm">
            <Link href="/" className="text-muted hover:text-[#697C87] transition-colors">
              Inicio
            </Link>
            <span className="mx-1 sm:mx-2 text-muted">/</span>
            <span style={{ color: uniformesGColors.secondary }}>Uniformes G</span>
          </div>
        </div>
      </div>

      {/* Línea Priveé Category */}
      <PriveeCategory colors={uniformesGColors} />

      {/* Pedidos Empresariales - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: uniformesGColors.light + "20" }}>
        <div className="container mx-auto px-4">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8"
            style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Pedidos Empresariales
          </h2>
          <div className="max-w-3xl mx-auto text-center">
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
                backgroundColor: uniformesGColors.primary,
                borderColor: "transparent",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
              }}
            >
              Solicitar Cotización Empresarial
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
