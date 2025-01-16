import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Nike Airforce 1 '07",
    price: 30000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
    category: "men's",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet inventore ratione repudiandae repellat corrupti nobis explicabo odio. Quisquam, fugiat.",
  },
  {
    id: 2,
    name: "Air Jordan 1 Mid",
    price: 15000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9921d678-ed65-49c6-bdcb-e85bebeb7c46/AIR+JORDAN+1+MID.png",
    category: "shoes",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet inventore ratione repudiandae repellat corrupti nobis explicabo odio. Quisquam, fugiat.",
  },
  {
    id: 3,
    name: "Air Jordan 1 Low",
    price: 50000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89b1d290-5e2a-44a5-a260-2e9d628ca670/WMNS+AIR+JORDAN+1+LOW.png",
    category: "women",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet inventore ratione repudiandae repellat corrupti nobis explicabo odio. Quisquam, fugiat.",
  },
  {
    id: 4,
    name: "Nike React Vision",
    price: 190000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b3897a0e-564d-44b3-9438-f05761af98e2/NIKE+REACT+VISION+GS.png",
    category: "kids",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet inventore ratione repudiandae repellat corrupti nobis explicabo odio. Quisquam, fugiat.",
  },
  {
    id: 5,
    name: "Nike Alphafly 3",
    price: 180000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99265b63-c256-4c7d-ba49-5916a805e699/W+AIR+ZOOM+ALPHAFLY+NEXT%25+3.png",
    category: "shoes",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet inventore ratione repudiandae repellat corrupti nobis explicabo odio. Quisquam, fugiat.",
  },
  {
    id: 6,
    name: "Nike Killshot 2",
    price: 20000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/465279d3-808d-47d7-b5d9-8dcb4e6f9155/W+KILLSHOT+2.png",
    category: ["men's", "shoes", "kids", "women"],
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet inventore ratione repudiandae repellat corrupti nobis explicabo odio. Quisquam, fugiat.",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
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
