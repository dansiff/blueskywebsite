import React from 'react';

const Overlay = ({ title, subtitle, listItems, buttonText, buttonLink }) => {
    const listClassName = "text-sm md:text-base"; // Add more responsive text sizes if needed

    return (
        <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-blue-700 bg-opacity-75 text-white rounded-lg shadow-lg max-w-md mx-auto p-6">
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">{title}</h2>
                <p className="font-montserrat text-md md:text-lg mb-4">{subtitle}</p>
                <hr className="border-white my-2" />
                <ul className={listClassName}>
                    {listItems.map((item, index) => (
                        <li key={index} className="mb-1">
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-4">
                    <a href={buttonLink} className="font-montserrat inline-block bg-white text-blue-700 py-2 px-4 rounded-full font-medium transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
