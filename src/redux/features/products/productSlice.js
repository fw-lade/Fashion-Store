import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/productsData.json";



const productSlice = createSlice({
  name: "products",
  initialState: productsData,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
        ...action.payload,
      });

    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
