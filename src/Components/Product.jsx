import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Product = () => {
  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
};

export default Product;
