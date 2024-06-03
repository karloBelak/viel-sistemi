import React, { useEffect, useRef } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Contact from "./pages/ContactPage/Contact";
import About from "./pages/AboutPage/About";
import Services from "./pages/ServicePage/Services";
import HomePageCover from "./components/Homepage-components/homepagecover/HomePageCover";
import Footer from "./components/Footer/Footer";
import NavBarHeader from "./components/Header-navbar/NavBarHeader";
import { motion, useAnimation, useInView } from "framer-motion";

function App() {
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
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.3, duration: 1.5 }}
      >
        <Header />
        <NavBarHeader />
        <HomePageCover />
      </motion.div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
