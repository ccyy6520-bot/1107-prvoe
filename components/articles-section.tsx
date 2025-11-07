import Link from "next/link"
import { Card } from "@/components/ui/card"

const articles = [
  {
    image: "/article-holiday-shopping-guide.jpg",
    category: "SHOPPING",
    title: "Your Ultimate Holiday Shopping Guide at THE PRVOE",
    excerpt:
      "Discover the perfect gifts for everyone on your list this holiday season. From luxury boutiques to unique finds, we've curated the best shopping experiences.",
    date: "December 1, 2025",
    author: "Sarah Mitchell",
    link: "/articles/holiday-shopping-guide",
  },
  {
    image: "/article-dining-experiences.jpg",
    category: "DINING",
    title: "5 Must-Try Dining Experiences This Winter",
    excerpt:
      "Explore the culinary delights that make THE PRVOE a food lover's paradise. From cozy cafes to fine dining, discover flavors that warm the soul.",
    date: "November 28, 2025",
    author: "James Chen",
    link: "/articles/winter-dining",
  },
  {
    image: "/article-wellness-beauty.jpg",
    category: "WELLNESS",
    title: "Self-Care Rituals for the Busy Season",
    excerpt:
      "Take a moment for yourself with our guide to wellness and beauty services. Learn how to maintain balance during the hectic holiday season.",
    date: "November 25, 2025",
    author: "Emma Rodriguez",
    link: "/articles/wellness-rituals",
  },
  {
    image: "/article-family-activities.jpg",
    category: "EVENTS",
    title: "Family-Friendly Activities to Enjoy Together",
    excerpt:
      "Create lasting memories with your loved ones. Discover the best family activities, from seasonal celebrations to interactive experiences.",
    date: "November 20, 2025",
    author: "Michael Thompson",
    link: "/articles/family-activities",
  },
  {
    image: "/article-fashion-trends.jpg",
    category: "FASHION",
    title: "Winter Fashion Trends: What's Hot This Season",
    excerpt:
      "Stay ahead of the style curve with insights from THE PRVOE's top fashion retailers. Discover the looks that are defining this winter season.",
    date: "November 15, 2025",
    author: "Olivia Park",
    link: "/articles/winter-fashion",
  },
]

export function ArticlesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-light tracking-wide text-gray-900 md:text-5xl">Latest Stories</h2>
          <p className="mt-4 text-gray-600">Discover what's happening at THE PRVOE</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={index} href={article.link} className="group">
              <Card className="h-full overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs tracking-widest text-emerald-700">{article.category}</p>
                  <h3 className="mb-3 font-serif text-xl font-light leading-tight tracking-wide text-gray-900">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/articles"
            className="inline-block border border-gray-900 px-8 py-3 text-sm tracking-widest text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            VIEW ALL ARTICLES
          </Link>
        </div>
      </div>
    </section>
  )
}
