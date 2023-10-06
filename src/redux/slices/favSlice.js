import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  WISH_LIST_ITEMS: [],
};

export const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToWISH_List: (state, action) => {
      const product = state.WISH_LIST_ITEMS.find(
        (item) => item.id == action.payload.id
      );
      !product && state.WISH_LIST_ITEMS.push(action.payload);
    },
    removeFromWISH_List: (state, action) => {
      state.WISH_LIST_ITEMS = state.WISH_LIST_ITEMS.filter(
        (item) => item.id != action.payload.id
      );
    },
  },
});

export const { addToWISH_List, removeFromWISH_List } = favSlice.actions;
export default favSlice.reducer;
