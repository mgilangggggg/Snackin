import React from "react";

const StoreChoise = () => {
  // Store Choice
  const toko = [
    {
      id: 1,
      image: "./Toko/Gumilang-Snack.png",
      title: "Gumilang Snack",
    },
    {
      id: 2,
      image: "./Toko/Grosir-Jajanan.png",
      title: "Grosir Jajanan Murah",
    },
    {
      id: 3,
      image: "./Toko/Maicih.png",
      title: "Keripik Maicih",
    },
    {
      id: 4,
      image: "./Toko/Cemilan-Mini.png",
      title: "Cemilan Mini",
    },
    {
      id: 5,
      image: "./Toko/Sajodo-Snack.png",
      title: "Sajodo Snack",
    },
  ];
  // End Store Choice

  return (
    <>
      {/* Store Choice */}
      <div className="font-Poppins text-lg px-20 pt-10 cursor-pointer">
        <h1 className="font-medium py-4 text-2xl">Pilihan Toko</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {toko.map((toko) => (
            <div key={toko.id}>
              <div className="flex flex-row space-x-14 items-center justify-center p-8 cursor-pointer">
                <div className="flex flex-col items-center">
                  <img src={toko.image} alt={toko.title} className="w-44" />
                  <p className="text-base text-center p-2">{toko.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Store Choice */}
    </>
  );
};

export default StoreChoise;
