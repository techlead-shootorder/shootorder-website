"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiBriefcase, FiClock, FiUsers } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="w-full bg-white md:pt-24 md:pb-16">
      <div
        className="relative max-w-7xl mx-auto rounded-[2rem] text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/background/home-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Desktop Only Bubbles */}
        <div className="hidden md:block">
          <div className="absolute top-8 left-12 bg-opacity-10 backdrop-blur-xl text-center px-4 py-2 rounded-xl border border-white/20">
            <div className="text-xl font-bold">50+</div>
            <div className="text-sm">Ongoing Project</div>
          </div>

          <div className="absolute top-6 right-6 bg-opacity-10 backdrop-blur-xl text-center px-4 py-2 rounded-xl border border-white/20">
            <div className="text-xl font-bold">12+</div>
            <div className="text-sm">Years of experience</div>
          </div>

          <div className="absolute bottom-6 right-10 bg-opacity-10 backdrop-blur-xl text-center px-4 py-2 rounded-xl border border-white/20">
            <div className="text-xl font-bold">92+</div>
            <div className="text-sm">Client Retention</div>
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center py-32 md:py-32">
          <div className="text-white inline-block px-4 py-2 rounded-full mb-4 text-sm font-medium">
            Find, hire & manage your offshore team seamlessly.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Strategic Digital Growth with <br />
            ShootOrder’s Expertise
          </h1>

          <p className="max-w-xl mx-auto text-white/90 mb-8">
            ShootOrder stands as the forefront leader in providing comprehensive
            digital marketing solutions in Hyderabad, India.
          </p>

          <Button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Mobile Only Stats */}
      <div className="block md:hidden px-4 py-8 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 p-5 rounded-xl flex flex-col items-center justify-center gap-2">
            <FiBriefcase className="text-xl text-primary" />
            <div className="text-lg font-semibold">50+</div>
            <div className="text-sm text-gray-600 text-center">
              Ongoing Projects
            </div>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl flex flex-col items-center justify-center gap-2">
            <FiClock className="text-xl text-primary" />
            <div className="text-lg font-semibold">12+</div>
            <div className="text-sm text-gray-600 text-center">
              Years of Experience
            </div>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl flex flex-col items-center justify-center gap-2">
            <FiUsers className="text-xl text-primary" />
            <div className="text-lg font-semibold">92+</div>
            <div className="text-sm text-gray-600 text-center">
              Client Retention
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
