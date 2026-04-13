import { Navigate, Outlet } from "react-router-dom";

export default function AdminGuard() {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}