import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Snackin.png";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => () => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  // navitems array
  const navItems = [
    { Link: "Beranda", path: "home" },
    { Link: "Produk", path: "product" },
    { Link: "Tentang", path: "about" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className="py-4 lg:px-14 px-4">
        <div className="flex justify-between items-center text-base gap-8">
          <a href="">
            <img
              src={logo}
              alt="Snackin"
              className="w-20 inline-block items-center"
            />
          </a>

          {/* Nav items */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ Link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray-900 hover:text-[#E53935] first:font-medium"
              >
                {Link}
              </Link>
            ))}
          </ul>

          {/* Button SignIn and SignUp */}
          <div className="space-x-12 hidden lg:flex items-center">
            {/* <div className="w-[241.59px] h-[38px] bg-stone-50 rounded-[19px] border border-[#FF8A65]" /> */}
            <div className="w-[241.59px] h-[38px] relative">
              <div className="w-[241.59px] h-[38px] left-0 top-0 absolute bg-[#E53935] rounded-[19px] border border-white" />
              <div className="w-[79px] left-[48.49px] top-[6px] absolute text-white text-lg font-medium font-['Poppins']">
                Cari
              </div>
              <img
                className="w-[19px] h-[17px] left-[15.73px] top-[12px] absolute"
                src=""
              />
            </div>
            <img className="w-[38.97px] h-[45px]" src="" />
            <Link
              to="/SignIn"
              className="bg-[#E53935] text-white py-2 px-4 rounded-full hover:bg-[#FF8A65]"
            >
              Masuk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Home;
