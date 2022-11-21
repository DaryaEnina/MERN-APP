import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TablePage from "./pages/table/tablePage";
import Login from "./pages/auth/login/login";
import Registration from "./pages/auth/registration/registration";

const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/table" element={<TablePage />} />
        <Route path="*" element={<Navigate to="/table" replace />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
export default useRoutes;
