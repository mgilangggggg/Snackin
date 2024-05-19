import React from "react";
import { FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#E53935] text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <img src="/src/Assets/Logo/Snackin.png" alt="" className="w-28" />
          <p className=" text-sm">Berbagai macam makanan ringan khas daerah.</p>
        </div>
        <div>
          {/* Pages */}
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Halaman</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Beranda
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Produk
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Tentang
            </a>
          </nav>
        </div>
        {/* Resource */}
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Sumber</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              FAQ
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Utility page
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Term of use
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              License
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Cookie policy
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Ikuti Kami</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              snackin@gmail.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +62 xxx-xxx-xxx
            </a>
            <div className="flex space-x-3 items-center text-2xl">
              <FaSquareFacebook />
              <FaInstagramSquare />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          <hr />
          <br />
          ©️ Snackin 2024. Hak Cipta Dilindungi
        </p>
      </div>
    </div>
  );
};

export default Footer;
