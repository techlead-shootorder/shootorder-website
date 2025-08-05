"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ClutchWidget from "../Home/CompanyInfo/ClutchWidget";

function ClientGrid({ children }) {
  const containerRef = useRef(null);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Partner logos (14)
  const partnerLogos = Array.from(
    { length: 14 },
    (_, i) => `/images/logo/${i + 1}.jpg`
  );

  // Trust logos (10): a1.jpg to j1.jpg
  const trustLogos = [
    "a1.jpg", "b1.jpg", "Apollo Homecare.webp", "Carkia.webp", "e1.jpg", "f1.jpg", "Empire wines.webp", "h1.jpg", "i1.jpg", "IVF london.webp", "Travtips.webp"
  ].map((name) => `/images/clients/${name}`);

  useEffect(() => {
    const handleLoad = () => {
      if (topRowRef.current && bottomRowRef.current) {
        gsap.to(topRowRef.current, {
          x: "-50%",
          duration: 20,
          ease: "none",
          repeat: -1,
        });

        gsap.fromTo(
          bottomRowRef.current,
          { x: "-50%" },
          {
            x: "0%",
            duration: 20,
            ease: "none",
            repeat: -1,
          }
        );
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const renderLogoCard = (logo, index) => (
    <div key={index} className="flex-shrink-0 mx-2 sm:mx-4">
      <div className="flex justify-center items-center p-3 sm:p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={logo}
          alt={`Logo ${index + 1}`}
          className="object-contain h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
        />
      </div>
    </div>
  );

  return (
    <div className="!max-w-7xl mx-auto py-10 overflow-hidden">
      {children}

      <div ref={containerRef} className="space-y-8">
        {/* Top Row Heading */}
        {/* <div>
          <h2 className="text-center font-bold text-2xl mb-8">Our Partners</h2>
          <div className="relative">
            <div
              ref={topRowRef}
              className="flex whitespace-nowrap"
              style={{ width: "200%" }}
            >
              {partnerLogos.map(renderLogoCard)}
              {partnerLogos.map((logo, index) => renderLogoCard(logo, index + 14))}
            </div>
          </div>
        </div> */}

        {/* Bottom Row Heading */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Why Trust Us</h2>
          <div className="relative overflow-hidden">
            <div
              ref={bottomRowRef}
              className="grid items-center grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
              style={{ width: "200%" }}
            >
              {trustLogos.map((logo, index) => renderLogoCard(logo, index))}
              {/* Duplicate for seamless scrolling */}
              {trustLogos.map((logo, index) => renderLogoCard(logo, index + trustLogos.length))}
            </div>
          </div>
        </div>

        <div>
          <ClutchWidget/>
        </div>
      </div>
    </div>
  );
}

export default ClientGrid;