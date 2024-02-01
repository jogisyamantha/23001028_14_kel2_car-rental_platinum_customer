import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const slipUpload = createAsyncThunk(
    "slip/slipUpload",
    async({ id, formData }) => {
        const api = `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`;
        const token = localStorage.getItem("access_token");
        const config = {
            headers: {
                access_token: token,
                "Content-Type": "multipart/form-data",
            },
        };
        try {
            const res = await axios.put(api, formData, config);
            const data = res.data;
            console.log(data);
            localStorage.setItem("slip", data.slip)
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

const initialState = {
    id: null,
    total_price: null,
    slip: "",
    isLoading: false,
}

export const slipUploadSlice = createSlice({
    name: "slip",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(slipUpload.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(slipUpload.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.data = action.payload;
                state.slip = action.payload;
            })
            .addCase(slipUpload.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default slipUploadSlice.reducer;