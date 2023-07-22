import React from "react";
import "./index.css";
import { useProductContext } from "../../Context/productContext";
import Product from "../Product";

// import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useProductContext();

  console.log(products);

  return (
    <div className="container">
      <div className="card-container">
        {products.map((eachCard) => {
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

export default ProductList;
