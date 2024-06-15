import React from 'react';
import { FaDownload } from 'react-icons/fa';

interface Withdrawal {
  amount: number;
  date: string;
  accountNumber: string;
}

interface EarningsDetail {
  month: string;
  soldProducts: number;
  profit: number;
  totalEarnings: number;
}

const withdrawals: Withdrawal[] = [
  {
    amount: 6500000,
    date: '28 April 2024',
    accountNumber: '******5340',
  },
  {
    amount: 5000000,
    date: '24 Maret 2024',
    accountNumber: '******5340',
  },
];

const earningsDetail: EarningsDetail = {
  month: 'Mei',
  soldProducts: 380,
  profit: 357000,
  totalEarnings: 5457000,
};

const EarningsComponent: React.FC = () => {
  return (
    <div className="p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Saldo Saat Ini</h2>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p>Rekening Bank Saya ******5340</p>
            <img src="src/images/payment/bri.png" alt="BRI" className="w-16" />
          </div>
          <div className="text-xl font-bold">Rp. 11.548.000</div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Tarik Saldo</button>
        </div>
        <p className="text-sm text-gray-500 mt-1">*minimal penarikan saldo berjarak 30 hari</p>
      </div>

      <div className="mb-5">
        <h2 className="text-lg font-semibold">Riwayat Penarikan Saldo</h2>
        <div className="mt-2">
          {withdrawals.map((withdrawal, index) => (
            <div key={index} className="border p-4 rounded-lg flex items-center justify-between mb-2">
              <div>
                <p className="text-sm font-bold">Rp. {withdrawal.amount.toLocaleString()}</p>
                <p className="text-xs text-gray-500">{withdrawal.date}</p>
              </div>
              <p className="text-xs text-gray-500">{withdrawal.accountNumber}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Rincian Penarikan</button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-lg font-semibold">Rincian Penghasilan</h2>
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-md font-semibold">{earningsDetail.month}</h3>
          <button className="flex items-center bg-gray-200 p-2 rounded">
            <FaDownload className="mr-2" />
            Unduh Rincian Penghasilan
          </button>
        </div>
        <div className="mt-2">
          <div className="border p-4 rounded-lg flex justify-between mb-2">
            <p>Produk Terjual</p>
            <p className="font-bold">{earningsDetail.soldProducts}</p>
          </div>
          <div className="border p-4 rounded-lg flex justify-between mb-2">
            <p>Keuntungan Toko</p>
            <p className="font-bold">Rp. {earningsDetail.profit.toLocaleString()}</p>
          </div>
          <div className="border p-4 rounded-lg flex justify-between mb-2">
            <p>Total Penghasilan</p>
            <p className="font-bold">Rp. {earningsDetail.totalEarnings.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsComponent;
