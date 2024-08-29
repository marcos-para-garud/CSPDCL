import React from 'react';
import download from './assets/Frame 29.png'
import google from './assets/image 4.png'
import apple from './assets/image 5.png'

const DownloadSection = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 sm:p-8 ">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 text-center">Download Our Mobile App</h2>

      {/* Paragraph */}
      <p className="text-center mb-4 sm:mx-64 mx-2 font-light">Get our app to manage your account easily. Download now and experience the convenience of accessing your services anytime, anywhere.</p>

      {/* Image */}
      <img src={download} alt="Mobile App" className="sm:w-4/5 w-90 sm:h-1/4 h-[34vh] mb-4" />

      {/* Download Button */}
      <a href="#" className="bg-red-600 text-white mb-3 w-[170px] sm:w-auto py-2 px-4 rounded hover:bg-red-950">Download Now</a>

      {/* Available on */}
      
       
      

      {/* Logos */}
      <div className="flex mt-2 space-x-4">
      <span className="text-center text-blue-600 text-xl font-bold mt-1">Available In</span>
      <div> <a href='#'><img src={google} alt="App Store" className="w-32 h-auto" /> </a> </div>
       
        <div> <a href='#'><img src={apple} alt="Google Play" className="w-32 h-auto" /> </a> </div>
      </div>
    </div>
  );
};

export default DownloadSection;
