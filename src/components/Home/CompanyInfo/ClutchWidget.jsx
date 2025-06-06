'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function ClutchTestWidget() {
  const containerRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleScriptLoad = () => {
    console.log('✅ Clutch script loaded');
    setScriptLoaded(true);

    // Delay to ensure DOM is ready
    setTimeout(() => {
      if (window.CLUTCH && containerRef.current) {
        console.log('✅ Initializing Clutch widget');
        window.CLUTCH.init();
      } else {
        console.warn('⚠️ CLUTCH object or container not available');
      }
    }, 200); // small delay just in case
  };

  useEffect(() => {
    if (scriptLoaded && window.CLUTCH && containerRef.current) {
      window.CLUTCH.init();
    }
  }, [scriptLoaded]);

  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
        onError={(e) => {
          console.error('❌ Clutch widget script failed to load', e);
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* <h2 className="text-3xl font-bold text-center mb-6">Clutch Reviews</h2> */}

        <div
          ref={containerRef}
          className="clutch-widget border border-gray-300 rounded-lg shadow-md"
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
      </div>
    </>
  );
}
