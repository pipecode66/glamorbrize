"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingProps {
  value: number
  onChange: (value: number) => void
  readOnly?: boolean
  className?: string
}

export function Rating({ value, onChange, readOnly = false, className }: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    if (!readOnly) {
      setHoverValue(index)
    }
  }

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(null)
    }
  }

  const handleClick = (index: number) => {
    if (!readOnly) {
      onChange(index)
    }
  }

  return (
    <div className={cn("flex", className)}>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          className={cn(
            "w-6 h-6 cursor-pointer transition-colors",
            {
              "text-yellow-400 fill-yellow-400": index <= (hoverValue || value),
              "text-gray-300": index > (hoverValue || value),
              "cursor-default": readOnly,
            },
            className,
          )}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}
