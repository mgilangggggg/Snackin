import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SellerBuyerForum = () => {
  // Seller & Buyer Forum
  const forum = [
    {
      image: "./Use-Customer.png",
      name: "Use-Customer",
      description: `Nikmati kemudahan berdiskusi secara langsung dengan penjual dan
      pembeli, di mana Anda dapat merasakan interaksi yang lebih
      personal dan mendalam. Melalui percakapan ini, Anda memiliki
      kesempatan untuk mengajukan pertanyaan, mendapatkan penjelasan
      mendetail, dan melakukan negosiasi harga dengan lebih leluasa.`,
    },
  ];
  // End Seller & Buyer Forum

  return (
    <>
      {/* Seller & Buyer Forum */}
      <div className="font-Poppins text-lg px-3 pt-10">
        <h1 className="font-medium py-4 text-2xl text-center">
          Forum Penjual & Pembeli
        </h1>
        {forum.map((forum) => (
          <div key={forum}>
            <div className="flex justify-center">
              <div className="w-10/12 h-60 bg-[#E53935] rounded-lg shadow-lg flex items-center justify-between p-4">
                <img src={forum.image} alt={forum.name} className="size-auto" />
                <div className="flex flex-col justify-between h-full p-4">
                  <p className="text-white text-base text-justify mb-4">
                    {forum.description}
                  </p>
                  <Link
                    to="/forum"
                    className="bg-white text-[#E53935] py-1 px-4 rounded-full hover:bg-gray-100 self-end"
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Seller & Buyer Forum */}
    </>
  );
};

export default SellerBuyerForum;
