// LearnMore.js
import React from "react";
import Container from "./container";

const LearnMore = () => {
    // Define the data object inside the component
    const data = {
        title: "BLUESKY IS HERE",
        desc: "Finding professional, compassionate psychiatric providers should be easy. BlueSky is here to support you on your mental healthcare journey."
    };

    return (
        <div className="bg-blue-600 text-white py-20">
            <Container>
            <div className= "flext justify-start items-center">
                <h3 className="text-3xl font-bold mb-4">{data.title}</h3>
                <p className="text-lg mb-6">{data.desc}</p>
                <a href="https://form.jotform.com/240085201242138" className="inline-block bg-indigo-600 justify-center text-white font-medium py-2 px-6 rounded-md transition duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
                    Learn More
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default LearnMore;
