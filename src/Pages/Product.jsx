import React from "react";
import Nav from "../Components/UserNavbar";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating";
import UserFooter from "../Components/UserFooter";
import { TiShoppingCart } from "react-icons/ti";

const Product = () => {
  // Category
  const Category = [
    "Basreng",
    "Keripik",
    "Kue Kering",
    "Biskuit",
    "Kerupuk",
    "Lainnya",
  ];

  // Product
  const Product = [
    {
      productId: 1,
      productImage: "./Product/Basreng-Sulah-Viral.png",
      productName: "Basreng Sulah Viral",
      price: "20.000",
      rating: 4.5,
      totalReviews: 180,
      soldCount: 50,
    },
    {
      productId: 2,
      productImage: "./Product/Keripik-Kentang-Balado.png",
      productName: "Keripik Kentang",
      price: "20.000",
      discount: 5,
      rating: 3.5,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 3,
      productImage: "./Product/Pisang-Dolar.png",
      productName: "Pisang Dolar",
      price: "17.000",
      discount: 5,
      rating: 3.5,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 4,
      productImage: "./Product/Sale-Lidah.png",
      productName: "Sale Lidah",
      price: "16.000",
      discount: 5,
      rating: 3.5,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 5,
      productImage: "./Product/Kuping-Mini.png",
      productName: "Kuping Mini",
      price: "15.000",
      discount: 5,
      rating: 2.5,
      totalReviews: 180,
      soldCount: 15,
    },
    {
      productId: 6,
      productImage: "./Product/Kuping-Gajah.png",
      productName: "Kuping Gajah",
      price: "17.000",
      discount: 5,
      rating: 4,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 7,
      productImage: "./Product/Kerupuk-Seblak.png",
      productName: "Kerupuk Seblak",
      price: "15.000",
      discount: 5,
      rating: 4,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 8,
      productImage: "./Product/Cookies-Coklat.png",
      productName: "Cookies Coklat",
      price: "54.000",
      discount: 5,
      rating: 3,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 9,
      productImage: "./Product/Nastar-Premium.png",
      productName: "Nastar Premium",
      price: "54.000",
      discount: 5,
      rating: 4.5,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 10,
      productImage: "./Product/Kue-Kering.png",
      productName: "Aneka Kue Kering",
      price: "46.000",
      discount: 5,
      rating: 4,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 11,
      productImage: "./Product/GG-SUS.png",
      productName: "Sus Kering Isi Coklat",
      price: "24.000",
      discount: 5,
      rating: 4.5,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 12,
      productImage: "./Product/Kacang-Polong.png",
      productName: "Kacang Polong",
      price: "24.000",
      discount: 5,
      rating: 4.5,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 13,
      productImage: "./Product/Singkong-Balado.png",
      productName: "Keripik Singkong Balado 500gram",
      price: "16.000",
      discount: 5,
      rating: 4,
      totalReviews: 180,
      soldCount: 30,
    },
    {
      productId: 14,
      productImage: "./Product/Donat.png",
      productName: "Donat",
      price: "10.000",
      discount: 5,
      rating: 4.5,
      totalReviews: 180,
      soldCount: 20,
    },
    {
      productId: 15,
      productImage: "./Product/Singkong-Original.png",
      productName: "Keripik Singkong Original 500gram",
      price: "16.000",
      discount: 5,
      rating: 4.5,
      totalReviews: 180,
      soldCount: 20,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Nav />
      {/* End Navbar */}

      {/* Category */}
      <div className="font-Poppins text-lg px-10 py-32">
        <div className="flex items-center space-x-3">
          <h1 className="font-medium py-4 text-2xl">Kategori </h1>
          {Category.map((Category) => (
            <Link
              key={Category}
              className="px-4 py-1 text-sm rounded-full border text-[#E53935] border-[#E53935] hover:bg-red-50"
            >
              {Category}
            </Link>
          ))}
        </div>

        <div className="container flex flex-wrap cursor-pointer">
          {Product.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/6 p-1">
              <div className="bg-white border rounded-lg overflow-hidden py-2 hover:bg-white hover:shadow-xl">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h5 className="text-lg font-normal text-start truncate">
                    {product.productName}
                  </h5>
                  <p className="text-black font-medium text-xl">
                    Rp
                    {product.price.toLocaleString({
                      style: "currency",
                    })}
                  </p>
                  <div className="text-gray-400 text-xs mt-2">
                    {product.soldCount} Terjual
                  </div>
                  <div className="container mx-auto py-1">
                    <Rating rating={product.rating} totalStars={5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        <div className="flex items-center justify-center mt-10">
          <button className="px-20 py-2 border border-[#E53935] text-[#E53935] hover:bg-red-50 rounded-full">
            Lihat Lainnya
          </button>
        </div>
        {/* End See More */}
      </div>
      {/* End Category */}

      {/* Footer */}
      <UserFooter />
      {/* End Footer */}
    </>
  );
};

export default Product;
