import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarList = createAsyncThunk(
  "list/getCarList",
  async (url, { rejectWithValue }) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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
  page: 1,
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
        state.error = action.payload;
      });
  },
});

export default carListSlice.reducer;
