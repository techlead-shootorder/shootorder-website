'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function PartnerCarousel() {
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

  const partnerLogos = Array.from({ length: 14 }, (_, i) => `/images/logo/${i + 1}.jpg`);

  return (
    <div className="relative max-w-7xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
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
            <Image
              src={logo}
              alt={`Partner ${index + 1}`}
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
