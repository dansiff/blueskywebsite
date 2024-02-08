// components/LogosSection.js
import React from 'react';
import Image from 'next/image';

const LogosSection = () => {
    return (
        <div className="flex justify-center items-center mt-10 w-full dark:bg-trueGray-800 dark:text-white max-w-4xl mx-auto animate-drop">
            <Image
                src="/img/brands/big6k5ui.png" // Make sure to put the correct path to the image
                alt="Insurance Accepted Logos"
                width={710} // Set the correct width (in pixels)
                height={339}  // Set the correct height (in pixels)
                layout="responsive" // This will make the image scale nicely to the parent element
            />
        </div>
    );
}

export default LogosSection;

