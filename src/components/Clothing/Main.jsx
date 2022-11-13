import React from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../common/Navbar";
import ClothingStore from "./ClothingStore";
import Footer from "../common/Footer";

const Main = () => {
  const { type } = useParams();

  return (
    <>
      {/* <Navbar /> */}
      <div className="wrapper">
        {/* <HeroSection /> */}
        <ClothingStore type={type} />
      </div>
      <Footer />
      {/* <ToastContainer autoClose={3000} theme={"dark"} position={"top-right"} /> */}
    </>
  );
};

export default Main;
