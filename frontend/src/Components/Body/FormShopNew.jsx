import React,{useState, useEffect} from 'react'
import { useNavigate, useParams  } from 'react-router-dom';
import './AddUpdate.css';

const FormShopNew = ()=>{
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');

    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [taille, setTaille] = useState('');
    const [adress, setAdress] = useState('');

    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        if(params.id) {
        getProductDetails();        
        } else {
            console.error('Product ID is missing or undefined');
        }
    },[params.id])


    const getProductDetails = async()=>{
        try {
            let result = await fetch(`http://localhost:5300/product/${params.id}`);
            result = await result.json();

            setImg(result.img);
            setPrice(result.price);
            setName(result.name);

        }catch (error){
            console.error("Error fetching product details:",error)
        }

    }


    //                                if checkinfo is false 
    const checkinfo =()=>{
        if (!userName || !phoneNumber || !taille || !adress){
            setError(true);
            return false;
        } return true;
    }
    const WhatsClick = ()=>{
        if (checkinfo()){

            const whatsappUrl =`https://api.whatsapp.com/send?phone=212772326384&text=${encodeURIComponent(
                `Hello, I am interested in the following product:\n\nProductName: ${name}\nPrice: ${price}\nImage: ${`http://localhost:5300`}/${img}\nUserNAme: ${userName}\nPhone: ${phoneNumber}\ntaille: ${taille}\nAdress: ${adress}`
              )}`;
                  window.open(whatsappUrl, '_blank', 'nooper,noreferrer');
                  navigate('/shop')      
        }
    }


    return (
        <div className='box'>
            <h4 className='title'>اضف المعلومات</h4>

            <input className='inputBox' type='text' placeholder='ادخل الاسم الشخصي'
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
             />
             {error && !userName &&<span className='info-invalid'>من فضلك أدخل الاسم الشخصي</span>}

             <input className='inputBox' type='text' placeholder='ادخل رقم الهاتف'
             value={phoneNumber} 
             onChange={(e)=> setPhoneNumber(e.target.value)}
             />
             {error && !phoneNumber &&<span className='info-invalid'>من فضلك ادخل رقم الهاتف</span>}

             <input className='inputBox' type='text' placeholder='ادخل رقم المقاس'
             value={taille} 
             onChange={(e)=> setTaille(e.target.value)}
             />
             {error && !taille &&<span className='info-invalid'> L  XL  2XL  3XL من فضلك ادخل القياس</span>}

             <input className='inputBox' type='text' placeholder='ادخل رقم العنوان و المدينة'
             value={adress} 
             onChange={(e)=> setAdress(e.target.value)}
             />
             {error && !adress &&<span className='info-invalid'>من فضلك ادخل المدينة و العنوان</span>}

        
            
             <button className='appButton' onClick={WhatsClick} >ارسل المعلومات</button>

        </div>
    )


}

export default FormShopNew;

