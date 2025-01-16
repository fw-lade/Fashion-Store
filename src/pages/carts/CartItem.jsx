import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/features/carts/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

const CartItem = ({ item }) => {
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
      <div className="cartimg-button">
        <img src={image} alt="" />
      </div>
      <div className="text-btns">
        <div className="cart-text">
          <h1>{name}</h1>
          <p>
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(price * quantity)}
          </p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="item-quantity">
          <button onClick={handleDecreaseQuantity}>
            <FaMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={handleIncreaseQuantity}>
            <FaPlus />
          </button>
        </div>
      </div>
      <button
        onClick={handleRemoveFromCart}
        title="remove from cart"
        className="remove-item"
      >
        <GoTrash />
      </button>
    </div>
  );
};

export default CartItem;
