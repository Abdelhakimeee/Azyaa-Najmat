import React,{useState, useEffect, } from 'react';
import { useNavigate, } from 'react-router-dom';
import './AddUpdate.css';


function AddProduct() {
    const [img, setImg] = useState('null');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(false);
    const [productAdd , setProductAdd] = useState(false);

    const addProduct = async()=>{
        if( !img || !price || !name  ){
            setError(true);
            return false;
        }

    const formData = new FormData();
    formData.append('img', img);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('text', text);

    

    let result = await fetch('http://localhost:5300/add-product',{
        method:"POST",
        body: formData,
        // headers:{
        //     "Content-type":"application/json"
        // }
    });
    result = await result.json();
    if (result) {
        setProductAdd(true);
    }
    }

    useEffect(()=>{
        if (productAdd){

        }
    },[productAdd]);


    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/adming');
    }


  return (
    <div className='box'>
        <h4 className='title'>Add Product</h4>

        <input 
                className='inputBox' 
                type='file' 
                onChange={(e) => setImg(e.target.files[0])} // تعيين الصورة
            />
            {error && !img && <span className='invalid-input'>Enter a valid image</span>}

            <input 
                className='inputBox' 
                type='text' 
                placeholder='Enter product price'
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
            />
            {error && !price && <span className='invalid-input'>Enter price correctly</span>}

            <input 
                className='inputBox' 
                type='text' 
                placeholder='Enter product name'
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            {error && !name && <span className='invalid-input'>Enter name correctly</span>}

            <input 
                className='inputBox' 
                type='text' 
                placeholder='Enter product text'
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                maxLength={35}
            />
            {error && !text && <span className='invalid-input'>Enter text correctly</span>}

            <button className='appButton' onClick={addProduct}>Add product</button>
            <button className='appButton' onClick={handleClick}>Admin</button>


        {
        /* <input className='inputBox' type='f' placeholder='Enter product imag'
            value={img} onChange={(e)=>{setImg(e.target.value)}} />
            {error && !img &&<span className='invalid-input'>Enter name img correct</span> }

            <input className='inputBox' type='text' placeholder='Enter product price'
            value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            {error && !price &&<span className='invalid-input'>Enter pirce correct</span>}

           <input className='inputBox' type='text' placeholder='Enter product name'
            value={name} onChange={(e)=>{setName(e.target.value)}} />
            {error && !name &&<span className='invalid-input'>Enter name correct</span>}

            <input className='inputBox' type='text' placeholder='Enter product text'
            value={text} onChange={(e)=>{setText(e.target.value)}} />
            {error && !text &&<span className='invalid-input'>Enter text correct</span>}

            <button className='appButton' onClick={addProduct}>Add product</button>
            <button className='appButton' onClick={handleClick} >Adming</button>
        */}

        </div>
  )
}

export default AddProduct;