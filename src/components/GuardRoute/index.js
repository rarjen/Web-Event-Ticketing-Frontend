import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuardOnlyRoute({ children }) {
  let { token } = useSelector((state) => state.auth);

  if (!token) return <Navigate to="/signin" replace={true} />;

  return children || <Outlet />; // Harus ada outlet agar children bisa tampil
}
