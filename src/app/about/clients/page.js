import ClientGrid from "@/components/about-us/ClientGrid";
import ClientReviews from "@/components/about-us/ClientReviews";
import ProcessCovered from "@/components/Services/ProcessCovered";
import React from "react";

function page() {
  return (
    <>
      <div className="pt-20 pb-12">
        <ClientReviews/>
        <ClientGrid />
        <ProcessCovered />
      </div>
    </>
  );
}

export default page;
