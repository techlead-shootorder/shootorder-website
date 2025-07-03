"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from 'lucide-react';

export default function PopupModal({ isOpen, onClose }) {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before using createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Load Pipedrive script when popup opens
    if (isOpen) {
      setIsAnimating(true);
      setIsFormLoaded(false);
      
      const script = document.createElement('script');
      script.src = 'https://webforms.pipedrive.com/f/loader';
      script.async = true;
      
      script.onload = () => {
        // Give a small delay to ensure form is rendered
        setTimeout(() => {
          setIsFormLoaded(true);
        }, 1000);
      };
      
      document.body.appendChild(script);

      return () => {
        // Cleanup script when popup closes
        try {
          if (script && document.body.contains(script)) {
            document.body.removeChild(script);
          }
        } catch (error) {
          console.warn('Script cleanup error:', error);
        }
      };
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!mounted || (!isOpen && !isAnimating)) return null;

  const modalContent = (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? 'bg-opacity-10 bg-black ' : 'bg-opacity-0'
        }`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black duration-300 ${
          isOpen ? 'bg-opacity-10 ' : 'bg-opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative bg-white rounded-lg shadow-xl w-1/3 max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
        isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Get in Touch</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
          </button>
        </div>

        {/* Form Container */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Skeleton Loader */}
          {!isFormLoaded && (
            <div className="animate-pulse space-y-4">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
              </div>
              <div className="h-10 bg-gray-300 rounded w-1/3"></div>
            </div>
          )}
          
          {/* Actual Form */}
          <div className={`transition-opacity duration-500 ${
            isFormLoaded ? 'opacity-100' : 'opacity-0 absolute'
          }`}>
           <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6xXTGQvjPMjzGFtz5pd0bxp8XLjp3yhFSs60ZPWI8wrrzmD8F0fpUJGY8Wqb2UTo3h">
           </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}