import React, { useContext } from 'react';
import { NavLink,Link } from "react-router-dom";
import { CartContext } from '../Context/CartContextProvider';
import "./Navbar.css";

const links = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/products",
        title: "Products"
    },
    {
        path: "/about",
        title: "About Us"
    },
    {
        path: "/faq",
        title: "FAQ"
    },
    {
        path: "/contact",
        title: "Contact Us"
    },
    {
        path: "/signin",
        title: "Sign in"
    }
]

function Navbar() {
    const {cartdata} =useContext(CartContext)
    return (

        <div className="navbar" >
            {/* All the routes of the path */}
            {
                links.map((item) => (
                    <NavLink className="all_routes" key={item.path} to={item.path} >{item.title}</NavLink>
                ))
            }
            {/* Cart icon */}
            <div className="display_cart">
                <Link to="/shoppingcart"><img className="cart_icon" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="Cart__icon" /></Link>
                <p className="cart_total_length">{cartdata.length}</p>
            </div>
        </div >
    )
}

export default Navbar