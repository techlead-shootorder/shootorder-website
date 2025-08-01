import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  return (
    <section className=" bg-gray-100">
      <div className="relative !max-w-7xl mx-auto grid grid-cols-2 py-16 px-4 md:px-16 ">
        {/* Gray Circle on Left */}
        <div className=" w-[450px] h-[450px] rounded-full bg-black">
          <Image
            src="/images/about-us/Rajat.webp"
            alt="Gray Circle"
            width={450}
            height={450}
            className="rounded-full"
          />
        </div>
        {/* Content Row */}
        <div className="flex flex-col justify-center items-start">
           <div className="text-center mb-12">
          {/* <h1 className="text-5xl font-bold text-black mb-4">Our Leadership</h1> */}
          <p className="text-3xl font-bold text-black text-center mb-2">Rajat Jain</p>
          <p className="text-2xl font-bold text-gray-700 text-center">Where Strategy Meets Innovation in Digital Marketing</p>
        </div>
          <h2 className="text-6xl font-bold text-black ">“</h2>
          <p className="text-base text-gray-800 mb-2">
            Rajat Jain is a digital strategist known for being able to connect creativity with performance. He is mainly involved in creating scalable marketing frameworks and generating business growth via innovation. He is also a very enthusiastic emerging technology and product thinking, and he continuously explores new ways to enhance digital outcomes.
            </p>
            
          <div className=" w-full flex items-center justify-end text-7xl font-bold text-black mt-2">
            ”
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
