import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { Link } from "react-router-dom";
 
import { CartContext } from '../Context/CartContextProvider';

// const getProduct = (id) => {
//     return fetch(`http://localhost:308/api/data/${id}`)
//         .then((response) => response.json());
// }


// const {cartdata,AddtoCart}= useContext(CartContext)

// console.log(cartdata)

function SingleProduct() {
    const { AddtoCart}= useContext(CartContext)
    const [product, setProduct] = useState({});
    const params = useParams();


    useEffect(() => {
        getProduct(params.id)
            .then((data) => {
                // console.log(data);
                setProduct(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [params.id]);


    const getProduct = (id) => {
        return fetch(`http://localhost:308/api/data/${id}`)
            .then((response) => response.json());
    }
    
    
    
    
    // console.log(cartdata)

    // useEffect(() => {
    //     getProduct(params.id)
    //         .then((data) => {
    //             // console.log(data);
    //             setProduct(data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [params.id]);

    // const saveToLocalStorage = () => {
    //     localStorage.setItem("cart", JSON.stringify(product));
      
    // }

  

    return (
        <div className="single_product_page">
            {
                product && (
                    <div className="single_item" key={params.id}>
                        <img className="item_image" src={product.image} alt={product.title} />
                        <div className="product_details">
                            <h1>{product.brand}</h1>
                            <h3>{product.title}</h3>
                            <p>Category : #{product.category}</p>
                            <h4>??? {product.price}</h4>
                            <button className="add_to_card" onClick={()=>AddtoCart(product)}>ADD TO CART</button>
                        </div>
                    </div>
                )
            }

            <Link to="/products"><button className="back_to_products">GO BACK</button></Link>
        </div>
    )
}

export default SingleProduct


// brand
// category
// id
// image
// price
// title
