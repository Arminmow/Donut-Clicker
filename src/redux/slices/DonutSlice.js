import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donuts: 0,
};

const donutSlice = createSlice({
  name: "donut",
  initialState,
  reducers: {
    clickDonut: (state) => {
      state.donuts += 1;
    },
  },
});

export const { clickDonut } = donutSlice.actions;

export default donutSlice.reducer;
