// ProductsSection.js
import React, { useState } from "react";
import FilterProductList from "../FilterProductsList";
import "./index.css";
import Search from "../Search";
import Sort from "../Sort";
import FilterSection from "../FilterSection";

import { useProductContext } from "../../Context/productContext";

const ProductsSection = () => {
  const { products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColorId, setSelectedColorId] = useState("");

  // Handle search functionality
  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Function to sort products by star rating
  const handleStarRating = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      const ratingA = a.product_rating;
      const ratingB = b.product_rating;

      if (order === "asc") {
        return ratingA - ratingB;
      } else {
        return ratingB - ratingA;
      }
    });

    // Update the filteredProducts state with the sorted products
    setFilteredProducts(sortedProducts);
  };

  // Function to filter products based on selected category or color
  const filterProducts = (filterBy, filterValue) => {
    if (filterValue) {
      const filtered = products.filter(
        (item) => item[filterBy].$oid === filterValue
      );
      setFilteredProducts(filtered);
    } else {
      // If no filter is selected, show all products
      setFilteredProducts(products);
    }
  };

  // Handle product by category
  const selectCategoryType = (selectedCategoryId) => {
    setSelectedCategory(selectedCategoryId);
    filterProducts("category_id", selectedCategoryId);
  };

  // Handle product by color
  const setSelectedColor = (selectedColorId) => {
    setSelectedColorId(selectedColorId);
    filterProducts("color_id", selectedColorId);
  };

  //handle the price of the products
  const handlePrice = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (order === "asc") {
        return a.product_rating - b.product_rating;
      } else {
        return b.product_rating - a.product_rating;
      }
    });
    setFilteredProducts(sortedProducts);
    console.log(sortedProducts, "s");
  };

  return (
    <div className="main-container">
      <FilterSection
        setSelectedColor={setSelectedColor}
        selectCategoryType={selectCategoryType}
      />
      <div className="filter-section">
        <Sort handlePrice={handlePrice} handleStarRating={handleStarRating} />
        <Search handleSearch={handleSearch} />
      </div>
      <div>
        <FilterProductList filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsSection;
