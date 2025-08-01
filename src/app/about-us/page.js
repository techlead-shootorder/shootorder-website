
import FormulaSection from "@/components/about-us/FormulaSection";
import HomeBanner from "@/components/about-us/HomeBanner";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import LeaderShipSection from "@/components/about-us/LeadShipSection";
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import PartnerCarousel from "@/components/Home/Partners/OurPartners";
import WhyTrustUs from "@/components/Home/Partners/WhyTrustUs";
import React from "react";
import AboutDescription from "@/components/about-us/AboutDescription";

function page() {
  return (
    <>
      {/* <HomeBanner /> */}
      <AboutDescription/>
      <PartnerCarousel/>
      <TestimonialSection />
      <LeaderShipSection/>
      <WhyTrustUs/>
      <WhyChooseSection />
      {/* <FormulaSection/> */}
    </>
  );
}

export default page;
