
import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

function AuthContextProvider({children}) {
    const [isAuth,setIsAuth]= useState(false);
    function toggleAuth()
    {
        setIsAuth(!isAuth)
    }
  return (
    <AuthContext.Provider value={{isAuth, toggleAuth}}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
