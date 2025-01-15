import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import cartReducer from './features/carts/cartSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer
  },
});

export default store;
