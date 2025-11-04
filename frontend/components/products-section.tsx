"use client"

import { ProductCard } from "./product-card"
import { ScrollReveal } from "./scroll-reveal"

const products = [
  {
    id: "1",
    name: "Diabpro Bamboo Socks",
    description:
      "Ultra-soft bamboo fiber socks with moisture-wicking properties and superior comfort for diabetic feet.",
    price: 24.99,
    image: "/bamboo-diabetic-socks.jpeg",
    slug: "bamboo",
    features: ["Moisture-wicking", "Antibacterial", "Soft & Breathable"],
  },
  {
    id: "2",
    name: "Diabpro Cotton Socks",
    description: "Premium cotton blend socks designed for breathability and gentle support throughout the day.",
    price: 19.99,
    image: "/cotton-diabetic-socks.jpg",
    slug: "cotton",
    features: ["Breathable", "Durable", "Comfortable Fit"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-primary font-semibold text-lg tracking-widest uppercase mb-4">Our Collection</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Premium Diabetic Socks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Carefully crafted socks designed specifically for diabetic foot care, comfort, and health. Each pair is
            engineered with premium materials and attention to detail.
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 150} animation="scale-in">
              <ProductCard {...product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
