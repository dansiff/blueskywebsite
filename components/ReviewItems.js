import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Make sure you've installed react-icons

const ReviewItem = ({ name, text, rating }) => {
    return (
        <div style={slideStyles}>
            <div style={{ textAlign: 'center' }}>
                {/* Quote icon */}
                <div style={{ position: 'relative', top: '-170px', left: "300px", }}>
                    <FaQuoteLeft style={{ color: 'darkgrey', fontSize: '4rem' }} />
                </div>
                {/* Review text */}
                <p style={{ fontStyle: 'italic', margin: '1rem' }}>{text}</p>

                {/* Reviewer's name */}
                <h3 style={{ fontWeight: 'normal', marginTop: '1rem', marginBottom: '2rem' }}>{name}</h3>

                {/* Rating */}
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 'auto' }}>{rating}</p>
            </div>
            {/* Zocdoc logo at the bottom */}
            <div style={{ width: '100%', position: 'absolute', bottom: '40px' }}>
                <img
                    src="img/zoc-doc-logo-.png"
                    alt="Zocdoc Logo"
                    className="w-20 mx-auto"
                    style={{ width: '100px', margin: '0 auto' }}
                />
            </div>
        </div>
    );
};


const slideStyles = {
    fontSize: '24px', // Adjust the font size
    backgroundColor: 'blue', // Background color
    color: 'white', // Text color
    height: '80vh', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative', // Needed for absolute positioning of children
    textAlign: 'center',
};

export default ReviewItem;
