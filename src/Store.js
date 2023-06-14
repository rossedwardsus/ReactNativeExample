import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./MessageSlice";

export const store = configureStore({
  reducer: { 
    color: colorSlice,
  },
});
