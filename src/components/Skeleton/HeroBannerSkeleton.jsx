"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroBannerSkeleton() {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const statBubblesRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openPopup = (e) => {
    // Create ripple effect
    const ripple = document.createElement('div');
    const rect = e.target.getBoundingClientRect();
    ripple.className = 'absolute animate-ripple rounded-full bg-gray-200';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    e.target.appendChild(ripple);

    setTimeout(() => ripple.remove(), 1000);
    setTimeout(() => setIsPopupOpen(true), 200);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <section
        ref={bannerRef}
        className="w-full bg-white relative overflow-hidden max-w-full my-6"
        style={{
          minHeight: '100vh',
          height: '100vh'
        }}
      >
        {/* Background Skeleton - Gradient placeholder */}
        <div
          className="banner-background-image absolute inset-0 w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 animate-pulse"
        ></div>

        {/* Overlay */}
        <div className="banner-overlay absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-center px-4">
          <div className="banner-content text-center w-full flex flex-col justify-center items-center h-full space-y-4 md:space-y-6">
            
            {/* Google Partner Logo Skeleton */}
            <div className="flex-shrink-0 animate-pulse">
              <div 
                className={`mx-auto bg-white/20 backdrop-blur-sm rounded-lg ${
                  isMobile ? 'w-28 h-28' : 'w-60 h-24'
                }`}
              ></div>
            </div>

            {/* Badge Skeleton */}
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex-shrink-0 animate-pulse">
              <div className="h-4 w-48 bg-white/30 rounded"></div>
            </div>

            {/* Main heading skeleton */}
            <div
              ref={headingRef}
              className="flex-shrink-0 px-2 animate-pulse space-y-2"
            >
              <div className="h-6 sm:h-8 md:h-16 lg:h-20 w-80 sm:w-96 md:w-[600px] lg:w-[700px] bg-white/20 backdrop-blur-sm rounded mx-auto"></div>
              <div className="h-6 sm:h-8 md:h-16 lg:h-20 w-72 sm:w-80 md:w-[500px] lg:w-[600px] bg-white/20 backdrop-blur-sm rounded mx-auto"></div>
            </div>

            {/* Description skeleton */}
            <div
              ref={descriptionRef}
              className="!max-w-xl mx-auto px-4 sm:px-0 flex-shrink-0 animate-pulse space-y-2"
            >
              <div className="h-4 md:h-6 w-full bg-white/20 backdrop-blur-sm rounded"></div>
              <div className="h-4 md:h-6 w-3/4 bg-white/20 backdrop-blur-sm rounded mx-auto"></div>
            </div>

            {/* Button skeleton */}
            <div ref={buttonRef} className="flex-shrink-0 animate-pulse">
              <div className="bg-white/20 backdrop-blur-sm px-5 py-3 md:px-8 md:py-6 rounded-full h-12 md:h-16 w-32 md:w-40"></div>
            </div>
          </div>
        </div>

        {/* Floating Stat Bubbles Skeleton - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-auto max-w-full">
          <div
            className="stat-bubble absolute top-1/4 left-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer animate-pulse"
            ref={(el) => (statBubblesRef.current[0] = el)}
          >
            <div className="h-8 w-12 bg-white/30 rounded mb-2 mx-auto"></div>
            <div className="h-4 w-20 bg-white/30 rounded mx-auto"></div>
          </div>

          <div
            className="stat-bubble absolute top-1/5 right-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer animate-pulse"
            ref={(el) => (statBubblesRef.current[1] = el)}
          >
            <div className="h-8 w-12 bg-white/30 rounded mb-2 mx-auto"></div>
            <div className="h-4 w-24 bg-white/30 rounded mx-auto"></div>
          </div>

          <div
            className="stat-bubble absolute bottom-1/4 right-[20%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer animate-pulse"
            ref={(el) => (statBubblesRef.current[2] = el)}
          >
            <div className="h-8 w-12 bg-white/30 rounded mb-2 mx-auto"></div>
            <div className="h-4 w-20 bg-white/30 rounded mx-auto"></div>
          </div>
        </div>

        {/* Down Arrow Indicator Skeleton */}
        <div className="hidden md:block absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-pulse">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-white/30 rounded-full animate-bounce"></div>
        </div>

        {/* Mobile Stats Skeleton */}
        <div className="block lg:hidden absolute bottom-2 inset-x-0 px-3 w-full">
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            {Array(3).fill().map((_, i) => (
              <div 
                key={i}
                className="mobile-stat bg-gray-400/70 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center min-h-[70px] animate-pulse"
              >
                <div className="w-4 h-4 bg-white/30 rounded mb-1"></div>
                <div className="h-4 w-8 bg-white/30 rounded mb-1"></div>
                <div className="h-3 w-12 bg-white/30 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal Skeleton */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-pulse">
            <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-3 mb-6">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex justify-end gap-3">
              <button 
                onClick={closePopup}
                className="px-4 py-2 bg-gray-200 rounded animate-pulse"
              >
                <div className="h-4 w-12 bg-gray-300 rounded"></div>
              </button>
              <div className="px-4 py-2 bg-gray-200 rounded animate-pulse">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}