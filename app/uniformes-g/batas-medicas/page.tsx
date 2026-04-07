import Image from "next/image"
import Link from "next/link"
import BatasMedicasCategory from "@/components/uniformes-g/batas-medicas-category"

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

export default function BatasMedicasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section
        className="relative py-6 sm:py-8 md:py-12 lg:py-16"
        style={{ backgroundColor: uniformesGColors.light + "10" }}
      >
        <h1 className="sr-only">{"Batas M\u00e9dicas"}</h1>
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-6xl">
            <div className="relative h-[35vh] overflow-hidden rounded-lg shadow-lg sm:h-[40vh] sm:rounded-xl sm:shadow-xl md:h-[45vh] lg:h-[50vh] lg:rounded-2xl lg:shadow-2xl xl:h-[55vh]">
              <Image
                src="/images/uniformes-g-batas-medicas-banner.png"
                alt={"Banner de batas m\u00e9dicas"}
                fill
                className="object-cover object-center"
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
            <Link href="/uniformes-g" className="text-muted transition-colors hover:text-[#697C87]">
              Uniformes G
            </Link>
            <span className="mx-1 text-muted sm:mx-2">/</span>
            <span style={{ color: uniformesGColors.secondary }}>{"Batas M\u00e9dicas"}</span>
          </div>
        </div>
      </div>

      <BatasMedicasCategory />
    </div>
  )
}
