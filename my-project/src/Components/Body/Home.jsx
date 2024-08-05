import React from 'react';
import { Link,  } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='homePage' >
      <div className='textHome'>
        <h1>أزياء النجمات</h1>
        <h3>كوني نجمة من نجومنا</h3>
        <button><Link to='shop'>تسوق الآن</Link></button>
      </div>
      
    </div>
  )
}

export default Home;