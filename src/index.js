import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

//
import { BrowserRouter } from "react-router-dom";

//GlobalStore
import GlobalStore from "./GlobalStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStore>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStore>
  </React.StrictMode>
);
