// components/Pricing/PricingPlans.jsx
'use client'
import React from 'react';
import { 
  Search, 
  TrendingUp, 
  Smartphone, 
  Check,
  Star
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const PricingPlans = () => {
  const router = useRouter();
  const services = [
    {
      category: "SEO & Content Marketing",
      price: "Starting from $1,000",
      duration: "/month",
      tagline: "Dominate Search Rankings",
      description: "Boost your organic visibility and drive qualified traffic with our comprehensive SEO strategies.",
      icon: Search,
      popular: false,
      features: [
        "10 Target Keywords Research & Optimization",
        "4 High-Quality Blog Posts Monthly",
        "Complete On-Page SEO Optimization",
        "Google My Business Management",
        "Technical SEO Audit & Fixes",
        "Local SEO Optimization",
        "Monthly Performance Reports",
        "Competitor Analysis & Strategy"
      ],
      results: "Average 150% increase in organic traffic within 6 months"
    },
    {
      category: "Performance Marketing (PPC)",
      price: "Starting from $1,200",
      duration: "/month",
      tagline: "Maximize Your ROI",
      description: "Drive immediate results with expertly managed Google Ads and Meta advertising campaigns.",
      icon: TrendingUp,
      popular: true,
      features: [
        "Google Ads Campaign Setup & Management",
        "Meta Ads (Facebook & Instagram)",
        "Custom Ad Creative Design",
        "Advanced Audience Targeting",
        "A/B Testing & Optimization",
        "Conversion Tracking Setup",
        "Landing Page Optimization",
        "Weekly Performance Reports",
        "Remarketing Campaigns"
      ],
      results: "Average 300% ROAS across all managed campaigns"
    },
    {
      category: "Social Media Marketing",
      price: "Starting from $900",
      duration: "/month",
      tagline: "Build Your Brand Community",
      description: "Engage your audience and build brand loyalty across multiple social media platforms.",
      icon: Smartphone,
      popular: false,
      features: [
        "Content Strategy for 3 Platforms",
        "20 Custom Graphics & Visuals Monthly",
        "Daily Post Scheduling & Publishing",
        "Community Management & Engagement",
        "Instagram Stories & Reels Creation",
        "Hashtag Research & Strategy",
        "Influencer Collaboration Setup",
        "Monthly Analytics & Insights Report"
      ],
      results: "Average 250% growth in social media engagement"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#9a0c28] bg-opacity-10 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-[#9a0c28] mr-2" />
            <span className="text-white font-semibold">Premium Digital Marketing Services</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            ShootOrder Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-0 leading-relaxed">
            <span className="font-semibold text-[#9a0c28]">Hire Top 3% Digital Marketing Talent.</span>{' '}
            Transparent pricing, proven results, and ROI-driven execution for your business growth.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a startup or an enterprise, scale your digital marketing with the 
            flexibility you need, without long-term contracts.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 mt-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-[#9a0c28] scale-105' : 'border border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#9a0c28] to-[#b91c3c] text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                      service.popular 
                        ? 'bg-gradient-to-br from-[#9a0c28] to-[#b91c3c]' 
                        : 'bg-[#9a0c28] bg-opacity-10'
                    }`}>
                      <IconComponent className={`w-10 h-10 ${
                        service.popular ? 'text-white' : 'text-[#9a0c28]'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.category}
                    </h3>
                    <p className="text-[#9a0c28] font-semibold text-lg mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {service.price}
                      </span>
                      <span className="text-gray-600 ml-1">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-sm text-[#9a0c28] font-medium mt-2">
                      {service.results}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="ml-3 text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-[#9a0c28] to-[#b91c3c] text-white hover:shadow-lg transform hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-[#9a0c28]'
                  }`}
                  onClick={()=> router.push("/contact-us")}
                  >
                    Get Started Today
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingPlans;