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
        <Login />
      </AuthRoute>
    ),
  },
  // {
  //   path: "/payment",
  //   element: (
  //     <ProtectedRoute>
  //       <Payment />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "/car-list",
    element: <Result />,
  },
  {
    path: "/car-list/:id",
    element: <CarDetail />,
  },
  {
    path: "/order",
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>
    ),
  },
]);
