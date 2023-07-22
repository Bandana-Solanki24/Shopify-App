// import React from "react";
// import "./index.css";

// import Product from "../Product";

// const FilterProductList = ({ filteredProducts }) => {
//   return (
//     <div className="container">
//       <div className="card-container">
//         {filteredProducts.map((eachCard) => {
//           return (
//             <div key={eachCard.id}>
//               <Product {...eachCard} state={eachCard} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FilterProductList;
import React, { useState } from "react";
import "./index.css";

import Product from "../Product";
import { useFilterContext } from "../../Context/FilterContext";

const FilterProductList = ({ filteredProducts }) => {
  const { filter_products } = useFilterContext();
  const itemsPerPage = 6; // Number of items to display per page
  const totalPages = Math.ceil(filter_products.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Get the index of the first and last products for the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container">
      <div className="card-container">
        {currentProducts.map((eachCard) => {
          return (
            <div key={eachCard.id}>
              <Product {...eachCard} state={eachCard} />
            </div>
          );
        })}
      </div>

      {/* Pagination div is placed here, so it will appear at the end of the page */}
      <div className="pagination">
        <button
          className="btn btn-primary"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          className="btn btn-primary"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FilterProductList;
