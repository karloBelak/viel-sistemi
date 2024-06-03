import React, { useEffect, useRef }  from "react";
import "./Buildings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBuilding,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons"
import { motion, useAnimation, useInView } from "framer-motion";
import Dots from '../dots/Dots'


function Buildings() {
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
    <>
     <Dots/>
    <section className="building-section">
      <motion.div className="buildings" ref={ref}
       variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: .3, duration: 1 }}>
{/* naslov mjesta rada */}
        <div className="locations" >
          <div className="building-heading">
            <h3 className="building-title">
            Prilagodivi različitim objektima
            <div className="underline-buildings"></div>
            </h3>
          </div>
        </div>
{/* ikone i mjesta rada */}
        <div className="icons">
          <div className="icon-blok blok1">
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <h5 className="building-name">Obiteljske kuće</h5>
          </div>
          <div className="icon-blok blok2">
            <FontAwesomeIcon icon={faBuilding} className="icon" />
            <h5 className="building-name">Stanovi / Manje zgrade</h5>
          </div>
          <div className="icon-blok blok3">
            <FontAwesomeIcon icon={faIndustry} className="icon" />
            <h5 className="building-name">Poslovni objekti</h5>
          </div>
        </div> 
      </motion.div>
    </section>
    </>
   
 
  );
}

export default Buildings;
