import React, { useState, useEffect } from "react";
import "./index.css";
import { AiFillDelete } from "react-icons/ai";

import OrderSummary from "../OrderSummary";
import { useNavigate } from "react-router-dom";

import { BsPlusSquareFill, BsFileMinusFill } from "react-icons/bs";

function Orders() {
  const [cartItems, setCartItems] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    orderNumber: "",
    currentDate: "",
  });

  const navigate = useNavigate();

  function generateOrderNumber() {
    // Generate a random number of 6 digits as the order number
    const orderNumber =
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    // Get the current date in the format: yyyy-mm-dd
    const currentDate = new Date().toISOString().slice(0, 10);
    setOrderInfo(orderNumber, currentDate);
    localStorage.setItem("orderNumber", orderNumber);
    localStorage.setItem("currentDate", currentDate);

    return { orderNumber, currentDate };
  }

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
  function calculateTotalCost(cartItems) {
    return cartItems.reduce(
      (total, item) => total + item.product_cost * item.counter,
      0
    );
  }

  const addItemsToCart = () => {
    const { orderNumber, currentDate } = generateOrderNumber();
    setOrderInfo({ orderNumber, currentDate });
    console.log(orderNumber);
    navigate("/cart", {
      state: {
        cartItems: cartItems,
        orderNumber: orderNumber,
        currentDate: currentDate,
      },
    });
  };

  return (
    <div className="order-container">
      <div className="order ">
        <div>
          <h1>My Orders</h1>
        </div>
        {cartItems.length > 0 ? (
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
        ) : (
          <p>No items added to cart</p>
        )}
      </div>
      <div className="card-container">
        <OrderSummary
          addItemsToCart={addItemsToCart}
          totalCost={calculateTotalCost(cartItems)}
        />
      </div>
    </div>
  );
}

export default Orders;
