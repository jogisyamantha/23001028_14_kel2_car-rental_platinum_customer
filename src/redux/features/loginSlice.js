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
      // throw new Error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  email: "",
  loading: false,
  success: false,
  error: "",
  historyUrl: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setHistoryUrl: (state, action) => {
      state.historyUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.email = action.payload.email;
      localStorage.setItem("access_token", action.payload.access_token);
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
  },
});

export const { setHistoryUrl } = loginSlice.actions;
export default loginSlice.reducer;
