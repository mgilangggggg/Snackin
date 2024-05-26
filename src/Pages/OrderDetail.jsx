import React from "react";
import Nav from "../Components/UserNavbar";
import Footer from "../Components/Footer";
import { useState } from "react";

const OrderDetail = () => {
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
        <main className="max-w-5xl mx-auto bg-white p-8 shadow-lg mt-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Rincian Pesanan</h1>

          <div className="space-y-6 mb-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b pb-4"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20" />
                <div className="flex-1">
                  <h2 className="text-lg font">{item.name}</h2>
                  <p className="text-gray-600">{item.variation}</p>
                </div>
                <p className="text-lg font-bold">
                  Rp. {item.price.toLocaleString()}
                </p>
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
                <p className="text-lg font-bold">
                  Rp. {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="text-right space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <span>Subtotal Pembelian</span>
              <span>Rp. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Subtotal untuk pengiriman</span>
              <span>Rp. {shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg w-full bg-red-500 text-white p-4 rounded">
              <span>Total Pembayaran</span>
              <span className="text-white-500">
                Rp. {total.toLocaleString()}
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">Alamat Pengiriman</h3>
            <textarea
              className="w-full p-4 border rounded mb-6"
              placeholder="Silakan tinggalkan pesan"
              rows="3"
            ></textarea>
          </div>

          <div>
            <h3 className="font-bold mb-2">Pesan</h3>
            <textarea
              className="w-full p-4 border rounded mb-6"
              placeholder="Silakan tinggalkan pesan"
              rows="3"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold mb-2">Opsi Pengiriman</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="shipping" />
                  <img
                    src="src/Assets/Shipping/JNE.png"
                    alt="JNE"
                    className="w-16"
                  />
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="shipping" />
                  <img
                    src="src/Assets/Shipping/JNT.png"
                    alt="J&T Express"
                    className="w-16"
                  />
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Opsi Pembayaran</h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" />
                  <img
                    src="src/Assets/Payment/bri.png"
                    alt="BRI"
                    className="w-16"
                  />
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" />
                  <img
                    src="src/Assets/Payment/bca.png"
                    alt="BCA"
                    className="w-16"
                  />
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" />
                  <img
                    src="src/Assets/Payment/dana.png"
                    alt="Dana"
                    className="w-16"
                  />
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" />
                  <img
                    src="src/Assets/Payment/mandiri.png"
                    alt="Mandiri"
                    className="w-16"
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            className="w-full bg-red-500 text-white p-4 rounded"
            onClick={handlePaymentConfirmation}
          >
            Konfirmasi Pembayaran
          </button>
        </main>
        {isPaymentVerified && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-bold mb-4">
                Pembayaran telah diverifikasi
              </p>
              <img
                src="src/Assets/Payment/verification-success.png"
                alt="Verified"
                className="w-16 h-16 mx-auto mb-4"
              />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setIsPaymentVerified(false)}
              >
                Selanjutnya
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrderDetail;
