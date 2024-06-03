import React from "react";
import {  NavLink } from 'react-router-dom';
import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from './viel-sistemi-logo.png'

function Header() {
  const handleMailClick = () => {
    window.location.href = 'mailto:vielsistemi.hr@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+385977986103';
  };


  return (
    <header className="header">
{/* logo */}
      <div className="logo">
        <NavLink to="/" className='logo-link'><img src={logo} alt='logo' className='logo-img'/><h3>VIEL SISTEMI</h3></NavLink>
      </div>
{/* kontakt telefon i mail */}
      <div className='icon-div'>
        <div className='contact-box'>
          <button className='contact-phone-number' onClick={handlePhoneClick} ><FontAwesomeIcon icon={faPhone} className="header-icons"/>+385 977986103</button>     
        </div>
        <div className='contact-box'>
          <button className='contact-email' onClick={handleMailClick}><FontAwesomeIcon icon={faEnvelope} className="header-icons" />vielsistemi.hr@gmail.com</button>
        </div>  
      </div>
    </header>   
  );
}

export default Header;
