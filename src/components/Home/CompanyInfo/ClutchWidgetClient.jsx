'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function ClutchWidgetClient() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);

  const handleScriptLoad = () => {
    setScriptLoaded(true);
  };

  useEffect(() => {
    if (scriptLoaded && typeof window !== 'undefined' && window.CLUTCHCO) {
      // Initialize the widget after script loads
      setTimeout(() => {
        if (window.CLUTCHCO && window.CLUTCHCO.Init) {
          window.CLUTCHCO.Init();
          setWidgetReady(true);
        }
      }, 100);
    }
  }, [scriptLoaded]);

  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={(e) => {
          console.error('❌ Clutch widget script failed to load', e);
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div
          className="clutch-widget   rounded-lg "
          data-url="https://widget.clutch.co"
          data-widget-type="12"
          data-height="375"
          data-nofollow="true"
          data-expandifr="true"
          data-scale="100"
          data-reviews="247350,246759,244398,158154,156901,62857,133614,84906,54268,53431,53070,73683"
          data-clutchcompany-id="51252"
          style={{ minHeight: '375px' }}
        >
          {!scriptLoaded && (
            <div className="text-center text-gray-500 mt-4">
              Loading Clutch reviews...
            </div>
          )}
        </div>
      </div>
    </>
  );
}
