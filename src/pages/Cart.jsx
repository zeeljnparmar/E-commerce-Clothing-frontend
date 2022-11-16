import React, { useEffect } from "react";

//components
import CartMain from "../components/Cart/CartMain";

const Cart = () => {
  useEffect(() => {
    document.title = "StyleOut | Cart";
  });
  return <CartMain></CartMain>;
};

export default Cart;
