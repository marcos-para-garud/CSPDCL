import React from 'react';
import customerService from './assets/Frame 52.png';
import payPoint from './assets/Frame 60.png';
import dollar from './assets/Frame 61.png';
import arrow from './assets/arrow-right.png';

const ServiceCentersSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 space-y-4 md:space-y-0 md:space-x-4">
      {/* First Box */}
      <div className="w-full md:w-1/3 p-6 pt-8 bg-orange-100 rounded-md flex">
        {/* Logo (20% Width) */}
        <div className="w-1/5 -mt-2 flex items-start justify-center">
          <img src={customerService} alt="logo" className="w-full" />
        </div>
        {/* Content (80% Width) */}
        <div className="w-4/5 pl-4">
          <h3 className="text-xl font-semibold">Common Service Center</h3>
          <p className="text-gray-600">
            Access various services through our common service centers located across the region.
          </p>
          <a href='#'>
            <p className='text-blue-700 inline-flex items-center'>
              Know more 
              <img className="h-6 w-6 ml-2" src={arrow} alt="Arrow" />
            </p>
          </a>
        </div>
      </div>

      {/* Second Box */}
      <div className="w-full md:w-1/3 p-6 pt-8 bg-green-200 rounded-md flex">
        {/* Logo (20% Width) */}
        <div className="w-1/5 -mt-2 flex items-start justify-center">
          <img src={payPoint} alt="logo" className="w-full" />
        </div>
        {/* Content (80% Width) */}
        <div className="w-4/5 pl-4">
          <h3 className="text-xl font-semibold">Pay Point Centers</h3>
          <p className="text-gray-600">
            Visit our pay point centers to easily pay your bills and other services in person.
          </p>
          <a href='#'>
            <p className='text-blue-700 inline-flex items-center'>
              Know more 
              <img className="h-6 w-6 ml-2" src={arrow} alt="Arrow" />
            </p>
          </a>
        </div>
      </div>

      {/* Third Box */}
      <div className="w-full md:w-1/3 p-6 pt-8 bg-pink-200 rounded-md flex">
        {/* Logo (20% Width) */}
        <div className="w-1/5 -mt-2 flex items-start justify-center">
          <img src={dollar} alt="logo" className="w-full" />
        </div>
        {/* Content (80% Width) */}
        <div className="w-4/5 pl-4">
          <h3 className="text-xl font-semibold">Pay through RTGS/NEFT</h3>
          <p className="text-gray-600">
            Securely pay your bills using RTGS/NEFT through our dedicated services.
          </p>
          <a href='#'>
            <p className='text-blue-700 inline-flex items-center'>
              Know more 
              <img className="h-6 w-6 ml-2" src={arrow} alt="Arrow" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCentersSection;
