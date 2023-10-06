import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favSlice from "./slices/favSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: favSlice,
  },
});
