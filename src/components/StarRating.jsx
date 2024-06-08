import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
  cursor: "pointer",
};

const StarRating = ({ maxRating = 10, color = "#facc15" }) => {
  const [rating, setRating] = useState(1);

  const messages = ["bad", "good", "nice", "perfect", "wonderful"];

  const rate = Math.round(rating - rating / 2);

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            stars={rating}
            color={color}
            num={i + 1}
            onChangeStar={(num) => setRating(num)}
          />
        ))}
      </div>
      <h1>{messages[rate - 1]}</h1>
    </div>
  );
};

const Star = ({ stars, num, onChangeStar, color }) => {
  return (
    <svg
      onMouseOver={() => onChangeStar(num)}
      xmlns="http://www.w3.org/2000/svg"
      fill={stars >= num ? color : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      style={{ width: "24px", height: "24px" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
};

export default StarRating;
