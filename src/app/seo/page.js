import { getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";

import BannerForServices from "@/components/Services/BannerForServices";
import ProcessCovered from "@/components/Services/ProcessCovered";
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import ClientGrid from "@/components/about-us/ClientGrid";
import Testimonials from "@/components/Services/Testimonials";
import Blogs from "@/components/Blogs/Blogs";

export const metadata = {
  title: "SEO | ShootOrder Services",
  description: "SEO services tailored to boost your online presence.",
};

export default async function SeoPage() {
  const service = await getServiceBySlug("seo");

  if (!service) {
    notFound();
  }

  return (
    <>
      <BannerForServices />
      <ProcessCovered services={service} />
      <WhyChooseSection />
      <section className="py-16">
        <ClientGrid>
          <h3 className="text-3xl font-semibold mb-4 text-center">
            Top Brand&apos;s We Have Worked With
          </h3>
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
