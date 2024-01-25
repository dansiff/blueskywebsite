import React from 'react';
import Image from 'next/image';

const HighLight = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="flex-1 flex justify-center py-20">
                <div className="space-y-6 max-w-md lg:max-w-lg"> {/* Adjust max-width as needed */}
                    {/* Vertical Line */}
                    <div className="hidden lg:block absolute h-full w-1 bg-blue-600 left-0 ml-4"></div>
                    {/* Text Content */}
                    <div className="pl-4 lg:pl-12"> {/* Adjust padding for line spacing */}
                        <h2 className="text-3xl font-bold text-gray-800">Evidence-based psychiatric treatment from a team that cares</h2>
                        <p className="text-lg text-gray-600">
                            If you are looking for a caring professional to provide treatment in the comfort of your home, BlueSky is here to help.
                            BlueSky's experienced network of licensed, mental health care professionals have a sincere and authentic commitment
                            to patient-centered care, structured around optimal evidence-based care to patients.
                        </p>
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">Get Started</button>
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <div className="flex-1 h-full w-full lg:min-h-screen relative">
                <Image
                    src="/img/Medicalimage1.jpg" // Make sure this path is correct
                    alt="Telehealth"
                    layout="fill"
                    objectFit="cover" // Cover the entire area of the container
                    className="lg:absolute"
                />
            </div>
        </div>
    );
};

export default HighLight;
