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

        maxWidth: '25%',
        maxHeight: "80%",
        padding: '2rem',
        maxWidth: '25%', // Adjust the width of the box as needed
        color: 'white',
        borderRadius: '0 1rem 1rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        lineHeight: '1.4',
        backgroundColor: 'rgba(30, 64, 175, 0.75'

    };
    return (
        <div style={sectionStyle}>
            <Container>
                <div style={contentStyle}>
                    {pretitle && (
                        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            {pretitle}
                        </div>
                    )}
                    {title && (
                        <h2 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 'bold' }}>
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
