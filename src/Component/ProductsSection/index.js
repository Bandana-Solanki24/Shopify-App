import React, { useState } from "react";
import ProductList from "../ProductList";
import "./index.css";

const ProductsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="filter-container">
      <input
        placeholder="Search Product Here"
        className="search-section form-control"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        <ProductList searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default ProductsSection;
