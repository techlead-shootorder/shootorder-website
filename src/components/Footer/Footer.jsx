// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4 ">
      <div className="!max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {/* About Us Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company Profile</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about/"
                  className="text-gray-700 hover:text-red-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/work-flow/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Work Flow
                </Link>
              </li>
              <li>
                <Link
                  href="/about/clients/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Clients & Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-6">
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">Attract Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/seo/"
                    className="text-gray-700 hover:text-red-500"
                  >
                    SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/advertise/"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social-media-marketing/"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog-management/"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Blog Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/influencers-marketing/"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Influencer Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/email-marketing/"
                    className="text-gray-700 hover:text-red-500"
                  >
                    eMail Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.shootorder.com/blog/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/submitticket/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/training/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Training
                </Link>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 mt-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Engage Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/web-design/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Website & Landing Pages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orm/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Online Reputation Management (ORM)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.pushfomo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-500"
                    >
                      On-Site Engagement - PushFOMO
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Delight Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/marketing-automation/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Marketing Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/analytics/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Data Analytics & Dashboards
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* For Talent Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact-us/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/enquiry/" className="text-gray-700 hover:text-red-500">
                  Enquiry
                </Link>
              </li>
            </ul>

            {/* Quick Links Section */}
            <h3 className="font-bold text-lg mt-8 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/index.php" className="text-gray-700 hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-red-500"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-gray-700 hover:text-red-500"
                >
                  Company
                </Link>
              </li>
            </ul>

            {/* Additional Services */}
            <h3 className="font-bold text-lg mt-6 mb-4">More Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/seo/"
                  className="text-gray-700 hover:text-red-500"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/web-design/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media-marketing/"
                  className="text-gray-700 hover:text-red-500"
                >
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Software Engineer and other tech roles */}
          

          {/* More Technical Roles */}
          <div className="">
            <div className="">
              <div>
                <h3 className="font-bold text-lg mb-4">Marketing Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/advertise/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Performance Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-management/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Blog Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/influencers-marketing/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Influencer Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/email-marketing/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Email Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orm/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      ORM Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Business Solutions</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/marketing-automation/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Marketing Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/analytics/"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Data Analytics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logo and Contact Info */}
          </div>
          <div className=" flex flex-col items-end justify-start">
            <div className="mb-4">
              <Image
                src="/images/logo/shootorder.webp"
                alt="ShootOrder Logo"
                width={200}
                height={70}
                className="mb-2"
              />
              <p className="text-gray-500 text-sm text-right">
                Digital Marketing Agency
              </p>
            </div>

            <div className="text-right mb-6">
              <p className="font-medium text-gray-800">+91-630-392-1512</p>
              <p className="text-gray-800">info@shootorder.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-end mb-6">
              <Link
                href="https://youtube.com"
                className="text-gray-700 hover:text-red-500"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-700 hover:text-red-500"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-700 hover:text-red-500"
              >
                <FaLinkedin  size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-700 hover:text-red-500"
              >
                <FaXTwitter  size={20} />
              </Link>
            </div>

            {/* LinkedIn Stats */}
            <div className="space-y-4 w-full">
              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                <div className="mr-3">
                  <FaLinkedin  className="text-[#0A66C2]" size={28} />
                </div>
               
                  <p className="font-bold">1 M+</p>
                  <p className="text-xs text-gray-600">Followers</p>
                
              </div>

              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                <div className="mr-3">
                  <FaLinkedin  className="text-[#0A66C2]" size={28} />
                </div>
                <div className="flex items-center">
                  <p className="font-bold mr-2">4.1</p>
                  <span className="text-yellow-500">★</span>
                  <p className="text-xs text-gray-600 ml-3">365 reviews</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                <div className="mr-3">
                  <FaLinkedin  className="text-[#0A66C2]" size={28} />
                </div>
                <div className="flex items-center">
                  <p className="font-bold mr-2">4.1</p>
                  <span className="text-yellow-500">★</span>
                  <p className="text-xs text-gray-600 ml-3">365 reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Web Developer and IT Staffing columns */}
          
        </div>

        {/* Copyright and Policies */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Copyright © 2025 by ShootOrder Ivent It Solutions Pvt Ltd
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/privacy-policy"
              className="text-gray-700 hover:text-red-500"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/isms-policy"
              className="text-gray-700 hover:text-red-500"
            >
              ISMS Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;