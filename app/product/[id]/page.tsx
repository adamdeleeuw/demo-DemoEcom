"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

// Mock product data
const productData = {
  1: {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    description:
      "Our signature classic white t-shirt made from 100% organic cotton. Perfect for everyday wear with a comfortable fit that gets softer with every wash.",
    images: [
      "/images/prod1.jpg",
      "/images/prod1.jpg",
      "/images/prod1.jpg",
      "/images/prod1.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    rating: 4.8,
    reviews: 124,
    features: ["100% Organic Cotton", "Pre-shrunk", "Machine Washable", "Ethically Made"],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { dispatch } = useCart()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)

  // Get product data (in real app, this would be fetched based on ID)
  const product = productData[1] // Using first product as example

  if (!product) {
    return <div>Product not found</div>
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color")
      return
    }

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity,
      },
    })

    router.push("/cart")
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Carousel */}
        {/* Image Carousel - Same image repeated for demo purposes */}
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={product.images[currentImageIndex] || "/images/prod1.jpg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-96 lg:h-[600px] object-cover rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Thumbnail Images */}
          {/* Thumbnail Images - In production, these would be different angles */}
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${index === currentImageIndex ? "border-black" : "border-gray-200"
                  }`}
              >
                <Image
                  src={image || "/images/prod1.jpg"}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-3xl font-bold">${product.price}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Size Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Color</label>
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                {product.colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Add to Cart Button */}
          <div className="flex space-x-4">
            <Button onClick={handleAddToCart} className="flex-1 bg-black hover:bg-gray-800 text-lg py-3" size="lg">
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="px-4">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Features */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      ✓
                    </Badge>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
