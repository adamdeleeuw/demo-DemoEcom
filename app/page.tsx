"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Fresh designs for the season",
    image: "/images/slider1.jpg",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Limited Edition Prints",
    subtitle: "Exclusive designs you won't find anywhere else",
    image: "/images/slider2.jpg",
    cta: "Explore",
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "100% organic cotton, sustainably made",
    image: "/images/slider3.jpg",
    cta: "Learn More",
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    image: "/images/feat1.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Vintage Black Tee",
    price: 34.99,
    image: "/images/feat2.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Graphic Print Tee",
    price: 39.99,
    image: "/images/feat3.jpg",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Minimalist Gray Tee",
    price: 32.99,
    image: "/images/feat4.jpg",
    badge: "Popular",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-3"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our most popular t-shirts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white px-3 py-1 text-sm font-medium rounded">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold">
                      ${product.price}
                    </p>
                    <Link href={`/product/${product.id}`}>
                      <Button className="w-full mt-4 bg-black hover:bg-gray-800">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the TrendTees Community
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get exclusive access to new releases and special offers
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-3"
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  )
}
