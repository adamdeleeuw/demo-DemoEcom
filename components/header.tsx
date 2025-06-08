"use client"

import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

export default function Header() {
  const { state } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            DemoEcom
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-black transition-colors">
              Shop
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-black transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-4 py-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
