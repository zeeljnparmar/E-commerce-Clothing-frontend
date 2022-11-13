import React from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ProductCard from "./ProductCard";

//data
import { store } from "../../data/Store";

const Main = () => {
  const { type } = useParams();

  return (
    <>
      {/* <Navbar /> */}
      <div className="wrapper">
        <ProductCard data={store[0]} />
      </div>
      <Footer />
    </>
  );
};

export default Main;
