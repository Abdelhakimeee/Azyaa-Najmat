import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Shop.css'


function Shop() {
  const [products, setProducts]= useState([]);
  const navigate = useNavigate();
  

  useEffect(()=>{
    getProducts();
},[]);

  const getProducts = async()=>{
        try {
            let result = await fetch('http://localhost:5300/products');
            result = await result.json();
            result.sort((a,b)=> b._id.localeCompare(a._id));
            setProducts(result);
        }catch (error){
            console.error('Error fetching product:',error);
        }   
    }

    const searchHandle = async(event)=>{
      let key = event.target.value;
      if (key){
          try {
              
          let result = await fetch(`http://localhost:5300/search/${key}`);
          result = await result.json()
          if(result){
              setProducts(result)
          }
          }catch (error){
              console.error("Error searching products:",error);
          }
      }else {getProducts()}
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
            <li><img src={`http://localhost:5300/${item.img}`} alt='Product Photo ' /></li>
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