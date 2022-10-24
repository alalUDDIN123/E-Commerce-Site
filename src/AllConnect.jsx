import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'

function AllConnect() {
  return (
    <>
       <Navbar />
       <AllRoutes />
      <Footer />
    </>
  )
}

export default AllConnect
