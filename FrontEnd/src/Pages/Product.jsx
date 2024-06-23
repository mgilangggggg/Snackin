import React, { useEffect, useState } from "react";
import Nav from "../Components/UserNavbar";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import Rating from "../Components/Rating";
import axios from "axios";
import UserFooter from "../Components/UserFooter";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchAllProducts = async (page) => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/produk?page${page}`);
        setProduct((prevProduct) => [...prevProduct, ...res.data.data]);
      } catch (e) {
        console.error("Terjadi kesalahan saat mengambil Produk:", e);
      }
      setLoading(false);
    };
    fetchAllProducts(page);
  }, [page]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/kategori`);
        setCategories(res.data.data);
      } catch (e) {
        console.error("Terjadi kesalahan saat mengambil Data:", e);
      }
    };

    fetchCategories(page);
  }, [page]);

  const handleSeeMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 6);
  };

  const filteredProducts = selectedCategory
    ? product.filter((product) => product.id_kategori === selectedCategory)
    : product;

  return (
    <>
      {/* Navbar */}
      <Nav />
      {/* End Navbar */}

      <div className="font-Poppins text-lg px-10 py-32">
        <div className="flex">
          {/* Category */}
          <div className="w-1/4 pr-4">
            <h1 className="font-medium py-4 text-2xl">Kategori</h1>
            <div className="flex flex-wrap gap-2">
              <button
                className={`flex-1 min-w-[45%] px-4 py-2 text-sm rounded-full border ${
                  selectedCategory === ""
                    ? "bg-[#E53935] text-white"
                    : "text-[#E53935] border-[#E53935] hover:bg-red-50"
                }`}
              >
                Semua Kategori
              </button>
              {categories.map((category) => (
                <button
                  key={category.id_kategori}
                  onClick={() => setSelectedCategory(category.id_kategori)}
                  className={`flex-1 min-w-[45%] px-4 py-2 text-sm rounded-full border ${
                    selectedCategory === category.id_kategori
                      ? "bg-[#E53935] text-white"
                      : "text-[#E53935] border-[#E53935] hover:bg-red-50"
                  }`}
                >
                  {category.nama_kategori}
                </button>
              ))}
            </div>
          </div>
          {/* End Category */}

          {/* Product */}
          <div className="w-3/4 pl-4">
            <div className="container flex flex-wrap">
              {filteredProducts.slice(0, visibleProducts).map((product) => {
                // Calculate the discount amount
                const discountedAmount =
                  (product.diskon_produk / 100) * product.harga_produk;

                // Calculate the price after discount
                const discountedPrice = product.harga_produk - discountedAmount;
                return (
                  <div
                    key={product.id_produk}
                    className="w-full md:w-1/2 lg:w-1/4 p-1"
                  >
                    <Link to={`/detail-product/${product.id_produk}`}>
                      <div className="bg-white border rounded-lg overflow-hidden hover:bg-white hover:shadow-xl">
                        <img
                          src={product.photo_produk}
                          alt={product.nama_produk}
                          className="w-full h-48 object-cover rounded-md"
                        />
                        <div className="p-4">
                          <h5 className="text-base font-normal text-start line-clamp-2">
                            {product.nama_produk}
                          </h5>
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
            {/* End Product */}

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
          </div>
        </div>
      </div>

      {/* Footer */}
      <UserFooter />
      {/* End Footer */}
    </>
  );
};

export default Product;
