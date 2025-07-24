"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedIntro() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  const bgRefs = useRef([]);

  // Mobile detection
  useEffect(() => {
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
  }, []);

  // Mobile: IntersectionObserver
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  // Desktop: GSAP animation
  useEffect(() => {
    if (isMobile || !paragraphRef.current) return;

    const element = paragraphRef.current;
    const words = element.textContent.split(" ");
    element.innerHTML = "";

    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.marginRight = "0.25em";

      if (["Premier", "Google", "Ads", "USA."].includes(word)) {
        wordSpan.style.color = "#F94839";
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
        end: "bottom+=1000 top",
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
  }, [isMobile]);

  const renderMobileText = () => {
    const text =
      "A Google Ads Premier Partner delivering 360° Digital Growth Partner across the USA.";
    return text.split(" ").map((word, index) => {
      const isHighlighted = ["Premier", "Google", "Ads", "USA."].includes(word);
      return (
        <span
          key={index}
          className={`inline-block mr-1 transition-all duration-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${isHighlighted ? "text-[#9a0c28]" : "text-white"}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden ${
        isMobile ? "px-4 py-8" : ""
      }`}
    >
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (bgRefs.current[i] = el)}
            className={`absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm ${
              isMobile ? "animate-pulse" : ""
            }`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          ref={paragraphRef}
          className={`text-white font-bold leading-relaxed ${
            isMobile ? "text-2xl sm:text-3xl px-4" : "text-4xl lg:text-6xl"
          }`}
        >
          {isMobile
            ? renderMobileText()
            : "A Google Ads Premier Partner delivering 360° Digital Growth Partner across the USA."}
        </div>
      </div>
    </section>
  );
}
