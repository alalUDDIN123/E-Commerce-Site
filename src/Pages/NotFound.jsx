import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundstyle=
{
    width:"37%",
    height:'35vh',
    margin:'20px auto',
    padding:'2%'
    // border:'2px solid black'
}
function NotFound() {
  return (
    <div style={NotFoundstyle}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGSurC1dTDHrFf8hCLI2W3T8655CtiuPwQQ&usqp=CAU" alt="Not Found" 
       style={{width:'100%',height:'100%'}}/>
       <h3>Sorry ! The Page You Are Looking Is Not Found <Link to='/'>Go Home</Link></h3>
    </div>
  )
}

export default NotFound
