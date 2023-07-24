import React from "react";
import "./index.css";

import Product from "../Product";

const SortByPrice = ({ sortedProducts }) => {
  return (
    <div className="container">
      <div className="card-container">
        {sortedProducts.map((eachCard) => {
          return (
            <div key={eachCard.id}>
              <Product {...eachCard} state={eachCard} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortByPrice;
