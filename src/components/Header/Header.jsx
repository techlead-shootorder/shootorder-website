"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import Link from "next/link";
import { Button } from "../ui/button";
import gsap from "gsap";

// Service categories for mega menu
const serviceCategories = [
  {
    title: "Attract",
    links: [
      { name: "SEO", href: "/seo" },
      { name: "Performance Marketing", href: "/advertise/" },
      { name: "Social Media Marketing", href: "/social-media-marketing/" },
      { name: "Blog Marketing", href: "/blog-management/" },
      { name: "Influencer Marketing", href: "/influencers-marketing/" },
      { name: "eMail Marketing", href: "/email-marketing/" },
    ],
  },
  {
    title: "Engage",
    links: [
      { name: "Website & Landing Pages", href: "/web-design/" },
      { name: "Online Reputation Management (ORM)", href: "/orm/" },
      {
        name: "On-Site Engagement - PushFOMO",
        href: "https://www.pushfomo.com",
        external: true,
      },
    ],
  },
  {
    title: "Delight",
    links: [
      { name: "Marketing Automation", href: "/marketing-automation/" },
      { name: "Data Analytics & Dashboards", href: "/analytics/" },
    ],
  },
];

// Company categories for mega menu
const companyCategories = [
  {
    title: "Company Profile",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Work Flow", href: "/about/work-flow/" },
      { name: "Clients & Testimonials", href: "/about/clients/" },
      { name: "Case Studies", href: "/case-studies/" },
    ],
  },
  {
    title: "Join Us?",
    links: [
      { name: "Careers", href: "/careers/" },
      { name: "Training", href: "/training/" },
    ],
  },
];

// Contact categories for mega menu
const contactCategories = [
  // {
  //   title: "Useful Links",
  //   links: [
  //     { name: "Departments", href: "/submitticket/" },
  //     { name: "Blog", href: "/blogs", external: true },
  //   ],
  // },
  {
    title: "Connect",
    links: [
      { name: "Contact Us", href: "/contact-us/" },
      { name: "Careers", href: "/careers/" },
      { name: "Enquiry", href: "/enquiry/" },
    ],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    hasMegaMenu: true,
    menuType: "services",
  },
  { name: "Company", href: "/company", hasMegaMenu: true, menuType: "company" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact", hasMegaMenu: true, menuType: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const megaMenuRef = useRef(null);
  const navItemRefs = useRef({});
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    // Event listeners for clicks outside the mega menu
    const handleClickOutside = (event) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target) &&
        !Object.values(navItemRefs.current).some(
          (ref) => ref && ref.contains(event.target)
        )
      ) {
        setMegaMenuOpen(false);
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // GSAP animation for mega menu
  useEffect(() => {
    if (megaMenuOpen) {
      gsap.fromTo(
        megaMenuRef.current,
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [megaMenuOpen]);

  const handleNavMouseEnter = (menuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
    setActiveMegaMenu(menuType);
  };

  const handleNavMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setActiveMegaMenu(null);
    }, 300);
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMegaMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setActiveMegaMenu(null);
    }, 300);
  };

  const getCurrentMegaMenuData = () => {
    switch (activeMegaMenu) {
      case "services":
        return serviceCategories;
      case "company":
        return companyCategories;
      case "contact":
        return contactCategories;
      default:
        return [];
    }
  };

  const getMobileMenuData = (menuType) => {
    switch (menuType) {
      case "services":
        return serviceCategories;
      case "company":
        return companyCategories;
      case "contact":
        return contactCategories;
      default:
        return [];
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="!max-w-7xl mx-auto px-4 md:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-10 ">
          <Link href="/" className=" inline-block">
            <img
              src="/images/logo/shootorder-logo.svg"
              alt="Logo"
              className="h-20 w-32 "
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className="text-gray-800 hover:text-primary transition flex items-center gap-1"
                  ref={(el) => (navItemRefs.current[link.name] = el)}
                  onMouseEnter={
                    link.hasMegaMenu
                      ? () => handleNavMouseEnter(link.menuType)
                      : undefined
                  }
                  onMouseLeave={
                    link.hasMegaMenu ? handleNavMouseLeave : undefined
                  }
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <span className="text-[#F94839] text-sm">
                      <FaChevronDown />
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact-us/" className="hidden md:block">
            <Button variant="default">Get In Touch</Button>
          </Link>
          <Link href="tel:+91 6303921512" className="hidden md:block">
            <Button variant="default" className="w-full">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 pb-4 pt-2 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link) => (
          <div key={link.name} className="mb-2">
            <Link
              href={link.href}
              className="block py-2 text-gray-800 hover:text-primary font-medium"
              onClick={() =>
                link.hasMegaMenu
                  ? setActiveMegaMenu(
                      activeMegaMenu === link.menuType ? null : link.menuType
                    )
                  : null
              }
            >
              {link.name}
              {link.hasMegaMenu && <span className="text-red-500 ml-1">♥</span>}
            </Link>

            {/* Mobile Submenu */}
            {link.hasMegaMenu && activeMegaMenu === link.menuType && (
              <div className="bg-gray-50 p-4 mt-2 rounded-lg">
                <div className="grid grid-cols-1 gap-4">
                  {getMobileMenuData(link.menuType).map((category) => (
                    <div key={category.title} className="mb-4">
                      <h3 className="font-semibold text-sm mb-2 text-gray-900">
                        {category.title}
                      </h3>
                      <ul className="space-y-1">
                        {category.links.map((subLink) => (
                          <li key={subLink.name}>
                            <Link
                              href={subLink.href}
                              className="text-gray-700 text-sm hover:text-red-500 block py-1"
                              target={subLink.external ? "_blank" : undefined}
                              rel={
                                subLink.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <Link href="/contact-us/" className="mt-4 block">
          <Button variant="default" className="w-full">
            Enquire Now
          </Button>
        </Link>
      </div>
      {/* Mega Menu for Desktop */}
      {megaMenuOpen && activeMegaMenu && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 w-full bg-white shadow-lg border-t border-gray-100 hidden md:block z-50"
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <div className="!max-w-7xl mx-auto py-8 px-4">
            <div
              className={`grid gap-8 ${
                getCurrentMegaMenuData().length <= 2
                  ? "grid-cols-2 justify-center max-w-2xl mx-auto"
                  : "grid-cols-3"
              }`}
            >
              {getCurrentMegaMenuData().map((category) => (
                <div key={category.title} className="mb-4">
                  <h3 className="font-bold text-base mb-3 text-gray-900">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-700 hover:text-red-500 text-sm block py-1"
                          target={link.external ? "_blank" : undefined}
                          rel={
                            link.external ? "noopener noreferrer" : undefined
                          }
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
        </div>
      )}
    </header>
  );
}
