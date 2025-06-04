"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaArrowRight, FaPhoneAlt } from "react-icons/fa";

// Service categories for mega menu
const serviceCategories = [
  {
    title: "Branding",
    icon: "✨",
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
        name: "Messaging & Tone",
        href: "/branding/messaging",
        description: "Develop your authentic brand voice",
      },
      {
        name: "Package & Design",
        href: "/branding/design",
        description: "Stunning visual brand assets and materials",
      },
      {
        name: "Brand Campaigns",
        href: "/branding/campaigns",
        description: "Launch your brand with impact",
      },
    ],
  },
  {
    title: "Digital Marketing",
    icon: "🚀",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    hoverColor: "hover:bg-blue-100",
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
        name: "Email Marketing",
        href: "/email-marketing",
        description: "Targeted email campaigns that deliver",
      },
      {
        name: "Social Media Marketing",
        href: "/social-media",
        description: "Build your social presence",
      },
      {
        name: "Content Strategy",
        href: "/content-strategy",
        description: "Strategic content that drives results",
      },
    ],
  },
  {
    title: "Growth Solutions",
    icon: "📈",
    color: "bg-green-50 border-green-200 text-green-700",
    hoverColor: "hover:bg-green-100",
    links: [
      {
        name: "Influencer Marketing",
        href: "/influencers-marketing",
        description: "Leverage authentic social proof",
      },
      {
        name: "Performance Marketing",
        href: "/performance-marketing",
        description: "Data-driven growth strategies",
      },
      {
        name: "Marketing Automation",
        href: "/marketing-automation",
        description: "Streamline and scale your marketing",
      },
      {
        name: "Lead Generation",
        href: "/lead-generation",
        description: "Quality leads that convert",
      },
      {
        name: "Conversion Optimization",
        href: "/conversion-optimization",
        description: "Maximize your conversion rates",
      },
    ],
  },
  {
    title: "Analytics & Optimization",
    icon: "📊",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    hoverColor: "hover:bg-orange-100",
    links: [
      { 
        name: "Online Reputation Management", 
        href: "/orm", 
        description: "Protect and enhance your online reputation" 
      },
      {
        name: "Data Analytics & Dashboard",
        href: "/analytics",
        description: "Advanced analytics and reporting tools",
      },
      {
        name: "Performance Tracking",
        href: "/performance-tracking",
        description: "Monitor and optimize campaign performance",
      },
      {
        name: "Competitor Analysis",
        href: "/competitor-analysis",
        description: "Stay ahead of the competition",
      },
    ],
  },
];

// Company categories for mega menu
const companyCategories = [
  {
    title: "Company Profile",
    icon: "🏢",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    hoverColor: "hover:bg-indigo-100",
    links: [
      { name: "About Us", href: "/about-us", description: "Learn about our story and mission" },
      { name: "Work Flow", href: "/about/work-flow/", description: "Our proven process and methodology" },
      { name: "Clients & Testimonials", href: "/about/clients/", description: "Success stories from happy clients" },
      { name: "Case Studies", href: "/case-studies/", description: "Detailed project breakdowns and results" },
    ],
  },
  {
    title: "Join Our Team",
    icon: "👥",
    color: "bg-teal-50 border-teal-200 text-teal-700",
    hoverColor: "hover:bg-teal-100",
    links: [
      { name: "Careers", href: "/careers/", description: "Explore exciting career opportunities" },
      { name: "Training Programs", href: "/training/", description: "Develop your skills with us" },
    ],
  },
];

// Contact categories for mega menu
const contactCategories = [
  {
    title: "Get In Touch",
    icon: "📞",
    color: "bg-red-50 border-red-200 text-red-700",
    hoverColor: "hover:bg-red-100",
    links: [
      { name: "Contact Us", href: "/contact-us/", description: "Get in touch with our team" },
      { name: "Project Enquiry", href: "/enquiry/", description: "Start your project with us" },
      { name: "Support", href: "/support/", description: "Get help when you need it" },
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
  { name: "Company", href: "/company", hasMegaMenu: true, menuType: "company" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact", hasMegaMenu: true, menuType: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const megaMenuRef = useRef(null);
  const navItemRefs = useRef({});
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
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
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${
                      megaMenuOpen && activeMegaMenu === link.menuType ? 'rotate-180' : ''
                    }`} />
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
            href="tel:+91-630-392-1512" 
            className="flex items-center gap-2 text-gray-700 hover:text-[#9a0c28] transition-all duration-200 font-medium group"
          >
            <div className="p-2 rounded-full bg-[#9a0c28]/10 group-hover:bg-[#9a0c28] transition-all duration-200">
              <FaPhoneAlt className="text-[#9a0c28] group-hover:text-white text-sm" />
            </div>
            <span className="group-hover:scale-105 transition-transform">+91-630-392-1512</span>
          </a>
          
          <a href="/contact-us/">
            <button className="bg-[#9a0c28] hover:bg-[#c4102e] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-screen opacity-100 shadow-lg"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link, linkIndex) => (
            <div key={`mobile-${link.name}-${linkIndex}`} className="space-y-2">
              <a
                href={link.href || "#"}
                className="block py-3 px-4 text-gray-700 hover:text-[#9a0c28] hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                onClick={handleLinkClick}
              >
                <div className="flex items-center justify-between">
                  {link.name}
                  {link.hasMegaMenu && (
                    <FaChevronDown className="text-[#9a0c28] text-xs" />
                  )}
                </div>
              </a>

              {/* Mobile Submenu */}
              {link.hasMegaMenu && (
                <div className="bg-gray-50 rounded-lg p-4 ml-4 space-y-4">
                  {getMobileMenuData(link.menuType).map(
                    (category, categoryIndex) => (
                      <div
                        key={`mobile-${category.title}-${categoryIndex}`}
                        className="space-y-2"
                      >
                        <h3 className="font-semibold text-sm text-gray-900 flex items-center gap-2">
                          <span className="text-lg">{category.icon}</span>
                          {category.title}
                        </h3>
                        <div className="space-y-1 pl-6">
                          {category.links.map(
                            (subLink, subLinkIndex) => (
                              <a
                                key={`mobile-${subLink.name}-${subLinkIndex}`}
                                href={subLink.href || "#"}
                                className="block text-gray-600 text-sm hover:text-[#9a0c28] py-2 px-3 hover:bg-white rounded-md transition-all duration-200"
                                onClick={handleLinkClick}
                              >
                                {subLink.name}
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Contact Section */}
          <div className="pt-4 border-t space-y-3">
            <a 
              href="tel:+91-630-392-1512" 
              className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-[#9a0c28] hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              <div className="p-2 rounded-full bg-[#9a0c28]/10">
                <FaPhone className="text-[#9a0c28] text-sm" />
              </div>
              <span className="font-medium">+91-630-392-1512</span>
            </a>
            
            <a href="/contact-us/" className="block">
              <button className="w-full bg-[#9a0c28] text-white py-3 rounded-lg font-semibold" onClick={handleLinkClick}>
                <span className="flex items-center justify-center gap-2">
                  Connect
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </a>
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
                          : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                      }`}
                      onClick={() => setActiveTab(index)}
                      onMouseEnter={() => setActiveTab(index)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{category.icon}</span>
                        <div>
                          <h3 className={`font-semibold text-base ${
                            activeTab === index ? 'text-current' : 'text-gray-900'
                          }`}>
                            {category.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {category.links.length} services
                          </p>
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
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">
                          {getCurrentMegaMenuData()[activeTab].icon}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {getCurrentMegaMenuData()[activeTab].title}
                        </h2>
                      </div>
                      <p className="text-gray-600">
                        Explore our comprehensive {getCurrentMegaMenuData()[activeTab].title.toLowerCase()} solutions
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      {chunksOf3(getCurrentMegaMenuData()[activeTab].links).map((chunk, chunkIndex) => (
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
                                  <h4 className="text-gray-900 font-semibold group-hover:text-[#9a0c28] transition-colors duration-200 leading-tight">
                                    {link.name}
                                  </h4>
                                  <FaArrowRight className="text-gray-400 group-hover:text-[#9a0c28] text-xs mt-1 transition-all duration-200 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
                                </div>
                                <p className="text-sm text-gray-500 group-hover:text-gray-600 leading-relaxed">
                                  {link.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Call to Action at the bottom */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Ready to get started?
                          </h3>
                          <p className="text-sm text-gray-600">
                            Let's discuss how we can help grow your business
                          </p>
                        </div>
                        <a href="/contact-us/">
                          <button className="bg-[#9a0c28] hover:bg-[#c4102e] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 group">
                            Get Started
                            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                          </button>
                        </a>
                      </div>
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