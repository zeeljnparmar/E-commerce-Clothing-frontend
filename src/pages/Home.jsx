import React, { useEffect } from "react";
//components
import HomeComponent from "../components/Home/HomeComponent";

const Home = () => {
  useEffect(() => {
    document.title = "StyleOut | Home";
  }, []);
  return <HomeComponent />;
};

export default Home;
