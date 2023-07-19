import React from "react";
import ProductList from "../ProductList";
import CarouselCard from "../CarouselCard";

import "./index.css";

function Home() {
  return (
    <div>
      <CarouselCard />
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Products List</h1>
      <ProductList />
    </div>
  );
}
export default Home;
