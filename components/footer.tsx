import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-gray-800">ABOUT</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About The PRVOE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-gray-800">VISIT</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/hours" className="hover:text-gray-900">
                  Hours & Directions
                </Link>
              </li>
              <li>
                <Link href="/parking" className="hover:text-gray-900">
                  Parking
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop & Dine */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-gray-800">SHOP & DINE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/shopping" className="hover:text-gray-900">
                  Shopping Directory
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-gray-900">
                  Dining Directory
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-gray-900">
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-gray-800">CONNECT</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-600 md:flex-row">
            <p>&copy; 2025 The PRVOE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-gray-900">
                Disclaimer
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
