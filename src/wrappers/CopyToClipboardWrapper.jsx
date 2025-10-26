import React, { useState, useRef } from 'react';

/**
 * A wrapper component that copies the provided `textToCopy` to the clipboard
 * when the wrapped `children` are clicked. Provides feedback via a tooltip.
 * * @param {string} textToCopy - The text string to be copied.
 * @param {React.ReactNode} children - The element(s) to wrap and make clickable.
 * @param {string} tooltipPosition - Optional: DaisyUI tooltip position (e.g., 'tooltip-bottom', 'tooltip-left'). Default: 'tooltip-top'.
 * @param {string} className - Optional: Additional classes to apply to the wrapper div.
 */
function CopyToClipboardWrapper({ 
    textToCopy, 
    children, 
    tooltipPosition = 'tooltip-top',
    tooltipMessage = 'Copied to clipboard',
    className = ''
}) {
    // State to manage the tooltip message and visibility
    const [tooltipState, setTooltipState] = useState({ 
        visible: false, 
        message: '', 
        type: '' // 'success' or 'error'
    });
    
    // Ref to store the timeout ID, so we can clear it if clicked again quickly
    const timeoutRef = useRef(null);

    const handleCopy = () => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // --- Clipboard Copy Logic (using temporary textarea for compatibility) ---
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        // Make it non-editable and invisible
        textArea.style.position = 'fixed'; 
        textArea.style.top = '-9999px';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        let success = false;
        try {
            success = document.execCommand('copy');
            console.log('Copy command successful:', success);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }

        document.body.removeChild(textArea);

        // --- Tooltip Feedback Logic ---
        if (success) {
            setTooltipState({ visible: true, message: tooltipMessage, type: 'success' });
            // Set a timeout to hide the tooltip
            timeoutRef.current = setTimeout(() => {
                setTooltipState({ visible: false, message: '', type: '' });
                timeoutRef.current = null; // Clear the ref
            }, 1500); // Show "Copied!" for 1.5 seconds
        } else {
            setTooltipState({ visible: true, message: 'Copy Failed!', type: 'error' });
             // Set a timeout to hide the tooltip
            timeoutRef.current = setTimeout(() => {
                setTooltipState({ visible: false, message: '', type: '' });
                timeoutRef.current = null; // Clear the ref
            }, 2000); // Show error for 2 seconds
        }
    };

    // Determine tooltip classes based on state
    const tooltipClasses = [
        'tooltip', // Base tooltip class
        tooltipPosition, // Position class from props
        tooltipState.visible ? 'tooltip-open' : '', // Show/hide class
        tooltipState.type === 'error' ? 'tooltip-error' : '',
    ].filter(Boolean).join(' '); // Filter out empty strings and join

    return (
        // Use a span with inline-block to wrap the children without breaking layout
        <span 
            onClick={handleCopy}
            className={`${tooltipClasses} ${className} cursor-pointer`} // Apply dynamic tooltip classes and cursor
            data-tip={tooltipState.message} // Set tooltip message
            style={{ display: 'inline-block' }} // Ensure wrapper behaves correctly
        >
            {children}
        </span>
    );
}

export default CopyToClipboardWrapper;
