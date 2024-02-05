// Button.js
import React from 'react';

const Button = ({ href, text, target, rel }) => {
    return (
        <a
            href={href}
            target={target || '_self'} // Default to '_self' if no target prop is provided
            rel={rel || 'noopener noreferrer'} // Default to 'noopener noreferrer' if no rel prop is provided
            className="px-8 z-10 py-4 inline-block text-lg font-medium flex justify-center text-center text-white bg-blue-600 rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
            {text}
        </a>
    );
};

export default Button;
