import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const PipeDriveForm = () => {
    const [isFormLoaded, setIsFormLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const formRef = useRef(null);
    const scriptRef = useRef(null);

    // Use Intersection Observer to load form only when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isFormLoaded) {
                    setIsVisible(true);
                    loadPipedriveScript();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [isFormLoaded]);

    const loadPipedriveScript = () => {
        if (scriptRef.current || isFormLoaded) return;

        try {
            const script = document.createElement('script');
            script.src = 'https://webforms.pipedrive.com/f/loader';
            script.async = true;
            script.defer = true; // Add defer for better performance
            
            script.onload = () => {
                setIsFormLoaded(true);
            };
            
            script.onerror = () => {
                console.error('Failed to load Pipedrive script');
                setIsFormLoaded(false);
            };

            document.head.appendChild(script); // Use head instead of body
            scriptRef.current = script;
        } catch (error) {
            console.error('Error loading Pipedrive script:', error);
        }
    };

    useEffect(() => {
        // Cleanup function
        return () => {
            if (scriptRef.current) {
                try {
                    // Remove script more safely
                    if (document.head.contains(scriptRef.current)) {
                        document.head.removeChild(scriptRef.current);
                    }
                } catch (error) {
                    console.warn('Error removing Pipedrive script:', error);
                }
                scriptRef.current = null;
            }
        };
    }, []);

    return (
        <div ref={formRef} className="w-full">
            {/* Loading state */}
            {isVisible && !isFormLoaded && (
                <div className="flex items-center justify-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9A0C28]"></div>
                    <span className="ml-3 text-gray-600">Loading form...</span>
                </div>
            )}

            {/* Pipedrive Form Container */}
            {isVisible && (
                <div 
                    className="pipedriveWebForms" 
                    data-pd-webforms="https://webforms.pipedrive.com/f/5X4WeiufAkOECKUAI6EP4qAUy3WZmhVlqi91yleaoonTIpuxhPrXV9w3GNJdzATHZp"
                    style={{
                        opacity: isFormLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                >
                    {/* This will be populated by the Pipedrive script */}
                </div>
            )}

            {/* Fallback contact info if form fails to load */}
            {isVisible && !isFormLoaded && (
                <div className="mt-4 space-y-4 text-gray-600">
                    <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-[#9A0C28]" />
                        <span>contact@shootorder.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-[#9A0C28]" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-[#9A0C28]" />
                        <span>Connecticut, USA</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PipeDriveForm;