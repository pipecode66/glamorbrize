import Image from "next/image"
import Link from "next/link"

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

export default function QuienesSomosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Bar */}
      <div className="bg-secondary text-white py-2 text-center text-xs sm:text-sm px-4">
        Envíos GRATIS en pedidos mayores a $200.000 Aplica solo en Colombia
      </div>

      {/* Breadcrumb */}
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
            <span style={{ color: uniformesGColors.secondary }}>Quiénes Somos</span>
          </div>
        </div>
      </div>

      {/* Descripción de la marca */}
      <section className="py-8 sm:py-10 md:py-14" style={{ backgroundColor: uniformesGColors.light + "20" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center lg:text-left"
                style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Sobre Uniformes G
              </h2>
              <div className="flex justify-center lg:hidden mb-4 sm:mb-6">
                <Image
                  src="/images/uniformes-g-manual-3.png"
                  alt="Descripción de Uniformes G"
                  width={320}
                  height={256}
                  className="rounded-md shadow-md w-full max-w-xs sm:max-w-sm"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4 md:mt-8">
                <div className="flex items-start gap-3">
                  <span
                    style={{ color: uniformesGColors.accent }}
                    className="text-base sm:text-lg md:text-xl mt-1 flex-shrink-0"
                  >
                    •
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-sm sm:text-base md:text-lg"
                      style={{ color: uniformesGColors.accent2, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                    >
                      Exclusividad
                    </h3>
                    <p
                      className="text-muted text-xs sm:text-sm md:text-base"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Cada prenda es única y está diseñada exclusivamente para el cliente, ofreciendo una experiencia de
                      alta calidad en cada producto.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    style={{ color: uniformesGColors.accent }}
                    className="text-base sm:text-lg md:text-xl mt-1 flex-shrink-0"
                  >
                    •
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-sm sm:text-base md:text-lg"
                      style={{ color: uniformesGColors.accent2, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                    >
                      Innovación
                    </h3>
                    <p
                      className="text-muted text-xs sm:text-sm md:text-base"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Constantemente experimentamos con nuevas técnicas y tecnologías para ofrecer un producto único y
                      exclusivo que realce un servicio profesional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    style={{ color: uniformesGColors.accent }}
                    className="text-base sm:text-lg md:text-xl mt-1 flex-shrink-0"
                  >
                    •
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-sm sm:text-base md:text-lg"
                      style={{ color: uniformesGColors.accent2, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                    >
                      Calidad
                    </h3>
                    <p
                      className="text-muted text-xs sm:text-sm md:text-base"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Nuestros productos están fabricados con materiales de la más alta calidad y técnicas de confección
                      avanzadas, con el objetivo de que destaquen por su durabilidad y diseño.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="hidden lg:block">
                <Image
                  src="/images/uniformes-g-manual-3.png"
                  alt="Descripción de Uniformes G"
                  width={400}
                  height={320}
                  className="rounded-md shadow-md"
                />
              </div>
              <Image
                src="/images/uniformes-g-manual-5.png"
                alt="Valores de Uniformes G"
                width={320}
                height={256}
                className="rounded-md shadow-md w-full max-w-xs sm:max-w-sm lg:max-w-none lg:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Proceso y Experiencia */}
      <section className="py-8 sm:py-10 md:py-14" style={{ backgroundColor: uniformesGColors.primary }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <Image
                src="/images/uniformes-g-manual-4.png"
                alt="Proceso de fabricación de Uniformes G"
                width={320}
                height={256}
                className="rounded-md shadow-md w-full max-w-xs sm:max-w-sm lg:max-w-none"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center lg:text-left"
                style={{ color: uniformesGColors.light, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Nuestro Proceso
              </h2>
              <p
                className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base text-center lg:text-left"
                style={{ color: uniformesGColors.light, fontFamily: "Poppins, sans-serif" }}
              >
                Cada uniforme pasa por un riguroso proceso de diseño y confección. Desde la selección de materiales
                hasta los acabados finales, nos aseguramos de que cada detalle cumpla con nuestros estándares de
                excelencia.
              </p>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center lg:text-left"
                style={{ color: uniformesGColors.light, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Experiencia
              </h2>
              <p
                className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base text-center lg:text-left"
                style={{ color: uniformesGColors.light, fontFamily: "Poppins, sans-serif" }}
              >
                Con años de experiencia en el sector textil y de uniformes profesionales, hemos desarrollado técnicas
                especializadas que nos permiten crear prendas que combinan funcionalidad, comodidad y estilo
                profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pedidos Empresariales */}
      

      {/* Features */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="p-3 sm:p-4">
              <h3
                className="font-medium text-base sm:text-lg mb-2"
                style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Exclusividad
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base"
                style={{ color: uniformesGColors.secondary, fontFamily: "Poppins, sans-serif" }}
              >
                Cada prenda es única y diseñada exclusivamente para ti
              </p>
            </div>
            <div className="p-3 sm:p-4">
              <h3
                className="font-medium text-base sm:text-lg mb-2"
                style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Innovación
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base"
                style={{ color: uniformesGColors.secondary, fontFamily: "Poppins, sans-serif" }}
              >
                Nuevas técnicas y tecnologías para un producto único
              </p>
            </div>
            <div className="p-3 sm:p-4">
              <h3
                className="font-medium text-base sm:text-lg mb-2"
                style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Calidad
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base"
                style={{ color: uniformesGColors.secondary, fontFamily: "Poppins, sans-serif" }}
              >
                Materiales premium y acabados perfectos en cada detalle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
