import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return <h1>loading......</h1>
    }
    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from: location}} replace='true'></Navigate>
    }
};

export default PrivateRoute;