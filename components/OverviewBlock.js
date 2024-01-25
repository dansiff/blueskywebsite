import React from "react";
import Container from "./container";

const OverviewBlock = ({ pretitle, title, children, backgroundImage }) => {
    // You can add additional styles or classes if needed
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    };
    const contentStyle = {
        maxHeight: "80%",
        padding: '2rem',
        maxWidth: '25%', // Adjust the width of the box as needed
    };
    return (
        <div className="relative h-full w-full" style={sectionStyle}>
            <Container className="flex w-full flex-col py-20 lg:flex-row">
                <div className="flex flex-col bg-blue-800 lg:w-1/3 bg-opacity-75 text-white p-10 rounded-r-lg">
                    {pretitle && (
                        <div className="text-sm font-bold tracking-wider text-indigo-200 uppercase">
                            {pretitle}
                        </div>
                    )}
                    {title && (
                        <h2 className="text-1xl font-bold mt-2 mb-4 leading-snug">
                            {title}
                        </h2>
                    )}
                    {children && (
                        <p className="text-lg leading-normal mb-4">
                            {children}
                        </p>
                    )}
                    {/* Assuming you want to include a button as well */}
                    <a href="https://form.jotform.com/240085201242138"
                        className="inline-block mt-4 bg-indigo-600 py-2 px-6 rounded-md text-lg font-medium"
                        target="_blank" rel="noopener noreferrer">
                        Get Started
                    </a>
                </div>
                {/* If you want additional content on the right, add it here */}
            </Container>
            {/* Overlay if needed for better text visibility */}
            <div className="absolute top-0 left-0  "></div>
        </div>
    )
};

export default OverviewBlock;
