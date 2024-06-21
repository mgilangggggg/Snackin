import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/signin", {
        email,
        password,
      });
      console.log(res.data);
      setPopupMessage("Berhasil masuk!");
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
        navigate("/home");
      }, 1100);
    } catch (e) {
      if (e.response) {
        setPopupMessage("Email atau password salah.");
      }

      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
      }, 1000);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935]"
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935] my-4"
              />
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
              <div className="w-full flex flex-col my-4">
                <button
                  type="submit"
                  className="w-full bg-[#E53935] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-poppins font-medium text-white shadow-sm hover:text-[#E53935] hover:bg-gray-100 my-2"
                >
                  Masuk
                </button>
              </div>
            </form>
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

      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default SignIn;
