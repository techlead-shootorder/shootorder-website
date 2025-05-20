import React from "react";

function ClientGrid() {
  const partnerLogos = Array.from(
    { length: 14 },
    (_, i) => `/images/logo/${i + 1}.jpg`
  );
  return (
    <div className="!max-w-7xl mx-auto pb-16">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="object-contain h-16 w-16 md:h-32 md:w-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientGrid;
