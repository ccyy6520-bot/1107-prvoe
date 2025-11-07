import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 font-serif text-5xl text-gray-800">Privacy Policy</h1>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-500">Last Updated: January 2025</p>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Introduction</h2>
              <p>
                The PRVOE ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website or use our
                services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, and other contact information you
                  voluntarily provide to us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about your browsing activity, including IP address, browser
                  type, pages visited, and time spent on pages.
                </li>
                <li>
                  <strong>Marketing Data:</strong> Your preferences in receiving marketing communications and your
                  communication preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Communicate with you about promotions, events, and updates</li>
                <li>Process your transactions and send related information</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Disclosure of Your Information</h2>
              <p>
                We may share your information with third parties in certain situations, including with service providers
                who assist us in operating our website and conducting our business, and when required by law or to
                protect our rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Security</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information.
                However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
                <li>Request transfer of your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@theprvoe.com
                <br />
                Phone: (323) 900-8080
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
