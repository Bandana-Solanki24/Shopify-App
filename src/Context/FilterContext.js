import { createContext, useContext } from "react";
import { useProductContext } from "./productContext";
const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
