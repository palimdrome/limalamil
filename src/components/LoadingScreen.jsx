import React, { useState, useEffect } from 'react';

// Configuration
const NUM_RECTANGLES = 6;
const ANIMATION_BASE_DURATION_MS = 800; // Duration of one rectangle sliding
const ANIMATION_STAGGER_DELAY_MS = 100; // Delay between each rectangle

function LoadingScreen({ isLoading }) {
    // State to manage whether the component should be removed from the DOM
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // If isLoading becomes false (app is loaded), start the unmount timer
        if (!isLoading) {
            // Calculate total time for the last rectangle to finish animating
            const totalAnimationTime = ANIMATION_BASE_DURATION_MS + (NUM_RECTANGLES - 1) * ANIMATION_STAGGER_DELAY_MS;
            
            // Set timeout to remove the component after the animation completes
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, totalAnimationTime);

            // Cleanup timeout if isLoading changes back or component unmounts
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    // Only render the component if shouldRender is true
    if (!shouldRender) {
        return null;
    }

    // Create the rectangle elements dynamically
    const rectangles = Array.from({ length: NUM_RECTANGLES }).map((_, index) => {
        const delay = index * ANIMATION_STAGGER_DELAY_MS;
        return (
            <div
                key={index}
                className="loading-rectangle"
                // Pass animation properties via inline style variables
                style={{
                    '--animation-duration': `${ANIMATION_BASE_DURATION_MS}ms`,
                    '--animation-delay': `${delay}ms`
                }}
            ></div>
        );
    });

    return (
        <div
            className={`
                fixed inset-0 w-full h-full z-[1000]
                flex flex-row /* Arrange rectangles horizontally */
                pointer-events-none /* Allow clicks through initially */
                ${!isLoading ? 'animate-out' : ''} /* Class to trigger animation */
            `}
        >
            {rectangles}
        </div>
    );
}

export default LoadingScreen;