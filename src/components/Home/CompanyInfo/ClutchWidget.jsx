'use client';

import { useEffect, useRef } from 'react';

export default function ClutchWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to initialize Clutch widget
    const initClutch = () => {
      if (window.CLUTCH && containerRef.current) {
        window.CLUTCH.init();
      }
    };

    // Create and append the script tag
    const script = document.createElement('script');
    script.src = 'https://widget.clutch.co/static/js/widget.js';
    script.async = true;
    script.onload = initClutch;
    document.body.appendChild(script);

    // Call init in case script is already loaded
    initClutch();

    return () => {
      // Cleanup: remove the script tag when component unmounts
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <div 
      ref={containerRef}
      className="clutch-widget" 
      data-url="https://widget.clutch.co" 
      data-widget-type="12" 
      data-height="375" 
      data-nofollow="true" 
      data-expandifr="true" 
      data-scale="100" 
      data-reviews="247350,246759,244398,158154,156901,62857,133614,84906,54268,53431,53070,73683" 
      data-clutchcompany-id="51252"
      style={{ minHeight: '375px' }}
    />
  );
}
