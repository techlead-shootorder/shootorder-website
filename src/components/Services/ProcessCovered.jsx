import { getAllServices } from "@/lib/services";
import React from "react";
import { Button } from "../ui/button";

async function ProcessCovered({services}) {

  return (
    <section className="w-full pb-16 py-16">
      <div className=" !max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Process Covered In Our {services.title} Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.features.map((service) => (
            <div className="bg-white rounded-lg border-1 border-black overflow-hidden transition-all duration-300 hover:shadow-xl">
              {service.imageUrl && (
                <div className="h-24 flex items-center justify-center ">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className=" object-contain group-hover:scale-105 p-4 rounded-full w-[60px] h-[60px] bg-gray-100 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">
                  {service.heading}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.content}
                </p>
                <div className="flex justify-center">
                  <Button className="rounded-full" variant="default">
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessCovered;
