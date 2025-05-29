"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
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
      className="relative w-full min-h-screen bg-white flex justify-center items-center overflow-hidden"
    >
      {/* Background floating shapes */}
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (bgRefs.current[index] = el)}
          className="absolute rounded-full !bg-[#ff8075] opacity-40 blur-2xl"
          style={{
            width: `${120 + index * 20}px`,
            height: `${120 + index * 20}px`,
            top: `${10 + index * 15}%`,
            left: `${20 + index * 20}%`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Main content */}
      <div className="max-w-5xl text-center px-4 z-10">
        <p
          ref={paragraphRef}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
        >
          We are a dynamic digital marketing agency committed to delivering
          exceptional results through innovative strategies and a passionate
          team.
        </p>
      </div>
    </section>
  );
}
