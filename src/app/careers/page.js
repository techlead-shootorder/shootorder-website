"use client";
import Image from "next/image";
import React, { useState } from "react";

const CareerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All positions");

  const jobCategories = [
    { name: "All positions", count: 17 },
    { name: "Design", count: 1 },
    { name: "Operation", count: 4 },
    { name: "Marketing", count: 2 },
  ];

  const jobListings = [
    {
      id: 1,
      title: "Group Account Manager",
      type: "Full-time",
      location: "Hyderabad",
      description:
        "he Group Account Manager is responsible for overseeing a portfolio of key client accounts, leading multiple account teams, and ensuring the successful delivery of marketing strategies and campaigns.",
      category: "Marketing",
    },
    {
      id: 2,
      title: "Paid Ads Specialist",
      type: "Full-time",
      location: "Hyderabad",
      description:
        "We are looking for a results-driven Paid Ads Specialist to join our digital marketing team. In this role, you will be responsible for strategizing, executing, monitoring, and optimizing paid advertising campaigns across platforms such as Google Ads, Meta (Facebook & Instagram), LinkedIn, and more.",
      category: "Marketing",
    },
  ];

  const filteredJobs =
    selectedCategory === "All positions"
      ? jobListings
      : jobListings.filter((job) => job.category === selectedCategory);

  return (
    <div className="min-h-screen ">
      {/* Banner Section with Image */}
      <div className="relative h-128 bg-gray-50">
        <Image
          src="/images/background/careers/bg.jpg"
          alt="Career Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Main Content */}
      <div className="!bg-gray-100">
        <div className=" mx-auto ">
          {/* Introduction Section */}
          <div className="bg-white">
            <div className="mb-16 py-12 !max-w-7xl m-auto ">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Become an Intelligent Digital Marketer
              </h1>
              <div className="space-y-4 text-md text-gray-600 leading-relaxed">
                <p>
                  Are you looking for a digital marketing job to shape up your
                  professional career and at the same time excited to handle
                  interesting challenges? You are at the very right place!
                </p>
                <p>
                  We offer lifetime career opportunities for all those aspirants
                  who are looking to build their career in the field of Digital
                  Marketing, SEO, Social Media Marketing, PPC, Content Writing,
                  Web Development, Graphic Designing. We treat employees as our
                  biggest assets and this is one of our company&apos;s philosophy.
                </p>
                <p>
                  Employees are our best asset. Create a culture where everyone
                  would love to work.
                  <br />
                  <strong>Director</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Open Positions Section */}
          <div className="!max-w-7xl mx-auto pb-12">
            <div className="text-center mb-12 ">
              <h2 className="text-3xl font-medium text-gray-900">
                Open positions now!
              </h2>
            </div>

            {/* Job Listings Section */}
            <div className="flex gap-12">
              {/* Sidebar */}
              <div className="w-80 flex-shrink-0">
                {/* Categories */}
                <div className="mb-8">
                  {jobCategories.map((category) => (
                    <div
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`cursor-pointer py-2 px-3 mb-1 text-sm ${
                        selectedCategory === category.name
                          ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {category.name} ({category.count})
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="bg-[#f6f9f6] p-4 rounded-lg text-sm text-gray-600">
                  <p className="mb-3">
                    We are always seeking talented people! In case you cannot
                    find your desired position here, please send us your
                    LinkedIn profile and give us your contact information. We
                    will be in touch.
                  </p>
                  <button className="w-full bg-white rounded-full border border-gray-300 text-gray-700 py-2 px-4 text-sm hover:bg-gray-50 transition-colors">
                    Share your LinkedIn profile
                  </button>
                </div>
              </div>

              {/* Job Listings */}
              <div className="flex-1 space-y-8">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-xl pb-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-full text-sm transition-colors">
                        See positions →
                      </button>
                    </div>

                    <div className="flex gap-3 mb-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
