import React, { useState, useEffect } from "react";
import "./index.css";
import { AiFillDelete } from "react-icons/ai";

import OrderSummary from "../OrderSummary";

import { BsPlusSquareFill, BsFileMinusFill } from "react-icons/bs";

function Orders() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve the cart data from local storage
    const existingCartData = localStorage.getItem("cartData");

    if (existingCartData) {
      // Parse the cart data from local storage and set a default value of 1 for counter if it's undefined
      const parsedCartData = JSON.parse(existingCartData).map((item) => ({
        ...item,
        counter: item.counter || 1,
      }));

      setCartItems(parsedCartData);
    }
  }, []);

  const handleCounterChange = (itemId, newCount) => {
    // Update the counter value for the item
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          counter: newCount,
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  console.log(cartItems);
  //handling the delete Functionality
  const deleteProduct = (itemId) => {
    const updatedData = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedData);
    localStorage.setItem("cartData", JSON.stringify(updatedData));
  };

  return (
    <div className="order-container">
      <div className="order ">
        <div>
          <h1>My Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    className="cart-image"
                    src={item.product_image}
                    alt={item.product_image}
                  />
                </td>
                <td>
                  <p>{item.product_name}</p>
                </td>
                <td>
                  <p>{item.product_cost}/-</p>
                </td>
                <td>
                  <div>
                    <BsPlusSquareFill
                      onClick={() =>
                        handleCounterChange(item.id, item.counter + 1)
                      }
                    />
                    <span>{item.counter}</span>
                    <BsFileMinusFill
                      onClick={() =>
                        handleCounterChange(item.id, item.counter - 1)
                      }
                    />
                  </div>
                </td>
                <td>{parseInt(item.product_cost) * item.counter}</td>
                <td>
                  <AiFillDelete
                    onClick={() => deleteProduct(item.id)}
                    style={{ color: "red", pading: "10px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-container">
        <OrderSummary />
      </div>
    </div>
  );
}

export default Orders;
