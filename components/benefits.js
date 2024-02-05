import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Container from "./container";
import { benefitOne, benefitTwo } from "./data";
import ButtonGetStarted from "./ButtonGetStarted"
import LearnMoreButton from "./LearnMore"
const Benefits = ({ imgPos, data }) => {
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
            

            <div
                className={`relative flex items-center justify-center w-full lg:w-1/2 ${imgPos === "left" ? "lg:order-last" : "lg:order-first"
                    } overflow-hidden`}
            >
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

            <div
                className={`flex flex-col items-center justify-center w-full lg:w-1/2 ml-16 lg:max-w-sm p-8 py-4 ${imgPos === "left" ? "lg:order-first" : "lg:order-last"
                    } p-8 mr-2/12`}
            >     <Image
                    src="/img/ratingimage.png
" // Replace with your image path
                    width={144} // Adjust width as needed
                    height={70} // Adjust height as needed
                    alt="Top Image"
                />
                <h3 className="text-2xl items-center lg:text-3xl font-medium mt-4 text-gray-800 mb-4 ml-24 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.75' }}>
                    {data.title}
                </h3>
                <p className="text-md items-center lg:text-md text-gray-600 mb-4 ml-24" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {data.desc}
                </p>
                <div className="text-xl text-gray-800 font-semibold mb-4 ml-8 mt-4 font-Montserrat">
                    {/* Replace '1' with the variable or state that holds the number you want to display */}
                    1-888-279-0002
                </div>
                
                {data.bullets.map((item, index) => (

                    <Benefit key={index} title={item.title} description={item.desc} />
                ))} 
                <div className="mt-4 ml-16">
                    <LearnMoreButton href="https://form.jotform.com/240085201242138" />

               
                </div>
            </div>
        </Container>
    );
};

const Benefit = ({ title, description }) => {
    return (
        <div className="flex flex-col  items-start my-4 ml-16">
            <h4 className="text-md lg:text-lg items-center font-md text-gray-800 mb-2 ml-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h4>
            <p className="text-xs lg:text-sm text-gray-600 ml-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>{description}</p>
        </div>
    );
};

export default Benefits;
