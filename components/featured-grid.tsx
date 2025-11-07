import Link from "next/link"
import { Card } from "@/components/ui/card"

const features = [
  {
    image: "/laneige-beauty-products-on-pink-background.jpg",
    category: "BEAUTY",
    title: "GLAZE CRAZE AT LANEIGE POP-UP",
    date: "November 8-9, 2025",
    link: "/events/laneige-popup",
  },
  {
    image: "/pumpkin-pie-slice-with-fork.jpg",
    category: "FOOD",
    title: "SUPERBA PUMPKIN PIE AT THE WIN-DOW",
    date: "October 23-November 13, 2025",
    link: "/dining/superba-pumpkin-pie",
  },
  {
    image: "/luxury-candle-with-christmas-decorations.jpg",
    category: "SHOPPING",
    title: "HOLIDAY GIFT GUIDE",
    date: "Available Now",
    link: "/shopping/holiday-gifts",
  },
  {
    image: "/gourmet-cookies-and-coffee.jpg",
    category: "FOOD",
    title: "SWEET TREATS FOR THE SEASON",
    date: "Available Now",
    link: "/dining/seasonal-treats",
  },
]

export function FeaturedGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link} className="group">
              <Card className="overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs tracking-widest text-gray-600">{feature.category}</p>
                  <h3 className="mb-3 text-xl font-light tracking-wide text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.date}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
