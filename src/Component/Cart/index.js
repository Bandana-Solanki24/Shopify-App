import React from "react";
import { useLocation } from "react-router-dom";
import ProfileDetails from "../ProfileDetails";
import "./index.css";

function Cart() {
  const location = useLocation();

  // Example usage

  const cartItemsFromLocation = location.state?.cartItems || [];
  const orderNumber =
    location.state?.orderNumber || localStorage.getItem("orderNumber") || "";
  const currentDate =
    location.state?.currentDate || localStorage.getItem("currentDate") || "";

  const cartItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("cartData") || "[]"
  );

  // Combine the cart items from location and localStorage
  const cartItems = [...cartItemsFromLocation, ...cartItemsFromLocalStorage];

  console.log(cartItems);

  return (
    <div>
      <h1>MY ACCOUNT</h1>
      <hr />
      <div className="order-container">
        <ProfileDetails />
        <div>
          <h3>All ORDERS</h3>
          <hr />
          <h5>Order Number :{orderNumber}</h5>
          <h5>Date:{currentDate}</h5>
          {cartItems.map((items) => {
            return (
              <div>
                <img
                  className="image-dimension"
                  src={items.product_image}
                  alt={items.product_image}
                />
              </div>
            );
          })}
          <button className="btn btn-danger invoice-button ">
            Invoice PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
