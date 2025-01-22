import React from 'react';
import {useLocation, Navigate} from "react-router-dom";

const PrivateRoute = ({element})=> {
    const token = localStorage.getItem('token');
    const location = useLocation();

    return token ? element : <Navigate to='/login' state={{from:location}} />;
        
    
}
export default PrivateRoute;