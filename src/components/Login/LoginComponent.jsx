import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [login, setLogin] = useState({
    text: "",
    password: "",
  });

  const changeInput = (e) => {
    setLogin((oldState) => {
      return {
        ...oldState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
      <section className="bg-[#FFFFE0]">
        <div className="contain">
          <div className="bg-white p-[5%] w-[45rem] ml-auto mr-auto 500:w-[35rem]">
            <div className="font-bold text-head-4 900:text-body-1">
              Login to your Account
            </div>
            <div className="mt-14">
              <input
                type="text"
                className="focus:border-2 focus:border-black  border border-gray-400 pl-5 pr-5 pt-2 pb-2 w-full 500:text-body-3"
                placeholder="Email Or MobileNo*"
                name="text"
                value={login.text}
                onChange={changeInput}
              />
            </div>
            <div className="mt-10">
              <input
                type="password"
                className="focus:border-2 focus:border-black  border border-gray-400 pl-5 pr-5 pt-2 pb-2 w-full 500:text-body-3"
                placeholder="Password*"
                name="password"
                value={login.password}
                onChange={changeInput}
              />
            </div>
            <div className="mt-10 text-center">
              <button className="w-full bg-light-yellow text-black pt-2 pb-2  500:text-body-3">
                SignIn
              </button>
            </div>
            <div className="mt-10 500:text-body-3">
              Don&apos;t have a account{" "}
              <span className="underline text-[blue]">
                <Link to={{ pathname: "/signup" }}>Register Here</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
