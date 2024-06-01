import React, { useState } from "react";
import Nav from "../Components/UserNavbar";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import Rating from "../Components/Rating";
import UserFooter from "../Components/UserFooter";

const Product = () => {
  // State untuk kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState("");

  // Category
  const Category = [
    "Basreng",
    "Keripik",
    "Kue Kering",
    "Biskuit",
    "Kerupuk",
    "Lainnya",
  ];
  // End Category

  // Data Product
  const Product = [
    {
      productId: 1,
      productImage: "./Product/Basreng-Sulah-Viral.png",
      productName: "Basreng Sulah Viral 500gram pedas",
      category: "Basreng",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 2,
      productImage: "./Product/Keripik-Kentang-Balado.png",
      productName: "Keripik Kentang",
      category: "Keripik",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 3,
      productImage: "./Product/Pisang-Dolar.png",
      productName: "Pisang Dolar",
      category: "Keripik",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 4,
      productImage: "./Product/Sale-Lidah.png",
      productName: "Sale Lidah",
      category: "Keripik",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 5,
      productImage: "./Product/Kuping-Mini.png",
      productName: "Kuping Mini",
      category: "Keripik",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 6,
      productImage: "./Product/Kuping-Gajah.png",
      productName: "Kuping Gajah",
      category: "Keripik",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 7,
      productImage: "./Product/Kerupuk-Seblak.png",
      productName: "Kerupuk Seblak",
      category: "Kerupuk",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 8,
      productImage: "./Product/Cookies-Coklat.png",
      productName: "Cookies Coklat",
      category: "Kue Kering",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 9,
      productImage: "./Product/Nastar-Premium.png",
      productName: "Nastar Premium",
      category: "Kue Kering",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 10,
      productImage: "./Product/Kue-Kering.png",
      productName: "Aneka Kue Kering",
      category: "Kue Kering",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 11,
      productImage: "./Product/GG-SUS.png",
      productName: "Sus Kering Isi Coklat",
      category: "Kue Kering",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 12,
      productImage: "./Product/Kacang-Polong.png",
      productName: "Kacang Polong",
      category: "Lainnya",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 13,
      productImage: "./Product/Singkong-Balado.png",
      productName: "Keripik Singkong Balado 500gram",
      category: "Keripik",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 14,
      productImage: "./Product/Donat.png",
      productName: "Donat",
      category: "Lainnya",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 15,
      productImage: "./Product/Singkong-Original.png",
      productName: "Keripik Singkong Varian Original 500gram",
      category: "Keripik",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 3.55,
      soldCount: 50,
    },
  ];

  const filteredProducts = selectedCategory
    ? Product.filter((product) => product.category === selectedCategory)
    : Product;

  return (
    <>
      {/* Navbar */}
      <Nav />
      {/* End Navbar */}

      <div className="font-Poppins text-lg px-10 py-32">
        {/* Category */}
        <div className="flex items-center space-x-3">
          <h1 className="font-medium py-4 text-2xl">Kategori </h1>
          {Category.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 text-sm rounded-full border ${
                selectedCategory === category
                  ? "bg-[#E53935] text-white"
                  : "text-[#E53935] border-[#E53935] hover:bg-red-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* End Category */}

        {/* Product */}
        <div className="container flex flex-wrap">
          {filteredProducts.map((product) => {
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
                    <h5 className="text-base font-normal text-start line-clamp-2">
                      {product.productName}
                    </h5>
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
                    <div className="flex items-center text-xs mt-2">
                      <Rating rating={product.rating} totalStars={5} />
                      <p className="text-gray-400 ml-2">
                        {product.soldCount} Terjual
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* End Product */}

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
      </div>

      {/* Footer */}
      <UserFooter />
      {/* End Footer */}
    </>
  );
};

export default Product;