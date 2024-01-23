import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    return <Navigate to="/" />;
  }

  return <div>{children || <Outlet />}</div>;
};

export default AuthRoute;
