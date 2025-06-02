"use client";
import React, { useState } from "react";
import { ArrowRight, Target, Users, Heart } from "lucide-react";

const servicesData = {
  Branding: [
    {
      title: "Identity Development",
      desc: "Create a distinctive brand identity that sets you apart from competitors.",
      image: "/images/so-homepage-services/branding.png",
      tags: ["Brand", "Identity", "Design"],
      href: "/branding/identity",
    },
    {
      title: "Brand Audit",
      desc: "Comprehensive analysis of your brand's current position and performance.",
      image: "/images/so-homepage-services/audit.png",
      tags: ["Analysis", "Strategy", "Growth"],
      href: "/branding/audit",
    },
    {
      title: "Brand Messaging",
      desc: "Develop a compelling voice that resonates with your audience.",
      image: "/images/so-homepage-services/messaging.png",
      tags: ["Voice", "Message", "Communication"],
      href: "/branding/messaging",
    },
    {
      title: "Package & Design",
      desc: "Create visually stunning brand assets that capture attention.",
      image: "/images/so-homepage-services/design.png",
      tags: ["Design", "Visual", "Assets"],
      href: "/branding/design",
    },
  ],
  "Digital Marketing": [
    {
      title: "SEO & Content",
      desc: "Drive organic growth through strategic SEO and content marketing.",
      image: "/images/so-homepage-services/seo.png",
      tags: ["SEO", "Content", "Organic"],
      href: "/seo",
    },
    {
      title: "Paid Advertising",
      desc: "Targeted campaigns across Google and Meta platforms.",
      image: "/images/so-homepage-services/Performance-Marketing.png",
      tags: ["PPC", "Social", "Ads"],
      href: "/advertise",
    },
    {
      title: "Digital PR",
      desc: "Build authority and reach through strategic digital PR.",
      image: "/images/so-homepage-services/pr.png",
      tags: ["PR", "Authority", "Reach"],
      href: "/digital-pr",
    },
    {
      title: "Influencer Marketing",
      desc: "Leverage influencer partnerships for authentic brand growth.",
      image: "/images/so-homepage-services/Influencer-Marketing.png",
      tags: ["Influencers", "Social", "Growth"],
      href: "/influencers-marketing",
    },
  ],
  "Growth Solutions": [
    {
      title: "Growth Hacking",
      desc: "Innovative strategies for rapid and sustainable growth.",
      image: "/images/so-homepage-services/growth.png",
      tags: ["Growth", "Strategy", "Innovation"],
      href: "/growth-hacking",
    },
    {
      title: "Marketing Automation",
      desc: "Streamline and optimize your marketing processes.",
      image: "/images/so-homepage-services/automation.png",
      tags: ["Automation", "Efficiency", "Scale"],
      href: "/marketing-automation",
    },
    {
      title: "Analytics & Dashboards",
      desc: "Data-driven insights for informed decision making.",
      image: "/images/so-homepage-services/analytics.png",
      tags: ["Analytics", "Data", "Insights"],
      href: "/analytics",
    },
    {
      title: "ORM",
      desc: "Manage and enhance your online reputation.",
      image: "/images/so-homepage-services/orm.png",
      tags: ["Reputation", "Management", "Brand"],
      href: "/orm",
    },
  ],
};

const tabDescriptions = {
  Branding: "Build a strong brand identity",
  "Digital Marketing": "Drive growth through digital channels",
  "Growth Solutions": "Scale and optimize your business",
};

const tabIcons = {
  Branding: Target,
  "Digital Marketing": Users,
  "Growth Solutions": Heart,
};

export default function CombinedServiceFlow() {
  const categories = ["Branding", "Digital Marketing", "Growth Solutions"];
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto" style={{ width: "min(1260px, 100%)" }}>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital solutions for your business growth
          </p>
        </div>

        {/* Centered Tabs Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#9a0c28] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-5">
            {activeTab === "Digital Marketing" ? (
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/services/service-flow.png"
                      alt="Service Flow"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Column - Service Cards */}
          <div className={`${activeTab === "Digital Marketing" ? "lg:col-span-7" : "lg:col-span-12"}`}>
            <div className={`grid grid-cols-1 gap-4 ${
              activeTab === "Digital Marketing" ? "xl:grid-cols-2" : "xl:grid-cols-4"
            }`}>
              {servicesData[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-28 h-28 rounded-lg ">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full !object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-gray-900 mb-2 group-hover:text-[#F94839] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : ""}
                        className="inline-flex items-center text-[#9a0c28] hover:text-[#7a0920] font-semibold text-xs group-hover:underline transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-[#9a0c28] hover:bg-[#7a0920] text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
