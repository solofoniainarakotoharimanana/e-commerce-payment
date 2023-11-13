import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};
export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addTocart(state, action) {
      console.log(action.payload);
      const item = state.productData.find((p) => p._id === action.payload._id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteFromCart(state, action) {
      state.productData = state.productData.filter(
        (product) => product.id !== action.payload.id
      );
    },
    resetCart(state, action) {
      state.productData = [];
    },
  },
});

export const { addTocart } = bazarSlice.actions;
export default bazarSlice.reducer;
