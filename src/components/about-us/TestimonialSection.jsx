import React from "react";

const TestimonialSection = () => {
  return (
    <section className=" bg-gray-100">
      <div className="relative !max-w-7xl mx-auto grid grid-cols-2 py-16 px-4 md:px-16 ">
        {/* Gray Circle on Left */}
        <div className=" w-72 h-72 bg-gray-400 rounded-full "></div>
        {/* Content Row */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-6xl font-bold text-black ">“</h2>
          <p className="text-base text-gray-800">
            We love our work, yes that&apos;s the simplest way to describe why we
            have been thriving in our business, and serving our global clientele
            without a glitch or sense of dissatisfaction in our services.
          </p>
          <div className=" w-full flex items-center justify-end text-7xl font-bold text-black mt-2">”</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
