import React from "react";

//Components
import Navbar from "../common/Navbar";
import LoginComponent from "./LoginComponent";
import Footer from "../common/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <LoginComponent />
      </div>
      <Footer />
      {/* <ToastContainer autoClose={3000} theme={"dark"} position={"top-right"} /> */}
    </>
  );
};

export default Main;
