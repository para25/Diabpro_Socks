"use client"

import { ProductCard } from "./product-card"

const allProducts = [
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

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const related = allProducts.filter((p) => p.slug !== currentSlug)

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">You Might Also Like</h2>
          <p className="text-muted-foreground">Explore our other premium sock collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {related.map((product, idx) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
