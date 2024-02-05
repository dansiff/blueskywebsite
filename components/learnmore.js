import React from 'react';

const LearnMoreButton = ({ href }) => {
    return (
        <a href={href} className="inline-flex items-center justify-center border-2 border-black text-black font-medium py-2 px-6 transition duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none">
            Learn More
            <div className="inline-flex justify-center items-center ml-2 border-2 border-black rounded-full w-4 h-4">
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </a>
    );
};

export default LearnMoreButton;
