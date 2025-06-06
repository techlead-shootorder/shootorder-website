"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedIntro() {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  const bgRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for mobile animation trigger
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  // GSAP for desktop
  useEffect(() => {
    if (isMobile || typeof window === "undefined") return;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const paragraph = paragraphRef.current;

        const splitWords = (element) => {
          const text = element.textContent;
          const words = text.split(" ");
          element.innerHTML = "";

          words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.style.marginRight = "0.25em";

            if (["Premier", "Google", "Ads", "USA."].includes(word)) {
              wordSpan.style.color = "#F94839";
            }

            word.split("").forEach((char, charIndex) => {
              const span = document.createElement("span");
              span.textContent = char;
              span.style.opacity = "0";
              span.style.display = "inline-block";
              span.style.transform = "translateY(50px)";
              span.classList.add("char");
              span.dataset.wordIndex = wordIndex;
              span.dataset.charIndex = charIndex;
              wordSpan.appendChild(span);
            });

            element.appendChild(wordSpan);
          });
        };

        splitWords(paragraph);
        const chars = paragraph.querySelectorAll(".char");

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

        // Floating background elements
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
      });
    });

    return () => {
      if (typeof window !== "undefined") {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        });
      }
    };
  }, [isMobile]);

  // Render animated text for mobile
  const renderMobileText = () => {
    const text =
      "A Premier Google Ads digital marketing agency offering end-to-end services across the USA.";
    const words = text.split(" ");

    return words.map((word, index) => {
      const isHighlighted = ["Premier", "Google", "Ads", "USA."].includes(word);
      return (
        <span
          key={index}
          className={`inline-block mr-1 transition-all duration-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${isHighlighted ? "text-red-500" : "text-white"}`}
          style={{
            transitionDelay: `${index * 100}ms`,
            animationDelay: `${index * 100}ms`,
          }}
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
      {/* Floating background bubbles */}
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
            : "A Premier Google Ads digital marketing agency offering end-to-end services across the USA."}
        </div>
      </div>

      {/* Keyframe for mobile floating effect */}
      <style jsx>{`
        @media (max-width: 768px) {
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        }
      `}</style>
    </section>
  );
}
