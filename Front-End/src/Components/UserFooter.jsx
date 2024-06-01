import React from "react";
import { FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserFooter = () => {
  const Logo = [
    {
      logo: "./Snackin.png",
      title: "Logo",
      description: `Toko online dengan berbagai macam makanan
          ringan.`,
    },
  ];

  return (
    <>
      {/* Footer */}
      <footer className=" bg-[#E53935] font-Poppins text-white md:mt-0">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-10">
          <div className=" w-full md:w-1/4">
            {Logo.map((Logo) => (
              <div key={Logo}>
                <Link to="/" className="">
                  <img src={Logo.logo} alt={Logo.title} className="w-28" />
                </Link>
                <p className="text-sm font-light p-4">{Logo.description}</p>
              </div>
            ))}
          </div>

          {/* Pages */}
          <div>
            <h1 className="text-base pb-4 pt-5 md:pt-0">Halaman</h1>
            <nav className=" flex flex-col gap-2">
              <Link
                to="/home"
                className="text-sm font-light hover:text-gray-300 cursor-pointer"
              >
                Beranda
              </Link>
              <Link
                to="/product"
                className="text-sm font-light hover:text-gray-300 cursor-pointer"
              >
                Produk
              </Link>
              <Link
                to="/about"
                className="text-sm font-light hover:text-gray-300 cursor-pointer"
              >
                Tentang
              </Link>
            </nav>
          </div>
          {/* End Pages */}

          {/* Resource */}
          <div>
            <h1 className="text-base pb-4 pt-5 md:pt-0">Sumber</h1>
            <nav className=" flex flex-col gap-2">
              <Link className="text-sm font-light hover:text-gray-300 cursor-pointer">
                FAQ
              </Link>
              <Link className="text-sm font-light hover:text-gray-300 cursor-pointer">
                Utility page
              </Link>
              <Link className="text-sm font-light hover:text-gray-300 cursor-pointer">
                Term of use
              </Link>
              <Link className="text-sm font-light hover:text-gray-300 cursor-pointer">
                License
              </Link>
              <Link className="text-sm font-light hover:text-gray-300 cursor-pointer">
                Cookie policy
              </Link>
            </nav>
          </div>
          {/* End Resource */}

          {/* Follow Us */}
          <div>
            <h1 className="text-base pb-4 pt-5 md:pt-0">Ikuti Kami</h1>
            <div className=" flex flex-col gap-2">
              <Link className="text-sm font-light hover:text-gray-300 cursor-pointer">
                snackin@gmail.com
              </Link>
              <Link className="text-sm font-light hover:text-gray-300 cursor-pointer">
                +62 xxx-xxx-xxx
              </Link>
              <div className="flex space-x-3 items-center text-2xl cursor-pointer">
                <FaSquareFacebook />
                <FaInstagramSquare />
                <FaXTwitter />
                <FaYoutube />
              </div>
            </div>
          </div>
          {/* End Follow Us */}
        </div>

        {/* Copyright */}
        <div className="py-4">
          <hr />
          <br />
          <div className="flex justify-between text-sm md:px-10">
            <p>©️ Snackin 2024. Hak Cipta Dilindungi</p>
            <p>By Akshara Vijaya ⚔️</p>
          </div>
        </div>
        {/* End Copyright */}
      </footer>
      {/* End Footer */}
    </>
  );
};

export default UserFooter;
