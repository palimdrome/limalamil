import { useInView } from 'react-intersection-observer';

/**
 * This component wraps any content (`children`) and makes it
 * fade in and slide up when it scrolls into view.
 */
function ScrollAnimationWrapper({ children }) {
    
    // This is the "motion sensor" hook.
    // ref: You attach this to the element you want to watch.
    // inView: A boolean (true/false) that tells you if the element is on screen.
    const { ref, inView } = useInView({
        
        // --- Options ---
        
        // This makes the animation play only *once*
        triggerOnce: true, 
        
        // This triggers the animation when 10% of the component is visible
        threshold: 0.1, 
    });

    return (
        // Attach the 'ref' to this div. The hook will now watch this div.
        <div
            ref={ref}
            className={`
                /* --- Base transition classes (the "dimmer") --- */
                transition-all duration-700 ease-out 
                
                /* --- The "On" and "Off" states --- */
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
        >
            {/* This renders the component that was wrapped (e.g., <About />) */}
            {children}
        </div>
    );
}

export default ScrollAnimationWrapper;