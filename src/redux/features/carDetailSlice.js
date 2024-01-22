import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carById = createAsyncThunk("detail/carById", async (id) => {
  try {
    const res = await axios.get(
      `https://api-car-rental.binaracademy.org/customer/car/${id}`
    );
    const data = res.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  car: [],
  isLoading: false,
};

export const carDetailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(carById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(carById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.car = action.payload;
      // console.log(state.car);
    });
    builder.addCase(carById.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default carDetailSlice.reducer;
