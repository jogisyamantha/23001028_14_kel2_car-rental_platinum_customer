import { configureStore } from "@reduxjs/toolkit";
import createOrderReducer from "./features/createOrderSlice";
import getOrderReducer from "./features/getOrderSlice";
import slipUploadReducer from "./features/slipUploadSlice";

export const store = configureStore({
  reducer: {
    createOrderReducer,
    getOrderReducer,
    slipUploadReducer,
  },
});
