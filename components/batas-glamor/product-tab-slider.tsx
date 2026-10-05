"use client"

import { useRef } from "react"
import type { CSSProperties, PointerEventHandler } from "react"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductTab {
  value: string
  label: string
}

interface ProductTabSliderProps {
  tabs: ProductTab[]
  activeValue: string
  desktopListClassName?: string
  triggerClassName?: string
  triggerStyle?: CSSProperties
}

interface SwipeableTabsOptions {
  tabs: ProductTab[]
  activeValue: string
  onValueChange: (value: string) => void
}

export function useSwipeableTabs({ tabs, activeValue, onValueChange }: SwipeableTabsOptions) {
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  const onPointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.pointerType !== "touch") return
    swipeStart.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerUp: PointerEventHandler<HTMLDivElement> = (event) => {
    const start = swipeStart.current
    swipeStart.current = null

    if (!start || event.pointerType !== "touch" || tabs.length < 2) return

    const distanceX = event.clientX - start.x
    const distanceY = event.clientY - start.y
    const isHorizontalSwipe = Math.abs(distanceX) >= 50 && Math.abs(distanceX) > Math.abs(distanceY) * 1.2

    if (!isHorizontalSwipe) return

    const activeIndex = Math.max(
      tabs.findIndex((tab) => tab.value === activeValue),
      0,
    )
    const direction = distanceX < 0 ? 1 : -1
    const nextIndex = (activeIndex + direction + tabs.length) % tabs.length
    onValueChange(tabs[nextIndex].value)
  }

  return { onPointerDown, onPointerUp }
}

export default function ProductTabSlider({
  tabs,
  activeValue,
  desktopListClassName,
  triggerClassName = "min-h-[44px] text-xs font-semibold sm:text-sm",
  triggerStyle,
}: ProductTabSliderProps) {
  const activeIndex = Math.max(
    tabs.findIndex((tab) => tab.value === activeValue),
    0,
  )
  const activeTab = tabs[activeIndex] ?? tabs[0]

  return (
    <>
      <div className="mb-6 space-y-3 sm:hidden" aria-label="Navegación de productos por deslizamiento">
        <div
          className="mx-auto max-w-[260px] rounded-md bg-[#74A4AB] px-4 py-3 text-center text-white shadow-sm"
          aria-live="polite"
        >
          <span className={triggerClassName} style={{ ...triggerStyle, color: "#FFFFFF" }}>
            {activeTab.label}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2" aria-hidden="true">
          {tabs.map((tab, index) => (
            <span
              key={tab.value}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-[#74A4AB]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground">Desliza la ficha para cambiar de producto</p>
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
