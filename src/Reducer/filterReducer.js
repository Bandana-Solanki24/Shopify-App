const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SEARCH_ACTION":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };
    case "STAR_RATING":
      const { rating } = action.payload;
      const filteredProducts = state.all_products.filter(
        (product) => product.product_rating >= rating
      );
      return {
        ...state,
        filter_products: filteredProducts,
      };
    default:
      return state;
  }
};

export default filterReducer;
