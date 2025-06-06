"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhone,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

// Service categories for mega menu
const serviceCategories = [
  {
    title: "Digital Marketing",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    hoverColor: "hover:bg-blue-100",
    columns: [
      {
        heading: "Owned Media",
        links: [
          {
            name: "SEO Optimization",
            href: "/seo",
            description: "Dominate organic search results",
          },
          {
            name: "Blog Management",
            href: "/blog-management",
            description: "Content that converts and engages",
          },
          {
            name: "Website Development",
            href: "/web-design",
            description: "High-performance, responsive websites",
          },
          {
            name: "Social Media Marketing",
            href: "/social-media-marketing",
            description: "Build your social media presence",
          },
        ],
      },
      {
        heading: "Paid Media",
        links: [
          {
            name: "Google Ads",
            href: "/google-ads",
            description: "PPC campaigns that drive results",
          },
          {
            name: "Meta Ads",
            href: "/meta-ads",
            description: "Effective social media advertising",
          },
        ],
      },
      {
        heading: "Earned Media",
        links: [
          {
            name: "Digital PR",
            href: "/digital-pr",
            description: "Build your online presence",
          },
          {
            name: "Influencer Marketing",
            href: "/influencers-marketing",
            description: "Connect with relevant influencers",
          },
        ],
      },
    ],
  },
  {
    title: "Branding",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    hoverColor: "hover:bg-purple-100",
    links: [
      {
        name: "Identity Development",
        href: "/branding/identity",
        description: "Create a unique brand identity that stands out",
      },
      {
        name: "Brand Audit",
        href: "/branding/audit",
        description: "Evaluate your brand's performance and positioning",
      },
      {
        name: "Brand Messaging & Tone of Voice",
        href: "/branding/messaging",
        description: "Develop your authentic brand voice",
      },
      {
        name: "Package & Design",
        href: "/branding/design",
        description: "Stunning visual brand assets and materials",
      },
      {
        name: "Brand Launch & Campaigns",
        href: "/branding/campaigns",
        description: "Launch your brand with impact",
      },
    ],
  },
  {
    title: "Growth Hacking",
    color: "bg-green-50 border-green-200 text-green-700",
    hoverColor: "hover:bg-green-100",
    links: [
      {
        name: "Landing Pages",
        href: "/landing-pages",
        description:
          "High-converting landing pages that generate quality leads",
      },
      {
        name: "On-site Engagement",
        href: "/on-site-engagement",
        description: "Optimize user experience and engagement",
      },
      {
        name: "Online Reputation Management (ORM)",
        href: "/orm",
        description: "Protect and enhance your online reputation",
      },
    ],
  },
  {
    title: "Marketing Automation",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    hoverColor: "hover:bg-orange-100",
    links: [
      {
        name: "Data Analytics & Dashboards",
        href: "/analytics-dashboards",
        description: "Advanced analytics and comprehensive reporting tools",
      },
      {
        name: "Smart Analytics",
        href: "/smart-analytics",
        description: "AI-powered insights to stay ahead of competition",
      },
    ],
  },
];

// Company categories for mega menu
const companyCategories = [
  {
    title: "Company Profile",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    hoverColor: "hover:bg-indigo-100",
    links: [
      {
        name: "About Us",
        href: "/about-us",
        description: "Learn about our story and mission",
      },
      {
        name: "Work Flow",
        href: "/about/work-flow/",
        description: "Our proven process and methodology",
      },
      {
        name: "Clients & Testimonials",
        href: "/about/clients/",
        description: "Success stories from happy clients",
      },
      {
        name: "Case Studies",
        href: "/case-studies/",
        description: "Detailed project breakdowns and results",
      },
    ],
  },
  {
    title: "Join Our Team",
    color: "bg-teal-50 border-teal-200 text-teal-700",
    hoverColor: "hover:bg-teal-100",
    links: [
      {
        name: "Careers",
        href: "/careers/",
        description: "Explore exciting career opportunities",
      },
      {
        name: "Training Programs",
        href: "/training/",
        description: "Develop your skills with us",
      },
    ],
  },
];

// Contact categories for mega menu with icons
const contactCategories = [
  {
    title: "Get In Touch",
    color: "bg-red-50 border-red-200 text-red-700",
    hoverColor: "hover:bg-red-100",
    links: [
      {
        name: "Contact Us",
        href: "/contact-us/",
        description: "Get in touch with our team",
        icon: "",
      },
      {
        name: "Project Enquiry",
        href: "/enquiry/",
        description: "Start your project with us",
        icon: "",
      },
      {
        name: "Support",
        href: "/support/",
        description: "Get help when you need it",
        icon: "",
      },
    ],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#",
    hasMegaMenu: true,
    menuType: "services",
  },
  { name: "Company", href: "#", hasMegaMenu: true, menuType: "company" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "#", hasMegaMenu: true, menuType: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const menuRef = useRef(null);
  const megaMenuRef = useRef(null);
  const navItemRefs = useRef({});
  const timeoutRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  // Focus trap effect
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (e.key !== "Tab") return;

      if (!firstFocusableRef.current || !lastFocusableRef.current) return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          lastFocusableRef.current.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          firstFocusableRef.current.focus();
          e.preventDefault();
        }
      }
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    // Focus first element when menu opens
    firstFocusableRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Fixed toggleCategory function
  const toggleCategory = (categoryTitle) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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
        setActiveTab(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleNavMouseEnter = (menuType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setMegaMenuOpen(true);
    setActiveMegaMenu(menuType);
    setActiveTab(0); // Reset to first tab when opening menu
  };

  const handleNavMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setActiveMegaMenu(null);
      setActiveTab(0);
    }, 300);
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMegaMenuMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setActiveMegaMenu(null);
      setActiveTab(0);
    }, 300);
  };

  const handleLinkClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setMenuOpen(false);
    setMegaMenuOpen(false);
    setActiveMegaMenu(null);
    setActiveTab(0);
    setExpandedCategories({}); // Reset expanded categories
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

  const chunksOf3 = (array) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += 3) {
      chunks.push(array.slice(i, i + 3));
    }
    return chunks;
  };

  // Fixed mobile menu item click handler
  const handleMobileMenuClick = (e, link) => {
    if (link.hasMegaMenu) {
      e.preventDefault();
      toggleCategory(link.menuType);
    } else {
      handleLinkClick();
    }
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="!max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <a href="/" className="inline-block">
            <img
              src="/images/logo/shootorder-logo.svg"
              alt="Logo"
              className="h-12 w-auto transition-transform hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-[#9a0c28] transition-all duration-200 flex items-center gap-2 font-medium py-2 relative group"
                  ref={(el) => {
                    if (el) {
                      navItemRefs.current[link.name] = el;
                    }
                  }}
                  onMouseEnter={
                    link.hasMegaMenu
                      ? () => handleNavMouseEnter(link.menuType)
                      : undefined
                  }
                  onMouseLeave={
                    link.hasMegaMenu ? handleNavMouseLeave : undefined
                  }
                  onClick={handleLinkClick}
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        megaMenuOpen && activeMegaMenu === link.menuType
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9a0c28] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop CTA Section */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:1-855-217-4637"
            className="flex items-center gap-2 text-gray-700 hover:text-[#9a0c28] transition-all duration-200 font-medium group"
          >
            <div className="p-2 rounded-full bg-[#9a0c28]/10 group-hover:bg-[#9a0c28] transition-all duration-200">
              <FaPhoneAlt className="text-[#9a0c28] group-hover:text-white text-sm" />
            </div>
            <span className="group-hover:scale-105 transition-transform">
              1-855-217-4637
            </span>
          </a>

          <a href="/contact-us/">
            <button className="bg-[#9a0c28] hover:bg-[#c4102e] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                Connect
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#9a0c28] to-[#c4102e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Debug Info - Remove this in production */}
      {/* <div className="lg:hidden fixed top-20 left-0 right-0 bg-yellow-100 text-xs p-2 z-[99]">
        Menu: {menuOpen ? "OPEN" : "CLOSED"} | Expanded:{" "}
        {JSON.stringify(expandedCategories)}
      </div> */}

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        ref={menuRef}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Content */}
        <div
          className={`fixed  right-0 z-50 w-[85%] max-w-sm bg-white shadow-xl transform transition-all duration-300 ease-out h-224 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Main Menu"
        >
          <div className="relative z-50 h-full overflow-y-auto flex flex-col">
            {/* Logo Section */}
            <div className="p-4 bg-white border-b flex items-center justify-between">
              <a href="/" className="inline-block">
                <img
                  src="/images/logo/shootorder-logo.svg"
                  alt="ShootOrder"
                  className="h-10 w-auto"
                />
              </a>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FaTimes size={20} className="text-gray-700" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-4 space-y-2">
              {navLinks.map((link, linkIndex) => (
                <div
                  key={`mobile-${link.name}-${linkIndex}`}
                  className="space-y-2"
                >
                  {/* Main Menu Item */}
                  <button
                    className="w-full text-left py-3 px-4 text-gray-700 hover:text-[#9a0c28] hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    onClick={(e) => handleMobileMenuClick(e, link)}
                  >
                    <div className="flex items-center justify-between">
                      {link.name}
                      {link.hasMegaMenu && (
                        <FaChevronDown
                          className={`text-[#9a0c28] text-xs transition-transform duration-200 ${
                            expandedCategories[link.menuType]
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </div>
                  </button>

                  {/* Mobile Submenu with Accordion */}
                  {link.hasMegaMenu && expandedCategories[link.menuType] && (
                    <div className="bg-gray-50/80 rounded-lg overflow-hidden ml-4 transition-all duration-300">
                      {getMobileMenuData(link.menuType).map(
                        (category, categoryIndex) => (
                          <div
                            key={`mobile-${category.title}-${categoryIndex}`}
                            className="border-b border-gray-200 last:border-none"
                          >
                            <button
                              className={`w-full text-left ${category.color} p-4 transition-colors duration-200`}
                              onClick={() => toggleCategory(category.title)}
                              aria-expanded={expandedCategories[category.title]}
                              aria-controls={`category-content-${category.title}`}
                            >
                              <h3 className="font-semibold text-sm text-gray-900 flex items-center justify-between">
                                {category.title}
                                <FaChevronDown
                                  className={`text-xs transform transition-transform duration-200 text-current ${
                                    expandedCategories[category.title]
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </h3>
                            </button>

                            {/* Category Content */}
                            {expandedCategories[category.title] && (
                              <div
                                id={`category-content-${category.title}`}
                                className="border-t border-gray-200 bg-white"
                              >
                                {category.columns ? (
                                  // Columned layout for Digital Marketing
                                  <div className="p-4 space-y-4">
                                    {category.columns.map(
                                      (column, columnIndex) => (
                                        <div key={columnIndex}>
                                          <h4 className="font-medium text-sm text-gray-800 mb-2">
                                            {column.heading}
                                          </h4>
                                          <div className="space-y-1 pl-3">
                                            {column.links.map(
                                              (link, linkIndex) => (
                                                <a
                                                  key={`mobile-col-${link.name}-${linkIndex}`}
                                                  href={link.href || "#"}
                                                  className="block text-gray-600 text-sm hover:text-[#9a0c28] py-2 px-3 hover:bg-gray-50 rounded-md transition-all duration-200 group"
                                                  onClick={handleLinkClick}
                                                >
                                                  <span className="flex items-center">
                                                    {link.name}
                                                    <FaArrowRight className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-200" />
                                                  </span>
                                                  {link.description && (
                                                    <span className="text-xs text-gray-500 mt-1 block">
                                                      {link.description}
                                                    </span>
                                                  )}
                                                </a>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                ) : (
                                  // Regular layout for other categories
                                  <div className="p-4 space-y-1">
                                    {category.links.map((link, linkIndex) => (
                                      <a
                                        key={`mobile-${link.name}-${linkIndex}`}
                                        href={link.href || "#"}
                                        className="block text-gray-600 text-sm hover:text-[#9a0c28] py-2 px-3 hover:bg-gray-50 rounded-md transition-all duration-200 group"
                                        onClick={handleLinkClick}
                                      >
                                        <span className="flex items-center gap-2">
                                          {link.icon && (
                                            <span className="text-base">
                                              {link.icon}
                                            </span>
                                          )}
                                          {link.name}
                                          <FaArrowRight className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-200" />
                                        </span>
                                        {link.description && (
                                          <span className="text-xs text-gray-500 mt-1 block">
                                            {link.description}
                                          </span>
                                        )}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact Section */}
            <div className="mt-auto p-4 border-t space-y-3">
              <a
                href="tel:1-855-217-4637"
                className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-[#9a0c28] hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <div className="p-2 rounded-full bg-[#9a0c28]/10">
                  <FaPhoneAlt className="text-[#9a0c28] text-sm" />
                </div>
                <span className="font-medium">+1-855-217-4637</span>
              </a>

              <a href="/contact-us/" className="block">
                <button
                  className="w-full bg-[#9a0c28] text-white py-3 rounded-lg font-semibold"
                  onClick={handleLinkClick}
                >
                  <span className="flex items-center justify-center gap-2 cursor-pointer">
                    Connect
                    <FaArrowRight className="text-xs" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu with Tabs */}
      {megaMenuOpen && activeMegaMenu && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 w-full bg-white shadow-2xl border-t hidden lg:block"
          style={{ zIndex: 40 }}
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <div className="mx-auto" style={{ width: "min(1280px, 100%)" }}>
            <div className="flex min-h-[500px]">
              {/* Left Sidebar - Tabs */}
              <div className="w-80 bg-gray-50 border-r border-gray-200 p-6">
                <div className="space-y-2">
                  {getCurrentMegaMenuData().map((category, index) => (
                    <button
                      key={category.title}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 border-2 ${
                        activeTab === index
                          ? `${category.color} border-current shadow-sm`
                          : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"
                      }`}
                      onClick={() => setActiveTab(index)}
                      onMouseEnter={() => setActiveTab(index)}
                    >
                      <div className="flex items-center gap-3">
                        {category.icon && (
                          <span className="text-2xl">{category.icon}</span>
                        )}
                        <div>
                          <h3
                            className={`font-semibold text-base ${
                              activeTab === index
                                ? "text-current"
                                : "text-gray-900"
                            }`}
                          >
                            {category.title}
                          </h3>
                          {/* Only show service count for services menu */}
                          {activeMegaMenu === "services" && (
                            <p className="text-xs text-gray-500 mt-1">
                              {category.columns
                                ? category.columns.reduce(
                                    (total, col) => total + col.links.length,
                                    0
                                  )
                                : category.links.length}{" "}
                              services
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content - Service Items in 3 Columns */}
              <div className="flex-1 p-8">
                {getCurrentMegaMenuData()[activeTab] && (
                  <div>
                    {/* Header Section - Fixed alignment */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        {getCurrentMegaMenuData()[activeTab].icon && (
                          <span className="text-3xl">
                            {getCurrentMegaMenuData()[activeTab].icon}
                          </span>
                        )}
                        <h2 className="text-2xl font-bold text-gray-900">
                          {getCurrentMegaMenuData()[activeTab].title}
                        </h2>
                      </div>
                      <p className="text-gray-600">
                        Explore our comprehensive{" "}
                        {getCurrentMegaMenuData()[
                          activeTab
                        ].title.toLowerCase()}{" "}
                        solutions
                      </p>
                    </div>

                    {/* Content Grid - Fixed alignment */}
                    <div className="grid grid-cols-3 gap-8">
                      {getCurrentMegaMenuData()[activeTab].columns
                        ? // Digital Marketing with proper column headers
                          getCurrentMegaMenuData()[activeTab].columns.map(
                            (column, columnIndex) => (
                              <div key={columnIndex} className="space-y-6">
                                {/* Column Header - Better styling */}
                                <div className="border-b border-gray-200 pb-3">
                                  <h3 className="font-bold text-lg text-gray-900 tracking-tight">
                                    {column.heading}
                                  </h3>
                                </div>

                                {/* Column Links */}
                                <div className="space-y-4">
                                  {column.links.map((link, linkIndex) => (
                                    <a
                                      key={link.name}
                                      href={link.href || "#"}
                                      className="block group hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent rounded-xl p-4 transition-all duration-300 hover:shadow-sm border border-transparent hover:border-gray-100"
                                      onClick={handleLinkClick}
                                    >
                                      <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                          <h4 className="text-gray-900 font-semibold group-hover:text-[#9a0c28] transition-colors duration-200">
                                            {link.name}
                                          </h4>
                                          <FaArrowRight className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-[#9a0c28] transition-all duration-200 transform group-hover:translate-x-1" />
                                        </div>
                                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                                          {link.description}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )
                          )
                        : // Other categories with regular grid layout
                          chunksOf3(
                            getCurrentMegaMenuData()[activeTab].links
                          ).map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-4">
                              {chunk.map((link, linkIndex) => (
                                <a
                                  key={link.name}
                                  href={link.href || "#"}
                                  className="block group hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent rounded-xl p-4 transition-all duration-300 hover:shadow-sm border border-transparent hover:border-gray-100"
                                  onClick={handleLinkClick}
                                >
                                  <div className="space-y-2">
                                    <div className="flex items-start justify-between">
                                      <div className="flex items-center gap-3">
                                        {link.icon && (
                                          <span className="text-xl">
                                            {link.icon}
                                          </span>
                                        )}
                                        <h4 className="text-gray-900 font-semibold group-hover:text-[#9a0c28] transition-colors duration-200">
                                          {link.name}
                                        </h4>
                                      </div>
                                      <FaArrowRight className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-[#9a0c28] transition-all duration-200 transform group-hover:translate-x-1" />
                                    </div>
                                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                                      {link.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
