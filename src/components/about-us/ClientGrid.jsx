"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
    "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1"
  ].map((name) => `/images/clients/${name}.jpg`);

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
    <div key={index} className="flex-shrink-0 mx-4">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt={`Logo ${index + 1}`}
          className="object-contain h-16 w-16 md:h-40 md:w-40"
        />
      </div>
    </div>
  );

  return (
    <div className="!max-w-7xl mx-auto overflow-hidden">
      {children}

      <div ref={containerRef} className="space-y-8">
        {/* Top Row Heading */}
        <div>
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
        </div>

        {/* Bottom Row Heading */}
        <div>
          <h2 className="text-center font-bold text-2xl mb-8">Why Trust Us</h2>
          <div className="relative">
            <div
              ref={bottomRowRef}
              className="flex whitespace-nowrap"
              style={{ width: "200%" }}
            >
              {trustLogos.map(renderLogoCard)}
              {trustLogos.map((logo, index) => renderLogoCard(logo, index + 10))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientGrid;
