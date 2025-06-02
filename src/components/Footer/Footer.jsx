// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const serviceCategories = [
	{
		title: "Branding",
		links: [
			"Identity Development",
			"Audit",
			"Brand Messaging",
			"Package & Design",
			"Brand Launch",
		],
	},
	{
		title: "Digital Marketing",
		links: ["SEO", "Blog", "Website", "Google Ads", "Meta Ads"],
	},
	{
		title: "Growth Solutions",
		links: [
			"Digital PR",
			"Influencer Marketing",
			"Landing Pages",
			"ORM",
			"Analytics",
		],
	},
];

const companyLinks = [
	{ name: "About Us", href: "/about-us/" },
	{ name: "Work Flow", href: "/about/work-flow/" },
	{ name: "Clients & Testimonials", href: "/about/clients/" },
	{ name: "Case Studies", href: "/case-studies/" },
	{ name: "Thought leadership", href: "/blogs/", external: true },
	{ name: "Careers", href: "/careers/" },	
	{ name: "Contact Us", href: "/contact-us/" },
];

const quickLinks = [
	{ name: "Privacy Policy", href: "/privacy-policy" },
	{ name: "Terms & Conditions", href: "/terms" },
	{ name: "ISMS Policy", href: "/isms-policy" },
	// { name: "Refund Policy", href: "/refund-policy" },
];

const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="container mx-auto" style={{ width: "min(1260px, 100%)" }}>
				<div className="py-8">
					<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

						{/* Contact Info */}
						<div className="md:col-span-4">
							<div>
								<Image
									src="/images/logo/shootorder-logo.svg"
									alt="ShootOrder"
									width={180}
									height={60}
									className="mb-6"
								/>
								<div className="text-gray-600 space-y-2">
									<p className="font-medium">+91-630-392-1512</p>
									<p>info@shootorder.com</p>
									<address className="not-italic mt-4 text-sm">
										Ivent It Solutions Pvt. Ltd.
										
										Krishe Sapphire, Hitech City
										<br />
										Hyderabad, 500081
									</address>
								</div>
							</div>
							{/* Partner Logos - Left Aligned */}
							<div className="py-6 flex items-center gap-6">
								<Image
									src="/images/about-us/meta.png"
									alt="Meta Partner"
									width={80}
									height={80}
									className="hover:scale-105 transition-transform"
									style={{ objectFit: "contain" }}
								/>
								<Image
									src="/images/about-us/google.png"
									alt="Google Partner"
									width={80}
									height={80}
									className="hover:scale-105 transition-transform"
									style={{ objectFit: "contain" }}
								/>
								<Image
									src="/images/about-us/hubspot.png"
									alt="HubSpot Partner"
									width={80}
									height={80}
									className="hover:scale-105 transition-transform"
									style={{ objectFit: "contain" }}
								/>
							</div>
						</div>
						

						{/* Services */}
						<div className="md:col-span-6">
							<div className="grid grid-cols-3 gap-8">
								{serviceCategories.map((category) => (
									<div key={category.title}>
										<h3 className="text-xl font-bold mb-6">
											{category.title}
										</h3>
										<ul className="space-y-4">
											{category.links.map((link) => (
												<li
													key={link}
													className="text-gray-600 hover:text-[#9a0c28] cursor-pointer transition-colors"
												>
													{link}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
						{/* Company & Careers */}
						<div className="md:col-span-2">
							<h3 className="text-xl font-bold mb-6">Company</h3>
							<ul className="space-y-4">
								{companyLinks.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-600 hover:text-[#9a0c28] transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>		
						
					</div>

					
				</div>
			</div>

			{/* Quick Links Strip */}
			<div className="bg-[#9a0c28] text-white py-6">
				<div
					className="container mx-auto"
					style={{ width: "min(1260px, 100%)" }}
				>
					<div className="px-4 flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex flex-wrap justify-center gap-8">
							{quickLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-sm hover:text-gray-200 transition-colors"
								>
									{link.name}
								</Link>
							))}
						</div>
						<p className="text-sm text-gray-200">
							© {new Date().getFullYear()} ShootOrder. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;