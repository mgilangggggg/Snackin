import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/kategori`);
        setCategory(res.data.data);
      } catch (e) {
        console.error("Terjadi Kesalahan saat menggambil Kategori:", e);
      }
    };
    fetchAllCategory();
  }, []);

  return (
    <>
      {/* Category Product*/}
      <div className="font-Poppins text-lg px-10">
        <h1 className="font-medium py-4 text-2xl">Kategori</h1>
        <Link
          to="/product"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        >
          {category.map((category) => (
            <div
              key={category.id_kategori}
              className="rounded-sm overflow-hidden border p-4 bg-white hover:bg-white hover:drop-shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={category.photo_kategori}
                  alt={category.nama_kategori}
                  className="rounded-full size-32"
                />
              </div>
              <p className="text-center font-light text-base">
                {category.nama_kategori}
              </p>
            </div>
          ))}
        </Link>
      </div>
      {/* End Category Product */}
    </>
  );
};

export default CategoryProduct;
