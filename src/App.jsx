import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
// import { routes } from "../src/utils/routes.jsx";
import CarDetail from "./pages/CarDetail/index.jsx";

const App = () => {
  // return <RouterProvider router={routes}></RouterProvider>;
  return <CarDetail />;
};

export default App;
