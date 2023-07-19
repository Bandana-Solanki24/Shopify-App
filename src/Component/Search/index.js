import React from "react";
import "./index.css";
import { useFilterContext } from "../../Context/FilterContext";

function Search() {
  const {
    filter: { text },
    searchPost,
  } = useFilterContext();

  return (
    <div className="search-bar">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search Product Here"
          className="search-section form-control"
          type="text"
          value={text}
          onChange={searchPost}
        />
      </form>
    </div>
  );
}

export default Search;
