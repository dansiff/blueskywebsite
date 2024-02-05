// components/CustomImage.js
import { useParallax } from 'react-scroll-parallax';
import React from 'react';


const CustomImage = ({ src, alt }) => {
    const { ref } = useParallax({ speed: -10 }); 

const Image = ({ src, alt }) => {
    return (
        <div className="relative w-full h-full">
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover" // or "contain" based on your needs
            />
        </div>
    );
};

export default CustomImage;
