import Link from "next/link"
import { PRIVEE_TONES } from "@/lib/privee-tones"

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

export default function TonosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f6f3]">
      <section className="py-10 sm:py-14 md:py-16" style={{ backgroundColor: uniformesGColors.light + "18" }}>
        <div className="container mx-auto px-4 text-center">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.35em]"
            style={{ color: uniformesGColors.secondary, fontFamily: "Poppins, sans-serif" }}
          >
            Uniformes G
          </p>
          <h1
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            TONOS
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Catálogo de tonos disponibles para crear combinaciones sobrias, elegantes y profesionales en la línea
            Privée.
          </p>
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
            <span style={{ color: uniformesGColors.secondary }}>TONOS</span>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {PRIVEE_TONES.map((tone) => (
              <article
                key={tone.name}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/5] w-full" style={{ backgroundColor: tone.color }} />
                <div className="space-y-1 p-4">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {tone.name}
                  </p>
                  <p
                    className="text-lg font-bold uppercase"
                    style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                  >
                    {tone.color}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
