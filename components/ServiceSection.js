import React from 'react';
import Overlay from './Overlay';
const ServiceArea = () => {
    const serviceAreas = [
        "Serving 12 states:",
        "Arizona · Colorado · Connecticut · Kentucky",
        "Illinois · Maryland · Massachusetts · Minnesota",
        "New Mexico · North Carolina · Ohio · Oregon",
        "Texas · Washington",
        "1-888-279-0002"
    ];

    return (
        <Overlay
            title="BLUESKY SERVICE AREAS"
            subtitle="BlueSky has an extensive network of licensed providers throughout the US."
            listItems={serviceAreas}
            buttonText="Get Started"
            buttonLink="#get-started"
        />
    );
};

export default ServiceArea;
