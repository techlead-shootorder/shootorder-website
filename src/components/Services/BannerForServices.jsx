import Image from "next/image";
import React from "react";

const BannerForServices = ({ imageUrl, subheading, heading }) => {
  return (
    <section className="relative w-full min-h-[600px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${imageUrl || "/images/services/banners/seo-banner.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[600px] px-4">
        <div className="!max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {heading ||
                "Hire SEO Experts to Boost Your SaaS Website's Performance"}
            </h2>
            <p className="text-white">
              {subheading ||
                "Unlock the full potential of your SaaS website with our expert SEO services. Our team specializes in optimizing your site for search engines, ensuring higher visibility and increased traffic. Whether you're looking to improve your rankings, enhance user experience, or drive more conversions, our SEO experts are here to help."}
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
              Hire SEO Expert
            </button>
          </div>

          {/* Optional: Right Side Floating Image (uncomment if needed) */}
          {/* <div className="relative">
            <Image
              src="/images/services/banners/people-group.png"
              alt="Expert"
              width={600}
              height={600}
              className="rounded-full"
            />
          </div> */}
        </div>
      </div>

      {/* Optional: Partner Logos */}
      {/* <div className="relative z-20 mt-12">
        <div className="!max-w-7xl mx-auto flex items-center justify-center gap-6">
          <Image src="/images/about-us/google.png" alt="Google" width={140} height={140} />
          <Image src="/images/about-us/hubspot.png" alt="HubSpot" width={140} height={140} />
          <Image src="/images/about-us/meta.png" alt="Meta" width={140} height={140} />
        </div>
      </div> */}
    </section>
  );
};

export default BannerForServices;
