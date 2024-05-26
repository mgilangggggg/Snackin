import React from "react";

const CategoryProduct = () => {
  // Category Product
  const category1 = [
    {
      id: 1,
      image: "./Category-Product/Biskuit.png",
      title: "Biskuit",
    },
    {
      id: 2,
      image: "../Category-Product/Kue-Kering.png",
      title: "Kue Kering",
    },
    {
      id: 3,
      image: "./Category-Product/Basreng.png",
      title: "Basreng",
    },
    {
      id: 4,
      image: "./Category-Product/Keripik.png",
      title: "Keripik",
    },
  ];

  const category2 = [
    {
      id: 1,
      image: "./Category-Product/Keripik.png",
      title: "Kerupuk",
    },
    {
      id: 2,
      image: "./Category-Product/Keripik.png",
      title: "Olahan Pisang",
    },
    {
      id: 3,
      image: "./Category-Product/Kacang-Kacangan.png",
      title: "Kacang - Kacangan",
    },
    {
      id: 4,
      image: "./Category-Product/Keripik.png",
      title: "Kue Basah",
    },
  ];
  // End Catergory Product

  return (
    <>
      {/* Category Product*/}
      <div className="font-Poppins text-lg px-10 cursor-pointer">
        <h1 className="font-medium py-4 text-2xl">Kategori</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>

      <div className="font-Poppins text-lg px-10 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
      {/* End Category Product */}
    </>
  );
};

export default CategoryProduct;
