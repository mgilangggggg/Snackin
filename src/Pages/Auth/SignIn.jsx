import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main className="flex flex-row-reverse w-full h-screen">
      {/* Img */}
      <div className="relative w-1/2 h-full">
        <img
          src="./Auth/SignIn.png"
          alt="SignIn"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col w-1/2 h-full bg-[#e8d5d5] p-14 justify-between items-center">
        <div className="w-full flex flex-col max-w-[400px]">
          <div className="flex flex-col w-full mb-2">
            <h3 className="text-3xl font-poppins font-medium mb-2">Masuk!</h3>
            <p className="font-poppins font-light mb-2">
              Selamat Datang Kembali! Silahkan Masuk.
            </p>
          </div>

          {/* Input field for email and password */}
          <div className="flex flex-col w-full">
            <div>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935]"
              />
            </div>

            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935] my-4"
            />
          </div>

          {/* Checkbox for 'Remember Me' and 'Forgot Password?' link */}
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <label className="flex items-center gap-x-2 text-sm font-poppins font-light accent-[#E53935]">
                <input type="checkbox" className="w-4 h-4" />
                Ingat Saya
              </label>
            </div>

            <Link
              to="/forgot"
              className="text-sm font-poppins font-light whitespace-nowrap"
            >
              Lupa Password?
            </Link>
          </div>

          {/* SignIn button */}
          <div className="w-full flex flex-col my-4">
            <Link
              to="/home"
              type="submit"
              className="w-full bg-[#E53935] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-poppins font-medium text-white hover:bg-[#FF8A65] my-2"
            >
              Masuk
            </Link>
          </div>

          {/* Horizontal line and 'or' text */}
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-sm font-poppins font-light absolute text-black/80 bg-[#e8d5d5]">
              atau
            </p>
          </div>

          {/* Login with Facebook button */}
          <Link
            to=""
            className="w-full bg-[#f5f5f5] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-poppins font-medium text-[#060606] hover:bg-[#1877f2] hover:text-white my-2 "
          >
            <img
              src="./Icon-Facebook.png"
              alt="Icon-Facebook"
              className="w-5 mr-3"
            />
            Masuk dengan Facebook
          </Link>

          {/* Login with Google button */}
          <Link
            to=""
            className="w-full bg-[#f5f5f5] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-poppins font-medium text-[#060606] hover:bg-[#262626] hover:text-white my-2 "
          >
            <img
              src="./Icon-Google.png"
              alt="Icon-Google"
              className="w-5 mr-3"
            />
            Masuk dengan Google
          </Link>

          {/* SignUp link */}
          <div className="w-full flex items-center justify-center my-4">
            <p className="text-sm font-poppins font-light text-[#060606]">
              Belum memiliki akun?
              <Link
                to="/signup"
                className="font-poppins font-light text-[#E53935] p-2"
              >
                Daftar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
