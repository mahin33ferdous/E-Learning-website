import React, { Children, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const{user}=useContext(AuthContext)
    const location=useLocation();
  if(!user){
    return <Navigate to='/login' state={{fromfrom: location}}replace></Navigate>
  }
  return children;
};

export default PrivateRoutes;