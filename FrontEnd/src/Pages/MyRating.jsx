import React from 'react';
import UserNavbar from "../Components/UserNavbar";
import Footer from "../Components/Footer";

const MyRating = () => {
  const pendingReviews = [
    { id: 1, image: './Product/1.png', title: 'Aneka Kue Kering', count: 2, total: 108000 },
    { id: 2, image: './Product/2.png', title: 'Basreng Asli Indonesia', count: 2, total: 42000 },
  ];

  const completedReviews = [
    { id: 1, image: './Product/3.png', title: 'Kue Sus Kering', variant: 'Isi Coklat/250 gr', date: '4 Maret 2024', rating: 5, review: 'Pesanan sampai dengan selamat, pengemasan juga aman', total: 52000 },
  ];

  return (
    <rating>
      <UserNavbar />
    <div className="p-8">
      <div className="mb-8 mt-[70px]">
        <h2 className="text-2xl font-bold mb-4">Penilaian Saya</h2>
        <h3 className="text-xl font-semibold mb-2">Belum Dinilai ({pendingReviews.length})</h3>
        {pendingReviews.map((review) => (
          <div key={review.id} className="flex items-center justify-between p-4 border rounded mb-4">
            <div className="flex items-center">
              <img src={review.image} alt={review.title} className="w-[100px] h-[100px] object-cover rounded mr-4" />
              <div>
                <p className="font-semibold">{review.title}</p>
                <p>{review.count} Produk</p>
                <p className="font-bold">Total: Rp. {review.total.toLocaleString()}</p>
              </div>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Beri Penilaian</button>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Semua Penilaian ({completedReviews.length})</h3>
        {completedReviews.map((review) => (
          <div key={review.id} className="p-4 border rounded mb-4">
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.287 3.975a1 1 0 00.95.69h4.18c.969 0 1.372 1.24.588 1.81l-3.39 2.46a1 1 0 00-.363 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.363-1.118l-3.39-2.46c-.784-.57-.381-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.975z" />
                </svg>
              ))}
            </div>
            <p className="mb-2">{review.review}</p>
            <p className="text-gray-500 mb-2">{review.date}</p>
            <div className="flex items-center">
              <img src={review.image} alt={review.title} className="w-16 h-16 object-cover rounded mr-4" />
              <div>
                <p className="font-semibold">{review.title}</p>
                <p>Variasi: {review.variant}</p>
                <p className="font-bold">Total: Rp. {review.total.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </rating>
  );
};

export default MyRating;
