import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FindCar from "../pages/FindCar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../hoc/ProtectedRoute";
import AuthRoute from "../hoc/AuthRoute";
import Result from "../pages/Result";
import CarDetail from "../pages/CarDetail";
import Order from "../pages/Order";
import Payment from "../pages/Payment";
import PageNotFound from "../pages/PageNotFound";
import Ticket from "../pages/Ticket";

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
  {
    path: "/register",
    element: (
      <AuthRoute>
        <Register />
      </AuthRoute>
    ),
  },
  {
    path: "/order/:id/payment",
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>
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
      <ProtectedRoute>
        <Order />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/order/:id/payment/invoice",
    element: (
      <ProtectedRoute>
        <Ticket />
      </ProtectedRoute>
    ),
  },
]);
