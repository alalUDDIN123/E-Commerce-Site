import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from './AuthContext'

function PrivatesRoute({children}) {

    const {isAuth}= useContext(AuthContext)
    console.log(isAuth);
    if(!isAuth)
    {
       return <Navigate to='/signin'/>
    }
  return children
}

export default PrivatesRoute
