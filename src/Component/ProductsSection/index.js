import React, { useState } from "react";
import FilterProductList from "../FilterProductsList";
import "./index.css";
import Search from "../Search";
import Sort from "../Sort";
import FilterSection from "../FilterSection";

import { useProductContext } from "../../Context/productContext";

const ProductsSection = () => {
  const { products } = useProductContext();
  const filter_products = [...products];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(filter_products);
  console.log(searchQuery);
  console.log(filter_products, "p");

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="main-container">
      <FilterSection />
      <div className="filter-section">
        <Sort />
        <Search handleSearch={handleSearch} />
      </div>
      <div>
        <FilterProductList filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsSection;
