import React from "react";

import UserNavbar from "../Components/UserNavbar";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating";
import UserFooter from "../Components/UserFooter";

const StoreProfile = () => {
  // Toko
  const Toko = [
    {
      idToko: 1,
      imageToko: "./Toko/Gumilang-Snack.png",
      namaToko: "Gumilang Snack",
      descriptioToko: `Gumilang Snack adalah toko yang menjual berbagai macam makanan
      ringan dan oleh-oleh tradisional khas Jawa Barat. Kami menjual
      berbagai pilihan makanan ringan secara ecer dan juga grosir, kami
      juga mengedepankan kualitas produk kami, kualitas produk yang kami
      jual dijamin sebanding dengan harga.`,
      alamatToko: "Perbatasan Ciamis - Majalengka, Jawa Barat",
      ratingToko: 4.5,
      totalReviews: 180,
    },
  ];

  // Data Product
  const Product = [
    {
      productId: 1,
      productImage: "./Product/Basreng-Sulah-Viral.png",
      productName: "Basreng Sulah Viral 500gram pedas",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 2,
      productImage: "./Product/Keripik-Kentang-Balado.png",
      productName: "Keripik Kentang",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 3,
      productImage: "./Product/Pisang-Dolar.png",
      productName: "Pisang Dolar",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 4,
      productImage: "./Product/Sale-Lidah.png",
      productName: "Sale Lidah",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 5,
      productImage: "./Product/Kuping-Mini.png",
      productName: "Kuping Mini",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 6,
      productImage: "./Product/Kuping-Gajah.png",
      productName: "Kuping Gajah",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 7,
      productImage: "./Product/Kerupuk-Seblak.png",
      productName: "Kerupuk Seblak",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 8,
      productImage: "./Product/Cookies-Coklat.png",
      productName: "Cookies Coklat",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 9,
      productImage: "./Product/Nastar-Premium.png",
      productName: "Nastar Premium",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 10,
      productImage: "./Product/Kue-Kering.png",
      productName: "Aneka Kue Kering",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 11,
      productImage: "./Product/GG-SUS.png",
      productName: "Sus Kering Isi Coklat",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 12,
      productImage: "./Product/Kacang-Polong.png",
      productName: "Kacang Polong",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 13,
      productImage: "./Product/Singkong-Balado.png",
      productName: "Keripik Singkong Balado 500gram",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 14,
      productImage: "./Product/Donat.png",
      productName: "Donat",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 15,
      productImage: "./Product/Singkong-Original.png",
      productName: "Keripik Singkong Varian Original 500gram",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "Kab. Ciamis",
      rating: 3.55,
      soldCount: 50,
    },
  ];
  // End Data Produk

  return (
    <>
      {/* Navbar */}
      <UserNavbar />
      {/* End Navbar */}

      <div className="font-Poppins px-10 py-32">
        <div className="bg-white p-6 rounded border mx-auto">
          {Toko.map((toko) => (
            <div key={toko.idToko} className="mt-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <img
                    src={toko.imageToko}
                    alt={toko.namaToko}
                    className="h-16 w-16 mr-4"
                  />
                  <div>
                    <h1 className="text-xl font-medium">{toko.namaToko}</h1>
                    <p className="text-gray-600">{toko.alamatToko}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <Rating rating={toko.ratingToko} totalStars={5} />
                    <span className="ml-2 text-gray-600">
                      {toko.ratingToko}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    {toko.totalReviews} Ulasan
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">{toko.descriptioToko}</p>
              </div>
            </div>
          ))}
        </div>

        {/* New Product */}
        <div className="font-Poppins text-lg py-4">
          <h1 className="font-medium py-4 text-2xl">Produk</h1>
          <Link to="/detail-product" className="container flex flex-wrap">
            {Product.map((product) => {
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
          </Link>
        </div>
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
      {/* End New Product */}

      {/* Footer */}
      <UserFooter />
      {/* End Footer */}
    </>
  );
};

export default StoreProfile;
