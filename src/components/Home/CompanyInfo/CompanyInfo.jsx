"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    logo: "/images/logo/images.png",
    title: "Content Marketing and SMM For Home Decor & Lifestyle Company",
    subtitle: "Lead generation and growth",
    content:
      "We helped scale campaigns to reach millions of customers globally through strategic digital initiatives.",
    avatar: "/images/logo/avatar.svg",
    name: "Sarah Johnson",
    designation: "Marketing Manager",
  },
  {
    id: 2,
    logo: "/images/logo/images.png",
    title: "Content Marketing and SMM For Home Decor & Lifestyle Company",
    subtitle: "Modern UI/UX design",
    content:
      "Built a responsive and dynamic eCommerce platform with a seamless checkout experience digital initiatives.",
    avatar: "/images/logo/avatar.svg",
    name: "Tom Anderson",
    designation: "Lead Developer",
  },
  {
    id: 3,
    logo: "/images/logo/images.png",
    title: "Content Marketing and SMM For Home Decor & Lifestyle Company",
    subtitle: "Consistent messaging",
    content:
      "Crafted a unified brand voice across all digital channels seamlessly and touchpoints digital initiatives.",
    avatar: "/images/logo/avatar.svg",
    name: "Nina Patel",
    designation: "Creative Director",
  },
];

export default function CompanyInfo() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    gsap.from(cards, {
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
       toggleActions: "play reset play reset",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={card.id}
            className="border border-gray-200 rounded-2xl p-6"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-start gap-3">
                <Image
                  src={card.logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <p className="text-sm text-gray-500">{card.subtitle}</p>
              <p className="text-black">{card.content}</p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={card.avatar}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{card.name}</p>
                    <p className="text-xs text-gray-500">{card.designation}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
