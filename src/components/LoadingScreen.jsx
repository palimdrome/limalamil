import React from 'react';

// NOTE: You must update the Homepage.jsx tile generation to use 24 tiles total
// for this code to work without massive manual copy-pasting.

// Using the 6x4 (24 tiles) structure from the last dynamic attempt
const numTiles = 24; 
const delayGroups = [-2, -4, -6]; 

// Generate 24 tiles dynamically
const tiles = Array.from({ length: numTiles }).map((_, index) => {
    // Calculate randomized/staggered delay
    const delay = delayGroups[index % 3]; 

    return (
        <div 
            key={index}
            className={`tile tile-${index + 1}`} 
            style={{
                // Pass variables for animation
                '--animation-delay': `${delay}s`,
                '--rand-duration': `${Math.random() * 0.5 + 1.5}s` // Random duration 1.5s to 2s
            }}
        ></div>
    );
});

/**
 * Full-screen component that plays the reveal animation and hides itself.
 * Uses the CSS tile structure but animates opacity/transform out.
 */
function LoadingScreen({ isLoaded }) {

    return (
        <div 
            className={`
                fixed inset-0 w-full h-full z-[1000] 
                bg-base-300 /* Use your darkest background color */
                transition-opacity duration-1000 ease-out 
                ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'} 
            `}
        >
            {/* The tile background structure */}
            <div className="background">
                <div className="tiles loading-tiles">
                    {tiles}
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;
