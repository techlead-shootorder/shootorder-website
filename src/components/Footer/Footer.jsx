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
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/why-it-works"
                  className="text-gray-700 hover:text-red-500"
                >
                  Why It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/why-shootorder"
                  className="text-gray-700 hover:text-red-500"
                >
                  Why Shootorder
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-700 hover:text-red-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-red-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-6">
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">Software Engineer</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/full-stack"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Full Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/java"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Python
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dotnet"
                    className="text-gray-700 hover:text-red-500"
                  >
                    .Net
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flutter"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Flutter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react"
                    className="text-gray-700 hover:text-red-500"
                  >
                    React
                  </Link>
                </li>
                <li>
                  <Link href="/ai" className="text-gray-700 hover:text-red-500">
                    AI
                  </Link>
                </li>
                <li>
                  <Link href="/ml" className="text-gray-700 hover:text-red-500">
                    ML
                  </Link>
                </li>
                <li>
                  <Link
                    href="/backend"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Backend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/laravel"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Laravel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/node"
                    className="text-gray-700 hover:text-red-500"
                  >
                    Node
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
                <Link href="/blog" className="text-gray-700 hover:text-red-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/success-story"
                  className="text-gray-700 hover:text-red-500"
                >
                  Success Story
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-in-recruitment"
                  className="text-gray-700 hover:text-red-500"
                >
                  AI in Recruitment
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base"
                  className="text-gray-700 hover:text-red-500"
                >
                  Knowledge Base
                </Link>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 mt-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Software Engineer</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/data-scientist"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Data Scientist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/data-analyst"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Data Analyst
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/network-engineer"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Network Engineer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mean"
                      className="text-gray-700 hover:text-red-500"
                    >
                      MEAN
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/salesforce"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Salesforce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/qa"
                      className="text-gray-700 hover:text-red-500"
                    >
                      QA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mern"
                      className="text-gray-700 hover:text-red-500"
                    >
                      MERN
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">App Developer</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/ios"
                      className="text-gray-700 hover:text-red-500"
                    >
                      iOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/android"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Android
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/react-native"
                      className="text-gray-700 hover:text-red-500"
                    >
                      React Native
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* For Talent Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Talent</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/find-a-job"
                  className="text-gray-700 hover:text-red-500"
                >
                  Find a Job
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base"
                  className="text-gray-700 hover:text-red-500"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-700 hover:text-red-500">
                  FAQ
                </Link>
              </li>
            </ul>

            {/* Marketers Section */}
            <h3 className="font-bold text-lg mt-8 mb-4">Marketers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/seo" className="text-gray-700 hover:text-red-500">
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/programmatic"
                  className="text-gray-700 hover:text-red-500"
                >
                  Programmatic
                </Link>
              </li>
              <li>
                <Link
                  href="/sem-ppc"
                  className="text-gray-700 hover:text-red-500"
                >
                  SEM & PPC
                </Link>
              </li>
            </ul>

            {/* Designer Section */}
            <h3 className="font-bold text-lg mt-6 mb-4">Designer</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/web-designer"
                  className="text-gray-700 hover:text-red-500"
                >
                  Web Designer
                </Link>
              </li>
              <li>
                <Link
                  href="/ui-ux-designer"
                  className="text-gray-700 hover:text-red-500"
                >
                  UI/UX Designer
                </Link>
              </li>
              <li>
                <Link
                  href="/graphic-designer"
                  className="text-gray-700 hover:text-red-500"
                >
                  Graphic Designer
                </Link>
              </li>
            </ul>
          </div>

          {/* Software Engineer and other tech roles */}
          

          {/* More Technical Roles */}
          <div className="">
            <div className="">
              <div>
                <h3 className="font-bold text-lg mb-4">Web Developer</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/shopify"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Shopify
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/php"
                      className="text-gray-700 hover:text-red-500"
                    >
                      PHP
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wordpress"
                      className="text-gray-700 hover:text-red-500"
                    >
                      WordPress
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/javascript"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Javascript
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vuejs"
                      className="text-gray-700 hover:text-red-500"
                    >
                      VueJS
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">IT Staffing</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/web-designer-staffing"
                      className="text-gray-700 hover:text-red-500"
                    >
                      Web Designer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/it-staffing-engineer"
                      className="text-gray-700 hover:text-red-500"
                    >
                      IT Staffing Engineer
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
