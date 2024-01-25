import React from "react";
import Container from "./container";

const SectionTitle = ({ pretitle, title, children }) => {
    return (
        <div className="bg-blue-600 text-white py-12 flex flex-col items-center justify-center">
            <div className="mb-4 text-lg uppercase tracking-wider font-semibold">{pretitle}</div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <hr className="border-white w-1/12 mb-4" />
            <p className="text-xl max-w-2xl text-center mb-8">{children}</p>
            <button className="bg-transparent border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Learn More
            </button>
        </div>
    );
};

export default SectionTitle;