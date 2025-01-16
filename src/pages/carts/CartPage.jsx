import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.css";
import CartItem from "./CartItem";
import Billing from "./Billing";

const CartPage = () => {
  const carts = useSelector((state) => state.carts);
  console.log(carts);
  return (
    <>
      <div className="header">
        <h1 style={{ textAlign: "left", marginBottom: "24px" }}>Cart</h1>
      </div>
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
        <div className="billing-info">
          <h1>Billing Information</h1>
          <Billing />
        </div>
      </div>
    </>
  );
};

export default CartPage;
