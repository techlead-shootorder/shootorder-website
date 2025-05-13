"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const servicesData = {
  "Web Developers": [
    {
      title: "Frontend Developer",
      desc: "Expert in React and Tailwind.",
      image: "/images/services/service-1.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend Developer",
      desc: "Skilled in Node.js and databases.",
      image: "/images/services/service-1.jpg",
      tags: ["Node.js", "MongoDB", "API"],
    },
    {
      title: "Fullstack Developer",
      desc: "Handles both frontend and backend.",
      image: "/images/services/service-1.jpg",
      tags: ["React", "Express", "SQL"],
    },
    {
      title: "DevOps Engineer",
      desc: "CI/CD and cloud deployments.",
      image: "/images/services/service-1.jpg",
      tags: ["Docker", "AWS", "CI/CD"],
    },
  ],
  "Graphic Designers": [
    {
      title: "Logo Designer",
      desc: "Creates modern logos.",
      image: "/images/services/service-1.jpg",
      tags: ["Illustrator", "Branding", "Creativity"],
    },
    {
      title: "UI/UX Designer",
      desc: "Crafts beautiful interfaces.",
      image: "/images/services/service-1.jpg",
      tags: ["Figma", "Wireframe", "Prototyping"],
    },
    {
      title: "Print Designer",
      desc: "Expert in brochures and flyers.",
      image: "/images/services/service-1.jpg",
      tags: ["Print", "Layout", "Typography"],
    },
    {
      title: "Social Media Designer",
      desc: "Eye-catching social content.",
      image: "/images/services/service-1.jpg",
      tags: ["Instagram", "Canva", "Graphics"],
    },
  ],
  "Video Editors": [
    {
      title: "YouTube Editor",
      desc: "Edits engaging YouTube videos.",
      image: "/images/services/service-1.jpg",
      tags: ["Premiere Pro", "Cuts", "Titles"],
    },
    {
      title: "Reels Specialist",
      desc: "Short-form video expert.",
      image: "/images/services/service-1.jpg",
      tags: ["Instagram", "Trendy", "Fast-paced"],
    },
    {
      title: "Motion Graphics Artist",
      desc: "Creates animated visuals.",
      image: "/images/services/service-1.jpg",
      tags: ["After Effects", "Animation", "3D"],
    },
    {
      title: "Corporate Video Editor",
      desc: "Professional business videos.",
      image: "/images/services/service-1.jpg",
      tags: ["Interviews", "Branding", "Editing"],
    },
  ],
  "Content Writers": [
    {
      title: "SEO Writer",
      desc: "Writes with Google in mind.",
      image: "/images/services/service-1.jpg",
      tags: ["Keywords", "Blogging", "Traffic"],
    },
    {
      title: "Copywriter",
      desc: "Persuasive ad copy.",
      image: "/images/services/service-1.jpg",
      tags: ["Ads", "CTA", "Sales"],
    },
    {
      title: "Technical Writer",
      desc: "Clear and concise documentation.",
      image: "/images/services/service-1.jpg",
      tags: ["Docs", "Manuals", "Clarity"],
    },
    {
      title: "Script Writer",
      desc: "Writes for videos and podcasts.",
      image: "/images/services/service-1.jpg",
      tags: ["Storytelling", "Voiceover", "Structure"],
    },
  ],
  "Advertisement Specialist": [
    {
      title: "Google Ads Expert",
      desc: "Drives traffic with Google Ads.",
      image: "/images/services/service-1.jpg",
      tags: ["PPC", "Search", "CTR"],
    },
    {
      title: "Facebook Ads Manager",
      desc: "Targeted social ads.",
      image: "/images/services/service-1.jpg",
      tags: ["Audience", "Retargeting", "Budget"],
    },
    {
      title: "Campaign Strategist",
      desc: "Plans and optimizes campaigns.",
      image: "/images/services/service-1.jpg",
      tags: ["Funnel", "KPIs", "Analytics"],
    },
    {
      title: "Email Marketer",
      desc: "Converts with emails.",
      image: "/images/services/service-1.jpg",
      tags: ["Open Rate", "CRM", "Templates"],
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
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={clsx(
                "px-4 py-2 rounded-full border border-black transition",
                activeTab === cat ? "bg-black text-white" : "text-black"
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
              className="border border-gray-300 bg-white rounded-xl p-4 flex flex-col gap-4"
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
                  <div className="flex gap-2 flex-wrap mt-5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 rounded-full border border-black transition bg-black text-white">
            Browse More Candidate
          </button>
        </div>
      </div>
    </section>
  );
}
