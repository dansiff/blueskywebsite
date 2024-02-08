
import Image from 'next/image';
import React, { useRef } from 'react';
import CustomImage from './CustomImage';


const HighLight = () => {
   
    return (
        <div className="flex flex-col lg:flex-row items-center dark:bg-trueGray-800 dark:text-white h-full lg:items-start lg:space-x-8 justify-center">
            {/* Text Section */}
            <div className="lg:flex-1 flex-1 px-4 lg:px-12 py-12 lg:py-24">
                {/* Same Day Appointments Box */}
                <div className=" lg:text-left text-left w-auto mb-4 text-center justify-center ml-40">
                    <p className="font-light text-blue-600 text-normal ml-24 leading-light font-montserrat">SAME DAY <br /> APPOINTMENTS AVAILABLE</p>
                </div>

                <div className="space-y-6 relative mx-auto max-w-sm lg:max-w-sm lg:mx-auto"> {/* Adjust max-width as needed */}
                    {/* Vertical Line */}
                    <div className="lg:block absolute h-full w-1 bg-blue-600 ml-[-2rem]"></div>
                    {/* Text Content */}
                    <div className="text-center lg:text-left"> {/* Adjust padding for line spacing */}
                        <h2 className="text-3xl lg:text-4xl mb-4 text-gray-800 leading-snug font-montserrat">Evidence-based psychiatric treatment from a team that cares</h2>
                        <p className="text-base lg:text-xl text-gray-600 mt-4" style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.75', letterSpacing: '0.015em' }}>
                            If you are looking for a caring professional to provide treatment in the comfort of your home, BlueSky is here to help.
                            BlueSky's experienced network of licensed, mental health care professionals have a sincere and authentic commitment
                            to patient-centered care, structured around evidence-based solutions for positive outcomes. At BlueSky, we approach every patient as an individual -- with empathy and understanding. .
                        </p>
                        {/* Phone Number */} <br />
                        <span className="text-lg lg:text-xl text-bold text-gray-800 mt-12 font-semibold font-montserrat mb-4">1-888-279-0002</span> {/* Added this line for phone number */}
                    </div>
                        {/* Start Button */}
                    <a href="https://form.jotform.com/240085201242138"
                        className="inline-flex items-center bg-white py-2 px-6 border-2 border-black rounded-md text-lg font-medium transition duration-300 ease-in-out hover:bg-white hover:text-custom-blue mt-4"
                        target="_blank" rel="noopener noreferrer">
                        <span>Get Started</span>
                        <div className="ml-2 w-4 h-4 bg-white flex items-center justify-center">
                            {/* Arrow icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-custom-blue">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                </div> 
            </div>  
            {/* Image Section */}
            <div className="relative w-full h-screen lg:h-screen flex-1 lg:w-1/2" >
                <CustomImage
                    src="/img/Medicalimage1.jpg"
                    alt="Doctor"
                    
                    layout="fill"
                    quality={100}
                    objectFit="cover"
                />
        </div> 
        </div > 
    );
};

export default HighLight;
