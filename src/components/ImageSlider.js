import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='mx-auto w-auto h-auto'>
      <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faArrowRight} onClick={nextSlide}></FontAwesomeIcon>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img className='w-50 h-50' src={slide.image} alt='alt' />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;