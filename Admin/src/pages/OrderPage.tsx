import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

interface Order {
  id: number;
  productName: string;
  variant: string;
  quantity: number;
  price: number;
  total: number;
  status: 'Belum Dikemas' | 'Belum Dikirim' | 'Pesanan Selesai';
  imageUrl: string;
  paymentMethod?: string;
  shippingMethod?: string;
  actionLabel: string;
}

const orders: Order[] = [
  {
    id: 1,
    productName: 'Basreng Pedas Viral',
    variant: 'Pedas Manis/250 gr',
    quantity: 1,
    price: 15000,
    total: 40000,
    status: 'Belum Dikemas',
    imageUrl: 'src/images/product/Basreng-Sajodo.png',
    paymentMethod: 'BCA',
    actionLabel: 'Kemas',
  },
  {
    id: 2,
    productName: 'Keripik Kaca',
    variant: 'Ekstra Pedas/500 gr',
    quantity: 1,
    price: 25000,
    total: 25000,
    status: 'Belum Dikemas',
    imageUrl: 'src/images/product/Keripik-kaca.png',
    paymentMethod: 'BCA',
    actionLabel: 'Kemas',
  },
  {
    id: 3,
    productName: 'Aneka Kue Kering',
    variant: 'Coklat Kacang',
    quantity: 2,
    price: 54000,
    total: 108000,
    status: 'Belum Dikirim',
    imageUrl: 'src/images/product/Aneka-Kue-Kering.png',
    shippingMethod: 'J&T Express',
    actionLabel: 'Kirim',
  },
  {
    id: 4,
    productName: 'Nastar Premium',
    variant: 'Toples Kaca',
    quantity: 1,
    price: 88000,
    total: 88000,
    status: 'Pesanan Selesai',
    imageUrl: 'src/images/product/Nastar.png',
    actionLabel: 'Selesai',
  },
];

const OrdersComponent: React.FC = () => {
  const renderOrders = (status: string) => {
    const filteredOrders = orders.filter(order => order.status === status);

      return (
      <div className="mb-5">
        <h2 className="text-lg font-semibold capitalize">{status} ({filteredOrders.length})</h2>
        <div className="mt-4">
          {filteredOrders.map(order => (
            <div key={order.id} className="border p-4 rounded-lg flex items-center mb-4">
              <div className="w-16 h-16 mr-4">
                <img src={order.imageUrl} alt={order.productName} className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">{order.productName}</h3>
                <p className="text-xs text-gray-500">Varian: {order.variant}</p>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-xs">Harga</p>
                    <p className="text-sm font-bold">Rp. {order.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs">Jumlah</p>
                    <p className="text-sm font-bold">{order.quantity}X</p>
                  </div>
                  <div>
                    <p className="text-xs">Total</p>
                    <p className="text-sm font-bold">Rp. {order.total.toLocaleString()}</p>
                  </div>
                  <div>
                    {order.paymentMethod && (
                      <div className="flex items-center">
                        <img src={`path/to/${order.paymentMethod}.png`} alt={order.paymentMethod} className="w-8 h-8" />
                      </div>
                    )}
                    {order.shippingMethod && (
                      <div className="flex items-center">
                        <img src={`path/to/${order.shippingMethod}.png`} alt={order.shippingMethod} className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <div>
                    <button className="text-white bg-red-500 px-4 py-2 rounded">{order.actionLabel}</button>
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
          <Breadcrumb pageName="Pesanan" />
    <div className="p-5">
      <div className="flex justify-between mb-5">
        <button className="bg-red-500 text-white px-4 py-2 rounded">14 Pesanan</button>
      </div>

      {renderOrders('Belum Dikemas')}
      {renderOrders('Belum Dikirim')}
      {renderOrders('Pesanan Selesai')}
      </div>
      </div>
      </DefaultLayout>
  );
};

export default OrdersComponent;
