import React from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// Counting stars
const Rating = ({ rating, totalStars }) => {
  // Count the number of stars filled with
  const fullStars = Math.floor(rating);

  // Determine whether there are half stars
  const halfStars = rating % 1 !== 0 ? 1 : 0;

  // Counting the number of empty stars
  const emptyStars = totalStars - fullStars - halfStars;

  return (
    <>
      <div className="flex items-center text-xs font-Poppins">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStars === 1 && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
      </div>
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
};

export default Rating;
