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
    count: null,
  },
  error: null,
  page: 1,
  pageCount: 1,
  currentFilter: {
    carName: "",
    carCategory: "",
    carPrice: "",
    carStatus: "",
  },
};

export const carListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setCarname: (state, action) => {
      state.currentFilter.carName = action.payload;
    },
    setCarCategory: (state, action) => {
      state.currentFilter.carCategory = action.payload;
    },
    setCarPrice: (state, action) => {
      state.currentFilter.carPrice = action.payload;
    },
    setCarStatus: (state, action) => {
      state.currentFilter.carStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.cars = action.payload.cars;
        state.data.count = action.payload.count;
        state.data.pageCount = action.payload.pageCount;
        console.log(state.data.count);
      })
      .addCase(getCarList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCarname, setCarCategory, setCarPrice, setCarStatus } =
  carListSlice.actions;
export default carListSlice.reducer;
