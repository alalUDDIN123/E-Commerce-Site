import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'


function SigninPage() {
 const {isAuth,toggleAuth}= useContext(AuthContext)
  return (
    <div style={{textAlign:'center'}}>
      <h1>Sign In Page</h1>
     <button onClick={toggleAuth}>{isAuth ? 'Sign Out' : 'Sign In'} </button>
    </div>
  )
}

export default SigninPage
