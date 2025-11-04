import { Navbar } from "@/components/navbar"
import { ProductsSection } from "@/components/products-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductsSection />
      <Footer />
    </main>
  )
}
