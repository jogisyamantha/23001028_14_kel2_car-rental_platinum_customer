import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarList = createAsyncThunk("list/getCarList", async () => {
  try {
    const res = await axios.get(
      `https://api-car-rental.binaracademy.org/customer/v2/car?page=1&pageSize=6`
    );
    const data = res.data.cars;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  isLoading: false,
  data: [],
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
        state.data = action.payload;
        console.log(state.data);
      })
      .addCase(getCarList.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default carListSlice.reducer;
