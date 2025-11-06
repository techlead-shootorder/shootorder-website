// shootorder-us (Optimized)
"use client";
import { useEffect, useState, useRef, Suspense, lazy } from "react";
import "keen-slider/keen-slider.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "@/utils/smooth-scroll";
import { useRouter } from "next/navigation";
import { Search, MousePointer, Share2 } from "lucide-react";

// Critical components - loaded immediately
import Banner from "@/components/Home/Banner/Banner";

// Lazy load non-critical components
const AnimatedIntro = lazy(() => import("@/components/Home/Intro/AnimatedIntro"));
const AboutUs = lazy(() => import("@/components/Home/About/AboutUs"));
const OurPartners = lazy(() => import("@/components/Home/Partners/OurPartners"));
const ClutchWidget = lazy(() => import("@/components/Home/CompanyInfo/ClutchWidget"));
const WhyTrustUs = lazy(() => import("@/components/Home/Partners/WhyTrustUs"));
const ContactPipeDrive = lazy(() => import("@/components/Home/PipeDrive/ContactPipeDrive"));
const ImageSection = lazy(() => import("@/components/Home/PipeDrive/ImageSection"));

// Optimized skeleton loaders
const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg h-32 w-full" />
);

const MinimalLoader = () => (
  <div className="flex justify-center items-center h-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9A0C28]" />
  </div>
);

const SectionLoader = () => (
  <div className="animate-pulse space-y-4 p-6">
    <div className="h-4 bg-gray-200 rounded w-3/4" />
    <div className="h-4 bg-gray-200 rounded w-1/2" />
    <div className="h-32 bg-gray-200 rounded" />
  </div>
);

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    about: false,
    services: false,
    partners: false,
    clutch: false,
    whyTrust: false,
    contact: false
  });

  const scrollTriggersRef = useRef([]);
  const observerRef = useRef(null);
  const router = useRouter();

  // Use the smooth scroll hook
  useSmoothScroll();

  // Quick initial load
  useEffect(() => {
    // Load above-the-fold content immediately
    setVisibleSections(prev => ({
      ...prev,
      intro: true,
      about: true
    }));

    // Register ScrollTrigger
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Setup animations after a small delay to not block rendering
    const timer = setTimeout(() => {
      setupOptimizedAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for progressive loading
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '300px',
      threshold: 0.01
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');

          if (sectionName && !visibleSections[sectionName]) {
            setVisibleSections(prev => ({
              ...prev,
              [sectionName]: true
            }));
          }
        }
      });
    }, observerOptions);

    // Observe section markers
    const sectionMarkers = document.querySelectorAll('[data-section]');
    sectionMarkers.forEach(marker => {
      observerRef.current?.observe(marker);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Cleanup effect
  useEffect(() => {
    return () => {
      scrollTriggersRef.current.forEach((trigger) => trigger?.kill?.());
      scrollTriggersRef.current = [];

      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach((trigger) => trigger?.kill?.());

      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      observerRef.current?.disconnect();
    };
  }, []);

  const setupOptimizedAnimations = () => {
    try {
      // Clear existing triggers
      scrollTriggersRef.current.forEach((trigger) => trigger?.kill?.());
      scrollTriggersRef.current = [];

      const isMobile = window.innerWidth < 768;

      // Banner parallax - only on desktop
      if (!isMobile) {
        const bannerBgTrigger = ScrollTrigger.create({
          animation: gsap.to(".banner-background", {
            yPercent: 15,
            ease: "none",
          }),
          trigger: ".banner-section",
          start: "top top",
          end: "bottom top",
          scrub: 2,
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

      // Section fade-in animations
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => {
        const sectionTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            section,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
          ),
          trigger: section,
          start: "top bottom-=100",
          once: true,
        });
        scrollTriggersRef.current.push(sectionTrigger);
      });

      // Service cards animation
      const serviceCards = document.querySelectorAll(".service-card");
      if (serviceCards.length > 0) {
        const cardsTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            serviceCards,
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
          ),
          trigger: "#service-tabs-section",
          start: "top bottom-=100",
          once: true,
        });
        scrollTriggersRef.current.push(cardsTrigger);
      }

    } catch (error) {
      console.error("Error in setupOptimizedAnimations:", error);
    }
  };

  const handleNavigation = (service) => {
    router.push(`/${service}`);
  };

  return (
    <div className="smooth-scroll-container overflow-hidden">
      {/* HERO SECTION - Critical, loads immediately */}
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
          {/* ANIMATED INTRO SECTION - Loads immediately */}
          <div data-section="intro">
            <Suspense fallback={<SkeletonLoader />}>
              <AnimatedIntro />
            </Suspense>
          </div>

          {/* ABOUT US SECTION - Loads immediately */}
          <div data-section="about">
            <Suspense fallback={<SkeletonLoader />}>
              <div className="!max-w-7xl mx-auto">
                <AboutUs />
              </div>
            </Suspense>
          </div>
        </div>

        {/* Simplified background */}
        <div className="animate-section !max-w-7xl !mx-auto" id="company-section">
          <div className="absolute inset-0 -z-10 w-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* OUR SERVICES */}
        <section className="py-8 md:py-16 px-4">
          <div data-section="services" className="animate-section !max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="service-tabs-section">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
              <p className="text-base md:text-lg text-gray-600 px-2">
                Comprehensive Digital Solutions for your Business Growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="service-card p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
                onClick={() => handleNavigation('seo')}
              >
                <Search className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">SEO Optimization</h3>
                <p className="text-sm opacity-90">Improve your search rankings and drive organic traffic to your website</p>
              </div>

              <div
                className="service-card p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
                onClick={() => handleNavigation('google-ads')}
              >
                <MousePointer className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Paid Advertising</h3>
                <p className="text-sm opacity-90">Maximize ROI with targeted Google Ads and PPC campaigns</p>
              </div>

              <div
                className="service-card p-6 bg-[#9A0C28] text-white rounded-lg shadow-lg hover:bg-[#c4102e] transition-colors duration-300 cursor-pointer text-center"
                onClick={() => handleNavigation('social-media-marketing')}
              >
                <Share2 className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Social Media Marketing</h3>
                <p className="text-sm opacity-90">Build brand awareness and engage with your audience across social platforms</p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PARTNERS - Lazy loaded */}
        <div data-section="partners" className="max-w-7xl mx-auto" id="partners-section">
          {visibleSections.partners ? (
            <Suspense fallback={<MinimalLoader />}>
              <div id="partners-container" className="!max-w-7xl mx-auto">
                <OurPartners />
              </div>
            </Suspense>
          ) : (
            <MinimalLoader />
          )}
        </div>

        {/* CLUTCH REVIEW - Lazy loaded */}
        <div data-section="clutch">
          {visibleSections.clutch ? (
            <Suspense fallback={<MinimalLoader />}>
              <ClutchWidget />
            </Suspense>
          ) : (
            <MinimalLoader />
          )}
        </div>

        {/* WHY TRUST US - Lazy loaded */}
        <div data-section="whyTrust" className="mx-auto">
          {visibleSections.whyTrust ? (
            <Suspense fallback={<SectionLoader />}>
              <WhyTrustUs />
            </Suspense>
          ) : (
            <SectionLoader />
          )}
        </div>

        {/* CONTACT FORM SECTION - Lazy loaded */}
        <section className="py-20" style={{ background: "#9A0C28" }}>
          <div data-section="contact" className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact us</h2>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 h-full order-1 lg:order-1">
                {visibleSections.contact ? (
                  <Suspense fallback={<SkeletonLoader />}>
                    <ImageSection />
                  </Suspense>
                ) : (
                  <SkeletonLoader />
                )}
              </div>

              <div className="w-full lg:w-1/2 order-2 lg:order-2">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                  {visibleSections.contact ? (
                    <Suspense fallback={<SkeletonLoader />}>
                      <ContactPipeDrive />
                    </Suspense>
                  ) : (
                    <SkeletonLoader />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}