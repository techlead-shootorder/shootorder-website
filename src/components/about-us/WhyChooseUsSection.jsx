// WhyChooseSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Image,
  Star,
  Phone,
  Shield,
  Headphones,
  FileSignature,
  HeartHandshake,
  BadgeCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const FeatureBox = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 p-6 rounded-xl hover:shadow-lg transition-all bg-white border border-gray-100 hover:border-[#9a0c28]/20"
    >
      <div className="bg-[#9a0c28]/10 p-3 rounded-full hover:bg-[#9a0c28]/20 transition-colors flex-shrink-0">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-lg mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-[#9a0c28]" />,
      title: "Experience Managers",
      description:
        "Every manager on ShootOrder's team is a Google-certified manager; our experience will not let you down!",
    },
    {
      icon: <Users className="h-8 w-8 text-[#9a0c28]" />,
      title: "Dedicated Team",
      description:
        "Our dedicated team has one goal - to get you business at the lowest possible cost and keep you smiling.",
    },
    {
      icon: <Star className="h-8 w-8 text-[#9a0c28]" />,
      title: "We are creative!",
      description:
        "No need to outsource creatives, we’re a full-service agency delivering bold, original ideas with complete in-house expertise and confidence.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#9a0c28]" />,
      title: "We will fix your website!",
      description:
        "A buggy site kills results. We optimize your website first, because great digital marketing starts with a solid website.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#9a0c28]" />,
      title: "Quick Results",
      description:
        "No need to wait months for positive ROI, we deliver results faster with smart strategies and performance-driven execution.",
    },
    {
      icon: <Headphones className="h-8 w-8 text-[#9a0c28]" />,
      title: "Always available for you!",
      description:
        "Our client servicing team is always available at your service with industries best turnaround time.",
    },
    {
      icon: <FileSignature className="h-8 w-8 text-[#9a0c28]" />,
      title: "No long term contracts!",
      description:
        "We’re NDA-ready for full confidentiality and don’t worry, no long-term contracts required. Flexibility and trust come first.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-[#9a0c28]" />,
      title: "Complete Satisfaction",
      description:
        "We value your time and money, client satisfaction drives our work and builds lasting relationships.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#fffbe7] to-white py-20 px-4 md:px-8">
      <motion.div
        className="!max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center font-bold text-4xl mb-4"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
        >
          Why Choose Shootorder
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ y: -10 }}
          whileInView={{ y: 0 }}
        >
          Partner with us for data-driven growth and exceptional results
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseSection;