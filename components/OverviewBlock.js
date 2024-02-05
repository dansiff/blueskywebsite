import React from "react";
import Container from "./container";

const OverviewBlock = ({ pretitle, title, children, subtitle, listItems, contactInfo, backgroundImage }) => {
    // You can add additional styles or classes if needed
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        backgroundAttachment: 'fixed',
    };
    const contentStyle = {

        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: '"Content"',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateAreas: '"Content image"',
        fontFamily: 'Montserrat, sans-serif',
        maxHeight: "100%",
        padding: '5rem',
        maxWidth: '40%', // Adjust the width of the box as needed
        color: 'white',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        lineHeight: '1.4',
        backgroundColor: '#1E40AF'

    };
    return (
        <div style={sectionStyle}>
            <Container>
                <div className="relative font-montserrat inset-0 bg-blue-700 text-white p-4 md:p-8 lg:p-12 rounded-lg max-w-full md:max-w-md mx-auto my-8 md:my-0 space-y-4 ml-24">
                    {pretitle && (
                        <div className="uppercase font-montserrat text-sm mb-2 font-light tracking-widest">
                            {pretitle}
                        </div>
                    )}
                    {title && (
                        <h2 className="text-lg font-montserrat md:text-xl font-normal mb-4">
                            {title}
                        </h2>
                    )} {/* Subtitle Section */}
                    {subtitle && (
                        <p className="text-md font-montserrat font-bold mb-4">
                            {subtitle}
                        </p>
                    )}  {listItems && (
                        <div className="flex flex-wrap gap-1 justify-start items-center">
                            {listItems.map((item, index) => (
                                <span key={index} className="text-sm bg-blue-700 text-white text-bold py-1 px-2 rounded">
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}

                    {children && (
                        <p className="text-bold font-montserrat mr-4 text-lg md:text-lg leading-normal mb-4">
                            {children}
                        </p>
                    )}  {/* Contact Info Section */}
                    {contactInfo && (
                        <p className="text-lg font-montserrat font-semibold mb-4">
                            {contactInfo}
                        </p>
                    )}
                    {/* Assuming you want to include a button as well */}
                    <a href="https://form.jotform.com/240085201242138"
                        className="inline-block bg-indigo-600 py-2 px-6 rounded-md text-lg font-medium transition duration-300 ease-in-out hover:bg-indigo-700 mt-4"
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
