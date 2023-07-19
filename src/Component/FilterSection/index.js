import React from "react";
import "./index.css";

function FilterSection() {
  return (
    <div className="options">
      <button>All Products</button>
      <form action="#">
        <select name="sort" id="sort">
          <option value="table">Table</option>
          <option value="table">Sofa</option>
          <option value="table">Cupboard</option>
          <option value="table">Bed</option>
        </select>
      </form>
      <form>
        <select>
          <option>Table</option>
          <option>Sofa</option>
          <option>Cupboard</option>
          <option>Bed</option>
        </select>
      </form>
    </div>
  );
}

export default FilterSection;
