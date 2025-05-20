"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;

    // Split paragraph into spans per character
    const splitChars = (element) => {
      const text = element.textContent;
      element.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        span.style.transform = "translateY(50px)";
        element.appendChild(span);
      });
    };

    splitChars(paragraph);
    const chars = paragraph.querySelectorAll("span");

    // Animate each character with scroll
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom+=1000 top", // long enough to slowly scroll the whole line
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-white flex justify-center items-center"
    >
      <div className="max-w-5xl text-center px-4">
        <p
          ref={paragraphRef}
          className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight whitespace-pre-wrap"
        >
          We are a dynamic digital marketing agency committed to delivering
          exceptional results through innovative strategies and a passionate
          team.
        </p>
      </div>
    </section>
  );
}
