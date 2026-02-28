"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-white/30 z-50 shadow-[0_4px_30px_-20px_rgba(0,0,0,0.35)]">
      <div className="container-max">
        <div className="flex justify-between items-center h-[4.5rem]">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-cyan-500 to-accent rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline text-foreground tracking-wide">Diabpro</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <button className="text-foreground/80 hover:text-primary transition-colors font-semibold text-sm flex items-center gap-2 tracking-wide">
                PRODUCTS
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-card/95 backdrop-blur-lg border border-white/40 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl overflow-hidden">
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-fade-in">
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
