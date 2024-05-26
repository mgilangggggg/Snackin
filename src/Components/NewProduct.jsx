import React from "react";

const NewProduct = () => {
  // New Product
  const product = [
    {
      id: 1,
      image: "./Product/Basreng.png",
      title: "Basreng pedas renyah gurih | daun jeruk",
      price: "Rp. 15.000",
      description: "230 Terjual",
    },
    {
      id: 2,
      image: "./Product/Basreng.png",
      title: "Kue Basah",
      price: "Rp. 15.000",
      description: "230 Terjual",
    },
    {
      id: 3,
      image: "./Product/Basreng.png",
      title: "Kue Basah",
      price: "Rp. 15.000",
      description: "230 Terjual",
    },
    {
      id: 4,
      image: "./Product/Basreng.png",
      title: "Kue Basah",
      price: "Rp. 15.000",
      description: "230 Terjual",
    },
    {
      id: 5,
      image: "./Product/Basreng.png",
      title: "Kue Basah",
      price: "Rp. 15.000",
      description: "230 Terjual",
    },
    {
      id: 6,
      image: "./Product/Basreng.png",
      title: "Kue Basah",
      price: "Rp. 15.000",
      description: "230 Terjual",
    },
    {
      id: 7,
      image: "./Product/Basreng.png",
      title: "Kue Basah",
      price: "Rp. 15.000",
      description: "230 Terjual",
    },
    {
      id: 8,
      image: "./Product/Basreng.png",
      title: "celana jeans pria panjang celana jeans korea style...",
      price: "Rp. 15.000",
      discount: "-74%",
      rating: 3.5,
    },
  ];
  // End New Product

  return (
    <>
      {/* New Product */}
      <div className="font-Poppins text-lg px-10 pt-10 cursor-pointer">
        <h1 className="font-medium py-4 text-2xl">Produk baru</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-1">
          {product.map((product) => (
            <div
              key={product.id}
              className="rounded-sm overflow-hidden border bg-white p-4 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-sm"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-normal">{product.title}</h3>
                <h5 className="text-black font-medium text-xl">
                  {product.price}
                </h5>
                <p className="text-gray-400 text-xs mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End New Product */}
    </>
  );
};

export default NewProduct;
