import React, { useState, useEffect } from 'react';
import CopyToClipboardWrapper from "../wrappers/CopyToClipboardWrapper";

const SidebarEmail = ({ isVisible }) => {
    // Local state logic for smooth entry animation (same as SidebarSocials)
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        // Triggers the entry transition after the component is added to the DOM
        const timer = setTimeout(() => {
            setInitialRender(false);
        }, 0); 
        
        return () => clearTimeout(timer);
    }, []); 

    // Define the class states
    let currentClasses;
    
    // Start/Exit state: Invisible, pushed down
    if (initialRender || !isVisible) {
        currentClasses = 'opacity-0 translate-y-full';
    } else {
        // Final state: Fully visible and in place
        currentClasses = 'opacity-100 translate-y-0';
    }
    
    const emailAddress = "ldc.alamil@gmail.com"; 

    return (
        <div 
            className={`
                       hidden md:flex fixed bottom-0 right-8 lg:right-10 w-1/34
                       flex-col items-center justify-end z-30
                       
                       /* --- TRANSITION SETUP (Duration MUST match the 700ms in App.jsx) --- */
                       transition-all duration-700 ease-out 
                       
                       /* --- DYNAMIC TRANSITION CLASSES --- */
                       ${currentClasses}
                       
                     `}
        >

            {/* Email Link and Text Container */}
            <a 
                href={`mailto:${emailAddress}`}
                aria-label="Email"
                className="
                    p-2 
                    text-base-content /* Default text color */
                    hover:text-primary /* Highlight color on hover */
                    transition-colors duration-300 
                    
                    /* Rotate text vertically, adjust spacing */
                    inline-block -rotate-90 whitespace-nowrap tracking-wider
                    text-sm font-mono

                    my-18 mx-0
                "
            >
                <CopyToClipboardWrapper textToCopy={`${emailAddress}`} tooltipMessage="Email copied :)">
                    {emailAddress}
                </CopyToClipboardWrapper>
            </a>

            {/* The vertical line underneath the email address */}
            <div 
                className="w-px h-24 mt-8 bg-base-content transition-colors duration-300"
                style={{ backgroundColor: 'var(--color-base-content)' }}
            ></div>
        </div>
    );
};

export default SidebarEmail;