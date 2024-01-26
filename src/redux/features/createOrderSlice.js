import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "createOrder/createOrder",
  async (payload) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    try {
      const res = await axios.post(
        `https://api-car-rental.binaracademy.org/customer/order`,
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
  loading: false,
  data: {
    id: null,
    start_rent_at: "",
    finish_rent_at: "",
    carId: 0,
  },
};

export const createOrderSlice = createSlice({
  name: "createOrder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export default createOrderSlice.reducer;
