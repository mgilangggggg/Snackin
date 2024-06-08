import React from "react";
import { MdLocationOn } from "react-icons/md";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const NewProduct = () => {
  // Data Produk
  const newProduct = [
    {
      productId: 1,
      productImage: "./Product/Basreng.png",
      productName: "BASRENG stik PEDAS 200gram",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: "",
      soldCount: 0,
    },
    {
      productId: 2,
      productImage: "./Product/Makroni-Usus.png",
      productName: "Makroni Usus",
      originalPrice: 12000,
      discountPercentage: 2,
      location: "Kab. Bandung",
      rating: "",
      soldCount: 0,
    },
    {
      productId: 3,
      productImage: "./Product/Keripik-Kentang-Balado.png",
      productName: "Keripik Kentang Balado",
      originalPrice: 16000,
      discountPercentage: 0,
      location: "Kab. Bogor",
      rating: "",
      soldCount: 0,
    },
    {
      productId: 4,
      productImage: "./Product/Keripik-Kaca.png",
      productName: "Keripik Kaca Pedas",
      originalPrice: 15000,
      discountPercentage: 0,
      location: "Kota Depok",
      rating: "",
      soldCount: 0,
    },
    {
      productId: 5,
      productImage: "./Product/Kuping-Mini.png",
      productName: "Kuping Mini",
      originalPrice: 15000,
      discountPercentage: 0,
      location: "Kab. Ciamis",
      rating: "",
      soldCount: 0,
    },
    {
      productId: 6,
      productImage: "./Product/Kuping-Gajah.png",
      productName: "Kuping Gajah",
      originalPrice: 15000,
      discountPercentage: 1,
      location: "Kab. Ciamis",
      rating: "",
      soldCount: 0,
    },
    {
      productId: 7,
      productImage: "./Product/Kerupuk-Seblak.png",
      productName: "Kerupuk Seblak",
      originalPrice: 15000,
      discountPercentage: 2,
      location: "Kab. Karawang",
      rating: "",
      soldCount: 0,
    },
    {
      productId: 8,
      productImage: "./Product/Cookies-Coklat.png",
      productName: "Cookies Coklat",
      originalPrice: 54000,
      discountPercentage: 5,
      location: "Kab. Bandung",
      rating: "",
      soldCount: 0,
    },
  ];
  // End Data Product

  return (
    <>
      {/* New Product */}
      <div className="font-Poppins text-lg px-10 mt-10">
        <h1 className="font-medium py-4 text-2xl">Produk baru</h1>
        <div className="container flex flex-wrap">
          {newProduct.map((product) => {
            // Calculate the discount amount
            const discountedAmount =
              (product.discountPercentage / 100) * product.originalPrice;

            // Calculate the price after discount
            const discountedPrice = product.originalPrice - discountedAmount;

            return (
              <div
                key={product.productId}
                className="w-full md:w-1/2 lg:w-1/6 p-1"
              >
                <div className="bg-white border rounded-lg overflow-hidden py-2 hover:bg-white hover:shadow-xl">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-base font-normal text-start line-clamp-2">
                      {product.productName}
                    </h3>
                    <p className="text-black font-medium text-base">
                      Rp
                      {discountedPrice.toLocaleString("id-ID")}
                    </p>
                    <div className="flex items-center text-xs mt-2">
                      <p className="text-gray-500 line-through mr-2">
                        Rp
                        {product.originalPrice.toLocaleString("id-ID")}
                      </p>
                      <p className="text-green-500">
                        -{product.discountPercentage.toFixed()}% OFF
                      </p>
                    </div>
                    <div className="flex items-center text-xs mt-2">
                      <MdLocationOn />
                      <p className="text-gray-400 mr-2">{product.location}</p>
                    </div>
                    {/* <div className="flex items-center text-xs mt-2">
                      <Rating rating={product.rating} totalStars={5} />
                      <p className="text-gray-400 ml-2">
                        {product.soldCount} Terjual
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End New Product */}

      {/* See More */}
      <div className="flex items-center justify-center mt-10">
        <Link
          to=""
          className="px-20 py-2 border border-[#E53935] text-[#E53935] hover:bg-red-50 rounded-full"
        >
          Lihat Lainnya
        </Link>
      </div>
      {/* End See More */}
    </>
  );
};

export default NewProduct;
