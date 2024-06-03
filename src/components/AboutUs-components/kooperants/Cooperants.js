import React from 'react'
import './Cooperants.css'
import cooperants from './data'

function Cooperants() {
  return (
    <section className='cooperants-section'>
        <h3 className='cooperants-heading'>Kooperanti</h3>
        <div className='cooperants-box'>
        {cooperants.map((cooperant) => (
              <div key={cooperant.id} className='cooperant-item'>
                <img src={cooperant.img} alt={cooperant.name} className='cooperant-image' />
                <h4 className='cooperant-name'>{cooperant.name}</h4>
              </div>
            ))}
        </div>
    </section>
  )
}

export default Cooperants