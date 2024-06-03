import React, { useEffect, useRef } from 'react'
import './Partners.css'
import photos from './data'
import { motion, useAnimation, useInView } from "framer-motion";

function Partners() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
      // eslint-disable-next-line
    }, [isInView]);

  return (
    <motion.section className='partners-section' ref={ref} 
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ delay: .3, duration: 1 }}>
        {/* <div> */}
        <h3>Partneri</h3>
        <div className='partners'
        >
        {photos.map((photo, id) => (
          <div key={id} className='partner'>
            <img src={photo.img} alt={photo.alt} className='partner-image' />
          </div>
        ))}
        </div>
    </motion.section>
  )
}

export default Partners