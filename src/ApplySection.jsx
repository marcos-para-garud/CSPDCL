import React from 'react';
import apply from './assets/image 6.png';

const ApplySection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Box 1 */}
      <div className="md:w-1/2 w-full p-4 bg-[#274699] flex flex-col justify-center">
      <div className="md:w-1/2 w-full sm:hidden block mb-4">
        <img
          src={apply}
          alt="Solar Panels"
          className="w-full h-full object-cover block rounded-md"
        />
      </div>
        <h2 className="text-2xl md:text-4xl text-white font-bold mb-4">
          Apply for Kusum Yojna Today and Get Solar Panels
        </h2>
        <p className="text-base md:text-lg text-white mb-6">
          Take advantage of the Kusum Yojna and make a positive impact on the environment. Apply today and get solar panels installed at your premises.
        </p>
        <button className="bg-red-600 text-white w-[170px] sm:w-auto md:w-40 py-2 px-4 rounded hover:bg-blue-600">
          Apply Now
        </button>
      </div>

      {/* Box 2 */}
      <div className="md:w-1/2 w-full sm:block hidden">
        <img
          src={apply}
          alt="Solar Panels"
          className="w-full h-full object-cover block"
        />
      </div>
    </div>
  );
};

export default ApplySection;

