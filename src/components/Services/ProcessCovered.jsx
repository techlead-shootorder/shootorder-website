"use client";
import React, { useState, useEffect } from "react";

const getPlaceholderImage = (heading) => {
  const keywords = encodeURIComponent(heading.toLowerCase().replace(/\s+/g, '-'));
  return `https://source.unsplash.com/600x400/?${keywords}`;
};

function ProcessCovered({ services }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!services?.features) return null;

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="!max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-center font-bold text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what we can do for you
          </p>
        </div>

        {/* Awesome Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.features.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.imageUrl || getPlaceholderImage(service.heading)}
                    alt={service.heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/600/400?random=${index + 10}`;
                    }}
                  />
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-[#9a0c28] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#9a0c28] transition-colors duration-300">
                    {service.heading}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {service.content}
                  </p>
                  
                  {/* Learn More Button - Smaller Size */}
                  {/* <button className="inline-flex items-center gap-2 bg-[#9a0c28] text-white px-6 py-2.5 rounded-lg hover:bg-[#7a0920] transition-all duration-300 text-sm font-medium group/btn">
                    <span>Learn More</span>
                    <svg 
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add more services link */}
        <div className={`text-center mt-16 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="inline-flex items-center gap-2 text-[#9a0c28] hover:text-[#7a0920] font-medium text-lg transition-colors duration-300 group">
            <span>View All Services</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ProcessCovered;