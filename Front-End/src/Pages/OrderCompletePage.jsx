import React from "react";
import Nav from "../Components/UserNavbar";
import Footer from "../Components/Footer";
import { useState } from "react";

const OrderCompletePage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleReviewSubmit = () => {
    // Handle review submission logic here
    console.log("Review Submitted:", { rating, review, uploadedImage });
  };

  return (
    <>
      <Nav />
      <div className="bg-gray-100 min-h-screen p-20">
        <header className="p-4 text-black text-center font-bold">
          Pesanan Selesai
          <div className="mt-2 flex justify-center items-center">
            <span className="mr-2">Kamu bisa memberikan penilaian!</span>
            <img
              src="./Payment/verification-success.png"
              alt="Verified"
              className="w-6 h-6"
            />
          </div>
        </header>

        <main className="max-w-3xl mx-auto bg-white p-6 mt-6 shadow-lg rounded-lg">
          <div className="flex items-center mb-6">
            <img
              src="./Toko/Gumilang-Snack.png"
              alt="Seller Logo"
              className="w-12 h-12 mr-4"
            />
            <h2 className="text-xl font-bold">Gumilang Snack</h2>
          </div>

          <div className="space-y-6 mb-6">
            <div className="flex items-center space-x-4 border p-4 rounded">
              <img
                src="./Product/Basreng-Sajodo.png"
                alt="Basreng Pedas Viral"
                className="w-20 h-20 border"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold">
                  Basreng Sulah Viral 500gram pedas
                </h3>
                <p className="text-gray-600">Variasi: Pedas / 500 gram</p>
              </div>
              <p className="text-lg font-bold">Rp. 26,400</p>
            </div>
          </div>

          <div className="text-right font-bold text-lg mb-6">
            <span>Total Pesanan : Rp. 29,900</span>
          </div>

          <a
            href="/home"
            className="w-full bg-red-500 text-white p-4 rounded mb-4"
          >
            Kembali ke Beranda
          </a>

          <section className="p-10 mb-6">
            <h3 className="text-lg font-bold mb-4">Beri Penilaian</h3>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((rate) => (
                <span
                  key={rate}
                  className={`cursor-pointer text-2xl ${
                    rate <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => handleRating(rate)}
                >
                  ★
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="w-20 h-20 border border-gray-300 flex items-center justify-center relative">
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <span className="text-gray-400 text-2xl">+</span>
                  </label>
                )}
              </div>
              <img
                src="./Product/Basreng-Sajodo.png"
                alt="Basreng Pedas Viral"
                className="w-20 h-20"
              />
            </div>

            <textarea
              className="w-full p-4 border rounded mb-4"
              placeholder="Tulis Penilaian"
              rows="3"
              value={review}
              onChange={handleReviewChange}
            ></textarea>

            <button
              className="w-full bg-red-500 text-white p-4 rounded"
              onClick={handleReviewSubmit}
            >
              Kirim
            </button>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default OrderCompletePage;
