import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";
import createOrderReducer from "./features/createOrderSlice";
import getOrderReducer from "./features/getOrderSlice";
import slipUploadReducer from "./features/slipUploadSlice";
import carListReducer from "./features/carListSlice";
import carDetailReducer from "./features/carDetailSlice";
import bankReducer from "./features/bankSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    bank: bankReducer,
    createOrder: createOrderReducer,
    getOrder: getOrderReducer,
    slip: slipUploadReducer,
    list: carListReducer,
    detail: carDetailReducer,
  },
});
