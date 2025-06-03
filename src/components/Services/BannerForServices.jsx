"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ServiceModal from "../Modal/ServiceModal";
import { motion, useScroll, useTransform } from "framer-motion";

const BannerForServices = ({ imageUrl, subheading, heading }) => {
  const modalRef = useRef();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              imageUrl || "/images/services/banners/seo-banner.jpg"
            })`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-[#9a0c28]/20 rounded-full blur-xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        {/* ...add more floating elements... */}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex items-center min-h-[80vh] px-4"
        style={{ opacity }}
      >
        <div className="!max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              Expert Digital Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => modalRef.current?.open()}
              className="bg-[#9a0c28] text-white px-8 py-4 rounded-full font-medium hover:bg-[#7a0920] transition-colors shadow-lg inline-flex items-center justify-center gap-2 group"
            >
              Get Started Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                &rarr;
              </motion.span>
            </motion.button>

            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all">
              View Case Studies
            </button>
          </motion.div>
        </div>
      </motion.div>

      <ServiceModal ref={modalRef} />
    </section>
  );
};

export default BannerForServices;
