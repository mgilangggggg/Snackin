import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  sold: number;
  status: 'Semua' | 'Habis' | 'Diarsipkan';
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Basreng Sajodo',
    price: 20000,
    stock: 158,
    sold: 114,
    status: 'Semua',
    imageUrl: 'src/images/product/Basreng-Sajodo.png',
  },
  {
    id: 2,
    name: 'Pang Pang Manis',
    price: 25000,
    stock: 94,
    sold: 43,
    status: 'Habis',
    imageUrl: 'src/images/product/Pangpang-manis.png',
  },
  {
    id: 3,
    name: 'Makaroni Pedas',
    price: 15000,
    stock: 42,
    sold: 106,
    status: 'Diarsipkan',
    imageUrl: 'src/images/product/Makaroni-Pedas.png',
  },
];

const MyProduct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderProducts = (status: string) => {
    const filteredByStatus = filteredProducts.filter(
      (product) => product.status === status,
    );
    return (
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          {status} ({filteredByStatus.length})
        </h2>
        <div className="mt-4">
          {filteredByStatus.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg flex items-center mb-4"
            >
              <div className="w-16 h-16 mr-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-xs">Harga</p>
                    <p className="text-sm font-bold">
                      Rp. {product.price.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs">Stok</p>
                    <p className="text-sm font-bold">{product.stock}</p>
                  </div>
                  <div>
                    <p className="text-xs">Terjual</p>
                    <p className="text-sm font-bold">{product.sold}</p>
                  </div>
                  <div>
                    <button className="text-white bg-red-500 px-4 py-2 rounded">
                      Ubah
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Produk Saya" />
        <div className="p-5">
          <div className="flex justify-between mb-5">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              128 Produk
            </button>
            <a
              href="/pages/FormAddProduct"
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              + Tambah Produk
            </a>
          </div>
          <div className="mb-5 flex">
            <input
              type="text"
              placeholder="Masukkan Nama Produk"
              className="border p-2 rounded-lg flex-1 mr-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Cari Produk
            </button>
          </div>

          {renderProducts('Semua')}
          {renderProducts('Habis')}
          {renderProducts('Diarsipkan')}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyProduct;
