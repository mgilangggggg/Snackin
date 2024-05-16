import React from "react";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex items-start">
      {/* Image */}
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src="/src/Assets/SignIn.png"
          alt="SignIn"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo */}
      <div className="w-1/2 h-full bg-[#e8d5d5] flex flex-col p-10 justify-between items-center">
        <img
          src="/src/Assets/Snackin.png"
          alt="Logo"
          className="max-w-[400px] mx-auto w-28"
        />
        <div className="w-full flex flex-col max-w-[400px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Masuk!</h3>
            <p className="text-base mb-2">
              Selamat Datang Kembali! Silahkan Masuk.
            </p>
          </div>

          {/* Input field for email and password */}
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#E53935]"
            />

            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#E53935] my-4"
            />
          </div>

          {/* Checkbox for 'Remember Me' and 'Forgot Password?' link */}
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Ingat Saya</p>
            </div>

            <p className="text-sm font-medium whitespace-nowrap cursor-pointer">
              Lupa Password?
            </p>
          </div>

          {/* SignIn button */}
          <div className="w-full flex flex-col my-4">
            <button
              type="submit"
              className="w-full bg-[#E53935] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-semibold text-white hover:bg-[#FF8A65] my-2"
            >
              Masuk
            </button>
          </div>

          {/* Horizontal line and 'or' text */}
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-sm absolute text-black/80 bg-[#e8d5d5]">atau</p>
          </div>

          {/* Login with Facebook button */}
          <button className="w-full bg-[#f5f5f5] border border-gray-300 rounded-md p-2 text-center flex items-center justify-center font-semibold text-[#060606] hover:bg-[#1877f2] hover:text-white my-2 ">
            <img
              src="src\Assets\Icon-Facebook.png"
              alt="Icon-Facebook"
              className="w-5 mr-3"
            />
            Masuk dengan Facebook
          </button>

          {/* Login with Google button */}
          <button className="w-full bg-[#f5f5f5] border border-gray-300 rounded-md p-2 text-center flex items-center justify-center font-semibold text-[#060606] hover:bg-[#262626] hover:text-white my-2 ">
            <img
              src="src\Assets\Icon-Google.png"
              alt="Icon-Google"
              className="w-5 mr-3"
            />
            Masuk dengan Google
          </button>

          {/* SignUp link */}
          <div className="w-full flex items-center justify-center my-4">
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
