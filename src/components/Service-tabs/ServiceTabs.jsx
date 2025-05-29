"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const servicesData = {
  Attract: [
    {
      title: "SEO",
      desc: "Boost your search engine rankings. Our SEO experts optimize your website to increase visibility and drive organic traffic.",
      image: "/images/services/service-1.jpg",
      tags: ["Keywords", "Ranking", "Traffic"],
      href: "/seo",
    },
    {
      title: "Performance Marketing",
      desc: "Data-driven advertising campaigns. Our performance marketing strategies focus on measurable results, ensuring you get the best return on investment.",
      image: "/images/services/service-1.jpg",
      tags: ["PPC", "ROI", "Conversion"],
      href: "/advertise/",
    },
    {
      title: "Social Media Marketing",
      desc: "Engage audiences on social platforms. Our social media marketing services help you connect with your audience, build brand awareness, and drive engagement.",
      image: "/images/services/service-1.jpg",
      tags: ["Facebook", "Instagram", "Engagement"],
      href: "/social-media-marketing/",
    },
    {
      title: "Blog Marketing",
      desc: "Content that drives engagement. Our blog marketing services create valuable content that attracts and retains customers, enhancing your brand's authority and reach.",
      image: "/images/services/service-1.jpg",
      tags: ["Content", "SEO", "Audience"],
      href: "/blog-management/",
    },
    {
      title: "Influencer Marketing",
      desc: "Partner with industry influencers. Our influencer marketing services connect your brand with influential figures to amplify your reach and credibility.",
      image: "/images/services/service-1.jpg",
      tags: ["Influencers", "Brand", "Reach"],
      href: "/influencers-marketing/",
    },
    {
      title: "eMail Marketing",
      desc: "Direct communication with customers. Our email marketing services help you nurture leads, retain customers, and drive conversions through targeted email campaigns.",
      image: "/images/services/service-1.jpg",
      tags: ["Email", "Automation", "Nurture"],
      href: "/email-marketing/",
    },
  ],
  Engage: [
    {
      title: "Website & Landing Pages",
      desc: "Beautiful and converting web designs. Our web design services create stunning websites and landing pages that not only look great but also convert visitors into customers.",
      image: "/images/services/service-1.jpg",
      tags: ["Design", "UX", "Conversion"],
      href: "/web-design/",
    },
    {
      title: "Online Reputation Management (ORM)",
      desc: "Manage and improve online reputation. Our ORM services help you monitor, manage, and enhance your online presence, ensuring your brand is perceived positively.",
      image: "/images/services/service-1.jpg",
      tags: ["Reputation", "Reviews", "Brand"],
      href: "/orm/",
    },
    {
      title: "On-Site Engagement - PushFOMO",
      desc: "Boost conversions with social proof. PushFOMO is a powerful tool that creates urgency and trust by displaying real-time notifications of customer activity on your site, enhancing user engagement and driving conversions.",
      image: "/images/services/service-1.jpg",
      tags: ["FOMO", "Conversion", "Engagement"],
      href: "https://www.pushfomo.com",
      external: true,
    },
  ],
  Delight: [
    {
      title: "Marketing Automation",
      desc: "Streamline your marketing processes. Our marketing automation services help you automate repetitive tasks, nurture leads, and deliver personalized experiences at scale, improving efficiency and effectiveness.",
      image: "/images/services/service-1.jpg",
      tags: ["Automation", "Workflow", "Efficiency"],
      href: "/marketing-automation/",
    },
    {
      title: "Data Analytics & Dashboards",
      desc: "Insights to drive better decisions. Our data analytics services provide in-depth analysis and custom dashboards that help you understand your business performance, customer behavior, and market trends, enabling data-driven decision-making.",
      image: "/images/services/service-1.jpg",
      tags: ["Analytics", "Data", "Insights"],
      href: "/analytics/",
    },
  ],
};

export default function ServiceTabs() {
  const categories = Object.keys(servicesData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="bg-[#f8f6ee]">
      <div className="py-16 px-4 max-w-7xl mx-auto ">
        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={clsx(
                "px-4 py-2 rounded-full border border-black transition",
                activeTab === cat
                  ? "bg-[#F2333B] text-white border-white"
                  : "text-black"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicesData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-300 bg-white rounded-xl p-4 flex flex-col justify-center items-center gap-4"
            >
              {/* Top Row: Image + Content */}
              <div className="flex gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-[150px] h-[150px]"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  {/* <div className="flex gap-2 flex-wrap mt-5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                  <div className="mt-4">
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      className="text-[#F2333B] hover:underline"
                    >
                      Know More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-8">
          <button className="px-4 py-2 rounded-full border border-black transition bg-black text-white">
            Browse More Services
          </button>
        </div> */}
      </div>
    </section>
  );
}
