import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const slipUpload = createAsyncThunk(
  "slip/slipUpload",
  async (id, formData) => {
    const token = localStorage.getItem("access_token");
    const api = `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`;

    // const api = "https://api.cloudinary.com/v1_1/djvcn4e3e/image/upload";

    // const config = {
    //   headers: {
    //     access_token: token,
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    try {
      const res = await axios.put(api, formData, {
        headers: {
          Accept: "*/*",
          access_token: token,
          "Content-Type": "multipart/form-data",
        },
      });
      // const rest = await fetch(api, {
      //   method: "PUT",
      //   headers: {
      //     access_token: token,
      //     "Content-Type": "multipart/form-data",
      //   },
      //   body: formData,
      // });
      // const res = await axios.put(api, formData, config);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const slipUploadSlice = createSlice({
  name: "slip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(slipUpload.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(slipUpload.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action?.payload;
    });
    builder.addCase(slipUpload.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error;
    });
  },
});

export default slipUploadSlice.reducer;
