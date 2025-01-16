import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './cart.css'
import CartItem from "./CartItem";

const CartPage = () => {
  const carts = useSelector((state) => state.carts);
  console.log(carts);
  return (
    <div className="cartPage-wrapper">
      <div className="cart-wrapper">
        {carts.length > 0 ? (
          carts.map((item, index) => <CartItem item={item} key={index} />)
        ) : (
          <div className="emptyCart">
            <h1>No products in cart.</h1>
            <p>
              Go to <Link to="/products"> products page</Link> to shop
            </p>
          </div>
        )}
      </div>
      <h1>Billing Information</h1>
    </div>
  );
};

export default CartPage;
