import React from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

function Sort({ handleStarRating, handlePrice }) {
  // Function to sort products by star rating
  const sortByStar = () => {
    handleStarRating("asc");
  };
  const sortProductsByPrice = (order) => {
    handlePrice(order);
  };
  return (
    <div className="sort-section">
      <p className="sort">Sort By:</p>
      <span className="icon">
        <FaStar
          onClick={sortByStar}
          style={{ color: "blue", cursor: "pointer" }}
        />
        <BsCurrencyRupee style={{ color: "blue" }} />
        <BiUpArrowAlt
          onClick={() => sortProductsByPrice("asc")}
          style={{ color: "blue" }}
        />
        <BsCurrencyRupee style={{ color: "blue" }} />
        <BiDownArrowAlt
          onClick={() => sortProductsByPrice("dec")}
          style={{ color: "blue" }}
        />
      </span>
    </div>
  );
}

export default Sort;
