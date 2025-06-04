"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiBriefcase, FiClock, FiUsers } from "react-icons/fi";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";

export default function Banner() {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const statBubblesRef = useRef([]); // Reference for all stat bubbles
  const pathname = usePathname();
  const router = useRouter();

  // Fixed useEffect with proper cleanup
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

  // Animate banner background with scale effect
  tl.fromTo(
    ".banner-background-image",
    {
      scale: 1.3,
      filter: "blur(10px)",
    },
    {
      scale: 1,
      filter: "blur(0px)",
      duration: 1.8,
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

  // Text animations with SplitText if available
  if (typeof SplitText !== "undefined" && headingRef.current) {
    splitTextInstance = new SplitText(headingRef.current, {
      type: "words,chars",
    });
    // ... your text animation code
  }

  // Animate description text
  tl.fromTo(
    descriptionRef.current,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    },
    1
  );

  // Animate button
  tl.fromTo(
    buttonRef.current,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    1.2
  );

  // Get bubbles once and store reference
  const bubbles = document.querySelectorAll(".stat-bubble");
  const mobileStats = document.querySelectorAll(".mobile-stat");

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
      valueElement.textContent = finalValue + "+";
    }
  });

  // Function to animate the counter for each stat value
  function animateCounter(element) {
    const finalValue = parseInt(element.getAttribute("data-value"));
    gsap.set(element, { textContent: "0" });
    gsap.to(element, {
      textContent: finalValue,
      duration: 1,
      ease: "power1.inOut",
      snap: { textContent: 1 },
      onUpdate: function () {
        element.textContent =
          Math.round(gsap.getProperty(element, "textContent")) + "+";
      },
    });
  }

  // Create mouse move handler function that we can properly remove
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
          // Your counter animation logic here
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

  // Add mouse move event listener
  document.addEventListener("mousemove", mouseMoveHandler);

  // Mobile stats animation
  gsap.set(mobileStats, {
    opacity: 0,
    y: 20,
  });

  gsap.to(mobileStats, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)",
    delay: 0.3,
  });

  // Initialize mobile counters
  mobileStats.forEach((stat) => {
    const valueElement = stat.querySelector(".mobile-value");
    if (valueElement) {
      const finalValue = parseInt(valueElement.getAttribute("data-value"));
      valueElement.textContent = finalValue + "+";
    }
  });

  // Handle touch events for mobile devices
  mobileStats.forEach((stat) => {
    const valueElement = stat.querySelector(".mobile-value");
    let hasTriggeredCounter = false;

    const touchHandler = () => {
      if (valueElement && !hasTriggeredCounter) {
        const finalValue = parseInt(valueElement.getAttribute("data-value"));
        gsap.set(valueElement, { textContent: "0" });
        gsap.to(valueElement, {
          textContent: finalValue,
          duration: 1,
          ease: "power1.inOut",
          snap: { textContent: 1 },
          onUpdate: function () {
            valueElement.textContent =
              Math.round(gsap.getProperty(valueElement, "textContent")) + "+";
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

  // Scroll animations
  const scrollTriggers = [
    ScrollTrigger.create({
      animation: gsap.to(".banner-background-image", {
        y: "25%",
        ease: "none",
      }),
      trigger: bannerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    }),
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
  ];

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
}, [pathname]);

  return (
    <section
      ref={bannerRef}
      className="w-full bg-white relative overflow-hidden h-screen max-w-full mt-4"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="banner-background-image absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/background/home-bg2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="banner-overlay absolute inset-0 bg-gradient-to-b"></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-center px-4">
        <div className="banner-content text-center w-full">
          {/* Google Partner Logo */}
          <div className="mb-4">
            <img 
              width={100} 
              height={100} 
              className="mx-auto sm:w-[240px]" 
              src="/images/logo/Google Premier Partner.webp"
              alt="Google Premier Partner"
            />
          </div>

          {/* Badge Text */}
          <div className="inline-block px-4 py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20">
            <p>Top 3% Digital Marketing Agency in India</p>
          </div>

          {/* Main heading with responsive sizes */}
          <h1
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
          >
            Strategic Digital Growth with <br className="hidden sm:block" />
            ShootOrder's Expertise
          </h1>

          {/* Description with responsive sizing */}
          <p
            ref={descriptionRef}
            className="max-w-xl mx-auto text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-4 sm:px-0"
          >
            ShootOrder stands as the forefront leader in providing comprehensive
            digital marketing solutions in Hyderabad, India.
          </p>

          <div ref={buttonRef}>
            <Button 
              className="group relative overflow-hidden !bg-white !text-black font-semibold px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
              onClick={(e) => {
                // Create ripple effect
                const ripple = document.createElement('div');
                const rect = e.target.getBoundingClientRect();
                ripple.className = 'absolute animate-ripple rounded-full bg-gray-200';
                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                e.target.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => ripple.remove(), 1000);
                
                // Navigate with slight delay for visual feedback
                setTimeout(() => router.push('/contact-us'), 200);
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Enquire Now
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
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

      {/* Floating Stat Bubbles - Desktop - Constrained positioning with enhanced styling */}
      <div className="hidden md:block absolute inset-0 pointer-events-auto max-w-full">
        <div
          className="stat-bubble absolute top-1/4 left-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer"
          ref={(el) => (statBubblesRef.current[0] = el)}
        >
          <div
            className="text-2xl font-bold text-white stat-value"
            data-value="50"
          >
            50+
          </div>
          <div className="text-sm text-white/90">Ongoing Projects</div>
        </div>

        <div
          className="stat-bubble absolute top-1/5 right-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer"
          ref={(el) => (statBubblesRef.current[1] = el)}
        >
          <div
            className="text-2xl font-bold text-white stat-value"
            data-value="12"
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
          >
            92+
          </div>
          <div className="text-sm text-white/90">Client Retention</div>
        </div>
      </div>

      {/* Down Arrow Indicator with enhanced animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>

      {/* Mobile Stats - Updated styling */}
      <div className="block md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-4 w-full">
        <div className="grid grid-cols-3 gap-2">
          <div className="mobile-stat bg-white/10 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center">
            <FiBriefcase className="text-lg text-white mb-1" />
            <div className="text-base font-semibold text-white mobile-value" data-value="50">
              50+
            </div>
            <div className="text-[10px] text-white/80 text-center">Projects</div>
          </div>

          <div className="mobile-stat bg-white/10 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center">
            <FiClock className="text-lg text-white mb-1" />
            <div className="text-base font-semibold text-white mobile-value" data-value="12">
              12+
            </div>
            <div className="text-[10px] text-white/80 text-center">Experience</div>
          </div>

          <div className="mobile-stat bg-white/10 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center">
            <FiUsers className="text-lg text-white mb-1" />
            <div className="text-base font-semibold text-white mobile-value" data-value="92">
              92+
            </div>
            <div className="text-[10px] text-white/80 text-center">Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
