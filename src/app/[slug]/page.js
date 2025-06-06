// src/app/services/[slug]/page.jsx
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import BannerSection from "@/components/ReusableSections/BannerSection";
import BannerForServices from "@/components/Services/BannerForServices";
import ProcessCovered from "@/components/Services/ProcessCovered";
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import ClientGrid from "@/components/about-us/ClientGrid";
import Testimonials from "@/components/Services/Testimonials";
import Blogs from "@/components/Blogs/Blogs";

export async function generateStaticParams() {
  try {
    const slugs = await getAllServiceSlugs();
    console.log('Generating static params for slugs:', slugs);
    
    // Ensure we return all available slugs
    const params = slugs.map((slug) => ({
      slug: slug,
    }));
    
    console.log('Generated params:', params);
    return params;
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return empty array to prevent build errors
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const service = await getServiceBySlug(params.slug);
    
    if (!service) {
      return {
        title: "Service Not Found | ShootOrder",
        description: "The requested service page could not be found.",
      };
    }
    
    return {
      title: `${service.title} | ShootOrder Services`,
      description: service.subheading || service.description || `Learn more about our ${service.title} services`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: "Service Not Found | ShootOrder",
      description: "The requested service page could not be found.",
    };
  }
}

export default async function ServicePage({ params }) {
  try {
    const service = await getServiceBySlug(params.slug);
    
    // If service doesn't exist, trigger 404
    if (!service) {
      notFound();
    }
    
    return (
      <>
        <BannerForServices service={service} />
        <ProcessCovered features={service.features} />
        <WhyChooseSection />
        <ClientGrid />
        <Testimonials />
        <Blogs />
      </>
    );
  } catch (error) {
    console.error('Error loading service page:', error);
    notFound();
  }
}