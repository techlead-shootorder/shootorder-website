"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiBriefcase, FiClock, FiUsers } from "react-icons/fi";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import PopupModal from "@/components/Modal/PopupModal";

export default function Banner() {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const statBubblesRef = useRef([]);
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Store all animations for cleanup
  const animationsRef = useRef([]);
  const scrollTriggersRef = useRef([]);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(SplitText, ScrollTrigger);
    }

    // Clear previous animations
    animationsRef.current.forEach(anim => anim && anim.kill && anim.kill());
    scrollTriggersRef.current.forEach(trigger => trigger && trigger.kill && trigger.kill());
    animationsRef.current = [];
    scrollTriggersRef.current = [];

    // Create main timeline for entrance animation
    const tl = gsap.timeline({ paused: true });
    animationsRef.current.push(tl);

    // Store references for cleanup
    let mouseMoveHandler;
    const touchHandlers = new Map();
    let splitTextInstance;

    // Initial setup
    gsap.set(".banner-overlay", { opacity: 0 });

    // Background animation - much more subtle
    const bgAnim = gsap.fromTo(
      ".banner-background-image",
      {
        scale: isMobile ? 1.02 : 1.1, // Much more subtle
        filter: "blur(5px)", // Less blur
      },
      {
        scale: 1,
        filter: "blur(0px)",
        duration: isMobile ? 0.8 : 1.2, // Faster
        ease: "power2.out", // Smoother ease
      }
    );
    tl.add(bgAnim, 0);

    // Overlay animation
    const overlayAnim = gsap.to(".banner-overlay", { 
      opacity: 1, 
      duration: 1, 
      ease: "power1.inOut" 
    });
    tl.add(overlayAnim, 0.2);

    // Text animations
    if (typeof SplitText !== "undefined" && headingRef.current && !isMobile) {
      splitTextInstance = new SplitText(headingRef.current, {
        type: "words,chars",
      });

      const headingAnim = gsap.fromTo(
        splitTextInstance.chars,
        {
          y: 50, // Reduced movement
          opacity: 0,
          rotateX: -45, // Less rotation
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.015, // Faster stagger
          ease: "back.out(1.4)", // Less bouncy
        }
      );
      tl.add(headingAnim, 0.6);
    } else if (headingRef.current) {
      const headingAnim = gsap.fromTo(
        headingRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      tl.add(headingAnim, 0.6);
    }

    // Description animation
    if (descriptionRef.current) {
      const descAnim = gsap.fromTo(
        descriptionRef.current,
        { y: isMobile ? 15 : 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      tl.add(descAnim, 0.8);
    }

    // Button animation
    if (buttonRef.current) {
      const buttonAnim = gsap.fromTo(
        buttonRef.current,
        { y: isMobile ? 10 : 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.4)" }
      );
      tl.add(buttonAnim, 0.9);
    }

    // Stats animations - much simpler
    const bubbles = document.querySelectorAll(".stat-bubble");
    const mobileStats = document.querySelectorAll(".mobile-stat");

    if (!isMobile && bubbles.length > 0) {
      // Simple fade in for bubbles
      gsap.set(bubbles, { opacity: 0, scale: 0.95 });
      const bubblesAnim = gsap.to(bubbles, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
      tl.add(bubblesAnim, 0.8);

      // Initialize counter values immediately
      bubbles.forEach((bubble) => {
        const valueElement = bubble.querySelector(".stat-value");
        if (valueElement) {
          const finalValue = parseInt(valueElement.getAttribute("data-value"));
          const suffix = valueElement.getAttribute("data-suffix") || "+";
          valueElement.textContent = finalValue + suffix;
        }
      });

      // Much simpler mouse interaction - only on hover
      bubbles.forEach((bubble) => {
        bubble.addEventListener('mouseenter', () => {
          gsap.to(bubble, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        bubble.addEventListener('mouseleave', () => {
          gsap.to(bubble, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }

    if (mobileStats.length > 0) {
      gsap.set(mobileStats, { opacity: 0, y: 10, scale: 0.98 });
      const mobileAnim = gsap.to(mobileStats, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
      });
      tl.add(mobileAnim, 0.6);

      // Initialize mobile values
      mobileStats.forEach((stat) => {
        const valueElement = stat.querySelector(".mobile-value");
        if (valueElement) {
          const finalValue = parseInt(valueElement.getAttribute("data-value"));
          const suffix = valueElement.getAttribute("data-suffix") || "+";
          valueElement.textContent = finalValue + suffix;
        }
      });
    }

    // REMOVED PARALLAX SCROLL ANIMATIONS - This is likely causing the friction!
    // The parent component should handle all scroll animations

    // Play the entrance animation
    tl.play();

    // CLEANUP FUNCTION
    return () => {
      // Kill main timeline
      if (tl) {
        tl.kill();
      }

      // Kill all stored animations
      animationsRef.current.forEach(anim => {
        if (anim && anim.kill) {
          anim.kill();
        }
      });
      animationsRef.current = [];

      // Kill all ScrollTriggers
      scrollTriggersRef.current.forEach(trigger => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];

      // Kill tweens on specific elements
      gsap.killTweensOf([
        ".banner-background-image",
        ".banner-overlay",
        ".banner-content",
        bubbles,
        mobileStats,
        headingRef.current,
        descriptionRef.current,
        buttonRef.current
      ]);

      // Remove event listeners
      if (mouseMoveHandler) {
        document.removeEventListener("mousemove", mouseMoveHandler);
      }

      // Remove touch handlers
      touchHandlers.forEach((handler, element) => {
        if (element && handler) {
          element.removeEventListener("touchstart", handler);
        }
      });
      touchHandlers.clear();

      // Revert SplitText
      if (splitTextInstance) {
        splitTextInstance.revert();
      }

      // Clean up any remaining ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
    };
  }, [pathname, isMobile]);

  const openPopup = (e) => {
    // Simple ripple effect
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
        {/* Background Image - REMOVED parallax transforms */}
        <div
          className="banner-background-image absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/background/banner-red.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll", // Always scroll for performance
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="banner-overlay absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>

        {/* Main Content Container - REMOVED parallax class */}
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-center px-4">
          <div className="banner-content text-center w-full flex flex-col justify-center items-center h-full space-y-4 md:space-y-6">
            {/* Google Partner Logo */}
            <div className="flex-shrink-0">
              <img
                width={isMobile ? 150 : 240}
                height={isMobile ? 100 : 100}
                className="mx-auto w-28 h-28 sm:w-16 sm:h-16 md:w-[240px] md:h-auto object-contain"
                src="/images/logo/Google Premier Partner.webp"
                alt="Google Premier Partner"
              />
            </div>

            {/* Badge Text */}
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 flex-shrink-0">
              <p>In Top 3% Digital Growth Partner</p>
            </div>

            {/* Main heading */}
            <h1
              ref={headingRef}
              className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold leading-tight text-white px-2 flex-shrink-0"
            >
              Awarded #1
              Digital Growth Partner
            </h1>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="!max-w-xl mx-auto text-white/90 text-xs sm:text-sm md:text-lg px-4 sm:px-0 leading-relaxed flex-shrink-0"
            >
              Marketing isn&apos;t magic, it&apos;s strategy. <br/>
              Elevate your brand with strategic <b>SEO, Paid Media, Content, and Social expertise.</b>
            </p>

            {/* Button */}
            <div ref={buttonRef} className="flex-shrink-0">
              <Button
                className="group relative overflow-hidden !bg-white !text-black font-semibold px-5 py-3 md:px-8 md:py-6 text-sm md:text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
                onClick={openPopup}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    gsap.to(e.target, { y: -2, duration: 0.2 });
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    gsap.to(e.target, { y: 0, duration: 0.2 });
                  }
                }}
              >
                <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                  Enquire Now
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stat Bubbles - Desktop Only - Simplified */}
        <div className="hidden lg:block absolute inset-0 pointer-events-auto max-w-full">
          <div
            className="stat-bubble absolute top-1/4 left-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer transition-all duration-300"
            ref={(el) => (statBubblesRef.current[0] = el)}
          >
            <div
              className="text-2xl font-bold text-white stat-value"
              data-value="50"
              data-suffix="+"
            >
              50+
            </div>
            <div className="text-sm text-white/90">Retainership</div>
          </div>

          <div
            className="stat-bubble absolute top-1/5 right-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer transition-all duration-300"
            ref={(el) => (statBubblesRef.current[1] = el)}
          >
            <div
              className="text-2xl font-bold text-white stat-value"
              data-value="12"
              data-suffix="+"
            >
              12+
            </div>
            <div className="text-sm text-white/90">Years of Experience</div>
          </div>

          <div
            className="stat-bubble absolute bottom-1/4 right-[20%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer transition-all duration-300"
            ref={(el) => (statBubblesRef.current[2] = el)}
          >
            <div
              className="text-2xl font-bold text-white stat-value"
              data-value="92"
              data-suffix="%"
            >
              92%
            </div>
            <div className="text-sm text-white/90">Client Retention</div>
          </div>
        </div>

        {/* Down Arrow Indicator */}
        <div className="hidden md:block absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce md:w-6 md:h-6"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>

        {/* Mobile Stats */}
        <div className="block lg:hidden absolute bottom-2 inset-x-0 px-3 w-full">
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            <div className="mobile-stat bg-[#9a0c28]/90 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center min-h-[70px]">
              <FiBriefcase className="text-sm text-white mb-1" />
              <div className="text-sm font-semibold text-white mobile-value" data-value="50" data-suffix="+">
                50+
              </div>
              <div className="text-[8px] text-white/80 text-center leading-tight">Retainership</div>
            </div>

            <div className="mobile-stat bg-[#9a0c28]/90 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center min-h-[70px]">
              <FiClock className="text-sm text-white mb-1" />
              <div className="text-sm font-semibold text-white mobile-value" data-value="12" data-suffix="+">
                12+
              </div>
              <div className="text-[8px] text-white/80 text-center leading-tight">Experience</div>
            </div>

            <div className="mobile-stat bg-[#9a0c28]/90 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center min-h-[70px]">
              <FiUsers className="text-sm text-white mb-1" />
              <div className="text-sm font-semibold text-white mobile-value" data-value="92" data-suffix="%">
                92%
              </div>
              <div className="text-[8px] text-white/80 text-center leading-tight">Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}