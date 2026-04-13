import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Register/Register";
import Guard from "./guards/Guard";
import AdminLayout from "./layouts/AdminLayout/AdminLayout/AdminLayout";
import Dashboard from "./layouts/AdminLayout/Dashboard/Dashboard";
import Home from "./pages/Home"
import ClientLayout from "./layouts/ClientLayout/ClientLayout";
import AdminGuard from "./guards/AdminGuard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/auth" replace />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/register" element={<Register />} />

        <Route path="/client" element={<ClientLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route element={<Guard />}>

        <Route element={<AdminGuard />}>
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>

      </Route>

      </Routes>
    </BrowserRouter>
  );
}