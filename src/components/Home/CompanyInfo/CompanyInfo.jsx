"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    logo: "/images/logo/images.png",
    title: "Facebook & Google Ads Campaign for EdTech Company",
    subtitle: "They have the best price-quality ratio.",
    content:
      "Despite the limited budget, ShootOrder has helped the client record 400,000 app downloads in India. They've also delivered several good video ads that the client can use for both their Indian and Estonian apps. Moreover, they facilitate a smooth workflow and hold bi-weekly standup meetings.",
    avatar: "/images/logo/avatar.svg",
    name: "Janek Jaago",
    designation: "CCO, ALPA Kids",
  },
  {
    id: 2,
    logo: "/images/logo/images.png",
    title: "Digital Marketing for Fertility Provider",
    subtitle: "They reduced CPL and increased ROI.",
    content:
      "Cost per lead was reduced and the return on investment was increased because of ShootOrder. Their team was cost-effective and performed well, although they could finish the jobs more within deadlines.",
    avatar: "/images/logo/avatar.svg",
    name: "Anonymous",
    designation: "Digital Marketing Manager, Oasis Fertility",
  },
  {
    id: 3,
    logo: "/images/logo/images.png",
    title: "Content Marketing & SMM for Home Decor & Lifestyle Company",
    subtitle: "ShootOrder is very understanding, and they’re in sync with our brand. They know exactly what we require",
    content:
      "ShootOrder has been able to provide great results to the client, including an increase in sales and engagement and a decrease in the dropout rate. The team is very communicative, understanding, and flexible, and they excel at meeting deadlines due to their structured approach.",
    avatar: "/images/logo/avatar.svg",
    name: "Arnab Ghosh",
    designation: "Head of Marketing & Co-Founder, Nakshikathaa",
  },
];

export default function CompanyInfo() {
  const pathname = usePathname();
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
        start: "top 80%",
       toggleActions: "play none play none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

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
