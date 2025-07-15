// app/branding/[brandName]/page.js
import BannerForBranding from '@/components/Branding/BannerForBranding';
import Services from "@/components/Branding/Services"
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import ClientGrid from "@/components/about-us/ClientGrid";
import Testimonials from "@/components/Services/Testimonials";
import Blogs from "@/components/Blogs/Blogs";
import { getBrandingContent, getAllBrandingServices } from '@/lib/brandingContent'; // Add getAllBrandingServices import
import { notFound } from 'next/navigation';

// Add this back for static generation
export async function generateStaticParams() {
  return getAllBrandingServices().map((service) => ({
    brandName: service,
  }));
}

export function generateMetadata({ params }) {
  const content = getBrandingContent(params.brandName);
  
  if (!content) {
    return {
      title: 'Service Not Found',
    };
  }
  
  return {
    title: content.heading,
    description: content.subheading,
  };
}

export default function BrandingServicePage({ params }) {
  const { brandName } = params;
  const content = getBrandingContent(brandName);
  
  if (!content) {
    notFound();
  }
  
  return (
   <>
    <BannerForBranding imageUrl={content.imageUrl} subheading={content.subheading} heading={content.heading}/>
    <Services services={content}/>
    <WhyChooseSection />
    <section className="py-16">
        <ClientGrid>
          <h3 className="text-3xl font-semibold mb-4 text-center">
            Top Brand&apos;s We Have Worked With
          </h3>
        </ClientGrid>
      </section>
       <section className="bg-[#fffbe7]">
        <Testimonials/>
      </section>
      <section>
        <Blogs/>
      </section>
   </>
  );
}