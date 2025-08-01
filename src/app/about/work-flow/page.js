import CompanyInfo from "@/components/Home/CompanyInfo/CompanyInfo";
import BannerForServices from "@/components/Services/BannerForServices";
import ProcessCovered from "@/components/Services/ProcessCovered";
import React from "react";

function page() {
  const services = {
    features: [
      {
        heading: "First Contact",
        content:
          "Placement of order, order varies depending on the requirement which is supported by Business Development Team",
        imageUrl: "/images/services/Work flow/First Contact & Lead Qualification.webp", // Optional: Add a specific image URL here
      },
      {
        heading: "Request Analyzation",
        content:
          "Depending upon the project, project manager communicates to the point of contact to understand in depth about the IT infrastructure (or) and other related functionalities of the client's organization.",
        imageUrl: "/images/services/Work flow/Requisite Collection & Onboarding.webp",
      },
      {
        heading: "Quality & Assurance",
        content:
          "We crosscheck and proofread all documents and statics internally before sending information to our clients or putting content out on the web.",
        imageUrl: "/images/services/Work flow/Proposal, Quotation & Order Placement.webp",
      },
      {
        heading: "Requisites Sheet",
        content:
          "After processing the order, a project manager is assigned who will ask for pre-requisites which again depends on the requirement and carries out the necessary research work with our team.",
        imageUrl: "/images/services/Work flow/Requisite Collection & Onboarding.webp",
      },
      {
        heading: "Execution",
        content:
          "Execution of project on decided timelines is a commitment which we closely abide with.",
        imageUrl: "/images/services/Work flow/Project Execution.webp",
      },
      {
        heading: "Reports & Deliverables",
        content:
          "Reports are generated frequently for the work carried on and shared with the client with full disclosure.",
        imageUrl: "/images/services/Work flow/Performance, Reporting & Growth.webp",
      },
    ],
  };

  return (
    <>
      <BannerForServices
        imageUrl="/images/services/workflow-bg.jpg"
        heading="Work Flow"
        subheading="Our workflow system is highly flexible and maintains industrial standards, this facilitates easy and cost-effective solution deliver within stipulated time duration. From requirement analysis to development phase, everything is strategically executed. Therefore, our clients face no challenges working with us and have a marvelous experience collaborating with us."
      />
      <ProcessCovered services={services} pageHeading={"Process Steps"} />
      <CompanyInfo />
    </>
  );
}

export default page;
