import React, { useState } from "react";

import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const UserNavbar = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="fixed w-full z-50">
        <div className="flex flex-row justify-between p-5 md:px-10 bg-[#E53935] shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          {/* Logo */}
          <Logo />
          {/* End Logo */}

          {/* UserNavbar*/}
          <div className="hidden md:flex flex-row items-center font-Poppins text-base  gap-4">
            <Link to="/home" className="text-white hover:text-gray-300">
              Beranda
            </Link>

            <Link to="/product" className="text-white hover:text-gray-300">
              Produk
            </Link>

            <Link to="/about" className="text-white hover:text-gray-300">
              Tentang
            </Link>

            <div className="flex gap-2 text-black bg-white rounded-full items-center px-4 py-1">
              <FaSearch className="text-[#E53935]" />
              <input
                type="text"
                placeholder="Mau cari apa?"
                className="outline-none text-sm font-Poppins"
              />
            </div>

            <Link to="/cart">
              <MdOutlineShoppingCart className="size-7 text-white" />
            </Link>

            <div className="text-white">|</div>

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  <div className="flex bg-[#E53935] text-white rounded-full items-center size-8 ">
                    <img src="Avatar/Avatar1.png" alt="" />
                  </div>
                </button>
              </div>

              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <a className="flex items-center px-4 py-2 text-sm text-gray-700">
                      <img
                        src="Avatar/Avatar1.png"
                        alt=""
                        className="w-8 h-8 mr-2"
                      />
                      Alleia
                    </a>
                    <hr />
                    <Link
                      to="/myprofile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Profile Saya
                    </Link>
                    <Link
                      to="http://localhost:5174"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Toko Saya
                    </Link>
                    <Link
                      to="/myrating"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Penilaian Saya
                    </Link>
                    <Link
                      to="/setting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Pengaturan
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Keluar
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* End Navbar */}

          {/* Hamburger */}
          <div className="md:hidden flex items-center text-white">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#E53935] text-white left-0 top-20 text-base font-Poppins text-center pt-4 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link to="/" className="text-white hover:text-gray-300">
            Beranda
          </Link>

          <Link to="/product" className="text-white hover:text-gray-300">
            Produk
          </Link>

          <Link to="/about" className="text-white hover:text-gray-300">
            Tentang
          </Link>

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
        {/* End Hamburger */}
      </div>
    </nav>
  );
};

export default UserNavbar;
