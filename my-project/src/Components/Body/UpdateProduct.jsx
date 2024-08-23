import React,{useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddUpdate.css';


const UpdateProduct= ()=>{
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async()=>{
        try {
            let result = await fetch(`http://localhost:5300/product/${params.id}`);
            result = await result.json();
            setImg(result.img);
            setPrice(result.price);
            setName(result.name);
            setText(result.text);
        }catch (error){
            console.error("Error fetching product details:",error)
        }

    }
    const Update = async()=>{
        let result = await fetch(`http://localhost:5300/product/${params.id}`,{
            method: 'PUT',
            body:JSON.stringify({img, price, name, text}), 
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result){
            navigate('/adming')
        }

    }

    const toAdminCompo =()=>{
        navigate('/adming')
    }

    

  return (
    <div className='box'>
        <h4 className='title'>Update Product</h4>
        {/* <input className='inputBox' type="text" placeholder='Enter product img' 
            value={img} onChange={(e)=>{ setImg(e.target.value)}}
        /> */}
        <input className='inputBox' type="text" placeholder='Enter product price' 
            value={price} onChange={(e)=>{ setPrice(e.target.value)}}
        />
        <input className='inputBox' type="text" placeholder='Enter product name' 
            value={name} onChange={(e)=>{ setName(e.target.value)}}
        />
        <input className='inputBox' type="text" placeholder='Enter product text' 
            value={text} onChange={(e)=>{ setText(e.target.value)}}
            maxLength={35}
        />

        <button className='appButton' onClick={Update}>Update</button>
        <button className='appButton' onClick={toAdminCompo}>Adming</button>

    </div>

  )
}

export default UpdateProduct;