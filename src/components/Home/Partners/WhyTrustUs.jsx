"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WhyTrustUs() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 5, spacing: 5 },
      },
      "(max-width: 767px)": {
        slides: { perView: 3, spacing: 12 },
      },
    },
    slides: { perView: 3, spacing: 12 },
  });

  const partnerLogos = [
    "Apollo Homecare",
    "Carkia",
    "Empire wines",
    "IVF london",
    "Travtips",
  ].map((name) => `/images/clients/${name}.webp`);

  return (
    <div className="relative !max-w-7xl mx-auto py-16 ">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">Why Trust Us</h2>

      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-[60%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider overflow-hidden px-8">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
          >
            <div className=" p-4 rounded-md  w-full flex justify-center items-center">
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={180}
                height={150}
                className="object-contain filter grayscale brightness-95"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-[60%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
