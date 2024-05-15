import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderbarProps {
    images: {
      name: string;
      img: string;
      title: string;
      country: string;
      complete: number;
    }[];
  }
  
const Sliderbar:React.FC<SliderbarProps>= ({images}) => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     pauseOnHover: true
    //   };
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  
  return (
    <div className="slider-container w-[95%] m-auto pb-10">
      {/* <button onClick={goToPrevSlide}>Prev</button>
      <p>{images[currentImageIndex]}</p>
      <button onClick={goToNextSlide}>Next</button> */}
      <Slider {...settings} className='m-auto'>
      {images.map((item)=>{
        const {title,img,name}=item
        return(
            <>
            <div className='w-full  bg-green-200 shadow mx-4'>
                <div className='h-20 w-20'><img src={img} alt="" className='' /></div>
                <h1>{title}</h1>
            </div>
            </>
        )
      })}
      </Slider>
    </div>
  );
};

export default Sliderbar;