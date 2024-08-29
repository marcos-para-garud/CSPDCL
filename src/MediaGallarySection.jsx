import React from 'react';
import circle from './assets/image 9.png';
import square from './assets/image 10.png';

const MediaGallerySection = () => {
  return (
    <div className="p-8 bg-[#274699]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-white">Media Gallery</h2>

        {/* Paragraph */}
        <p className="text-lg mb-8 text-white">
          Explore our media gallery to view various images showcasing our services and events.
        </p>

        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Circular Image */}
          <div className="w-80 h-80 overflow-hidden rounded-full mb-6 md:mb-0">
            <img
              src={circle}
              alt="Circular Image"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Square Image */}
          <div className="w-80 h-80 overflow-hidden">
            <img
              src={square}
              alt="Square Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGallerySection;

