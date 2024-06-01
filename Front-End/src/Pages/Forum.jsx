import React from "react";
import UserNavbar from "../Components/UserNavbar";
import UserFooter from "../Components/UserFooter";
import ForumPost from "../Components/ForumPost";

const Forum = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: "Gumilang Snack",
        role: "Penjual",
        avatar: "./Toko/Gumilang-Snack.png",
      },
      content: "Ayo coba produk baru toko kami",
      products: [
        {
          name: "Keripik Singkong Balado",
          price: "Rp. 16.000",
          image: "./Product/Singkong-Balado.png",
        },
        {
          name: "Keripik Singkong Ori",
          price: "Rp. 16.000",
          image: "./Product/Singkong-Original.png",
        },
      ],
      comments: 15,
      likes: 28,
    },
    {
      id: 2,
      user: {
        name: "inijijel",
        role: "Pembeli",
        avatar: "./Avatar/Avatar1.png",
      },
      content: "Ada rekomendasi toko yang jual nastar premium gak guyss??",
      comments: 4,
      likes: 10,
    },
    {
      id: 3,
      user: {
        name: "ciliwendy",
        role: "Pembeli",
        avatar: "./Avatar/Avatar2.png",
      },
      content:
        "haloo, mau nanya dong guys misal beli produk dalam jumlah banyak tuh pengirimannya aman gak yah? Mau dijual lagi soalnya, yang udah pernah beli banyak komen dong, makasii",
      comments: 9,
      likes: 18,
    },
    {
      id: 4,
      user: {
        name: "Keripik Maicih",
        role: "Penjual",
        avatar: "./Toko/Maicih.png",
      },
      content:
        "Mimin mau bagi-bagi voucher belanja nih, hayuk stay tune semuanya",
      comments: 25,
      likes: 20,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <UserNavbar />
      {/* End Navbar */}
      <div className="font-Poppins text-lg px-10 py-32">
        <h1 className="font-medium py-4 text-2xl">Forum Diskusi</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Apa yang ingin anda tanyakan atau bagikan?"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
      </div>
      <div className="px-10">
        {posts.map((post) => (
          <ForumPost key={post.id} post={post} />
        ))}
      </div>
      {/* Footer */}
      <UserFooter />
      {/* End Footer */}
    </>
  );
};

export default Forum;
