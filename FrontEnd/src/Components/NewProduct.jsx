import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import Rating from "./Rating";
import axios from "axios";
import { Link } from "react-router-dom";

const NewProduct = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(12);

  useEffect(() => {
    const fetchAllProduct = async (page) => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:3000/produk/?page=${page}`
        );
        setProduct((prevProduct) => [...prevProduct, ...res.data.data]);
      } catch (e) {
        console.error("Terjadi kesalahan saat mengambil Produk:", e);
      }
      setLoading(false);
    };
    fetchAllProduct(page);
  }, [page]);

  const handleSeeMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 6);
  };

  return (
    <>
      {/* New Product */}
      <div className="font-Poppins text-lg px-10 mt-10">
        <h1 className="font-medium py-4 text-2xl">Produk baru</h1>
        <div className="container flex flex-wrap">
          {product.slice(0, visibleProducts).map((product) => {
            // Calculate the discount amount
            const discountedAmount =
              (product.diskon_produk / 100) * product.harga_produk;

            // Calculate the price after discount
            const discountedPrice = product.harga_produk - discountedAmount;

            return (
              <div
                key={product.id_produk}
                className="w-full md:w-1/2 lg:w-1/6 p-1"
              >
                <Link to={`/detail-product/${product.id_produk}`}>
                  <div className="bg-white border rounded-lg overflow-hidden hover:bg-white hover:shadow-xl">
                    <img
                      src={product.photo_produk}
                      alt={product.nama_produk}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <div className="p-4">
                      <h3 className="text-base font-normal text-start line-clamp-2">
                        {product.nama_produk}
                      </h3>
                      <p className="text-black font-medium text-base">
                        Rp
                        {discountedPrice.toLocaleString("id-ID")}
                      </p>
                      <div className="flex items-center text-xs mt-2">
                        <p className="text-gray-500 line-through mr-2">
                          Rp
                          {parseInt(product.harga_produk).toLocaleString(
                            "id-ID"
                          )}
                        </p>
                        <p className="text-green-500">
                          -{parseInt(product.diskon_produk).toFixed()}% OFF
                        </p>
                      </div>
                      <div className="flex items-center text-xs mt-2">
                        <MdLocationOn />
                        <p className="text-gray-400 mr-2">
                          {product.lokasi_produk}
                        </p>
                      </div>
                      <div className="flex items-center text-xs mt-2">
                        <Rating rating={product.rating_produk} totalStars={5} />
                        <p className="text-gray-400 ml-2">
                          {product.produk_terjual} Terjual
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* End New Product */}

      {/* See More */}
      <div className="flex items-center justify-center mt-10">
        {!loading && visibleProducts < product.length && (
          <button
            onClick={handleSeeMore}
            className="px-20 py-2 border border-[#E53935] text-[#E53935] hover:bg-red-50 rounded-full"
          >
            Lihat Lainnya
          </button>
        )}
        {loading && <p className="px-20 py-2 text-gray-500">Memuat...</p>}
      </div>
      {/* End See More */}
    </>
  );
};

export default NewProduct;
