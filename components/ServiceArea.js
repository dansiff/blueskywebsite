import React from 'react';

const ServiceArea = () => {
  return (
    <div className="bg-blue-600 rounded-lg p-6 md:p-8 lg:p-12 text-white max-w-2xl mx-auto my-8">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">BLUESKY SERVICE AREAS</h2>
      <p className="text-sm md:text-base mb-4">
        BlueSky has an extensive network of licensed providers throughout the US.
      </p>
      <h3 className="text-md md:text-lg font-semibold mb-2">Serving 12 states:</h3>
      <p className="text-xs md:text-sm mb-4">
        Arizona · Colorado · Connecticut · Kentucky · Illinois · Maryland · Massachusetts · Minnesota · New Mexico · North Carolina · Ohio · Oregon · Texas · Washington
      </p>
      <p className="text-xs md:text-sm font-bold mb-4">1-888-279-0002</p>
      <div className="flex justify-center md:justify-start">
        <a href="#get-started" className="inline-block bg-white text-blue-600 py-2 px-4 md:px-6 rounded-full font-medium text-xs md:text-sm transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
          Get Started
          <span className="ml-2">?</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceArea;
