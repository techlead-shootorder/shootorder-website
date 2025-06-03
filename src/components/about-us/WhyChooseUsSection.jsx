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
      className="flex items-start gap-3 p-6 rounded-xl hover:shadow-lg transition-all bg-white border border-gray-100 hover:border-[#9a0c28]/20"
    >
      <div className="bg-[#9a0c28]/10 p-4 rounded-xl group-hover:bg-[#9a0c28]/20 transition-colors">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: <BadgeCheck className="h-6 w-6 text-[#9a0c28]" />,
      title: "Experienced Managers",
      description:
        "Every manager in ShootOrder's team is a google certified manager, our experience will not let you down!",
    },
    {
      icon: <Users className="h-6 w-6 text-[#9a0c28]" />,
      title: "Dedicated Team",
      description:
        "Our dedicated team has only one target, to get you business at the least possible cost and keep you always smiling.",
    },
    {
      icon: <Star className="h-6 w-6 text-[#9a0c28]" />,
      title: "We are creative!",
      description:
        "You don't have to outsource creative work to a third party vendor, we are a full service advertising agency and we are confident enough to provide you utmost creativity.",
    },
    {
      icon: <Wrench className="h-6 w-6 text-[#9a0c28]" />,
      title: "We will fix your website!",
      description:
        "Urgh!!! Keeping your website bug free and with latest optimizations is a nightmare. With our Digital Marketing services, you dont have to go anywhere else. Until your website is optimized, our digital marketing services won't yield the expected results.",
    },
    {
      icon: <Zap className="h-6 w-6 text-[#9a0c28]" />,
      title: "Quick Results",
      description:
        "You don't have to wait month and months to get in positive ROI's, we do it quick!",
    },
    {
      icon: <Headphones className="h-6 w-6 text-[#9a0c28]" />,
      title: "Always available for you!",
      description:
        "Our client servicing team is always available at your service with industries best turnaround time.",
    },
    {
      icon: <FileSignature className="h-6 w-6 text-[#9a0c28]" />,
      title: "No long term contracts!",
      description:
        "We are always ready to sign NDA in case our clients want to set the bar of confidentiality higher. Also, no worries of long term contracts.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-[#9a0c28]" />,
      title: "Complete Satisfaction",
      description:
        "We value time & money of client for long term relationships. Client satisfaction is one of the most important aspect of our work.",
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
