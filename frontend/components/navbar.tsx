"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline text-foreground">Diabpro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <button className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-2">
                PRODUCTS
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg overflow-hidden">
                <Link
                  href="/products/bamboo"
                  className="block px-4 py-3 hover:bg-secondary text-foreground transition-colors"
                >
                  Bamboo Socks
                </Link>
                <Link
                  href="/products/cotton"
                  className="block px-4 py-3 hover:bg-secondary text-foreground border-t border-border transition-colors"
                >
                  Cotton Socks
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background animate-slide-down">
            <Link
              href="/products/bamboo"
              className="block px-4 py-3 hover:bg-secondary text-foreground transition-colors"
            >
              Bamboo Socks
            </Link>
            <Link
              href="/products/cotton"
              className="block px-4 py-3 hover:bg-secondary text-foreground border-t border-border transition-colors"
            >
              Cotton Socks
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
