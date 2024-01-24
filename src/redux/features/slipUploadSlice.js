import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const slipUpload = createAsyncThunk(
  "slip/slipUpload",
  async (id, payload) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    try {
      const res = await axios.put(
        `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`,
        payload,
        config
      );
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: {},
};

export const slipUploadSlice = createSlice({
  name: "slip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(slipUpload.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default slipUploadSlice.reducer;
