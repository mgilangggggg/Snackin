import React, { useEffect } from "react";
import Nav from "../Components/UserNavbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/cart`);
        setItems(res.data.data);
      } catch (e) {
        console.error("Terjadi kesalahan saat mengambil Produk:", e);
      }
    };
    fetchItem();
  }, []);

  const [isPaymentVerified, setIsPaymentVerified] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, kuantitas: Math.max(1, item.kuantitas + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const subtotal = items.reduce(
      (total, item) => total + item.harga_produk * item.kuantitas,
      0
    );
    const shipping = items.length * 3500;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
  };

  const handlePaymentConfirmation = () => {
    setIsPaymentVerified(true);
  };

  const { subtotal, shipping, total } = calculateTotal();

  return (
    <>
      <Nav />
      <div className="bg-gray-100 min-h-screen p-20">
        <h1 className="text-2xl font-bold py-20">Keranjang Belanja</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border-gray-500 text-start">Produk</th>
              <th className="px-4 py-2 border-gray-500 text-start">Harga</th>
              <th className="px-4 py-2 border-gray-500 text-start">Jumlah</th>
              <th className="px-4 py-2 border-gray-500 text-start">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-justify">
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <input type="checkbox" className="w-4 h-4 mr-4 mt-1" />
                      <img
                        src={item.photo_produk}
                        alt={item.nama_produk}
                        className="w-28 h-28 mr-4"
                      />
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        &times;
                      </button>
                    </div>

                    <div className="flex-1 px-10">
                      <h2 className="text-lg font">{item.nama_produk}</h2>
                      <p className="text-gray-600">{item.variasi_produk}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-start">
                  <p className="text-lg font-bold">
                    Rp. {item.harga_produk.toLocaleString()}
                  </p>
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 bg-gray-200"
                    >
                      -
                    </button>
                    <span>{item.kuantitas}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-start">
                  <p className="text-lg font-bold">
                    Rp. {(item.harga_produk * item.kuantitas).toLocaleString()}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-full h-full px-10 py-4 relative flex items-center justify-end">
          <Link
            to="/order-detail"
            className="w-40 absolute text-center bg-[#E53935] rounded-lg py-2 text-white text-sm font-semibold font-['Poppins']"
          >
            Buat Pesanan
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
