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
              
              {/* General Privacy Policy */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">General Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  This policy governs the use and disclosure by us of personal information of our users and outlines how users can access that information. It is only applicable on the assumption that:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• You provide us with all information marked as compulsory on the relevant application forms</li>
                    <li>• You warrant that all information provided to us is complete, accurate and up to date at all times</li>
                  </ul>
                </div>
              </section>

              {/* Information that is collected */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Information that is collected</h2>
                <p className="text-gray-700 mb-4">
                  We collect or maintain the following personal information about our users:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Name</li>
                    <li>• Address</li>
                    <li>• Telephone Number</li>
                    <li>• Email Address</li>
                    <li>• Username & Password</li>
                    <li>• Credit Card details (if applicable)</li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">
                  This information will be collected with your knowledge and participation. If you choose not to provide this information we may decline to accept your registration. It will not be possible for you to deal with us anonymously.
                </p>
              </section>

              {/* Cookies */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Our website may track user access sessions using cookies, without your specific knowledge or participation, by automated means in the course of your use of our network. Cookies are a Web browser technology that is used to improve your experience of using our website, but are not used to record any personal information. You may disable cookies in your Web browser at the cost of some possible loss of functionality in your use of our website.
                </p>
              </section>

              {/* Sensitive information */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Sensitive information</h2>
                <p className="text-gray-700 mb-4">
                  We will not collect information revealing your racial or ethnic origin, political opinions, religious or philosophical beliefs, trade-union membership, or details of health, disability or sexual activity or orientation, unless compelled to do so by law. The personal information we collect may be used for the following purposes:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• To administer our network</li>
                    <li>• For billing purposes</li>
                    <li>• For any other purpose for which you would reasonably expect your personal information to be used</li>
                    <li>• For any other purpose authorised by the National Privacy Principles set out in the Privacy Act of 1988</li>
                  </ul>
                </div>
              </section>

              {/* Disclosure of your personal information */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Disclosure of your personal information</h2>
                <p className="text-gray-700 mb-4">
                  Your personal information may be disclosed in the following circumstances:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• To our authorised officers and our agents for the purpose of administering our network or for billing or credit collection purposes</li>
                    <li>• Under compulsion of law, for example if a warrant or court order is received</li>
                    <li>• To lessen or prevent a serious and imminent threat to an individual&apos;s life or health</li>
                    <li>• To you or with your consent</li>
                    <li>• For any other purpose authorised by the National Privacy Principles set out in the Privacy Act of 1988</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Otherwise we will use reasonable endeavours to avoid the disclosure of your personal information, save that aggregated demographic information may be disclosed so long as the information is unable to identify you or any other individual.
                </p>
              </section>

              {/* Accessing your personal information */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Accessing your personal information</h2>
                <p className="text-gray-700">
                  You can contact us to request a copy of your personal information by emailing our Privacy Officer at admin@shootorder.com. The Privacy Officer shall attend to your request on a confidential basis within 14 days of the request being received. No fee will be levied for access to this information.
                </p>
              </section>

              {/* Refusal of access */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Refusal of access</h2>
                <p className="text-gray-700 mb-4">
                  Access of your personal information may be refused if:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Providing access would pose a serious and imminent threat to life or health of a person</li>
                    <li>• Providing access would create an unreasonable impact on the privacy of others</li>
                    <li>• The request is frivolous and vexatious</li>
                    <li>• Denial of access is authorised or required by law</li>
                    <li>• For any other reason authorised by the National Privacy Principles set out in the Privacy Act of 1988</li>
                  </ul>
                </div>
              </section>

              {/* Data quality */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Data quality</h2>
                <p className="text-gray-700">
                  We will use all reasonable endeavours to ensure the accuracy and quality of the information collected about you. Should personal information that you know has been collected about you change, it is your responsibility to bring the changes to our attention which you may do by email to the Privacy Officer at admin@shootorder.com
                </p>
              </section>

              {/* Data security */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Data security</h2>
                <p className="text-gray-700">
                  We will endeavour to keep your personal information as secure as reasonably possible. Without limitation, registration information is not accessible over the Internet, but only from a secure password-protected internal workstation. Our Internet server utilises a modern Linux-based operating system that is maintained with the latest available security patches and updates.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We may collect the following data from users:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Name</li>
                    <li>• Email address</li>
                    <li>• Profile picture</li>
                    <li>• Facebook Page data (if user grants access)</li>
                    <li>• Other public Facebook information (only when permission is explicitly given)</li>
                  </ul>
                </div>
              </section>

              {/* How We Use the Information */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">How We Use the Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the collected information to:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Provide and improve our services</li>
                    <li>• Manage and publish content to Facebook Pages (with user consent)</li>
                    <li>• Respond to user inquiries and support requests</li>
                  </ul>
                </div>
              </section>

              {/* Facebook Platform Data Usage */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Facebook Platform Data Usage</h2>
                <p className="text-gray-700 mb-4">
                  We only access, use, store, and share Facebook Platform Data in accordance with the Meta Platform Terms and Developer Policies.
                </p>
                <p className="text-gray-700">
                  We do not sell or share your Facebook data with third parties.
                </p>
              </section>

              {/* Data Sharing */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Data Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not share your personal information with third parties except:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• When required by law</li>
                    <li>• With your consent</li>
                    <li>• To provide services you&apos;ve requested</li>
                  </ul>
                </div>
              </section>

              {/* Data Retention and Security */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Data Retention and Security</h2>
                <p className="text-gray-700">
                  We retain your data only as long as necessary for the stated purposes and secure it with appropriate technical measures.
                </p>
              </section>

              {/* Your Rights */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You can:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Request to view or delete your data</li>
                    <li>• Withdraw Facebook permissions at any time via your Facebook account settings</li>
                  </ul>
                </div>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this policy. Changes will be posted here with a new effective date.
                </p>
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