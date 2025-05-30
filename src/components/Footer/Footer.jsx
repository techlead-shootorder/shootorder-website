// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // Quick Links array for easy mapping
  const quickLinks = [
    { name: "Home", href: "/index.php" },
    { name: "All Services", href: "/services" },
    { name: "Company", href: "/company" },
    { name: "Contact Us", href: "/contact-us/" },
    { name: "Careers", href: "/careers/" },
    { name: "Enquiry", href: "/enquiry/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "ISMS Policy", href: "/isms-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  // Services organized for columns 2 and 3
  const servicesColumn1 = [
    { name: "SEO", href: "/seo/" },
    { name: "Performance Marketing", href: "/advertise/" },
    { name: "Social Media Marketing", href: "/social-media-marketing/" },
    { name: "Blog Marketing", href: "/blog-management/" },
    { name: "Influencer Marketing", href: "/influencers-marketing/" },
    { name: "Email Marketing", href: "/email-marketing/" },
  ];

  const servicesColumn2 = [
    { name: "Website & Landing Pages", href: "/web-design/" },
    { name: "Online Reputation Management", href: "/orm/" },
    { name: "On-Site Engagement - PushFOMO", href: "https://www.pushfomo.com", external: true },
    { name: "Marketing Automation", href: "/marketing-automation/" },
    { name: "Data Analytics & Dashboards", href: "/analytics/" },
  ];

  // Company Profile & Resources combined
  const companyResources = [
    { name: "About Us", href: "/about-us/" },
    { name: "Work Flow", href: "/about/work-flow/" },
    { name: "Clients & Testimonials", href: "/about/clients/" },
    { name: "Case Studies", href: "/case-studies/" },
    { name: "Blog", href: "/blogs/", external: true },
    { name: "Departments", href: "/submitticket/" },
    { name: "Training", href: "/training/" },
  ];

  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="!max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Column 1: Company Profile & Resources Combined */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company & Resources</h3>
            <ul className="space-y-2">
              {companyResources.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-gray-700 hover:text-[#F94839] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services Part 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Attract Services</h3>
            <ul className="space-y-2">
              {servicesColumn1.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-700 hover:text-[#F94839] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Part 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Engage & Delight Services</h3>
            <ul className="space-y-2">
              {servicesColumn2.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    {...(service.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-gray-700 hover:text-[#F94839] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-[#F94839] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Logo, Contact Info & Social Links */}
          <div className="flex flex-col items-end justify-start">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/images/logo/shootorder-logo.svg"
                alt="ShootOrder Logo"
                width={200}
                height={70}
                className="mb-2"
              />
            </div>

            {/* Contact Information */}
            <div className="text-right mb-6">
              <p className="font-medium text-gray-800">+91-630-392-1512</p>
              <p className="text-gray-800">info@shootorder.com</p>
              <p className="text-gray-800 mt-2 text-sm">
                Ivent It Solutions Pvt. Ltd. (ShootOrder)<br />
                Krishe Sapphire MSR Block, 1st Floor,<br />
                SY, 88, Hitech City Main Rd, Madhapur,<br />
                Hyderabad, Telangana 500081
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-end mb-6">
              <Link
                href="https://youtube.com"
                className="text-gray-700 hover:text-[#F94839] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-700 hover:text-[#F94839] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-700 hover:text-[#F94839] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-700 hover:text-[#F94839] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </Link>
            </div>

            {/* Partner Badges */}
            <div className="space-y-4 w-full">
              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                <div className="mr-3">
                  <img
                    src="/images/about-us/meta.png"
                    alt="Meta Business Partner"
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-600">
                  Meta Business Partner
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                <div className="mr-3">
                  <img
                    src="/images/about-us/google.png"
                    alt="Google Partner"
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-600">
                  Google Partner
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                <div className="mr-3">
                  <img
                    src="/images/about-us/hubspot.png"
                    alt="HubSpot Partner"
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-600">
                  HubSpot Partner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Copyright © 2025 by ShootOrder Ivent It Solutions Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;