"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FilterOption {
  id: string
  label: string
  count: number
}

interface CategoryFilterProps {
  title: string
  options: FilterOption[]
}

export default function CategoryFilter({ title, options }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mb-6">
      <button className="flex w-full items-center justify-between font-medium mb-3" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="checkbox"
                id={`${title}-${option.id}`}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor={`${title}-${option.id}`} className="ml-2 text-sm flex-1">
                {option.label}
              </label>
              <span className="text-xs text-muted">({option.count})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
