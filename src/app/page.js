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
import PipeDriveForm from "@/components/Home/PipeDrive/PipeDriveForm";
import ImageSection from "@/components/Home/PipeDrive/ImageSection";
import Link from "next/link";
import { Search, MousePointer, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";



export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const timelineRef = useRef(null);
  const scrollTriggersRef = useRef([]);
  const isCleanedUpRef = useRef(false);

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

        loadTl.to(".page-loader", {
          y: "-100%",
          duration: 1.2,
          ease: "power2.inOut",
        });

        // Set up parallax and reveal animations for each section
        setupSectionAnimations();
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
        setTimeout(onPageLoad, 0);
      } else {
        window.addEventListener("load", loadEventHandler);
      }
    }

    // Clean up function
    return () => {
      isCleanedUpRef.current = true;

      // Remove load event listener
      if (typeof window !== "undefined" && loadEventHandler) {
        window.removeEventListener("load", loadEventHandler);
      }

      // Kill the main timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }

      // Kill all stored ScrollTriggers
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];

      // Kill all GSAP tweens on common elements
      gsap.killTweensOf([
        ".page-loader",
        ".banner-background",
        ".banner-content",
        ".stat-bubble",
        ".animate-section",
        ".parallax-bg",
        ".reveal-text",
        "#partners-container",
        ".service-tab",
        ".reveal-image"
      ]);

      // Get all ScrollTriggers and kill them
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });

      // Refresh ScrollTrigger to clean up any remaining instances
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }
    };
  }, []);

  const setupSectionAnimations = () => {
    if (isCleanedUpRef.current) return; // Don't setup if already cleaned up

    try {
      // Clear previous ScrollTriggers
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];

      // Banner parallax effect - improved smoothness
      const bannerBgTrigger = ScrollTrigger.create({
        animation: gsap.to(".banner-background", {
          yPercent: 25,
          ease: "none",
        }),
        trigger: ".banner-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      });
      scrollTriggersRef.current.push(bannerBgTrigger);

      const bannerContentTrigger = ScrollTrigger.create({
        animation: gsap.to(".banner-content", {
          yPercent: -15,
          ease: "none",
        }),
        trigger: ".banner-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      });
      scrollTriggersRef.current.push(bannerContentTrigger);

      // Stat bubbles floating animation - smoother movement
      const bubbleAnimation = gsap.to(".stat-bubble", {
        y: "random(-12, 12)",
        x: "random(-8, 8)",
        rotation: "random(-3, 3)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });

      // Apply animations to each section - improved smoothness
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section, index) => {
        if (isCleanedUpRef.current) return;

        const isEven = index % 2 === 0;
        const direction = isEven ? 1 : -1;

        // Create section entrance animation
        const sectionTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            section,
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
            }
          ),
          trigger: section,
          start: "top bottom-=120",
          end: "top center",
          scrub: 1.2,
        });
        scrollTriggersRef.current.push(sectionTrigger);

        // Create parallax effect for background elements
        const backgrounds = section.querySelectorAll(".parallax-bg");
        backgrounds.forEach((bg) => {
          const bgTrigger = ScrollTrigger.create({
            animation: gsap.fromTo(
              bg,
              { y: 0 },
              {
                y: -30 * direction,
                ease: "power1.inOut",
              }
            ),
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          });
          scrollTriggersRef.current.push(bgTrigger);
        });

        // Create reveal animations for text elements
        const textElements = section.querySelectorAll(".reveal-text");
        textElements.forEach((el, i) => {
          const textTrigger = ScrollTrigger.create({
            animation: gsap.fromTo(
              el,
              {
                y: 40,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: i * 0.12,
                ease: "power2.out",
              }
            ),
            trigger: section,
            start: "top bottom-=180",
            toggleActions: "play none none reverse",
          });
          scrollTriggersRef.current.push(textTrigger);
        });
      });

      // Updated OurPartners animation
      const partnersElement = document.querySelector("#partners-container");
      if (partnersElement) {
        const partnersTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            "#partners-container",
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
            }
          ),
          trigger: "#partners-container",
          start: "top bottom-=120",
          toggleActions: "play none none reverse",
        });
        scrollTriggersRef.current.push(partnersTrigger);
      }

      // Service tabs staggered reveal
      const tabs = document.querySelectorAll(".service-tab");
      if (tabs.length > 0) {
        const tabsTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            tabs,
            {
              scale: 0.85,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              stagger: 0.2,
              ease: "back.out(1.5)",
            }
          ),
          trigger: "#service-tabs-section",
          start: "top bottom-=120",
          toggleActions: "play none none reverse",
        });
        scrollTriggersRef.current.push(tabsTrigger);
      }

      // Masked reveal effect for images
      const revealImages = document.querySelectorAll(".reveal-image");
      revealImages.forEach((img) => {
        if (isCleanedUpRef.current) return;

        const clipPath = gsap.utils.random([
          "circle(0% at 50% 50%)",
          "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        ]);

        const imageTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            img,
            {
              clipPath: clipPath,
              scale: 1.08,
            },
            {
              clipPath: "circle(100% at 50% 50%)",
              scale: 1,
              duration: 1.8,
              ease: "power3.inOut",
            }
          ),
          trigger: img,
          start: "top bottom-=120",
          toggleActions: "play none none none",
        });
        scrollTriggersRef.current.push(imageTrigger);
      });

    } catch (error) {
      console.error("Error in setupSectionAnimations:", error);
    }
  };

  const handleNavigation = (service)=>{
    router.push(`/${service}`);
  }

  return (
    <div className="smooth-scroll-container overflow-hidden">
      {/* Page Loader */}
      <div className="page-loader fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center">
        <div className="loader-content text-white text-3xl">ShootOrder</div>
      </div>

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
          <AnimatedIntro />
          <div className="!max-w-7xl mx-auto">
            <AboutUs />
          </div>
        </div>

        <div className="animate-section !max-w-7xl !mx-auto" id="company-section">
          <div className="parallax-bg absolute inset-0 -z-10 w-full">
            <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

         <section className=" py-8 md:py-16 px-4">
          <div className="animate-section !max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="service-tabs-section">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
              <p className="text-base md:text-lg text-gray-600 px-2">
                Comprehensive digital solutions for your business growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
              onClick={()=>handleNavigation('seo')}
              >
                <Search className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">SEO Optimization</h3>
                <p className="text-sm opacity-90">Improve your search rankings and drive organic traffic to your website</p>
              </div>

              <div 
              className="p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
              onClick={()=>handleNavigation('google-ads')}
              
              >
                <MousePointer className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Paid Advertising</h3>
                <p className="text-sm opacity-90">Maximize ROI with targeted Google Ads and PPC campaigns</p>
              </div>

              <div 
              className="p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
              onClick={()=>handleNavigation('social-media-marketing')}
              
              >
                <Share2 className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Social Media Marketing</h3>
                <p className="text-sm opacity-90">Build brand awareness and engage with your audience across social platforms</p>
              </div>
            </div>
            {/* <ServiceTabs /> */}
          </div>
        </section>

        <div className="max-w-7xl mx-auto" id="partners-section">
          <div id="partners-container" className="!max-w-7xl mx-auto">
            <OurPartners />
          </div>
        </div>




       

        <div className="animate-section !max-w-7xl mx-auto" id="hire-section" style={{ background: "#9A0C28" }}>
          <div className="parallax-bg absolute inset-0 -z-10 w-full">
            <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          {/* <Hire /> */}
        </div>

       

        <ClutchWidget />

         <div className="mx-auto" >
          <WhyTrustUs />
        </div>

        {/* Form section */}
        <section className="py-20" style={{ background: "#9A0C28" }}>
          <div className="animate-section !max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="talent-form-section">
            <div className="parallax-bg absolute inset-0 -z-10 w-full">
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Main Content Container */}
            <>
              <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact us</h2>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12" >

                {/* Image Section - Left on desktop, Top on mobile */}
                <div className="w-full lg:w-1/2 h-full order-1 lg:order-1">
                  <ImageSection />
                </div>

                {/* Form Section - Right on desktop, Bottom on mobile */}
                <div className="w-full lg:w-1/2 order-2 lg:order-2">
                  <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">

                    {/* Pipedrive Form */}
                    <PipeDriveForm />
                  </div>
                </div>

              </div>
            </>
          </div>
        </section>
      </div>
    </div>
  );
}