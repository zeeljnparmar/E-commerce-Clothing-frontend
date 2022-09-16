import React from "react";
import { useDispatch } from "react-redux";

//actions
import { success } from "../../reducers/notificationReducer";

const HomeComponent = () => {
  const dispatch = useDispatch();

  const btnClick = () => {
    dispatch(success({ msg: "Redux Integration Successful." }));
    // toast.success("Hello World");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={btnClick}>Click Me</button>
      {/* <ToastContainer autoClose={3000} theme={"dark"} position={"top-right"} /> */}
    </>
  );
};

export default HomeComponent;
