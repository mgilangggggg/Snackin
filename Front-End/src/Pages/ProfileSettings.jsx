// src/components/ProfileSettings.js
import React from 'react';
import UserNavbar from '../Components/UserNavbar';
import Footer from '../Components/Footer';

const ProfileSettings = () => {
  return (
    <profilesettings>
      <UserNavbar />
    <div className="p-8 mx-auto bg-white shadow-lg rounded-lg px-12 pt-[100px]">
      <h1 className="text-2xl font-bold mb-6">Pengaturan</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Keamanan Akun</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Nama Pengguna</label>
          <input type="text" value="Kevin" className="w-full p-2 border rounded mt-1" disabled />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Pengguna</label>
          <input type="email" value="kevinsanjaya812@gmail.com" className="w-full p-2 border rounded mt-1" disabled />
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Ganti Password</button>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Alamat Pengiriman</h2>
        <div className="flex items-center mb-4">
          <button className="bg-gray-200 px-4 py-2 rounded mr-4">Alamat Saya</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Ganti</button>
        </div>
        <p className="border p-2 rounded">JL. Tanjung Lengkong No. 13 RT. 08, Rw. 04, Kel. Bidara Cina, Kec. Jatinegara, Jakarta Timur</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Alat Pembayaran</h2>
        <div className="flex items-center mb-4">
          <button className="bg-gray-200 px-4 py-2 rounded mr-4">Pembayaran</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Ganti</button>
        </div>
        <div className="flex items-center border p-2 rounded">
          <img src="/path-to-bca-logo.png" alt="BCA" className="h-8 mr-4" />
          <p>********3491</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Bahasa/Language</h2>
        <button className="bg-gray-200 px-4 py-2 rounded">Bahasa Indonesia</button>
      </section>

      <section className="flex flex-col space-y-2 w-[300px]">
        <p className="font-semibold">Ingin membuka tokomu sendiri?</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Ajukan Pembukaan Toko</button>
        <p className="font-semibold">Ingin menghapus akunmu?</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Ajukan Penghapusan Akun</button>
      </section>
    </div>
    <Footer />
    </profilesettings>
  );
};

export default ProfileSettings;
