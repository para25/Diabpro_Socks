"use client"

import { ProductCard } from "./product-card"
import { ScrollReveal } from "./scroll-reveal"

const products = [
  {
    id: "1",
    name: "Diabpro Bamboo Socks",
    description:
      "Ultra-soft bamboo fiber socks with moisture-wicking properties and superior comfort for diabetic feet.",
    image: "/bamboo-diabetic-socks.jpeg",
    slug: "bamboo",
    features: ["Moisture-wicking", "Antibacterial", "Soft & Breathable"],
  },
  {
    id: "2",
    name: "Diabpro Cotton Socks",
    description: "Premium cotton blend socks designed for breathability and gentle support throughout the day.",
    image: "/cotton-diabetic-socks.jpg",
    slug: "cotton",
    features: ["Breathable", "Durable", "Comfortable Fit"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-10 right-0 w-[26rem] h-[26rem] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-12 left-0 w-[24rem] h-[24rem] bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container-max">
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <p className="text-primary font-semibold text-sm md:text-base tracking-[0.3em] uppercase mb-4">Our Collection</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Premium Diabetic Socks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Carefully crafted socks designed specifically for diabetic foot care, comfort, and health. Each pair is
            engineered with premium materials and attention to detail.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
