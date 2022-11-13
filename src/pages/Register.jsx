import React, { useEffect } from "react";
import Main from "../components/Register/Main";

const Register = () => {
  useEffect(() => {
    document.title = "StyleOut | Register";
  }, []);
  return (
    <>
      <Main />
    </>
  );
};

export default Register;
