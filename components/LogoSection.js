// components/LogosSection.js
import React from 'react';
import Image from 'next/image';

const LogosSection = () => {
    return (
        <div className="flex justify-center items-center mt-10 w-full max-w-6xl mx-auto animate-drop">
            <Image
                src="/img/brands/big6k5ui.png" // Make sure to put the correct path to the image
                alt="Insurance Accepted Logos"
                width={1080} // Set the correct width (in pixels)
                height={720}  // Set the correct height (in pixels)
                layout="responsive" // This will make the image scale nicely to the parent element
            />
        </div>
    );
}

export default LogosSection;

