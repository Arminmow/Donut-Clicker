import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slices/PlayerSlice";
import uiReducer from "./slices/UiSlice";

export const store = configureStore({
  reducer: {
    player : playerReducer,
    ui: uiReducer,
  },
});
