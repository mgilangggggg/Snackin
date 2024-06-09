import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="w-full h-screen flex items-start">
      {/* Img */}
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src="./Auth/SignUp.png"
          alt="SignIn"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2  bg-[#e8d5d5] flex flex-col p-5 justify-between items-center">
        <div className="w-full flex flex-col max-w-[400px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-poppins font-medium mb-2">Daftar!</h3>
            <p className="font-poppins font-light mb-2">
              Belum memiliki akun? Silahkan Daftar.
            </p>
          </div>

          {/* Input field for username, email, no.telepon and password */}
          <div className="w-full flex flex-col">
            <form className="space-y-6">
              <input
                type="username"
                placeholder="Username"
                id="username"
                name="username"
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935]"
              />

              <input
                type="tel"
                placeholder="No. Telp"
                id="phoneNumber"
                name="phoneNumber"
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935]"
              />

              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935] my-4"
              />

              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935]"
              />
            </form>
          </div>

          {/* SignUp button */}
          <div className="w-full flex flex-col my-4">
            <Link
              to="/signin"
              type="submit"
              className="w-full bg-[#E53935] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-poppins font-medium text-white shadow-sm hover:text-[#E53935] hover:bg-gray-100 my-2"
            >
              Daftar
            </Link>
          </div>

          {/* Horizontal line and 'or' text */}
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-sm font-light font-poppins absolute text-black/80 bg-[#e8d5d5]">
              atau
            </p>
          </div>

          {/* Login with Facebook button */}
          <Link
            to=""
            className="w-full bg-[#f5f5f5] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-medium font-poppins text-[#060606] hover:bg-[#1877f2] hover:text-white my-2 "
          >
            <img
              src="./Icon-Facebook.png"
              alt="Icon-Facebook"
              className="w-5 mr-3"
            />
            Daftar dengan Facebook
          </Link>

          {/* Login with Google button */}
          <Link
            to=""
            className="w-full bg-[#f5f5f5] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-medium font-poppins text-[#060606] hover:bg-[#262626] hover:text-white my-2 "
          >
            <img
              src="./Icon-Google.png"
              alt="Icon-Google"
              className="w-5 mr-3"
            />
            Daftar dengan Google
          </Link>

          {/* SignUp link */}
          <div className="w-full flex items-center justify-center my-4">
            <p className="text-sm font-poppins text-[#060606]">
              Sudah memiliki akun?
              <Link
                to="/signin"
                className="font-poppins font-light text-[#E53935] p-2"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;