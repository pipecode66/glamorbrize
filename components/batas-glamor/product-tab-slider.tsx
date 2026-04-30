"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type { CSSProperties } from "react"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductTab {
  value: string
  label: string
}

interface ProductTabSliderProps {
  tabs: ProductTab[]
  activeValue: string
  onValueChange: (value: string) => void
  desktopListClassName?: string
  triggerClassName?: string
  triggerStyle?: CSSProperties
}

export default function ProductTabSlider({
  tabs,
  activeValue,
  onValueChange,
  desktopListClassName,
  triggerClassName = "min-h-[44px] text-xs font-semibold sm:text-sm",
  triggerStyle,
}: ProductTabSliderProps) {
  const activeIndex = Math.max(
    tabs.findIndex((tab) => tab.value === activeValue),
    0,
  )
  const activeTab = tabs[activeIndex] ?? tabs[0]
  const goToPrevious = () => onValueChange(tabs[(activeIndex - 1 + tabs.length) % tabs.length].value)
  const goToNext = () => onValueChange(tabs[(activeIndex + 1) % tabs.length].value)

  return (
    <>
      <div className="mb-6 flex items-center justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={goToPrevious}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
          aria-label="Producto anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <TabsList className="h-auto max-w-[220px] flex-1 bg-transparent p-0">
          <TabsTrigger value={activeTab.value} className={triggerClassName} style={triggerStyle}>
            {activeTab.label}
          </TabsTrigger>
        </TabsList>

        <button
          type="button"
          onClick={goToNext}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
          aria-label="Producto siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {desktopListClassName && (
        <div className="mb-8 hidden justify-center sm:flex">
          <TabsList className={desktopListClassName}>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className={triggerClassName} style={triggerStyle}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      )}
    </>
  )
}
