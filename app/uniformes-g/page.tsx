import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PriveeCategory from "@/components/uniformes-g/privee-category"

const uniformesGColors = {
  primary: "#354358",
  secondary: "#697C87",
  accent: "#A78786",
  accent2: "#7E6863",
  accent3: "#98837A",
  light: "#CFC2B6",
  white: "#FFFFFF",
  black: "#000000",
}

export default function UniformesGPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section
        className="relative py-6 sm:py-8 md:py-12 lg:py-16"
        style={{ backgroundColor: uniformesGColors.light + "10" }}
      >
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-6xl">
            <div className="relative h-[35vh] overflow-hidden rounded-lg shadow-lg sm:h-[40vh] sm:rounded-xl sm:shadow-xl md:h-[45vh] lg:h-[50vh] lg:rounded-2xl lg:shadow-2xl xl:h-[55vh]">
              <Image
                src="/images/design-mode/banner-coleccion-privee-2.png"
                alt="Nueva Coleccion Privee"
                fill
                className="object-cover object-[center_top_5%]"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <div className="absolute -inset-2 -z-10 hidden rounded-xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-lg sm:-inset-3 sm:block sm:rounded-2xl sm:blur-xl lg:-inset-4 lg:rounded-3xl"></div>
          </div>
        </div>
      </section>

      <div className="border-b py-2 sm:py-3 md:py-4" style={{ borderColor: uniformesGColors.light + "30" }}>
        <div className="container mx-auto px-4">
          <div className="flex text-xs sm:text-sm">
            <Link href="/" className="text-muted transition-colors hover:text-[#697C87]">
              Inicio
            </Link>
            <span className="mx-1 text-muted sm:mx-2">/</span>
            <span style={{ color: uniformesGColors.secondary }}>Uniformes G</span>
          </div>
        </div>
      </div>

      <PriveeCategory colors={uniformesGColors} />

      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: uniformesGColors.light + "20" }}>
        <div className="container mx-auto px-4">
          <h2
            className="mb-4 text-center text-xl font-bold sm:mb-6 sm:text-2xl md:mb-8 md:text-3xl lg:text-4xl"
            style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Pedidos Empresariales
          </h2>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="mb-3 px-2 text-sm sm:mb-4 sm:text-base md:mb-6 md:text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Realizamos pedidos con logo empresarial a partir de 12 unidades. Puedes mezclar entre productos para
              completar tu pedido.
            </p>
            <p
              className="mb-4 px-2 text-sm sm:mb-6 sm:text-base md:mb-8 md:text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contactanos para obtener una cotizacion personalizada para tu empresa o negocio.
            </p>
            <Button
              size="lg"
              className="w-full px-4 py-2 text-sm font-semibold text-white sm:w-auto sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
              style={{
                backgroundColor: uniformesGColors.primary,
                borderColor: "transparent",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
              }}
              asChild
            >
              <Link
                href="https://wa.me/573156614208?text=Hola,%20quiero%20una%20cotizacion%20empresarial%20de%20Uniformes%20G"
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
