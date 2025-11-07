"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/christmas-tree-with-fireworks-at-night.jpg",
    date: "NOVEMBER 17",
    title: "CHRISTMAS AT THE GROVE",
    description:
      "Join us for our 24th Annual Tree Lighting Celebration, presented by Fox11 and hosted by Lance Bass, with a night full of special performances.",
    link: "/events/christmas",
  },
  {
    image: "/outdoor-shopping-center-with-palm-trees.jpg",
    date: "YEAR ROUND",
    title: "SHOP, DINE & PLAY",
    description:
      "Experience the best of Los Angeles shopping, dining and entertainment in our beautiful open-air environment.",
    link: "/visit",
  },
  {
    image: "/luxury-retail-stores-at-sunset.jpg",
    date: "NEW ARRIVALS",
    title: "DISCOVER THE LATEST",
    description:
      "Explore the newest collections from your favorite brands and discover exclusive offerings at The Grove.",
    link: "/shopping",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[500px] overflow-hidden bg-gray-900 md:h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid h-full md:grid-cols-2">
            {/* Image side */}
            <div className="relative h-full">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="h-full w-full object-cover" />
            </div>

            {/* Content side */}
            <div className="flex items-center bg-gray-800 px-8 py-12 md:px-16">
              <div className="max-w-lg">
                <p className="mb-6 text-sm tracking-widest text-emerald-400">{slide.date}</p>
                <h2 className="mb-6 text-4xl font-light tracking-wide text-white md:text-5xl">{slide.title}</h2>
                <p className="mb-8 text-base leading-relaxed text-gray-300">{slide.description}</p>
                <Button
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-emerald-400" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
