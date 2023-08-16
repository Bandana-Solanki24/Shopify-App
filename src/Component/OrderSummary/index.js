import React from "react";

function OrderSummary({ totalCost, addItemsToCart }) {
  const gstCaluclated = parseInt((12 / 100) * totalCost);

  // const navigate = useNavigate();
  const proceedToBuy = () => {
    addItemsToCart();
  };

  return (
    <div>
      <h3>Review Order</h3>
      <hr />
      <p>SubTotal:Rs.{totalCost}</p>
      <hr />
      <p>GST:Rs.{gstCaluclated}</p>
      <hr />
      <p>OrderTotal:Rs.{totalCost + gstCaluclated}</p>
      <button onClick={proceedToBuy} className="btn btn-success">
        Proceed to buy
      </button>
    </div>
  );
}

export default OrderSummary;
