"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedIntro() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  const bgRefs = useRef([]);

  // Initialize mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mobile detection - only run after mount
  useEffect(() => {
    if (!isMounted) return;
    
    const checkMobile = () => {
      const mobile =
        window.innerWidth <= 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMounted]);

  // Mobile: IntersectionObserver
  useEffect(() => {
    if (!isMounted || !isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMounted, isMobile]);

  // Desktop: GSAP animation
  useEffect(() => {
    if (!isMounted || isMobile || !paragraphRef.current) return;

    const element = paragraphRef.current;
    const words = element.textContent.split(" ");
    element.innerHTML = "";

    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.marginRight = "0.25em";

      if (["Premier", "Google", "Ads", "USA."].includes(word)) {
        wordSpan.style.color = "#9a0c28";
      }

      word.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.opacity = "0";
        charSpan.style.display = "inline-block";
        charSpan.style.transform = "translateY(50px)";
        charSpan.classList.add("char");
        wordSpan.appendChild(charSpan);
      });

      element.appendChild(wordSpan);
    });

    const chars = element.querySelectorAll(".char");

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom+=100 top",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    bgRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.to(ref, {
          y: "+=40",
          x: "+=20",
          repeat: -1,
          yoyo: true,
          duration: 6 + i,
          ease: "sine.inOut",
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [isMounted, isMobile]);

  const renderMobileText = () => {
    const text =
      "A Google Ads Premier Partner delivering 360° Digital Growth across the USA.";
    return text.split(" ").map((word, index) => {
      const isHighlighted = ["Premier", "Google", "Ads", "USA."].includes(word);
      return (
        <span
          key={index}
          className={`inline-block mr-1 transition-all duration-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${isHighlighted ? "text-[#9a0c28]" : "text-black"}`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {word}
        </span>
      );
    });
  };

  // Fixed bubble positions to avoid hydration mismatch
  const bubblePositions = [
    { left: 10, top: 20 },
    { left: 80, top: 15 },
    { left: 15, top: 70 },
    { left: 85, top: 60 },
    { left: 50, top: 10 },
    { left: 60, top: 80 }
  ];

  // Render nothing until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <section className="relative h-3/4 md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="text-black font-bold leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-6xl px-4">
            A Google Ads Premier Partner delivering 360° Digital Growth across the USA.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={`relative h-3/4 md:min-h-screen flex items-center justify-center overflow-hidden ${
        isMobile ? "px-4 py-8" : ""
      }`}
    >
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubblePositions.map((position, i) => (
          <div
            key={i}
            ref={(el) => (bgRefs.current[i] = el)}
            className={`absolute rounded-full ${
              isMobile ? "animate-pulse" : ""
            }`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${position.left}%`,
              top: `${position.top}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div
          ref={paragraphRef}
          className={`text-black font-bold leading-relaxed ${
            isMobile ? "text-2xl sm:text-3xl px-4" : "text-4xl lg:text-6xl"
          }`}
        >
          {isMobile
            ? renderMobileText()
            : "A Google Ads Premier Partner delivering 360° Digital Growth Marketing across the USA."}
        </div>
      </div>
    </section>
  );
}