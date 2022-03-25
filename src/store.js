import { configureStore } from "@reduxjs/toolkit";
import carrello from "./slices/carrello";

export const store = configureStore({
  reducer: {
    carrello,
  },
});