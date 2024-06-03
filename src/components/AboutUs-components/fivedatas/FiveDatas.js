import React from 'react'
import './FiveDatas.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

const handleMailClick = () => {
    window.location.href = 'mailto:vielsistemi.hr@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+385977986103';
  };

function FiveDatas() {
  return (
    <section className='about-section-datas'>
{/* kontakt podaci i radno vrijeme */}
        <div className='about-contact'>
            
            <div className='single-data-box'>
                <FontAwesomeIcon icon={faPhone} className='data-icon'/>
                <div className='data-name-data'>
                    <h6 className='data-name'>Nazovite nas</h6>
                    <button className="data-btn" onClick={handlePhoneClick}>+385 977986103</button>
                </div>
            </div>

            <div className='single-data-box'>
                <FontAwesomeIcon icon={faEnvelope} className='data-icon'/>
                <div className='data-name-data'>
                    <h6 className='data-name'>Pošaljite mail</h6>
                    <button className="data-btn" onClick={handleMailClick}>vielsistemi.hr@gmail.com</button>
                </div>
            </div>

            <div className='single-data-box'>
            <FontAwesomeIcon icon={faClock} className='data-icon'/>
                <div className='data-name-data'>
                    <h6 className='data-name'>Radno vrijeme</h6>
                    <p>pon-pet: 8:00-16:00</p>
                </div>
            </div>
        </div>


{/* podaci koje stranica mora imat */}
        <div className='about-info-data'>

            <div className='info-data-box'>
                <strong>Naziv:</strong>
                <p>Viel sistemi d.o.o</p>
            </div>

            <div className='info-data-box'>
                <strong>Direktor:</strong>
                <p>Kristijan Brkić</p>
            </div>

            <div className='info-data-box'>
                <strong>Adresa:</strong>
                <p>ulica hrvatskih branitelja 1/B<br></br> 10431 Strmec</p>
            </div>

            <div className='info-data-box'>
                <strong>OIB:</strong>
                <p>86038198248</p>
            </div>

            <div className='info-data-box'>
                <strong>Banka:</strong>
                <p>Erste banka</p>
            </div>

            <div className='info-data-box'>
                <strong>IBAN:</strong>
                <p>HR1224020061101094536</p>
            </div>

        </div>

    </section>
  )
}

export default FiveDatas