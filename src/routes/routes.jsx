import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FindCar from "../pages/FindCar";
import Login from "../pages/Login";
import ProtectedRoute from "./hoc/ProtectedRoute";
import AuthRoute from "./hoc/AuthRoute";

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
  // {
  //   path: "/payment",
  //   element: (
  //     <ProtectedRoute>
  //       <Payment />
  //     </ProtectedRoute>
  //   ),
  // },
]);
