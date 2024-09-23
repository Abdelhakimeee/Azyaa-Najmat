import React,{useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
import './Adming.css';

function Adming() {
    const [products, setProducts] = useState([]);

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

    const deleteProduct = async (id)=>{
        try {
            let result = await fetch(`http://localhost:5300/products/${id}`,{
                method:"Delete"
            });
            result = await result.json();
            if(result){
                getProducts();
            }
        }catch (error){
            console.error("Error deleting product", error);
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
    <div className='AdmingPage'>
        <input className='search' type="text" placeholder='Search Product' 
        onChange={searchHandle} 
        />

        <Link to={"/add"}>Add Product</Link>

        
    <table >
        <thead>
            <tr>
                <th>Url img</th>
                <th>Price</th>
                <th>Name</th>
                <th>Text</th>
                <th>Operation</th>
            </tr>
      { 
            products.map((item,index)=>
            <tr key={item._id} className='oneCard'>

                {/* {item.img && item.img.map((imgg, i)=>(     # add many photo for the same allonce ar pruduct #
                    <li key={i}>
                        <img src={`http://localhost:5300/${imgg}`}   />
                    </li>
                ))} */}
                
                <td ><img src={`http://localhost:5300/${item.img}`} alt="Photo Add correct URL" /></td>
                <td >{item.price}</td>
                <td >{item.name}</td>
                <td >{item.text}</td>
                <td>
                    <Link to={"/appdate/"+item._id}>update</Link>
                    <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                </td>

            </tr>)
        }
            </thead>
        </table>
    </div>
  )
}

export default Adming;