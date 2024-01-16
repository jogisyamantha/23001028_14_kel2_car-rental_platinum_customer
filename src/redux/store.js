import { configureStore } from "@reduxjs/toolkit";
import createOrderReducer from "./features/createOrderSlice";
import getOrderReducer from "./features/getOrderSlice";
import slipUploadReducer from "./features/slipUploadSlice";
import carListReducer from "./features/carListSlice";
import carDetailReducer from "./features/carDetailSlice";

export const store = configureStore({
  reducer: {
    createOrder: createOrderReducer,
    getOrder: getOrderReducer,
    slip: slipUploadReducer,
    list: carListReducer,
    detail: carDetailReducer,
  },
});
