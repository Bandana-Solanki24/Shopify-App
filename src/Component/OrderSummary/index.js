import React from "react";

function OrderSummary() {
  return (
    <div>
      <h3>Review Order</h3>
      <hr />
      <p>SubTotal:</p>
      <hr />
      <p>GST:</p>
      <hr />
      <p>OrderTotal:</p>
      <button className="btn btn-success">Proceed to buy</button>
    </div>
  );
}

export default OrderSummary;
