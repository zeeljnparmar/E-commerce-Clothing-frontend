import React from "react";
import { Route, Routes } from "react-router-dom";

const TestRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <h1>Testing Nested Routes</h1>
          </>
        }
      />
    </Routes>
  );
};

export default TestRoutes;
