import BannerForServices from "@/components/Services/BannerForServices";

export default function OffshoreHero() {

  let service = {
    heading: 'Pick Your Talent, Pay What Fits ',
    subheading: 'India’s talent pool is diverse, and so are your hiring needs. Instead of one-size-fits-all rates, we offer role-based personas tailored to your goals. Just pick the right fit, and we’ll match you with top talent. ',
    imageUrl: '/images/background/Offshore services.webp'
  }
  return (
    // <section className="bg-[#9a0c28] py-16 text-center px-4 mt-12">
    //   <div className="!max-w-7xl mx-auto">
    //     <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
    //       Pick Your Talent, Pay What Fits 
    //     </h1>
    //     <p className="text-gray-200 text-base md:text-lg mb-2">
    //       India’s talent pool is diverse, and so are your hiring needs. Instead of one-size-fits-all rates, we offer role-based personas tailored to your goals. Just pick the right fit, and we’ll match you with top talent. 
    //     </p>
       
    //   </div>
    // </section>

    <section>
      <BannerForServices
        heading={service.heading}
        subheading={service.subheading}
        imageUrl={service.imageUrl}
      />
    </section>
  );
}
