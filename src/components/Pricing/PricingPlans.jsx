// components/Pricing/PricingPlans.jsx
import React from 'react';
import { 
  Search, 
  TrendingUp, 
  Smartphone, 
  Monitor, 
  Palette, 
  Settings, 
  Users, 
  ShoppingCart,
  Phone,
  ArrowRight 
} from 'lucide-react';

const PricingPlans = () => {
  const services = [
    {
      category: "SEO & Content Marketing",
      price: "Starting from $1,000/month",
      inclusions: "10 keywords, 4 blogs, on-page optimization, GMB management",
      icon: Search
    },
    {
      category: "Performance Marketing",
      price: "Starting from $1,000/month",
      inclusions: "Google Ads + Meta Ads management, ad creatives, audience setup",
      icon: TrendingUp
    },
    {
      category: "Social Media Marketing",
      price: "Starting from $1,000/month",
      inclusions: "Creative + Content + Scheduling for 3 platforms",
      icon: Smartphone
    },
    {
      category: "Website Development",
      price: "Starting from $1,500/project",
      inclusions: "Custom WordPress / Shopify / Laravel / Webflow design",
      icon: Monitor
    },
    {
      category: "Branding & Design",
      price: "Starting from $1,200/project",
      inclusions: "Logo, color palette, tone of voice, brand guidelines",
      icon: Palette
    },
    {
      category: "Marketing Automation",
      price: "Starting from $1,000/month",
      inclusions: "CRM setup, lead capture forms, data dashboards, email workflows",
      icon: Settings
    },
    {
      category: "Digital PR & Influencers",
      price: "Starting from $900/month",
      inclusions: "Outreach to relevant publishers/influencers, link building",
      icon: Users
    },
    {
      category: "E-commerce Marketing",
      price: "Custom Quote",
      inclusions: "Marketplace SEO, paid campaigns, remarketing, retention strategies",
      icon: ShoppingCart
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ShootOrder Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            <span className="font-semibold text-[#9a0c28]">Hire Top 3% Digital Marketing Talent.</span>{' '}
            Transparent Plans. ROI-Driven Execution.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a Start-up or an Enterprise, scale your digital marketing with the 
            flexibility you need, without long-term contracts.
          </p>
        </div>

        {/* Section Subtitle */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Pricing Structure</h3>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-[#9a0c28] group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#9a0c28] bg-opacity-10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#9a0c28] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#9a0c28] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {service.category}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-xl font-bold text-[#9a0c28] mb-2">
                    {service.price}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.inclusions}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Quote CTA */}
        <div className="bg-gradient-to-r from-[#9a0c28] to-[#b91c3c] rounded-2xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              🧠 Want a Custom Quote?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Your business is unique and so is our approach. Book a free strategy call 
              to get a tailor-made quote based on your goals and timelines.
            </p>
            <button className="bg-white text-[#9a0c28] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;