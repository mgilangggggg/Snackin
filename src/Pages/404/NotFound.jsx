import React from "react";

const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-medium text-[#E53935]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Maaf, kami tidak dapat menemukan halaman yang Anda cari.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/home"
              className="rounded-md bg-[#E53935] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 hover:text-[#E53935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Kembali ke Beranda
            </a>
            <a href="#" className="text-sm font-medium text-gray-900">
              Hubungi dukungan <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
