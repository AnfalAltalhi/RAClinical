import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Register/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />

        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}