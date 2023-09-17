import React from 'react'
import LogoWhite from '../../assets/kasa-logo-white.svg';
import './footer.scss';

export default function Footer() {
  return (
  <footer>
    <div className='footer-container'>
    <div className='footer'>  
        <img src={LogoWhite} alt='Logo de Kasa' className='kasa-logo-white'/>
        <p className='footer_text'>© 2023 Maxime Jouffrey. All rights reserved</p>
    </div>
    </div>
  </footer>
  )
}
