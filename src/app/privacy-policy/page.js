// app/privacy-policy/page.js
import Link from 'next/link';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#9a0c28] to-[#7a0a20] text-white py-16 mt-12">
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
                  contact us, or use our services. This information will be collected with your knowledge 
                  and participation, and may include:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Name and business information</li>
                    <li>• Email address and phone number</li>
                    <li>• Physical address</li>
                    <li>• Username and password</li>
                    <li>• Credit card details (when applicable)</li>
                    <li>• Profile picture and Facebook Page data (with explicit consent)</li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">
                  We also automatically collect certain information about your device and how you interact 
                  with our website, including IP address, browser type, and usage data through cookies and similar technologies.
                </p>
                <p className="text-gray-700">
                  If you choose not to provide compulsory information, we may decline to accept your registration. 
                  It will not be possible for you to deal with us anonymously.
                </p>
              </section>

              {/* Section 2 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your information to provide, maintain, and improve our digital marketing services, 
                  communicate with you, process payments, and send you relevant updates about our services.
                </p>
                <p className="text-gray-700 mb-4">
                  Specifically, your personal information may be used for:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Administering our network and services</li>
                    <li>• Billing and credit collection purposes</li>
                    <li>• Managing and publishing content to Facebook Pages (with user consent)</li>
                    <li>• Responding to user inquiries and support requests</li>
                    <li>• Personalizing your experience and analyzing website usage</li>
                    <li>• Developing better marketing strategies for your business</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  Your personal information may only be disclosed in the following circumstances:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• To our authorized officers and agents for network administration or billing purposes</li>
                    <li>• To trusted service providers who assist us in operating our website (such as Google Ads and analytics platforms)</li>
                    <li>• Under compulsion of law (e.g., warrant or court order)</li>
                    <li>• To lessen or prevent a serious and imminent threat to an individual&apos;s life or health</li>
                    <li>• To you or with your explicit consent</li>
                    <li>• When required by law or to protect our rights and safety</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  We may disclose aggregated demographic information that cannot identify you or any other individual. 
                  We only access, use, store, and share Facebook Platform Data in accordance with Meta Platform Terms and Developer Policies.
                </p>
              </section>

              {/* Section 4 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Registration information is not accessible over the Internet</li>
                    <li>• Access only from secure password-protected internal workstations</li>
                    <li>• Modern Linux-based operating system with latest security patches</li>
                    <li>• Appropriate technical measures for data protection</li>
                  </ul>
                </div>
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
                  analyze website traffic, and understand user preferences. Our website may track user 
                  access sessions using cookies by automated means during your use of our network.
                </p>
                <p className="text-gray-700">
                  Cookies are used to improve your experience but are not used to record personal information. 
                  You can control cookie settings through your browser preferences, though disabling 
                  cookies may affect some website functionality.
                </p>
              </section>

              {/* Section 6 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Sensitive Information</h2>
                <p className="text-gray-700">
                  We will not collect information revealing your racial or ethnic origin, political opinions, 
                  religious or philosophical beliefs, trade-union membership, or details of health, disability 
                  or sexual activity or orientation, unless compelled to do so by law.
                </p>
              </section>

              {/* Section 7 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Your Rights and Data Access</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to access, update, or delete your personal information. 
                  You can also opt-out of marketing communications at any time. Specifically, you can:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Request to view or delete your data</li>
                    <li>• Withdraw Facebook permissions at any time via your Facebook account settings</li>
                    <li>• Update your personal information when it changes</li>
                    <li>• Access your personal information without fee within 14 days of request</li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">
                  If you&apos;re in the EU, you have additional rights under GDPR including data portability 
                  and the right to object to processing.
                </p>
                <p className="text-gray-700">
                  Access to your personal information may be refused if providing access would pose a serious 
                  threat to life or health, create unreasonable impact on others privacy, or if the request 
                  is frivolous or vexatious.
                </p>
              </section>

              {/* Section 8 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Data Quality and Retention</h2>
                <p className="text-gray-700 mb-4">
                  We will use all reasonable endeavors to ensure the accuracy and quality of the information 
                  collected about you. You warrant that all information provided to us is complete, accurate 
                  and up to date at all times.
                </p>
                <p className="text-gray-700">
                  We retain your data only as long as necessary for the stated purposes. Should personal 
                  information that you know has been collected about you change, it is your responsibility 
                  to bring the changes to our attention.
                </p>
              </section>

              {/* Section 9 */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Facebook Platform Data Usage</h2>
                <p className="text-gray-700 mb-4">
                  When you grant us access to your Facebook Page data, we:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Only access public Facebook information with explicit permission</li>
                    <li>• Manage and publish content to Facebook Pages with user consent</li>
                    <li>• Comply with Meta Platform Terms and Developer Policies</li>
                    <li>• Do not sell or share your Facebook data with third parties</li>
                  </ul>
                </div>
              </section>

              {/* Section 10 */}
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

              {/* Section 11 */}
              <section>
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or how we handle your information, 
                  please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Privacy Officer Email:</strong> admin@shootorder.com</p>
                    <p><strong>General Email:</strong> privacy@shootorder.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Digital Marketing Street, Business District, City, State 12345</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    The Privacy Officer will attend to your request on a confidential basis within 14 days of the request being received.
                  </p>
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

            {/* Legal Compliance Notice */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-xs text-gray-600">
                This privacy policy is governed by the National Privacy Principles set out in the Privacy Act of 1988 
                and other applicable privacy laws. We are committed to protecting your privacy in accordance with 
                these legal requirements.
              </p>
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}