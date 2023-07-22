import React from "react";
import "./index.css";

function Search({ handleSearch }) {
  const handleInputChange = (e) => {
    const query = e.target.value;

    handleSearch(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search Product Here"
          className="search-section form-control"
          type="input"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default Search;
