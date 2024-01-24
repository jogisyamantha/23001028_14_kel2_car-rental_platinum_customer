import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FindCar from "../pages/FindCar";
import Login from "../pages/Login";
import ProtectedRoute from "../hoc/ProtectedRoute";
import AuthRoute from "../hoc/AuthRoute";
import Result from "../pages/Result";
import CarDetail from "../pages/CarDetail";
import Order from "../pages/Order";
import Payment from "../pages/Payment";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <AuthRoute>
        <Login />,
      </AuthRoute>
    ),
  },
  {
    path: "/order/:id/payment",
    element: (
      // <ProtectedRoute>
      //   <Payment />
      // </ProtectedRoute>
      <Payment />
    ),
  },
  {
    path: "/car-list",
    element: <Result />,
  },
  {
    path: "/car-list/:id",
    element: <CarDetail />,
  },
  {
    path: "/order/:id",
    element: (
      // <ProtectedRoute>
      //   <Order />
      // </ProtectedRoute>
      <Order />
    ),
  },
]);
