import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrder = createAsyncThunk("getOrder/getOrder", async () => {
  // const token = localStorage.getItem('accessToken')
  const config = {
    headers: {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
    },
  };
  try {
    const res = await axios.get(
      `https://api-car-rental.binaracademy.org/customer/order/49`,
      config
    );
    const data = res.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  isLoading: false,
  data: {},
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
