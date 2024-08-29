import React from 'react';
import cspdcl from './assets/Frame 82.png'
import social from './assets/Social Icons.png'
import twitter from './assets/twitter.png'
import instagram from './assets/Instagram.png'
import image4 from './assets/image 4.png'
import image5 from './assets/image 5.png'
import asset80 from './assets/Asset 80.png'
import asset90 from './assets/Asset 90.png'
import copyright from './assets/copyright.png'

const FourSubsections = () => {
  return (
    <div className="bg-[#274699] p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-2">
        
        {/* First Subsection */}
        <div className="text-left">
          <img src={cspdcl} alt="CSPDCL Logo" className="mx-0 h-16 mb-4" />
          <p className="mb-4 text-white font-thin text-base">
            The Chhattisgarh State Power Distribution Company Limited (CSPDCL) is a state-owned utility
            company in Chhattisgarh, India, responsible for electricity distribution.</p>
          <div className='text-white font-semibold sm:py-0 py-2 sm:text-base text-sm'>GST Identification No.-<span className='text-sm font-normal'>22AADCC6047KIZR</span></div>
          <div className='text-white font-semibold sm:py-0 py-2 sm:text-base text-sm'>Registration No.-<span className='text-sm font-normal'>U40108 CT 2003 PLC 15822</span></div>
          <div className="flex justify-start space-x-4 sm:py-0 py-2 sm:text-base text-sm">
            <div className=" font-semibold text-white mt-1">Follow us on</div>
            <a href="#" className="h-6 w-6"><img src={social} alt="Facebook"></img></a>
            <a href="#" className="h-6 w-6"><img src={twitter} alt="Twitter"></img></a>
            <a href="#" className="h-6 w-6"><img src={instagram} alt="Instagram"></img></a>
          </div>
        </div>

        {/* Second Subsection */}
        <div className="text-center sm:ml-24">
          <h3 className="text-lg font-bold mb-4 text-white text-left">Important Links</h3>
          <ul className="mb-4 text-left text-base font-thin ">
            <li className='my-2 sm:py-0 py-1'><a href="#" className="text-white hover:underline">Sitemap</a></li>
            <li className='my-2 sm:py-0 py-1'><a href="#" className="text-white hover:underline">Customer e-seva</a></li>
            <li className='my-2 sm:py-0 py-1'><a href="#" className="text-white hover:underline">Customer Services</a></li>
            <li className='my-2 sm:py-0 py-1'><a href="#" className="text-white hover:underline">Online new connection</a></li>
            <li className='my-2 sm:py-0 py-1'><a href="#" className="text-white hover:underline">Solar rooftop portal</a></li>
            <li className='my-2 sm:py-0 py-1'><a href="#" className="text-white hover:underline">Employee app download</a></li>
          </ul>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-700"><img src={image4} alt="Icon 1"></img></a>
            <a href="#" className="text-gray-700"><img src={image5} alt="Icon 2"></img></a>
          </div>
        </div>

        {/* Third Subsection */}
        <div className="text-left sm:ml-20">
          <h3 className="text-lg font-bold mb-4 text-white">Help & Support</h3>
          <ul className="mb-4 text-left text-sm font-thin">
            <li className='my-2 text-white sm:pb-0 pb-1'>टेलीफोन नंबर :0771–2574166</li>
            <li className='my-2 text-white sm:pb-0 pb-1'>फैक्स नंबर : 0771–2574125</li>
            <li className='my-2 text-white sm:pb-0 pb-1'>ई –मेल : customercare1912@cspc.co.in</li>
          </ul>
          <div className="flex justify-start space-x-4">
            <a href="#" className="h-10 w-10"><img src={asset80} alt="Support Icon 1"></img></a>
            <a href="#" className="h-10 w-24"><img src={asset90} alt="Support Icon 2"></img></a>
          </div>
        </div>

        {/* Fourth Subsection */}
        <div className="text-left sm:ml-20 text-white">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="mb-4 text-left text-sm font-thin">
            <li className='my-2 text-white'>मुख्य अभियंता, ऊर्जा सूचना प्रौद्योगिकी केंद्र, शेड–नंबर 8, छ.स्टेट.पा.कंपनी.कैम्पस, डंगनिया, रायपुर(छ. ग.)</li>
            <li className='my-2 text-white'>टेलीफोन नंबर :0771–2574166</li>
            <li className='my-2 text-white'>फैक्स नंबर : 0771–2574125</li>
          </ul>
        </div>

      </div>
      {/* Horizontal Line and Additional Info */}
      <div className='sm:block hidden'>
      <hr className="my-4 border-t border-white " />
      <div className="flex sm:justify-between justify-around text-white sm:text-sm text-xs">
        <div>Last update on 05-08-2024</div>
        <div>
          <img src={copyright} alt="CSPDCL Logo" className="inline h-4 w-4 mr-2" />
          <a href="https://www.cspdcl.co.in" className="">cspdcl.co.in</a>
        </div>
        <div>Total visitors - 109667876</div>
      </div>
      </div>
      <div className='sm:hidden block'>
      <div className="bg-[#274699] text-white text-left pt-4">
      {/* Total Visitors */}
      <p className="text-sm font-light">Total Visitors: 109667876</p>
      
      {/* Last Updated */}
      <p className="text-sm mt-2">Last updated on 05-08-2024</p>
      
      {/* Horizontal Line */}
      <hr className="my-4 border-white opacity-50" />
      
      {/* Copyright Information */}
      <p className="text-sm text-center">
        &copy; <span className="font-bold">cspdcl.co.in</span>
      </p>
    </div>
      </div>
    </div>
  );
};

export default FourSubsections;
