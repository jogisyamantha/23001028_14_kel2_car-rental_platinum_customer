import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postLogin = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://api-car-rental.binaracademy.org/customer/auth/login",
        payload
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  email: "",
  loading: false,
  success: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.email = action.payload.email;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = action.error.message;
    });
  },
});

export default loginSlice.reducer;
