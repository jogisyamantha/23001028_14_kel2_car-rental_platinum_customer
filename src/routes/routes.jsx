import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FindCar from "../pages/FindCar";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/find-car",
    element: <FindCar />,
  },
]);
