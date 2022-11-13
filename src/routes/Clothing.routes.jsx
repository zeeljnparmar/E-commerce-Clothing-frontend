import React from "react";

import { Route, Routes } from "react-router-dom";

//Component
import Men from "../pages/Clothing";
import SingleProduct from "../pages/SingleProduct";

const ClothingRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<Men />} /> */}
      <Route path="/:type" element={<Men />} />
      <Route path="/:type/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default ClothingRoutes;
