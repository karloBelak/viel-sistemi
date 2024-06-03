import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import {useState } from 'react'
import "../contact-form/ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgjqrk");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setShowSuccessMessage(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 6000);
    }
  };


  return (
    <form onSubmit={handleFormSubmit} className="contact-form">
      <label className="contact-label">Ime i prezime<span className="required">obavezno ispuniti*</span></label>
      <input type="text" name="name" id='name' className="input-field" required  onChange={handleInputChange} value={formData.name} />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label className="contact-label">Email<span className="required">obavezno ispuniti*</span></label>
      <input type="email" name="email" id='email' className="input-field" required onChange={handleInputChange} value={formData.email}/>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className="contact-label">Telefon/Mobitel<span className="required">obavezno ispuniti*</span></label>
      <input type="tel" name="phone" id='phone' className="input-field" required onChange={handleInputChange} value={formData.phone}/>
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
      <label className="contact-label">Poruka<span className="required">obavezno ispuniti*</span></label>
      <textarea name="message" className="input-field message-field" required onChange={handleInputChange} value={formData.message}/>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className="btn-thx-message-box">
        {showSuccessMessage ? <p className='back-thx-message show'>Poruka je uspješno poslana, odgovorit ćemo u najkraćem roku. Hvala.</p> : <p className="back-thx-message none">
        Poruka je uspješno poslana, odgovorit ćemo u najkraćem roku. Hvala.
        </p>}
        <input type="submit" value="Pošalji" className="send-btn" disabled={state.submitting}/>
      </div>
    </form>
  );
}

export default ContactForm;
