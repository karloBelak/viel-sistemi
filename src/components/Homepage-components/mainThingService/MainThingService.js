import React, { useEffect, useRef } from "react";
import mainThingServices from "./mainThingServiceData";
import "../mainThingService/MainThingService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faSnowflake,
  faDroplet,
  faCaretRight,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { ToTop } from "../../TopFunction";

function MainThingService() {
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
    <section className="main-thing-service-section" ref={ref}>
      {mainThingServices.map((serviceGroup) => (
        <motion.div
          key={serviceGroup.id}
          id={serviceGroup.title}
          className="single-service-box"
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ delay: .3, duration: 1 }}>
          <h2>
            {serviceGroup.id === 1 ? (
              <FontAwesomeIcon icon={faFire} className="main-icons icon-fire" />
            ) : serviceGroup.id === 2 ? (
              <FontAwesomeIcon
                icon={faSnowflake}
                className="main-icons icon-snow"
              />
            ) : (
              <FontAwesomeIcon
                icon={faDroplet}
                className="main-icons icon-fan"
              />
            )}
            {serviceGroup.title}
          </h2>
          <div className="under-768px">
            <img src={serviceGroup.img} className="service-img" alt="service" />
            <div className="under-768-text-btn">
              <ul className="service-ul-list">
                {serviceGroup.serviceList.map((service, index) => (
                  <li key={index}>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="icon-right"
                    />
                    {service.service}
                  </li>
                ))}
              </ul>
              <NavLink to="/services" className='navlink-more'>
                <button className="more-services" onClick={ToTop}>
                  Više
                <FontAwesomeIcon icon={faRightLong} className="faRight" />
                </button>
              </NavLink>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default MainThingService;
