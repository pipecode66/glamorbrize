import Image from "next/image"
import Link from "next/link"

import KitsEmpresarialesCategory from "@/components/batas-glamor/kits-empresariales-category"

const batasGlamorColors = {
  primary: "#74A4AB",
  secondary: "#3E5860",
  accent: "#B5DEDA",
  lightGray: "#949A9C",
}

export default function KitsEmpresarialesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative py-6 sm:py-8 md:py-12" style={{ backgroundColor: batasGlamorColors.accent + "20" }}>
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-6xl">
            <div className="relative h-[32vh] overflow-hidden rounded-lg shadow-xl sm:h-[38vh] md:h-[44vh] lg:h-[50vh]">
              <Image
                src="/images/kits-empresariales-banner.png"
                alt="Kits Empresariales Batas Glamor"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-b py-2 sm:py-3 md:py-4" style={{ borderColor: batasGlamorColors.lightGray + "30" }}>
        <div className="container mx-auto px-4">
          <div className="flex text-xs sm:text-sm">
            <Link href="/" className="text-muted transition-colors hover:text-[#74A4AB]">
              Inicio
            </Link>
            <span className="mx-1 text-muted sm:mx-2">/</span>
            <Link href="/batas-glamor" className="text-muted transition-colors hover:text-[#74A4AB]">
              Batas Glamor
            </Link>
            <span className="mx-1 text-muted sm:mx-2">/</span>
            <span style={{ color: batasGlamorColors.secondary }}>Kits Empresariales</span>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <KitsEmpresarialesCategory />
        </div>
      </section>
    </div>
  )
}
