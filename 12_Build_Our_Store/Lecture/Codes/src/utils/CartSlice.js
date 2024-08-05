import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    list: [],
    quantity: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.list.push(action.payload);
    },
    deleteItems: (state, action) => {
      state.list.pop();
    },
    clearItems: (state, action) => {
      state.list.length = 0;
    },
  },
});

export const { addItems, deleteItems, clearItems } = CartSlice.actions;

export default CartSlice.reducer;
