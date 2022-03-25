import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredienti: [],
};

export const carrelloSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addIngredienti: (state, action) => {
      state.ingredienti = [...state.ingredienti, action.payload];
    },
  },
});

export const { addIngredienti } = carrelloSlice.actions;

export default carrelloSlice.reducer;