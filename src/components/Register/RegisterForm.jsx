import React, { useState } from "react";

const RegisterForm = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    "re-password": "",
  });

  const changeInput = (e) => {
    setRegister((oldState) => {
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
              Create Account
            </div>
            <div className="mt-14">
              <input
                type="text"
                className="focus:border-2 focus:border-black  border border-gray-400 pl-5 pr-5 pt-2 pb-2 w-full 500:text-body-3"
                placeholder="Name*"
                name="name"
                value={register.name}
                onChange={changeInput}
              />
            </div>
            <div className="mt-10">
              <input
                type="text"
                className="focus:border-2 focus:border-black  border border-gray-400 pl-5 pr-5 pt-2 pb-2 w-full 500:text-body-3"
                placeholder="Email*"
                name="email"
                value={register.email}
                onChange={changeInput}
              />
            </div>
            <div className="mt-10">
              <input
                type="text"
                className="focus:border-2 focus:border-black  border border-gray-400 pl-5 pr-5 pt-2 pb-2 w-full 500:text-body-3"
                placeholder="Mobile No*"
                name="mobile"
                value={register.mobile}
                onChange={changeInput}
              />
            </div>

            <div className="mt-10">
              <input
                type="password"
                className="focus:border-2 focus:border-black  border border-gray-400 pl-5 pr-5 pt-2 pb-2 w-full 500:text-body-3"
                placeholder="Password*"
                name="password"
                value={register.password}
                onChange={changeInput}
              />
            </div>
            <div className="mt-10">
              <input
                type="password"
                className="focus:border-2 focus:border-black  border border-gray-400 pl-5 pr-5 pt-2 pb-2 w-full 500:text-body-3"
                placeholder="Retype Password*"
                name="re-password"
                value={register["re-password"]}
                onChange={changeInput}
              />
            </div>
            <div className="mt-10 text-center">
              <button className="w-full bg-light-yellow text-black pt-2 pb-2  500:text-body-3">
                SignIn
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
