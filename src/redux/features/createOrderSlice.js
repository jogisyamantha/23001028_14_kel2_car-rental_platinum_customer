import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (payload) => {
    try {
      const res = await axios.post(
        "https://api-car-rental.binaracademy.org/customer/order",
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
  loading: false,
  isSuccess: false,
};

export const createOrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;
    });
  },
});

export default createOrderSlice.reducer;
