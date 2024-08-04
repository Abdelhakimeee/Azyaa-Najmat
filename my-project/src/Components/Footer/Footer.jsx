import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp, faFacebook, faTelegram, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';



function Footer() {
  return (
    <div className='footer'>

      <div className='foot-logo-p'>
        <img className='logoImg' src="./logoPage.jpg" alt="logo" />
        <p>amaile-for-the-@gmail.com</p>
      </div>
      
      <div className='socialMedia'>
        <a href=""><FontAwesomeIcon className='icons' icon={faLocationDot} />Adress for stor X</a>
        <a href=""><FontAwesomeIcon className='icons' icon={faWhatsapp} />0772326384</a>
        <a href=""><FontAwesomeIcon className='icons' icon={faPhoneVolume} />0772326384</a>
        <a href=""><FontAwesomeIcon className='icons' icon={faFacebook} />أزياء النجمات</a>
        <a href=""><FontAwesomeIcon className='icons' icon={faInstagram} />أزياء النجمات</a>
        <a href=""><FontAwesomeIcon className='icons' icon={faTelegram} />أزياء النجمات + add the "Scan QR code" </a>
    
      </div>
      



    </div>
  )
}

export default Footer





