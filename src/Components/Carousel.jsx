import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const categories = [
    {
      imageUrl: "./Carousel/1.png",
    },
    {
      imageUrl: "./Carousel/2.png",
    },
    {
      imageUrl: "./Carousel/3.png",
    },
    {
      imageUrl: "./Carousel/4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container w-full  mx-auto py-16 -z-30">
      <div className="carousel w-full overflow-hidden relative">
        <div className="carousel-inner flex">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${categories.length * 100}%`,
            }}
          >
            {categories.map((category, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <img
                  src={category.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-auto h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-[#E53935] hover:bg-gray-100 p-2 rounded-full m-4"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-[#E53935] hover:bg-gray-100 p-2 rounded-full m-4"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
