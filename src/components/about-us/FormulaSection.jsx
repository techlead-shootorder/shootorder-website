"use client"; // for Next.js App Router

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Palette, Trophy, Star, Heart, Gift } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FormulaButton = ({ icon, text }) => {
  return (
    <div className="formula-button flex items-center gap-2 bg-white rounded-3xl px-8 py-4 border border-gray-200 shadow-sm">
      <div className="text-orange-700">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

const FormulaSection = () => {
  const sectionRef = useRef(null);

  const formulas = [
    { icon: <Briefcase className="h-4 w-4" />, text: "Service with a Smile" },
    { icon: <Palette className="h-4 w-4" />, text: "Sharp eye for styling" },
    { icon: <Trophy className="h-4 w-4" />, text: "Vow with the Content" },
    { icon: <Star className="h-4 w-4" />, text: "Cool things come true" },
    { icon: <Heart className="h-4 w-4" />, text: "Keep learning & growing" },
    { icon: <Gift className="h-4 w-4" />, text: "Give It...Get It" },
  ];

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".formula-button");

    gsap.from(items, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="w-full bg-[#fff5f4] py-16 px-4 md:px-8" ref={sectionRef}>
      <div className="!max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-200 w-full h-80 rounded-xl"></div>
        <div>
          <h2 className="text-center font-bold text-2xl mb-8">
            Our formula of success
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {formulas.map((formula, index) => (
              <FormulaButton
                key={index}
                icon={formula.icon}
                text={formula.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaSection;
