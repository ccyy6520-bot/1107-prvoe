import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 font-serif text-5xl text-gray-800">Disclaimer</h1>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-500">Last Updated: January 2025</p>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Website Disclaimer</h2>
              <p>
                The information provided by The PRVOE ("we," "us," or "our") on our website is for general informational
                purposes only. All information on the site is provided in good faith, however we make no representation
                or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability,
                availability, or completeness of any information on the site.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">External Links Disclaimer</h2>
              <p>
                The site may contain (or you may be sent through the site) links to other websites or content belonging
                to or originating from third parties or links to websites and features in banners or other advertising.
                Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity,
                reliability, availability, or completeness by us.
              </p>
              <p className="mt-4">
                We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any
                information offered by third-party websites linked through the site or any website or feature linked in
                any banner or other advertising.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Store and Event Information</h2>
              <p>
                While we strive to keep information about stores, restaurants, events, and hours of operation accurate
                and up-to-date, details are subject to change without notice. We recommend contacting individual
                retailers or checking their websites directly for the most current information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Professional Disclaimer</h2>
              <p>
                The site cannot and does not contain professional advice. The information is provided for general
                informational and entertainment purposes only and is not a substitute for professional advice.
                Accordingly, before taking any actions based upon such information, we encourage you to consult with the
                appropriate professionals.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Limitation of Liability</h2>
              <p>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as
                a result of the use of the site or reliance on any information provided on the site. Your use of the
                site and your reliance on any information on the site is solely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Errors and Omissions</h2>
              <p>
                While we have made every attempt to ensure that the information contained in this site has been obtained
                from reliable sources, The PRVOE is not responsible for any errors or omissions or for the results
                obtained from the use of this information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Fair Use</h2>
              <p>
                This site may use copyrighted material which has not always been specifically authorized by the
                copyright owner. We believe this constitutes a "fair use" of any such copyrighted material as provided
                for in section 107 of the US Copyright Law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-gray-800">Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us at:
                <br />
                Email: info@theprvoe.com
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
