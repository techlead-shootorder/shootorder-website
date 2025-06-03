"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const getPlaceholderImage = (heading) => {
  const keywords = encodeURIComponent(heading.toLowerCase().replace(/\s+/g, '-'));
  // Use different placeholder services randomly for variety
  const placeholders = [
    `https://source.unsplash.com/1600x900/?${keywords}`,
    `https://picsum.photos/1600/900?random=${Math.random()}`,
    `https://images.unsplash.com/photo-1${Math.floor(Math.random() * 1000)}?w=1600&h=900&fit=crop`
  ];
  return placeholders[Math.floor(Math.random() * placeholders.length)];
};

function ProcessCovered({ services }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let ctx;
    let triggers = [];

    const initAnimations = () => {
      gsap.registerPlugin(ScrollTrigger);
      
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1,
            snap: {
              snapTo: 1 / (services.features.length - 1),
              duration: { min: 0.1, max: 0.3 },
              delay: 0,
            },
          }
        });

        // Initialize slides
        services?.features?.forEach((_, index) => {
          const slide = document.querySelector(`[data-slide="${index}"]`);
          if (!slide) return;
          
          const bgImage = slide.querySelector('[data-bg-image]');
          
          gsap.set(slide, {
            xPercent: index === 0 ? 0 : 100,
            opacity: index === 0 ? 1 : 0,
            visibility: index === 0 ? "visible" : "hidden"
          });

          if (bgImage) {
            gsap.set(bgImage, { 
              // opacity: index === 0 ? 0.15 : 0 
            });
          }
        });

        // Animate through slides
        services?.features?.forEach((_, index) => {
          if (index < services.features.length - 1) {
            const currentSlide = document.querySelector(`[data-slide="${index}"]`);
            const nextSlide = document.querySelector(`[data-slide="${index + 1}"]`);
            if (!currentSlide || !nextSlide) return;

            const currentBg = currentSlide.querySelector('[data-bg-image]');
            const nextBg = nextSlide.querySelector('[data-bg-image]');

            // Add animations to timeline
            if (currentSlide && nextSlide) {
              tl.to(currentSlide, {
                xPercent: -100,
                opacity: 0,
                duration: 1,
                ease: "power2.inOut"
              }, index);

              tl.fromTo(nextSlide, 
                { xPercent: 100, opacity: 0, visibility: "visible" },
                { xPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                index
              );

              if (currentBg && nextBg) {
                tl.to(currentBg, {
                  opacity: 0,
                  duration: 0.5
                }, index);

                tl.fromTo(nextBg,
                  { opacity: 0 },
                  { opacity: 0.15, duration: 0.5 },
                  index
                );
              }
            }
          }
        });

        // Store ScrollTrigger instances
        triggers = ScrollTrigger.getAll();
      }, sectionRef);
    };

    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      triggers.forEach(trigger => trigger.kill());
      ctx && ctx.revert();
    };
  }, [services]);

  if (!services?.features) return null;

  return (
    <div ref={sectionRef} className="h-[100vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {services.features.map((service, index) => (
          <div
            key={index}
            data-slide={index}
            className="absolute inset-0 flex items-start pointer-events-none"
            style={{ visibility: index === 0 ? "visible" : "hidden" }}
          >
            {/* Background Image with fallback */}
            <div 
              data-bg-image
              className="absolute inset-0 w-full h-full transition-transform duration-1000"
              style={{
                backgroundImage: `url(${service.imageUrl || getPlaceholderImage(service.heading)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // opacity: index === 0 ? 0.1 : 0
              }}
            >
              {/* Fallback if image fails to load */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#9a0c28]/5 to-transparent opacity-50"
                style={{ 
                  backgroundSize: '200% 200%',
                  animation: 'gradient 15s ease infinite'
                }}
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />

            <div className="w-full px-8 relative pt-[200px]">
              {/* Background heading */}
              <h2
                data-heading
                className="text-[15vw] font-bold text-[#9a0c28]/5 leading-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                style={{
                  WebkitTextStroke: "1px rgba(154, 12, 40, 0.1)",
                  top: "150px" // Position the background heading
                }}
              >
                {service.heading}
              </h2>

              {/* Content section */}
              <div
                data-content
                className="relative z-10 max-w-xl ml-[19.5%] text-left pointer-events-auto w-1/3"
              >
                <h3 className="text-5xl font-bold text-[#9a0c28] mb-6">
                  {service.heading}
                </h3>
                <p className="text-gray-700 text-xl mb-8 leading-relaxed">
                  {service.content}
                </p>
                <button className="bg-[#9a0c28] text-white px-8 py-4 rounded-lg hover:bg-[#7a0920] transition-colors text-lg">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar - moved up from bottom */}
      <div className="fixed bottom-8 left-0 right-0 h-1 bg-[#9a0c28]/10 z-50">
        <div
          className="h-full bg-[#9a0c28]"
          ref={headingRef}
          style={{
            width: `${(1 / services.features.length) * 100}%`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>
    </div>
  );
}

export default ProcessCovered;
