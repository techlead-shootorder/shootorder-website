import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const PipeDriveForm = () => {

    useEffect(() => {
        // Load Pipedrive script when component mounts
        const script = document.createElement('script');
        script.src = 'https://webforms.pipedrive.com/f/loader';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script when component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (

        <>
           
                  

                    {/* Pipedrive Form Container */}
                    <div className="min-h-[500px]">
                        <div
                            className="pipedriveWebForms"
                            data-pd-webforms="https://webforms.pipedrive.com/f/c5jDNerzDMQECL59rqfE4Wz4WEVgegvAuzWdRYsUIFAOXVrpDKY8VAw5iVSRQSua0r"
                        ></div>
                    </div>
               
        </>

    )

}

export default PipeDriveForm;