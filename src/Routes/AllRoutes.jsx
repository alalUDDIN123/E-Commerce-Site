import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import AboutUs from "../Pages/About";
import FaqPage from "../Pages/FAQ";
import ContactUs from "../Pages/Contact";
import NotFound from '../Pages/NotFound';
import SinglePage from '../Pages/SinglePage';
import ShoppingCart from '../Pages/ShoppingCart';
import SigninPage from '../Pages/SigninPage';
import PrivatesRoute from '../Context/PrivatesRoute';


function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <PrivatesRoute>
                        <Home />
                    </PrivatesRoute>
                } />
                <Route path="/products" element={

                    <PrivatesRoute>
                        <Products />
                    </PrivatesRoute>
                } />
                <Route path='/products/:id' element={
                    <PrivatesRoute>
                        <SinglePage />
                    </PrivatesRoute>
                }></Route>
                <Route path="/about" element={<AboutUs />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path='/shoppingcart' element={
                    <PrivatesRoute>
                        <ShoppingCart />
                    </PrivatesRoute>
                }></Route>
                <Route path='/signin' element={<SigninPage />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes