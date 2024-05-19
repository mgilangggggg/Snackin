import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "../Components/Carousel";

const Home = () => {
  const products = [
    {
      imageSrc: "/src/Assets/BasrengPedas.png", // ganti dengan path gambar yang benar
      title: "Basreng Pedas",
      price: "Rp. 15.000",
      description: "200 pcs terjual dalam sehari",
    },
    // Anda bisa menambahkan produk lain di sini
  ];

  return (
    <>
      <Navbar />
      <Carousel />

      {/* Kategori Produk */}
      <div className="font-medium text-lg px-20">
        <h1>Kategori Produk</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white">
            <img
              src="src/Assets/Product/Kerupuk-Kulit.png"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Keripik & Kerupuk</h3>
            </div>
          </div>
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white">
            <img
              src="src/Assets/Product/Sale-Lilit.png"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Olahan Pisang</h3>
            </div>
          </div>
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white">
            <img
              src="src/Assets/Product/Kacang-Sangrai.png"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Kacang - Kacangan</h3>
            </div>
          </div>
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white">
            <img
              src="src/Assets/Product/Nastar-Nanas.png"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Kue Basah</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Produk Baru */}
      <div className="font-medium text-lg px-20 pt-10">
        <h1>Produk Baru</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white">
            <img
              src="src/Assets/Product/Basreng.png"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Basreng Pedas</h3>
              <p className="text-gray-700 text-lg">Rp. 12.000</p>
              <p className="text-gray-500 text-sm mt-2">
                200 pcs terjual dalam sehari
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white">
            <img
              src="src/Assets/Product/Gemlong-Pedas.png"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Gemlong Pedas</h3>
              <p className="text-gray-700 text-lg">Rp. 15.000</p>
              <p className="text-gray-500 text-sm mt-2">
                230 pcs terjual dalam sehari
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white">
            <img
              src="src/Assets/Product/Singkong-Original.png"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Keripik Singkong Original
              </h3>
              <p className="text-gray-700 text-lg">Rp. 16.000</p>
              <p className="text-gray-500 text-sm mt-2">
                100 pcs terjual dalam sehari
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white">
            <img
              src="src/Assets/Product/Donat.png"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Donat</h3>
              <p className="text-gray-700 text-lg">Rp. 10.000</p>
              <p className="text-gray-500 text-sm mt-2">
                85 pcs terjual dalam sehari
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="font-medium text-lg px-20 pt-10">
        {/* Pilihan Toko */}
        <h1>Pilihan Toko</h1>
      </div>
      <div className="flex flex-row space-x-14 items-center justify-center p-8">
        <div className="flex flex-col items-center">
          <img
            src="src/Assets/Toko/Gumilang-Snack.png"
            alt=""
            className="w-44"
          />
          <p className="p-2">Gumilang Snack</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="src/Assets/Toko/Grosir-Jajanan.png"
            alt=""
            className="w-44"
          />
          <p className="p-2">Grosir Jajanan Murah</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="src/Assets/Toko/Maicih.png" alt="" className="w-44" />
          <p className="p-2">Maicih</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="src/Assets/Toko/Cemilan-Mini.png" alt="" className="w-44" />
          <p className="p-2">Cemilan Mini</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="src/Assets/Toko/Sajodo-Snack.png" alt="" className="w-44" />
          <p className="p-2">Sajodo Snack</p>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Home;
