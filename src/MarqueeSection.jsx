import React from 'react';
import newImage from './assets/Frame 20.png'

const MarqueeSection = () => {
  return (
    <div className="overflow-hidden bg-gray-300 py-2">
      <div className="animate-marquee flex sm:text-base text-sm">
        <div className="flex-shrink-0 sm:w-[39vw] w-[78vw] bg-gray-300 text-left text-blue-700 py-4 px-6 mx-2">
          <img src={newImage} alt="Logo 1" className="ml-1 mb-2 h-6 w-12" />
          <a href='#'>छत्तीसगढ़ अनुज्ञापन मंडल (विनियम) 1960 ( अनुकूलन 2000) के प्रावधान अंतर्गत पर्यवेक्षक परीक्षा 2023 दिनांक 22.08.2023 से 25.08.2023 को आयोजित मुख्य विद्युत निरीक्षक द्वारा आयोजित परीक्षा का मॉडल उत्तर</a>
        </div>
        <div className="flex-shrink-0 sm:w-[39vw] w-[78vw] bg-gray-300 text-left text-blue-700 py-4 px-6 mx-2">
          <img src={newImage} alt="Logo 2" className="ml-1 mb-2 h-6 w-12" />
          <a href='#'>सार्वजनिक सूचना – विद्युत उपभोगताओ का सशस्तीकरण ( Public Notice - Empowering Electricity Consumers)</a>
        </div>
        <div className="flex-shrink-0 sm:w-[39vw] w-[78vw] bg-gray-300 text-left text-blue-700 py-4 px-6 mx-2">
          <img src={newImage} alt="Logo 3" className="ml-1 mb-2 h-6 w-12" />
          <a href='#'>Click here for TDS login submission</a>
        </div>
        <div className="flex-shrink-0 sm:w-[39vw] w-[78vw] bg-gray-300 text-left text-blue-700 py-4 px-6 mx-2">
          <img src={newImage} alt="Logo 4" className="ml-1 mb-2 h-6 w-12" />
          <a href='#'>Schedule of rates 2023-24</a>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
