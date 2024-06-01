import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const carousel = [
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
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2100);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container w-full mx-auto py-24 relative">
      <div className="carousel w-full overflow-hidden relative">
        <div className="carousel-inner flex">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${carousel.length * 100}%`,
            }}
          >
            {carousel.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex justify-center items-center relative"
              >
                <img
                  src={category.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="max-w-full max-h-[470px] rounded-2xl object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          {carousel.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#E53935]" : "bg-gray-300"
              }`}
            />
          ))}
        </button>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-[#E53935] hover:bg-gray-100 p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-[#E53935] hover:bg-gray-100 p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
