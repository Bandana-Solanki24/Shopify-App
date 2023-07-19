import React from "react";
import ProductList from "../ProductList";
import "./index.css";
import Search from "../Search";
import Sort from "../Sort";
import FilterSection from "../FilterSection";
import { useFilterContext } from "../../Context/FilterContext";

const ProductsSection = () => {
  const { filter_products } = useFilterContext();
  console.log("data", filter_products);
  return (
    <div className="main-container">
      <FilterSection />
      <div className="filter-section">
        <Sort />
        <Search />
      </div>
      <div>
        <ProductList filter_products={filter_products} />
      </div>
    </div>
  );
};

export default ProductsSection;
