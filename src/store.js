import { configureStore } from "@reduxjs/toolkit";
import carrello from "./slices/carrello";
import salvati from "./slices/salvati";

export const store = configureStore({
  reducer: {
    carrello,
    salvati,
  },
});