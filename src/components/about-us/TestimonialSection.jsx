import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="relative !max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 py-16 px-4 md:px-16">
        {/* Image - First on mobile, left on desktop */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-black">
            <Image
              src="/images/about-us/Rajat.webp"
              alt="Rajat Jain"
              width={450}
              height={450}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content - Second on mobile, right on desktop */}
        <div className="flex flex-col justify-center items-start">
          <div className="text-center md:text-left mb-8 md:mb-12 w-full">
            <p className="text-2xl md:text-3xl font-bold text-black mb-2">Rajat Jain</p>
            <p className="text-lg md:text-2xl font-bold text-gray-700">
              Where Strategy Meets Innovation in Digital Marketing
            </p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-black">"</h2>
          
          <p className="text-sm md:text-base text-gray-800 mb-2">
            Rajat Jain is a digital strategist known for being able to connect creativity with performance. He is mainly involved in creating scalable marketing frameworks and generating business growth via innovation. He is also a very enthusiastic emerging technology and product thinking, and he continuously explores new ways to enhance digital outcomes.
          </p>
          
          <div className="w-full flex items-center justify-end text-5xl md:text-7xl font-bold text-black mt-2">
            "
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;