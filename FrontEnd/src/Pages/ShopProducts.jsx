import React, { useEffect, useState } from "react";
import UserNavbar from "../Components/UserNavbar";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating";
import UserFooter from "../Components/UserFooter";
import axios from "axios";

const ShopProducts = () => {
  const [toko, setToko] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(12);

  useEffect(() => {
    const fetchToko = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/toko/2`);
        setToko(res.data.data);
      } catch (e) {
        console.error("Terjadi kesalahan saat mengambil Data Toko");
      }
    };

    fetchToko();
  });

  useEffect(() => {
    const fetchAllProducts = async (page) => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:3000/produk/?page=${page}`
        );
        setProducts((prevProducts) => {
          const newProducts = res.data.data.filter(
            (newProduct) =>
              !prevProducts.some(
                (product) => product.id_produk === newProduct.id_produk
              )
          );
          return [...prevProducts, ...newProducts];
        });
      } catch (e) {
        console.error("Terjadi kesalahan saat mengambil Data Produk:", e);
      }
      setLoading(false);
    };
    fetchAllProducts(page);
  }, [page]);

  const handleSeeMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <UserNavbar />

      <div className="font-Poppins px-10 py-32">
        <div className="bg-white p-6 rounded border mx-auto">
          {toko.map((toko) => (
            <div key={toko.id_toko} className="mt-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <img
                    src={toko.photo_toko}
                    alt={toko.nama_toko}
                    className="h-16 w-16 mr-4"
                  />
                  <div>
                    <h1 className="text-xl font-medium">{toko.nama_toko}</h1>
                    <p className="text-gray-600">{toko.alamat_toko}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <Rating
                      rating={parseInt(toko.rating_toko)}
                      totalStars={5}
                    />
                    <span className="ml-2 text-gray-600">
                      {toko.rating_toko}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    {toko.ulasan_toko} Ulasan
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">{toko.deskripsi_toko}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="font-Poppins text-lg py-4">
          <h1 className="font-medium py-4 text-2xl">Produk</h1>
          <div className="container flex flex-wrap">
            {products.slice(0, visibleProducts).map((product) => {
              const discountedAmount =
                (product.diskon_produk / 100) * product.harga_produk;
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
                        className="w-full h-48 object-cover rounded-lg"
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
                          <Rating
                            rating={product.rating_produk}
                            totalStars={5}
                          />
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

          {/* See More */}
          <div className="flex items-center justify-center mt-10">
            {!loading && visibleProducts < products.length && (
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
        </div>
      </div>

      <UserFooter />
    </>
  );
};

export default ShopProducts;
