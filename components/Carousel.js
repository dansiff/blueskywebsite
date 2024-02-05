// components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from 'react-icons/fa';

const slidesData = [
    {
        id: 1,
        text: "Great bedside manner and put me at ease. Although it was my first time seeing her, I felt very comfortable to open up about my history.",
        author: "Patient A",
    },
    {
        id: 2,
        text: "The care and attention I received were second to none. I've never felt more understood and cared for.",
        author: "Patient B",
    },
    {
        id: 3,
        text: "A truly remarkable experience. The staff was professional, and the environment was calming and safe.",
        author: "Patient C",
    },
    // ...add as many slides as needed
];
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextarrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="max-w-full mx-auto">
            <Slider {...settings}>
                {slidesData.map((slide) => ( // Make sure you're using the parameter 'slide' here
                <div key={slide.id} className="flex flex-col justify-center items-center bg-blue-600 p-8">
                    <FaQuoteLeft className="text-white text-3xl mb-4" /> {/* Favicon */}
                    <p className="text-white text-lg md:text-lg font-light mb-2">{slide.text}</p>
                    <p className="text-white text-base md:text-2xl font-medium">{slide.author}</p>
                </div>
                ))}
            </Slider>
        </div>
    );
};

// Custom next arrow component
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={'absolute z-10 inset-y-0 right-0 flex items-center justify-center bg-white bg-opacity-50 hover:bg-opacity-75 text-blue-600 w-10 h-10 rounded-full shadow-md cursor-pointer'}        
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
}

// Custom previous arrow component
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={'absolute z-10 inset-y-0 right-0 flex items-center justify-center bg-white bg-opacity-50 hover:bg-opacity-75 text-blue-600 w-10 h-10 rounded-full shadow-md cursor-pointer'}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
}
export default Carousel;
