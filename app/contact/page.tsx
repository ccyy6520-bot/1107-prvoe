import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-12 text-center font-serif text-5xl text-gray-800">Contact Us</h1>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Information */}
              <div>
                <h2 className="mb-6 font-serif text-3xl text-gray-800">Get in Touch</h2>
                <p className="mb-8 text-gray-600 leading-relaxed">
                  Have questions or feedback? We'd love to hear from you. Reach out to us through any of the methods
                  below, and our team will get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-700" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        189 The Grove Drive
                        <br />
                        Los Angeles, CA 90036
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-700" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">(323) 900-8080</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-700" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@theprvoe.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="mb-4 font-semibold text-gray-800">Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Thursday:</span>
                      <span>10:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday:</span>
                      <span>10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>11:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="mb-6 font-serif text-3xl text-gray-800">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <Textarea id="message" placeholder="Tell us more..." rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
