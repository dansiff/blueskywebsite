import React from 'react';
import Image from 'next/image'; // Correctly import Image from next/image


const CustomImage = ({ src, alt }) => {
    

    return (
        <div className="w-full h-full"> {/* Apply the parallax ref here */}
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="contain" // or "contain" based on your needs
            />
        </div>
    );
};

export default CustomImage;
