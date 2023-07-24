import Product from "../Product";

const SortByColor = ({ selectedColorProducts }) => {
  return (
    <div className="container">
      <div className="card-container">
        {selectedColorProducts.map((eachCard) => {
          return (
            <div key={eachCard.id}>
              <Product {...eachCard} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortByColor;
