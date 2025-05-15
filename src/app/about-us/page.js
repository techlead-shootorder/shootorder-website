import ClientGrid from "@/components/about-us/ClientGrid";
import FormulaSection from "@/components/about-us/FormulaSection";
import HomeBanner from "@/components/about-us/HomeBanner";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import React from "react";

function page() {
  return (
    <>
      <HomeBanner />
      <ClientGrid />
      <TestimonialSection />
      <WhyChooseSection />
      <FormulaSection/>
    </>
  );
}

export default page;
