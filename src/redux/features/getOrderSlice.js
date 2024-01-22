import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrder = createAsyncThunk("getOrder/getOrder", async (id) => {
  try {
    const res = await axios.get(
      `https://api-car-rental.binaracademy.org/customer/order/${id}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  isLoading: false,
  data: {
    car: {
      id: "",
      name: "",
      start_rent_at: "",
      finish_rent_at: "",
      category: "",
      price: 0,
    },
  },
};

export const getOrderSlice = createSlice({
  name: "getOrder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

export default getOrderSlice.reducer;
