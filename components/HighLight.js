
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import React, { useRef } from 'react';


const HighLight = () => {
    const parallaxRef = useRef(null);

    const parallax = useParallax({
        speed: -10,
    });

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
            {/* Text Section */}
            <div className="lg:flex-1 px-4 lg:px-12 py-12 lg:py-24">
                <div className="space-y-6 max-w-sm lg:max-w-sm lg:mx-auto"> {/* Adjust max-width as needed */}
                    {/* Vertical Line */}
                    <div className="lg:block absolute h-full w-1 bg-blue-600 left-1 ml-4"></div>
                    {/* Text Content */}
                    <div className="pl-4 lg:pl-12 relative text-center lg:text-left"> {/* Adjust padding for line spacing */}
                        <h2 className="text-3xl lg:text-4xl  text-gray-800 leading-snug font-montserrat">Evidence-based psychiatric treatment from a team that cares</h2>
                        <p className="text-base lg:text-xl text-gray-600 mt-4" style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.75', letterSpacing: '0.015em' }}>
                            If you are looking for a caring professional to provide treatment in the comfort of your home, BlueSky is here to help.
                            BlueSky's experienced network of licensed, mental health care professionals have a sincere and authentic commitment
                            to patient-centered care, structured around optimal evidence-based care to patients.
                        </p>
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-full ml-16 font-semibold hover:bg-blue hover:text-black transition-colors justify-center duration-300">Get Started</button>
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <div className="lg:flex-1  relative overflow-hidden lg:order-last">
                <div ref={parallax.ref} className="w-full h-full"> <Image
                    src="/img/Medicalimage1.jpg" // Make sure this path is correct
                    alt="Telehealth"
                    layout="fill"
                    objectFit="cover" // Cover the entire area of the container
                    className="object-cover"
                /> 
            </div>
            </div> </div>
    );
};

export default HighLight;
