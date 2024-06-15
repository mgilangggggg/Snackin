import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';


const PromoComponent: React.FC = () => {
    return (
        <DefaultLayout>
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Promosi Toko" />
    <div className="p-5">
      <div className="mb-5">
        <h3 className="text-md font-semibold mb-3">Tampilkan iklan di beranda</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-2">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value="3 Hari/Rp.xx.xxx"
                readOnly
                className="border p-2 rounded-md flex-1"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded">Gunakan</button>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value="7 Hari/Rp.xx.xxx"
                readOnly
                className="border p-2 rounded-md flex-1"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded">Gunakan</button>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value="30 Hari/Rp.xx.xxx"
                readOnly
                className="border p-2 rounded-md flex-1"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded">Gunakan</button>
            </div>
          </div>
          <div className="col-span-1 bg-gray-100 p-4 rounded-md">
            <p>Coba Pasang Iklanmu! Pasang iklan pertamamu 3 hari di Beranda, Gratis!!!</p>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-md font-semibold mb-3">Bagikan Voucher</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value="Voucher Toko"
              readOnly
              className="border p-2 rounded-md flex-1"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded">Gunakan</button>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value="Voucher Belanja"
              readOnly
              className="border p-2 rounded-md flex-1"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded">Gunakan</button>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-md font-semibold mb-3">Bagikan Diskon Toko</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value="Diskon Pengguna Baru"
              readOnly
              className="border p-2 rounded-md flex-1"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded">Gunakan</button>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value="Diskon Produk"
              readOnly
              className="border p-2 rounded-md flex-1"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded">Gunakan</button>
          </div>
        </div>
      </div>
                </div>
                </div>
      </DefaultLayout>
  );
};

export default PromoComponent;
