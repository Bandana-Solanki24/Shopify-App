import React from "react";
import "./index.css";

import { useProductContext } from "../../Context/productContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function CarouselCard() {
  const { products } = useProductContext();
  console.log(products);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} showDots={true}>
      {products.map((product) => (
        <img
          src={product.product_image}
          alt={product.product_image}
          className="image-dim"
        />
      ))}
    </Carousel>
  );
}

export default CarouselCard;
