import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Register/Register";
import Guard from "./guards/Guard";
import Dashboard from "./Pages/Dashboard/Dashboard";

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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}