import React from 'react'
import '../contact-text/ContactSection.css'
import ContactForm from '../contact-form/ContactForm'
import {
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactSection() {

  const handlePhoneClick = () => {
    window.location.href = 'tel:+385977986103';
  };


  return (
    <section className='contact-section'>

{/* uvodni tekst kontakt forme */}
      <div className='contact-heading'>

        <div    className='contact-section-heading-box'>
          <div className='contact-underline'></div>
          <h3>Kontaktirajte nas</h3>
        </div>

        <p>Trebate naše usluge ili imate pitanja? <strong>Ispunite obrazac</strong> i javite nam se putem maila.  Rado ćemo odgovoriti na vaša pitanja...</p>

        <div className='contact-icons-box'> 
          <FontAwesomeIcon icon={faEnvelope} className="contact-icons" />
        </div>

        <p>...ili nas nazovite, ukoliko se ne javimo, nazvat ćemo Vas naknadno.</p>

        <div className='contact-icons-box-phone'> 
          <FontAwesomeIcon icon={faPhone} className="contact-icons"/>
          <button className='contact-phone-number' onClick={handlePhoneClick} >+385 977986103</button>
        </div>
        
      </div>
{/* kontakt forma u zasebnoj komponenti */}
      <ContactForm/>

    </section>
  )
}

export default ContactSection