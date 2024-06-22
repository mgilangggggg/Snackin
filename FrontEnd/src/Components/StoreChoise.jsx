import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StoreChoise = () => {
  const [toko, setToko] = useState([]);

  useEffect(() => {
    const fetchToko = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/toko`);
        setToko(res.data.data);
      } catch (e) {
        console.error("Terjadi kesalahan saat mengambil Toko:", e);
      }
    };
    fetchToko();
  }, []);

  return (
    <>
      {/* Store Choice */}
      <div className="font-Poppins text-lg px-10 mt-10">
        <h1 className="font-medium py-4 text-2xl">Pilihan Toko</h1>
        <Link
          to="/shop-product"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        >
          {toko.map((toko) => (
            <div key={toko.id_toko}>
              <div className="flex flex-row space-x-14 iStoretems-center justify-center p-8 cursor-pointer">
                <div className="flex flex-col items-cenStoretStoreer">
                  <img
                    src={toko.photo_toko}
                    alt={toko.nama_toko}
                    className="w-44"
                  />
                  <p className="text-base text-center p-2">{toko.nama_toko}</p>
                </div>
              </div>
            </div>
          ))}
        </Link>
      </div>
      {/* End Store Choice */}
    </>
  );
};

export default StoreChoise;
