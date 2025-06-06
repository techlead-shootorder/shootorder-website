
import FormulaSection from "@/components/about-us/FormulaSection";
import HomeBanner from "@/components/about-us/HomeBanner";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import PartnerCarousel from "@/components/Home/Partners/OurPartners";
import WhyTrustUs from "@/components/Home/Partners/WhyTrustUs";
import React from "react";

function page() {
  return (
    <>
      <HomeBanner />
      <PartnerCarousel/>
      <TestimonialSection />
      <WhyTrustUs/>
      <WhyChooseSection />
      <FormulaSection/>
    </>
  );
}

export default page;
