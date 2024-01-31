import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarList = createAsyncThunk(
  "list/getCarList",
  async (page = 1) => {
    try {
      const res = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?page=${page}&pageSize=6`
      );
      const data = res.data;
      // console.log(data);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const initialState = {
  isLoading: false,
  data: {
    cars: [],
    count: 0,
  },
  error: null,
};

export const carListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.cars = action.payload.cars;
        state.data.count = action.payload.count;
        console.log(state.data.count);
      })
      .addCase(getCarList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default carListSlice.reducer;
