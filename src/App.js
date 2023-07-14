import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import ProductsSection from "./Component/ProductsSection";
import Order from "./Component/Order";
import Header from "./Component/Header";
import Cart from "./Component/Cart";
import Registration from "./Component/Registration";
import Menu from "./Component/Menu";
import ErrorPage from "./Component/ErrorPage";
import Footer from "./Component/Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productsSection" element={<ProductsSection />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
