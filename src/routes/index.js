import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../Pages/Home";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
  );
};

export default AppRoutes;
