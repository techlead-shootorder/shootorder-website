"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    regarding: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      regarding: value,
    }));

    // Clear error when user selects
    if (errors.regarding) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        regarding: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.regarding) {
      newErrors.regarding = "Please select an option";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
      // For example: axios.post('/api/contact', formData)
    }
  };

  return (
    <div className="py-16">
      <div className="w-full !max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg mb-8">
          Fill in the form below to get in touch with our representative.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                className={`h-12 bg-white border-gray-200 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm text-left">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                type="email"
                className={`h-12 bg-white border-gray-200 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <div className="flex items-center gap-2 text-red-500 text-sm text-left">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      className="warning-icon"
                      d="M9.06997 2.80002L14.75 12.92C15.35 13.98 14.85 14.83 13.65 14.83H2.34997C1.14997 14.83 0.649968 13.98 1.24997 12.93L6.92997 2.78002C7.52997 1.73002 8.47997 1.72002 9.06997 2.78002V2.80002ZM8.99997 11H6.99997V13H8.99997V11ZM8.99997 6.00002H6.99997V10H8.99997V6.00002Z"
                      fill="#F94839"
                    />
                  </svg>
                  {errors.email}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                type="tel"
                className={`h-12 bg-white border-gray-200 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm text-left">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company name*"
                className={`h-12 bg-white border-gray-200 ${
                  errors.companyName ? "border-red-500" : ""
                }`}
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm text-left">
                  {errors.companyName}
                </p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Select
                value={formData.regarding}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger
                  className={`h-12 bg-white border-gray-200 w-full ${
                    errors.regarding ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Regarding?*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general-inquiry">
                    General Inquiry
                  </SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="partnerships">Partnerships</SelectItem>
                  <SelectItem value="careers">Careers</SelectItem>
                  <SelectItem value="press">Press</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.regarding && (
                <p className="text-red-500 text-sm text-left">
                  {errors.regarding}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message (optional)"
                className="bg-white border-gray-200 min-h-[100px]"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="rounded-full px-8" variant="black">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
