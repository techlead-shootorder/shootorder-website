import React from "react";
import BannerSection from "../ReusableSections/BannerSection";
import Image from "next/image";

function HomeBanner() {
  return (
    <BannerSection>
      <div className="flex flex-col items-center justify-start text-center md:text-right">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight text-white">
          We are among the top 3% in India
        </h2>
        <div className="flex flex-col md:flex-row justify-end items-center gap-6">
          <Image
            src="/images/logo/meta.png"
            alt="Meta Badge"
            width={120}
            height={80}
            className="object-contain"
          />
          <Image
            src="/images/logo/google-badge.svg"
            alt="HubSpot Badge"
            width={120}
            height={80}
            className="object-contain"
          />
          <Image
            src="/images/logo/partner-badge-color.png"
            alt="Google Badge"
            width={120}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </BannerSection>
  );
}

export default HomeBanner;
