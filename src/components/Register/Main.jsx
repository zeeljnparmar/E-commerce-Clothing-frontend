import React from "react";

//Components
import Navbar from "../common/Navbar";
import RegisterForm from "./RegisterForm";
import Footer from "../common/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <RegisterForm />
      </div>
      <Footer />
      {/* <ToastContainer autoClose={3000} theme={"dark"} position={"top-right"} /> */}
    </>
  );
};

export default Main;
