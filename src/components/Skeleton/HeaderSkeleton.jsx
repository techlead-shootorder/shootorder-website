"use client";

import { useState, useEffect, useRef } from "react";

export default function HeaderSkeleton() {
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

    // Skeleton navigation structure
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services", hasMegaMenu: true, menuType: "services" },
        { name: "Company", href: "#", hasMegaMenu: true, menuType: "company" },
        // { name: "Contact", href: "#", hasMegaMenu: true, menuType: "contact" },
    ];

    // Skeleton service categories
    const serviceCategories = [
        {
            title: "Digital Marketing",
            color: "bg-blue-50 border-blue-200 text-blue-700",
            columns: [
                {
                    heading: "Owned Media",
                    links: Array(5).fill().map((_, i) => ({
                        name: `Service ${i + 1}`,
                        href: "#",
                        description: "Service description"
                    }))
                },
                {
                    heading: "Paid Media",
                    links: Array(2).fill().map((_, i) => ({
                        name: `Service ${i + 1}`,
                        href: "#",
                        description: "Service description"
                    }))
                },
                {
                    heading: "Earned Media",
                    links: Array(2).fill().map((_, i) => ({
                        name: `Service ${i + 1}`,
                        href: "#",
                        description: "Service description"
                    }))
                }
            ]
        },
        {
            title: "Branding",
            color: "bg-purple-50 border-purple-200 text-purple-700",
            links: Array(5).fill().map((_, i) => ({
                name: `Brand Service ${i + 1}`,
                href: "#",
                description: "Brand service description"
            }))
        },
        {
            title: "Growth Hacking",
            color: "bg-green-50 border-green-200 text-green-700",
            links: Array(3).fill().map((_, i) => ({
                name: `Growth Service ${i + 1}`,
                href: "#",
                description: "Growth service description"
            }))
        },
        {
            title: "Marketing Automation",
            color: "bg-orange-50 border-orange-200 text-orange-700",
            links: Array(2).fill().map((_, i) => ({
                name: `Automation Service ${i + 1}`,
                href: "#",
                description: "Automation service description"
            }))
        }
    ];

    const companyCategories = [
        {
            title: "Company Profile",
            color: "bg-indigo-50 border-indigo-200 text-indigo-700",
            links: Array(4).fill().map((_, i) => ({
                name: `Company Item ${i + 1}`,
                href: "#",
                description: "Company item description"
            }))
        },
        {
            title: "Join Our Team",
            color: "bg-teal-50 border-teal-200 text-teal-700",
            links: Array(2).fill().map((_, i) => ({
                name: `Career Item ${i + 1}`,
                href: "#",
                description: "Career item description"
            }))
        }
    ];

    const contactCategories = [
        {
            title: "Get In Touch",
            color: "bg-red-50 border-red-200 text-red-700",
            links: Array(2).fill().map((_, i) => ({
                name: `Contact Item ${i + 1}`,
                href: "#",
                description: "Contact item description"
            }))
        }
    ];

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
        setActiveTab(0);
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
        setExpandedCategories({});
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
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-white shadow-sm"
                }`}
        >
      {/* Replace the existing header content div with this: */}
            <div className="!max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">
                {/* Logo Skeleton - Left Side */}
                <div className="inline-block animate-pulse">
                    <div className="h-12 w-32 bg-gray-200 rounded"></div>
                </div>

                {/* Right Side - Navigation + CTA Button */}
                <div className="hidden lg:flex items-center gap-8">
                    {/* Desktop Navigation Skeleton - Moved to Right */}
                    <nav className="flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative">
                                <button
                                    className="text-gray-700 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 font-medium py-2 relative group animate-pulse"
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
                                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                    {link.hasMegaMenu && (
                                        <div className="w-3 h-3 bg-gray-200 rounded"></div>
                                    )}
                                </button>
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button Skeleton */}
                    <div className="animate-pulse">
                        <div className="bg-gray-200 px-6 py-2.5 rounded-lg h-10 w-24"></div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors animate-pulse"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="w-5 h-5 bg-gray-200 rounded"></div>
                </button>
            </div>

            {/* Mobile Menu Overlay - RIGHT SIDE */}
            <div
                className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                ref={menuRef}
            >
                {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setMenuOpen(false)}
                />

                {/* Menu Content - RIGHT SIDE */}
                <div
                    className={`fixed right-0 top-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl transform transition-all duration-300 ease-out h-full ${menuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    style={{
                        borderTopLeftRadius: '12px',
                        borderBottomLeftRadius: '12px',
                    }}
                >
                    <div className="relative z-50 h-full overflow-y-auto flex flex-col">
                        {/* Header Section with Close Button on Right */}
                        <div className="p-4 bg-white border-b flex items-center justify-between sticky top-0 z-10">
                            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                            <button
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
                                onClick={() => setMenuOpen(false)}
                            >
                                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <nav className="flex-1 p-4 space-y-2">
                            {navLinks.map((link, linkIndex) => (
                                <div key={`mobile-${link.name}-${linkIndex}`} className="space-y-2">
                                    <button
                                        className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                                        onClick={(e) => handleMobileMenuClick(e, link)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                                            {link.hasMegaMenu && (
                                                <div className="w-3 h-3 bg-gray-200 rounded animate-pulse"></div>
                                            )}
                                        </div>
                                    </button>

                                    {/* Mobile Submenu */}
                                    {link.hasMegaMenu && expandedCategories[link.menuType] && (
                                        <div className="bg-gray-50/80 rounded-lg overflow-hidden transition-all duration-300 border border-gray-200">
                                            {getMobileMenuData(link.menuType).map(
                                                (category, categoryIndex) => (
                                                    <div
                                                        key={`mobile-${category.title}-${categoryIndex}`}
                                                        className="border-b border-gray-200 last:border-none"
                                                    >
                                                        <button
                                                            className={`w-full text-left ${category.color} p-4 transition-colors duration-200 hover:opacity-80`}
                                                            onClick={() => toggleCategory(category.title)}
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
                                                                <div className="w-3 h-3 bg-gray-300 rounded animate-pulse"></div>
                                                            </div>
                                                        </button>

                                                        {expandedCategories[category.title] && (
                                                            <div className="border-t border-gray-200 bg-white p-4 space-y-3">
                                                                {(category.links || []).map((_, linkIdx) => (
                                                                    <div key={linkIdx} className="space-y-2 animate-pulse p-2 hover:bg-gray-50 rounded">
                                                                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                                                                        <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                                                                    </div>
                                                                ))}
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

                        {/* Mobile Contact Section - Bottom */}
                        <div className="mt-auto p-4 border-t bg-gray-50 space-y-3 sticky bottom-0">
                            <div className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white border">
                                <div className="p-2 rounded-full bg-gray-200 w-10 h-10 animate-pulse flex-shrink-0"></div>
                                <div className="flex-1">
                                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-1"></div>
                                    <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 py-3 rounded-lg animate-pulse h-12"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Mega Menu */}
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
                                            className={`w-full text-left p-4 rounded-xl transition-all duration-200 border-2 ${activeTab === index
                                                    ? `${category.color} border-current shadow-sm`
                                                    : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"
                                                }`}
                                            onClick={() => setActiveTab(index)}
                                            onMouseEnter={() => setActiveTab(index)}
                                        >
                                            <div className="animate-pulse">
                                                <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                                                <div className="h-3 w-16 bg-gray-300 rounded"></div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="flex-1 p-8">
                                {getCurrentMegaMenuData()[activeTab] && (
                                    <div>
                                        {/* Header Section */}
                                        <div className="mb-8 animate-pulse">
                                            <div className="h-8 w-48 bg-gray-200 rounded mb-3"></div>
                                            <div className="h-4 w-64 bg-gray-200 rounded"></div>
                                        </div>

                                        {/* Content Grid */}
                                        <div className="grid grid-cols-3 gap-8">
                                            {getCurrentMegaMenuData()[activeTab].columns
                                                ? getCurrentMegaMenuData()[activeTab].columns.map(
                                                    (column, columnIndex) => (
                                                        <div key={columnIndex} className="space-y-6">
                                                            <div className="border-b border-gray-200 pb-3 animate-pulse">
                                                                <div className="h-5 w-24 bg-gray-200 rounded"></div>
                                                            </div>
                                                            <div className="space-y-4">
                                                                {column.links.map((_, linkIndex) => (
                                                                    <div key={linkIndex} className="p-4 rounded-xl animate-pulse hover:bg-gray-50">
                                                                        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                                                                        <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                                : chunksOf3(getCurrentMegaMenuData()[activeTab].links).map(
                                                    (chunk, chunkIndex) => (
                                                        <div key={chunkIndex} className="space-y-4">
                                                            {chunk.map((_, linkIndex) => (
                                                                <div key={linkIndex} className="p-4 rounded-xl animate-pulse hover:bg-gray-50">
                                                                    <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                                                                    <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )
                                                )}
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