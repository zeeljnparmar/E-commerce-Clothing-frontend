import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../components/SingleProduct/Main";

const SingleProduct = () => {
  const { type, id } = useParams();
  useEffect(() => {
    document.title = `StyleOut | ${id}`;
  }, [id]);
  return <Main />;
};

export default SingleProduct;
