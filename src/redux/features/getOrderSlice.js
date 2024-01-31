import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrder = createAsyncThunk("getOrder/getOrder", async (id) => {
  const token = localStorage.getItem("access_token");
  const config = {
    headers: {
      access_token: token,
    },
  };
  try {
    const res = await axios.get(
      `https://api-car-rental.binaracademy.org/customer/order/${id}`,
      config
    );
    const data = res.data;
    // console.log(data);
    return data;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

export const getOrderSlice = createSlice({
  name: "getOrder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      // console.log(state.data);
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.error?.message;
    });
  },
});

export default getOrderSlice.reducer;
