import React from "react";
import Nav from "../Components/UserNavbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  // Initial state for items and their quantities
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Basreng Pedas Viral",
      variation: "Pedas Manis/250 gr",
      price: 15000,
      quantity: 1,
      image: "src/Assets/Product/Basreng-Sajodo.png",
    },
    {
      id: 2,
      name: "Keripik Kaca",
      variation: "Ekstra Pedas/500 gr",
      price: 25000,
      quantity: 1,
      image: "src/Assets/Product/Keripik-Kaca.png",
    },
  ]);

  const [isPaymentVerified, setIsPaymentVerified] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
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
        <h1 className="text-2xl font-bold mb-4">Keranjang Belanja</h1>
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
                    <input type="checkbox" className="w-4 h-4 mr-4" />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28"
                    />
                    <div className="flex-1 px-10">
                      <h2 className="text-lg font">{item.name}</h2>
                      <p className="text-gray-600">{item.variation}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-start">
                  <p className="text-lg font-bold">
                    Rp. {item.price.toLocaleString()}
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
                    <span>{item.quantity}</span>
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
                    Rp. {(item.price * item.quantity).toLocaleString()}
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
