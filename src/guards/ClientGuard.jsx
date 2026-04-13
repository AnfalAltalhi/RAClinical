import { Outlet, Navigate } from "react-router-dom";

const ClientGuard = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/auth" />;
};

export default ClientGuard;