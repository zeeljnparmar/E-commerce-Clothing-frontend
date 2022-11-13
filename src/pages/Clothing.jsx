import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../components/Clothing/Main";

const Men = () => {
  const { type } = useParams();
  useEffect(() => {
    document.title = `StyleOut | ${type}-Clothing`;
  }, [type]);
  return <Main />;
};

export default Men;
