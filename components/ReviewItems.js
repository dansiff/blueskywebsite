import React from 'react';

const ReviewItem = ({ name, text, rating }) => {
    return (
        <div style={slideStyles}>
            <h3>{name}</h3>
            <p>{text}</p>
            <p>Rating: {rating}</p>
            {/* Zocdoc image */}
            <div>
                <img
                    src="img/zoc-doc-logo-png.jpg"
                    alt="Zocdoc Logo"
                    style={{ width: '100px', margin: '0 auto' }}
                />
            </div>
        </div>
    );
};

const slideStyles = {
    fontSize: '38px', // Adjust the font size
    backgroundColor: 'blue', // Background color
    color: 'white', // Text color
    height: '80vh', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
};

export default ReviewItem;
