import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const getProducts = axios
//   .get("https:https://fakestoreapi.com/products")
//   .then((data) => {
//     return data.json();
//   })
//   .catch((ex) => {
//     console.log(ex);
//   });

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    cart: [],
  },
  reducers: {
    callApi: (state, action) => {
      // const cartData = { ...action.payload, count: 1 };
      state.data = action.payload;
    },

    addToCart: (state, action) => {
      console.log("Add", action.payload);

      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.cart.push({ ...action.payload, count: 1 });

      } else {
        state.cart[index] = {
          ...state.cart[index],
          count: state.cart[index].count + 1,
        };

      }
      // state.cart = state.result + action.payload;
      console.log("cart", state.cart)
    },
  },
});

// console.log("Slice: ", calculatorSlice);
export const { addToCart, callApi } = ProductSlice.actions;
export default ProductSlice.reducer;
// export const fetchData = () => async () => {
//   try {
//     const response = await axios.get(`https://fakestoreapi.com/products`);
//     dispatch(callApi(response.data));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
