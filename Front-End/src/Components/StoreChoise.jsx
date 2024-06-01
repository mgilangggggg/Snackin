import React from "react";
import { Link } from "react-router-dom";

const StoreChoise = () => {
  // Store Choice
  const Toko = [
    {
      idStore: 1,
      imageStore: "./Toko/Gumilang-Snack.png",
      nameStore: "Gumilang Snack",
    },
    {
      idStore: 2,
      imageStore: "./Toko/Grosir-Jajanan.png",
      nameStore: "Grosir Jajanan Murah",
    },
    {
      idStore: 3,
      imageStore: "./Toko/Maicih.png",
      nameStore: "Keripik Maicih",
    },
    {
      idStore: 4,
      imageStore: "./Toko/Cemilan-Mini.png",
      nameStore: "Cemilan Mini",
    },
    {
      idStore: 5,
      imageStore: "./Toko/Sajodo-Snack.png",
      nameStore: "Sajodo Snack",
    },
  ];
  // End Store Choice

  return (
    <>
      {/* Store Choice */}
      <div className="font-Poppins text-lg px-20 pt-10">
        <h1 className="font-medium py-4 text-2xl">Pilihan Toko</h1>
        <Link
          to="/store-profile"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        >
          {Toko.map((toko) => (
            <div key={toko.idStore}>
              <div className="flex flex-row space-x-14 iStoretems-center justify-center p-8 cursor-pointer">
                <div className="flex flex-col items-cenStoretStoreer">
                  <img
                    src={toko.imageStore}
                    alt={toko.nameStore}
                    className="w-44"
                  />
                  <p className="text-base text-center p-2">{toko.nameStore}</p>
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
