import React, { useState } from "react";

import UserNavbar from "../Components/UserNavbar";
import UserFooter from "../Components/UserFooter";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const DetailProduct = () => {
  const product = {
    id: 1,
    images: [
      "./Product/Basreng.png",
      "./Product/Basreng-Sajodo.png",
      "./Product/Basreng-Sulah-Viral.png",
    ],
    name: "Basreng Sulah Viral 500gram pedas",
    desc: "Basreng pedas yang berkualitas, tersedia dalam berbagai pilihan rasa.",
    rating: 4,
    originalPrice: 30000,
    discountPercentage: 12,
  };

  const detailProductInfo = {
    id: 1,
    logo: "./Toko/Gumilang-Snack.png",
    name: "Gumilang Snack",
    location: "Perbatasan Ciamis - Majalengka",
    desc: "Basreng viral yang kami jual terjamin kualitasnya, karena diproduksi dari bahan pilihan yang dijamin enak dan gurih rasanya. Buruan beli sebelum kehabisan ;)",
    variants: [
      "Pedas",
      "Pedas Manis",
      "Pedas Daun Jeruk",
      "Ekstra Pedas",
      "Original",
    ],
    availableInPackaging: [
      {
        weight: "250 gr",
      },
      {
        weight: "500 gr",
      },
      {
        weight: "1 kg",
      },
    ],
  };

  const productReviews = [
    {
      id: 1,
      avatar: "./Avatar/Avatar1.png",
      name: "Sarah",
      image: "./Product/Basreng.png",
      rating: 5,
      variant: "Pedas Daun Jeruk/250 gr",
      taste: "Enak",
      packaging: "Gercep",
      delivery: "Satset",
      review:
        "Saya sangat puas dengan produk ini. Rasanya enak dan pedasnya pas. Pengemasan juga sangat rapi dan pengiriman cepat. Terima kasih!",
    },
    {
      id: 2,
      avatar: "./Avatar/Avatar2.png",
      name: "Kelvin",
      image: "./Product/Basreng-Sajodo.png",
      rating: 4,
      variant: "Original/250 gr",
      taste: "Lezat",
      packaging: "Praktis",
      delivery: "Cepat",
      review:
        "Varian rasa yang saya pilih sangat sesuai dengan selera saya. Pengemasannya juga praktis dan pengiriman sangat cepat. Recommended!",
    },
  ];

  // Data Product
  const Product = [
    {
      productId: 1,
      productImage: "./Product/Basreng-Sulah-Viral.png",
      productName: "Basreng Sulah Viral 500gram pedas",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 2,
      productImage: "./Product/Keripik-Kentang-Balado.png",
      productName: "Keripik Kentang",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 3,
      productImage: "./Product/Pisang-Dolar.png",
      productName: "Pisang Dolar",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 4,
      productImage: "./Product/Sale-Lidah.png",
      productName: "Sale Lidah",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 5,
      productImage: "./Product/Kuping-Mini.png",
      productName: "Kuping Mini",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 6,
      productImage: "./Product/Kuping-Gajah.png",
      productName: "Kuping Gajah",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 7,
      productImage: "./Product/Kerupuk-Seblak.png",
      productName: "Kerupuk Seblak",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 8,
      productImage: "./Product/Cookies-Coklat.png",
      productName: "Cookies Coklat",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 9,
      productImage: "./Product/Nastar-Premium.png",
      productName: "Nastar Premium",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 10,
      productImage: "./Product/Kue-Kering.png",
      productName: "Aneka Kue Kering",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 11,
      productImage: "./Product/GG-SUS.png",
      productName: "Sus Kering Isi Coklat",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
    {
      productId: 12,
      productImage: "./Product/Kacang-Polong.png",
      productName: "Kacang Polong",
      originalPrice: 13000,
      discountPercentage: 12,
      location: "kab. Bandung",
      rating: 4.5,
      soldCount: 50,
    },
  ];
  // End Data Produk

  const [selectedImage, setSelectedImage] = useState(0);
  const [cart, setCart] = useState([]);

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    // Tambahkan produk ke keranjang
    setCart([...cart, product]);

    // Set toast message menjadi true
    setShowToast(true);

    // Setelah 2 detik, atur toast message menjadi false
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const discountedAmount =
    (product.discountPercentage / 100) * product.originalPrice;
  const discountedPrice = product.originalPrice - discountedAmount;

  return (
    <>
      <UserNavbar />
      <div className="font-Poppins text-lg px-10 py-32">
        <div className="flex flex-col lg:flex-row p-4 rounded-lg">
          <div className="flex-1">
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt="Basreng Sajodo"
                className="w-full rounded-lg"
              />
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded shadow-md"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded shadow-md"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
            <div className="flex space-x-2 mt-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                    selectedImage === index ? "border-2 border-red-500" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 font-Poppins lg:ml-8">
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="text-gray-600">{product.desc}</p>
            <div className="text-xl font-medium mt-4">
              Rp {discountedPrice.toLocaleString("id-ID")}
            </div>
            <div className="flex items-center text-xs mt-2">
              <p className="text-gray-500 line-through mr-2">
                Rp {product.originalPrice.toLocaleString("id-ID")}
              </p>
              <p className="text-green-500">
                -{product.discountPercentage.toFixed()}% OFF
              </p>
            </div>
            <div className="flex items-center mt-2">
              <Rating rating={product.rating} totalStars={5} />
            </div>
            <div className="flex space-x-2 mt-4">
              <Link
                to="/order-detail"
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Beli Sekarang
              </Link>
            </div>

            <div className="flex items-center mt-4">
              <img
                src={detailProductInfo.logo}
                alt={detailProductInfo.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-medium">{detailProductInfo.name}</h3>
                <p className="text-gray-600">{detailProductInfo.location}</p>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-medium">Detail Produk</h2>
              <p className="text-gray-700">{detailProductInfo.desc}</p>
              <ul className="list-disc list-inside mt-2">
                {detailProductInfo.variants.map((variant, index) => (
                  <li key={index}>{variant}</li>
                ))}
              </ul>
              <div className="mt-2">
                <h3 className="font-medium">Tersedia dalam kemasan:</h3>
                <ul className="list-disc list-inside">
                  {detailProductInfo.availableInPackaging.map(
                    (packaging, index) => (
                      <li key={index}>{packaging.weight}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full py-4">
          <h2 className="text-2xl font-medium">Penilaian Produk</h2>
          {productReviews.map((review) => (
            <div key={review.id} className="flex items-start mt-4 w-full py-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <p className="text-gray-800 font-medium text-lg">
                  {review.name}
                </p>
                <div className="text-base">
                  <p className="text-gray-600">Rasa: {review.taste}</p>
                  <p className="text-gray-600">
                    Pengemasan: {review.packaging}
                  </p>
                  <p className="text-gray-600">Pengiriman: {review.delivery}</p>
                  <div className="flex size-52">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="mr-2"
                    />
                    <img
                      src={review.image}
                      alt={review.name}
                      className="mr-2"
                    />
                  </div>
                  <p className="text-gray-600 mt-1">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full text-end text-base font-Poppins">
            <Link to="" className=" py-2">
              Lihat Penilaian Lainnya &gt;
            </Link>
          </div>
        </div>
        <div className="font-Poppins text-lg px-3 pt-10">
          <h1 className="font-medium py-4 text-2xl text-center">
            Rekomendasi Produk Serupa
          </h1>
          {/* Product */}
          <div className="container flex flex-wrap">
            {Product.map((product) => {
              // Calculate the discount amount
              const discountedAmount =
                (product.discountPercentage / 100) * product.originalPrice;

              // Calculate the price after discount
              const discountedPrice = product.originalPrice - discountedAmount;

              return (
                <div
                  key={product.productId}
                  className="w-full md:w-1/2 lg:w-1/6 p-1"
                >
                  <div className="bg-white border rounded-lg overflow-hidden hover:bg-white hover:shadow-xl">
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="p-4">
                      <h5 className="text-base font-normal text-start line-clamp-2">
                        {product.productName}
                      </h5>
                      <p className="text-black font-medium text-base">
                        Rp
                        {discountedPrice.toLocaleString("id-ID")}
                      </p>
                      <div className="flex items-center text-xs mt-2">
                        <p className="text-gray-500 line-through mr-2">
                          Rp
                          {product.originalPrice.toLocaleString("id-ID")}
                        </p>
                        <p className="text-green-500">
                          -{product.discountPercentage.toFixed()}% OFF
                        </p>
                      </div>
                      <div className="flex items-center text-xs mt-2">
                        <MdLocationOn />
                        <p className="text-gray-400 mr-2">{product.location}</p>
                      </div>
                      <div className="flex items-center text-xs mt-2">
                        <Rating rating={product.rating} totalStars={5} />
                        <p className="text-gray-400 ml-2">
                          {product.soldCount} Terjual
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* End Product */}
          {/* See More */}
          <div className="flex items-center justify-center mt-10">
            <Link
              to=""
              className="px-20 py-2 border border-[#E53935] text-[#E53935] hover:bg-red-50 rounded-full"
            >
              Lihat Lainnya
            </Link>
          </div>
          {/* End See More */}
        </div>
      </div>

      <UserFooter />
    </>
  );
};

export default DetailProduct;
