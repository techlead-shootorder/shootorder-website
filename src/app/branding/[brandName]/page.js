// app/branding/[brandName]/page.js
import BannerForBranding from '@/components/Branding/BannerForBranding';
import Services from "@/components/Branding/Services"
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import ClientGrid from "@/components/about-us/ClientGrid";
import Testimonials from "@/components/Services/Testimonials";
import Blogs from "@/components/Blogs/Blogs";
import { getBrandingContent } from '@/lib/brandingContent';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }) {
  const content = getBrandingContent(params.brandName);
  
  if (!content) {
    return {
      title: 'Service Not Found',
    };
  }
  
  return {
    title: content.title,
    description: content.subtitle,
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
            Top Brand&apos;s We Have Worked With
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


//  <div className="branding-service-page">
//       <div className="hero-section">
//         <h1>{content.title}</h1>
//         <p className="subtitle">{content.subtitle}</p>
//       </div>
      
//       <div className="content-section">
//         <div className="description">
//           <h2>What is {content.serviceName}?</h2>
//           <p>{content.description}</p>
//         </div>
        
//         <div className="features">
//           <h2>Our {content.serviceName} Services Include:</h2>
//           <ul>
//             {content.features.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>
//         </div>
        
//         <div className="process">
//           <h2>Our Process</h2>
//           <div className="process-steps">
//             {content.process.map((step, index) => (
//               <div key={index} className="step">
//                 <h3>Step {index + 1}: {step.title}</h3>
//                 <p>{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="cta-section">
//           <h2>Ready to Get Started?</h2>
//           <p>{content.ctaText}</p>
//           <button className="cta-button">
//             Get Your {content.serviceName} Today
//           </button>
//         </div>
//       </div>
//     </div>