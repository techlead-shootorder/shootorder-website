"use client";
import React, { useState } from "react";
import { ArrowRight, Target, Users, Heart } from "lucide-react";

const servicesData = {
  Attract: [
    {
      title: "SEO",
      desc: "Boost your search engine rankings and drive organic traffic.",
      image: "/images/so-homepage-services/seo.png",
      tags: ["Keywords", "Ranking", "Traffic"],
      href: "/seo",
    },
    {
      title: "Performance Marketing",
      desc: "Data-driven advertising campaigns with measurable ROI.",
      image: "/images/so-homepage-services/Performance-Marketing.png",
      tags: ["PPC", "ROI", "Conversion"],
      href: "/advertise/",
    },
    {
      title: "Social Media Marketing",
      desc: "Engage audiences and build brand awareness on social platforms.",
      image: "/images/so-homepage-services/Social-Media-Management.png",
      tags: ["Facebook", "Instagram", "Engagement"],
      href: "/social-media-marketing/",
    },
    {
      title: "Blog Marketing",
      desc: "Create valuable content that attracts and retains customers.",
      image: "/images/so-homepage-services/Blog-Marketing.png",
      tags: ["Content", "SEO", "Audience"],
      href: "/blog-management/",
    },
    {
      title: "Influencer Marketing",
      desc: "Partner with industry influencers to amplify your reach.",
      image: "/images/so-homepage-services/Influencer-Marketing.png",
      tags: ["Influencers", "Brand", "Reach"],
      href: "/influencers-marketing/",
    },
    {
      title: "Email Marketing",
      desc: "Nurture leads and drive conversions through targeted campaigns.",
      image: "/images/so-homepage-services/EmAIL-MARKETING.png",
      tags: ["Email", "Automation", "Nurture"],
      href: "/email-marketing/",
    },
  ],
  Engage: [
    {
      title: "Website & Landing Pages",
      desc: "Beautiful and converting web designs that drive results.",
      image: "/images/services/service-1.jpg",
      tags: ["Design", "UX", "Conversion"],
      href: "/web-design/",
    },
    {
      title: "Online Reputation Management",
      desc: "Monitor and enhance your online presence positively.",
      image: "/images/services/service-1.jpg",
      tags: ["Reputation", "Reviews", "Brand"],
      href: "/orm/",
    },
    {
      title: "PushFOMO",
      desc: "Create urgency with real-time social proof notifications.",
      image: "/images/services/service-1.jpg",
      tags: ["FOMO", "Conversion", "Engagement"],
      href: "https://www.pushfomo.com",
      external: true,
    },
  ],
  Delight: [
    {
      title: "Marketing Automation",
      desc: "Streamline processes and deliver personalized experiences.",
      image: "/images/services/service-1.jpg",
      tags: ["Automation", "Workflow", "Efficiency"],
      href: "/marketing-automation/",
    },
    {
      title: "Data Analytics & Dashboards",
      desc: "Get insights to drive better business decisions.",
      image: "/images/services/service-1.jpg",
      tags: ["Analytics", "Data", "Insights"],
      href: "/analytics/",
    },
  ],
};

const tabIcons = {
  Attract: Target,
  Engage: Users,
  Delight: Heart,
};

export default function CombinedServiceFlow() {
  const categories = Object.keys(servicesData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            A leading{" "}
            <span className="text-[#F94839]">full service digital</span>
            <br />
            marketing agency in India
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We transform businesses through innovative digital marketing
            strategies
          </p> */}
        </div>

        {/* Main Content - New Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Image + Process Steps */}
          <div className="lg:col-span-5 space-y-8">
            {/* Hero Image */}
            {/* Process Steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our 3-Step Process
              </h3>
              {categories.map((step, idx) => {
                const Icon = tabIcons[step];
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      activeTab === step
                        ? "bg-red-50 border-red-200 shadow-md"
                        : "bg-white border-gray-200 hover:border-red-100 hover:shadow-sm"
                    }`}
                    onClick={() => setActiveTab(step)}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full ${
                        activeTab === step
                          ? "bg-[#F94839] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-sm ${
                          activeTab === step
                            ? "text-[#F94839]"
                            : "text-gray-900"
                        }`}
                      >
                        {step.toUpperCase()}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {step === "Attract" && "Draw the right audience"}
                        {step === "Engage" && "Captivate and convert"}
                        {step === "Delight" && "Retain and grow loyalty"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
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

          {/* Right Column - Service Cards */}
          <div className="lg:col-span-7">
            {/* Tab Header */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeTab === "Attract"
                    ? "bg-blue-500"
                    : activeTab === "Engage"
                    ? "bg-green-500"
                    : "bg-purple-500"
                }`}
              >
                {React.createElement(tabIcons[activeTab], {
                  size: 16,
                  className: "text-white",
                })}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {activeTab} Services
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
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
                        className="inline-flex items-center text-[#F94839] hover:text-red-600 font-semibold text-xs group-hover:underline transition-all"
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
          <button className="bg-gradient-to-r from-red-500 to-[#F94839] text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
