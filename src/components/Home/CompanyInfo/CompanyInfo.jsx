"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function ClutchWidget() {
  const containerRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleScriptLoad = () => {
    setScriptLoaded(true);

    // Initialize the widget after a short delay
    setTimeout(() => {
      if (
        typeof window !== "undefined" &&
        window.CLUTCH &&
        containerRef.current
      ) {
        try {
          window.CLUTCH.init();
        } catch (error) {
          console.error("Error initializing Clutch widget:", error);
        }
      }
    }, 100);
  };

  const handleScriptError = (e) => {
    console.error("Failed to load Clutch script:", e);
  };

  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
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
          style={{
            minHeight: "375px",
            width: "100%",
          }}
        >
          {!scriptLoaded && (
            <div className="flex items-center justify-center h-full min-h-[375px] text-gray-500">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
              Loading Clutch reviews...
            </div>
          )}
        </div>
      </div>
    </>
  );
}
