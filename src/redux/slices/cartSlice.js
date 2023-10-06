import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id == action.payload.id
      );
      !product && state.cartItems.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload.id
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cartItems.find((item) => item.id === id);

      if (product) {
        // Update the quantity of the specific item
        product.quantity = quantity;
      }
    },
  },
});

export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
