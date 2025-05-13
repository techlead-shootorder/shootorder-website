"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TalentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    roleToHire: "",
    experienceLevel: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    // For example: axios.post('/api/submit-recruiting', formData)
  };

  return (
    <section className="bg-[#f8f6ee] py-16 ">
      <div className="w-full max-w-4xl mx-auto px-4  text-center">
        <h2 className="text-3xl font-semibold mb-2">
          Finding top talent from India is like
          <br />
          finding a needle in a haystack.
        </h2>
        <p className="text-lg mb-8">
          We've spent the last 5 years perfecting it.
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              className="h-12 bg-white border-gray-200"
            />

            <Input
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="Work Email*"
              type="email"
              className="h-12 bg-white border-gray-200"
            />

            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number*"
              className="h-12 bg-white border-gray-200"
            />

            <Input
              name="roleToHire"
              value={formData.roleToHire}
              onChange={handleChange}
              placeholder="What role are you looking to hire*"
              className="h-12 bg-white border-gray-200"
            />

            <Input
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              placeholder="What level of experience do you need?*"
              className="h-12 bg-white border-gray-200"
            />

            <Input
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="What is your monthly budget for this role?*"
              className="h-12 bg-white border-gray-200"
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              className="rounded-full"
              variant="black"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
