import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const slipUpload = createAsyncThunk(
  "slip/slipUpload",
  async (id, payload) => {
    try {
      const res = await axios.put(
        `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`,
        payload
      );
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  slip: "",
  prevSlip: "",
};

export const slipUploadSlice = createSlice({
  name: "slip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(slipUpload.fulfilled, (state, action) => {
      state.slip = action.payload;
    });
  },
});

export default slipUploadSlice.reducer;
