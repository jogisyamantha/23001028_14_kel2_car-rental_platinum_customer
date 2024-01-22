import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ children }) => {
  const loginState = useSelector((state) => state.login);
  if (loginState.success) {
    return <Navigate to="/" />;
  }

  return <div>{children || <Outlet />}</div>;
};

export default AuthRoute;
