import React from "react";
import { useLocation } from "react-router-dom";

function Cart({ cartData }) {
  const location = useLocation();
  const addToCardData = location.state;
  console.log(addToCardData);
  return <div>Cart</div>;
}

export default Cart;
