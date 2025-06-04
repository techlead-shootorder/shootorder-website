"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedIntro() {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  const bgRefs = useRef([]);

  useEffect(() => {
    const paragraph = paragraphRef.current;

    // Split paragraph into spans per word instead of character
    const splitWords = (element) => {
      const text = element.textContent;
      const words = text.split(" ");
      element.innerHTML = "";

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.marginRight = "0.25em";

        if (word === "passionate" || word === "team.") {
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

    // Animate each character with scroll
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

    // Animate floating background items
    bgRefs.current.forEach((ref, i) => {
      gsap.to(ref, {
        y: "+=40",
        x: "+=20",
        repeat: -1,
        yoyo: true,
        duration: 6 + i,
        ease: "sine.inOut",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative !max-w-7xl mx-automin-h-screen flex justify-center items-center overflow-hidden"
    >
      <div
        className="w-full"
        style={{ maxWidth: "1024px", margin: "0 auto" }}
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-3xl mx-auto text-center px-4 z-10">
            <p
              ref={paragraphRef}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
              style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
            >
              A Premier Google Ads digital marketing agency offering end-to-end services across the USA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}