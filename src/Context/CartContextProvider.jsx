import React, { createContext, useState } from 'react'

export const CartContext= createContext()

function CartContextProvider({children}) {

    const [cartdata,setcartdata]= useState([]);
  
    function AddtoCart(x)
    {
          setcartdata([...cartdata,{...x,qty:1}])
          console.log(x);
    }
    
  return (
    <CartContext.Provider value={{cartdata,AddtoCart,setcartdata}} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
