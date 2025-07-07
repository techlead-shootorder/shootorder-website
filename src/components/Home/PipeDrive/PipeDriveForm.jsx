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
            <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6xXTGQvjPMjzGFtz5pd0bxp8XLjp3yhFSs60ZPWI8wrrzmD8F0fpUJGY8Wqb2UTo3h">
                <script src="https://webforms.pipedrive.com/f/loader"></script>
            </div>

        </>

    )

}

export default PipeDriveForm;