'use client'
import React from 'react'
import Hero from './Hero';
import Pricing from './Pricing';
import PipeDriveForm from "@/components/Home/PipeDrive/PipeDriveForm";
import OurPartners from "@/components/Home/Partners/OurPartners";
import ClutchWidget from "@/components/Home/CompanyInfo/ClutchWidget";
import FaqSection from './FaqSection';
import Form from './Form';





const page = () => {
  return (
    <div>
      <Hero/>
      <Pricing/>
      <Form/>
      <OurPartners/>
      <ClutchWidget/>
      <FaqSection/>
    </div>
  )
}

export default page
