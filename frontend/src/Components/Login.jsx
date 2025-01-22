import React, {useState} from 'react';
import { useNavigate,  } from 'react-router-dom';
import './AddUpdate.css'

const Login =()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async ()=>{
        const response = await fetch('http://localhost:5800/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name, password})
        });

        const data = await response.json();
        if (response.ok){
            localStorage.setItem('token', data.token);
            navigate('/adming')
        }else { 
            alert(data.message)
        }
    }

    return (
        <div className='box'>

            <h4 className='title'>Login</h4>

            <input className='inputBox' type='text' value={name} placeholder='User name'
            onChange={(e)=> setName(e.target.value)} />
            <input className='inputBox' type='text' value={password} placeholder='Password'
            onChange={(e)=> setPassword(e.target.value)}/>

            <button className='appButton' onClick={handleLogin}>Login</button>
            
        </div>
    )
}
export default Login;
