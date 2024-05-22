import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      {/* Navbar Sebelum Login */}
      <div className="fixed w-full z-50">
        <div>
          <div className="flex flex-row justify-between p-4 md:px-20 px-5 bg-[#E53935] shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
            <div className="flex flex-row items-center cursor-pointer">
              <span></span>
              <img
                src="./Snackin.png"
                alt="Logo"
                className="max-w-[400px] mx-auto w-28"
              />
            </div>

            <nav className="hidden md:flex flex-row items-center text-sm font-medium gap-4">
              <Link
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-[#FF8A65] transition-all cursor-pointer"
              >
                Beranda
              </Link>
              <Link
                to="/SignIn"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-[#FF8A65] transition-all cursor-pointer"
              >
                Produk
              </Link>
              <Link
                to="/SignIn"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-[#FF8A65] transition-all cursor-pointer"
              >
                Tentang
              </Link>
              <div className="flex gap-2 text-[#E53935] bg-white rounded-full items-center px-3 py-1">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Mau cari apa?"
                  className="outline-none"
                />
              </div>
              <Link to="/SignIn">
                <MdOutlineShoppingCart className="size-8 text-white cursor-pointer" />
              </Link>
              <div className="text-white">|</div>
              <Link
                to="/SignIn"
                className="w-full text-white border hover:text-[#E53935] hover:bg-white rounded-full px-6 py-1 cursor-pointer"
              >
                Masuk
              </Link>
              <Link
                to="/SignUp"
                className="w-full text-[#E53935] hover:text-white bg-white hover:bg-[#FF8A65] rounded-full px-6 py-1 cursor-pointer"
              >
                Daftar
              </Link>
            </nav>

            <div className="md:hidden flex items-center">
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
            } lg:hidden flex flex-col absolute bg-[#E53935] text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-[#FF8A65] transition-all cursor-pointer"
            >
              Beranda
            </Link>
            <Link
              to="/Product"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-[#FF8A65] transition-all cursor-pointer"
            >
              Produk
            </Link>
            <Link
              to="/About"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-[#FF8A65] transition-all cursor-pointer"
            >
              Tentang
            </Link>
            <div>
              <input
                type="text"
                placeholder="Cari"
                className="px-2 py-1 rounded-full"
              />
            </div>
            <Link
              to="/SignIn"
              className="w-full text-white border hover:text-[#E53935] hover:bg-white rounded-full px-6 py-1 cursor-pointer"
            >
              Masuk
            </Link>
            <Link
              to="/SignUp"
              className="w-full text-[#E53935] hover:text-white bg-white hover:bg-[#FF8A65] rounded-full px-6 py-1 cursor-pointer"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
