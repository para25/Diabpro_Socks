"use client"

import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  longDescription: string
  features: string[]
  specifications: { label: string; value: string }[]
  benefits: string[]
}

export function ProductDetail({ product }: { product: Product }) {
  return (
    <section className="section-padding bg-background pt-32">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="animate-slide-in-left">
            <div className="relative overflow-hidden rounded-xl bg-secondary border border-border aspect-square shadow-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-in-right space-y-8">
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Premium Collection</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-foreground px-4 py-2 rounded-lg border border-border text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications and Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-border">
          {/* Specifications */}
          <div className="animate-slide-up">
            <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
            <div className="space-y-4">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-start pb-4 border-b border-border last:border-0">
                  <span className="font-semibold text-foreground">{spec.label}</span>
                  <span className="text-muted-foreground text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Health Benefits</h2>
            <ul className="space-y-4">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
