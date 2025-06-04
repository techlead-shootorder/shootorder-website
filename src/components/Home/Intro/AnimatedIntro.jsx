"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedIntro() {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;

    // Split paragraph into spans per word
    const splitWords = (element) => {
      const text = element.textContent;
      const words = text.split(" ");
      element.innerHTML = "";

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.marginRight = "0.25em";

        if (word === "Premier Google Ads" || word === "USA.") {
          wordSpan.style.color = "#9a0c28";
        }

        word.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.opacity = "0";
          span.style.display = "inline-block";
          span.style.transform = "translateY(50px)";
          span.classList.add("char");
          wordSpan.appendChild(span);
        });

        element.appendChild(wordSpan);
      });
    };

    splitWords(paragraph);
    const chars = paragraph.querySelectorAll(".char");

    // Animate each character with scroll
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex justify-center items-center overflow-hidden"
    >
      <div className="!max-w-7xl text-center px-4 z-10">
        <p
          ref={paragraphRef}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          A Premier Google Ads digital marketing agency offering end-to-end services across the USA.
        </p>
      </div>
    </section>
  );
}
