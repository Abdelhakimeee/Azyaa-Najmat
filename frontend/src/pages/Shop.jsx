import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/PagesStyle/Shop.css'
import { fetchProducts, searchProducts } from '../services/product.service';



function Shop() {
  const [products, setProducts]= useState([]);
  const navigate = useNavigate();
  

  useEffect(()=>{
    getProducts();
},[]);

  const getProducts = async () => {
    const result = await fetchProducts();
    setProducts(result);
    }

    const searchHandle = async(event)=>{
      let key = event.target.value;
      if (key) {
        const result = await searchProducts(key);
        setProducts(result);

      } else {getProducts()}
  }


  return (
    <div className='shop-page'>
      <input className='search' type='text' placeholder='   Search Product'
      onChange={searchHandle} 
      />

    <div className='card'>
      {
        products.map((item)=>
          <ul key={item._id} className='one-card'>
            <li><img src={`http://localhost:5800/${item.img}`} alt='Product Photo ' /></li>
            <li className='card-price'>{item.price}</li>
            <li className='card-name'>{item.name}</li>
            <li className='card-text'>{item.text}</li>
            
            <button className='cardButton' onClick={()=> navigate('/formShop/'+item._id)} >Shop new</button>


          </ul>
        )
      }
    </div>


    </div>
  )
}




export default Shop;