import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salvati: [],
};

export const salvatiSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addSalvati: (state, action) => {
      state.salvati = [...state.salvati, action.payload];
    },
  },
});

export const { addSalvati } = salvatiSlice.actions;

export default salvatiSlice.reducer;