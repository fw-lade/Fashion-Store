import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Billing = () => {
  const carts = useSelector((state) => state.carts);

  const subTotal = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subTotal * 0.1;

  const totalBillings = subTotal + tax;

  const navigate = useNavigate();

  const handlebilling = () => {
    if(totalBillings > 0){
      navigate("/billing");
    }else{
      toast('cart is empty', {
        className: 'custom-toast'
      })
    }
  };

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
      <button onClick={handlebilling} className="checkout">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Billing;
