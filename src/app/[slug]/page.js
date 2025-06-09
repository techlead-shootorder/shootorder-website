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
  const slugs = await getAllServiceSlugs();

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
        <ClientGrid>
          {/* <h3 className="text-3xl font-semibold mb-4 text-center">
            Top Brand&apos;s We Have Worked With
          </h3> */}
        </ClientGrid>
      </section>
      <section className="bg-[#fffbe7]">
        <Testimonials />
      </section>
      <section>
        <Blogs />
      </section>
    </>
  );
}
