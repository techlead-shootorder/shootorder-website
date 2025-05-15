import React from "react";
import BannerSection from "../ReusableSections/BannerSection";
import Image from "next/image";

function HomeBanner() {
  return (
    <BannerSection>
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">We are among 3% in India</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Image src="/images/about-us/meta.png" alt="Meta Badge" width={150} height={100} />
          <Image src="/images/about-us/hubspot.png" alt="Google Badge" width={150} height={100} />
          <Image src="/images/about-us/google.png" alt="HubSpot Badge" width={150} height={100} />
        </div>
        
      </div>
    </BannerSection>
  );
}

export default HomeBanner;
