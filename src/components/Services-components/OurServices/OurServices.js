import React from 'react'
import './OurServices.css'
import services from './servicesData2'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faAnglesDown
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import ServicePhotoSlider from '../ServicePhotoSlider/ServicePhotoSlider';

function OurServices() {
  const [showMore, setShowMore] = useState([])

  function handleShowMore(id){
    setShowMore((prevShowMore) => {
      const updatedShowMore = [...prevShowMore];
      updatedShowMore[id] = !prevShowMore[id];
      return updatedShowMore;
    });
 
    
  }
  return (
      
<div className='service-section'>
      <h3>Usluge</h3>
      
    {services.map(serviceGroup => (
        <div key={serviceGroup.id} className='service-box'>

          {/* heading and toggle button section */}
          <div className='heading-underline'>
              <div className='services-underline'></div>
              <h3 className='service-box-heading'>
              {serviceGroup.title}</h3>
          </div>
          <div className='services-underline long'></div>
            {serviceGroup.services.map(serviceGroup => (
            <div className='show-description-name'>

              
              <motion.div className='all'
              initial={{ height: 60 }}
              animate={{ height: showMore[serviceGroup.id] ? 'auto' : 70}}
              transition={{ duration: 0.3 }}
              >
                                
                <div className='heading-arrow-box' 
                 initial={{ height: 60 }}
                 animate={{ height: showMore[serviceGroup.id] ? 'auto' : 70}}
                 transition={{ duration: 0.3 }}>
                    <h4 className='service-name'>{serviceGroup.name}</h4>
                  <button className='toggle-btn' onClick={() => handleShowMore(serviceGroup.id)}>{
                    showMore[serviceGroup.id] ? <FontAwesomeIcon icon={faAnglesUp} className='toggle-icon'/> : <FontAwesomeIcon icon={faAnglesDown}  className='toggle-icon'/>}
                  </button>
                  
                </div>
                 <AnimatePresence>
              {showMore[serviceGroup.id] && (
                <motion.div className='description-box' 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: showMore ? 1 : 0, y: showMore ? 0 : 20 }}
                // exit={{ scale: 0, y:-20 }}
                transition={{ duration: 0.3 }}>
                <p className='service-description'>{serviceGroup.desc}</p>
                </motion.div>
                )}
             </AnimatePresence>
              </motion.div>
              
            </div>
                 ))} 
               
           <ServicePhotoSlider id={serviceGroup.id}/>   
        </div>  
        
    ))}

 
</div>
 )
}

export default OurServices
