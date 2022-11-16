import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//Routes
import TestRoutes from "./routes/Test.routes";
import ClothingRoutes from "./routes/Clothing.routes";
//Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/*" element={<TestRoutes />} />
        <Route path="/clothing/*" element={<ClothingRoutes />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <>
              <h1>404 not Found. </h1>
            </>
          }
        />
      </Routes>
      <ToastContainer
        autoClose={3000}
        theme={"colored"}
        position={"top-right"}
      />
    </div>
  );
}

export default App;
