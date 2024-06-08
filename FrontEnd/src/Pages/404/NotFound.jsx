import React from "react";

const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-medium font-poppins text-5xl text-[#E53935]">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold font-poppins tracking-tight text-gray-900 sm:text-5xl">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-6 font-poppins font-light leading-7 text-gray-600">
            Maaf, kami tidak dapat menemukan halaman yang Anda cari.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/home"
              className="rounded-lg bg-[#E53935] px-3.5 py-2.5 text-sm font-medium font-poppins text-white shadow-sm hover:bg-gray-100 hover:text-[#E53935]"
            >
              Kembali ke Beranda
            </a>
            <a
              href="#"
              className="text-sm font-medium font-poppins text-gray-900"
            >
              Hubungi dukungan <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
