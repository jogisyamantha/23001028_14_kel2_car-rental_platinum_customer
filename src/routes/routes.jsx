import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FindCar from "../pages/FindCar";
import Result from "../pages/Result";

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
  }
]);
