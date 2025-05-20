"use client";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';


export default function useSmoothScroll() {
    const pathname = usePathname();
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hide scrollbars and prevent horizontal overflow
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      html, body {
        scrollbar-width: none;  /* Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        overflow-x: hidden;
        max-width: 100vw;
      }
      
      /* Hide scrollbar for Chrome, Safari and Opera */
      html::-webkit-scrollbar, 
      body::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
      }
      
      * {
        -webkit-overflow-scrolling: touch;
      }
      
      /* Handle any nested scrollable elements */
      .smooth-scroll-container {
        height: 100%;
        width: 100%;
        position: relative;
      }
    `;
    document.head.appendChild(styleElement);

    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Improved easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Touch has its own natural smoothness
      touchMultiplier: 2,
    });
    
    // Create RAF loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // Connect Lenis and ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Update ScrollTrigger when the window resizes
    ScrollTrigger.refresh();
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    // Clean up
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      document.head.removeChild(styleElement);
    };
  }, [pathname]);
}