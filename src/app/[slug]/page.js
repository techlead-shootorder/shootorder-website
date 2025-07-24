// src/app/services/[slug]/page.jsx
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import BannerSection from "@/components/ReusableSections/BannerSection";
import BannerForServices from "@/components/Services/BannerForServices";
import ProcessCovered from "@/components/Services/ProcessCovered";
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import Blogs from "@/components/Blogs/Blogs";
import PartnerCarousel from "@/components/Home/Partners/OurPartners";
import ClutchWidget from "@/components/Home/CompanyInfo/ClutchWidget";
import WhyTrustUs from "@/components/Home/Partners/WhyTrustUs";
import CaseStudyComponent from "@/components/CaseStudies/CaseStudyComponent";
// import PricingSection from "@/components/Services/PricingSection";

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  console.log("slugs ------>", slugs);

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | ShootOrder Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const service = await getServiceBySlug(params.slug);
  console.log("servieces", service);
  if (!service) {
    notFound();
  }
  return (
    <>
      <BannerForServices
        heading={service.heading}
        subheading={service.subheading}
        imageUrl={service.imageUrl}
      />
      <ProcessCovered services={service} />
      <WhyChooseSection />
      <section className="py-16">
        <PartnerCarousel />
      </section>

      <ClutchWidget />

      {/* <WhyTrustUs /> */}
      <CaseStudyComponent service={params.slug}/>
      
      {/* Pricing Section */}
      {/* <PricingSection /> */}

      <section>
        {/* <Blogs /> */}
      </section>
    </>
  );
}