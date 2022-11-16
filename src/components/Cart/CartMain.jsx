import React from "react";

//components
import Footer from "../common/Footer";
import Cart from "./Cart";
import Navbar from "../common/Navbar";

const CartMain = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Cart />
      </div>
      <Footer />
    </>
  );
};

export default CartMain;
