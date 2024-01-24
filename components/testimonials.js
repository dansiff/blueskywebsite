import React, { useEffect } from 'react';

const Testimonials = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?812a2f3246bb559a7c0651702f4';
        script.defer = true;
        script.async = true;

        // Append the script to the body
        document.body.appendChild(script);

        // Clean-up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // The empty array causes this effect to only run on mount and unmount

    // Your JSX here
    return (
        <div>
            {/* Your testimonial JSX content goes here */}
            {/* This is just a placeholder. Replace it with actual content. */}
            <p></p>
        </div>
    );
};

export default Testimonials;
