import React from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { useFilterContext } from "../../Context/FilterContext";

function Sort() {
  const { starRating } = useFilterContext();
  return (
    <div className="sort-section">
      <p className="sort">Sort By:</p>
      <span className="icon">
        <FaStar onClick={starRating} style={{ color: "blue" }} />

        <BsCurrencyRupee style={{ color: "blue" }} />
        <BiUpArrowAlt style={{ color: "blue" }} />
        <BsCurrencyRupee style={{ color: "blue" }} />
        <BiDownArrowAlt style={{ color: "blue" }} />
      </span>
    </div>
  );
}

export default Sort;
