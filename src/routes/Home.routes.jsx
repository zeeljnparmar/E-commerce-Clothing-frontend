import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Home from "../pages/Home";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default HomeRoutes;
