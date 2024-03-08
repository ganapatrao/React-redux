import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/product/Product.Slice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;