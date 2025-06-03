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

  // return (
  //   <div className="max-w-7xl mx-auto py-20 px-4">
  //     <div className="max-w-4xl mx-auto">
  //       <h1 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h1>

  //       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
  //         {service.imageUrl && (
  //           <div className="w-full h-64 overflow-hidden">
  //             <img
  //               src={service.imageUrl}
  //               alt={service.title}
  //               className="w-full h-full object-cover"
  //             />
  //           </div>
  //         )}

  //         <div className="p-6">
  //           <div className="prose max-w-none">
  //             <p className="text-gray-700 mb-6 text-lg">{service.description}</p>

  //             <div className="mt-8">
  //               <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
  //               <ul className="list-disc pl-5 space-y-2">
  //                 {service.features.map((feature, index) => (
  //                   <li key={index} className="text-gray-700">{feature}</li>
  //                 ))}
  //               </ul>
  //             </div>

  //             {service.content && (
  //               <div
  //                 className="mt-8"
  //                 dangerouslySetInnerHTML={{ __html: service.content }}
  //               />
  //             )}

  //             <div className="mt-10 pt-6 border-t border-gray-200">
  //               <h3 className="text-xl font-semibold mb-3">Want to learn more?</h3>
  //               <p className="mb-4">Contact us today to discuss how our {service.title} services can help your business grow.</p>
  //               <a
  //                 href="/contact"
  //                 className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
  //               >
  //                 Contact Us
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
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
