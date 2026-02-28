import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,oklch(0.98_0.01_220),oklch(0.95_0.02_220))] border-t border-border py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold text-foreground mb-4">About</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diabpro creates premium socks designed for comfort and care of diabetic feet.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products/bamboo" className="hover:text-primary transition-colors">
                  Bamboo Socks
                </Link>
              </li>
              <li>
                <Link href="/products/cotton" className="hover:text-primary transition-colors">
                  Cotton Socks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Diabpro Socks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
