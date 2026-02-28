import Link from "next/link"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,oklch(0.95_0.06_210)_0%,transparent_45%),radial-gradient(circle_at_bottom_right,oklch(0.9_0.07_30)_0%,transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,oklch(0.985_0.01_220),oklch(1_0_0))]" />

      <div className="container-max text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4" />
          Comfort-first diabetic care essentials
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance mb-6 animate-slide-up">
          Walk in <span className="text-gradient">Elegant Comfort</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in">
          Discover premium diabetic socks crafted with breathable fibers, gentle support, and seamless construction for
          all-day softness.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
          <Link href="#products" className="btn-primary">
            Explore Collection
          </Link>
          <Link href="/products/bamboo" className="btn-secondary">
            Shop Bamboo Socks
          </Link>
        </div>
      </div>
    </section>
  )
}
