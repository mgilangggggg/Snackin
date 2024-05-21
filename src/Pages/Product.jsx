import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import Rating from "../Components/Rating";

const Product = () => {
  const categories = [
    "Basreng",
    "Keripik",
    "Kue kering",
    "Biskuit",
    "Kerupuk",
    "Lainnya",
  ];

  return (
    <>
      <Nav />
      {/* Kategori */}
      <div className="font-medium text-lg px-20 py-24">
        <div className="flex items-center space-x-4">
          <h1>Kategori </h1>
          {categories.map((category, index) => (
            <Link
              key={index}
              className="px-4 py-1 border text-sm rounded-full border-black hover:bg-[#E53935] hover:text-white focus:outline-none"
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="container mx-auto px-4 py-16 flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Basreng-Sulah-Viral.png"
                alt="Basreng Sulah Viral"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">
                Basreng Sulah Viral
              </h5>
              <p className="text-gray-700 text-base mt-2">Rp. 20.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Pisang-Dolar.png"
                alt="Pisang Dolar"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">Pisang </h5>
              <p className="text-gray-700 text-base mt-2">Rp. 20.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Keripik-Kentang-Balado.png"
                alt="Keripik Kentang Balado"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">
                Keripik Kentang Balado
              </h5>
              <p className="text-gray-700 text-base mt-2">Rp. 17.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Sale-Lidah.png"
                alt="Sale Lidah"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">Sale Lidah</h5>
              <p className="text-gray-700 text-base mt-2">Rp. 16.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Kuping-Gajah.png"
                alt="Kuping Gajah"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">Kuping Gajah</h5>
              <p className="text-gray-700 text-base mt-2">Rp. 17.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Kuping-Mini.png"
                alt="Kuping Mini"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">Kuping Mini</h5>
              <p className="text-gray-700 text-base mt-2">Rp. 15.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Kerupuk-Seblak.png"
                alt="Kerupuk Seblak"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">Kerupuk Seblak</h5>
              <p className="text-gray-700 text-base mt-2">Rp. 15.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Cookies-Coklat.png"
                alt="Cookies Coklat"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">Cookies Coklat</h5>
              <p className="text-gray-700 text-base mt-2">Rp. 54.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Nastar-Premium.png"
                alt="Nastar Premium"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">Nastar Premium</h5>
              <p className="text-gray-700 text-base mt-2">Rp. 65.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Aneka-Kue-Kering.png"
                alt="Aneka Kue Kering"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">
                Aneka Kue Kering
              </h5>
              <p className="text-gray-700 text-base mt-2">Rp. 46.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/Kacang-Polong.png"
                alt="Kacang Polong"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">
                Kacang Polong Hijau
              </h5>
              <p className="text-gray-700 text-base mt-2">Rp. 24.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src="src/Assets/Product/GG-SUS.png"
                alt="GG SUS Kering isi coklat"
                className="w-full h-full rounded-lg object-cover mt-4 mb-4"
              />
              <h5 className="text-xl font-medium text-start">
                GG SUS Kering isi coklat
              </h5>
              <p className="text-gray-700 text-base mt-2">Rp. 24.000</p>
              <div className="container mx-auto py-4">
                <Rating rating={3} totalStars={5} />
              </div>
              <div className="flex items-center space-x-24 mt-10">
                <Link
                  to="/order-detail"
                  className="bg-[#E53935] text-white font-medium py-1 px-4 rounded focus:outline-none"
                >
                  Beli
                </Link>
                <div className="text-[#E53935] cursor-pointer">
                  <TiShoppingCart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
