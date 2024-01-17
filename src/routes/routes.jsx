import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FindCar from "../pages/FindCar";
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
    path: "/find-car",
    element: <FindCar />,
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
    path: "/order",
    element: <Order />,
  },
  {
    path: "/order/payment",
    element: <Payment />,
  },
]);
