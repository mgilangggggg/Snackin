import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <main>
      {/* Navbar */}
      <Nav />
      {/* End Navbar */}

      <div className="w-full">
        <img src="./tropical-beach.png" alt="" />
      </div>
      <div className="pt-4 px-[100px] mb-36 bg-no-repeat">
        <a className="flex items-center rounded-lg group font-medium text-[25px] mb-10 pt-[20px]">
          <img className="w-30 h-30" src="./Profile/Kevin.png"></img>
          <Link className="mt-11 mr-4 -ml-3">
            <MdOutlineEdit />
          </Link>
          <span className="flex-1 whitespace-nowrap -ml-2">Kevin</span>
          <Link
            to=""
            className="text-white bg-[#E53935] font-medium rounded-lg text-sm px-10 py-2.5 text-end"
          >
            Edit
          </Link>
        </a>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Kevin Sanjaya"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Tanggal Lahir
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="15-3-1999"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Email
              </label>
              <input
                type="text"
                id="company"
                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="kevinsa*****@gmail.com"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-blac">
                Kecamatan
              </label>
              <input
                type="text"
                id="phone"
                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-blac">
                No. Handphone
              </label>
              <input
                type="text"
                id="phone"
                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="089213****"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                RT / RW
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="15-3-1999"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-blac">
                Kelurahan / Desa
              </label>
              <input
                type="email"
                id="email"
                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                disabled
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-blac">
              Alamat Lengkap & Nomer Rumah
            </label>
            <input
              type="password"
              id="password"
              className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Jl. Pondok Genggong No. 1924 RT.39 RW.66, Jawa Barat, Indonesia."
              disabled
            />
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </main>
  );
};

export default Profile;
