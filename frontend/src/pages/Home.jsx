import React from 'react';
import { Link,  } from 'react-router-dom';
import '../Styles/PagesStyle/Home.css';

function Home() {
  return (
    <div>

    <div className='homePage' >
      <div className='textHome'>
        <h1>أزياء النجمات</h1>
        <h3>كوني نجمة من نجومنا</h3>
        <Link to='shop'><button>تسوق الآن</button></Link>
      </div>     
    </div>

     {/* ____2 */}
        <h2 className='title-home-2'>لأنك تستحقين الأفضل</h2>
    <div className='home-2'>
        
        <div className="info-section">
          <p>الضمان</p>
          <span>جودة مضمونة واسترجاع فوري</span>
        </div>

        <div className="info-section">
          <p>التوصيل</p>
          <span>توصيل آمن وسريع إلى منزلك</span>
        </div>

        <div className="info-section">
          <p>الثقة</p>
          <span>المنتوج يصلك كما في الصورة</span>
        </div>
    </div>
  


        </div>
  )
}

export default Home;