import Link from 'next/link';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#9a0c28] to-[#7a0a20] text-white py-16 mt-12">
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

            {/* Important Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Notice</h3>
              <p className="text-blue-700 text-sm">
                <strong>Please Note:</strong> Ivent IT Solutions Private Limited is the parent company of shootorder.com. 
                Services are provided by Ivent IT Solutions Private Limited under the shootorder.com brand name. 
                This is a binding contract between shootorder.com and you. If you have any questions, 
                please contact us at <a href="mailto:support@shootorder.com" className="text-blue-800 underline">support@shootorder.com</a>.
              </p>
            </div>

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
                  web hosting services, and all other services provided under the ShootOrder brand.
                </p>
              </section>

              {/* Section 2 */}
              <section id="services" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">2. Description of Services</h2>
                <p className="text-gray-700 mb-4">
                  ShootOrder provides comprehensive digital marketing services including Google Ads management, 
                  search engine optimization (SEO), social media marketing, digital growth consulting, and web hosting services.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Web Hosting Services:</strong> In exchange for the fees you pay in advance, we will host your website on one or more of our servers, 
                  so long as you abide by the terms and conditions set out on this page. We will provide the services according to the specifications 
                  listed for the hosting package you select during the signup process.
                </p>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time. 
                  Service availability may vary by location and is subject to our current service offerings and capacity.
                </p>
                <p className="text-gray-700">
                  For hosting services, the term &quot;services&quot; refers to the web hosting services that we will provide to you and, 
                  if you are an Affiliate, the services we provide to you in connection with that program.
                </p>
              </section>

              {/* Section 3 */}
              <section id="hosting-content" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">3. Permission to Host Your Content</h2>
                <p className="text-gray-700 mb-4">
                  For us to host your website, it is necessary for you to upload your content to our servers. 
                  When you do this uploading, you are creating one or more copies of your content on our system.
                </p>
                <p className="text-gray-700 mb-4">
                  By purchasing hosting services from us, you acknowledge that these copies are being made, and give us the permission 
                  (a license) to maintain these copies and make them available to users of the Internet.
                </p>
                <p className="text-gray-700">
                  You are solely responsible for providing all of the content and other data that make up your website.
                </p>
              </section>

              {/* Section 4 */}
              <section id="service-availability" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">4. When Services Will be Available</h2>
                <p className="text-gray-700 mb-4">
                  We will attempt to provide the services 24 hours a day, 7 days a week for as long as you have paid for them. 
                  However, for a number of reasons, the services may occasionally be unavailable to you.
                </p>
                <p className="text-gray-700 mb-4">
                  You must recognize and acknowledge that due to the nature of web hosting technology, occasional unavailability 
                  of the services cannot be avoided. This may include equipment malfunctions, periodic maintenance procedures, 
                  repairs, power failures, interruption or failure of telecommunication links, hostile network attacks, 
                  network traffic congestion, and other occurrences beyond our control.
                </p>
                <p className="text-gray-700">
                  We have not promised to provide you with uninterrupted service.
                </p>
              </section>

              {/* Section 5 */}
              <section id="technical-support" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">5. Free Technical Support</h2>
                <p className="text-gray-700 mb-4">
                  ShootOrder&apos;s Free Technical Support is limited to issues that are directly related to your Web Hosting Account. 
                  We do not provide website maintenance services in respect of any Hosted Website.
                </p>
                <p className="text-gray-700 mb-4">
                  Our Technical Support does not include maintenance of issues such as HTML coding, Website Programming, 
                  Content/Data Migration, file uploads/downloads, website troubleshooting, adding new files to your website, 
                  or configuring scripts. These services incur additional costs not covered within your web hosting plan.
                </p>
                <p className="text-gray-700 mb-4">
                  During National Holidays and some Sundays, our Technical Support will be limited. We will still provide 
                  Basic Non-Technical Support via Phone and Live Chat, though with reduced staffing.
                </p>
                <p className="text-gray-700">
                  For urgent queries or technical support, you can submit tickets via our support system at 
                  <a href="https://www.shootorder.com/submitticket.php" className="text-[#9a0c28] underline">
                    https://www.shootorder.com/submitticket.php
                  </a>
                </p>
              </section>

              {/* Section 6 */}
              <section id="user-accounts" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">6. User Accounts and Registration</h2>
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

              {/* Section 7 - Acceptable Use Policy */}
              <section id="acceptable-use" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">7. Acceptable Use Policy</h2>
                <p className="text-gray-700 mb-4">
                  ShootOrder strives to maintain a high level of service. By using our hosting services, 
                  you agree to abide by our Acceptable Use Policy strictly.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>We will not provide services for:</strong>
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Unacceptable or inappropriate material as determined by ShootOrder</li>
                    <li>• Topsites, IRC Scripts/Bots, Proxy Scripts/Anonymizers, Pirated Software/Warez</li>
                    <li>• Image Hosting Scripts, AutoSurf/PTC/PTS/PPC sites, IP Scanners, Brute-force Programs</li>
                    <li>• Mail Bombers/Spam Scripts, Banner-Ad services, File Dump/Mirror Scripts</li>
                    <li>• Commercial Audio Streaming, Escrow/Bank Debentures, High-Yield Interest Programs (HYIP)</li>
                    <li>• Investment Sites (FOREX, E-Gold Exchange, MLM/Pyramid Schemes)</li>
                    <li>• Sale of controlled substances without proper permits, Prime Banks Programs, Lottery Sites</li>
                    <li>• MUDs/RPGs/PPBGs, Hateful/Racist/Harassment oriented sites, Hacker focused sites</li>
                    <li>• Sites promoting illegal activities, Forums distributing warez/pirated content</li>
                    <li>• Fraudulent Sites, Port scans, stealth scans, and credit card &quot;phishing&quot;</li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Additional Restrictions:</strong>
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• No hosting, storing, or distributing pornographic material or child pornography</li>
                    <li>• No spamming or sending bulk unsolicited email</li>
                    <li>• No copyright or intellectual property infringement</li>
                    <li>• No long-running server-side processes, bots, or daemons</li>
                    <li>• No web spiders, indexers, or IRC network interfaces</li>
                    <li>• No P2P clients, trackers, or file-sharing networks</li>
                    <li>• No gaming servers or backup/storage use</li>
                    <li>• Maximum 100,000 files per account</li>
                    <li>• No use of system resources over 8% for longer than 180 seconds in any 6-hour period</li>
                    <li>• No MySQL queries longer than 15 seconds</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Violation of this Acceptable Use Policy may result in suspension or immediate termination 
                  of your account without prior notice.
                </p>
              </section>

              {/* Section 8 */}
              <section id="payment" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">8. Payment Terms and Billing</h2>
                <p className="text-gray-700 mb-4">
                  Payment for services is due according to the terms specified in your service agreement. 
                  All prices displayed on our website are based on Indian Rupees (₹ INR).
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Currency Options:</strong> You may choose different currencies from our drop-down menu. 
                  However, prices in INR are fixed and other currencies do not follow exchange rates. 
                  We cannot provide partial refunds based on currency exchange rate differences.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Automatic Renewal:</strong> Your account will be enabled with auto-renewal. 
                  You must cancel 14 days prior to your renewal date to avoid automatic billing. 
                  If you fail to cancel 14 days prior to renewal, your account will be renewed for a new term.
                </p>
                <p className="text-gray-700">
                  <strong>Suspension Policy:</strong> If payment is not received within 14 days of invoice date, 
                  your account will be suspended. If payment is not made within 100 days of suspension, 
                  all data will be permanently deleted.
                </p>
              </section>

              {/* Section 9 */}
              <section id="refund-policy" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">9. Cancellation and Refund Policy</h2>
                <p className="text-gray-700 mb-4">
                  We offer a money-back guarantee on all shared hosting plans if you cancel within the first 100 days after signup. 
                  For reseller hosting plans, we offer a money-back guarantee within the first 30 days after signup.
                </p>
                <p className="text-gray-700 mb-4">
                  To cancel your account, you must submit a ticket at ShootOrder.com with a valid detailed reason. 
                  We are the sole arbiter of whether your reason is valid and if all possible steps were taken to correct the situation.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>No Money-Back Guarantee for:</strong>
                </p>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Violations of our Acceptable Use Policy</li>
                    <li>• Setup fees, bank transfer charges, domain services</li>
                    <li>• Hosting renewals, upgrades, SSL certificates</li>
                    <li>• Email marketing plans, dedicated servers, VPS plans</li>
                    <li>• Misunderstanding of features displayed on our website</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  All refunds are subject to verification by our billing department and may take up to 30 days for processing.
                </p>
              </section>

              {/* Section 10 */}
              <section id="unlimited-resources" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">10. Unlimited Disk Space and Data Transfer</h2>
                <p className="text-gray-700 mb-4">
                  There are no set limits on disk space or data transfer (bandwidth) for plans marked &quot;unlimited.&quot; 
                  However, all customers must be fully compliant with our Terms of Service and utilize resources 
                  related to normal operation of a personal or small business website.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Normal Usage:</strong> This means operating a personal or small business website that utilizes 
                  resources similarly to most of our other customers. Storage of large numbers of multimedia files 
                  not linked to your website is not considered normal usage.
                </p>
                <p className="text-gray-700">
                  We monitor customer and server activity through our Network Monitoring Center (NMC). 
                  Accounts not in compliance or negatively impacting system performance may be temporarily suspended.
                </p>
              </section>

              {/* Section 11 */}
              <section id="privacy" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">11. Privacy and Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  When you place an order for our services, your personal information, including credit card information, 
                  is transmitted via Secure Socket Layer technology, the industry standard for encrypting sensitive information.
                </p>
                <p className="text-gray-700 mb-4">
                  We take your privacy very seriously and will not sell your personal information to third parties 
                  (other than a company that may purchase ShootOrder). We will take reasonable steps to keep 
                  your information from being disclosed to any third party.
                </p>
                <p className="text-gray-700">
                  We comply with applicable data protection laws including GDPR and CCPA where applicable. 
                  You have rights regarding your personal data as outlined in our Privacy Policy.
                </p>
              </section>

              {/* Section 12 */}
              <section id="intellectual-property" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">12. Intellectual Property Rights</h2>
                <p className="text-gray-700 mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive 
                  property of ShootOrder and its licensors. The service is protected by copyright, trademark, 
                  and other applicable laws.
                </p>
                <p className="text-gray-700 mb-4">
                  Our trademarks and trade dress may not be used in connection with any product or service 
                  without our prior written consent. You retain ownership of content you provide to us, 
                  but grant us a license to use such content for service delivery purposes.
                </p>
              </section>

              {/* Section 13 - DMCA */}
              <section id="dmca" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">13. DMCA Copyright Infringement</h2>
                <p className="text-gray-700 mb-4">
                  In accordance with the Digital Millennium Copyright Act, we have adopted a policy to suspend or terminate 
                  accounts of website owners found to be in violation of copyright.
                </p>
                <p className="text-gray-700 mb-4">
                  If you believe your work has been copied in a way that constitutes copyright infringement, 
                  please provide our Abuse Desk with the following:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ol className="text-gray-700 space-y-2 text-sm list-decimal list-inside">
                    <li>Electronic or physical signature of the authorized person</li>
                    <li>Description of the copyrighted work or intellectual property claimed to be infringed</li>
                    <li>Description of where the infringing material is located on the site</li>
                    <li>Your address, telephone number, and email address</li>
                    <li>A statement of good faith belief that the use is not authorized</li>
                    <li>A statement made under penalty of perjury that the information is accurate</li>
                  </ol>
                </div>
                <p className="text-gray-700">
                  Our Abuse Desk can be reached at <a href="mailto:support@shootorder.com" className="text-[#9a0c28] underline">support@shootorder.com</a>
                </p>
              </section>

              {/* Section 14 */}
              <section id="indemnification" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">14. Indemnification</h2>
                <p className="text-gray-700 mb-4">
                  If ShootOrder is sued or threatened with a lawsuit from a third party because of something you do with the services, 
                  you agree to indemnify ShootOrder if we are found liable or pay to settle the dispute.
                </p>
                <p className="text-gray-700">
                  You agree to reimburse ShootOrder for judgments or settlements, and pay our reasonable attorney&apos;s fees 
                  and all other costs we incur in defending ourselves.
                </p>
              </section>

              {/* Section 15 */}
              <section id="warranties" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">15. Disclaimer of Warranties</h2>
                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 text-sm uppercase font-semibold">
                    SHOOTORDER EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, 
                    BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. 
                    SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
                  </p>
                </div>
                <p className="text-gray-700">
                  We make no warranty that our services will meet your requirements, or that the services will be 
                  uninterrupted, timely, secure, or error-free, or that defects will be corrected.
                </p>
              </section>

              {/* Section 16 */}
              <section id="limitation" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">16. Limitation of Liability</h2>
                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 text-sm uppercase font-semibold">
                    IN NO EVENT SHALL SHOOTORDER BE LIABLE TO YOU OR ANY OTHER PERSON FOR ANY INDIRECT, INCIDENTAL, 
                    CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFIT OR GOODWILL, 
                    FOR ANY MATTER, WHETHER SUCH LIABILITY IS ASSERTED ON THE BASIS OF CONTRACT, TORT, BREACH OF WARRANTIES, 
                    OR OTHERWISE, EVEN IF SHOOTORDER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </div>
                <p className="text-gray-700">
                  Our maximum aggregate liability shall not exceed the total amount paid by you for the services in dispute.
                </p>
              </section>

              {/* Section 17 */}
              <section id="governing-law" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">17. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  The laws of India will govern this Agreement, without reference to rules governing choice of laws. 
                  Any action relating to this Agreement must be brought in the court located in Hyderabad, Telangana, India.
                </p>
              </section>

              {/* Section 18 */}
              <section id="termination" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">18. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your account immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-700 mb-4">
                  ShootOrder reserves the right to cancel your account any time with no money-back, 
                  should proper evidence exist that a customer was exceptionally arrogant, rude, or vulgar 
                  in communications with our staff.
                </p>
                <p className="text-gray-700">
                  Upon termination, we will provide you with any final reports and transfer ownership of any 
                  advertising accounts or assets that belong to you, subject to completion of all outstanding payments.
                </p>
              </section>

              {/* Section 19 */}
              <section id="changes" className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">19. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  Due to our evolving business and the changing nature of the industry, these terms of service may change. 
                  We will post the changes here, and your continued use of the service means you accept the changes we have made.
                </p>
                <p className="text-gray-700">
                  If you do not agree to the new terms, please stop using the service. 
                  We will update the &quot;Last Updated&quot; date when changes are made.
                </p>
              </section>

              {/* Section 20 */}
              <section id="contact">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">20. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> support@shootorder.com</p>
                    <p><strong>Legal Email:</strong> legal@shootorder.com</p>
                    <p><strong>Phone:</strong> +91 (555) 123-4567</p>
                    <p><strong>Support Tickets:</strong> <a href="https://www.shootorder.com/submitticket.php" className="text-[#9a0c28] underline">https://www.shootorder.com/submitticket.php</a></p>
                    <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  We aim to respond to all inquiries within 2 business days. For urgent matters, 
                  please call our main business line during regular business hours or submit a support ticket.
                </p>
              </section>

            </div>

            {/* Additional Legal Notice */}
            <div className="mt-12 p-6 bg-[#9a0c28] text-white rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
              <p className="text-sm opacity-90 mb-4">
                These terms and conditions constitute the entire agreement between you and ShootOrder concerning 
                the use of our services. This agreement becomes effective once you submit your order with us or open an account 
                with us for any services (shared hosting, reseller hosting, VPS, dedicated servers, digital marketing, etc.) 
                or open an affiliate account.
              </p>
              <p className="text-sm opacity-90">
                If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain 
                in full force and effect. By using ShootOrder.com you agree to the above Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}