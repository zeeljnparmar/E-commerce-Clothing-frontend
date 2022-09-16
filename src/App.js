import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//Routes
import TestRoutes from "./routes/Test.routes";

//Home
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/*" element={<TestRoutes />} />
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
