import React from "react";
import "./index.css";
import Star from "../Star";
import { useNavigate } from "react-router-dom";

const Product = (eachCard) => {
  const { id, product_image, product_cost, product_rating, product_name } =
    eachCard;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/singlePage", { state: eachCard });
  };

  const handleAddToCartClick = () => {
    navigate("/cart", { state: eachCard });
  };

  return (
    <div key={id} className="card" onClick={handleCardClick}>
      <div className="image-container">
        <img className="image" src={product_image} alt={product_image} />
      </div>
      <p className="product-name">{product_name}</p>
      <p className="product-cost">Rs. {product_cost}</p>
      <Star product_rating={product_rating} color="#ff9800" />
      <button className="btn btn-danger button" onClick={handleAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
