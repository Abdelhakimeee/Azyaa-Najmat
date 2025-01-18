import React from 'react';
import './Navbar.css';
import {Link, } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume, 
  // faMagnifyingGlass, faHeart,faCartShopping    #_/C next time 
} from '@fortawesome/free-solid-svg-icons';

import {faFacebook, faTelegram} from '@fortawesome/free-brands-svg-icons'


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
        <a href='https://web.facebook.com/groups/596601425323568/' target='_blank' rel="nooper noreferrer" >
        <FontAwesomeIcon className='ico-2' icon={faFacebook} />
        </a>          
        <a href='https://t.me/azyaanajma' target='_blank' rel='nooper noreferrer'>
        <FontAwesomeIcon className='ico-2' icon={faTelegram} />
        </a>
        
        


               {/* #_/C next time make this work */}
          {/* <FontAwesomeIcon className='ico-2' icon={faHeart}/>         
              <FontAwesomeIcon className='ico-2' icon={faCartShopping}/>
              <FontAwesomeIcon className='ico-2' icon={faMagnifyingGlass} />
            */}
        </div>
      </div>

      <div >
        <ul className='bar-pages'>
                    {/* next using review   wen you do content for it       ... */}
          {/* <li><Link to='/review'>مراجعة العملاء</Link></li>  */}
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