import React from 'react';
import Nav from "../Components/UserNavbar";
import Footer from "../Components/Footer";

const orders = [
  {
    status: "Dikemas",
    items: [
      {
        name: "Kerupuk Seblak",
        variant: "Pedas/250 gr",
        quantity: 1,
        price: 40000,
        shipping: 8000,
        imageUrl: "public/Product/Kerupuk-Seblak.png",
      },
      {
        name: "Basrengku",
        variant: "Pedas/250 gr",
        quantity: 1,
        price: 40000,
        shipping: 8000,
        imageUrl: "public/Product/Basreng.png",
        
      },
    ],
  },
  {
    status: "Dikirim",
    items: [
      {
        name: "Makroni Usus",
        variant: "Pedas/250 gr",
        quantity: 1,
        price: 38000,
        shipping: 7000,
        imageUrl: "public/Product/Makroni-Usus.png",
      },
      {
        name: "Kerupuk Seblak",
        variant: "Ekstra Pedas/500 gr",
        quantity: 1,
        price: 40000,
        shipping: 8000,
        imageUrl: "public/Product/Kerupuk-Seblak.png",
      },
    ],
  },
  {
    status: "Selesai",
    items: [
      {
        name: "Aneka Kue Kering",
        variant: "Nastar Premium",
        quantity: 2,
        price: 124000,
        shipping: 8000,
        imageUrl: "public/Product/Aneka-Kue-Kering.png",
      },
    ],
  },
];

const Orders = () => {
    return (
        <>
      <Nav />
    <div className="max-w-4xl mx-auto p-10">
    <h1 className="text-2xl font-semibold mb-4">Pesanan Saya</h1>
        {orders.map((order, index) => (
          <div key={index} className="mb-6">
            <div className="bg-gray-200 p-4 rounded-t-lg">
              <h2 className="text-lg font-medium">{`Pesanan ${order.status} (${order.items.length})`}</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b py-2">
                  <div className="flex items-center">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{`Varian: ${item.variant}`}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-sm">{`Jumlah: ${item.quantity}X`}</p>
                    <p className="text-sm">{`Ongkir: Rp. ${item.shipping.toLocaleString()}`}</p>
                    <p className="text-sm font-semibold">{`Total: Rp. ${(item.price + item.shipping).toLocaleString()}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
            </div>
            <Footer />
            </>
  );
};

export default Orders;