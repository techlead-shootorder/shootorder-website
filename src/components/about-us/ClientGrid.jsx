"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function ClientGrid({ children }) {
  const containerRef = useRef(null);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  const partnerLogos = Array.from(
    { length: 14 },
    (_, i) => `/images/logo/${i + 1}.jpg`
  );

  // Split logos into two rows
  const topRowLogos = partnerLogos.slice(0, 7);
  const bottomRowLogos = partnerLogos.slice(7, 14);

  useEffect(() => {
    // Wait for page to load completely
    const handleLoad = () => {
      if (topRowRef.current && bottomRowRef.current) {
        // Create continuous horizontal scroll for top row (left to right)
        gsap.to(topRowRef.current, {
          x: "-50%",
          duration: 20,
          ease: "none",
          repeat: -1,
        });

        // Create continuous horizontal scroll for bottom row (right to left)
        gsap.fromTo(bottomRowRef.current, 
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

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const renderLogoCard = (logo, index) => (
    <div key={index} className="flex-shrink-0 mx-4">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt={`Partner ${index + 1}`}
          className="object-contain h-16 w-16 md:h-40 md:w-40"
        />
      </div>
    </div>
  );

  return (
    <div className="!max-w-7xl mx-auto overflow-hidden">
      {children}
      
      <div ref={containerRef} className="space-y-4">
        {/* Top Row - Moving Right */}
        <div className="relative">
          <div 
            ref={topRowRef}
            className="flex whitespace-nowrap"
            style={{ width: '200%' }}
          >
            {/* First set */}
            {topRowLogos.map(renderLogoCard)}
            {/* Duplicate set for seamless loop */}
            {topRowLogos.map((logo, index) => renderLogoCard(logo, index + 7))}
          </div>
        </div>

        {/* Bottom Row - Moving Left */}
        <div className="relative">
          <div 
            ref={bottomRowRef}
            className="flex whitespace-nowrap"
            style={{ width: '200%' }}
          >
            {/* First set */}
            {bottomRowLogos.map(renderLogoCard)}
            {/* Duplicate set for seamless loop */}
            {bottomRowLogos.map((logo, index) => renderLogoCard(logo, index + 7))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientGrid;