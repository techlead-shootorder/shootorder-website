"use client";

import { useEffect, useState } from "react";
import AboutUs from "@/components/Home/About/AboutUs";
import Banner from "@/components/Home/Banner/Banner";
import CompanyInfo from "@/components/Home/CompanyInfo/CompanyInfo";
import Hire from "@/components/Home/Hire/Hire";
import OurPartners from "@/components/Home/Partners/OurPartners";
import ServiceFlow from "@/components/Home/ServiceFlow/ServiceFlow";
import TalentForm from "@/components/Home/TalentForm/TalentForm";
import ServiceTabs from "@/components/Service-tabs/ServiceTabs";
import "keen-slider/keen-slider.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "@/utils/smooth-scroll";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Use the smooth scroll hook
  useSmoothScroll();

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Wait for everything to load before initializing animations
    const onPageLoad = () => {
      // Create initial loading animation
      const loadTl = gsap.timeline({
        onComplete: () => setIsLoaded(true),
      });

      loadTl.to(".page-loader", {
        y: "-100%",
        duration: 1.2,
        ease: "power2.inOut",
      });

      // Set up parallax and reveal animations for each section
      setupSectionAnimations();
    };

    // If the page has already loaded, run the function
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }

    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setupSectionAnimations = () => {
    // Banner parallax effect - improved smoothness
    gsap.to(".banner-background", {
      yPercent: 25, // Reduced from 30 for smoother effect
      ease: "none",
      scrollTrigger: {
        trigger: ".banner-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.8, // Increased from 0.5 for smoother effect
      },
    });

    gsap.to(".banner-content", {
      yPercent: -15, // Reduced from -20 for smoother effect
      ease: "none",
      scrollTrigger: {
        trigger: ".banner-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.8, // Increased for smoother effect
      },
    });

    // Stat bubbles floating animation - smoother movement
    gsap.to(".stat-bubble", {
      y: "random(-12, 12)", // Reduced range
      x: "random(-8, 8)", // Reduced range
      rotation: "random(-3, 3)", // Reduced rotation
      duration: "random(3, 5)", // Increased duration for smoother effect
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.3, // Increased stagger for more natural movement
    });

    // Apply animations to each section - improved smoothness
    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section, index) => {
      const isEven = index % 2 === 0;
      const direction = isEven ? 1 : -1;

      // Create section entrance animation - smoother entrance
      gsap.fromTo(
        section,
        {
          y: 80, // Reduced from 100
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2, // Increased duration
          ease: "power3.out", // Changed from power2 for smoother effect
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=120",
            end: "top center",
            scrub: 1.2, // Increased for smoother effect
          },
        }
      );

      // Create parallax effect for background elements - smoother movement
      const backgrounds = section.querySelectorAll(".parallax-bg");
      backgrounds.forEach((bg) => {
        gsap.fromTo(
          bg,
          { y: 0 },
          {
            y: -30 * direction, // Reduced from -40
            ease: "power1.inOut", // Added easing for smoother effect
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2, // Increased for smoother effect
            },
          }
        );
      });

      // Create reveal animations for text elements - smoother reveals
      const textElements = section.querySelectorAll(".reveal-text");
      textElements.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            y: 40, // Reduced from 50
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1, // Increased from 0.8
            delay: i * 0.12, // Increased from 0.1
            ease: "power2.out", // Added ease specification
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=180", // Adjusted trigger point
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    // Updated OurPartners animation - slide up from bottom instead of scale
    gsap.fromTo(
      "#partners-container",
      {
        y: 80, // Start from below
        opacity: 0,
      },
      {
        y: 0, // Move to original position
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#partners-container",
          start: "top bottom-=120",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Service tabs staggered reveal - smoother scaling
    const tabs = document.querySelectorAll(".service-tab");
    gsap.fromTo(
      tabs,
      {
        scale: 0.85, // Increased from 0.8
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7, // Increased from 0.5
        stagger: 0.2, // Increased from 0.15
        ease: "back.out(1.5)", // Reduced from 1.7 for smoother effect
        scrollTrigger: {
          trigger: "#service-tabs-section",
          start: "top bottom-=120", // Adjusted trigger point
          toggleActions: "play none none reverse",
        },
      }
    );

    // Masked reveal effect for images - smoother reveal
    const revealImages = document.querySelectorAll(".reveal-image");
    revealImages.forEach((img) => {
      const clipPath = gsap.utils.random([
        "circle(0% at 50% 50%)",
        "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      ]);

      gsap.fromTo(
        img,
        {
          clipPath: clipPath,
          scale: 1.08, // Reduced from 1.1
        },
        {
          clipPath: "circle(100% at 50% 50%)",
          scale: 1,
          duration: 1.8, // Increased from 1.5
          ease: "power3.inOut", // Changed from power2 for smoother effect
          scrollTrigger: {
            trigger: img,
            start: "top bottom-=120", // Adjusted trigger point
            toggleActions: "play none none none",
          },
        }
      );
    });
  };

  return (
    <div className="smooth-scroll-container overflow-hidden ">
      {/* Page Loader */}
      <div className="page-loader fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center">
        <div className="loader-content text-white text-3xl">ShootOrder</div>
      </div>
      <div className="banner-section relative overflow-hidden max-w-7xl mx-auto pr-5">
        <div className="banner-background w-full">
          <Banner />
        </div>
      </div>
      <div className="mx-auto ">
        <div className="w-full " style={{backgroundImage:'url(/images/background/bg.png)',objectFit:'cover'}}>
          <div className=" !max-w-7xl mx-auto">
            {/* <div className=" absolute inset-0 -z-10 w-full">
        
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          </div> */}
            <AboutUs />
          </div>
        </div>
        <div
          className="animate-section !max-w-7xl !mx-auto"
          id="company-section"
        >
          <div className="parallax-bg absolute inset-0 -z-10 w-full">
            {/* Background elements for parallax */}
            <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          <CompanyInfo />
        </div>

        <div className=" max-w-7xl mx-auto" id="partners-section">
          <div id="partners-container" className="!max-w-7xl mx-auto">
            <OurPartners />
          </div>
        </div>
        <section className="!bg-[#f8f6ee]">
          <div
            className="animate-section !max-w-7xl mx-auto"
            id="service-tabs-section"
          >
            <ServiceTabs />
          </div>
        </section>

        <div className="animate-section !max-w-7xl mx-auto" id="hire-section">
          <div className="parallax-bg absolute inset-0 -z-10 w-full">
            {/* Background elements for parallax */}
            <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          <Hire />
        </div>

        {/* <div
          className="animate-section !max-w-7xl mx-auto"
          id="service-flow-section"
        >
          <ServiceFlow />
        </div> */}
        <section className=" !bg-[#f8f6ee]">
          <div
            className="animate-section !max-w-7xl mx-auto "
            id="talent-form-section "
          >
            <div className="parallax-bg absolute inset-0 -z-10 w-full">
              {/* Background elements for parallax */}
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
            </div>
            <TalentForm />
          </div>{" "}
        </section>
      </div>
    </div>
  );
}
