"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import type { Category } from "@/lib/db-utils"

interface ProductSearchProps {
  categories: Category[]
  minPrice: number
  maxPrice: number
}

export default function ProductSearch({ categories, minPrice, maxPrice }: ProductSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    searchParams.get("categories") ? searchParams.get("categories")!.split(",").map(Number) : [],
  )
  const [priceRange, setPriceRange] = useState<[number, number]>([
    searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : minPrice,
    searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : maxPrice,
  ])
  const [inStock, setInStock] = useState(searchParams.get("inStock") === "true")
  const [featured, setFeatured] = useState(searchParams.get("featured") === "true")

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (search) params.set("search", search)
    if (selectedCategories.length > 0) params.set("categories", selectedCategories.join(","))
    if (priceRange[0] !== minPrice) params.set("minPrice", priceRange[0].toString())
    if (priceRange[1] !== maxPrice) params.set("maxPrice", priceRange[1].toString())
    if (inStock) params.set("inStock", "true")
    if (featured) params.set("featured", "true")

    router.push(`/products?${params.toString()}`)
  }

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handleReset = () => {
    setSearch("")
    setSelectedCategories([])
    setPriceRange([minPrice, maxPrice])
    setInStock(false)
    setFeatured(false)
    router.push("/products")
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch} type="button">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>

          <div>
            <h3 className="font-medium mb-2">Categorías</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Precio</h3>
            <div className="px-2">
              <Slider
                defaultValue={priceRange}
                min={minPrice}
                max={maxPrice}
                step={1000}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="in-stock" checked={inStock} onCheckedChange={(checked) => setInStock(checked as boolean)} />
              <Label htmlFor="in-stock">Solo productos en stock</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={featured}
                onCheckedChange={(checked) => setFeatured(checked as boolean)}
              />
              <Label htmlFor="featured">Productos destacados</Label>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={handleReset}>
              Restablecer filtros
            </Button>
            <Button onClick={handleSearch}>Aplicar filtros</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
