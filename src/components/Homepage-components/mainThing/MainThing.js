import React, {useEffect, useRef} from 'react'
import '../mainThing/MainThing.css';
import { ToTop } from '../../TopFunction';
import MainThingService from '../mainThingService/MainThingService';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation, useInView } from "framer-motion";

function MainThing() {
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
    <motion.section className='main-thing-section' ref={ref}
    variants={{
      hidden: { opacity: 0, y: 80 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ delay: .3, duration: 1 }}
    >
         <div className='mainThing-cover-box-text'>
            <p className='mainThing-cover-text'>Pružamo vrhunske usluge u području instalacija  <i><strong>grijanja, klimatizacije i vodoinstalacija.</strong> </i> Sigurnost, kvaliteta i stručnost glavni su stupovi naše ponude. Mi smo Vaš pouzdan partner za sadašnje i buduće projekte. Obratite nam se s povjerenjem.</p>
            <NavLink to='/contact' className='contact-btn' onClick={ToTop}>
              <button>Kontakt</button>
            </NavLink>     
        </div>

{/* komponenta s 3 glavne stvari kojima se firma bavi */}
        <MainThingService/>
        
    </motion.section>
  )
}

export default MainThing