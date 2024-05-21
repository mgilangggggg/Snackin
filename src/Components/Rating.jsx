import React, { useState } from "react";

const Rating = ({ rating = 0, totalStars = 5 }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="flex flex-row space-x-1">
      {[...Array(totalStars)].map((star, index) => (
        <Star
          key={index}
          selected={selectedRating >= index + 1}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ selected, onClick }) => (
  <span
    className={`cursor-pointer text-xl ${
      selected ? "text-yellow-500" : "text-gray-300"
    }`}
    onClick={onClick}
  >
    ★
  </span>
);

export default Rating;
