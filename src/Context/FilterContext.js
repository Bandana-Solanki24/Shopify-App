import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import filterReducer from "../Reducer/filterReducer";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  filter: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  console.log(products);
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const searchPost = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    return dispatch({ type: "SEARCH_ACTION", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  const starRating = () => {
    dispatch({ type: "STAR_RATING", payload: products });
  };
  return (
    <FilterContext.Provider value={{ ...state, searchPost, starRating }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
