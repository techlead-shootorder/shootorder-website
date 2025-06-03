"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arnab Ghosh",
    role: "Head of Marketing & Co-Founder, Nakshikathaa",
    image: "/images/logo/avatar.svg",
    text: `ShootOrder has been able to provide great results to the client, including an increase in sales and engagement and a decrease in the dropout rate. The team is very communicative, understanding, and flexible, and they excel at meeting deadlines due to their structured approach.`,
  },
  {
    name: "Amit Singh",
    role: "Founder, Travel Company",
    image: "/images/logo/avatar.svg",
    text: `The partner’s lead generation and business have both grown. Their lead conversion rate has increased. ShootOrder delivers effective results and reaches the correct target audience.`,
  },
  {
    name: "Rina Kapoor",
    role: "Managing Director, Auto Dealership",
    image: "/images/logo/avatar.svg",
    text: `With their work attracting 20% of the client’s current customers, ShootOrder has thoroughly satisfied the client. They work independently after initial instructions.`,
  },
  {
    name: "Sunita Rao",
    role: "Marketing Head, Fashion Brand",
    image: "/images/logo/avatar.svg",
    text: `We saw a significant improvement in our digital presence. Their reporting and strategy were on point.`,
  },
  {
    name: "Karan Mehta",
    role: "CEO, StartupX",
    image: "/images/logo/avatar.svg",
    text: `Thanks to ShootOrder, we reduced our CAC and doubled lead flow within 3 months. Highly recommended!`,
  },
  {
    name: "Neha Sharma",
    role: "Founder, Beauty Store",
    image: "/images/logo/avatar.svg",
    text: `Professional, punctual, and proactive. Their team understood our audience well and delivered impactful campaigns.`,
  },
];

function Testimonials() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="px-4 py-16 sm:px-6 lg:px-8 !max-w-7xl mx-auto relative"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
      >
        What Our Clients Say
      </motion.h2>

      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            className="keen-slider__slide flex justify-center"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{ marginRight: "20px" }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 max-w-sm w-full text-left hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-start gap-2">
                <div className="">
                  <img
                    src={testimonial.image}
                    alt="User"
                    className="w-16 h-16 mx-auto rounded-full mb-4"
                  />
                </div>
                <div className="">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-800">{testimonial.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => instanceRef.current?.prev()}
          className="bg-[#9a0c28] text-white rounded-full p-3 shadow hover:bg-[#7a0920] transition-colors"
        >
          <FaChevronLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => instanceRef.current?.next()}
          className="bg-[#9a0c28] text-white rounded-full p-3 shadow hover:bg-[#7a0920] transition-colors"
        >
          <FaChevronRight />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Testimonials;
