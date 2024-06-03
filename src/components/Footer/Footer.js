import React, { useEffect, useRef } from 'react'
import '../Footer/Footer.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import Dots from '../Homepage-components/dots/Dots.js'
import { motion, useAnimation, useInView } from "framer-motion";
import { ToTop } from '../TopFunction.js';

function Test() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);

    const handleMailClick = () => {
        window.location.href = 'mailto:vielsistemi.hr@gmail.com';
      };

      const handlePhoneClick = () => {
        window.location.href = 'tel:+385977986103';
      };
    
  return (
  <>
    <Dots/>
    <motion.footer 
    variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: .4, duration: 1.5 }}
    >
      {/* ukrasne tockice iznad footera u zasebnoj komponenti */}
        {/* <Dots/> */}
        {/* gornji dio footera s podacima */}
        <div className='footer-top' ref={ref}>

            <div className='single-box box-about'>
                <h4 className='box-heading'><span></span>O nama</h4>
                <p>Tvrtka smo specijalizirana za sisteme grijanja, klimatizacije i vodoinstalacija, predani pružanju vrhunskih usluga prilagođenih vašim potrebama. Sastavni dio naše vizije je i praćenje najnovijih tehnologija i trendova na tržištu. Kroz naše iskustvo i stručnost, osiguravamo efikasna rješenja koja će poboljšati kvalitetu vašeg života. Vaše povjerenje je naša najveća motivacija.</p>
                <NavLink to='/about' className='nav-link' onClick={ToTop}><button className='single-box-navlink'>O nama...</button></NavLink>
            </div>

            <div className='single-box box-services'>
                <h5 className='box-heading'><span></span>Naše usluge</h5>
                <ul>
                    <li>Grijanje</li>
                    <li>Klimatizacija</li>
                    <li>Vodoinstalacije</li>
                </ul>
                <NavLink to='/services' className='nav-link nav-link-big-width' onClick={ToTop}><button className='single-box-navlink'>Usluge...</button></NavLink>
            </div>

            <div className='single-box box-contact'>
                <h5 className='box-heading'><span></span>Kontakt</h5>
                <div className='icons-div'>
                  <div className='footer-contact-box'>
                      <FontAwesomeIcon icon={faPhone} className="footer-icons"/>
                    <button className='footer-btn-contact' onClick={handlePhoneClick} >+385 977986103</button>
                  </div>
                  <div className='footer-contact-box'>
                    <FontAwesomeIcon icon={faEnvelope} className="footer-icons" />
                    <button className='footer-btn-contact' onClick={handleMailClick}>
                      vielsistemi.hr@gmail.com
                    </button>
                  </div>
              
                  <div className='footer-contact-box'>
                    <FontAwesomeIcon icon={faClock} className="footer-icons" />
                    <strong className='footer-work-time'>
                      Pon-Pet: 08:00-16:00
                    </strong>
                  </div>
                </div>
            </div>

        </div>

        {/* donji dio footera s copyrightom */}
        <div className='underline-footer-bottom'></div>
        <div className='copyright-box'>
            <p className='copyright-test'> &copy; CopyRight {new Date().getFullYear()} by VIEL SISTEMI</p>
        </div>
        
    </motion.footer>
  </>
    
  )
}

export default Test