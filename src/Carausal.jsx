// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './CarausalArrow.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import CarausalImage from './assets/Slider.png'
import frame100 from './assets/Frame 100.png'

const Carousel = () => {
  const settings = {
    dots: false, // Hide dots
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,

  };

  function ArrowLeft(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} left-arrow`} onClick={onClick}>
        <ArrowLeftIcon className="w-full text-[#292D32] p-2" />
        

      </div>
    );
  }

  function ArrowRight(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} right-arrow`} onClick={onClick}>
        <ArrowRightIcon className="w-full text-[#292D32] p-2" />
        {/* <img src={frame100} className="h-5 w-full text-white" /> */}
        
      </div>
    );
  }

  return (
    <div className="carousel-container mt-0 -mb-2 relative">
      <Slider {...settings}>
        <div>
          <img src={CarausalImage} alt="Image 1" className="w-full h-auto" />
        </div>
        <div>
          <img src={CarausalImage} alt="Image 2" className="w-full h-auto" />
        </div>
        <div>
          <img src={CarausalImage} alt="Image 3" className="w-full h-auto" />
        </div>
        <div>
          <img src={CarausalImage} alt="Image 4" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
