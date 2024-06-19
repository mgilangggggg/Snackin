import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold text-center mt-8 mb-4 pt-10">
        Akshara Vijaya Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <a
          href="https://www.instagram.com/karinavoir"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 cursor-pointer"
        >
          <img
            src="/Team/PM.jpg"
            alt="Gambar 1"
            className="rounded-lg w-full mb-2"
          />
          <p className="text-base text-center mt-2">
            Karina
            <br />
            Gusmiarni
            <h1 className="text-xs bg-[#E53935] text-white">
              <i>Role: Husler</i>
            </h1>
          </p>
        </a>
        <a
          href="https://www.instagram.com/rmdhnsyhru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 cursor-pointer"
        >
          <img
            src="/Team/Hipster1.jpg"
            alt="Gambar 2"
            className="rounded-lg w-full mb-2"
          />
          <p className="text-base text-center mt-2">Syahru Ramadhan</p>
          <h1 className="text-xs bg-[#E53935] text-white">
            <i>Role: Hipster</i>
          </h1>
        </a>
        <a
          href="https://www.instagram.com/hafizhnnz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 cursor-pointer"
        >
          <img
            src="/Team/Hipster2.jpg"
            alt="Gambar 3"
            className="rounded-lg w-full mb-2"
          />
          <p className="text-base text-center mt-2">Hafizh Naufal Zain</p>
          <h1 className="text-xs bg-[#E53935] text-white">
            <i>Role: Hipster</i>
          </h1>
        </a>
        <a
          href="https://www.instagram.com/mgilangggggg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 cursor-pointer"
        >
          <img
            src="/Team/Hacker1.jpg"
            alt="Gambar 4"
            className="rounded-lg w-full mb-2"
          />
          <p className="text-base text-center mt-2">M. Gilang Abdul Gani</p>
          <h1 className="text-xs bg-[#E53935] text-white">
            <i>Role: Hacker</i>
          </h1>
        </a>
        <a
          href="https://www.instagram.com/nbellaaa.a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 cursor-pointer"
        >
          <img
            src="/Team/Hacker2.jpg"
            alt="Gambar 5"
            className="rounded-lg w-full mb-2"
          />
          <p className="text-base text-center mt-2">
            Nur Bella
            <br />
            Amelya
          </p>
          <h1 className="text-xs bg-[#E53935] text-white">
            <i>Role: Hacker</i>
          </h1>
        </a>
        <a
          href="https://www.instagram.com/ajipajari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 cursor-pointer"
        >
          <img
            src="/Team/Hacker3.jpg"
            alt="Gambar 6"
            className="rounded-lg w-full mb-2"
          />
          <p className="text-base text-center mt-2">
            Aji Pajari
            <br />
            Roup
          </p>
          <h1 className="text-xs bg-[#E53935] text-white">
            <i>Role: Hacker</i>
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Team;
