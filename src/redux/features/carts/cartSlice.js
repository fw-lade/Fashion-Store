import { createSlice } from "@reduxjs/toolkit";

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
        alert(`Product "${action.payload.name}" is already in the cart.`);
      } else {
        state.push({
          ...action.payload,
          productId: action.payload.id, // Ensure consistency
          quantity: 1,
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
      return state.filter((product) => product.productId !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
