import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReviewItem from './ReviewItems';
const Reviews = () => {
    const carouselStyles = {
        width: '80%', // Adjust the width as needed
        margin: '0 auto', // Center the carousel horizontally
        color: 'white', // Set the text color to white
        height: '100vh',
    };
    const reviews = [{
       
        text: 'I felt heard during my appointment. I have no doubt I will continue using this provider.',
        name: 'Heather G',
    },
    {
        
        text: 'Great bedside manner and put me at ease. Although it was my first time seeing her, I felt very comfortable to open up about my history.',
        name: 'Joan P',
    },
    {
        
        text: 'Great service and would highly recommend!',
        name: 'Joshua F',
    },
 ];
    
    return (
        <div>
            <Carousel style={carouselStyles} infiniteLoop useKeyboardArrows autoPlay interval={3000}>
                {reviews.map((review, index) => (
                    <ReviewItem key={index} {...review} />
                ))}
            </Carousel>

            
        </div>
    );
};

export default Reviews;
