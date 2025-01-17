import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.productId === action.payload.id
      );

      if (existingProduct) {
        toast(`"${action.payload.name}" already exists in cart.`, {
          className: "custom-toast",
        });
      } else {
        state.push({
          ...action.payload,
          productId: action.payload.id, // Ensure consistency
          quantity: 1,
        });
        toast("Added to cart.", {
          className: "custom-toast",
        });
      }
    },

    // Increase quantity
    increaseQuantity: (state, action) => {
      const product = state.find(
        (product) => product.productId === action.payload
      );
      if (product) {
        product.quantity++;
      }
    },

    // Decrease quantity
    decreaseQuantity: (state, action) => {
      const product = state.find(
        (product) => product.productId === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity--;
      } else if (product && product.quantity === 1) {
        // Remove product if quantity is 1
        return state.filter((product) => product.productId !== action.payload);
      }
    },

    // Remove from cart
    removeFromCart: (state, action) => {
      const product = state.find(
        (product) => product.productId === action.payload
      );
      if (product) {
        toast(`${product.name} removed from cart.`, {
          className: "custom-toast",
        });
      }
      return state.filter((product) => product.productId !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
