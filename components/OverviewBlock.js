import React from "react";
import Container from "./container";

const OverviewBlock = ({ pretitle, title, children, subtitle, listItems, contactInfo, backgroundImage }) => {
    // You can add additional styles or classes if needed
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundAttachment: 'fixed',
    };
    const contentStyle = {

        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: '"Content"',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateAreas: '"Content image"',
        fontFamily: 'Montserrat, sans-serif',
        maxHeight: "150%",
        padding: '5rem',
        maxWidth: '45%', // Adjust the width of the box as needed
        color: 'white',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        lineHeight: '1.4',
        backgroundColor: 'custom-blue'

    };
    return (
        <div style={sectionStyle}>
            <Container>
                <div className="relative h-full dark:bg-custom-blue dark:text-white font-montserrat inset-0 bg-custom-blue text-white p-4 md:p-8 lg:p-12 rounded-lg max-w-full md:max-w-md mx-auto my-8 md:my-0 space-y-4 ml-24 before:content-[''] before:bg-white before:absolute before:left-[5%] before:top-0 before:bottom-0 before:w-[0.30rem] after:content-[''] after:bg-white after:w-[.40rem] after:opacity-40 before:opacity-20 after:opacity-80 after:absolute after:left-[5%] after:top-[10%] after:h-[20%] after:w-4 after:rounded-sm" >
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
                                <React.Fragment key={index}>
                                <span key={index} className="text-sm bg-custom-blue text-white text-bold py-1 px-2 rounded tracking-tighter leading-4">
                                    {item}
                                    </span> {/* Add a point after the item if it's not the last one */}
                                    {index < listItems.length - 1 && (
                                        <span className="text-white mx-2">&bull;</span> // This creates a dot separator
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    )}

                    {children && (
                        <p className="text-bold font-montserrat mr-4 text-lg md:text-lg leading-normal mb-4">
                            {children}
                        </p>
                    )}  {/* Contact Info Section */}
                    {contactInfo && (
                        <p className="mt-8 text-lg font-montserrat font-semibold mb-4">
                            {contactInfo}
                        </p>
                    )}
                    {/* Assuming you want to include a button as well */}
                    <a href="https://form.jotform.com/240085201242138"
                        className="inline-block bg-custom-blue py-2 px-6 rounded-md text-lg font-medium transition duration-300 ease-in-out hover:bg-white hover:text-custom-blue mt-4"
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
