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
    rating: 5,
    logo: "/images/testimonials/clutch.svg",
    title: "Facebook & Google Ads Campaign",
    content:
      "ShootOrder's strategic approach to our ad campaigns resulted in a 300% increase in conversions while reducing our cost per acquisition by 40%. Their team's expertise in targeting and optimization made all the difference.",
    avatar: "/images/testimonials/client1.jpg",
    name: "Sarah Johnson",
    designation: "Marketing Director, TechStart Inc.",
    platform: "Clutch Review",
  },
  {
    id: 2,
    rating: 5,
    logo: "/images/testimonials/clutch.svg",
    title: "SEO & Content Marketing",
    content:
      "Within 6 months of working with ShootOrder, our organic traffic increased by 200%. Their content strategy and technical SEO expertise helped us rank for highly competitive keywords in our industry.",
    avatar: "/images/testimonials/client2.jpg",
    name: "Michael Chen",
    designation: "CEO, GrowthHub",
    platform: "Clutch Review",
  },
  {
    id: 3,
    rating: 5,
    logo: "/images/testimonials/clutch.svg",
    title: "Digital Marketing Strategy",
    content:
      "ShootOrder transformed our digital presence completely. Their comprehensive approach to digital marketing helped us achieve a 150% increase in leads and a 75% improvement in conversion rates.",
    avatar: "/images/testimonials/client3.jpg",
    name: "Priya Sharma",
    designation: "Founder, InnovateX",
    platform: "Clutch Review",
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
    <section className="py-20 bg-gray-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-gray-600">
            See how we've helped businesses across industries achieve their
            digital marketing goals and drive measurable results.
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          className="w-full"
          style={{ maxWidth: "1024px", margin: "0 auto" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardsData.map((card, index) => (
              <Card
                key={card.id}
                className="bg-gray-50 border-none hover:shadow-xl transition-shadow duration-300"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <CardHeader className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Image
                      src={card.logo}
                      alt="Platform Logo"
                      width={100}
                      height={24}
                      className="h-6 w-auto"
                    />
                    <div className="flex gap-1">
                      {[...Array(card.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    "{card.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <Image
                      src={card.avatar}
                      alt={card.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{card.name}</p>
                      <p className="text-sm text-gray-500">
                        {card.designation}
                      </p>
                      <p className="text-xs text-gray-400">{card.platform}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
