"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState, useMemo } from "react"

const products = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    image: "/images/prod1.jpg",
    category: "basics",
    color: "white",
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Vintage Black Tee",
    price: 34.99,
    image: "/images/prod2.jpg",
    category: "vintage",
    color: "black",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Graphic Print Tee",
    price: 39.99,
    image: "/images/prod3.jpg",
    category: "graphic",
    color: "blue",
    size: ["XS", "S", "M", "L"],
  },
  {
    id: 4,
    name: "Minimalist Gray Tee",
    price: 32.99,
    image: "/images/prod4.jpg",
    category: "basics",
    color: "gray",
    size: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    name: "Retro Band Tee",
    price: 42.99,
    image: "/images/prod5.jpg",
    category: "vintage",
    color: "black",
    size: ["M", "L", "XL"],
  },
  {
    id: 6,
    name: "Abstract Art Tee",
    price: 37.99,
    image: "/images/prod6.jpg",
    category: "graphic",
    color: "white",
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Premium Cotton Tee",
    price: 45.99,
    image: "/images/prod7.jpg",
    category: "premium",
    color: "navy",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Eco-Friendly Tee",
    price: 38.99,
    image: "/images/prod8.jpg",
    category: "eco",
    color: "green",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
  },
]

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("featured")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const categories = ["basics", "vintage", "graphic", "premium", "eco"]
  const colors = ["white", "black", "blue", "gray", "navy", "green"]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color])
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    }
  }

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color)
      return categoryMatch && colorMatch
    })

    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price)
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price)
      case "name":
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return filtered
    }
  }, [selectedCategories, selectedColors, sortBy])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop All T-Shirts</h1>
        <p className="text-gray-600">Discover our complete collection of premium t-shirts</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sort By</h3>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={category} className="capitalize cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Color</h3>
            <div className="space-y-3">
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={color}
                    checked={selectedColors.includes(color)}
                    onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                  />
                  <Label htmlFor={color} className="capitalize cursor-pointer">
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {(selectedCategories.length > 0 || selectedColors.length > 0) && (
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategories([])
                setSelectedColors([])
              }}
              className="w-full"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredAndSortedProducts.length} of {products.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold mb-4">${product.price}</p>
                    <Link href={`/product/${product.id}`}>
                      <Button className="w-full bg-black hover:bg-gray-800">View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedColors([])
                }}
                className="mt-4"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
