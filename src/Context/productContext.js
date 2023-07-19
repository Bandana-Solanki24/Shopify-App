import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

const API = "https://products-8dk6.onrender.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  singleProduct: {},
  singlePageLoading: false,
  isSingleError: false,
  page: 1,
  itemsPerPage: 6,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //calling api for all the products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      console.log(res);
      const products = await res.data;
      console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //calling api for the single products
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(API);

      const singleProduct = await res.data;
      console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  //handle search functionality

  //handle pagination
  const handlePageChange = (pageNumber) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: pageNumber });
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, getSingleProduct, handlePageChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
