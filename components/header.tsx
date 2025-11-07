import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-gray-200">
      {/* Top bar with hours */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-2">
          <p className="text-center text-xs tracking-widest text-gray-600 sm:text-left">TODAY'S HOURS | 10AM-9PM</p>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <svg width="50" height="60" viewBox="0 0 50 60" fill="none" className="text-gray-800">
                  {/* P shape */}
                  <path
                    d="M10 10 L10 50 M10 10 L25 10 Q35 10 35 20 Q35 30 25 30 L10 30"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Decorative diamond accent */}
                  <path d="M25 40 L28 45 L25 50 L22 45 Z" fill="currentColor" />
                </svg>
                <div className="mt-1 text-center">
                  <div className="text-xs tracking-[0.3em] text-gray-800">THE</div>
                  <div className="text-sm font-light tracking-[0.4em] text-gray-800">PRVOE</div>
                </div>
              </div>
            </Link>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <Link
                href="/caruso-signature"
                className="hidden text-xs tracking-widest text-gray-600 hover:text-gray-900 sm:block"
              >
                CARUSO SIGNATURE
              </Link>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center gap-6 py-4 text-xs tracking-widest">
            <li>
              <Link href="/shopping" className="text-gray-800 hover:text-gray-600">
                SHOPPING
              </Link>
            </li>
            <li>
              <Link href="/dining" className="text-gray-800 hover:text-gray-600">
                DINING
              </Link>
            </li>
            <li>
              <Link href="/movies" className="text-gray-800 hover:text-gray-600">
                MOVIES
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-gray-800 hover:text-gray-600">
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="/offers" className="text-gray-800 hover:text-gray-600">
                OFFERS
              </Link>
            </li>
            <li>
              <Link href="/visit" className="text-gray-800 hover:text-gray-600">
                VISIT
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-800 hover:text-gray-600">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 hover:text-gray-600">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
