"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import Link from "next/link";
import { Button } from "../ui/button";
import gsap from "gsap";

// Service categories for mega menu
const serviceCategories = [
	{
		title: "Branding",
		icon: "✨",
		links: [
			{
				name: "Identity Development",
				href: "/branding/identity",
				description: "Create a unique brand identity",
			},
			{
				name: "Brand Audit",
				href: "/branding/audit",
				description: "Evaluate your brand's performance",
			},
			{
				name: "Messaging & Tone",
				href: "/branding/messaging",
				description: "Develop your brand voice",
			},
			{
				name: "Package & Design",
				href: "/branding/design",
				description: "Stunning visual brand assets",
			},
			{
				name: "Brand Campaigns",
				href: "/branding/campaigns",
				description: "Launch your brand effectively",
			},
		],
	},
	{
		title: "Digital Marketing",
		icon: "🚀",
		links: [
			{
				subtitle: "Owned Media",
				items: [
					{ name: "SEO", href: "/seo", description: "Organic search dominance" },
					{
						name: "Blog Management",
						href: "/blog-management",
						description: "Content that converts",
					},
					{
						name: "Website Development",
						href: "/web-design",
						description: "High-performance websites",
					},
				],
			},
			{
				subtitle: "Paid Media",
				items: [
					// { name: "Google Ads", href: "/google-ads", description: "PPC & Display advertising" },
					{ name: "Email Marketing", href: "/email-marketing", description: "Email Marketing" },
				],
			},
			// {
			// 	subtitle: "Earned Media",
			// 	items: [
			// 		{
			// 			name: "Digital PR",
			// 			href: "/digital-pr",
			// 			description: "Build brand authority & backlinks",
			// 		},
			// 		{
			// 			name: "Influencer Marketing",
			// 			href: "/influencers-marketing",
			// 			description: "Leverage social proof & reach",
			// 		},
			// 	],
			// },
		],
	},
	{
		title: "Growth Solutions",
		icon: "📈",
		links: [
			// { name: "Digital PR", href: "/digital-pr", description: "Build online presence" },
			{
				name: "Influencer Marketing",
				href: "/influencers-marketing",
				description: "Leverage social proof",
			},
			// { name: "Growth Hacking", href: "/growth-hacking", description: "Rapid growth strategies" },
			{ name: "Performance Marketing", href: "/performance-marketing", description: "High-converting pages" },
			{
				name: "Marketing Automation",
				href: "/marketing-automation",
				description: "Streamline your marketing",
			},
		],
	},
	{
		title: "Analytics & Optimization",
		icon: "📊",
		links: [
			// { name: "Smart Analytics", href: "/analytics", description: "Data-driven insights" },
			// { name: "Performance Dashboards", href: "/dashboards", description: "Real-time monitoring" },
			{ name: "ORM", href: "/orm", description: "Reputation management" },
			{ name: "Data Analytics & Dashboard", href: "/analytics", description: "Visitor conversion tools" },
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
		href: "#",
		hasMegaMenu: true,
		menuType: "services",
	},
	{ name: "Company", href: "/company", hasMegaMenu: true, menuType: "company" },
	{ name: "Blogs", href: "/blogs" },
	{ name: "Contact", href: "/contact", hasMegaMenu: true, menuType: "contact" },
];

// Add this helper function before the Header component
const flattenMenuLinks = (category) => {
	if (!category.links) return [];

	return category.links.reduce((acc, link) => {
		if (link.subtitle && link.items) {
			return [...acc, ...link.items];
		}
		return [...acc, link];
	}, []);
};

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

	const handleLinkClick = () => {
		setMenuOpen(false);
		setMegaMenuOpen(false);
		setActiveMegaMenu(null);
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
									className="text-gray-800 hover:text-[#9a0c28] transition flex items-center gap-1"
									ref={(el) => (navItemRefs.current[link.name] = el)}
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
										<span className="text-[#9a0c28] text-sm">
											<FaChevronDown />
										</span>
									)}
								</Link>
							</div>
						))}
					</nav>
				</div>
				<div className="hidden md:flex items-center gap-4">
					<Link href="tel:+91-630-392-1512" className=" md:block">
						+91-630-392-1512
					</Link>
					<Link href="/contact-us/" className="md:block">
						<Button variant="brand" className="w-full">
							Enquire Now
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
				{navLinks.map((link, linkIndex) => (
					<div key={`mobile-${link.name}-${linkIndex}`} className="mb-2">
						<Link
							href={link.href || "#"}
							className="block py-2 text-gray-800 hover:text-primary font-medium"
							onClick={handleLinkClick}
						>
							{link.name}
							{link.hasMegaMenu && <span className="!text-[#9a0c28] ml-1">♥</span>}
						</Link>

						{/* Mobile Submenu */}
						{link.hasMegaMenu && activeMegaMenu === link.menuType && (
							<div className="bg-gray-50 p-4 mt-2 rounded-lg">
								<div className="grid grid-cols-1 gap-4">
									{getMobileMenuData(link.menuType).map(
										(category, categoryIndex) => (
											<div
												key={`mobile-${category.title}-${categoryIndex}`}
												className="mb-4"
											>
												<h3 className="font-semibold text-sm mb-2 text-gray-900">
													{category.title}
												</h3>
												<ul className="space-y-1">
													{flattenMenuLinks(category).map((subLink, subLinkIndex) => (
														<li key={`mobile-${subLink.name}-${subLinkIndex}`}>
															<Link
																href={subLink.href || "#"}
																className="text-gray-700 text-sm hover:text-[#9a0c28] block py-1"
																target={subLink.external ? "_blank" : undefined}
																rel={subLink.external ? "noopener noreferrer" : undefined}
																onClick={handleLinkClick}  // Add this line
															>
																{subLink.name}
															</Link>
														</li>
													))}
												</ul>
											</div>
										)
									)}
								</div>
							</div>
						)}
					</div>
				))}

				{/* Mobile "Enquire Now" button */}
				<Link href="/contact-us/" className="mt-4 block">
					<Button variant="brand" className="w-full">
						Enquire Now
					</Button>
				</Link>
			</div>
			{/* Mega Menu for Desktop */}
			{megaMenuOpen && activeMegaMenu && (
				<div
					ref={megaMenuRef}
					className="absolute left-0 w-full bg-white shadow-lg border-t border-gray-100 hidden md:block"
					style={{ zIndex: 40 }}
					onMouseEnter={handleMegaMenuMouseEnter}
					onMouseLeave={handleMegaMenuMouseLeave}
				>
					<div className="mx-auto px-4" style={{ width: "min(1260px, 100%)" }}>
						<div className="py-8">
							<div className="grid grid-cols-4 gap-8">
								{getCurrentMegaMenuData().map((category, categoryIndex) => (
									<div key={`${category.title}-${categoryIndex}`} className="space-y-2">
										<div className="flex items-center gap-2 pb-1 border-b border-gray-200/70">
											<span className="text-2xl">{category.icon}</span>
											<h3 className="font-bold text-lg text-gray-900">
												{category.title}
											</h3>
										</div>
										<div className="space-y-3">
											{category.links.map((link, linkIndex) => {
												if (link.subtitle) {
													if (link.subtitle === "Owned Media" || link.subtitle === "Paid Media") {
														return (
															<div className="space-y-2" key={`${link.subtitle}-${linkIndex}`}>
																<h4 className="font-semibold text-sm text-gray-700 border-b border-gray-200/50 pb-2">
																	{link.subtitle}
																</h4>
																<div className="space-y-2">
																	{link.items?.map((item, itemIndex) => (
																		<Link
																			key={`${item.name}-${itemIndex}`}
																			href={item.href || '#'}
																			className="block group hover:bg-[#9a0c28]/5 rounded-md p-2 transition-all duration-200"
																			onClick={handleLinkClick}
																		>
																			<span className="text-gray-900 text-sm font-medium group-hover:text-[#9a0c28]">
																				{item.name}
																			</span>
																			<p className="text-xs text-gray-500 group-hover:text-[#9a0c28] mt-0.5">
																				{item.description}
																			</p>
																		</Link>
																	))}
																</div>
															</div>
														);
													}
													// Regular subtitle section
													return (
														<div className="space-y-2" key={`${link.subtitle}-${linkIndex}`}>
															<h4 className="font-semibold text-sm text-gray-700 border-b border-gray-200/50 pb-2">
																{link.subtitle}
															</h4>
															<div className="space-y-2">
																{link.items?.map((item, itemIndex) => (
																	<Link
																		key={`${item.name}-${itemIndex}`}
																		href={item.href || '#'}
																		className="block group hover:bg-[#9a0c28]/5 rounded-md p-2 transition-all duration-200"
																		onClick={handleLinkClick}
																	>
																		<span className="text-gray-900 text-sm font-medium group-hover:text-[#9a0c28]">
																			{item.name}
																		</span>
																		<p className="text-xs text-gray-500 group-hover:text-[#9a0c28] mt-0.5">
																			{item.description}
																		</p>
																	</Link>
																))}
															</div>
														</div>
													);
												}
												// Regular link without subtitle
												return (
													<Link
														key={`${link.name}-${linkIndex}`}
														href={link.href || '#'}
														className="block group hover:bg-[#9a0c28]/5 rounded-md p-2 transition-all duration-200"
														onClick={handleLinkClick}
													>
														<span className="text-gray-900 text-sm font-medium group-hover:text-[#9a0c28]">
															{link.name}
														</span>
														<p className="text-xs text-gray-500 group-hover:text-[#9a0c28] mt-0.5">
															{link.description}
														</p>
													</Link>
												);
											})}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
