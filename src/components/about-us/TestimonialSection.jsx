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
          <h1 className="text-5xl font-bold text-black mb-4">Our Leadership</h1>
          <p className="text-xl text-gray-600">Meet the visionaries driving our innovation forward</p>
        </div>
          <h2 className="text-6xl font-bold text-black ">“</h2>
          <p className="text-base text-gray-800 mb-2">
            Teaming with Maganti IT isn’t just a strategic move, it’s a powerful step forward.
            </p>
             <p className="text-base text-gray-800 mb-2">
         Together, we bring deep digital expertise and a shared commitment to delivering faster, smarter, and more impactful results.</p>
         <p className="text-base text-gray-800 mb-2">
          With Maganti IT’s stronghold in tech and our pulse on performance marketing, we’re helping businesses scale with clarity and confidence. </p>
           <p className="text-base text-gray-800">
          This collaboration is all about raising the standard, and we’re here to lead that charge.
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
