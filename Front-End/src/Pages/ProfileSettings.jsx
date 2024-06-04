// src/components/ProfileSettings.js
import React from "react";
import UserNavbar from "../Components/UserNavbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const ProfileSettings = () => {
  return (
    <profilesettings>
      <UserNavbar />
      <div className="p-8 mx-auto font-Poppins bg-white shadow-lg rounded-lg px-12 pt-[100px]">
        <h1 className="font-medium text-2xl mb-5">Pengaturan</h1>

        <section className="mb-8">
          <h2 className="text-xl mb-4">Keamanan Akun</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Pengguna</label>
            <input
              type="text"
              value="Alleia"
              className="w-full p-2 border rounded mt-1"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Pengguna</label>
            <input
              type="email"
              value="alleia812@gmail.com"
              className="w-full p-2 border rounded mt-1"
              disabled
            />
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick=""
          >
            Ganti Password
          </button>
        </section>

        <section className="mb-10">
          <h2 className="text-xl mb-4">Alat Pembayaran</h2>
          <div className="flex items-center mb-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Ganti
            </button>
          </div>
          <div className="flex items-center border p-2 rounded">
            <img src="Payment/bca.png" alt="BCA" className="h-8 mr-4" />
            <p>********3491</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl mb-4">Bahasa/Language</h2>
          <span className="bg-gray-200 px-4 py-2 rounded">
            Bahasa Indonesia
          </span>
        </section>

        <section className="flex flex-col space-y-2 w-[300px]">
          <p>Ingin membuka tokomu sendiri?</p>
          <div className="bg-red-500 text-white text-center px-4 py-2 rounded">
            <Link to="">Ajukan Pembuatan Toko</Link>
          </div>
          <p>Ingin menghapus akunmu?</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Ajukan Penghapusan Akun
          </button>
        </section>
      </div>
      <Footer />
    </profilesettings>
  );
};

export default ProfileSettings;
