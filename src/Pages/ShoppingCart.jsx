
import { useContext,useEffect,useState } from 'react';
import { CartContext } from '../Context/CartContextProvider';
import IncDec from './IncDec';
import "./ShoppingCart.css";


function ShoppingCart() {
    const { cartdata, setcartdata } = useContext(CartContext);
    const [price, setPrice] = useState(0);

    // const totleprice = cartdata.reduce((price, item) => price + item.price, 0);

    function qtyModify(id, elem) {

        const updatedData = cartdata.map((item) =>
        item.id === id ? { ...item, qty: item.qty + elem } : item
      );
      setcartdata(updatedData);
      handlePrice();
    }

    
      const handlePrice = () => {
        let ans = 0;
        cartdata.map((item) => (ans += item.price * item.qty));
        setPrice(ans);
      };
      useEffect(() => {
        handlePrice();
      });


    return (
        <div className="shopping_cart">

            <div>
                {
                    cartdata.map((item) => (
                        <div className="shopping_item" key={item.id}>
                            <img className="shopping_item_image" src={item.image} alt={item.title} />
                            <div className="shopping_product_details">
                                <h2>{item.brand}</h2>
                                <h4>{item.title}</h4>
                                <p>Category : #{item.category}</p>
                                <h4>₹ {item.price * item.qty}</h4>
                            </div>
                            <div>
                                <IncDec qtyModify={qtyModify} id={item.id} />
                            </div>

                          
                        </div>
                    ))
                }

            </div>

            <div className="total_price">
                <h3>Total Price : ₹ {price}</h3>
            </div>

            <div className="total_price">
                <button>PLACE ORDER</button>
            </div>

        </div>
    )
}

export default ShoppingCart;


// brand
// category
// id
// image
// price
// title
