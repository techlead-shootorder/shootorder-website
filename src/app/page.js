// shootorder-us
"use client";
import { useEffect, useState, useRef } from "react";
import AboutUs from "@/components/Home/About/AboutUs";
import Banner from "@/components/Home/Banner/Banner";
import CompanyInfo from "@/components/Home/CompanyInfo/CompanyInfo";
import Hire from "@/components/Home/Hire/Hire";
import OurPartners from "@/components/Home/Partners/OurPartners";
import ServiceFlow from "@/components/Home/ServiceFlow/ServiceFlow";
import TalentForm from "@/components/Home/TalentForm/TalentForm";
import ServiceTabs from "../components/Home/ServiceTabs/ServiceTabs";
import "keen-slider/keen-slider.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "@/utils/smooth-scroll";
import AnimatedIntro from "@/components/Home/Intro/AnimatedIntro";
import WhyTrustUs from "@/components/Home/Partners/WhyTrustUs";
import ClutchWidget from "@/components/Home/CompanyInfo/ClutchWidget";
// import PipeDriveForm from "@/components/Home/PipeDrive/PipeDriveForm";
import ContactPipeDrive from "@/components/Home/PipeDrive/ContactPipeDrive";
import ImageSection from "@/components/Home/PipeDrive/ImageSection";
import Link from "next/link";
import { Search, MousePointer, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import HeaderSkeleton from "@/components/Skeleton/HeaderSkeleton";
import HeroBannerSkeleton from "@/components/Skeleton/HeroBannerSkeleton";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const timelineRef = useRef(null);
  const scrollTriggersRef = useRef([]);
  const isCleanedUpRef = useRef(false);
  const observerRef = useRef(null);

  const router = useRouter();

  // Use the smooth scroll hook
  useSmoothScroll();

  useEffect(() => {
    // Reset cleanup flag
    isCleanedUpRef.current = false;

    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    let loadEventHandler;

    // Wait for everything to load before initializing animations
    const onPageLoad = () => {
      if (isCleanedUpRef.current) return; // Don't run if already cleaned up

      try {
        // Create initial loading animation
        const loadTl = gsap.timeline({
          onComplete: () => {
            if (!isCleanedUpRef.current) {
              setIsLoaded(true);
            }
          },
        });

        timelineRef.current = loadTl;

        // Animate skeleton fade out instead of slide up
        loadTl.to(".page-loader", {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });

        // Set up optimized animations
        setupOptimizedAnimations();
      } catch (error) {
        console.error("Error in onPageLoad:", error);
        setIsLoaded(true); // Fallback to show content
      }
    };

    // Create the event handler function so we can remove it properly
    loadEventHandler = onPageLoad;

    // If the page has already loaded, run the function
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        // Use setTimeout to ensure it runs after the component is fully mounted
        setTimeout(onPageLoad, 2000); // Show skeleton for 2 seconds minimum
      } else {
        window.addEventListener("load", () => {
          setTimeout(loadEventHandler, 2000); // Show skeleton for 2 seconds minimum
        });
      }
    }

    // Clean up function
    return () => {
      isCleanedUpRef.current = true;

      // Remove load event listener
      if (typeof window !== "undefined" && loadEventHandler) {
        window.removeEventListener("load", loadEventHandler);
      }

      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }

      // Clean up all ScrollTriggers more thoroughly
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === 'function') {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];

      // Clean up intersection observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      // Kill all GSAP tweens
      gsap.killTweensOf("*");

      // Clear all ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger && typeof trigger.kill === 'function') {
          trigger.kill();
        }
      });

      // Refresh ScrollTrigger
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }
    };
  }, []);

  const setupOptimizedAnimations = () => {
    if (isCleanedUpRef.current) return;

    try {
      // Clear previous ScrollTriggers
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === 'function') {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];

      const isMobile = window.innerWidth < 768;

      // ONLY apply banner animations if not mobile
      if (!isMobile) {
        // Lighter banner parallax
        const bannerBgTrigger = ScrollTrigger.create({
          animation: gsap.to(".banner-background-image", {
            yPercent: 5, // Much lighter
            ease: "none",
          }),
          trigger: ".banner-section",
          start: "top top",
          end: "bottom top",
          scrub: 3, // Smoother
        });
        scrollTriggersRef.current.push(bannerBgTrigger);
      }

      // Simple stat bubbles animation (no ScrollTrigger)
      const statBubbles = document.querySelectorAll(".stat-bubble");
      if (statBubbles.length > 0 && !isMobile) {
        gsap.to(statBubbles, {
          y: "random(-3, 3)",
          x: "random(-2, 2)",
          rotation: "random(-0.5, 0.5)",
          duration: "random(6, 8)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 1,
        });
      }

      // Use Intersection Observer for sections instead of ScrollTrigger for better performance
      setupIntersectionObserver();

      // REMOVED: Complex form section animations that were causing lag
      // REMOVED: Heavy parallax backgrounds
      // REMOVED: Multiple overlapping ScrollTriggers

    } catch (error) {
      console.error("Error in setupOptimizedAnimations:", error);
    }
  };

  const setupIntersectionObserver = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Use Intersection Observer for better performance
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
          entry.target.classList.add('animate-in');

          // Simple fade in animation
          gsap.fromTo(entry.target,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
          );
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    // Observe sections
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });
  };

  const handleNavigation = (service) => {
    router.push(`/${service}`);
  }

  return (
    <div className="smooth-scroll-container overflow-hidden">
      {/* Skeleton Preloader */}
      {!isLoaded && (
        <div className="page-loader fixed top-0 left-0 w-full h-full z-50">
          <HeaderSkeleton />
          <HeroBannerSkeleton />
        </div>
      )}

      {/* HERO SECTION */}
      <div className="banner-section relative overflow-hidden max-w-7xl mx-auto">
        <div className="banner-background w-full">
          <Banner />
        </div>
      </div>

      <div className="mx-auto">
        <div
          className="w-full"
          style={{
            backgroundImage: "url(/images/background/bg.png)",
            objectFit: "cover",
          }}
        >
          {/* ANIMATED INTRO SECTION */}
          <AnimatedIntro />

          {/* ABOUT US SECTION */}
          <div className="!max-w-7xl mx-auto">
            <AboutUs />
          </div>
        </div>

        <div className="animate-section !max-w-7xl !mx-auto" id="company-section">
          {/* Simplified background */}
          <div className="absolute inset-0 -z-10 w-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* OUR SERVICES */}
        <section className="py-8 md:py-16 px-4">
          <div className="animate-section !max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="service-tabs-section">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
              <p className="text-base md:text-lg text-gray-600 px-2">
                Comprehensive Digital Solutions for your Business Growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
                onClick={() => handleNavigation('seo')}
              >
                <Search className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">SEO Optimization</h3>
                <p className="text-sm opacity-90">Improve your search rankings and drive organic traffic to your website</p>
              </div>

              <div
                className="p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
                onClick={() => handleNavigation('google-ads')}
              >
                <MousePointer className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Paid Advertising</h3>
                <p className="text-sm opacity-90">Maximize ROI with targeted Google Ads and PPC campaigns</p>
              </div>

              <div
                className="p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
                onClick={() => handleNavigation('social-media-marketing')}
              >
                <Share2 className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Social Media Marketing</h3>
                <p className="text-sm opacity-90">Build brand awareness and engage with your audience across social platforms</p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PARTNERS */}
        <div className="max-w-7xl mx-auto" id="partners-section">
          <div id="partners-container" className="!max-w-7xl mx-auto">
            <OurPartners />
          </div>
        </div>

        {/* <div className="animate-section !max-w-7xl mx-auto" id="hire-section" style={{ background: "#9A0C28" }}>
         
          <Hire />
        </div> */}

        {/* CLUTCH REVIEW */}
        <ClutchWidget />

        {/* WHY TRUST US */}
        <div className="mx-auto">
          <WhyTrustUs />
        </div>

        {/* SIMPLIFIED FORM SECTION - This was likely causing the lag */}
        <section className="py-20" style={{ background: "#9A0C28" }}>
          <div className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact us</h2>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">


              <div className="w-full lg:w-1/2 h-full order-1 lg:order-1">
                <ImageSection />
              </div>

              <div className="w-full lg:w-1/2 order-2 lg:order-2">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                  {/* <PipeDriveForm /> */}
                  <ContactPipeDrive />
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}