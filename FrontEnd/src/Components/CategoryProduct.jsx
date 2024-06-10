import React from "react";
import { Link } from "react-router-dom";

const CategoryProduct = () => {
  // Category Product
  const category1 = [
    {
      id: 1,
      image: "./Category-Product/Keripik.png",
      title: "Keripik & Kerupuk",
    },
    {
      id: 2,
      image: "../Category-Product/Kue-Kering.png",
      title: "Kue & Biskuit",
    },
    {
      id: 3,
      image: "./Category-Product/Basreng.png",
      title: "Permen & Manisan",
    },
    {
      id: 1,
      image: "./Category-Product/Keripik.png",
      title: "Kacang",
    },
    {
      id: 5,
      image: "./Category-Product/Keripik.png",
      title: "Minuman",
    },
  ];

  const category2 = [
    {
      id: 1,
      image: "./Category-Product/Keripik.png",
      title: "Oleh - Oleh",
    },
    {
      id: 4,
      image: "./Category-Product/Basreng.png",
      title: "Camilan Tradisional",
    },
    {
      id: 2,
      image: "./Category-Product/Keripik.png",
      title: "Camilan Sehat",
    },
    {
      id: 3,
      image: "./Category-Product/Kacang-Kacangan.png",
      title: "Best Seller",
    },
    {
      id: 4,
      image: "./Category-Product/Keripik.png",
      title: "Lainnya",
    },
  ];
  // End Catergory Product

  return (
    <>
      {/* Category Product*/}
      <div className="font-Poppins text-lg px-10">
        <h1 className="font-medium py-4 text-2xl">Kategori</h1>
        <Link
          to="/product"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        >
          {category1.map((category) => (
            <div
              key={category.id}
              className="rounded-sm overflow-hidden border p-4 bg-white hover:bg-white hover:drop-shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="rounded-full size-32"
                />
              </div>
              <p className="text-center font-light text-base">
                {category.title}
              </p>
            </div>
          ))}
        </Link>
      </div>

      <div className="font-Poppins text-lg px-10">
        <Link
          to="/product"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        >
          {category2.map((category) => (
            <div
              key={category.id}
              className="rounded-sm overflow-hidden border p-4 bg-white hover:bg-white hover:drop-shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="rounded-full size-32"
                />
              </div>
              <h3 className="text-center font-light text-base">
                {category.title}
              </h3>
            </div>
          ))}
        </Link>
      </div>
      {/* End Category Product */}
    </>
  );
};

export default CategoryProduct;
