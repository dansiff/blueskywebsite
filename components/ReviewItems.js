import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Make sure you've installed react-icons

const ReviewItem = ({ name, text, rating }) => {
    return (
        <div style={slideStyles}>
            <div style={{ textAlign: 'center' }}>
                {/* Quote icon */}
                <div style={quoteStyles}>
                    <FaQuoteLeft style={{ color: 'darkgrey', fontSize: '4rem' }} />
                </div>
                {/* Review text */}
                <p style={reviewTextStyles}>{text}</p>

                {/* Reviewer's name */}
                <h3 style={reviewerNameStyles}>{name}</h3>

                {/* Rating */}
                <p style={ratingStyles}>{rating}</p>
            </div>
            {/* Zocdoc logo at the bottom */}
            <div style={zocdocLogoStyles}>
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
    fontSize: '24px',
    backgroundColor: 'blue',
    color: 'white',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    fontFamily: 'Montserrat, sans-serif', // Set the font family to Montserrat
};

const quoteStyles = {
    position: 'absolute',
    top: '5%', // Adjust as necessary to center on all slides
    left: '50%',
    transform: 'translateX(-50%)', // Centers the quote icon
    color: 'white',
    opacity: '0.8',
};

const reviewTextStyles = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'semibold', // Make the text bold
    fontSize: '1.5rem', // Make the text larger
    margin: '1rem auto', // Ensure it's centered horizontally
    maxWidth: '60%', // Prevent the text from being too wide
};

const reviewerNameStyles = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1rem', // Make the name smaller
    marginTop: '1rem',
    marginBottom: '2rem',
    fontStyle: 'font-montserrat',
};

const ratingStyles = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: 'auto',
    fontFamily: 'Montserrat, sans-serif',
};

const zocdocLogoStyles = {
    width: '100%',
    position: 'absolute',
    bottom: '40px',
    display: 'flex',
    justifyContent: 'center', // Center the logo horizontally
};

export default ReviewItem;
