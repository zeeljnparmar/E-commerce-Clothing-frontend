import React, { useEffect } from "react";
import Main from "../components/Login/Main";

const Login = () => {
  useEffect(() => {
    document.title = "StyleOut | Login";
  }, []);
  return (
    <>
      <Main />
    </>
  );
};

export default Login;
