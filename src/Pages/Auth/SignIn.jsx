import React from "react";

const colors = {
  background: "#f5f5f5",
  primary: "#060606",
  button: "#E53935",
  button_hover: "#FF8A65",
};

const SignIn = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[25%] left-[10%] flex flex-col">
          {/* <h1 className="text-4xl text-black font-bold my-1">Test</h1> */}
          {/* <p>testttttttt</p> */}
        </div>
        <img
          src="src\Assets\Ecommerce.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 justify-between">
        <h1 className="text-xl text-[#060606] font-semibold">
          LOGO
          <img src="src\Assets\" alt="" />
        </h1>

        <div className="w-full flex flex-col max-w[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3x1 font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Selamat Datang Kembali! Silahkan masukan detail Anda.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />

            <input
              type="password"
              placeholder="password"
              className="w-full text-black rounded-lg border-b border-black outline-none focus:outline-none py-2 bg-none my-4"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Ingat Saya</p>
            </div>

            <p className="text-sm font-medium whitespace-nowrap cursor-pointer">
              Lupa Password?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full bg-[#E53935] rounded-lg p-2 text-center flex items-center justify-center font-semibold text-white hover:bg-[#FF8A65] my-2">
              Masuk
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-sm absolute text-black/80 bg-[#f5f5f5]">atau</p>
          </div>

          <div className="w-full bg-[#f5f5f5] border-2 border-black rounded-lg p-2 text-center flex items-center justify-center font-semibold text-[#060606] hover:bg-[#1877f2] my-2 ">
            <img src="" alt="" />
            Facebook
          </div>

          <div className="w-full bg-[#f5f5f5] border-2 border-black rounded-lg p-2 text-center flex items-center justify-center font-semibold text-[#060606] hover:bg-[#1877f2] my-2 ">
            <img src="" alt="" />
            Google
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Belum memiliki akun?
              <span className="font-semibold cursor-pointer"> Daftar</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
