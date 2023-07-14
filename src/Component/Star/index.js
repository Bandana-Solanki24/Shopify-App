import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ product_rating, color }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {product_rating >= index + 1 ? (
          <FaStar className="icon" style={{ color }} />
        ) : product_rating >= number ? (
          <FaStarHalfAlt className="icon" style={{ color }} />
        ) : (
          <AiOutlineStar className="icon" style={{ color }} />
        )}
      </span>
    );
  });
  return (
    <div>
      <p className="rating">{ratingStar}</p>
    </div>
  );
};
export default Star;
