import React, { useState } from "react";
import "./index.css";
import { useProductContext } from "../../Context/productContext";

function FilterSection({ selectCategoryType, setSelectedColor }) {
  const { products } = useProductContext();
  const [selectedCategory, setSelectedCategory] = useState("");

  // Create a mapping of category IDs to their corresponding names
  const categoryMap = {
    "61cc47cde286b5a96c185545": "Sofa",
    "61cc486ce286b5a96c18554a": "Bed",
    "61cc484de286b5a96c185549": "Table",
    // Add more mappings for other category IDs
  };

  const colorMap = {
    "61cc489be286b5a96c18554b": "Blue",
    "61ceeaee4e859ec2b2ae7a53": "Brown",
    "61ceeb334e859ec2b2ae7a55": "Orange",
    "61ceeb4e4e859ec2b2ae7a56": "Green",
  };

  const productCategories = [
    ...new Set(products.map((item) => item.category_id.$oid)),
  ];

  const productColors = [
    ...new Set(products.map((item) => item.color_id.$oid)),
  ];

  // Function to get the category name based on the category ID
  function getCategoryName(categoryId) {
    return categoryMap[categoryId] || "Unknown Category";
  }

  // Function to get the color name based on the color ID
  function getColorName(colorId) {
    return colorMap[colorId] || "Unknown Color";
  }

  const selectOption = (e) => {
    const selectedValue = e.target.value;
    const selectedType = e.target.name;

    if (selectedType === "category") {
      setSelectedCategory(selectedValue);
      selectCategoryType(selectedValue);
    } else if (selectedType === "color") {
      setSelectedColor(selectedValue);
    }
  };

  return (
    <div className="options">
      <button className="product-button">All Products</button>
      <form action="#">
        <select
          name="category"
          value={selectedCategory}
          onChange={selectOption}
        >
          <option value="">All Categories</option>
          {productCategories.map((categoryId) => (
            <option key={categoryId} value={categoryId}>
              {getCategoryName(categoryId)}
            </option>
          ))}
        </select>
      </form>

      <form action="#">
        <select name="color" onChange={selectOption}>
          <option value="">All Colors</option>
          {productColors.map((colorId) => (
            <option key={colorId} value={colorId}>
              {getColorName(colorId)}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default FilterSection;
