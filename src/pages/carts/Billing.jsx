import React from "react";
import { useSelector } from "react-redux";

const Billing = () => {
  const carts = useSelector((state) => state.carts);

  const subTotal = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subTotal * 0.1;

  const totalBillings = subTotal + tax;

  return (
    <div className="bill-wrap">
      <div className="price-row">
        <p className="">Subtotal</p>
        <p className="">
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(subTotal)}
        </p>
      </div>
      <div className="price-row">
        <p className="">Shipping</p>
        <p className="">
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(tax)}
        </p>
      </div>
      <div className="price-row price-total">
        <p className="">Total</p>
        <p className="">
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(totalBillings)}
        </p>
      </div>
      <button className="checkout">Proceed to Checkout</button>
    </div>
  );
};

export default Billing;
