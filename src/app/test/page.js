import About from "@/components/CaseStudies/About";
import BusinessChallenge from "@/components/CaseStudies/BusinessChallenge";
import Hero from "@/components/CaseStudies/Hero";
import KeywordRankings from "@/components/CaseStudies/KeywordRankings";
import Objectives from "@/components/CaseStudies/Objectives";
import OrganicGrowth from "@/components/CaseStudies/OrganicGrowth";
import OrganicTrafficGrowth from "@/components/CaseStudies/OrganicTrafficGrowth";
import OurApproach from "@/components/CaseStudies/OurApproach";
import StickySidbar from "@/components/CaseStudies/StickySidbar";
import Summary from "@/components/CaseStudies/Summary";

function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero/>
      
      {/* Main Content Container */}
      <div className=" mx-auto px-4 sm:px-12 lg:px-20 py-12">
        <div className=" flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sticky Sidebar */}
          <StickySidbar />

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="space-y-12">
              <About/>
              <Objectives/>
              <BusinessChallenge/>
              <OrganicGrowth/>
              <OrganicTrafficGrowth/>
              <KeywordRankings/>
              <OurApproach/>
              <Summary/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default page;