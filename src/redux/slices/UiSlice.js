import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShopOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleShop: (state) => {
      state.isShopOpen = !state.isShopOpen;
    },
    openShop: (state) => {
      state.isShopOpen = true;
    },
    closeShop: (state) => {
      state.isShopOpen = false;
    },
  },
});

export const { toggleShop, openShop, closeShop } = uiSlice.actions;
export default uiSlice.reducer;
