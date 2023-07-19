import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import Star from "../Star";

const SinglePage = ({ eachCard }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartData = location.state;
  console.log(cartData);
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="single-page-container">
      <div className="image-section">
        <img
          className="main-image"
          src={cartData.product_image}
          alt={cartData.product_image}
        />
        <div style={{ padding: "10px" }}>
          {cartData.subimages.map((subimage, index) => (
            <img
              className="sub-images"
              key={index}
              src={subimage}
              alt={`Subimage ${index}`}
            />
          ))}
        </div>
        <div className="tabs">
          <div
            className={`tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </div>
          <div
            className={`tab ${activeTab === "features" ? "active" : ""}`}
            onClick={() => handleTabClick("features")}
          >
            Features
          </div>
        </div>
        <div className="tab-content">
          {activeTab === "description" ? (
            <>
              <p className="desc">{cartData.product_desc}</p>
            </>
          ) : (
            <>
              <p className="desc">Dimension: {cartData.product_dimension}</p>
              <p className="desc">Material: {cartData.product_material}</p>
            </>
          )}
        </div>
      </div>
      <div className="info-container">
        <p className="name">{cartData.product_name}</p>

        <Star product_rating={cartData.product_rating} color="#ff9800" />
        <p>{cartData.product_rating}</p>
        <hr />
        <p className="cost">Price:Rs. {cartData.product_cost}</p>
        <span>Color: {cartData.color_id.$oid}</span>
        <div className="button-container">
          <button
            className=" button button1 "
            onClick={() => navigate("/cart", { state: cartData })}
          >
            ADD TO CART{" "}
          </button>
          <button className=" button button2">RATE PRODUCT</button>
        </div>
        <div>
          <h5>Share</h5>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

// import React, { useEffect } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import { useProductContext } from "../../Context/productContext";
// import axios from "axios";

// const API = "https://products-8dk6.onrender.com/products";

// function SinglePage() {
//   const { getSingleProduct, singleProduct, singlePageLoading } =
//     useProductContext();
//   console.log(singleProduct);
//   const location = useLocation();

//   const { id } = useParams();

//   useEffect(() => {
//     getSingleProduct(`${API}?id=112`);
//   }, []);

//   // useEffect(() => {
//   //   // if (location.state.data) {
//   //   //   axios.post(`${API}?id=${location.state.data}`);
//   //   // }
//   // }, []);

//   console.log(id);

//   if (singlePageLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!singleProduct) {
//     return <p>No data available</p>;
//   }

//   const { product_name, product_cost, product_rating } = singleProduct;
//   console.log({ singleProduct, product_name });

//   return (
//     <div>
//       {singleProduct.map((eachItem) => {
//         return (
//           <div key={eachItem.id}>
//             <p>{eachItem.product_name}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default SinglePage;
