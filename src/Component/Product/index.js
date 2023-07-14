import React from "react";
import "./index.css";
import Star from "../Star";

const Product = (eachCard) => {
  const { product_image, product_cost, product_rating, product_name } =
    eachCard;
  return (
    <div className="card">
      <div className="image-container">
        <img className="image" src={product_image} alt={product_image} />
      </div>
      <p className="product-name">{product_name}</p>
      <p className="product-cost">Rs. {product_cost}</p>
      <Star product_rating={product_rating} color="#ff9800" />
      <button className="btn btn-danger button">Add to cart</button>
    </div>
  );
};

export default Product;
