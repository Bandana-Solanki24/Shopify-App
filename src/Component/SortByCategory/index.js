import Product from "../Product";

const SortByCategory = ({ selectedCategoryProducts }) => {
  return (
    <div className="container">
      <div className="card-container">
        {selectedCategoryProducts.map((eachCard) => {
          return (
            <div key={eachCard.id}>
              <Product {...eachCard} state={eachCard} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortByCategory;
