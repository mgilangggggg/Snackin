import React, { useState } from "react";

import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    // Navbar Sebelum Login
    <nav>
      <div className="fixed w-full z-50">
        <div className="flex flex-row justify-between p-5 md:px-10 bg-[#E53935]">
          {/* Logo */}
          <Logo />
          {/* End Logo */}

          <div className="hidden md:flex flex-row items-center font-Poppins text-base  gap-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Beranda
            </Link>

            <Link to="/signin" className="text-white hover:text-gray-300">
              Produk
            </Link>

            <Link to="/signin" className="text-white hover:text-gray-300">
              Tentang
            </Link>

            <div className="flex gap-2 text-[#E53935] bg-white rounded-full items-center px-4 py-1">
              <FaSearch />
              <input
                type="text"
                placeholder="Mau cari apa?"
                className="outline-none"
              />
            </div>

            <Link to="/signin">
              <MdOutlineShoppingCart className="size-7 text-white" />
            </Link>

            <div className="text-white">|</div>

            <Link
              to="/signin"
              className="w-full text-white border-2 rounded-full px-5 py-1"
            >
              Masuk
            </Link>

            <Link
              to="/signup"
              className="w-full bg-white text-[#E53935] rounded-full px-5 py-1"
            >
              Daftar
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center text-white">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
          {/* End Hamburger */}
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#E53935] text-white left-0 top-20 text-base font-Poppins text-center pt-4 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link to="/" className="text-white hover:text-gray-300">
            Beranda
          </Link>

          <Link to="/signin" className="text-white hover:text-gray-300">
            Produk
          </Link>

          <Link to="/signin" className="text-white hover:text-gray-300">
            Tentang
          </Link>

          <div>
            <input
              type="text"
              placeholder="Mau cari apa?"
              className="px-2 py-1 rounded-full"
            />
          </div>

          <Link
            to="/signin"
            className="w-full text-white border-2 rounded-full px-5 py-1"
          >
            Masuk
          </Link>

          <Link
            to="/signup"
            className="w-full text-[#E53935] bg-white rounded-full px-5 py-1"
          >
            Daftar
          </Link>
        </div>
      </div>
    </nav>
    // End Navbar
  );
};

export default Navbar;
