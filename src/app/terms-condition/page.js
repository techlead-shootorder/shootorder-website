import Link from 'next/link';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#9a0c28] to-[#7a0a20] text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
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

            {/* Important Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Notice</h3>
              <p className="text-blue-700 text-sm mb-2">
                <strong>Please Note:</strong> Ivent IT Solutions Private Limited is the parent company of shootorder.com.
                Services are provided by Ivent IT Solutions Private Limited under the shootorder.com brand name.
              </p>
              <p className='text-blue-700 text-sm'>
                Please read this page carefully prior to ordering services from us, and make sure you understand what it says.
                It&apos;s a binding contract between shootorder.com and you. If you have any questions about what you see on this page,
                please feel free to contact us at <a href="mailto:support@shootorder.com" className="text-blue-800 underline">support@shootorder.com</a>.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">

              {/* The Services We Provide */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">The Services We Provide</h2>
                <p className="text-gray-700 mb-4">
                  In exchange for the fees you pay in advance, we will host your website on one or more of our servers,
                  so long as you abide by the terms and conditions that are set out on this page, and in any other agreements
                  that relate to the services we may provide to you. We will provide the services according to the specifications
                  listed for the hosting package you select during the signup process.
                </p>
                <p className="text-gray-700">
                  For clarity, on this page, the term &quot;services&quot; refers to the web hosting services that we will provide to you and,
                  if you are an Affiliate, the services we provide to you in connection with that progam. The term &quot;Shootorder&quot; or &quot;us&quot;
                  or &quot;we&quot; refers to Shootorder and/or Ivent IT Solutions Private Limited.
                </p>
              </section>

              {/* Permission to Host Your Content */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Permission to Host Your Content</h2>
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

              {/* When the Services Will be Available */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">When the Services Will be Available</h2>
                <p className="text-gray-700 mb-4">
                  We will attempt to provide the services 24 hours a day, 7 days a week for as long as you have paid for them.
                  Sometimes, however, for a number of reasons, the services may be unavailable to you.
                </p>
                <p className="text-gray-700 mb-4">
                  You must recognize and acknowledge that due to the nature of web hosting technology, occasional unavailability
                  of the services cannot be avoided. Sometimes there are equipment malfunctions. At other times we undertake
                  periodic maintenance procedures or repairs. Still other times, there are causes beyond our control like power failures,
                  interruption or failure of telecommunication or digital transmission links, hostile network attacks, network traffic
                  and other occurrences.
                </p>
                <p className="text-gray-700">
                  We have not promised to provide you with uninterrupted service.
                </p>
              </section>

              {/* Free Technical Support */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Free Technical Support</h2>
                <p className="text-gray-700 mb-4">
                  Shootorder&apos;s Free Technical Support is limited to issues that are directly related to your Web Hosting Account.
                  Shootorder does not provide website maintenance services in respect of any Hosted Website.
                </p>
                <p className="text-gray-700 mb-4">
                  Without limiting this exclusion, you also agree that Shootorder accepts no responsibility for any deficiency
                  or inaccuracy in any of your Hosted Website that is attributable to defects in your website and/or database
                  caused due to errors or mistakes in development/coding/programming.
                </p>
                <p className="text-gray-700 mb-4">
                  You further acknowledge that Shootorder&apos;s Technical Support does not include the maintenance of other direct or
                  indirect issues/problems (but not limited to) such as HTML coding, Website Programming, Content/Data Migration,
                  Uploading or Downloading of files for you, troubleshooting your website and/or database, adding new files to
                  your website and configuring scripts in any way whatsoever. For this there will be an additional cost which is
                  not covered within your web hosting plan/package.
                </p>
                <p className="text-gray-700 mb-4">
                  During National Holidays and during some occasional Sundays Our Technical Support will be limited. During this time,
                  we will be still able to provide you with Basic Non-Technical Support via Phone and Live Chat. There will be lesser
                  staffs attending to your issues so we hope you would excuse the possible delay on our support only during that day.
                </p>
                <p className="text-gray-700">
                  For Urgent Queries or Technical Support you can continue to submit tickets via our Shootorder Support system at
                  <a href="https://www.shootorder.com/submitticket.php" className="text-[#9a0c28] underline ml-1">
                    https://www.shootorder.com/submitticket.php
                  </a>
                </p>
              </section>

              {/* Personal Information */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Personal Information</h2>
                <p className="text-gray-700 mb-4">
                  When you place an order for our services, your personal information, including your credit card information,
                  is transmitted via the use of Secure Socket Layer technology, the industry standard for encrypting sensitive information.
                </p>
                <p className="text-gray-700">
                  We take your privacy very seriously, and as such, will not sell your personal information to third party
                  (other than a company that may purchase Shootorder), and will take reasonable steps to keep it from being
                  disclosed to any third party. Read more in our Privacy Policy.
                </p>
              </section>

              {/* Cancellation and Refund Policy */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Cancellation and Refund Policy</h2>
                <p className="text-gray-700 mb-4">
                  As we explain in this paragraph, we offer you a money-back guarantee on all shared hosting plans if you cancel
                  with us during the first 100 days after signup. For all reseller hosting plans we offer you a money-back guarantee
                  within the first 30 days after signup.
                </p>
                <p className="text-gray-700 mb-4">
                  The only way to cancel your account is by submitting a ticket at Shootorder.com with a valid detailed reason
                  as to why you are cancelling your service. We are the sole arbiter as to if your reason is a valid reason and
                  if all possible steps were taken on your side and on ours to correct the situation causing the interest to cancel.
                </p>
                <p className="text-gray-700 mb-4">
                  Please Note that you cannot request and/or receive a refund in case if you have misunderstood a feature that is
                  displayed on our website. It is your sole responsibility to clarify and confirm with us before you make a purchase.
                  All Refunds are subject to verification process by our billing department and will take up to 30 days for return of payment.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-red-700 font-semibold mb-2">
                    THERE IS NO MONEY BACK GUARANTEE IF ANYONE VIOLATES OUR &quot;ACCEPTABLE USE POLICY&quot;.
                  </p>
                  <p className="text-red-700 font-semibold">
                    ALSO PLEASE NOTE THERE IS NO MONEY BACK GUARANTEE FOR: Any Setup Fees, Any Bank Transfer Charges,
                    Domain Name Renewal/Registration/Transfer, Shared Hosting Renewals, Reseller Hosting Renewals,
                    Upgrades to Hosting Service, SSL Certificates, Email Newsletter Marketing Plans, Dedicated Servers and VPS plans.
                  </p>
                </div>
                <p className="text-gray-700">
                  If you cancel your account after the money-back period, or after your account is renewed then unfortunately
                  we will not be able to issue any refunds. Shootorder also reserves the right to cancel your account any time
                  with no-money-back, should an event occur in which proper evidence exists that a customer was exceptionally
                  arrogant, rude or vulgar in communications with our staff.
                </p>
              </section>

              {/* Automatic Renewal */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Automatic Renewal</h2>
                <p className="text-gray-700 mb-4">
                  When you sign up, your Shootorder account will be enabled with autorenewal, which means that when your renewal
                  date arrives, your hosting plan and domain will be renewed. When it is time for renewal, the credit card you
                  have on file with us will also be charged.
                </p>
                <p className="text-gray-700 mb-4">
                  If you wish to not have this happen, and you would not like to renew your account, you must cancel 14 days prior
                  to your renewal date. If you fail to cancel 14 days prior to renewal, your account will be renewed for a new term,
                  so please be sure to inform us at support@shootorder.com if you do not want to renew. The renewal fee will become
                  non-refundable as soon as it is charged.
                </p>
                <p className="text-gray-700">
                  If more than 14 days pass from the date on which any invoice for the hosting services is issued to you and we have
                  not received payment in full, we will suspend your account, which means that your data and website will not be available.
                  If in the following 100 days you pay all amounts due, bringing your account up to date, we will take your account out
                  of suspension and the data will be available again. If, however, 100 days pass from the date on which your account is
                  suspended and you have not made payment in full, Shootorder shall have the right to delete all data you have uploaded
                  to the servers. You hereby acknowledge that this is Shootorder&apos;s policy when it comes to data retention, and waive all
                  rights in and to your data in these situations.
                </p>
              </section>

              {/* Multiple Currency Payment Options */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Multiple Currency Payment Options</h2>
                <p className="text-gray-700 mb-4">
                  All prices of products and services displayed on the Shootorder&apos;s website are based on Indian Rupees (₹ INR).
                  To change to your preferred currency, simply click the appropriate currency on the drop-down menu at the top right
                  of any page. On clicking one of the currencies, the page you are on currently will refresh with prices displayed
                  in your new preferred currency.
                </p>
                <p className="text-gray-700 mb-4">
                  All prices in the website will be displayed in your preferred currency until you change it again. Please note however
                  that the prices shown in Indian Rupees (₹ INR) are fixed and all other currencies do not follow currency exchange rates.
                  Shootorder does not use any online forex currency updates to use in its currency price calculations.
                </p>
                <p className="text-gray-700 mb-4">
                  You will find currency exchange price differences in our products the moment you change between currencies.
                  All prices on our website are worked out manually for each currency price options. You may choose to buy our
                  products and services using any of the currency options displayed in the currency drop-down menu of our website.
                </p>
                <p className="text-gray-700">
                  Once an order is placed and you find currency exchange price differences, we cannot give you a partial refund
                  of your order value based on your currency&apos;s exchange rate.
                </p>
              </section>

              {/* Acceptable Use Policy */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Acceptable Use Policy</h2>
                <p className="text-gray-700 mb-4">
                  Shootorder strives to maintain a high-level of service, and a lot of customers depend on our high standards of quality.
                  The Acceptable Use Policy is available in order to provide a clear understanding of the rules, regulations and restrictions
                  regarding the use of Shootorder&apos;s services. <strong>PLEASE ABIDE BY IT STRICTLY.</strong> By using our hosting services,
                  you agree to abide by the Acceptable Use Policy.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">1. Prohibited Content and Services</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      We will not provide services for any unacceptable or inappropriate material as determined by Shootorder in its sole discretion, including but not limited to:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                        <li>Topsites, IRC Scripts/Bots, Proxy Scripts/Anonymizers, Pirated Software/Warez</li>
                        <li>Image Hosting Scripts (similar to Photobucket or Tinypic), AutoSurf/PTC/PTS/PPC sites</li>
                        <li>IP Scanners, Bruteforce Programs/Scripts/Applications, Mail Bombers/Spam Scripts</li>
                        <li>Banner-Ad services (commercial banner ad rotation), File Dump/Mirror Scripts (similar to rapidshare)</li>
                        <li>Commercial Audio Streaming (more than one or two streams), Escrow/Bank Debentures</li>
                        <li>High-Yield Interest Programs (HYIP) or Related Sites, Investment Sites (FOREX, E-Gold Exchange, Second Life/Linden Exchange, Ponzi, MLM/Pyramid Scheme)</li>
                        <li>Sale of any controlled substance without prior proof of appropriate permit(s)</li>
                        <li>Prime Banks Programs, Lottery Sites, MUDs/RPGs/PPBGs</li>
                        <li>Hateful/Racist/Harassment oriented sites, Hacker focused sites/archives/programs</li>
                        <li>Sites promoting illegal activities, Forums and/or websites that distribute or link to warez/pirated/illegal content</li>
                        <li>Bank Debentures/Bank Debenture Trading Programs, Fraudulent Sites (Including, but not limited to sites listed at aa419.org & escrow-fraud.com)</li>
                        <li>Mailer Pro Hacking, which includes, for example penetrating or attempting to access, without authorization, another computer or network</li>
                        <li>Port scans, stealth scans, and fraudulent credit card &quot;phishing&quot; techniques</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">2-23. Additional Restrictions</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                        <li>No hosting of files or data that infringes on another&apos;s copyright or intellectual property rights</li>
                        <li>No spamming or sending of bulk unsolicited email</li>
                        <li>No uploading or linking to content that violates another&apos;s right of publicity or privacy</li>
                        <li>No distributing hate speech, obscene, abusing, libellous and defamatory content</li>
                        <li>No hosting, storing, or distributing child pornography or pornographic material</li>
                        <li>No hosting large amounts of data not specifically tied to your hosting account</li>
                        <li>No executing long-running, stand-alone, unattended server-side processes, bots or daemons</li>
                        <li>No running web spiders, indexers, or IRC network interfaces</li>
                        <li>No running P2P clients, trackers, software, or participating in file-sharing networks</li>
                        <li>No running gaming servers or using server as backup/storage device</li>
                        <li>No storing over 100,000 files on an account</li>
                        <li>No constantly creating and deleting large numbers of files</li>
                        <li>No using system resources over 8% for longer than 180 seconds in any consecutive 6 hour period</li>
                        <li>No running MySQL queries longer than 15 seconds</li>
                        <li>No using excessive resources that result in damage or degradation to server performance</li>
                        <li>No storing large numbers of media files (audio, video, etc.)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mt-4 mb-4">
                  Shootorder may monitor User&apos;s use of bandwidth, disk usage and other resources. Shootorder, in its sole discretion,
                  shall have the right to take any corrective action if User&apos;s utilization exceeds normal usage. Such corrective action
                  may include assessment of additional charges, disconnection, removal of content, or termination of account.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-red-700 font-semibold">
                    Your violation of this Acceptable Use Policy may result in the suspension or immediate termination of your account
                    or other services WITHOUT ANY PRIOR NOTICE.
                  </p>
                </div>

                <p className="text-gray-700 mt-4">
                  Shootorder requests that anyone with information about a violation of this Acceptable Use Policy, or of Shootorder&apos;s
                  Terms of Service, report it by sending an email to support@shootorder.com
                </p>
              </section>

              {/* Disproportionate loads placed on the server */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Disproportionate loads placed on the server</h2>
                <p className="text-gray-700 mb-4">
                  While our shared services are suitable for personal or small business customers, there comes a time for some websites
                  when they are better suited for a larger plan, which allows for more dedicated CPU and memory resources.
                </p>
                <p className="text-gray-700 mb-4">
                  We reserve the right, in our sole discretion, to discontinue service to any customer with a website or other hosted
                  data that takes up more than 8% of the resources of the server&apos;s CPU for longer than 180 seconds. This means that if
                  your website is found to be utilizing more than 8% of the CPU and/or memory of our server, we reserve the right to
                  take your site offline.
                </p>
                <p className="text-gray-700">
                  If this becomes necessary, you can either upgrade your hosting package, or request a pro-rated refund of the amounts
                  you have paid in advance for the services. Due to the severity of this, and our ability to act quickly to correct these
                  situations to avoid server issues, we will do everything reasonably feasible to provide you with a warning prior to
                  taking your site offline, but we accept no obligation to do so.
                </p>
              </section>

              {/* These Terms of Service May Change */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">These Terms of Service May Change</h2>
                <p className="text-gray-700">
                  Due to our evolving business, and the changing nature of the web hosting industry, these terms of service may change.
                  We will post the changes here, and your continued use of the service means you accept the changes we have made.
                </p>
              </section>

              {/* DMCA Copyright Infringement Information */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">DMCA Copyright Infringement Information</h2>
                <p className="text-gray-700 mb-4">
                  In accordance with the Digital Millennium Copyright Act, we have adopted a policy to suspend or terminate the accounts
                  of website owners found to be in violation of copyright. We respect the intellectual property of others, and we ask you
                  to do the same. We may, in appropriate circumstances and at our discretion, disable and/or terminate the accounts of users
                  who may be repeat infringers.
                </p>
                <p className="text-gray-700 mb-4">
                  If you believe that your work has been copied in a way that constitutes copyright infringement, or your intellectual
                  property rights have been otherwise violated, please provide our Abuse Desk with the following information:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ol className="text-gray-700 text-sm space-y-2 list-decimal list-inside">
                    <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;</li>
                    <li>A description of the copyrighted work or other intellectual property that you claim has been infringed;</li>
                    <li>A description of where the material that you claim is infringing is located on the site;</li>
                    <li>Your address, telephone number, and email address;</li>
                    <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                    <li>A statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner&apos;s behalf.</li>
                  </ol>
                </div>
                <p className="text-gray-700">
                  Our Abuse Desk can be reached by email at support@shootorder.com
                </p>
              </section>

              {/* Indemnification */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Indemnification</h2>
                <p className="text-gray-700">
                  If Shootorder is sued or threatened with a lawsuit from a third party because of something you do with the services,
                  or as an affiliate you agree to pick up the tab if Shootorder is found liable or pays to settle the dispute.
                  In legal terms, this is called &quot;indemnification&quot; Not only do you agree to reimburse Shootorder for what it pays to
                  satisfy a judgment or settle a case, you also agree to pay Shootorder&apos;s reasonable attorney&apos;s fees and all other costs
                  Shootorder incurs in defending itself.
                </p>
              </section>

              {/* Disclaimer of Warranties */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Disclaimer of Warranties</h2>
                <p className="text-gray-700 mb-4">
                  You may have noticed that up to this point these terms of service have been kind of easy to read and understand.
                  But our lawyers tell us that this section, dealing in the disclaimer of warranties, has to retain its legalese style.
                  Sorry about that.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 text-sm font-semibold uppercase">
                    SHOOTORDER EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
                    THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. SERVICES ARE PROVIDED
                    ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. SHOOTORDER MAKES NO WARRANTY THAT ITS SERVICES WILL MEET YOUR REQUIREMENTS,
                    OR THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE, OR THAT DEFECTS WILL BE CORRECTED.
                    SHOOTORDER DOES NOT WARRANT, NOR MAKE ANY REPRESENTATIONS REGARDING THE USE, OR RESULTS OF, ANY OF THE SERVICES IT PROVIDES,
                    IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
                  </p>
                </div>
                <p className="text-gray-700">
                  Some jurisdictions do not allow the disclaimer of implied warranties, in which event that foregoing disclaimer may not apply to you.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Here is another section that has to retain its legalese. Simply stated, what this section is saying is that if something goes wrong,
                  Shootorder cannot be held liable for it.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 text-sm font-semibold uppercase">
                    IN NO EVENT SHALL SHOOTORDER BE LIABLE TO YOU OR ANY OTHER PERSON FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL,
                    EXEMPLARY OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFIT OR GOODWILL, FOR ANY MATTER, WHETHER SUCH LIABILITY IS ASSERTED
                    ON THE BASIS OF CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF WARRANTIES, EITHER EXPRESS OR IMPLIED, ANY BREACH OF THIS
                    AGREEMENT OR ITS INCORPORATED AGREEMENTS AND POLICIES, YOUR INABILITY TO USE THE SOFTWARE OR SERVICES, YOUR LOSS OF DATA
                    OR FILES OR DAMAGES RELATED TO DATABASE CORRUPTION OR DELETION OF WEBSITE CONTENTS OR OTHERWISE, EVEN IF SHOOTORDER HAS
                    BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </div>
                <p className="text-gray-700">
                  Some states may not allow such a broad exclusion or limitation on liability for damages as contained in these terms of services.
                  In those states, our liability is limited to the full extent permitted by law. You agree that in no event shall our maximum
                  aggregate liability exceed the total amount paid by you for the services in dispute purchased from us, or, in the event of
                  liability of Shootorder due to your enrollment in the affiliate program.
                </p>
              </section>

              {/* Governing Law and Choice of Form */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Governing Law and Choice of Form</h2>
                <p className="text-gray-700">
                  The laws of India will govern this Agreement, without reference to rules governing choice of laws.
                  Any action relating to this Agreement must be brought in the court located in Hyderabad, Telangana, INDIA.
                </p>
              </section>

              {/* Unlimited Resources FAQ */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">What do you mean by &quot;Unlimited Disk Space and Unlimited Data Transfer&quot;?</h2>
                <p className="text-gray-700 mb-4">
                  There are no set limits on the disk space or data transfer (bandwidth) that we provide in plans marked &quot;unlimited&quot;.
                  We want you to have the resources you need to build a great online presence.
                </p>
                <p className="text-gray-700 mb-4">
                  Still, we do need to be sure that we&apos;re providing all of our customers with optimum service. As such, we do require
                  all customers to be fully compliant with our Terms of Service and utilize disk space and bandwidth related to the
                  normal operation of a personal or small business website.
                </p>
                <p className="text-gray-700 mb-4">
                  While it is rare, we may need to put constraints on accounts that are adversely affecting other customers or otherwise
                  utilizing or abusing resources beyond what would be expected of a personal or small business website.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>What will happen to accounts that don&apos;t comply with the Terms of Service or go beyond normal usage?</strong>
                  Through our NMC (Network Monitoring Center), we maintain a variety of human and automated controls to monitor customer
                  and server activity. If the NMC identifies an account that is not in compliance with our Terms or that has the potential
                  to negatively impact the performance of our systems, we may need to temporarily suspend that account. Of course, we will
                  notify the administrative contact for the account and work with that customer to resolve the issue as quickly as possible.
                </p>
                <p className="text-gray-700">
                  The most common situations involve customers who use their accounts for storage of files (particularly multimedia files)
                  that are not linked off of their websites. One thing to remember is that Shootorder provides the disk space and bandwidth
                  required to operate a personal or small business site. Our services may not be used to store or archive electronic files
                  that are not available through the website.
                </p>
              </section>

              {/* What is "normal" usage? */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">What is &quot;normal&quot; usage?</h2>
                <p className="text-gray-700 mb-4">
                  Normal usage means that you operate a personal or small business website that utilizes resources in a manner similar
                  to most of our other customers. For example, the system requirements of large corporations are not equal to those of
                  small businesses and their resource requirements would not be considered normal for our architecture.
                </p>
                <p className="text-gray-700">
                  Another example would be the storage of large numbers of video or audio files that may be associated with a site,
                  but require more resources to support than a normal personal or business website would.
                </p>
              </section>

              {/* Why are the normal usage guidelines in place? */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Why are the normal usage guidelines in place?</h2>
                <p className="text-gray-700 mb-4">
                  Shootorder offers hosting through a shared environment, therefore, each site has the ability to impact the performance
                  of thousands of other sites. While our pooled architecture minimizes this risk in comparison to the more common
                  single-server design, we rarely experience disruptions that result from customer activity.
                </p>
                <p className="text-gray-700">
                  This is an unusual occurrence, but one which we manage carefully to protect our users from service degradations.
                  Still, we want our customers to understand that there are guidelines in place before they purchase our services.
                </p>
              </section>

              {/* Are there any usage guidelines for Reseller Hosting? */}
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">Are there any usage guidelines for Reseller Hosting?</h2>
                <p className="text-gray-700">
                  Unlimited Domain Hosting in our reseller plans has its limits in the number of domains that can be hosted, wherein
                  the limit is at Shootorder&apos;s sole discretion. We may need to put a limit on the number of domains in a reseller account
                  that are adversely affecting our servers performance.
                </p>
              </section>

              {/* When These Terms Take Effect */}
              <section>
                <h2 className="text-2xl font-bold text-[#9a0c28] mb-4">When These Terms Take Effect</h2>
                <p className="text-gray-700 mb-4">
                  This agreement becomes effective once you submit your order with us or open an account with us for web hosting services
                  of any kind (shared, reseller, vps, dedicated, etc.) or open an affiliate account. If you are an existing customer,
                  and you do not agree with the terms herein, please cancel your account.
                </p>
                <p className="text-gray-700 mb-4">
                  Otherwise, if you sign up for or continue to use the services, you agree to what is written here. If you have any
                  questions regarding these terms of service, feel free to call us for clarification.
                </p>
                <p className="text-gray-700 font-semibold">
                  By using Shootorder.com you agree to the above Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
