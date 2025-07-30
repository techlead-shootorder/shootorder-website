// app/terms-and-conditions/page.js
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
            Terms and Conditions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services
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

            {/* Table of Contents */}
            {/* <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold text-[#9a0c28] mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#acceptance" className="text-blue-600 hover:text-[#9a0c28] transition-colors">1. Acceptance of Terms</a></li>
                <li><a href="#services" className="text-blue-600 hover:text-[#9a0c28] transition-colors">2. Description of Services</a></li>
                <li><a href="#user-accounts" className="text-blue-600 hover:text-[#9a0c28] transition-colors">3. User Accounts and Registration</a></li>
                <li><a href="#user-conduct" className="text-blue-600 hover:text-[#9a0c28] transition-colors">4. User Conduct and Responsibilities</a></li>
                <li><a href="#payment" className="text-blue-600 hover:text-[#9a0c28] transition-colors">5. Payment Terms and Billing</a></li>
                <li><a href="#intellectual-property" className="text-blue-600 hover:text-[#9a0c28] transition-colors">6. Intellectual Property Rights</a></li>
                <li><a href="#privacy" className="text-blue-600 hover:text-[#9a0c28] transition-colors">7. Privacy and Data Protection</a></li>
                <li><a href="#limitation" className="text-blue-600 hover:text-[#9a0c28] transition-colors">8. Limitation of Liability</a></li>
                <li><a href="#termination" className="text-blue-600 hover:text-[#9a0c28] transition-colors">9. Termination</a></li>
                <li><a href="#changes" className="text-blue-600 hover:text-[#9a0c28] transition-colors">10. Changes to Terms</a></li>
                <li><a href="#contact" className="text-blue-600 hover:text-[#9a0c28] transition-colors">11. Contact Information</a></li>
              </ul>
            </div> */}

            {/* test */}

            {/* Terms Sections */}
            <div className="space-y-8">
              
              {/* Section 1 */}
              <section id="acceptance" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using ShootOrder&apos;s website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-700">
                  These terms apply to all visitors, users, and others who access or use our digital marketing services, 
                  including but not limited to our Google Ads management, SEO services, and digital growth consulting.
                </p>
              </section>

              {/* Section 2 */}
              <section id="services" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">2. Description of Services</h2>
                <p className="text-gray-700 mb-4">
                  ShootOrder provides comprehensive digital marketing services including Google Ads management, 
                  search engine optimization (SEO), social media marketing, and digital growth consulting.
                </p>
                <p className="text-gray-700 mb-4">
                  Our services are designed to help businesses grow their online presence and achieve measurable results. 
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
                <p className="text-gray-700">
                  Service availability may vary by location and is subject to our current service offerings and capacity.
                </p>
              </section>

              {/* Section 3 */}
              <section id="user-accounts" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">3. User Accounts and Registration</h2>
                <p className="text-gray-700 mb-4">
                  To access certain features of our services, you may be required to create an account. 
                  You are responsible for maintaining the confidentiality of your account credentials.
                </p>
                <p className="text-gray-700 mb-4">
                  You agree to provide accurate, current, and complete information during the registration process 
                  and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="text-gray-700">
                  You are responsible for all activities that occur under your account and agree to notify us immediately 
                  of any unauthorized use of your account.
                </p>
              </section>

              {/* Section 4 */}
              <section id="user-conduct" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">4. User Conduct and Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. 
                  You are prohibited from using our services to transmit, distribute, or store material that is unlawful, 
                  harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
                </p>
                <p className="text-gray-700 mb-4">
                  You shall not attempt to gain unauthorized access to any portion of our services, other accounts, 
                  computer systems, or networks connected to our services through hacking, password mining, or any other means.
                </p>
                <p className="text-gray-700">
                  Any violation of these conduct rules may result in immediate termination of your account and access to our services.
                </p>
              </section>

              {/* Section 5 */}
              <section id="payment" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">5. Payment Terms and Billing</h2>
                <p className="text-gray-700 mb-4">
                  Payment for services is due according to the terms specified in your service agreement. 
                  We accept various payment methods including credit cards, bank transfers, and other approved payment systems.
                </p>
                <p className="text-gray-700 mb-4">
                  All fees are non-refundable unless otherwise specified in writing. Late payments may result in 
                  service suspension and additional fees. You are responsible for all taxes associated with your use of our services.
                </p>
                <p className="text-gray-700">
                  We reserve the right to change our pricing with thirty (30) days written notice. 
                  Continued use of services after price changes constitutes acceptance of new pricing.
                </p>
              </section>

              {/* Section 6 */}
              <section id="intellectual-property" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">6. Intellectual Property Rights</h2>
                <p className="text-gray-700 mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive 
                  property of ShootOrder and its licensors. The service is protected by copyright, trademark, 
                  and other laws of both the United States and foreign countries.
                </p>
                <p className="text-gray-700 mb-4">
                  Our trademarks and trade dress may not be used in connection with any product or service 
                  without our prior written consent. You retain ownership of content you provide to us, 
                  but grant us a license to use such content for service delivery purposes.
                </p>
                <p className="text-gray-700">
                  Any strategies, campaigns, or methodologies developed specifically for your business remain your property, 
                  though we reserve the right to use general knowledge and experience gained from our work.
                </p>
              </section>

              {/* Section 7 */}
              <section id="privacy" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">7. Privacy and Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                  your information when you use our services. By using our services, you agree to the collection 
                  and use of information in accordance with our Privacy Policy.
                </p>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-gray-700">
                  We comply with applicable data protection laws including GDPR and CCPA where applicable. 
                  You have rights regarding your personal data as outlined in our Privacy Policy.
                </p>
              </section>

              {/* Section 8 */}
              <section id="limitation" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall ShootOrder, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                  limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p className="text-gray-700 mb-4">
                  Our total liability to you for all damages, losses, and causes of action shall not exceed 
                  the amount paid by you to ShootOrder in the twelve (12) months preceding the claim.
                </p>
                <p className="text-gray-700">
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability 
                  for consequential or incidental damages, so the above limitations may not apply to you.
                </p>
              </section>

              {/* Section 9 */}
              <section id="termination" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">9. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your account immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-700 mb-4">
                  You may terminate your account at any time by contacting us. Upon termination, 
                  your right to use the service will cease immediately, though certain provisions of these Terms will survive termination.
                </p>
                <p className="text-gray-700">
                  Upon termination, we will provide you with any final reports and transfer ownership of any 
                  advertising accounts or assets that belong to you, subject to completion of all outstanding payments.
                </p>
              </section>

              {/* Section 10 */}
              <section id="changes" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">10. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-700 mb-4">
                  What constitutes a material change will be determined at our sole discretion. 
                  By continuing to access or use our service after those revisions become effective, 
                  you agree to be bound by the revised terms.
                </p>
                <p className="text-gray-700">
                  If you do not agree to the new terms, please stop using the service. 
                  We will post any changes to these Terms on this page and update the &quot;Last Updated&quot; date.
                </p>
              </section>

              {/* Section 11 */}
              <section id="contact">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">11. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> legal@shootorder.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Digital Marketing Street, Business District, City, State 12345</p>
                    <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  We aim to respond to all inquiries within 2 business days. For urgent matters, 
                  please call our main business line during regular business hours.
                </p>
              </section>

            </div>

            {/* Additional Legal Notice */}
            <div className="mt-12 p-6 bg-[#9a0c28] text-white rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
              <p className="text-sm opacity-90">
                These terms and conditions constitute the entire agreement between you and ShootOrder concerning 
                the use of our services. If any provision of these Terms is deemed invalid or unenforceable, 
                the remaining provisions shall remain in full force and effect. These Terms are governed by 
                and construed in accordance with the laws of the jurisdiction in which ShootOrder operates, 
                without regard to conflict of law principles.
              </p>
            </div>

          </div>
        </div>
      </main>



    </div>
  )
}