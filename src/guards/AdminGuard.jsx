import { Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminGuard = () => {
  return <Outlet />; // 🔥 تعطيله مؤقت
};

export default AdminGuard;