import { createSlice } from "@reduxjs/toolkit";

// const productId = 1;

const initialState = [
  {
    id: 1,
    name: "Product 1",
    price: 50,
    category: "Gadget",
    image:
      "https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    date: "2022-10-10",
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
    date: "2022-10-10",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: state.length > 0 ? state[state.length - 1].id + 1: 1,
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
