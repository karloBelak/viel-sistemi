import React, { useState } from 'react';
import { motion } from 'framer-motion';
import services from '../OurServices/servicesData2';
import '../ServicePhotoSlider/ServicePhotoSlider.css';

function ServicePhotoSlider({ id }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredServices = services.filter(serviceGroup => serviceGroup.id === id);

  const totalSlides = filteredServices[0]?.photos?.length || 0;

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <div className='service-photo-slider'>
      <div className='slider-container'>
        <button className='prev' onClick={prevSlide}>&#10094;</button>
        <motion.div className='slide'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredServices[0]?.photos && (
            <img className='slider-img' alt={`service-${currentSlide}`} src={filteredServices[0].photos[currentSlide]} />
          )}
        </motion.div>
        <button className='next' onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
}

export default ServicePhotoSlider;
