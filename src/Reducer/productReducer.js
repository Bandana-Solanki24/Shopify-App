const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        singlePageLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        singlePageLoading: false,
        isSingleError: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        singlePageLoading: false,
        isSingleError: true,
      };
    // case "SET_CURRENT_PAGE":
    //   return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};
export default ProductReducer;
