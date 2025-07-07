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
  const statBubblesRef = useRef([]); // Reference for all stat bubbles
  const pathname = usePathname();
  const router = useRouter();
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


  // Fixed useEffect with proper cleanup and mobile-specific animations
  useEffect(() => {
    // Make sure GSAP plugins are registered
    if (typeof window !== "undefined") {
      gsap.registerPlugin(SplitText, ScrollTrigger);
    }

    // Create timeline for banner entrance animation
    const tl = gsap.timeline();

    // Store references for cleanup
    let mouseMoveHandler;
    const touchHandlers = new Map();
    let splitTextInstance;

    // Add a small delay before starting animations
    tl.set(".banner-overlay", { opacity: 0 });

    // Animate banner background with scale effect (reduced for mobile)
    tl.fromTo(
      ".banner-background-image",
      {
        scale: isMobile ? 1.05 : 1.3, // Reduced scale for mobile
        filter: "blur(10px)",
      },
      {
        scale: 1,
        filter: "blur(0px)",
        duration: isMobile ? 1.0 : 1.8, // Faster on mobile
        ease: "power3.out",
      },
      0
    );

    // Animate the banner overlay gradient
    tl.to(
      ".banner-overlay",
      { opacity: 1, duration: 1.5, ease: "power1.inOut" },
      0.2
    );

    // Text animations with SplitText if available (desktop only for performance)
    if (typeof SplitText !== "undefined" && headingRef.current && !isMobile) {
      splitTextInstance = new SplitText(headingRef.current, {
        type: "words,chars",
      });

      tl.fromTo(
        splitTextInstance.chars,
        {
          y: 100,
          opacity: 0,
          rotateX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "back.out(1.7)",
        },
        0.8
      );
    } else if (headingRef.current) {
      // Simple animation for mobile or when SplitText is not available
      tl.fromTo(
        headingRef.current,
        {
          y: 30, // Reduced for mobile
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6, // Faster on mobile
          ease: "power2.out",
        },
        0.8
      );
    }

    // Animate description text
    tl.fromTo(
      descriptionRef.current,
      {
        y: isMobile ? 20 : 50, // Much less movement on mobile
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: isMobile ? 0.6 : 0.8,
        ease: "power2.out",
      },
      isMobile ? 0.9 : 1
    );

    // Animate button
    tl.fromTo(
      buttonRef.current,
      {
        y: isMobile ? 15 : 30, // Less movement on mobile
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      isMobile ? 1.1 : 1.2
    );

    // Get bubbles once and store reference
    const bubbles = document.querySelectorAll(".stat-bubble");
    const mobileStats = document.querySelectorAll(".mobile-stat");

    // Desktop bubble animations
    if (!isMobile && bubbles.length > 0) {
      // Show all bubbles immediately with a quick fade in
      gsap.set(bubbles, {
        opacity: 0,
        scale: 0.9,
        transformPerspective: 600,
        transformOrigin: "center center",
      });

      gsap.to(bubbles, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      // Initialize counters to their final values immediately
      bubbles.forEach((bubble) => {
        const valueElement = bubble.querySelector(".stat-value");
        if (valueElement) {
          const finalValue = parseInt(valueElement.getAttribute("data-value"));
          const suffix = valueElement.getAttribute("data-suffix") || "+";
          valueElement.textContent = finalValue + suffix;
        }
      });

      // Function to animate the counter for each stat value
      function animateCounter(element) {
        const finalValue = parseInt(element.getAttribute("data-value"));
        const suffix = element.getAttribute("data-suffix") || "+";
        gsap.set(element, { textContent: "0" });
        gsap.to(element, {
          textContent: finalValue,
          duration: 1,
          ease: "power1.inOut",
          snap: { textContent: 1 },
          onUpdate: function () {
            element.textContent =
              Math.round(gsap.getProperty(element, "textContent")) + suffix;
          },
        });
      }


      // Create mouse move handler function that we can properly remove (desktop only)
      mouseMoveHandler = (e) => {
        bubbles.forEach((bubble) => {
          const valueElement = bubble.querySelector(".stat-value");
          let rect = bubble.getBoundingClientRect();

          const bubbleCenterX = rect.left + rect.width / 2;
          const bubbleCenterY = rect.top + rect.height / 2;
          const distX = e.clientX - bubbleCenterX;
          const distY = e.clientY - bubbleCenterY;
          const distance = Math.sqrt(distX * distX + distY * distY);
          const maxDistance = 300;

          if (distance < maxDistance) {
            const intensity = 1 - distance / maxDistance;
            const rotateY = distX * 0.05 * intensity;
            const rotateX = -distY * 0.05 * intensity;

            gsap.to(bubble, {
              rotateY: rotateY,
              rotateX: rotateX,
              z: intensity * 30,
              duration: 0.5,
              ease: "power2.out",
            });

            if (distance < 100 && valueElement) {
              // Counter animation on hover
              animateCounter(valueElement);
            }
          } else {
            gsap.to(bubble, {
              rotateY: 0,
              rotateX: 0,
              z: 0,
              duration: 1,
              ease: "power2.out",
            });
          }
        });
      };

      // Add mouse move event listener (desktop only)
      document.addEventListener("mousemove", mouseMoveHandler);
    }

    // Mobile stats animation
    if (mobileStats.length > 0) {
      gsap.set(mobileStats, {
        opacity: 0,
        y: 15, // Less movement on mobile
        scale: 0.95,
      });

      gsap.to(mobileStats, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5, // Faster animation
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.5,
      });

      // Initialize mobile counters with proper suffixes
      mobileStats.forEach((stat) => {
        const valueElement = stat.querySelector(".mobile-value");
        if (valueElement) {
          const finalValue = parseInt(valueElement.getAttribute("data-value"));
          const suffix = valueElement.getAttribute("data-suffix") || "+";
          valueElement.textContent = finalValue + suffix;
        }
      });

      // Handle touch events for mobile devices
      mobileStats.forEach((stat) => {
        const valueElement = stat.querySelector(".mobile-value");
        let hasTriggeredCounter = false;

        const touchHandler = () => {
          if (valueElement && !hasTriggeredCounter) {
            const finalValue = parseInt(valueElement.getAttribute("data-value"));
            const suffix = valueElement.getAttribute("data-suffix") || "+";
            gsap.set(valueElement, { textContent: "0" });
            gsap.to(valueElement, {
              textContent: finalValue,
              duration: 1,
              ease: "power1.inOut",
              snap: { textContent: 1 },
              onUpdate: function () {
                valueElement.textContent =
                  Math.round(gsap.getProperty(valueElement, "textContent")) + suffix;
              },
            });

            gsap.to(stat, {
              scale: 1.05,
              duration: 0.2,
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to(stat, {
                  scale: 1,
                  duration: 0.2,
                  ease: "power1.inOut",
                });
              },
            });

            hasTriggeredCounter = true;
            setTimeout(() => {
              hasTriggeredCounter = false;
            }, 3000);
          }
        };

        // Store the handler for cleanup
        touchHandlers.set(stat, touchHandler);
        stat.addEventListener("touchstart", touchHandler);
      });
    }

    // Scroll animations (optimized for mobile)
    const scrollTriggers = [];

    if (!isMobile) {
      // Desktop parallax effects
      scrollTriggers.push(
        ScrollTrigger.create({
          animation: gsap.to(".banner-background-image", {
            y: "25%",
            ease: "none",
          }),
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        })
      );

      scrollTriggers.push(
        ScrollTrigger.create({
          animation: gsap.to(".banner-content", {
            y: "-15%",
            ease: "none",
          }),
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        })
      );
    } else {
      // Mobile - much more subtle parallax to avoid performance issues
      scrollTriggers.push(
        ScrollTrigger.create({
          animation: gsap.to(".banner-background-image", {
            y: "10%", // Very subtle
            ease: "none",
          }),
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2, // Slower scrub for smoother performance
        })
      );

      scrollTriggers.push(
        ScrollTrigger.create({
          animation: gsap.to(".banner-content", {
            y: "-5%", // Very subtle
            ease: "none",
          }),
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2, // Slower scrub for smoother performance
        })
      );
    }

    // PROPER CLEANUP FUNCTION
    return () => {
      // Kill the main timeline
      if (tl) {
        tl.kill();
      }

      // Kill all ScrollTriggers
      scrollTriggers.forEach(trigger => {
        if (trigger) {
          trigger.kill();
        }
      });

      // Kill all GSAP animations on elements
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

      // Remove event listeners properly
      if (mouseMoveHandler) {
        document.removeEventListener("mousemove", mouseMoveHandler);
      }

      // Remove touch handlers
      touchHandlers.forEach((handler, element) => {
        if (element && handler) {
          element.removeEventListener("touchstart", handler);
        }
      });

      // Clear the touch handlers map
      touchHandlers.clear();

      // Revert SplitText if it was used
      if (splitTextInstance) {
        splitTextInstance.revert();
      }

      // Clear any remaining ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger) {
          trigger.kill();
        }
      });
    };
  }, [pathname, isMobile]);

  const openPopup = (e) => {
    // Create ripple effect
    const ripple = document.createElement('div');
    const rect = e.target.getBoundingClientRect();
    ripple.className = 'absolute animate-ripple rounded-full bg-gray-200';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    e.target.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => ripple.remove(), 1000);

    // Open popup with slight delay for visual feedback
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
      {/* Background Image with Parallax Effect */}
      <div
        className="banner-background-image absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/background/banner-red.webp')",
          backgroundSize: isMobile ? "inherit" : "cover", // Changed to cover for mobile
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isMobile ? "scroll" : "scroll", // Changed to scroll for mobile performance
        }}
      ></div>

      {/* Gradient Overlay - Enhanced for mobile */}
      {/* <div className="banner-overlay absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div> */}

      {/* Main Content Container */}
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
            <p>In Top 3% Digital Marketing Agency</p>
          </div>

          {/* Main heading with responsive sizes */}
          <h1
            ref={headingRef}
            className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold leading-tight text-white px-2 flex-shrink-0"
          >
            Awarded #1
            Digital Marketing Agency
          </h1>

          {/* Description with responsive sizing */}
          <p
            ref={descriptionRef}
            className="!max-w-xl mx-auto text-white/90 text-xs sm:text-sm md:text-lg px-4 sm:px-0 leading-relaxed flex-shrink-0"
          >
            Marketing isn&apos;t magic, it&apos;s strategy. <br/>
            Elevate your brand with strategic <b>SEO, Paid Media, Content, and Social expertise.</b>
          </p>

          <div ref={buttonRef} className="flex-shrink-0">
            <Button
              className="group relative overflow-hidden !bg-white !text-black font-semibold px-5 py-3 md:px-8 md:py-6 text-sm md:text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
              onClick={openPopup}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(0)';
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

      {/* Floating Stat Bubbles - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-auto max-w-full">
        <div
          className="stat-bubble absolute top-1/4 left-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer"
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
          className="stat-bubble absolute top-1/5 right-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer"
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
          className="stat-bubble absolute bottom-1/4 right-[20%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer"
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

      {/* Mobile Stats - Fixed positioning and improved responsiveness */}
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