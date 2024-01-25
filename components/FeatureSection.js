import React from 'react';
import { GiHealthNormal } from 'react-icons/gi'; // Health icon
import { MdSecurity } from 'react-icons/md'; // Security icon
import { IoVideocam } from 'react-icons/io5'; // Video camera icon
import { BiBrain } from 'react-icons/bi'; // Brain icon

const features = [
    { Icon: GiHealthNormal, text: 'Insurance Accepted' },
    { Icon: MdSecurity, text: 'Secure + Confidential' },
    { Icon: IoVideocam, text: 'Online Video Telehealth' },
    { Icon: BiBrain, text: 'Evidence-Based Treatment' },
];

const FeatureSection = () => {
    return (
        <div className="bg-blue-600 text-white" style={{ height: '50vh' }}>
            <div className="flex justify-around items-center h-full">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center px-4">
                        <div className="mb-3 rounded-full bg-white p-4">
                            <feature.Icon className="h-10 w-10 text-blue-600" />
                        </div>
                        <p className="text-center">{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
