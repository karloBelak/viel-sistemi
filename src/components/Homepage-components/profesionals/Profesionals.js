import "./Profesionals.css";
import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faComments,
  faLightbulb,
  faSignal,
  faUserDoctor
} from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation, useInView } from "framer-motion";

function Profesionals() {
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
    <motion.section className="profesionals-section" ref={ref}
    variants={{
     hidden: { opacity: 0, y: 80 },
     visible: { opacity: 1, y: 0 },
   }}
   initial="hidden"
   animate={mainControls}
   transition={{ delay: .3, duration: 1 }}>
    
{/* naslov  */}
       <div className="profesionals-heading">
        <h3>Zašto baš mi?</h3>
       </div>

{/* box s pojedinačnim hvalospjevima */}
       <div className="reason-box-container">
        <div className="reason-box">
          <div className="reason-icon-box">
            <div className="f-icon-div">
            <FontAwesomeIcon icon={faUserDoctor} className="reason-icon icon-size"/>
          </div>
          </div>
          <div className="reason-text-box">
             <h4>Profesionalnost i kvaliteta</h4>
            <p>Naša profesionalnost osigurava visok standard kvalitete naših usluga. Posvećeni smo efikasnosti i pažljivom pristupu svakom projektu kako bismo osigurali zadovoljstvo naših klijenata.</p>
          </div>
         
        </div>
        <div className="reason-box">
          <div className="reason-icon-box">
            <div className="f-icon-div">
            <FontAwesomeIcon icon={faClock} className="reason-icon icon-size"/>
          </div>
          </div>
          <div className="reason-text-box">
             <h4>Brzina i preciznost</h4>
            <p>Brzina i preciznost su temelj našeg rada, osiguravajući da vaši projekti budu izvršeni učinkovito, precizno i sa vrhunskom točnošću.</p>
          </div>
         
        </div>
        <div className="reason-box">
          <div className="reason-icon-box">
            <div className="f-icon-div">
            <FontAwesomeIcon icon={faLightbulb} className="reason-icon icon-size"/>
          </div>
          </div>
          <div className="reason-text-box">
             <h4>Znanje i iskustvo</h4>
            <p>Široko područje usluga obogaćuje i širi naše znanje, stručnost i iskustvo svakog dana, a mi ga dalje nesebično primjenjujemo na svaki projekt.</p>
          </div>
         
        </div>
        <div className="reason-box">
          <div className="reason-icon-box">
            <div className="f-icon-div">
            <FontAwesomeIcon icon={faComments} className="reason-icon icon-size"/>
          </div>
          </div>
          <div className="reason-text-box">
             <h4>Savjetovanje i isplativost</h4>
            <p>Kroz naše znanje i iskustvo savjetujemo vas i zajednički pronalazimo najbolja i najisplativija rješenja za vaš projekt.</p>
          </div>
         
        </div>
        <div className="reason-box">
          <div className="reason-icon-box">
            <div className="f-icon-div">
            <FontAwesomeIcon icon={faSignal} className="reason-icon icon-size"/>
          </div>
          </div>
          <div className="reason-text-box">
             <h4>Informirano i moderno</h4>
            <p>U korak smo s najmodernijim tehnologijama našeg posla, nastojimo se obogačivati novim znanjima svakog dana sve u svrhu zadovoljstva naših klijenata.</p>
          </div>
         
        </div>
       </div>
    
       
    </motion.section>
  )
}


export default Profesionals;
