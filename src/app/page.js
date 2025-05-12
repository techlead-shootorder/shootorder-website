import AboutUs from "@/components/Home/About/AboutUs";
import Banner from "@/components/Home/Banner/Banner";
import CompanyInfo from "@/components/Home/CompanyInfo/CompanyInfo";
import Hire from "@/components/Home/Hire/Hire";
import OurPartners from "@/components/Home/Partners/OurPartners";
import ServiceTabs from "@/components/Service-tabs/ServiceTabs";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <CompanyInfo />
      <OurPartners />
      <ServiceTabs />
      <Hire />
    </>
  );
}
