import React from 'react'
import './NavBarHeader.css'
import { NavLink } from 'react-router-dom'


function NavBarHeader() {


  return (
    <nav className='navbar-header'>
        <ul className="ul">
            <li><NavLink to="/" >Naslovna</NavLink></li>
            <li><NavLink to="/about">O nama</NavLink></li>
            <li><NavLink to="/services" >Usluge</NavLink></li>
            <li><NavLink to="/contact" >Kontakt</NavLink></li>          
        </ul>
        <div className="underline-navbar"></div>
    </nav>  
  )
}

export default NavBarHeader