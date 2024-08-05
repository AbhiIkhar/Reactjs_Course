import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const CartStore = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default CartStore;
