import { configureStore } from "@reduxjs/toolkit";
import donutReducer from "./slices/DonutSlice";

export const store = configureStore({
  reducer: {
    donut: donutReducer,
  },
});
