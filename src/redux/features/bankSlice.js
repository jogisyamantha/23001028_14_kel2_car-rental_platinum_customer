import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bank: "BCA",
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    setBank: (state, action) => {
      state.bank = action.payload;
    },
  },
});

export const { setBank } = bankSlice.actions;

export default bankSlice.reducer;
