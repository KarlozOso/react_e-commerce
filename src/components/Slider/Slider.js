import React, { useState } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./Slider.scss";

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinyrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinyrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinyrgb&dpr=2&h=750&w=1260",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className='slider'>
      <div className='container' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt='Image 1' />
        <img src={data[1]} alt='Image 2' />
        <img src={data[2]} alt='Image 3' />
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <NavigateBeforeIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <NavigateNextIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;