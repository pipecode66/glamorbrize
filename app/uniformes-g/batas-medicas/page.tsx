import Link from "next/link"
import BatasMedicasCategory from "@/components/uniformes-g/batas-medicas-category"

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

export default function BatasMedicasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Banner Placeholder - Responsive */}
      <section
        className="relative py-6 sm:py-8 md:py-12 lg:py-16"
        style={{ backgroundColor: uniformesGColors.light + "10" }}
      >
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Placeholder para el banner de Batas Médicas */}
            <div className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center">
              <div className="max-w-2xl px-4 text-center">
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif" }}
                >
                  Batas Médicas
                </h1>
                <p
                  className="text-sm sm:text-base md:text-lg"
                  style={{ color: uniformesGColors.secondary, fontFamily: "Poppins, sans-serif" }}
                >
                  Profesionalismo y comodidad en cada detalle
                </p>
              </div>
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
            <Link href="/uniformes-g" className="text-muted hover:text-[#697C87] transition-colors">
              Uniformes G
            </Link>
            <span className="mx-1 sm:mx-2 text-muted">/</span>
            <span style={{ color: uniformesGColors.secondary }}>Batas Médicas</span>
          </div>
        </div>
      </div>

      {/* Batas Médicas Category */}
      <BatasMedicasCategory />

      {/* Pedidos Empresariales - Responsive */}
      
    </div>
  )
}
