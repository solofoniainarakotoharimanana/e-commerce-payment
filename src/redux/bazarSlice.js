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
      console.log(action.payload);
      state.productData = state.productData.filter(
        (product) => product._id !== action.payload._id
      );
    },
    resetCart(state, action) {
      state.productData = [];
    },
    incrementQuantity(state, { payload }) {
      const item = state.productData.find((p) => p._id === payload._id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity(state, { payload }) {
      const item = state.productData.find((p) => p._id === payload._id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          item.quantity = 1;
        }
      }
    },
    addUser(state, action) {
      console.log(action.payload);
      state.userInfo = action.payload;
    },
    removeUser(state) {
      state.userInfo = null;
    },
  },
});

export const {
  addTocart,
  resetCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  addUser,
  removeUser,
} = bazarSlice.actions;
export default bazarSlice.reducer;
