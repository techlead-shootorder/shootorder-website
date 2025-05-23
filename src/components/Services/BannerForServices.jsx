import Image from "next/image";
import React from "react";

const BannerForServices = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-20"
      style={{
        backgroundImage: `url(/images/services/banners/service-banner.jpg)`,
        backgroundPosition:"bottom center"
      }}
    >
      <div className="!max-w-7xl !mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 ">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Hire Top 3.5% Professional SEO Experts in 48Hours
          </h2>
          <p className="text-gray-700">
            Unlock the potential of our SEO Experts from a 1.5M+ AI-vetted
            talent network. They specialize in SaaS website optimization to
            boost organic traffic and elevate user experience.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
            Hire SEO Expert
          </button>
        </div>

        {/* Right Side Floating Images */}
        <div className="relative  w-full  items-center">
          <div className="">
            <Image
              src="/images/services/banners/people-group.png"
              alt="Expert"
              width={600}
              height={600}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="!max-w-7xl mx-auto mt-12">
        <div className="flex items-center justify-center gap-6">
          <div className="">
            <Image
              src="/images/about-us/google.png" // Replace with real image
              alt="Expert"
              width={140}
              height={140}
              className="rounded-full"
            />{" "}
          </div>

          {/* Other floating avatars */}
          <div className="">
            <Image
              src="/images/about-us/hubspot.png"
              alt="Expert"
              width={140}
              height={140}
              className=""
            />
          </div>
          <div className="">
            <Image
              src="/images/about-us/meta.png"
              alt="Expert"
              width={140}
              height={140}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerForServices;
