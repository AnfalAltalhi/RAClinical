import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./Pages/Auth/AuthLayout/AuthLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Register/Register";

import Guard from "./guards/Guard";
import AdminGuard from "./guards/AdminGuard";
import ClientGuard from "./guards/ClientGuard";

import AdminLayout from "./layouts/AdminLayout/AdminLayout/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";

import Home from "./Pages/Home";
import ClientLayout from "./Pages/ClientLayout/ClientLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Navigate to="/auth" />} />

       
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/register" element={<Register />} />

        
       <Route element={<Guard />}>

  {/* ADMIN */}
  <Route element={<AdminGuard />}>
    <Route path="/dashboard" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
    </Route>
  </Route>

  {/* CLIENT */}
  <Route element={<ClientGuard />}>
    <Route path="/home" element={<ClientLayout />}>
      <Route index element={<Home />} />
    </Route>
  </Route>

</Route>
        
        <Route path="*" element={<Navigate to="/auth" />} />

      </Routes>
    </BrowserRouter>
  );
}