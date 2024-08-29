import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/20/solid';
import data from './assets/data.png'
import './TopSection.css'

const TopSection = () => {
  const [fontSize, setFontSize] = useState('text-base');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const increaseFontSize = () => {
    if (fontSize === 'text-base') setFontSize('text-lg');
    else if (fontSize === 'text-lg') setFontSize('text-xl');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'text-xl') setFontSize('text-lg');
    else if (fontSize === 'text-lg') setFontSize('text-base');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language) => {
    console.log(`Selected language: ${language}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`top-section ${fontSize}`}>
      <div className="sm:flex sm:justify-between flex relative px-12 bg-white ">
        {/* Email Section */}
        <div className="flex sm:items-center text-sm gap-1 -ml-10 sm:py-0 py-4">
          <EnvelopeIcon className="h-5 w-5 text-gray-600 sm:block hidden " />
          <span className='sm:block hidden '>Email us:</span> <span className='sm:font-normal font-semibold'> customercare1912@cspc.co.in</span>
        </div>

        <div className="flex gap-4">
          {/* Call Us Section */}
          <div className="flex items-center gap-1">
            <PhoneIcon className="h-5 w-5 text-gray-600 sm:block hidden" />
            <span className='text-blue-600 text-sm sm:block hidden'>Call Us (Toll Free): 1912 or 1800-233-488 or 70771-1912</span>
          </div>


          <div className="flex">
            {/*data */}
            <div className="flex items-center border-l border-r border-[#555555] px-4">

              {/* <span className=''>Call Us (Toll Free): 1912 or 1800-233-488 or 70771-1912</span> */}
              <a href='#'><img className='h-6 w-6' src={data}></img></a>
            </div>

            {/* Language Dropdown */}
            <div className="relative flex items-center gap-1 sm:border-r-0 md:border-r border-[#555555] px-4">
              <GlobeAltIcon className="h-5 w-5 text-gray-600 sm:block hidden" />
              <button onClick={toggleDropdown} className="mr-2 focus:outline-none text-sm sm:block hidden">
                भाषा/Language
              </button>
              {isDropdownOpen && (
                <div className="absolute top-10 right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                  <div className="flex flex-col p-2">
                    <button onClick={() => selectLanguage('English')} className="hover:bg-gray-100 p-2 text-left">English</button>
                    <button onClick={() => selectLanguage('Hindi')} className="hover:bg-gray-100 p-2 text-left">Hindi</button>
                    <button onClick={() => selectLanguage('Chhattisgarhi')} className="hover:bg-gray-100 p-2 text-left">Chhattisgarhi</button>
                  </div>
                </div>
              )}
            </div>

          </div>
          {/* Font Size Controls */}
          

        <div className="absolute right-0 flex flex-row gap-2 sm:hidden sm:py-0 py-4">
          <button onClick={increaseFontSize} className="border-2 border-black bg-white text-black p-1 font-bold rounded w-16"><span className='text-base'>A+</span></button>
          <button onClick={decreaseFontSize} className="border-2 border-black bg-white text-black p-1 font-bold rounded w-16"><span className='text-base'>A-</span></button>
        </div>

        <div className="hidden sm:flex flex-row items-center gap-2">
          <button onClick={increaseFontSize} className="border-2 border-black bg-white text-black p-1 m-1 font-bold rounded w-16"><span className='text-base'>A+</span></button>
          <button onClick={decreaseFontSize} className="border-2 border-black bg-white text-black p-1 m-1 font-bold rounded w-16"><span className='text-base'>A-</span></button>
        </div>
        </div>


      </div>
    </div>
  );
};

export default TopSection;








