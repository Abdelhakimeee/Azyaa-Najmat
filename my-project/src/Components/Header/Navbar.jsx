import React from 'react';
import './Navbar.css';
import {Link, } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faMagnifyingGlass, faHeart,faCartShopping   } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <div className='nav'>
      <div className='bar-logos'>

        <a href="" >       
          <div className='call-us'>
            <FontAwesomeIcon className='ico' icon={faPhoneVolume}/>
          
            <p>
              CALL US
              <span> +212 772326384</span> 
            </p>
          </div>
        </a>

        <img className='logoPage' src='./logoPage.jpg' alt='Logo'  />

        <div className='call-2'>

          <FontAwesomeIcon className='ico-2' icon={faMagnifyingGlass}/>
               {/* # next time make this work */}
          <FontAwesomeIcon className='ico-2' icon={faHeart}/>         
          <FontAwesomeIcon className='ico-2' icon={faCartShopping}/>
        </div>
      </div>

      <div >
        <ul className='bar-pages'>
          <li><Link to='/review'>مراجعة العملاء</Link></li> 
          <li><a href='https://api.whatsapp.com/send?phone=212772326384' target='_blank'>
            تواصل معنا
          </a></li>
          <li><Link to='/shop'>المتجر</Link></li>
          <li><Link to='/'>الصفحة الرئيسية</Link></li>         
        </ul> 
      </div>
    </div>
  )
}

export default Navbar;