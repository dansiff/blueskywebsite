import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Container from "./container";
import ButtonGetStarted from "./ButtonGetStarted"
import { benefitOne, benefitTwo } from "./data";

const Benefits = ({ data }) => { // Removed imgPos since we're now defaulting to the image on the right
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrollPosition = window.scrollY;
                const offset = parallaxRef.current.getBoundingClientRect().top / 10; // Adjust the divider to control the speed
                parallaxRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap h-screen bg-white rounded-xl overflow-hidden" fullWidth>
            {/* Text Section */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 py-4 lg:order-first">
                {/* Rating Image */}
                <Image
                    src="/img/ratingimage.png" // Replace with your image path
                    width={144} // Adjust width as needed
                    height={70} // Adjust height as needed
                    alt="Top Image"
                />
                <h3 className="text-lg lg:text-md font-medium text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {data.title}
                </h3>
                <p className="text-md lg:text-md text-gray-600 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {data.desc}
                </p>
                {data.bullets.map((item, index) => (
                    <Benefit key={index} title={item.title} description={item.desc} />
                ))}
                <div className="mt-6">
                    <ButtonGetStarted text="Learn More" href="https://form.jotform.com/240085201242138" />
                </div>
            </div>

            {/* Image Section with Parallax */}
            <div className="relative flex items-center justify-center w-full lg:w-1/2 lg:order-last overflow-hidden">
                <div ref={parallaxRef} className="w-full h-full">
                    <Image
                        src={data.image}
                        layout="fill"
                        objectFit="cover"
                        alt="Benefits"
                        blurDataURL={data.image}
                    />
                </div>
            </div>
        </Container>
    );
};

const Benefit = ({ title, description }) => {
    return (
        <div className="flex flex-col items-start my-4">
            <h4 className="text-sm lg:text-base font-medium text-gray-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h4>
            <p className="text-xs lg:text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>{description}</p>
        </div>
    );
};

export default Benefits;
