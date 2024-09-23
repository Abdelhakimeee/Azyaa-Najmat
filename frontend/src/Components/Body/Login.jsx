import React, {useState} from 'react';
import { useNavigate,  } from 'react-router-dom';
import './AddUpdate.css'

const Login =()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async ()=>{
        const response = await fetch('http://localhost:5300/auth/login',{
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









// import React, {useState} from 'react';                                               delete
// import { useNavigate } from 'react-router-dom'; 
// import useAuth from '../../useAuth';           

// const Login = ()=>{
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const {setIsAuthenticated} = useAuth();

//     const handleSubmit = (e)=>{
//         e.preventDefault();

//         if (username === 'adminX' && password === 'adming1326') {
//             setIsAuthenticated(true);
//             navigate('/adming');
//         } else{
//             alert('The C not correct')
//         }
//     };

//     return (
//         <div className="login-container">
//           <h2>تسجيل الدخول</h2>
//           <form onSubmit={handleSubmit}>
//             <label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </label>
//             <label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </label>
//             <button type="submit">تسجيل الدخول</button>
//           </form>
//         </div>
//       );
//     };





// export default Login