"use client"

import Image from "next/image"

const designHighlights = [
  {
    src: "/images/antifluido/20.png",
    alt: "Diseño personalizado de bata 1",
    label: "Diseño exclusivo",
  },
  {
    src: "/images/antifluido/21.png",
    alt: "Diseño personalizado de bata 2",
    label: "Personalización única",
  },
  {
    src: "/images/antifluido/22.png",
    alt: "Diseño personalizado de bata 3",
    label: "Creación original",
  },
]

export default function CustomDesignShowcase() {
  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-10 sm:grid-cols-2 sm:gap-8 md:mb-12 lg:grid-cols-3">
          {designHighlights.map((highlight) => (
            <div key={highlight.label} className="text-center">
              <div className="relative mx-auto mb-3 aspect-square max-w-[250px] sm:mb-4 sm:max-w-[280px] md:max-w-[320px]">
                <Image
                  src={highlight.src}
                  alt={highlight.alt}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, 320px"
                />
              </div>
              <span
                className="text-sm font-semibold text-gray-700 sm:text-base"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                {highlight.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p
            className="mx-auto max-w-2xl px-4 text-lg font-semibold italic text-gray-800 sm:text-xl md:text-2xl"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            "Así quedan tus diseños personalizados de nuestras batas, ¿qué esperas para tener el tuyo?"
          </p>
        </div>
      </div>
    </div>
  )
}
