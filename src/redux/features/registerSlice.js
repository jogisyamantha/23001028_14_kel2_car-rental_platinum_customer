import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postRegister = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://api-car-rental.binaracademy.org/customer/auth/register",
        payload
      );
      return res.data;
    } catch (error) {
      // throw new Error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  email: "",
  loading: false,
  success: null,
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.email = action.payload.email;
    });
    builder.addCase(postRegister.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
  },
});

export default registerSlice.reducer;
