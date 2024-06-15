import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

interface Product {
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  imageUrl: string;
}

const AddProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    price: 0,
    category: '',
    stock: 0,
    description: '',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProduct((prev) => ({ ...prev, imageUrl }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send the product data to the backend)
    console.log('Product submitted:', product);
  };

    return (
        <DefaultLayout>
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Tambah Produk" />
    <div className="p-5">
      <h1 className="text-xl font-bold mb-5">Tambah Produk</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-32 h-32 bg-gray-200 flex justify-center items-center rounded-md">
            <label htmlFor="imageUpload" className="cursor-pointer">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt="Product" className="w-full h-full object-cover rounded-md" />
              ) : (
                <span className="text-4xl">+</span>
              )}
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Produk</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Harga Produk</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kategori Produk</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="" disabled>
                  Pilih Kategori
                </option>
                <option value="Kategori 1">Keripik</option>
                <option value="Kategori 2">Kue Kering</option>
                <option value="Kategori 3">Kerupuk</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Stok Produk</label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Input"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi Produk</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={4}
            placeholder="Tulis Deskripsi"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
            Simpan
          </button>
        </div>
      </form>
                </div>
                </div>
                </DefaultLayout>
  );
};

export default AddProductForm;
