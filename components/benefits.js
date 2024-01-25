import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Container from "./container";
import { benefitOne, benefitTwo } from "./data";
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
        <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap bg-white shadow-xl rounded-xl overflow-hidden" fullWidth>
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
                        
                        blurDataURL={data.image.src}
                    />
                </div>
            </div>

            <div
                className={`flex flex-col items-start justify-center w-full lg:w-1/2 ${imgPos === "left" ? "lg:order-first" : "lg:order-last"
                    } p-8`}
            >
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    {data.title}
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 mb-6">
                    {data.desc}
                </p>
                {data.bullets.map((item, index) => (
                    <Benefit key={index} title={item.title} description={item.desc} />
                ))}
            </div>
        </Container>
    );
};

const Benefit = ({ title, description }) => {
    return (
        <div className="flex flex-col mt-6">
            <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
            <p className="mt-2 text-base text-gray-600">{description}</p>
        </div>
    );
};

export default Benefits;
