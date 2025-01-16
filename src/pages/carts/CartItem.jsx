import React from 'react'
import { useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/features/carts/cartSlice";
import { IoBagRemoveOutline } from 'react-icons/io5';

const CartItem = ({item}) => {

    const { id, name, price, image, quantity } = item || {};

    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
      dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        dispatch(decreaseQuantity(id));
      } else {
        handleRemoveFromCart();
      }
    };

    const handleRemoveFromCart = () => {
      dispatch(removeFromCart(id));
    };
  return (
    <div className="cart">
      <img src={image} alt="" />
      <div>
        <div className="cart-text">
          <h1>{name}</h1>
          <p>
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(price)}
          </p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="item-quantity">
          <button onClick={handleIncreaseQuantity}>+</button>
          <input type="number" readOnly value={quantity} />
          <button onClick={handleDecreaseQuantity}>-</button>
        </div>
        <button onClick={handleRemoveFromCart} title="remove from cart">
          <IoBagRemoveOutline />
        </button>
      </div>
    </div>
  );
}

export default CartItem