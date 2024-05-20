import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
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
    <>
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
              <div className="flex gap-2 bg-white rounded-full items-center px-3 py-1">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Mau cari apa?"
                  className="outline-none"
                />
              </div>
              <div>
                <MdOutlineShoppingCart className="size-8 text-white cursor-pointer" />
              </div>
              <div className="text-white">|</div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <span>Profile</span>
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.117 1.993L10 5H5a1 1 0 01-.117-1.993L5 3h5zm0 4a1 1 0 01.117 1.993L10 9H3a1 1 0 01-.117-1.993L3 7h7zm0 4a1 1 0 01.117 1.993L10 13H1a1 1 0 01-.117-1.993L1 11h9zm0 4a1 1 0 01.117 1.993L10 17H7a1 1 0 01-.117-1.993L7 15h3z"
                        clipRule="evenodd"
                      />
                    </svg>
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
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Account settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Support
                      </a>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
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

export default Nav;
