// app/privacy-policy/page.js
import Link from 'next/link';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-[#9a0c28]">
              ShootOrder
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#9a0c28] font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-[#9a0c28] font-medium transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#9a0c28] font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#9a0c28] font-medium transition-colors">
                Contact
              </Link>
            </div>
            <Link href="/contact" 
                  className="bg-[#9a0c28] text-white px-6 py-2 rounded-md font-medium hover:bg-[#7a0a20] transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#9a0c28] to-[#7a0a20] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we protect your information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            
            {/* Last Updated */}
            <div className="bg-gray-50 border-l-4 border-[#9a0c28] p-4 mb-8 rounded-r-md">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 30, 2025
              </p>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              
              {/* Section 1 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This includes your name, email address, phone number, 
                  and business information.
                </p>
                <p className="text-gray-700">
                  We also automatically collect certain information about your device and how you interact 
                  with our website, including IP address, browser type, and usage data through cookies and similar technologies.
                </p>
              </section>

              {/* Section 2 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your information to provide, maintain, and improve our digital marketing services, 
                  communicate with you, process payments, and send you relevant updates about our services.
                </p>
                <p className="text-gray-700">
                  Your information helps us personalize your experience, analyze website usage, 
                  and develop better marketing strategies for your business.
                </p>
              </section>

              {/* Section 3 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information with trusted service providers who assist us in operating 
                  our website and conducting our business, such as Google Ads and analytics platforms.
                </p>
                <p className="text-gray-700">
                  We may also disclose your information when required by law or to protect our rights and safety.
                </p>
              </section>

              {/* Section 4 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-gray-700">
                  However, no method of transmission over the internet is 100% secure, and we cannot 
                  guarantee absolute security of your information.
                </p>
              </section>

              {/* Section 5 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze website traffic, and understand user preferences.
                </p>
                <p className="text-gray-700">
                  You can control cookie settings through your browser preferences, though disabling 
                  cookies may affect some website functionality.
                </p>
              </section>

              {/* Section 6 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to access, update, or delete your personal information. 
                  You can also opt-out of marketing communications at any time.
                </p>
                <p className="text-gray-700">
                  If you&apos;re in the EU, you have additional rights under GDPR including data portability 
                  and the right to object to processing.
                </p>
              </section>

              {/* Section 7 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  Our website may contain links to third-party websites and services, including Google Ads, 
                  Facebook, and other platforms. We are not responsible for their privacy practices.
                </p>
                <p className="text-gray-700">
                  We recommend reviewing the privacy policies of any third-party services you interact with.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or how we handle your information, 
                  please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@shootorder.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Digital Marketing Street, Business District, City, State 12345</p>
                  </div>
                </div>
              </section>

            </div>

            {/* Policy Updates Notice */}
            <div className="mt-12 p-6 bg-[#9a0c28] text-white rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Policy Updates</h3>
              <p className="text-sm opacity-90">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. 
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>
        </div>
      </main>

    

    </div>
  )
}