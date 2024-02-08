import React from 'react';

const Payinfo = () => {
    return (
        <div className="bg-white items-center dark:bg-trueGray-800 dark:text-white relative tracking-wider font-montserrat text-2xl p-4 md:p-8 lg:p-12 rounded-lg lg:max-w-3xl max-w-full md:max-w-md mx-auto my-8 md:my-0 space-y-4 py-6">
            <div className="container mx-auto items-center px-4">
                <div className="mb-4">
                    <h2 className="text-xl items-center font-semibold mb-2"></h2>
                    <p className="mb-6">You can pay out-of-pocket or use your Blue Cross Blue Shield, Cigna, Aetna, Optum, and United Healthcare insurance plans to cover treatment from licensed BlueSky mental health care providers.</p>
                    <hr className="border-t-2 items-center border-blue-600 mx-auto w-1/4" />
                </div>
            </div>
        </div>
    );
};

export default Payinfo;
