import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

interface Product {
  id: number;
  name: string;
  sold: number;
  stock: number;
  rating: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Basreng Sajodo',
    sold: 114,
    stock: 158,
    rating: 5,
    imageUrl: 'src/images/product/Basreng-Sajodo.png',
  },
  {
    id: 2,
    name: 'Gemlong Pedas',
    sold: 76,
    stock: 112,
    rating: 4,
    imageUrl: 'src/images/product/Gemlong-Pedas.png',
  },
  {
    id: 3,
    name: 'Aneka Kue Kering',
    sold: 45,
    stock: 162,
    rating: 4,
    imageUrl: 'src/images/product/Aneka-Kue-kering.png',
  },
];

const SalesDashboard: React.FC = () => {
    return (
        <DefaultLayout>
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Penjualan" />
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Mei</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="border p-4 rounded-lg">
            <h3 className="text-sm font-medium">Produk Terjual</h3>
            <p className="text-2xl font-bold">380</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-sm font-medium">Penjualan</h3>
            <p className="text-2xl font-bold">Rp. 5.457.000</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-sm font-medium">Pesanan</h3>
            <p className="text-2xl font-bold">96</p>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-lg font-semibold">Produk Terlaris Bulan Mei</h2>
        <div className="mt-4">
          {products.map((product, index) => (
            <div key={product.id} className="border p-4 rounded-lg flex items-center mb-4">
              <div className="w-16 h-16 mr-4">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">{index + 1}. {product.name}</h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-xs">Terjual</p>
                    <p className="text-sm font-bold">{product.sold}</p>
                  </div>
                  <div>
                    <p className="text-xs">Stok</p>
                    <p className="text-sm font-bold">{product.stock}</p>
                  </div>
                  <div>
                    <p className="text-xs">Rating</p>
                    <p className="text-sm font-bold">{'⭐'.repeat(product.rating)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-lg font-semibold">Statistik Penjualan Bulanan</h2>
        <div className="mt-4">
          <img src="src/images/product/statistik.png" alt="Statistik Penjualan Bulanan" className="w-full h-48 object-cover" />
        </div>
      </div>
            </div>
            </DefaultLayout>
  );
};

export default SalesDashboard;
