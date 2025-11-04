import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"

const products: Record<
  string,
  {
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
> = {
  bamboo: {
    id: "1",
    name: "Diabpro Bamboo Socks",
    price: 24.99,
    image: "/bamboo-diabetic-socks.jpeg",
    description:
      "Ultra-soft bamboo fiber socks with moisture-wicking properties and superior comfort for diabetic feet.",
    longDescription:
      "Experience the ultimate in comfort with our premium Diabpro Bamboo Socks. Crafted from sustainable bamboo fibers, these socks offer exceptional softness and natural moisture-wicking properties. Perfect for diabetic feet, they provide gentle support and breathability throughout the day.",
    features: ["Moisture-wicking", "Antibacterial", "Soft & Breathable", "Sustainable Material"],
    specifications: [
      { label: "Material", value: "70% Bamboo, 25% Polyester, 5% Spandex" },
      { label: "Sizes", value: "S, M, L, XL" },
      { label: "Care", value: "Machine wash cold, tumble dry low" },
      { label: "Weight", value: "Lightweight" },
    ],
    benefits: [
      "Naturally antibacterial properties reduce odor and infection risk",
      "Superior moisture-wicking keeps feet dry and comfortable",
      "Hypoallergenic and gentle on sensitive diabetic skin",
      "Sustainable and eco-friendly material",
    ],
  },
  cotton: {
    id: "2",
    name: "Diabpro Cotton Socks",
    price: 19.99,
    image: "/cotton-diabetic-socks.jpg",
    description: "Premium cotton blend socks designed for breathability and gentle support throughout the day.",
    longDescription:
      "Our Diabpro Cotton Socks combine premium quality with diabetic-friendly design. Made from a carefully selected cotton blend, these socks provide excellent breathability and durability. The seamless toe design ensures maximum comfort for sensitive feet.",
    features: ["Breathable", "Durable", "Comfortable Fit", "Seamless Toe"],
    specifications: [
      { label: "Material", value: "80% Cotton, 15% Polyester, 5% Spandex" },
      { label: "Sizes", value: "S, M, L, XL" },
      { label: "Care", value: "Machine wash warm, tumble dry medium" },
      { label: "Weight", value: "Medium" },
    ],
    benefits: [
      "Premium cotton provides excellent breathability",
      "Seamless toe design eliminates pressure points",
      "Durable construction for long-lasting wear",
      "Affordable premium quality for everyday comfort",
    ],
  },
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products[slug]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The product you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetail product={product} />
      <RelatedProducts currentSlug={slug} />
      <Footer />
    </main>
  )
}
