import ClientGrid from "@/components/about-us/ClientGrid";
import ProcessCovered from "@/components/Services/ProcessCovered";
import React from "react";

function page() {
  return (
    <>
      <div className="pt-32 pb-12">
        <ClientGrid />
        <ProcessCovered />
      </div>
    </>
  );
}

export default page;
