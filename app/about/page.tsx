import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] w-full">
          <Image
            src="/outdoor-shopping-center-with-palm-trees.jpg"
            alt="The PRVOE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-serif text-5xl text-white md:text-6xl">About Us</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-serif text-4xl text-gray-800">Welcome to The PRVOE</h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                The PRVOE is more than just a shopping destination—it's an experience. Since opening our doors, we have
                been committed to creating a unique outdoor retail and entertainment environment that combines the best
                in shopping, dining, and entertainment.
              </p>

              <p>
                Nestled in the heart of Los Angeles, The PRVOE features world-class retailers, award-winning
                restaurants, and a state-of-the-art cinema. Our beautifully landscaped outdoor environment offers a
                European-inspired ambiance with fountains, greenery, and open spaces that invite visitors to relax and
                enjoy.
              </p>

              <h3 className="pt-8 font-serif text-2xl text-gray-800">Our Vision</h3>
              <p>
                At The PRVOE, we believe that shopping should be an enjoyable, memorable experience. That's why we've
                created a space where world-class retail meets exceptional hospitality. From our carefully curated mix
                of stores to our year-round events and entertainment, every detail has been thoughtfully designed to
                delight our guests.
              </p>

              <h3 className="pt-8 font-serif text-2xl text-gray-800">Our Commitment</h3>
              <p>
                We are dedicated to providing outstanding customer service, maintaining beautiful spaces, and hosting
                events that bring the community together. Whether you're here for a day of shopping, a special meal, or
                one of our signature events, we strive to make every visit extraordinary.
              </p>

              <p>Thank you for being part of The PRVOE story. We look forward to welcoming you soon.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
