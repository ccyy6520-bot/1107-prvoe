import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { WelcomeSection } from "@/components/welcome-section"
import { FeaturedGrid } from "@/components/featured-grid"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <WelcomeSection />
        <FeaturedGrid />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  )
}
