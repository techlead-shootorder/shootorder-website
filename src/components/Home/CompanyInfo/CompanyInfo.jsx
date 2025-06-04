"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Script from "next/script";

gsap.registerPlugin(ScrollTrigger);

// Removed cardsData as we're using Clutch widget

export default function CompanyInfo() {
  const pathname = usePathname();
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    gsap.from(cards, {
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none play none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

	return (
		<section className="py-20 bg-gray-50">
			<div ref={sectionRef} className="max-w-7xl mx-auto px-4">
				{/* Header Section */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<h2 className="text-4xl font-bold text-gray-900">
						Trusted by Growing Businesses
					</h2>
					<p className="text-lg text-gray-600">
						See how we've helped businesses across industries achieve their
						digital marketing goals and drive measurable results.
					</p>
				</div>				{/* Clutch Reviews Widget */}
				<div
					className="w-full"
					style={{ maxWidth: "1024px", margin: "0 auto" }}
				>
					<Script 
						src="https://widget.clutch.co/static/js/widget.js"
						strategy="lazyOnload"
					/>
					<div 
						className="clutch-widget" 
						data-url="https://widget.clutch.co" 
						data-widget-type="12" 
						data-height="375" 
						data-nofollow="true" 
						data-expandifr="true" 
						data-scale="100" 
						data-reviews="247350,246759,244398,158154,156901,62857,133614,84906,54268,53431,53070,73683" 
						data-clutchcompany-id="51252"
					/>
				</div>
			</div>
		</section>
	);
}
