import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Complete service categories matching header structure
const digitalMarketingServices = {
  title: "Digital Marketing",
  sections: [
    {
      // heading: "Owned Media",
      links: [
        { name: "SEO Optimization", href: "/seo" },
        { name: "Paid Advertising", href: "/google-ads" },
        // { name: "Brand Positioning", href: "/social-media-marketing" },
        { name: "Social Media Marketing", href: "/social-media-marketing" },
        //   { name: "GBP Management", href: "/gbp-management" },
      ],
    },
    {
      // heading: "Paid Media",
      links: [
        // { name: "Google Ads", href: "/google-ads" },
        // { name: "Meta Ads", href: "/meta-ads" },
      ],
    },
    {
      // heading: "Earned Media",
      links: [
        // { name: "Digital PR", href: "/digital-pr" },
        // { name: "Influencer Marketing", href: "/influencers-marketing" },
      ],
    },
  ],
};

const brandingServices = {
  title: "Branding",
  links: [
    { name: "Identity Development", href: "/branding/identity" },
    { name: "Brand Audit", href: "/branding/audit" },
    { name: "Messaging & Tone", href: "/branding/messaging" },
    { name: "Package & Design", href: "/branding/design" },
    { name: "Brand Campaigns", href: "/branding/campaigns" },
   
  ],
};

// const growthHackingServices = {
//   title: "Growth Hacking",
//   links: [
//     { name: "Landing Pages", href: "/landing-pages" },
//     { name: "On-site Engagement", href: "/On-site-engagement" },
//     { name: "Online Reputation Management", href: "/orm" },
//   ],
// };

// const marketingAutomationServices = {
//   title: "Marketing Automation",
//   links: [
//     { name: "Data Analytics & Dashboard", href: "/analytics" },
//     { name: "Smart Analysis", href: "/smart-analysis" },
//   ],
// };

const companyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Work Flow", href: "/about/work-flow/" },
  { name: "Case Studies", href: "/case-studies/" },
   { name: "Clients & Testimonials", href: "/about/clients/" },

];



const quickLinks = [
 
 
  { name: "Support", href: "/support/" },
  { name: "Contact Us", href: "/contact-us/" },
   { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-condition" },
];

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/shootorder" },
  { name: "Twitter", icon: FaXTwitter, href: "https://x.com/shootorder" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/shootorder/#" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/company/shootorder/" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4" style={{ maxWidth: "1280px" }}>
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Section - Company Info */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <Image
                  src="/images/logo/shootorder-logo.svg"
                  alt="ShootOrder"
                  width={200}
                  height={60}
                  className="mb-6"
                />
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Your trusted partner for comprehensive digital marketing,
                  branding, and growth solutions.
                </p>
              </div>

             

              {/* Social Links */}
              {/* <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:text-[#9a0c28] hover:border-[#9a0c28] transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div> */}

              {/* Partner Logos */}
              {/* <div className="flex items-center gap-6 flex-wrap">
                <Image
                  src="/images/logo/meta.png"
                  alt="Meta Partner"
                  width={100}
                  height={30}
                  className="hover:scale-105 transition-transform  !h-[90px]"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/logo/google.png"
                  alt="Google Partner"
                  width={90}
                  height={40}
                  className="hover:scale-105 transition-transform"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/logo/hubspot.png"
                  alt="HubSpot Partner"
                  width={100}
                  height={40}
                  className="hover:scale-105 transition-transform"
                  style={{ objectFit: "contain" }}
                />
              </div> */}
            </div>

            {/* Right Section - Links */}
            <div className="lg:col-span-8">
              {/* Mobile: Two columns, Tablet+: Four columns */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Column 1 - Digital Marketing */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-900">
                    Digital Marketing
                  </h3>
                  <div className="space-y-6">
                    {digitalMarketingServices.sections.map((section) => (
                      <div key={section.heading}>
                        <h4 className="font-bold text-gray-800 mb-3">
                          {section.heading}
                        </h4>
                        <ul className="space-y-2">
                          {section.links.map((link) => (
                            <li key={link.name}>
                              <Link
                                href={link.href}
                                className="text-gray-600 hover:text-[#9a0c28] transition-colors text-sm"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 - Branding & Growth */}
               
                 

                  {/* <h3 className="text-lg font-semibold mb-6 text-gray-900">
                    Growth Hacking
                  </h3> */}
                  {/* <ul className="space-y-3">
                    {growthHackingServices.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-[#9a0c28] transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul> */}
             

                {/* Column 3 - Marketing Automation & Company */}
                <div className="col-span-2 md:col-span-1">
                  {/* <h3 className="text-lg font-semibold mb-6 text-gray-900">
                    Marketing Automation
                  </h3> */}
                  {/* <ul className="space-y-3 mb-8">
                    {marketingAutomationServices.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-[#9a0c28] transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul> */}

                  <h3 className="text-lg font-semibold mb-6 text-gray-900">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-[#9a0c28] transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4 - Contact & Quick Links */}
                {/* <div className="col-span-2 md:col-span-1">
                  <h3 className="text-lg font-semibold mb-6 text-gray-900">
                    Get In Touch
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {contactLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-[#9a0c28] transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  
                 
                </div> */}
                  <div className="col-span-2 md:col-span-1">
                

                  <h3 className="text-lg font-semibold mb-6 text-gray-900">
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-[#9a0c28] transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <h3 className="text-lg font-semibold mb-6 text-gray-900">
                    Contact Us
                  </h3>
                   {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#9a0c28]" />
                  <a
                    href="tel:18552174637"
                    className="text-gray-700 hover:text-[#9a0c28] transition-colors"
                  >
                    1-855-217-4637
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#9a0c28]" />
                  <a
                    href="mailto:info@shootorder.com"
                    className="text-gray-700 hover:text-[#9a0c28] transition-colors"
                  >
                    info@shootorder.us
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#9a0c28] mt-1" />
                  <address className="not-italic text-gray-600">
                    21 State Street,
                    <br />
                    Waterbury, CT - 06702
                  </address>
                </div>
              </div>
                  </div>    
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4" style={{ maxWidth: "1280px" }}>
          <div className="py-6 text-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} ShootOrder. All rights reserved
              by Shootorder.us
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;