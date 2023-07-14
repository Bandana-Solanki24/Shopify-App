import React from "react";
import "./index.css";
import { useProductContext } from "../../Context/productContext";
import Product from "../Product";

const ProductList = ({ searchQuery }) => {
  const { isLoading, products } = useProductContext();
  console.log(products);

  // const filteredProducts = products.filter((product) =>
  //   product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  return (
    <div className="container">
      <div className="card-container">
        {products.map((eachCard) => {
          return (
            <div>
              <Product key={eachCard.id} {...eachCard} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
