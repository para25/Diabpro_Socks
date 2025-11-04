"use client"
import Link from "next/link"

import { LazyImage } from "./lazy-image"

interface ProductCardProps {
  name: string
  description: string
  image: string
  slug: string
  features?: string[]
}

export function ProductCard({ name, description, image, slug, features }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div className="group cursor-pointer h-full">
        {/* Product Image Container */}
        <div className="relative overflow-hidden rounded-xl aspect-square mb-6 bg-secondary border border-border shadow-sm group-hover:shadow-lg transition-all duration-300">
          <LazyImage src={image || "/placeholder.svg"} alt={name} className="w-full h-full" />
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>

          {/* Features */}
          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {features.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full border border-border"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-end pt-4 border-t border-border">
            <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
