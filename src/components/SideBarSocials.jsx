import React, { useState, useEffect } from 'react';
// Import the requested React Icons
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

// Define only the required social media links and React Icon components
const SocialLinks = [
    { 
        name: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/limuelle-alamil/', 
        IconComponent: FaLinkedinIn 
    },
    { 
        name: 'Facebook', 
        url: 'https://www.facebook.com/profile.php?id=100070561390068', 
        IconComponent: FaFacebookF 
    },
    { 
        name: 'GitHub', 
        url: 'https://github.com/palimdrome', 
        IconComponent: FaGithub 
    },
];

const SideBarSocials = ({ isVisible }) => {
    // ... animation logic (useState, useEffect) remains the same ...
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialRender(false);
        }, 0); 
        
        return () => clearTimeout(timer);
    }, []); 

    let currentClasses;
    if (initialRender || !isVisible) {
        currentClasses = 'opacity-0 translate-y-full';
    } else {
        currentClasses = 'opacity-100 translate-y-0';
    }

    return (
        <div 
            className={`
                       hidden md:flex fixed bottom-0 left-10 lg:left-12 
                       flex-col items-center justify-end z-30
                       
                       transition-all duration-700 ease-out 
                       
                       ${currentClasses} 
                     `}
        >
            {/* --- FIX 1: Reduced space-y-4 to space-y-2 for a tighter gap --- */}
            <ul className="flex flex-col items-center m-0 p-0 list-none space-y-0">
                {SocialLinks.map((link) => (
                    // Removed the border class
                    <li key={link.name} className="">
                        <a
                            href={link.url}
                            aria-label={link.name}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                p-1
                                text-base-content
                                hover:text-primary
                                transition-colors duration-300
                            "
                        >
                            <link.IconComponent className="text-lg" />
                        </a>
                    </li>
                ))}
            </ul>

            {/* --- FIX 2: Reduced mt-4 to mt-3 to match the tighter spacing --- */}
            <div 
                className="w-px h-24 mt-3 bg-base-content transition-colors duration-300"
                style={{ backgroundColor: 'var(--color-base-content)' }}
            ></div>
        </div>
    );
};

export default SideBarSocials;