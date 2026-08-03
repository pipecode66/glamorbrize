import { PRIVEE_TONES } from "@/lib/privee-tones"

export default function PriveeTonePalette() {
  return (
    <section
      className="mt-6 rounded-lg bg-white p-4 shadow-lg sm:p-6 md:p-8"
      aria-label="Tonos disponibles de Línea Privée"
    >
      <div className="mb-5 text-center sm:mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#697C87]">Paleta Privée</p>
        <h3 className="mt-2 text-xl font-bold text-[#354358] sm:text-2xl">
          Tonos disponibles
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Elige el tono que mejor represente la identidad de tu equipo. La fotografía del producto es una referencia
          del diseño y puede variar frente al color final.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {PRIVEE_TONES.map((tone) => (
          <article
            key={tone.name}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="aspect-[5/4] w-full" style={{ backgroundColor: tone.color }} aria-hidden="true" />
            <div className="border-t border-gray-100 p-3">
              <p className="text-xs font-bold text-[#354358] sm:text-sm">{tone.name}</p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-gray-500 sm:text-xs">
                {tone.color}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
