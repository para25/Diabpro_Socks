"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
      <div className="group cursor-pointer h-full rounded-2xl border border-white/40 bg-card/80 backdrop-blur-md p-4 md:p-5 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-300">
        <div className="relative overflow-hidden rounded-xl aspect-square mb-6 bg-secondary border border-border/70">
          <LazyImage src={image || "/placeholder.svg"} alt={name} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>

          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {features.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-secondary/70 text-foreground px-3 py-1 rounded-full border border-border/70"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-end pt-4 border-t border-border/70">
            <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
