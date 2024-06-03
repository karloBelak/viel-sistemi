import React from 'react'
import './About.css'
import Quote from '../../components/AboutUs-components/quote/Quote'
import Cooperants from '../../components/AboutUs-components/kooperants/Cooperants'
import FiveDatas from '../../components/AboutUs-components/fivedatas/FiveDatas'

function About() {
  return (
    <section className='about-section'>
        <h3 className='about-section-heading'>O nama</h3>
      <div className='about-text'>
        <div className='about-text-heading'>
          <div className='about-underline'></div>
          <h3>Tko smo mi?</h3>
        </div>
        <div className='about-text-box'>
          <p className='about-text-paragraf'>
          Naša tvrtka specijalizirana je za instalacije grijanja i klimatizacije! Mi smo tim iskusnih profesionalaca, posvećenih pružanju najboljih rješenja za sve vaše projekte. Naši radnici su iskusni stručnjaci koji su upoznati sa svim modernim tehnologijama i alatima potrebnim za kvalitetne instalacije.
            <br></br>
            <br></br>
          Ono što nas izdvaja je naša sposobnost da se udružimo s pouzdanim kooperantima. Kroz čvrsto partnerstvo s njima, spajamo naše znanje i resurse kako bismo osigurali da svaki detalj vašeg projekta bude izveden s vrhunskom preciznošću i kvalitetom. Bez obzira na složenost vašeg projekta, možete imati potpuno povjerenje u nas kao vašeg pouzdanog partnera koji će vam pružiti najbolje rješenje za vaše potrebe.

            </p>
        </div>  
      </div>
      <Quote/>
      <div className='about-text'>
        <div className='about-text-heading'>
          <div className='about-underline'></div>
          <h3>Naša misija</h3>
        </div>
        <div className='about-text-box'>
          <p className='about-text-paragraf'>
          Naša misija je jednostavna, ali snažna - pružiti našim klijentima maksimalno zadovoljstvo kroz vrhunsku uslugu i izvedbu. Kroz našu posvećenost stručnosti i izvrsnosti, nastojimo postaviti standarde u industriji i biti prepoznati kao jedni od najboljih u području našeg zanimanja.
          <br></br>
          <br></br>
          Naš cilj nije samo izvršiti posao - želimo ostvariti dugoročne odnose s klijentima, temeljene na povjerenju, transparentnosti i kvaliteti usluge. Vaše povjerenje je naša najveća nagrada, i trudimo se svakodnevno opravdati vaše povjerenje kroz izvanrednu uslugu i pažljivo prilagođene rješenja.
          <br></br>
          <br></br>
          Nastojimo i neprestano se usavršavati i pratiti najnovije trendove i tehnologije kako bismo osigurali da svaki projekt bude izveden s najvišim standardima kvalitete i efikasnosti. Vaše potrebe su naša inspiracija, i radujemo se što možemo biti vaš partner u ostvarivanju vaših projekata.
          </p>
        </div>  
      </div>
      <FiveDatas/>
      <Cooperants/>

    </section>
    
  )
}

export default About