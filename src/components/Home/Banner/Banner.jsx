"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiBriefcase, FiClock, FiUsers } from "react-icons/fi";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function Banner() {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const statBubblesRef = useRef([]); // Reference for all stat bubbles
  const pathname = usePathname();
  
  useEffect(() => {
    // Make sure GSAP plugins are registered
    if (typeof window !== "undefined") {
      gsap.registerPlugin(SplitText, ScrollTrigger);
    }
    
    // Create timeline for banner entrance animation
    const tl = gsap.timeline();
    
    // Add a small delay before starting animations
    tl.set(".banner-overlay", { opacity: 0 });
    
    // Animate banner background with scale effect
    tl.fromTo(".banner-background-image", 
      { 
        scale: 1.3,
        filter: "blur(10px)"
      },
      { 
        scale: 1, 
        filter: "blur(0px)",
        duration: 1.8, 
        ease: "power3.out" 
      }, 
      0
    );
    
    // Animate the banner overlay gradient
    tl.to(".banner-overlay", { opacity: 1, duration: 1.5, ease: "power1.inOut" }, 0.2);
    
    // Text animations with SplitText if available
    if (typeof SplitText !== "undefined" && headingRef.current) {
      const headingSplit = new SplitText(headingRef.current, { type: "words,chars" });
      const chars = headingSplit.chars;
      
      // tl.fromTo(chars, 
      //   {
      //     y: 100,
      //     opacity: 0
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     stagger: 0.03,
      //     duration: 1,
      //     ease: "power3.out"
      //   }, 
      //   0.7
      // );
    } else {
      // Fallback if SplitText is not available
      // tl.fromTo(headingRef.current, 
      //   { 
      //     y: 100, 
      //     opacity: 0 
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 1,
      //     ease: "power2.out"
      //   }, 
      //   0.7
      // );
    }
    
    // Animate description text
    tl.fromTo(descriptionRef.current,
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      1
    );
    
    // Animate button
    tl.fromTo(buttonRef.current,
      { 
        y: 30, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      },
      1.2
    );
    
    // IMPROVED STAT BUBBLES ANIMATIONS
    // Make them appear much earlier in the sequence
    const bubbles = document.querySelectorAll('.stat-bubble');
    
    // Show all bubbles immediately with a quick fade in
    gsap.set(bubbles, { 
      opacity: 0,
      scale: 0.9,
      transformPerspective: 600,
      transformOrigin: "center center"
    });
    
    // Immediately show the bubbles with a quick animation
    gsap.to(bubbles, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.3 // Very short delay
    });
    
    // Initialize counters to their final values immediately
    bubbles.forEach(bubble => {
      const valueElement = bubble.querySelector('.stat-value');
      if (valueElement) {
        const finalValue = parseInt(valueElement.getAttribute('data-value'));
        valueElement.textContent = finalValue + "+";
      }
    });
    
    // Function to animate the counter for each stat value
    // This will now be triggered on mouse events, not automatically
    function animateCounter(element) {
      const finalValue = parseInt(element.getAttribute('data-value'));
      
      // Reset to 0 first
      gsap.set(element, { textContent: "0" });
      
      // Then count up quickly
      gsap.to(element, {
        textContent: finalValue,
        duration: 1,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        onUpdate: function() {
          element.textContent = Math.round(gsap.getProperty(element, "textContent")) + "+";
        }
      });
    }
    
    // 3D mouse movement effect for stat bubbles
    bubbles.forEach(bubble => {
      const valueElement = bubble.querySelector('.stat-value');
      let hasTriggeredCounter = false;
      let rect = bubble.getBoundingClientRect();
      
      // Mouse move effect - make bubbles follow cursor in 3D space
      document.addEventListener('mousemove', (e) => {
        // Update the bounding rect in case of scroll or resize
        rect = bubble.getBoundingClientRect();
        
        // Calculate mouse position relative to the center of the bubble
        const bubbleCenterX = rect.left + rect.width / 2;
        const bubbleCenterY = rect.top + rect.height / 2;
        
        // Calculate distance between mouse and bubble
        const distX = e.clientX - bubbleCenterX;
        const distY = e.clientY - bubbleCenterY;
        
        // Calculate distance from mouse to bubble center
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Only apply effect if mouse is within a certain range
        const maxDistance = 300; // Adjust as needed
        
        if (distance < maxDistance) {
          // Calculate movement intensity based on distance (closer = stronger effect)
          const intensity = 1 - (distance / maxDistance);
          
          // Calculate rotation amounts (max 15 degrees)
          const rotateY = distX * 0.05 * intensity;
          const rotateX = -distY * 0.05 * intensity;
          
          // Apply the 3D transformation
          gsap.to(bubble, {
            rotateY: rotateY,
            rotateX: rotateX,
            z: intensity * 30, // Push forward slightly when mouse is close
            duration: 0.5,
            ease: "power2.out"
          });
          
          // If mouse is very close to bubble and counter hasn't been triggered yet
          if (distance < 100 && !hasTriggeredCounter && valueElement) {
            animateCounter(valueElement);
            hasTriggeredCounter = true;
            
            // Add a subtle pulse effect
            gsap.to(bubble, {
              scale: 1.05,
              duration: 0.3,
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to(bubble, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power1.inOut"
                });
              }
            });
            
            // Reset the trigger after a delay to allow re-triggering
            setTimeout(() => {
              hasTriggeredCounter = false;
            }, 5000);
          }
        } else {
          // Reset to default state when mouse is far away
          gsap.to(bubble, {
            rotateY: 0,
            rotateX: 0,
            z: 0,
            duration: 1,
            ease: "power2.out"
          });
        }
      });
    });
    
    // Mobile stats animation with immediate appearance
    const mobileStats = document.querySelectorAll('.mobile-stat');
    gsap.set(mobileStats, { 
      opacity: 0,
      y: 20
    });
    
    gsap.to(mobileStats, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.3
    });
    
    // Initialize mobile counters to their final values
    mobileStats.forEach(stat => {
      const valueElement = stat.querySelector('.mobile-value');
      if (valueElement) {
        const finalValue = parseInt(valueElement.getAttribute('data-value'));
        valueElement.textContent = finalValue + "+";
      }
    });
    
    // Scroll animations with enhanced parallax effect
    gsap.to(".banner-background-image", {
      y: "25%",
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    gsap.to(".banner-content", {
      y: "-15%",
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5
      }
    });
    
    // Handle touch events for mobile devices
    mobileStats.forEach(stat => {
      const valueElement = stat.querySelector('.mobile-value');
      let hasTriggeredCounter = false;
      
      // Touch interaction for mobile stats
      stat.addEventListener('touchstart', () => {
        if (valueElement && !hasTriggeredCounter) {
          // Get final value
          const finalValue = parseInt(valueElement.getAttribute('data-value'));
          
          // Reset to 0
          gsap.set(valueElement, { textContent: "0" });
          
          // Animate to final value
          gsap.to(valueElement, {
            textContent: finalValue,
            duration: 1,
            ease: "power1.inOut",
            snap: { textContent: 1 },
            onUpdate: function() {
              valueElement.textContent = Math.round(gsap.getProperty(valueElement, "textContent")) + "+";
            }
          });
          
          // Add pulse effect
          gsap.to(stat, {
            scale: 1.05,
            duration: 0.2,
            ease: "power1.inOut",
            onComplete: () => {
              gsap.to(stat, {
                scale: 1,
                duration: 0.2,
                ease: "power1.inOut"
              });
            }
          });
          
          hasTriggeredCounter = true;
          
          // Reset after delay
          setTimeout(() => {
            hasTriggeredCounter = false;
          }, 3000);
        }
      });
    });
    
    return () => {
      // Clean up animations
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners to prevent memory leaks
      document.removeEventListener('mousemove', () => {});
      bubbles.forEach(bubble => {
        bubble.removeEventListener('mouseenter', () => {});
        bubble.removeEventListener('mouseleave', () => {});
      });
      mobileStats.forEach(stat => {
        stat.removeEventListener('touchstart', () => {});
      });
    };
  }, [pathname]);

  return (
    <section ref={bannerRef} className="w-full bg-white relative overflow-hidden h-screen max-w-full ">
      {/* Background Image with Parallax Effect */}
      <div 
        className="banner-background-image absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/background/home-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="banner-overlay absolute inset-0 bg-gradient-to-b"></div>
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-center px-4">
        <div className="banner-content text-center w-full">
          <div className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20">
            Find, hire & manage your offshore team seamlessly.
          </div>
          
          <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Strategic Digital Growth with <br className="hidden sm:block" />
            ShootOrder's Expertise
          </h1>
          
          <p ref={descriptionRef} className="max-w-xl mx-auto text-white/90 text-lg mb-8">
            ShootOrder stands as the forefront leader in providing comprehensive
            digital marketing solutions in Hyderabad, India.
          </p>
          
          <div ref={buttonRef}>
            <Button className="bg-white text-black font-semibold px-8 py-6 text-lg rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-lg">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Stat Bubbles - Desktop - Constrained positioning with enhanced styling */}
      <div className="hidden md:block absolute inset-0 pointer-events-auto max-w-full">
        <div 
          className="stat-bubble absolute top-1/4 left-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer"
          ref={el => statBubblesRef.current[0] = el}
        >
          <div className="text-2xl font-bold text-white stat-value" data-value="50">50+</div>
          <div className="text-sm text-white/90">Ongoing Projects</div>
        </div>
        
        <div 
          className="stat-bubble absolute top-1/5 right-[15%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer"
          ref={el => statBubblesRef.current[1] = el}
        >
          <div className="text-2xl font-bold text-white stat-value" data-value="12">12+</div>
          <div className="text-sm text-white/90">Years of Experience</div>
        </div>
        
        <div 
          className="stat-bubble absolute bottom-1/4 right-[20%] bg-white/10 backdrop-blur-lg text-center px-6 py-4 rounded-xl border border-white/30 shadow-xl cursor-pointer"
          ref={el => statBubblesRef.current[2] = el}
        >
          <div className="text-2xl font-bold text-white stat-value" data-value="92">92+</div>
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
      
      {/* Mobile Stats with enhanced styling and animations */}
      <div className="block md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-6 w-full">
        <div className="grid grid-cols-3 gap-3">
          <div className="mobile-stat bg-white/10 backdrop-blur-sm p-3 rounded-xl flex flex-col items-center justify-center cursor-pointer">
            <FiBriefcase className="text-xl text-white" />
            <div className="text-lg font-semibold text-white mobile-value" data-value="50">50+</div>
            <div className="text-xs text-white/80 text-center">Projects</div>
          </div>
          
          <div className="mobile-stat bg-white/10 backdrop-blur-sm p-3 rounded-xl flex flex-col items-center justify-center cursor-pointer">
            <FiClock className="text-xl text-white" />
            <div className="text-lg font-semibold text-white mobile-value" data-value="12">12+</div>
            <div className="text-xs text-white/80 text-center">Experience</div>
          </div>
          
          <div className="mobile-stat bg-white/10 backdrop-blur-sm p-3 rounded-xl flex flex-col items-center justify-center cursor-pointer">
            <FiUsers className="text-xl text-white" />
            <div className="text-lg font-semibold text-white mobile-value" data-value="92">92+</div>
            <div className="text-xs text-white/80 text-center">Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}